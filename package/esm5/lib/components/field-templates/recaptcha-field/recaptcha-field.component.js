/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { InputError } from '../../../models/input-error';
var RecaptchaFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RecaptchaFieldComponent, _super);
    function RecaptchaFieldComponent(bridgeService, languageService) {
        var _this = _super.call(this, bridgeService) || this;
        _this.bridgeService = bridgeService;
        _this.languageService = languageService;
        return _this;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    RecaptchaFieldComponent.prototype.clearValue = /**
     * \@description Clears the field's value.
     * @return {?}
     */
    function () {
        this.isValid = false;
        this.clearValidationErrors();
    };
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    RecaptchaFieldComponent.prototype.validate = /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    function (eventArguments, isSubmit) {
        this.preValidate(isSubmit);
        if (this.shouldValidate()) {
            if (this.field.validation.required) {
                if (!isSubmit) {
                    this.isValid = eventArguments != null;
                }
                if (!this.isValid) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.requiredText));
                }
            }
            this.updateValidationSummary();
        }
        return this.field.validationErrors;
    };
    /**
     * \@description Sets the captcha language.
     * @return {?}
     */
    RecaptchaFieldComponent.prototype.setCaptchaLanguge = /**
     * \@description Sets the captcha language.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var language = this.languageService.getLanguage();
        if (this.recaptchaElement) {
            /** @type {?} */
            var captchaIFrame = this.recaptchaElement.elementRef.nativeElement.querySelector('iframe');
            if (captchaIFrame) {
                /** @type {?} */
                var src = captchaIFrame.getAttribute('src');
                captchaIFrame.setAttribute('src', src.replace(/hl=(.*?)&/, 'hl=' + language + '&'));
            }
        }
        this.isValid = false;
        this.clearValidationErrors();
    };
    RecaptchaFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-recaptcha-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <re-captcha #recaptcha\n              [id]=\"field.name\"\n              [siteKey]=\"field.siteKey\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [theme]=\"field.theme\"\n              [size]=\"field.size\"\n              [title]=\"field.tooltip | translate\"\n              (resolved)=\"validate($event);\">\n  </re-captcha>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    RecaptchaFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: LanguageService }
    ]; };
    RecaptchaFieldComponent.propDecorators = {
        recaptchaElement: [{ type: ViewChild, args: ['recaptcha',] }]
    };
    return RecaptchaFieldComponent;
}(FieldComponent));
export { RecaptchaFieldComponent };
if (false) {
    /**
     * \@property The recaptcha element.
     * @type {?}
     */
    RecaptchaFieldComponent.prototype.recaptchaElement;
    /**
     * \@property Whether the field is valid.
     * @type {?}
     */
    RecaptchaFieldComponent.prototype.isValid;
    /** @type {?} */
    RecaptchaFieldComponent.prototype.bridgeService;
    /** @type {?} */
    RecaptchaFieldComponent.prototype.languageService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXB0Y2hhLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JlY2FwdGNoYS1maWVsZC9yZWNhcHRjaGEtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQXVDWixtREFBYztJQU96RCxpQ0FDUyxlQUNDO1FBRlYsWUFJRSxrQkFBTSxhQUFhLENBQUMsU0FDckI7UUFKUSxtQkFBYSxHQUFiLGFBQWE7UUFDWixxQkFBZSxHQUFmLGVBQWU7O0tBR3hCOzs7OztJQUdNLDRDQUFVOzs7OztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7Ozs7OztJQVF4QiwwQ0FBUTs7Ozs7O2NBQUMsY0FBb0IsRUFBRSxRQUFrQjtRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxJQUFJLElBQUksQ0FBQztpQkFDdkM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7aUJBQzNIO2FBQ0Y7WUFFRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7SUFJOUIsbURBQWlCOzs7Ozs7UUFDdEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztZQUMxQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0YsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2xCLElBQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTlDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyRjtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7OztnQkFuR2hDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsK2dDQWdDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7Z0JBeENRLGFBQWE7Z0JBQ2IsZUFBZTs7O21DQTBDckIsU0FBUyxTQUFDLFdBQVc7O2tDQTdDeEI7RUEyQzZDLGNBQWM7U0FBOUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1yZWNhcHRjaGEtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHJlLWNhcHRjaGEgI3JlY2FwdGNoYVxyXG4gICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbc2l0ZUtleV09XCJmaWVsZC5zaXRlS2V5XCJcclxuICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgIFt0aGVtZV09XCJmaWVsZC50aGVtZVwiXHJcbiAgICAgICAgICAgICAgW3NpemVdPVwiZmllbGQuc2l6ZVwiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgIChyZXNvbHZlZCk9XCJ2YWxpZGF0ZSgkZXZlbnQpO1wiPlxyXG4gIDwvcmUtY2FwdGNoYT5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJlY2FwdGNoYSBlbGVtZW50LiovXHJcbiAgQFZpZXdDaGlsZCgncmVjYXB0Y2hhJykgcmVjYXB0Y2hhRWxlbWVudDogYW55O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdGhlIGZpZWxkIGlzIHZhbGlkLiovXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBmb3JtIGNvbnRyb2wgYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwdWJsaWMgdmFsaWRhdGUoZXZlbnRBcmd1bWVudHM/OiBhbnksIGlzU3VibWl0PzogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMucHJlVmFsaWRhdGUoaXNTdWJtaXQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKCkpIHtcclxuICAgICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICAgIGlmICghaXNTdWJtaXQpIHtcclxuICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGV2ZW50QXJndW1lbnRzICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFRleHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjYXB0Y2hhIGxhbmd1YWdlLiovXHJcbiAgcHVibGljIHNldENhcHRjaGFMYW5ndWdlKCkge1xyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnJlY2FwdGNoYUVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgY2FwdGNoYUlGcmFtZSA9IHRoaXMucmVjYXB0Y2hhRWxlbWVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XHJcblxyXG4gICAgICBpZiAoY2FwdGNoYUlGcmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHNyYyA9IGNhcHRjaGFJRnJhbWUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuXHJcbiAgICAgICAgY2FwdGNoYUlGcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYy5yZXBsYWNlKC9obD0oLio/KSYvLCAnaGw9JyArIGxhbmd1YWdlICsgJyYnKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIH1cclxufVxyXG4iXX0=