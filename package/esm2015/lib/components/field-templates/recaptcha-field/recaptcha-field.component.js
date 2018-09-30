/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { InputError } from '../../../models/input-error';
export class RecaptchaFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} languageService
     */
    constructor(bridgeService, languageService) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.languageService = languageService;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        this.isValid = false;
        this.clearValidationErrors();
    }
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    validate(eventArguments, isSubmit) {
        this.preValidate(isSubmit);
        if (this.shouldValidate()) {
            if (this.field.validation.required) {
                if (!isSubmit) {
                    this.isValid = eventArguments != null;
                }
                if (!this.isValid) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.requiredText));
                }
            }
            this.updateValidationSummary();
        }
        return this.field.validationErrors;
    }
    /**
     * \@description Sets the captcha language.
     * @return {?}
     */
    setCaptchaLanguge() {
        /** @type {?} */
        const language = this.languageService.getLanguage();
        if (this.recaptchaElement) {
            /** @type {?} */
            const captchaIFrame = this.recaptchaElement.elementRef.nativeElement.querySelector('iframe');
            if (captchaIFrame) {
                /** @type {?} */
                const src = captchaIFrame.getAttribute('src');
                captchaIFrame.setAttribute('src', src.replace(/hl=(.*?)&/, 'hl=' + language + '&'));
            }
        }
        this.isValid = false;
        this.clearValidationErrors();
    }
}
RecaptchaFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-recaptcha-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <re-captcha #recaptcha
              [id]="field.name"
              [siteKey]="field.siteKey"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [theme]="field.theme"
              [size]="field.size"
              [title]="field.tooltip | translate"
              (resolved)="validate($event);">
  </re-captcha>

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
/** @nocollapse */
RecaptchaFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: LanguageService }
];
RecaptchaFieldComponent.propDecorators = {
    recaptchaElement: [{ type: ViewChild, args: ['recaptcha',] }]
};
if (false) {
    /**
     * \@property The recaptcha element.
     * @type {?}
     */
    RecaptchaFieldComponent.prototype.recaptchaElement;
    /**
     * \@property Whether the field is valid.
     * @type {?}
     */
    RecaptchaFieldComponent.prototype.isValid;
    /** @type {?} */
    RecaptchaFieldComponent.prototype.bridgeService;
    /** @type {?} */
    RecaptchaFieldComponent.prototype.languageService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXB0Y2hhLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JlY2FwdGNoYS1maWVsZC9yZWNhcHRjaGEtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUF1Q3pELE1BQU0sOEJBQStCLFNBQVEsY0FBYzs7Ozs7SUFPekQsWUFDUyxlQUNDO1FBRVIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSGQsa0JBQWEsR0FBYixhQUFhO1FBQ1osb0JBQWUsR0FBZixlQUFlO0tBR3hCOzs7OztJQUdNLFVBQVU7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7Ozs7Ozs7SUFReEIsUUFBUSxDQUFDLGNBQW9CLEVBQUUsUUFBa0I7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsSUFBSSxJQUFJLENBQUM7aUJBQ3ZDO2dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUMzSDthQUNGO1lBRUQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7O0lBSTlCLGlCQUFpQjs7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOztZQUMxQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0YsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2xCLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRTlDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyRjtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Ozs7WUFuR2hDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0NYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7O1lBeENRLGFBQWE7WUFDYixlQUFlOzs7K0JBMENyQixTQUFTLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcmVjYXB0Y2hhLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxyZS1jYXB0Y2hhICNyZWNhcHRjaGFcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW3NpdGVLZXldPVwiZmllbGQuc2l0ZUtleVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGhlbWVdPVwiZmllbGQudGhlbWVcIlxyXG4gICAgICAgICAgICAgIFtzaXplXT1cImZpZWxkLnNpemVcIlxyXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAocmVzb2x2ZWQpPVwidmFsaWRhdGUoJGV2ZW50KTtcIj5cclxuICA8L3JlLWNhcHRjaGE+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSByZWNhcHRjaGEgZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3JlY2FwdGNoYScpIHJlY2FwdGNoYUVsZW1lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRoZSBmaWVsZCBpcyB2YWxpZC4qL1xyXG4gIHByaXZhdGUgaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybSBjb250cm9sIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHVibGljIHZhbGlkYXRlKGV2ZW50QXJndW1lbnRzPzogYW55LCBpc1N1Ym1pdD86IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLnByZVZhbGlkYXRlKGlzU3VibWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIWlzU3VibWl0KSB7XHJcbiAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldmVudEFyZ3VtZW50cyAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRUZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FwdGNoYSBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBzZXRDYXB0Y2hhTGFuZ3VnZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZWNhcHRjaGFFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNhcHRjaGFJRnJhbWUgPSB0aGlzLnJlY2FwdGNoYUVsZW1lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG5cclxuICAgICAgaWYgKGNhcHRjaGFJRnJhbWUpIHtcclxuICAgICAgICBjb25zdCBzcmMgPSBjYXB0Y2hhSUZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblxyXG4gICAgICAgIGNhcHRjaGFJRnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMucmVwbGFjZSgvaGw9KC4qPykmLywgJ2hsPScgKyBsYW5ndWFnZSArICcmJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICB9XHJcbn1cclxuIl19