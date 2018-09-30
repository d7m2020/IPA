/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
export class RadiobuttonFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
}
RadiobuttonFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-radiobutton-field',
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
  <div class="radioButtonHolder"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'">
    <p-radioButton *ngFor="let radiobutton of field.data.options; let i = index"
                   [id]="field.name+'_'+i"
                   [name]="field.name"
                   [(ngModel)]="field.data.value"
                   [class]="field.cssClasses.input"
                   [ngClass]="{'invalid': isValidationShown()}"
                   [title]="field.tooltip | translate"
                   #input="ngModel"
                   [required]="field.validation.required"
                   [label]=" radiobutton.name | translate"
                   [value]="radiobutton.id"
                   [disabled]="field.disabled"
                   (onClick)="triggerDynamicEvent('onClick', $event, field);"
                   (ngModelChange)="validate();">
    </p-radioButton>
  </div>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value}}
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
                styles: [`p-radiobutton{display:block}`]
            },] },
];
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    RadiobuttonFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24tZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmFkaW9idXR0b24tZmllbGQvcmFkaW9idXR0b24tZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBc0R2RixNQUFNLGdDQUFpQyxTQUFRLHVCQUF1Qjs7Ozs7O21DQUU5QixJQUFJOzs7O1lBdEQzQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3VuZGFibGVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXJhZGlvYnV0dG9uLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJyYWRpb0J1dHRvbkhvbGRlclwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIj5cclxuICAgIDxwLXJhZGlvQnV0dG9uICpuZ0Zvcj1cImxldCByYWRpb2J1dHRvbiBvZiBmaWVsZC5kYXRhLm9wdGlvbnM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWUrJ18nK2lcIlxyXG4gICAgICAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICBbbGFiZWxdPVwiIHJhZGlvYnV0dG9uLm5hbWUgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInJhZGlvYnV0dG9uLmlkXCJcclxuICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAob25DbGljayk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNsaWNrJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgICA8L3AtcmFkaW9CdXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQ/LmRhdGE/LnZhbHVlfX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYHAtcmFkaW9idXR0b257ZGlzcGxheTpibG9ja31gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG59XHJcbiJdfQ==