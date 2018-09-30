/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
var CheckboxFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxFieldComponent, _super);
    function CheckboxFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property Whether to validate for range.
         */
        _this.validateForRange = true;
        return _this;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    CheckboxFieldComponent.prototype.clearValue = /**
     * \@description Clears the field's value.
     * @return {?}
     */
    function () {
        if (this.field.data) {
            this.field.data.value = [];
            this.control.reset();
            this.clearValidationErrors();
        }
    };
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    CheckboxFieldComponent.prototype.appendFormData = /**
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
    CheckboxFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-checkbox-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div class=\"checkBoxHolder\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\">\n    <p-checkbox *ngFor=\"let checkbox of field.data.options; let i = index\"\n                [id]=\"field.name+'_'+i\"\n                [name]=\"field.name\"\n                [(ngModel)]=\"field.data.value\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                [title]=\"field.tooltip | translate\"\n                #input=\"ngModel\"\n                [required]=\"field.validation.required\"\n                [label]=\"checkbox.name | translate\"\n                [value]=\"checkbox.id\"\n                [disabled]=\"field.disabled\"\n                (onChange)=\"triggerDynamicEvent('onChange', $event, field);\"\n                (ngModelChange)=\"validate();\">\n    </p-checkbox>\n  </div>\n\n  <!-- display -->\n  <div [class]=\"field.cssClasses.display\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <ul *ngIf=\"field?.data?.value?.length > 1\">\n      <li *ngFor=\"let title of field?.data?.value\">{{title}}</li>\n    </ul>\n    <span *ngIf=\"field?.data?.value?.length == 1\">\n      <span *ngFor=\"let title of field?.data?.value\">{{title}}</span>\n    </span>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["p-checkbox{display:block}body.ar :host ::ng-deep .ui-chkbox.ui-widget{float:right;margin-left:10px}"]
                },] },
    ];
    return CheckboxFieldComponent;
}(BoundableFieldComponent));
export { CheckboxFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    CheckboxFieldComponent.prototype.validateForRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7SUEyRDNDLGtEQUF1Qjs7Ozs7O2lDQUU5QixJQUFJOzs7Ozs7O0lBR2hDLDJDQUFVOzs7OztRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7Ozs7Ozs7SUFPSSwrQ0FBYzs7Ozs7Y0FBQyxJQUFjO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O2dCQUN0RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FDRjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7OztnQkFyRmYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwyN0RBb0RYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHFHQUFxRyxDQUFDO2lCQUNoSDs7aUNBM0REO0VBNEQ0Qyx1QkFBdUI7U0FBdEQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctY2hlY2tib3gtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBjbGFzcz1cImNoZWNrQm94SG9sZGVyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiPlxyXG4gICAgPHAtY2hlY2tib3ggKm5nRm9yPVwibGV0IGNoZWNrYm94IG9mIGZpZWxkLmRhdGEub3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZSsnXycraVwiXHJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCJjaGVja2JveC5uYW1lIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjaGVja2JveC5pZFwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgICA8L3AtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWwgKm5nSWY9XCJmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA+IDFcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCB0aXRsZSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e3RpdGxlfX08L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxzcGFuICpuZ0lmPVwiZmllbGQ/LmRhdGE/LnZhbHVlPy5sZW5ndGggPT0gMVwiPlxyXG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgdGl0bGUgb2YgZmllbGQ/LmRhdGE/LnZhbHVlXCI+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BwLWNoZWNrYm94e2Rpc3BsYXk6YmxvY2t9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNoa2JveC51aS13aWRnZXR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddJywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==