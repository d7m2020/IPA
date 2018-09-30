/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
var DatetimeFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DatetimeFieldComponent, _super);
    function DatetimeFieldComponent(bridgeService, translateService, languageService, datePipe) {
        var _this = _super.call(this, bridgeService) || this;
        _this.bridgeService = bridgeService;
        _this.translateService = translateService;
        _this.languageService = languageService;
        _this.datePipe = datePipe;
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        return _this;
    }
    /**
     * @return {?}
     */
    DatetimeFieldComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setCalendarOptions();
        this.translateService.onLangChange.subscribe(function (response) {
            _this.setCalendarOptions();
        });
    };
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    DatetimeFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name, this.datePipe.transform(this.field.data.value, this.field.formDataDateFormat));
        }
        return data;
    };
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    DatetimeFieldComponent.prototype.handleDefaultSettings = /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    function () {
        // buggy if done from here after component is loaded. Moved back to before component loaded.
    };
    /**
     * \@description Sets the calendar options.
     * @return {?}
     */
    DatetimeFieldComponent.prototype.setCalendarOptions = /**
     * \@description Sets the calendar options.
     * @return {?}
     */
    function () {
        if (this.calendarElement && this.languageService.translations) {
            /** @type {?} */
            var calendarOptions = this.languageService.translations.calendarOptions;
            if (calendarOptions) {
                this.calendarElement.locale = calendarOptions;
            }
        }
    };
    DatetimeFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-datetime-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-calendar #calendar\n              [id]=\"field.name\"\n              [name]=\"field.name\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [title]=\"field.tooltip | translate\"\n              #input=\"ngModel\"\n              [(ngModel)]=\"field.data.value\"\n              [required]=\"field.validation.required\"\n              [readonlyInput]=\"field.readonly\"\n              [disabled]=\"field.disabled\"\n              [showIcon]=\"field.showIcon\"\n              [showTime]=\"field.showTime\"\n              [hourFormat]=\"field.hourFormat\"\n              [monthNavigator]=\"field.monthNavigator\"\n              [yearNavigator]=\"field.yearNavigator\"\n              [yearRange]=\"field.yearRange\"\n              [dateFormat]=\"field.dateFormat\"\n              [minDate]=\"field.minDateValue\"\n              [maxDate]=\"field.maxDateValue\"\n              [defaultDate]=\"field.defaultDateValue\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onClose)=\"validate();triggerDynamicEvent('onSelect', $event, field);\"\n              (onSelect)=\"validate();triggerDynamicEvent('onSelect', $event, field);\">\n  </p-calendar>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value | date:field.displayDateFormat}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["body.en :host ::ng-deep button.ui-datepicker-trigger{right:0}body.ar :host ::ng-deep button.ui-datepicker-trigger{left:0}:host ::ng-deep span.ui-calendar{display:block}:host ::ng-deep p-calendar input{border-radius:.25rem}body.ar :host ::ng-deep .ui-calendar-button{border-radius:.25rem 0 0 .25rem}body.ar :host ::ng-deep .ui-calendar.ui-calendar-w-btn input{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}:host ::ng-deep button.ui-datepicker-trigger{position:absolute}:host ::ng-deep .ui-calendar .ui-datepicker{width:17em;min-width:auto}:host ::ng-deep .ui-calendar .ui-calendar-button .ui-button-icon-left{font-size:1.25em}"]
                },] },
    ];
    /** @nocollapse */
    DatetimeFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: TranslateService },
        { type: LanguageService },
        { type: DatePipe }
    ]; };
    DatetimeFieldComponent.propDecorators = {
        calendarElement: [{ type: ViewChild, args: ['calendar',] }]
    };
    return DatetimeFieldComponent;
}(FieldComponent));
export { DatetimeFieldComponent };
if (false) {
    /**
     * \@property The search element.
     * @type {?}
     */
    DatetimeFieldComponent.prototype.calendarElement;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    DatetimeFieldComponent.prototype.validateForRequired;
    /** @type {?} */
    DatetimeFieldComponent.prototype.bridgeService;
    /** @type {?} */
    DatetimeFieldComponent.prototype.translateService;
    /** @type {?} */
    DatetimeFieldComponent.prototype.languageService;
    /** @type {?} */
    DatetimeFieldComponent.prototype.datePipe;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUE4REMsa0RBQWM7SUFPeEQsZ0NBQ1MsZUFDQyxrQkFDQSxpQkFDQTtRQUpWLFlBTUUsa0JBQU0sYUFBYSxDQUFDLFNBQ3JCO1FBTlEsbUJBQWEsR0FBYixhQUFhO1FBQ1osc0JBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixxQkFBZSxHQUFmLGVBQWU7UUFDZixjQUFRLEdBQVIsUUFBUTs7OztvQ0FOb0IsSUFBSTs7S0FTekM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNwRCxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBTU0sK0NBQWM7Ozs7O2NBQUMsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQzdHO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBSVAsc0RBQXFCOzs7Ozs7Ozs7OztJQUtwQixtREFBa0I7Ozs7O1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOztZQUM5RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFFMUUsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO2FBQy9DO1NBQ0Y7OztnQkE3R0osU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxxc0VBdURYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHNvQkFBc29CLENBQUM7aUJBQ2pwQjs7OztnQkFoRVEsYUFBYTtnQkFFYixnQkFBZ0I7Z0JBRGhCLGVBQWU7Z0JBRWYsUUFBUTs7O2tDQWdFZCxTQUFTLFNBQUMsVUFBVTs7aUNBckV2QjtFQW1FNEMsY0FBYztTQUE3QyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWRhdGV0aW1lLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWNhbGVuZGFyICNjYWxlbmRhclxyXG4gICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgW3JlYWRvbmx5SW5wdXRdPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW3Nob3dJY29uXT1cImZpZWxkLnNob3dJY29uXCJcclxuICAgICAgICAgICAgICBbc2hvd1RpbWVdPVwiZmllbGQuc2hvd1RpbWVcIlxyXG4gICAgICAgICAgICAgIFtob3VyRm9ybWF0XT1cImZpZWxkLmhvdXJGb3JtYXRcIlxyXG4gICAgICAgICAgICAgIFttb250aE5hdmlnYXRvcl09XCJmaWVsZC5tb250aE5hdmlnYXRvclwiXHJcbiAgICAgICAgICAgICAgW3llYXJOYXZpZ2F0b3JdPVwiZmllbGQueWVhck5hdmlnYXRvclwiXHJcbiAgICAgICAgICAgICAgW3llYXJSYW5nZV09XCJmaWVsZC55ZWFyUmFuZ2VcIlxyXG4gICAgICAgICAgICAgIFtkYXRlRm9ybWF0XT1cImZpZWxkLmRhdGVGb3JtYXRcIlxyXG4gICAgICAgICAgICAgIFttaW5EYXRlXT1cImZpZWxkLm1pbkRhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW21heERhdGVdPVwiZmllbGQubWF4RGF0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICBbZGVmYXVsdERhdGVdPVwiZmllbGQuZGVmYXVsdERhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25DbG9zZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0JywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAob25TZWxlY3QpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblNlbGVjdCcsICRldmVudCwgZmllbGQpO1wiPlxyXG4gIDwvcC1jYWxlbmRhcj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZC5kYXRhLnZhbHVlIHwgZGF0ZTpmaWVsZC5kaXNwbGF5RGF0ZUZvcm1hdH19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2Bib2R5LmVuIDpob3N0IDo6bmctZGVlcCBidXR0b24udWktZGF0ZXBpY2tlci10cmlnZ2Vye3JpZ2h0OjB9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYnV0dG9uLnVpLWRhdGVwaWNrZXItdHJpZ2dlcntsZWZ0OjB9Omhvc3QgOjpuZy1kZWVwIHNwYW4udWktY2FsZW5kYXJ7ZGlzcGxheTpibG9ja306aG9zdCA6Om5nLWRlZXAgcC1jYWxlbmRhciBpbnB1dHtib3JkZXItcmFkaXVzOi4yNXJlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXItYnV0dG9ue2JvcmRlci1yYWRpdXM6LjI1cmVtIDAgMCAuMjVyZW19Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyLnVpLWNhbGVuZGFyLXctYnRuIGlucHV0e2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOi4yNXJlbTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czouMjVyZW19Omhvc3QgOjpuZy1kZWVwIGJ1dHRvbi51aS1kYXRlcGlja2VyLXRyaWdnZXJ7cG9zaXRpb246YWJzb2x1dGV9Omhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhciAudWktZGF0ZXBpY2tlcnt3aWR0aDoxN2VtO21pbi13aWR0aDphdXRvfTpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXIgLnVpLWNhbGVuZGFyLWJ1dHRvbiAudWktYnV0dG9uLWljb24tbGVmdHtmb250LXNpemU6MS4yNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRldGltZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzZWFyY2ggZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFyJykgY2FsZW5kYXJFbGVtZW50OiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGVcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zZXRDYWxlbmRhck9wdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5zZXRDYWxlbmRhck9wdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUsIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuZmllbGQuZGF0YS52YWx1ZSwgdGhpcy5maWVsZC5mb3JtRGF0YURhdGVGb3JtYXQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIC8vIGJ1Z2d5IGlmIGRvbmUgZnJvbSBoZXJlIGFmdGVyIGNvbXBvbmVudCBpcyBsb2FkZWQuIE1vdmVkIGJhY2sgdG8gYmVmb3JlIGNvbXBvbmVudCBsb2FkZWQuXHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhbGVuZGFyIG9wdGlvbnMuKi9cclxuICBwcml2YXRlIHNldENhbGVuZGFyT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyRWxlbWVudCAmJiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMpIHtcclxuICAgICAgY29uc3QgY2FsZW5kYXJPcHRpb25zID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmNhbGVuZGFyT3B0aW9ucztcclxuXHJcbiAgICAgIGlmIChjYWxlbmRhck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyRWxlbWVudC5sb2NhbGUgPSBjYWxlbmRhck9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==