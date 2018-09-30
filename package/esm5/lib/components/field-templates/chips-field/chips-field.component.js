/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
var ChipsFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChipsFieldComponent, _super);
    function ChipsFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property Whether to validate for range.
         */
        _this.validateForRange = true;
        return _this;
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    ChipsFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.field.data && this.field.data.value) {
            for (var i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                var value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + ']', value);
            }
        }
        return data;
    };
    ChipsFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-chips-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-chips [id]=\"field.name\"\n           [name]=\"field.name\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           [class]=\"field.cssClasses.input\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           [title]=\"field.tooltip | translate\"\n           #input=\"ngModel\"\n           [disabled]=\"field.disabled\"\n           [(ngModel)]=\"field.data.value\"\n           [allowDuplicate]=\"field.validation.allowDuplicate\"\n           [addOnBlur]=\"field.addOnBlur\"\n           [addOnTab]=\"field.addOnTab\"\n           [required]=\"field.validation.required\"\n           *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n           (onAdd)=\"triggerDynamicEvent('onAdd', $event, field);\"\n           (onRemove)=\"triggerDynamicEvent('onRemove', $event, field);\"\n           (ngModelChange)=\"validate();\">\n  </p-chips>\n\n  <!-- display -->\n  <div [class]=\"field.cssClasses.display\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <ul>\n      <li *ngFor=\"let title of field.data.value\">{{title}}</li>\n    </ul>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host ::ng-deep .ui-chips-input-token,:host ::ng-deep .ui-chips-input-token input{width:100%}:host ::ng-deep .ui-chips>ul.ui-inputtext{padding:5px .25em}"]
                },] },
    ];
    return ChipsFieldComponent;
}(FieldComponent));
export { ChipsFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    ChipsFieldComponent.prototype.validateForRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hpcHMtZmllbGQvY2hpcHMtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBd0RqQiwrQ0FBYzs7Ozs7O2lDQUVsQixJQUFJOzs7Ozs7OztJQU1oQyw0Q0FBYzs7Ozs7Y0FBQyxJQUFjO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O2dCQUN0RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FDRjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7OztnQkF2RWYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxpeURBaURYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDJKQUEySixDQUFDO2lCQUN0Szs7OEJBeEREO0VBeUR5QyxjQUFjO1NBQTFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jaGlwcy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1jaGlwcyBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICBbYWxsb3dEdXBsaWNhdGVdPVwiZmllbGQudmFsaWRhdGlvbi5hbGxvd0R1cGxpY2F0ZVwiXHJcbiAgICAgICAgICAgW2FkZE9uQmx1cl09XCJmaWVsZC5hZGRPbkJsdXJcIlxyXG4gICAgICAgICAgIFthZGRPblRhYl09XCJmaWVsZC5hZGRPblRhYlwiXHJcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgKG9uQWRkKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQWRkJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAob25SZW1vdmUpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25SZW1vdmUnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLWNoaXBzPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRpdGxlIG9mIGZpZWxkLmRhdGEudmFsdWVcIj57e3RpdGxlfX08L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIC51aS1jaGlwcy1pbnB1dC10b2tlbiw6aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzLWlucHV0LXRva2VuIGlucHV0e3dpZHRoOjEwMCV9Omhvc3QgOjpuZy1kZWVwIC51aS1jaGlwcz51bC51aS1pbnB1dHRleHR7cGFkZGluZzo1cHggLjI1ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoaXBzRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10nLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIl19