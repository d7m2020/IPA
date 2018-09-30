/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { ValidationSummaryModes, SwalTypes } from '../../../models/enums';
import swal from 'sweetalert2';
export class ValidationSummaryComponent {
    /**
     * @param {?} bridgeService
     * @param {?} languageService
     * @param {?} changeDetectorRef
     */
    constructor(bridgeService, languageService, changeDetectorRef) {
        this.bridgeService = bridgeService;
        this.languageService = languageService;
        this.changeDetectorRef = changeDetectorRef;
    }
    /**
     * \@description Shows the validation summary as an alert.
     * @return {?}
     */
    showSummaryAlert() {
        if (this.bridgeService.configuration.settings.validationSummaryMode === ValidationSummaryModes.Alert) {
            this.changeDetectorRef.detectChanges();
            swal({
                html: this.validationSummaryElement.nativeElement.innerHTML,
                type: SwalTypes.Warning,
                confirmButtonText: this.languageService.translations.buttons.Ok
            });
        }
    }
}
ValidationSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-validation-summary',
                template: `<div #validationSummary
     class="validation-summary-container"
     [hidden]="bridgeService?.configuration?.settings?.validationSummaryMode !='List'">
  <div class="validation-summary"
       *ngIf="bridgeService?.configuration?.validationErrors?.length > 0">
    <span class="validation-summary-title-section">{{'validations.ValidationSummaryErrors' | translate}}</span>
    <ul>
      <li class="validation-summary-error" *ngFor="let error of bridgeService?.configuration?.validationErrors">
        {{error.message | translate}}
      </li>
    </ul>
  </div>
</div>
`,
                styles: [`.validation-summary{border:1px solid #d6d6d6;padding-top:15px;color:red;margin-bottom:20px}.validation-summary-title-section{font-weight:700;padding:15px 20px;display:block}.validation-summary-container{margin-top:20px}`]
            },] },
];
/** @nocollapse */
ValidationSummaryComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: LanguageService },
    { type: ChangeDetectorRef }
];
ValidationSummaryComponent.propDecorators = {
    validationSummaryElement: [{ type: ViewChild, args: ['validationSummary',] }]
};
if (false) {
    /**
     * \@property The validation summary element.
     * @type {?}
     */
    ValidationSummaryComponent.prototype.validationSummaryElement;
    /** @type {?} */
    ValidationSummaryComponent.prototype.bridgeService;
    /** @type {?} */
    ValidationSummaryComponent.prototype.languageService;
    /** @type {?} */
    ValidationSummaryComponent.prototype.changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy92YWxpZGF0aW9uLXN1bW1hcnkvdmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQztBQW9CL0IsTUFBTTs7Ozs7O0lBSUosWUFDUyxlQUNDLGlCQUNBO1FBRkQsa0JBQWEsR0FBYixhQUFhO1FBQ1osb0JBQWUsR0FBZixlQUFlO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQjtLQUN0Qjs7Ozs7SUFHTCxnQkFBZ0I7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQzNELElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDdkIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDaEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Q0FhWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyw2TkFBNk4sQ0FBQzthQUN4Tzs7OztZQXRCUSxhQUFhO1lBQ2IsZUFBZTtZQUZtQixpQkFBaUI7Ozt1Q0EwQnpELFNBQVMsU0FBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TdW1tYXJ5TW9kZXMsIFN3YWxUeXBlcyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9lbnVtcyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXZhbGlkYXRpb24tc3VtbWFyeScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICN2YWxpZGF0aW9uU3VtbWFyeVxyXG4gICAgIGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5LWNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8udmFsaWRhdGlvblN1bW1hcnlNb2RlICE9J0xpc3QnXCI+XHJcbiAgPGRpdiBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeVwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnZhbGlkYXRpb25FcnJvcnM/Lmxlbmd0aCA+IDBcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5LXRpdGxlLXNlY3Rpb25cIj57eyd2YWxpZGF0aW9ucy5WYWxpZGF0aW9uU3VtbWFyeUVycm9ycycgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpIGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5LWVycm9yXCIgKm5nRm9yPVwibGV0IGVycm9yIG9mIGJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC52YWxpZGF0aW9uLXN1bW1hcnl7Ym9yZGVyOjFweCBzb2xpZCAjZDZkNmQ2O3BhZGRpbmctdG9wOjE1cHg7Y29sb3I6cmVkO21hcmdpbi1ib3R0b206MjBweH0udmFsaWRhdGlvbi1zdW1tYXJ5LXRpdGxlLXNlY3Rpb257Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmc6MTVweCAyMHB4O2Rpc3BsYXk6YmxvY2t9LnZhbGlkYXRpb24tc3VtbWFyeS1jb250YWluZXJ7bWFyZ2luLXRvcDoyMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdmFsaWRhdGlvbiBzdW1tYXJ5IGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCd2YWxpZGF0aW9uU3VtbWFyeScpIHZhbGlkYXRpb25TdW1tYXJ5RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgdGhlIHZhbGlkYXRpb24gc3VtbWFyeSBhcyBhbiBhbGVydC4qL1xyXG4gIHNob3dTdW1tYXJ5QWxlcnQoKSB7XHJcbiAgICBpZiAodGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MudmFsaWRhdGlvblN1bW1hcnlNb2RlID09PSBWYWxpZGF0aW9uU3VtbWFyeU1vZGVzLkFsZXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgc3dhbCh7XHJcbiAgICAgICAgaHRtbDogdGhpcy52YWxpZGF0aW9uU3VtbWFyeUVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsXHJcbiAgICAgICAgdHlwZTogU3dhbFR5cGVzLldhcm5pbmcsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=