/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
var TimeFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TimeFieldComponent, _super);
    function TimeFieldComponent(bridgeService, utilitiesService) {
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
    TimeFieldComponent.prototype.handleDefaultSettings = /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    function () {
        this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.setTime, this.field.setTime);
    };
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    TimeFieldComponent.prototype.clearValue = /**
     * \@description Clears the field's value.
     * @return {?}
     */
    function () {
        if (this.field.data) {
            this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.setTime, this.field.setTime);
        }
    };
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    TimeFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.hour', this.field.data.value.hour);
            data.append(this.field.name + '.minute', this.field.data.value.minute);
            data.append(this.field.name + '.meriden', this.field.data.value.meriden);
            data.append(this.field.name + '.format', this.field.data.value.format);
        }
        return data;
    };
    /**
     * \@description Sets a time picker field's value once it is changed.
     * @param {?} newValue
     * @return {?}
     */
    TimeFieldComponent.prototype.setTimePickerFieldValue = /**
     * \@description Sets a time picker field's value once it is changed.
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        this.field.data.value = newValue;
    };
    TimeFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-time-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <ntw-mat-timepicker color=\"primary\"\n                      [inputClass]=\"field.cssClasses.input\"\n                      [ngClass]=\"{'invalid': isValidationShown()}\"\n                      [inputId]=\"field.name\"\n                      [inputName]=\"field.name\"\n                      [disabled]=\"field.disabled\"\n                      readonly=true\n                      [tooltip]=\"field.tooltip | translate\"\n                      [placeholderValue]=\"field.tooltip | translate\"\n                      [(userTime)]=\"field.data.value\"\n                      *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                      (userTimeChange)=\"setTimePickerFieldValue($event);validate();triggerDynamicEvent('onChange', $event, field);\">\n  </ntw-mat-timepicker>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.hour}}:{{field?.data?.value?.minute}}\n    <span *ngIf=\"field?.data?.value?.format == 12\">{{field?.data?.value?.meriden | translate}}</span>\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host ::ng-deep .time-picker-button.mat-button{position:absolute;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s;height:35px}body.en :host ::ng-deep .time-picker-button.mat-button{right:15px}body.ar :host ::ng-deep .time-picker-button.mat-button{left:15px}:host ::ng-deep .w-mat-timepicker .mat-button,:host ::ng-deep .w-mat-timepicker .mat-flat-button,:host ::ng-deep .w-mat-timepicker .mat-icon-button,:host ::ng-deep .w-mat-timepicker .mat-stroked-button{line-height:32px}:host ::ng-deep input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                },] },
    ];
    /** @nocollapse */
    TimeFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: UtilitiesService }
    ]; };
    return TimeFieldComponent;
}(FieldComponent));
export { TimeFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    TimeFieldComponent.prototype.validateForRequired;
    /** @type {?} */
    TimeFieldComponent.prototype.bridgeService;
    /** @type {?} */
    TimeFieldComponent.prototype.utilitiesService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy90aW1lLWZpZWxkL3RpbWUtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztJQWtEL0IsOENBQWM7SUFJcEQsNEJBQ1MsZUFDQztRQUZWLFlBSUUsa0JBQU0sYUFBYSxDQUFDLFNBQ3JCO1FBSlEsbUJBQWEsR0FBYixhQUFhO1FBQ1osc0JBQWdCLEdBQWhCLGdCQUFnQjs7OztvQ0FKWSxJQUFJOztLQU96Qzs7Ozs7SUFHTSxrREFBcUI7Ozs7O1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O0lBSTNHLHVDQUFVOzs7OztRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakg7Ozs7Ozs7SUFPSSwyQ0FBYzs7Ozs7Y0FBQyxJQUFjO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5FLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7OztJQU1QLG9EQUF1Qjs7Ozs7Y0FBQyxRQUFhO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7OztnQkE3RnBDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsd3dEQTJDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywrbEJBQStsQixDQUFDO2lCQUMxbUI7Ozs7Z0JBbERRLGFBQWE7Z0JBQ2IsZ0JBQWdCOzs2QkFIekI7RUFxRHdDLGNBQWM7U0FBekMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXRpbWUtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPG50dy1tYXQtdGltZXBpY2tlciBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRJZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dE5hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgW3Rvb2x0aXBdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJWYWx1ZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFsodXNlclRpbWUpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgICAgICAgICh1c2VyVGltZUNoYW5nZSk9XCJzZXRUaW1lUGlja2VyRmllbGRWYWx1ZSgkZXZlbnQpO3ZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIj5cclxuICA8L250dy1tYXQtdGltZXBpY2tlcj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZD8uZGF0YT8udmFsdWU/LmhvdXJ9fTp7e2ZpZWxkPy5kYXRhPy52YWx1ZT8ubWludXRlfX1cclxuICAgIDxzcGFuICpuZ0lmPVwiZmllbGQ/LmRhdGE/LnZhbHVlPy5mb3JtYXQgPT0gMTJcIj57e2ZpZWxkPy5kYXRhPy52YWx1ZT8ubWVyaWRlbiB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIC50aW1lLXBpY2tlci1idXR0b24ubWF0LWJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MXB4IHNvbGlkICMyMzk5ZTU7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMyMzk5ZTU7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycztoZWlnaHQ6MzVweH1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCAudGltZS1waWNrZXItYnV0dG9uLm1hdC1idXR0b257cmlnaHQ6MTVweH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudGltZS1waWNrZXItYnV0dG9uLm1hdC1idXR0b257bGVmdDoxNXB4fTpob3N0IDo6bmctZGVlcCAudy1tYXQtdGltZXBpY2tlciAubWF0LWJ1dHRvbiw6aG9zdCA6Om5nLWRlZXAgLnctbWF0LXRpbWVwaWNrZXIgLm1hdC1mbGF0LWJ1dHRvbiw6aG9zdCA6Om5nLWRlZXAgLnctbWF0LXRpbWVwaWNrZXIgLm1hdC1pY29uLWJ1dHRvbiw6aG9zdCA6Om5nLWRlZXAgLnctbWF0LXRpbWVwaWNrZXIgLm1hdC1zdHJva2VkLWJ1dHRvbntsaW5lLWhlaWdodDozMnB4fTpob3N0IDo6bmctZGVlcCBpbnB1dC5mb3JtLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxpdGllc1NlcnZpY2U6IFV0aWxpdGllc1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQodGhpcy5maWVsZC5zZXRUaW1lLCB0aGlzLmZpZWxkLnNldFRpbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQodGhpcy5maWVsZC5zZXRUaW1lLCB0aGlzLmZpZWxkLnNldFRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnLmhvdXInLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuaG91cik7XHJcblxyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnLm1pbnV0ZScsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5taW51dGUpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5tZXJpZGVuJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLm1lcmlkZW4pO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5mb3JtYXQnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2V0cyBhIHRpbWUgcGlja2VyIGZpZWxkJ3MgdmFsdWUgb25jZSBpdCBpcyBjaGFuZ2VkLlxyXG4gICAqIEBwYXJhbSBhbnkgbmV3VmFsdWUgVGhlIG5ldyB2YWx1ZS5cclxuICAqL1xyXG4gIHB1YmxpYyBzZXRUaW1lUGlja2VyRmllbGRWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBuZXdWYWx1ZTtcclxuICB9XHJcbn1cclxuIl19