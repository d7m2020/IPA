/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDatepickerI18n, NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';
import { FieldComponent } from '../field/field.component';
import { IslamicI18n } from '../../../services/datepicker-calendar.service';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
var DatetimeHijriFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DatetimeHijriFieldComponent, _super);
    function DatetimeHijriFieldComponent(bridgeService, utilitiesService) {
        var _this = _super.call(this, bridgeService) || this;
        _this.bridgeService = bridgeService;
        _this.utilitiesService = utilitiesService;
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        return _this;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    DatetimeHijriFieldComponent.prototype.handleDefaultSettings = /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    function () {
        if (this.field.minDate) {
            this.field.minDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.minDate, new Date(this.field.minDate));
        }
        if (this.field.maxDate) {
            this.field.maxDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.maxDate, new Date(this.field.maxDate));
        }
        if (this.field.data.dateValue) {
            this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.data.dateValue, new Date(this.field.data.dateValue));
        }
    };
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    DatetimeHijriFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.year', this.field.data.value.year);
            data.append(this.field.name + '.month', this.field.data.value.month);
            data.append(this.field.name + '.day', this.field.data.value.day);
        }
        return data;
    };
    /**
     * \@description Toggles the calendar.
     * @return {?}
     */
    DatetimeHijriFieldComponent.prototype.toggleCalendar = /**
     * \@description Toggles the calendar.
     * @return {?}
     */
    function () {
        this.calendar.toggle();
    };
    DatetimeHijriFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-datetime-hijri-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div class=\"hijri-date-control\">\n    <input [name]=\"field.name\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           [class]=\"field.cssClasses.input\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           ngbDatepicker\n           #input=\"ngbDatepicker\"\n           #defaultInput=\"ngModel\"\n           [readonly]=\"field.readonly\"\n           [disabled]=\"field.disabled\"\n           [(ngModel)]=\"field.data.value\"\n           [minDate]=\"field.minDateValue\"\n           [maxDate]=\"field.maxDateValue\"\n           [showWeekNumbers]=\"field.showWeekNumbers\"\n           [displayMonths]=\"field.displayMonths\"\n           [outsideDays]=\"field.outsideDays\"\n           [showWeekdays]=\"field.showWeekdays\"\n           *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n           (click)=\"toggleCalendar();validate();\"\n           (ngModelChange)=\"validate();triggerDynamicEvent('onSelect', $event, field);\" />\n\n    <!-- icon -->\n    <button class=\"hijri-date-icon-container\"\n            [disabled]=\"field.disabled\"\n            type=\"button\"\n            (click)=\"toggleCalendar();\">\n      <span class=\"hijri-date-icon\"\n            *ngIf=\"field.showIcon\">\n      </span>\n    </button>\n  </div>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.day}}/{{field?.data?.value?.month}}/{{field?.data?.value?.year}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [".hijri-date{height:35px}.hijri-date-control{position:relative}.hijri-date-icon-container{position:absolute;top:0;padding:0 6px;background-color:#2399e5;color:#fff;cursor:pointer;height:100%;line-height:1.8;border:0}button.hijri-date-icon-container:disabled{opacity:.35}.hijri-date-icon:focus,.hijri-date-icon:hover{background:#1f89ce}.hijri-date-icon:after{content:'\\e927';font-family:primeicons;font-size:1.25em}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg)}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .right .ngb-dp-navigation-chevron{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}body.ar :host ::ng-deep .custom-select{background-position:left.75rem center}body.ar :host ::ng-deep .hijri-date-icon-container{left:0}body.en :host ::ng-deep .hijri-date-icon-container{right:0}:host ::ng-deep .custom-select{background-position:left .25rem center!important;direction:rtl!important;min-width:100px}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-week-number,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-weekday{width:2.5rem;height:2.5rem}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day div{width:100%;height:100%;line-height:2.5rem}"],
                    providers: [
                        { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
                        { provide: NgbDatepickerI18n, useClass: IslamicI18n }
                    ]
                },] },
    ];
    /** @nocollapse */
    DatetimeHijriFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: UtilitiesService }
    ]; };
    DatetimeHijriFieldComponent.propDecorators = {
        calendar: [{ type: ViewChild, args: ['input',] }]
    };
    return DatetimeHijriFieldComponent;
}(FieldComponent));
export { DatetimeHijriFieldComponent };
if (false) {
    /** @type {?} */
    DatetimeHijriFieldComponent.prototype.calendar;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    DatetimeHijriFieldComponent.prototype.validateForRequired;
    /** @type {?} */
    DatetimeHijriFieldComponent.prototype.bridgeService;
    /** @type {?} */
    DatetimeHijriFieldComponent.prototype.utilitiesService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtaGlqcmktZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtaGlqcmktZmllbGQvZGF0ZXRpbWUtaGlqcmktZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQXVFdEIsdURBQWM7SUFNN0QscUNBQ1MsZUFDQztRQUZWLFlBSUUsa0JBQU0sYUFBYSxDQUFDLFNBQ3JCO1FBSlEsbUJBQWEsR0FBYixhQUFhO1FBQ1osc0JBQWdCLEdBQWhCLGdCQUFnQjs7OztvQ0FKWSxJQUFJOztLQU96Qzs7Ozs7SUFHTSwyREFBcUI7Ozs7O1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzdIO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDN0g7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQ3BDLENBQUM7U0FDSDs7Ozs7OztJQU9JLG9EQUFjOzs7OztjQUFDLElBQWM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXJFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsRTtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUlQLG9EQUFjOzs7OztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7Z0JBdEgxQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLGdzRUE0RFg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsMHpDQUEwekMsQ0FBQztvQkFDcDBDLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFO3dCQUM5RCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO3FCQUN0RDtpQkFDRjs7OztnQkF2RVEsYUFBYTtnQkFDYixnQkFBZ0I7OzsyQkF3RXRCLFNBQVMsU0FBQyxPQUFPOztzQ0E5RXBCO0VBNkVpRCxjQUFjO1NBQWxELDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYklucHV0RGF0ZXBpY2tlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmdiQ2FsZW5kYXIsIE5nYkRhdGVwaWNrZXJJMThuLCBOZ2JDYWxlbmRhcklzbGFtaWNVbWFscXVyYSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJc2xhbWljSTE4biB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RhdGVwaWNrZXItY2FsZW5kYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1kYXRldGltZS1oaWpyaS1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2IGNsYXNzPVwiaGlqcmktZGF0ZS1jb250cm9sXCI+XHJcbiAgICA8aW5wdXQgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgbmdiRGF0ZXBpY2tlclxyXG4gICAgICAgICAgICNpbnB1dD1cIm5nYkRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICNkZWZhdWx0SW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICBbbWluRGF0ZV09XCJmaWVsZC5taW5EYXRlVmFsdWVcIlxyXG4gICAgICAgICAgIFttYXhEYXRlXT1cImZpZWxkLm1heERhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgW3Nob3dXZWVrTnVtYmVyc109XCJmaWVsZC5zaG93V2Vla051bWJlcnNcIlxyXG4gICAgICAgICAgIFtkaXNwbGF5TW9udGhzXT1cImZpZWxkLmRpc3BsYXlNb250aHNcIlxyXG4gICAgICAgICAgIFtvdXRzaWRlRGF5c109XCJmaWVsZC5vdXRzaWRlRGF5c1wiXHJcbiAgICAgICAgICAgW3Nob3dXZWVrZGF5c109XCJmaWVsZC5zaG93V2Vla2RheXNcIlxyXG4gICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUNhbGVuZGFyKCk7dmFsaWRhdGUoKTtcIlxyXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3QnLCAkZXZlbnQsIGZpZWxkKTtcIiAvPlxyXG5cclxuICAgIDwhLS0gaWNvbiAtLT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJoaWpyaS1kYXRlLWljb24tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDYWxlbmRhcigpO1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhpanJpLWRhdGUtaWNvblwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuc2hvd0ljb25cIj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQ/LmRhdGE/LnZhbHVlPy5kYXl9fS97e2ZpZWxkPy5kYXRhPy52YWx1ZT8ubW9udGh9fS97e2ZpZWxkPy5kYXRhPy52YWx1ZT8ueWVhcn19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AuaGlqcmktZGF0ZXtoZWlnaHQ6MzVweH0uaGlqcmktZGF0ZS1jb250cm9se3Bvc2l0aW9uOnJlbGF0aXZlfS5oaWpyaS1kYXRlLWljb24tY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3BhZGRpbmc6MCA2cHg7YmFja2dyb3VuZC1jb2xvcjojMjM5OWU1O2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEwMCU7bGluZS1oZWlnaHQ6MS44O2JvcmRlcjowfWJ1dHRvbi5oaWpyaS1kYXRlLWljb24tY29udGFpbmVyOmRpc2FibGVke29wYWNpdHk6LjM1fS5oaWpyaS1kYXRlLWljb246Zm9jdXMsLmhpanJpLWRhdGUtaWNvbjpob3ZlcntiYWNrZ3JvdW5kOiMxZjg5Y2V9LmhpanJpLWRhdGUtaWNvbjphZnRlcntjb250ZW50OidcXFxcZTkyNyc7Zm9udC1mYW1pbHk6cHJpbWVpY29ucztmb250LXNpemU6MS4yNWVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyIG5nYi1kYXRlcGlja2VyLW5hdmlnYXRpb24gLm5nYi1kcC1uYXZpZ2F0aW9uLWNoZXZyb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlciBuZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uIC5yaWdodCAubmdiLWRwLW5hdmlnYXRpb24tY2hldnJvbnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNlbGVjdHtiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQuNzVyZW0gY2VudGVyfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5oaWpyaS1kYXRlLWljb24tY29udGFpbmVye2xlZnQ6MH1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCAuaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcntyaWdodDowfTpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNlbGVjdHtiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgLjI1cmVtIGNlbnRlciFpbXBvcnRhbnQ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7bWluLXdpZHRoOjEwMHB4fTpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtZGF5LDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtd2Vlay1udW1iZXIsOmhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcgLm5nYi1kcC13ZWVrZGF5e3dpZHRoOjIuNXJlbTtoZWlnaHQ6Mi41cmVtfTpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtZGF5IGRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xpbmUtaGVpZ2h0OjIuNXJlbX1gXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogTmdiQ2FsZW5kYXIsIHVzZUNsYXNzOiBOZ2JDYWxlbmRhcklzbGFtaWNVbWFscXVyYSB9LFxyXG4gICAgeyBwcm92aWRlOiBOZ2JEYXRlcGlja2VySTE4biwgdXNlQ2xhc3M6IElzbGFtaWNJMThuIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBjYWxlbmRhcjogTmdiSW5wdXREYXRlcGlja2VyO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLm1pbkRhdGUpIHtcclxuICAgICAgdGhpcy5maWVsZC5taW5EYXRlVmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdCh0aGlzLmZpZWxkLm1pbkRhdGUsIG5ldyBEYXRlKHRoaXMuZmllbGQubWluRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLm1heERhdGUpIHtcclxuICAgICAgdGhpcy5maWVsZC5tYXhEYXRlVmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdCh0aGlzLmZpZWxkLm1heERhdGUsIG5ldyBEYXRlKHRoaXMuZmllbGQubWF4RGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEuZGF0ZVZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KFxyXG4gICAgICAgIHRoaXMuZmllbGQuZGF0YS5kYXRlVmFsdWUsXHJcbiAgICAgICAgbmV3IERhdGUodGhpcy5maWVsZC5kYXRhLmRhdGVWYWx1ZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy55ZWFyJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLnllYXIpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5tb250aCcsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5tb250aCk7XHJcblxyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnLmRheScsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5kYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSBjYWxlbmRhci4qL1xyXG4gIHB1YmxpYyB0b2dnbGVDYWxlbmRhcigpIHtcclxuICAgIHRoaXMuY2FsZW5kYXIudG9nZ2xlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==