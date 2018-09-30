/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { InputMask } from 'primeng/inputmask';
export class MaskFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
        /**
         * \@property Whether to validate for pattern.
         */
        this.validateForPattern = true;
    }
    /**
     * \@description Updates the mask.
     * @param {?} mask current The new mask.
     * @return {?}
     */
    updateMask(mask) {
        this.inputMask._mask = mask;
        this.inputMask.initMask();
        this.inputMask.inputViewChild.nativeElement.blur();
        this.inputMask.inputViewChild.nativeElement.focus();
    }
    /**
     * \@description Updates the value.
     * @param {?} value current The new value.
     * @return {?}
     */
    updateMaskValue(value) {
        this.inputMask.writeValue(value);
    }
}
MaskFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-mask-field',
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
  <p-inputMask [id]="field.name"
               [name]="field.name"
               [class]="field.cssClasses.input"
               [ngClass]="{'invalid': isValidationShown()}"
               [title]="field.tooltip | translate"
               [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
               #input="ngModel"
               [readonly]="field.readonly"
               [(ngModel)]="field.data.value"
               [mask]="field.validation.mask"
               [slotChar]="field.slotChar"
               [autoClear]="field.autoClear"
               [unmask]="field.unmask"
               [disabled]="field.disabled"
               [maxlength]="field.validation.length"
               [characterPattern]="field.validation.characterPattern"
               [pattern]="field.validation.pattern"
               *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
               (ngModelChange)="validate();triggerDynamicEvent('onChange', $event, field);">
  </p-inputMask>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field.data.value}}
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
                styles: [``]
            },] },
];
MaskFieldComponent.propDecorators = {
    inputMask: [{ type: ViewChild, args: [InputMask,] }]
};
if (false) {
    /**
     * \@property The validation summary component.
     * @type {?}
     */
    MaskFieldComponent.prototype.inputMask;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    MaskFieldComponent.prototype.validateForRequired;
    /**
     * \@property Whether to validate for pattern.
     * @type {?}
     */
    MaskFieldComponent.prototype.validateForPattern;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBd0Q5QyxNQUFNLHlCQUEwQixTQUFRLGNBQWM7Ozs7OzttQ0FLZCxJQUFJOzs7O2tDQUdMLElBQUk7Ozs7Ozs7SUFLbEMsVUFBVSxDQUFDLElBQVM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRTVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7OztJQU0vQyxlQUFlLENBQUMsS0FBVTtRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztZQWpGcEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlEWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7O3dCQUdFLFNBQVMsU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dE1hc2sgfSBmcm9tICdwcmltZW5nL2lucHV0bWFzayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1tYXNrLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWlucHV0TWFzayBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICBbbWFza109XCJmaWVsZC52YWxpZGF0aW9uLm1hc2tcIlxyXG4gICAgICAgICAgICAgICBbc2xvdENoYXJdPVwiZmllbGQuc2xvdENoYXJcIlxyXG4gICAgICAgICAgICAgICBbYXV0b0NsZWFyXT1cImZpZWxkLmF1dG9DbGVhclwiXHJcbiAgICAgICAgICAgICAgIFt1bm1hc2tdPVwiZmllbGQudW5tYXNrXCJcclxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgW21heGxlbmd0aF09XCJmaWVsZC52YWxpZGF0aW9uLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgIFtjaGFyYWN0ZXJQYXR0ZXJuXT1cImZpZWxkLnZhbGlkYXRpb24uY2hhcmFjdGVyUGF0dGVyblwiXHJcbiAgICAgICAgICAgICAgIFtwYXR0ZXJuXT1cImZpZWxkLnZhbGlkYXRpb24ucGF0dGVyblwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIj5cclxuICA8L3AtaW5wdXRNYXNrPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkLmRhdGEudmFsdWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc2tGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZChJbnB1dE1hc2spIGlucHV0TWFzazogSW5wdXRNYXNrO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHBhdHRlcm4uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JQYXR0ZXJuOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBtYXNrLlxyXG4gICAqIEBwYXJhbSBtYXNrIGN1cnJlbnQgVGhlIG5ldyBtYXNrLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZU1hc2sobWFzazogYW55KSB7XHJcbiAgICB0aGlzLmlucHV0TWFzay5fbWFzayA9IG1hc2s7XHJcblxyXG4gICAgdGhpcy5pbnB1dE1hc2suaW5pdE1hc2soKTtcclxuXHJcbiAgICB0aGlzLmlucHV0TWFzay5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuXHJcbiAgICB0aGlzLmlucHV0TWFzay5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIHZhbHVlLlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBjdXJyZW50IFRoZSBuZXcgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlTWFza1ZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuaW5wdXRNYXNrLndyaXRlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=