/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
var EditorFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorFieldComponent, _super);
    function EditorFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        return _this;
    }
    /**
     * \@description Gets the field's value.
     * @return {?}
     */
    EditorFieldComponent.prototype.getValue = /**
     * \@description Gets the field's value.
     * @return {?}
     */
    function () {
        if (this.field.showToolbar) {
            return this.field.data.value;
        }
        else {
            return this.field.data.value.replace(/<[^>]*>/g, '');
        }
    };
    EditorFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-editor-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div [ngClass]=\"{'hide-toolbar':!field.showToolbar}\">\n    <p-editor [id]=\"field.name\"\n              [name]=\"field.name\"\n              #input=\"ngModel\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [title]=\"field.tooltip | translate\"\n              [readonly]=\"field.readonly\"\n              [(ngModel)]=\"field.data.value\"\n              [style]=\"{'height':field.height}\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onSelectionChange)=\"triggerDynamicEvent('onSelectionChange', $event, field);\"\n              (onTextChange)=\"triggerDynamicEvent('onChange', $event, field);\"\n              (ngModelChange)=\"validate();\">\n    </p-editor>\n  </div>\n\n  <!-- display -->\n  <span [innerHTML]=\"field.data.value\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\"></span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["body.ar :host ::ng-deep .ql-editor p{direction:rtl;text-align:right}body.ar :host ::ng-deep span.ql-picker-label{text-align:left}body.ar :host ::ng-deep .ql-editor.ql-blank::before{left:unset}:host ::ng-deep .hide-toolbar .ui-editor-toolbar{display:none}:host ::ng-deep .hide-toolbar .ui-editor-content{border-top:1px solid #ccc!important}"]
                },] },
    ];
    return EditorFieldComponent;
}(FieldComponent));
export { EditorFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    EditorFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2VkaXRvci1maWVsZC9lZGl0b3ItZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBbURoQixnREFBYzs7Ozs7O29DQUVoQixJQUFJOzs7Ozs7O0lBR25DLHVDQUFROzs7OztRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzlCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEQ7OztnQkEzREosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxzckRBNENYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHFWQUFxVixDQUFDO2lCQUNoVzs7K0JBbkREO0VBb0QwQyxjQUFjO1NBQTNDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1lZGl0b3ItZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBbbmdDbGFzc109XCJ7J2hpZGUtdG9vbGJhcic6IWZpZWxkLnNob3dUb29sYmFyfVwiPlxyXG4gICAgPHAtZWRpdG9yIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7J2hlaWdodCc6ZmllbGQuaGVpZ2h0fVwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25TZWxlY3Rpb25DaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3Rpb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgIChvblRleHRDaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgICA8L3AtZWRpdG9yPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2lubmVySFRNTF09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj48L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5xbC1lZGl0b3IgcHtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgc3Bhbi5xbC1waWNrZXItbGFiZWx7dGV4dC1hbGlnbjpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZXtsZWZ0OnVuc2V0fTpob3N0IDo6bmctZGVlcCAuaGlkZS10b29sYmFyIC51aS1lZGl0b3ItdG9vbGJhcntkaXNwbGF5Om5vbmV9Omhvc3QgOjpuZy1kZWVwIC5oaWRlLXRvb2xiYXIgLnVpLWVkaXRvci1jb250ZW50e2JvcmRlci10b3A6MXB4IHNvbGlkICNjY2MhaW1wb3J0YW50fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgZ2V0VmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5zaG93VG9vbGJhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZC5kYXRhLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5yZXBsYWNlKC88W14+XSo+L2csICcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19