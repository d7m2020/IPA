/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
export class SelectFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.id', this.field.data.value.id);
        }
        return data;
    }
}
SelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-select-field',
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
  <p-dropdown [options]="field.data.options"
              [id]="field.name"
              [name]="field.name"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [title]="field.tooltip | translate"
              #input="ngModel"
              [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
              [(ngModel)]="field.data.value"
              [required]="field.validation.required"
              [disabled]="field.disabled"
              [filter]="field.enablefilter"
              optionLabel="name"
              dataKey="id"
              *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
              (onChange)="validate();triggerDynamicEvent('onChange', $event, field);">
  </p-dropdown>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value?.name}}
  </span>

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
                styles: [`body.ar :host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{text-align:right}body.ar :host ::ng-deep p-dropdown .ui-dropdown .ui-dropdown-trigger{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep .ui-dropdown .ui-dropdown-label{padding-right:5px}`]
            },] },
];
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    SelectFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBcUR2RixNQUFNLDJCQUE0QixTQUFRLHVCQUF1Qjs7Ozs7O21DQUV6QixJQUFJOzs7Ozs7O0lBTW5DLGNBQWMsQ0FBQyxJQUFjO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztZQWhFZixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOENYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHNWQUFzVixDQUFDO2FBQ2pXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctc2VsZWN0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWRyb3Bkb3duIFtvcHRpb25zXT1cImZpZWxkLmRhdGEub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmllbGQuZW5hYmxlZmlsdGVyXCJcclxuICAgICAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNoYW5nZScsICRldmVudCwgZmllbGQpO1wiPlxyXG4gIDwvcC1kcm9wZG93bj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZD8uZGF0YT8udmFsdWU/Lm5hbWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYm9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWRyb3Bkb3duLXBhbmVsIC51aS1kcm9wZG93bi1pdGVte3RleHQtYWxpZ246cmlnaHR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1kcm9wZG93biAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLXRyaWdnZXJ7bGVmdDowO3JpZ2h0OnVuc2V0O2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNjtib3JkZXItbGVmdDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVse3BhZGRpbmctcmlnaHQ6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuaWQnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=