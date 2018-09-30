/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { MapsAPILoader } from '@agm/core';
import { Marker } from '../../../models/map-marker';
export class LocationFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} mapsAPILoader
     * @param {?} ngZone
     */
    constructor(bridgeService, mapsAPILoader, ngZone) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        // set a map field's location to use default location if no value is set and location is available.
        if (!this.field.defaultLocation || !this.field.defaultLocation.latitude || !this.field.defaultLocation.longitude) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.field.defaultLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                });
            }
        }
    }
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    updateValue(newValue) {
        for (const value of newValue.value) {
            this.addMarkersFromLocation(value.latitude, value.longitude);
        }
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = [];
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + '].latitude', value.latitude);
                data.append(this.field.name + '[' + i + '].longitude', value.longitude);
            }
        }
        return data;
    }
    /**
     * \@description Add a marker from the clicked map location.
     * @param {?} eventArguments
     * @return {?}
     */
    addMarkers(eventArguments) {
        if (!this.isFormInDisplayMode()) {
            this.addMarkersFromLocation(eventArguments.coords.lat, eventArguments.coords.lng);
        }
    }
    /**
     * \@description Activates the google map location search.
     * @return {?}
     */
    activateSearchInput() {
        if (this.searchElement) {
            // load Places Autocomplete
            this.mapsAPILoader.load().then(() => {
                /** @type {?} */
                const field = this.bridgeService.configuration.mergedFields.find(f => f.name === this.searchElement.nativeElement.id);
                /** @type {?} */
                const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {});
                autocomplete.addListener('place_changed', () => {
                    this.ngZone.run(() => {
                        /** @type {?} */
                        const place = autocomplete.getPlace();
                        // verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        /** @type {?} */
                        const latitude = place.geometry.location.lat();
                        /** @type {?} */
                        const longitude = place.geometry.location.lng();
                        field.defaultLocation = {
                            latitude: latitude,
                            longitude: longitude
                        };
                        field.zoom = 12;
                        /** @type {?} */
                        const marker = new Marker(place.geometry.location.lat(), place.geometry.location.lng(), field.markerSettings.defaultNewMarker.draggable, field.markerSettings.defaultNewMarker.infoHtml);
                        this.addMarkersFromLocation(latitude, longitude);
                    });
                });
            });
        }
    }
    /**
     * \@description Add a marker from the clicked map location.
     * @param {?} latitude
     * @param {?} longitude
     * @return {?}
     */
    addMarkersFromLocation(latitude, longitude) {
        if (!this.field.data.value) {
            this.field.data.value = [];
        }
        if (this.field.validation.max > 0 && this.field.data.value.length < this.field.validation.max) {
            /** @type {?} */
            const marker = new Marker(latitude, longitude, this.field.markerSettings.defaultNewMarker.draggable, this.field.markerSettings.defaultNewMarker.infoHtml);
            marker.eventTriggers = this.field.markerSettings.defaultNewMarker.eventTriggers;
            this.field.data.value.push(marker);
        }
    }
    /**
     * \@description Update the marker's position when drag is done.
     * @param {?} marker
     * @param {?} eventArguments
     * @return {?}
     */
    updateMarkerPosition(marker, eventArguments) {
        marker.latitude = eventArguments.coords.lat;
        marker.longitude = eventArguments.coords.lng;
    }
}
LocationFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-location-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <div class="search-location-container"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'">
    <!-- input && display -->
    <input #search
           [id]="field.name"
           [name]="field.name"
           [title]="field.tooltip | translate"
           [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
           autocorrect="off"
           autocapitalize="off"
           spellcheck="false"
           type="text"
           [class]="field.cssClasses.input"
           (keydown.enter)="$event.preventDefault()">

    <!-- icon -->
    <span class="search-location-icon">
    </span>
  </div>

  <agm-map [latitude]="field.defaultLocation?.latitude"
           [longitude]="field.defaultLocation?.longitude"
           [zoom]="field.zoom"
           [zoomControl]="field.zoomControl"
           [ngClass]="{'invalid': isValidationShown()}"
           (mapClick)="addMarkers($event);validate();">

    <agm-marker *ngFor="let marker of field.data.value"
                (markerClick)="triggerDynamicEvent('markerClick', $event, marker);"
                [latitude]="marker.latitude"
                [longitude]="marker.longitude"
                [markerDraggable]="marker.draggable && bridgeService?.configuration?.settings?.formMode != 'Display'"
                (dragEnd)="updateMarkerPosition(marker, $event)">

      <agm-info-window *ngIf="marker.infoHtml">
        <div [innerHTML]="marker.infoHtml | translate"></div>
      </agm-info-window>
    </agm-marker>
  </agm-map>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`agm-map{width:100%;height:300px}span.search-location-icon:after{content:"\\f002";font:14px/2.5 FontAwesome;position:absolute;height:100%;color:#555}.search-location-container{position:relative}body.en :host ::ng-deep span.search-location-icon:after{right:5px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}body.ar :host ::ng-deep span.search-location-icon:after{left:5px}input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}`]
            },] },
];
/** @nocollapse */
LocationFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: MapsAPILoader },
    { type: NgZone }
];
LocationFieldComponent.propDecorators = {
    searchElement: [{ type: ViewChild, args: ['search',] }]
};
if (false) {
    /**
     * \@property The search element.
     * @type {?}
     */
    LocationFieldComponent.prototype.searchElement;
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    LocationFieldComponent.prototype.validateForRange;
    /** @type {?} */
    LocationFieldComponent.prototype.bridgeService;
    /** @type {?} */
    LocationFieldComponent.prototype.mapsAPILoader;
    /** @type {?} */
    LocationFieldComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbG9jYXRpb24tZmllbGQvbG9jYXRpb24tZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvRXBELE1BQU0sNkJBQThCLFNBQVEsY0FBYzs7Ozs7O0lBT3hELFlBQ1MsZUFDQyxlQUNBO1FBRVIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSmQsa0JBQWEsR0FBYixhQUFhO1FBQ1osa0JBQWEsR0FBYixhQUFhO1FBQ2IsV0FBTSxHQUFOLE1BQU07Ozs7Z0NBTG1CLElBQUk7S0FRdEM7Ozs7O0lBR00scUJBQXFCOztRQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqSCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNwRCxJQUFJ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aWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vdXNlRXZlbnQsIE1hcHNBUElMb2FkZXIgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyB9IGZyb20gJ2dvb2dsZW1hcHMnO1xyXG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvbWFwLW1hcmtlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1sb2NhdGlvbi1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJzZWFyY2gtbG9jYXRpb24tY29udGFpbmVyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiPlxyXG4gICAgPCEtLSBpbnB1dCAmJiBkaXNwbGF5IC0tPlxyXG4gICAgPGlucHV0ICNzZWFyY2hcclxuICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXHJcbiAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxyXG4gICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG5cclxuICAgIDwhLS0gaWNvbiAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWxvY2F0aW9uLWljb25cIj5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGFnbS1tYXAgW2xhdGl0dWRlXT1cImZpZWxkLmRlZmF1bHRMb2NhdGlvbj8ubGF0aXR1ZGVcIlxyXG4gICAgICAgICAgIFtsb25naXR1ZGVdPVwiZmllbGQuZGVmYXVsdExvY2F0aW9uPy5sb25naXR1ZGVcIlxyXG4gICAgICAgICAgIFt6b29tXT1cImZpZWxkLnpvb21cIlxyXG4gICAgICAgICAgIFt6b29tQ29udHJvbF09XCJmaWVsZC56b29tQ29udHJvbFwiXHJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgIChtYXBDbGljayk9XCJhZGRNYXJrZXJzKCRldmVudCk7dmFsaWRhdGUoKTtcIj5cclxuXHJcbiAgICA8YWdtLW1hcmtlciAqbmdGb3I9XCJsZXQgbWFya2VyIG9mIGZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgKG1hcmtlckNsaWNrKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ21hcmtlckNsaWNrJywgJGV2ZW50LCBtYXJrZXIpO1wiXHJcbiAgICAgICAgICAgICAgICBbbGF0aXR1ZGVdPVwibWFya2VyLmxhdGl0dWRlXCJcclxuICAgICAgICAgICAgICAgIFtsb25naXR1ZGVdPVwibWFya2VyLmxvbmdpdHVkZVwiXHJcbiAgICAgICAgICAgICAgICBbbWFya2VyRHJhZ2dhYmxlXT1cIm1hcmtlci5kcmFnZ2FibGUgJiYgYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAoZHJhZ0VuZCk9XCJ1cGRhdGVNYXJrZXJQb3NpdGlvbihtYXJrZXIsICRldmVudClcIj5cclxuXHJcbiAgICAgIDxhZ20taW5mby13aW5kb3cgKm5nSWY9XCJtYXJrZXIuaW5mb0h0bWxcIj5cclxuICAgICAgICA8ZGl2IFtpbm5lckhUTUxdPVwibWFya2VyLmluZm9IdG1sIHwgdHJhbnNsYXRlXCI+PC9kaXY+XHJcbiAgICAgIDwvYWdtLWluZm8td2luZG93PlxyXG4gICAgPC9hZ20tbWFya2VyPlxyXG4gIDwvYWdtLW1hcD5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYWdtLW1hcHt3aWR0aDoxMDAlO2hlaWdodDozMDBweH1zcGFuLnNlYXJjaC1sb2NhdGlvbi1pY29uOmFmdGVye2NvbnRlbnQ6XCJcXFxcZjAwMlwiO2ZvbnQ6MTRweC8yLjUgRm9udEF3ZXNvbWU7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7Y29sb3I6IzU1NX0uc2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCBzcGFuLnNlYXJjaC1sb2NhdGlvbi1pY29uOmFmdGVye3JpZ2h0OjVweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIHNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7bGVmdDo1cHh9aW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgc2VhcmNoIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtYXBzQVBJTG9hZGVyOiBNYXBzQVBJTG9hZGVyLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICAvLyBzZXQgYSBtYXAgZmllbGQncyBsb2NhdGlvbiB0byB1c2UgZGVmYXVsdCBsb2NhdGlvbiBpZiBubyB2YWx1ZSBpcyBzZXQgYW5kIGxvY2F0aW9uIGlzIGF2YWlsYWJsZS5cclxuICAgIGlmICghdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24gfHwgIXRoaXMuZmllbGQuZGVmYXVsdExvY2F0aW9uLmxhdGl0dWRlIHx8ICF0aGlzLmZpZWxkLmRlZmF1bHRMb2NhdGlvbi5sb25naXR1ZGUpIHtcclxuICAgICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgIHRoaXMuZmllbGQuZGVmYXVsdExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICBsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgZmllbGQncyB2YWx1ZS5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgZmllbGQgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBuZXdWYWx1ZS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmFkZE1hcmtlcnNGcm9tTG9jYXRpb24odmFsdWUubGF0aXR1ZGUsIHZhbHVlLmxvbmdpdHVkZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpZWxkLmRhdGEudmFsdWVbaV07XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICdbJyArIGkgKyAnXS5sYXRpdHVkZScsIHZhbHVlLmxhdGl0dWRlKTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddLmxvbmdpdHVkZScsIHZhbHVlLmxvbmdpdHVkZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWRkIGEgbWFya2VyIGZyb20gdGhlIGNsaWNrZWQgbWFwIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSBNb3VzZUV2ZW50IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgKi9cclxuICBwdWJsaWMgYWRkTWFya2VycyhldmVudEFyZ3VtZW50czogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSkge1xyXG4gICAgICB0aGlzLmFkZE1hcmtlcnNGcm9tTG9jYXRpb24oZXZlbnRBcmd1bWVudHMuY29vcmRzLmxhdCwgZXZlbnRBcmd1bWVudHMuY29vcmRzLmxuZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFjdGl2YXRlcyB0aGUgZ29vZ2xlIG1hcCBsb2NhdGlvbiBzZWFyY2guKi9cclxuICBwdWJsaWMgYWN0aXZhdGVTZWFyY2hJbnB1dCgpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaEVsZW1lbnQpIHtcclxuICAgICAgLy8gbG9hZCBQbGFjZXMgQXV0b2NvbXBsZXRlXHJcbiAgICAgIHRoaXMubWFwc0FQSUxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gdGhpcy5zZWFyY2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaWQpO1xyXG5cclxuICAgICAgICBjb25zdCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSh0aGlzLnNlYXJjaEVsZW1lbnQubmF0aXZlRWxlbWVudCwge30pO1xyXG4gICAgICAgIGF1dG9jb21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgcGxhY2UgcmVzdWx0XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlOiBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VSZXN1bHQgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXN1bHRcclxuICAgICAgICAgICAgaWYgKHBsYWNlLmdlb21ldHJ5ID09PSB1bmRlZmluZWQgfHwgcGxhY2UuZ2VvbWV0cnkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBsYXRpdHVkZSwgbG9uZ2l0dWRlIGFuZCB6b29tXHJcbiAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGZpZWxkLmRlZmF1bHRMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgICBsYXRpdHVkZTogbGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBsb25naXR1ZGVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZpZWxkLnpvb20gPSAxMjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIoXHJcbiAgICAgICAgICAgICAgcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksXHJcbiAgICAgICAgICAgICAgcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nKCksXHJcbiAgICAgICAgICAgICAgZmllbGQubWFya2VyU2V0dGluZ3MuZGVmYXVsdE5ld01hcmtlci5kcmFnZ2FibGUsXHJcbiAgICAgICAgICAgICAgZmllbGQubWFya2VyU2V0dGluZ3MuZGVmYXVsdE5ld01hcmtlci5pbmZvSHRtbFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXJzRnJvbUxvY2F0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGQgYSBtYXJrZXIgZnJvbSB0aGUgY2xpY2tlZCBtYXAgbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIG51bWJlciBsYXRpdHVkZSBUaGUgbGF0aXR1ZGUuXHJcbiAgICogQHBhcmFtIG51bWJlciBsb25naXR1ZGUgVGhlIGxvbmdpdHVkZS5cclxuICAqL1xyXG4gIHByaXZhdGUgYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXggPiAwICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggPCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4KSB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIoXHJcbiAgICAgICAgbGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlLFxyXG4gICAgICAgIHRoaXMuZmllbGQubWFya2VyU2V0dGluZ3MuZGVmYXVsdE5ld01hcmtlci5kcmFnZ2FibGUsXHJcbiAgICAgICAgdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmluZm9IdG1sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBtYXJrZXIuZXZlbnRUcmlnZ2VycyA9IHRoaXMuZmllbGQubWFya2VyU2V0dGluZ3MuZGVmYXVsdE5ld01hcmtlci5ldmVudFRyaWdnZXJzO1xyXG5cclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlLnB1c2gobWFya2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlIHRoZSBtYXJrZXIncyBwb3NpdGlvbiB3aGVuIGRyYWcgaXMgZG9uZS5cclxuICAgKiBAcGFyYW0gTWFya2VyIG1hcmtlciBUaGUgbWFya2VyIHRvIHVwZGF0ZS5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZU1hcmtlclBvc2l0aW9uKG1hcmtlcjogTWFya2VyLCBldmVudEFyZ3VtZW50czogTW91c2VFdmVudCkge1xyXG4gICAgbWFya2VyLmxhdGl0dWRlID0gZXZlbnRBcmd1bWVudHMuY29vcmRzLmxhdDtcclxuICAgIG1hcmtlci5sb25naXR1ZGUgPSBldmVudEFyZ3VtZW50cy5jb29yZHMubG5nO1xyXG4gIH1cclxufVxyXG4iXX0=