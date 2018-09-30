/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
var SelectFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SelectFieldComponent, _super);
    function SelectFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        return _this;
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    SelectFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.id', this.field.data.value.id);
        }
        return data;
    };
    SelectFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-select-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-dropdown [options]=\"field.data.options\"\n              [id]=\"field.name\"\n              [name]=\"field.name\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [title]=\"field.tooltip | translate\"\n              #input=\"ngModel\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [(ngModel)]=\"field.data.value\"\n              [required]=\"field.validation.required\"\n              [disabled]=\"field.disabled\"\n              [filter]=\"field.enablefilter\"\n              optionLabel=\"name\"\n              dataKey=\"id\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onChange)=\"validate();triggerDynamicEvent('onChange', $event, field);\">\n  </p-dropdown>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.name}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["body.ar :host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{text-align:right}body.ar :host ::ng-deep p-dropdown .ui-dropdown .ui-dropdown-trigger{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep .ui-dropdown .ui-dropdown-label{padding-right:5px}"]
                },] },
    ];
    return SelectFieldComponent;
}(BoundableFieldComponent));
export { SelectFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    SelectFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7SUFxRDdDLGdEQUF1Qjs7Ozs7O29DQUV6QixJQUFJOzs7Ozs7OztJQU1uQyw2Q0FBYzs7Ozs7Y0FBQyxJQUFjO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7O2dCQWhFZixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHlyREE4Q1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsc1ZBQXNWLENBQUM7aUJBQ2pXOzsrQkFyREQ7RUFzRDBDLHVCQUF1QjtTQUFwRCxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1zZWxlY3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwiZmllbGQuZGF0YS5vcHRpb25zXCJcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW2ZpbHRlcl09XCJmaWVsZC5lbmFibGVmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9wLWRyb3Bkb3duPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkPy5kYXRhPy52YWx1ZT8ubmFtZX19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2Bib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktZHJvcGRvd24tcGFuZWwgLnVpLWRyb3Bkb3duLWl0ZW17dGV4dC1hbGlnbjpyaWdodH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBwLWRyb3Bkb3duIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tdHJpZ2dlcntsZWZ0OjA7cmlnaHQ6dW5zZXQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZDZkNmQ2O2JvcmRlci1sZWZ0OjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tbGFiZWx7cGFkZGluZy1yaWdodDo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5pZCcsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==