/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
export class ChipsFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
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
                data.append(this.field.name + '[' + i + ']', value);
            }
        }
        return data;
    }
}
ChipsFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-chips-field',
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
  <p-chips [id]="field.name"
           [name]="field.name"
           [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
           [class]="field.cssClasses.input"
           [ngClass]="{'invalid': isValidationShown()}"
           [title]="field.tooltip | translate"
           #input="ngModel"
           [disabled]="field.disabled"
           [(ngModel)]="field.data.value"
           [allowDuplicate]="field.validation.allowDuplicate"
           [addOnBlur]="field.addOnBlur"
           [addOnTab]="field.addOnTab"
           [required]="field.validation.required"
           *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
           (onAdd)="triggerDynamicEvent('onAdd', $event, field);"
           (onRemove)="triggerDynamicEvent('onRemove', $event, field);"
           (ngModelChange)="validate();">
  </p-chips>

  <!-- display -->
  <div [class]="field.cssClasses.display"
       *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <ul>
      <li *ngFor="let title of field.data.value">{{title}}</li>
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
                styles: [`:host ::ng-deep .ui-chips-input-token,:host ::ng-deep .ui-chips-input-token input{width:100%}:host ::ng-deep .ui-chips>ul.ui-inputtext{padding:5px .25em}`]
            },] },
];
if (false) {
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    ChipsFieldComponent.prototype.validateForRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hpcHMtZmllbGQvY2hpcHMtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXdEMUQsTUFBTSwwQkFBMkIsU0FBUSxjQUFjOzs7Ozs7Z0NBRWxCLElBQUk7Ozs7Ozs7SUFNaEMsY0FBYyxDQUFDLElBQWM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Z0JBQ3RELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztZQXZFZixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaURYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLDJKQUEySixDQUFDO2FBQ3RLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWNoaXBzLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWNoaXBzIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgIFthbGxvd0R1cGxpY2F0ZV09XCJmaWVsZC52YWxpZGF0aW9uLmFsbG93RHVwbGljYXRlXCJcclxuICAgICAgICAgICBbYWRkT25CbHVyXT1cImZpZWxkLmFkZE9uQmx1clwiXHJcbiAgICAgICAgICAgW2FkZE9uVGFiXT1cImZpZWxkLmFkZE9uVGFiXCJcclxuICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAob25BZGQpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25BZGQnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgIChvblJlbW92ZSk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblJlbW92ZScsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICA8L3AtY2hpcHM+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdGl0bGUgb2YgZmllbGQuZGF0YS52YWx1ZVwiPnt7dGl0bGV9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzLWlucHV0LXRva2VuLDpob3N0IDo6bmctZGVlcCAudWktY2hpcHMtaW5wdXQtdG9rZW4gaW5wdXR7d2lkdGg6MTAwJX06aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzPnVsLnVpLWlucHV0dGV4dHtwYWRkaW5nOjVweCAuMjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpcHNGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpZWxkLmRhdGEudmFsdWVbaV07XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICdbJyArIGkgKyAnXScsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=