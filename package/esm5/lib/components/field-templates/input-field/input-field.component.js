/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
var InputFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputFieldComponent, _super);
    function InputFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        /**
         * \@property Whether to validate for pattern.
         */
        _this.validateForPattern = true;
        return _this;
    }
    InputFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-input-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <input [id]=\"field.name\"\n         [name]=\"field.name\"\n         [(ngModel)]=\"field.data.value\"\n         [class]=\"field.cssClasses.input\"\n         [ngClass]=\"{'invalid': isValidationShown()}\"\n         [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n         [title]=\"field.tooltip | translate\"\n         [autocomplete]=\"field.autoComplete\"\n         #input=\"ngModel\"\n         [type]=\"field.fieldType\"\n         [required]=\"field.validation.required\"\n         [pattern]=\"field.validation.pattern\"\n         [maxlength]=\"field.validation.length\"\n         [readonly]=\"field.readonly\"\n         [disabled]=\"field.disabled\"\n         *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n         (ngModelChange)=\"validate();triggerDynamicEvent('onChange', $event, field);\">\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                },] },
    ];
    return InputFieldComponent;
}(FieldComponent));
export { InputFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    InputFieldComponent.prototype.validateForRequired;
    /**
     * \@property Whether to validate for pattern.
     * @type {?}
     */
    InputFieldComponent.prototype.validateForPattern;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBcURqQiwrQ0FBYzs7Ozs7O29DQUVmLElBQUk7Ozs7bUNBR0wsSUFBSTs7OztnQkF4RDFDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsd3FEQThDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyw2RUFBNkUsQ0FBQztpQkFDeEY7OzhCQXJERDtFQXNEeUMsY0FBYztTQUExQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctaW5wdXQtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGlucHV0IFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgW2F1dG9jb21wbGV0ZV09XCJmaWVsZC5hdXRvQ29tcGxldGVcIlxyXG4gICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgW3R5cGVdPVwiZmllbGQuZmllbGRUeXBlXCJcclxuICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICBbcGF0dGVybl09XCJmaWVsZC52YWxpZGF0aW9uLnBhdHRlcm5cIlxyXG4gICAgICAgICBbbWF4bGVuZ3RoXT1cImZpZWxkLnZhbGlkYXRpb24ubGVuZ3RoXCJcclxuICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNoYW5nZScsICRldmVudCwgZmllbGQpO1wiPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkLmRhdGEudmFsdWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgaW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciBwYXR0ZXJuLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUGF0dGVybjogYm9vbGVhbiA9IHRydWU7XHJcbn1cclxuIl19