/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
export class MultiSelectFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = [];
            this.control.reset();
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + '].id', value.id);
            }
        }
        return data;
    }
}
MultiSelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-multi-select-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-multiSelect [options]="field.data.options"
                 [id]="field.name"
                 [name]="field.name"
                 [class]="field.cssClasses.input"
                 [ngClass]="{'invalid': isValidationShown()}"
                 [title]="field.tooltip | translate"
                 #input="ngModel"
                 [filterPlaceHolder]="field.placeholder | translate"
                 [(ngModel)]="field.data.value"
                 [required]="field.validation.required"
                 [disabled]="field.disabled"
                 [filter]="field.enablefilter"
                 optionLabel="name"
                 dataKey="id"
                 [defaultLabel]="field.placeholder | translate"
                 *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                 (onChange)="triggerDynamicEvent('onChange', $event, field);"
                 (ngModelChange)="validate();">
  </p-multiSelect>

  <!-- display -->
  <div [class]="field.cssClasses.display"
       *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <ul>
      <li *ngFor="let item of field?.data?.value">{{item.name}}</li>
    </ul>
  </div>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`:host ::ng-deep .ui-multiselect.ui-widget{width:100%}:host ::ng-deep p-multiselect .ui-multiselect-label.ui-corner-all{margin-bottom:0;height:35px}body.ar :host ::ng-deep .ui-multiselect-filter-container{float:right}body.ar :host ::ng-deep .ui-multiselect-header .ui-multiselect-close{right:unset;left:.375em}body.ar :host ::ng-deep .ui-multiselect-panel .ui-multiselect-item{text-align:right!important}body.ar :host ::ng-deep p-multiselect .ui-corner-right{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep p-multiselect .ui-multiselect-label.ui-corner-all{padding-right:5px}`]
            },] },
];
if (false) {
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    MultiSelectFieldComponent.prototype.validateForRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL211bHRpLXNlbGVjdC1maWVsZC9tdWx0aS1zZWxlY3QtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBeUR2RixNQUFNLGdDQUFpQyxTQUFRLHVCQUF1Qjs7Ozs7O2dDQUVqQyxJQUFJOzs7Ozs7SUFHaEMsVUFBVTtRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7Ozs7Ozs7SUFPSSxjQUFjLENBQUMsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztnQkFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzRDtTQUNGO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztZQW5GZixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtEWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQywrcEJBQStwQixDQUFDO2FBQzFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3VuZGFibGVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LW11bHRpLXNlbGVjdC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1tdWx0aVNlbGVjdCBbb3B0aW9uc109XCJmaWVsZC5kYXRhLm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgICBbZmlsdGVyUGxhY2VIb2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgW2ZpbHRlcl09XCJmaWVsZC5lbmFibGVmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICBbZGVmYXVsdExhYmVsXT1cImZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNoYW5nZScsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICA8L3AtbXVsdGlTZWxlY3Q+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e2l0ZW0ubmFtZX19PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QudWktd2lkZ2V0e3dpZHRoOjEwMCV9Omhvc3QgOjpuZy1kZWVwIHAtbXVsdGlzZWxlY3QgLnVpLW11bHRpc2VsZWN0LWxhYmVsLnVpLWNvcm5lci1hbGx7bWFyZ2luLWJvdHRvbTowO2hlaWdodDozNXB4fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1tdWx0aXNlbGVjdC1maWx0ZXItY29udGFpbmVye2Zsb2F0OnJpZ2h0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1tdWx0aXNlbGVjdC1oZWFkZXIgLnVpLW11bHRpc2VsZWN0LWNsb3Nle3JpZ2h0OnVuc2V0O2xlZnQ6LjM3NWVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1tdWx0aXNlbGVjdC1wYW5lbCAudWktbXVsdGlzZWxlY3QtaXRlbXt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBwLW11bHRpc2VsZWN0IC51aS1jb3JuZXItcmlnaHR7bGVmdDowO3JpZ2h0OnVuc2V0O2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNjtib3JkZXItbGVmdDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBwLW11bHRpc2VsZWN0IC51aS1tdWx0aXNlbGVjdC1sYWJlbC51aS1jb3JuZXItYWxse3BhZGRpbmctcmlnaHQ6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10uaWQnLCB2YWx1ZS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIl19