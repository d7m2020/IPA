/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { MapsAPILoader } from '@agm/core';
import { Marker } from '../../../models/map-marker';
var LocationFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LocationFieldComponent, _super);
    function LocationFieldComponent(bridgeService, mapsAPILoader, ngZone) {
        var _this = _super.call(this, bridgeService) || this;
        _this.bridgeService = bridgeService;
        _this.mapsAPILoader = mapsAPILoader;
        _this.ngZone = ngZone;
        /**
         * \@property Whether to validate for range.
         */
        _this.validateForRange = true;
        return _this;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    LocationFieldComponent.prototype.handleDefaultSettings = /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    function () {
        var _this = this;
        // set a map field's location to use default location if no value is set and location is available.
        if (!this.field.defaultLocation || !this.field.defaultLocation.latitude || !this.field.defaultLocation.longitude) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    _this.field.defaultLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                });
            }
        }
    };
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    LocationFieldComponent.prototype.updateValue = /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        try {
            for (var _a = tslib_1.__values(newValue.value), _b = _a.next(); !_b.done; _b = _a.next()) {
                var value = _b.value;
                this.addMarkersFromLocation(value.latitude, value.longitude);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    LocationFieldComponent.prototype.clearValue = /**
     * \@description Clears the field's value.
     * @return {?}
     */
    function () {
        if (this.field.data) {
            this.field.data.value = [];
            this.clearValidationErrors();
        }
    };
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    LocationFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.field.data && this.field.data.value) {
            for (var i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                var value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + '].latitude', value.latitude);
                data.append(this.field.name + '[' + i + '].longitude', value.longitude);
            }
        }
        return data;
    };
    /**
     * \@description Add a marker from the clicked map location.
     * @param {?} eventArguments
     * @return {?}
     */
    LocationFieldComponent.prototype.addMarkers = /**
     * \@description Add a marker from the clicked map location.
     * @param {?} eventArguments
     * @return {?}
     */
    function (eventArguments) {
        if (!this.isFormInDisplayMode()) {
            this.addMarkersFromLocation(eventArguments.coords.lat, eventArguments.coords.lng);
        }
    };
    /**
     * \@description Activates the google map location search.
     * @return {?}
     */
    LocationFieldComponent.prototype.activateSearchInput = /**
     * \@description Activates the google map location search.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchElement) {
            // load Places Autocomplete
            this.mapsAPILoader.load().then(function () {
                /** @type {?} */
                var field = _this.bridgeService.configuration.mergedFields.find(function (f) { return f.name === _this.searchElement.nativeElement.id; });
                /** @type {?} */
                var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, {});
                autocomplete.addListener('place_changed', function () {
                    _this.ngZone.run(function () {
                        /** @type {?} */
                        var place = autocomplete.getPlace();
                        // verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        /** @type {?} */
                        var latitude = place.geometry.location.lat();
                        /** @type {?} */
                        var longitude = place.geometry.location.lng();
                        field.defaultLocation = {
                            latitude: latitude,
                            longitude: longitude
                        };
                        field.zoom = 12;
                        /** @type {?} */
                        var marker = new Marker(place.geometry.location.lat(), place.geometry.location.lng(), field.markerSettings.defaultNewMarker.draggable, field.markerSettings.defaultNewMarker.infoHtml);
                        _this.addMarkersFromLocation(latitude, longitude);
                    });
                });
            });
        }
    };
    /**
     * \@description Add a marker from the clicked map location.
     * @param {?} latitude
     * @param {?} longitude
     * @return {?}
     */
    LocationFieldComponent.prototype.addMarkersFromLocation = /**
     * \@description Add a marker from the clicked map location.
     * @param {?} latitude
     * @param {?} longitude
     * @return {?}
     */
    function (latitude, longitude) {
        if (!this.field.data.value) {
            this.field.data.value = [];
        }
        if (this.field.validation.max > 0 && this.field.data.value.length < this.field.validation.max) {
            /** @type {?} */
            var marker = new Marker(latitude, longitude, this.field.markerSettings.defaultNewMarker.draggable, this.field.markerSettings.defaultNewMarker.infoHtml);
            marker.eventTriggers = this.field.markerSettings.defaultNewMarker.eventTriggers;
            this.field.data.value.push(marker);
        }
    };
    /**
     * \@description Update the marker's position when drag is done.
     * @param {?} marker
     * @param {?} eventArguments
     * @return {?}
     */
    LocationFieldComponent.prototype.updateMarkerPosition = /**
     * \@description Update the marker's position when drag is done.
     * @param {?} marker
     * @param {?} eventArguments
     * @return {?}
     */
    function (marker, eventArguments) {
        marker.latitude = eventArguments.coords.lat;
        marker.longitude = eventArguments.coords.lng;
    };
    LocationFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-location-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <div class=\"search-location-container\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\">\n    <!-- input && display -->\n    <input #search\n           [id]=\"field.name\"\n           [name]=\"field.name\"\n           [title]=\"field.tooltip | translate\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           type=\"text\"\n           [class]=\"field.cssClasses.input\"\n           (keydown.enter)=\"$event.preventDefault()\">\n\n    <!-- icon -->\n    <span class=\"search-location-icon\">\n    </span>\n  </div>\n\n  <agm-map [latitude]=\"field.defaultLocation?.latitude\"\n           [longitude]=\"field.defaultLocation?.longitude\"\n           [zoom]=\"field.zoom\"\n           [zoomControl]=\"field.zoomControl\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           (mapClick)=\"addMarkers($event);validate();\">\n\n    <agm-marker *ngFor=\"let marker of field.data.value\"\n                (markerClick)=\"triggerDynamicEvent('markerClick', $event, marker);\"\n                [latitude]=\"marker.latitude\"\n                [longitude]=\"marker.longitude\"\n                [markerDraggable]=\"marker.draggable && bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (dragEnd)=\"updateMarkerPosition(marker, $event)\">\n\n      <agm-info-window *ngIf=\"marker.infoHtml\">\n        <div [innerHTML]=\"marker.infoHtml | translate\"></div>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["agm-map{width:100%;height:300px}span.search-location-icon:after{content:\"\\f002\";font:14px/2.5 FontAwesome;position:absolute;height:100%;color:#555}.search-location-container{position:relative}body.en :host ::ng-deep span.search-location-icon:after{right:5px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}body.ar :host ::ng-deep span.search-location-icon:after{left:5px}input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                },] },
    ];
    /** @nocollapse */
    LocationFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: MapsAPILoader },
        { type: NgZone }
    ]; };
    LocationFieldComponent.propDecorators = {
        searchElement: [{ type: ViewChild, args: ['search',] }]
    };
    return LocationFieldComponent;
}(FieldComponent));
export { LocationFieldComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbG9jYXRpb24tZmllbGQvbG9jYXRpb24tZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQW9FUixrREFBYztJQU94RCxnQ0FDUyxlQUNDLGVBQ0E7UUFIVixZQUtFLGtCQUFNLGFBQWEsQ0FBQyxTQUNyQjtRQUxRLG1CQUFhLEdBQWIsYUFBYTtRQUNaLG1CQUFhLEdBQWIsYUFBYTtRQUNiLFlBQU0sR0FBTixNQUFNOzs7O2lDQUxtQixJQUFJOztLQVF0Qzs7Ozs7SUFHTSxzREFBcUI7Ozs7Ozs7UUFFMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakgsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsVUFBQyxRQUFRO29CQUNoRCxLQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUs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bnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW91c2VFdmVudCwgTWFwc0FQSUxvYWRlciB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IH0gZnJvbSAnZ29vZ2xlbWFwcyc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tYXAtbWFya2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWxvY2F0aW9uLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1sb2NhdGlvbi1jb250YWluZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8IS0tIGlucHV0ICYmIGRpc3BsYXkgLS0+XHJcbiAgICA8aW5wdXQgI3NlYXJjaFxyXG4gICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcclxuICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcblxyXG4gICAgPCEtLSBpY29uIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtbG9jYXRpb24taWNvblwiPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwiZmllbGQuZGVmYXVsdExvY2F0aW9uPy5sYXRpdHVkZVwiXHJcbiAgICAgICAgICAgW2xvbmdpdHVkZV09XCJmaWVsZC5kZWZhdWx0TG9jYXRpb24/LmxvbmdpdHVkZVwiXHJcbiAgICAgICAgICAgW3pvb21dPVwiZmllbGQuem9vbVwiXHJcbiAgICAgICAgICAgW3pvb21Db250cm9sXT1cImZpZWxkLnpvb21Db250cm9sXCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgKG1hcENsaWNrKT1cImFkZE1hcmtlcnMoJGV2ZW50KTt2YWxpZGF0ZSgpO1wiPlxyXG5cclxuICAgIDxhZ20tbWFya2VyICpuZ0Zvcj1cImxldCBtYXJrZXIgb2YgZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAobWFya2VyQ2xpY2spPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnbWFya2VyQ2xpY2snLCAkZXZlbnQsIG1hcmtlcik7XCJcclxuICAgICAgICAgICAgICAgIFtsYXRpdHVkZV09XCJtYXJrZXIubGF0aXR1ZGVcIlxyXG4gICAgICAgICAgICAgICAgW2xvbmdpdHVkZV09XCJtYXJrZXIubG9uZ2l0dWRlXCJcclxuICAgICAgICAgICAgICAgIFttYXJrZXJEcmFnZ2FibGVdPVwibWFya2VyLmRyYWdnYWJsZSAmJiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChkcmFnRW5kKT1cInVwZGF0ZU1hcmtlclBvc2l0aW9uKG1hcmtlciwgJGV2ZW50KVwiPlxyXG5cclxuICAgICAgPGFnbS1pbmZvLXdpbmRvdyAqbmdJZj1cIm1hcmtlci5pbmZvSHRtbFwiPlxyXG4gICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJtYXJrZXIuaW5mb0h0bWwgfCB0cmFuc2xhdGVcIj48L2Rpdj5cclxuICAgICAgPC9hZ20taW5mby13aW5kb3c+XHJcbiAgICA8L2FnbS1tYXJrZXI+XHJcbiAgPC9hZ20tbWFwPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BhZ20tbWFwe3dpZHRoOjEwMCU7aGVpZ2h0OjMwMHB4fXNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7Y29udGVudDpcIlxcXFxmMDAyXCI7Zm9udDoxNHB4LzIuNSBGb250QXdlc29tZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtjb2xvcjojNTU1fS5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIHNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7cmlnaHQ6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgc3Bhbi5zZWFyY2gtbG9jYXRpb24taWNvbjphZnRlcntsZWZ0OjVweH1pbnB1dC5mb3JtLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25GaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzZWFyY2ggZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1hcHNBUElMb2FkZXI6IE1hcHNBUElMb2FkZXIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIC8vIHNldCBhIG1hcCBmaWVsZCdzIGxvY2F0aW9uIHRvIHVzZSBkZWZhdWx0IGxvY2F0aW9uIGlmIG5vIHZhbHVlIGlzIHNldCBhbmQgbG9jYXRpb24gaXMgYXZhaWxhYmxlLlxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmRlZmF1bHRMb2NhdGlvbiB8fCAhdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24ubGF0aXR1ZGUgfHwgIXRoaXMuZmllbGQuZGVmYXVsdExvY2F0aW9uLmxvbmdpdHVkZSkge1xyXG4gICAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBmaWVsZCdzIHZhbHVlLlxyXG4gICAqIEBwYXJhbSBhbnkgbmV3VmFsdWUgVGhlIG5ldyBmaWVsZCB2YWx1ZS5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG5ld1ZhbHVlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbih2YWx1ZS5sYXRpdHVkZSwgdmFsdWUubG9uZ2l0dWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddLmxhdGl0dWRlJywgdmFsdWUubGF0aXR1ZGUpO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10ubG9uZ2l0dWRlJywgdmFsdWUubG9uZ2l0dWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGQgYSBtYXJrZXIgZnJvbSB0aGUgY2xpY2tlZCBtYXAgbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIE1vdXNlRXZlbnQgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAqL1xyXG4gIHB1YmxpYyBhZGRNYXJrZXJzKGV2ZW50QXJndW1lbnRzOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbihldmVudEFyZ3VtZW50cy5jb29yZHMubGF0LCBldmVudEFyZ3VtZW50cy5jb29yZHMubG5nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWN0aXZhdGVzIHRoZSBnb29nbGUgbWFwIGxvY2F0aW9uIHNlYXJjaC4qL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZVNlYXJjaElucHV0KCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRWxlbWVudCkge1xyXG4gICAgICAvLyBsb2FkIFBsYWNlcyBBdXRvY29tcGxldGVcclxuICAgICAgdGhpcy5tYXBzQVBJTG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLm1lcmdlZEZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSB0aGlzLnNlYXJjaEVsZW1lbnQubmF0aXZlRWxlbWVudC5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKHRoaXMuc2VhcmNoRWxlbWVudC5uYXRpdmVFbGVtZW50LCB7fSk7XHJcbiAgICAgICAgYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwbGFjZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgcGxhY2U6IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZVJlc3VsdCA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlc3VsdFxyXG4gICAgICAgICAgICBpZiAocGxhY2UuZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCB8fCBwbGFjZS5nZW9tZXRyeSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IGxhdGl0dWRlLCBsb25naXR1ZGUgYW5kIHpvb21cclxuICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG5cclxuICAgICAgICAgICAgZmllbGQuZGVmYXVsdExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiBsYXRpdHVkZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6IGxvbmdpdHVkZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmllbGQuem9vbSA9IDEyO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcclxuICAgICAgICAgICAgICBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcclxuICAgICAgICAgICAgICBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKSxcclxuICAgICAgICAgICAgICBmaWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmRyYWdnYWJsZSxcclxuICAgICAgICAgICAgICBmaWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmluZm9IdG1sXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE1hcmtlcnNGcm9tTG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZCBhIG1hcmtlciBmcm9tIHRoZSBjbGlja2VkIG1hcCBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0gbnVtYmVyIGxhdGl0dWRlIFRoZSBsYXRpdHVkZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIGxvbmdpdHVkZSBUaGUgbG9uZ2l0dWRlLlxyXG4gICovXHJcbiAgcHJpdmF0ZSBhZGRNYXJrZXJzRnJvbUxvY2F0aW9uKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCA+IDAgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXgpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmRyYWdnYWJsZSxcclxuICAgICAgICB0aGlzLmZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuaW5mb0h0bWxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG1hcmtlci5ldmVudFRyaWdnZXJzID0gdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmV2ZW50VHJpZ2dlcnM7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUucHVzaChtYXJrZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGUgdGhlIG1hcmtlcidzIHBvc2l0aW9uIHdoZW4gZHJhZyBpcyBkb25lLlxyXG4gICAqIEBwYXJhbSBNYXJrZXIgbWFya2VyIFRoZSBtYXJrZXIgdG8gdXBkYXRlLlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cyBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBNYXJrZXIsIGV2ZW50QXJndW1lbnRzOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBtYXJrZXIubGF0aXR1ZGUgPSBldmVudEFyZ3VtZW50cy5jb29yZHMubGF0O1xyXG4gICAgbWFya2VyLmxvbmdpdHVkZSA9IGV2ZW50QXJndW1lbnRzLmNvb3Jkcy5sbmc7XHJcbiAgfVxyXG59XHJcbiJdfQ==