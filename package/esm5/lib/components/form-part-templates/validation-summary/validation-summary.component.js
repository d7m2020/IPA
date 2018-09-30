/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { ValidationSummaryModes, SwalTypes } from '../../../models/enums';
import swal from 'sweetalert2';
var ValidationSummaryComponent = /** @class */ (function () {
    function ValidationSummaryComponent(bridgeService, languageService, changeDetectorRef) {
        this.bridgeService = bridgeService;
        this.languageService = languageService;
        this.changeDetectorRef = changeDetectorRef;
    }
    /** @description Shows the validation summary as an alert.*/
    /**
     * \@description Shows the validation summary as an alert.
     * @return {?}
     */
    ValidationSummaryComponent.prototype.showSummaryAlert = /**
     * \@description Shows the validation summary as an alert.
     * @return {?}
     */
    function () {
        if (this.bridgeService.configuration.settings.validationSummaryMode === ValidationSummaryModes.Alert) {
            this.changeDetectorRef.detectChanges();
            swal({
                html: this.validationSummaryElement.nativeElement.innerHTML,
                type: SwalTypes.Warning,
                confirmButtonText: this.languageService.translations.buttons.Ok
            });
        }
    };
    ValidationSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-validation-summary',
                    template: "<div #validationSummary\n     class=\"validation-summary-container\"\n     [hidden]=\"bridgeService?.configuration?.settings?.validationSummaryMode !='List'\">\n  <div class=\"validation-summary\"\n       *ngIf=\"bridgeService?.configuration?.validationErrors?.length > 0\">\n    <span class=\"validation-summary-title-section\">{{'validations.ValidationSummaryErrors' | translate}}</span>\n    <ul>\n      <li class=\"validation-summary-error\" *ngFor=\"let error of bridgeService?.configuration?.validationErrors\">\n        {{error.message | translate}}\n      </li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [".validation-summary{border:1px solid #d6d6d6;padding-top:15px;color:red;margin-bottom:20px}.validation-summary-title-section{font-weight:700;padding:15px 20px;display:block}.validation-summary-container{margin-top:20px}"]
                },] },
    ];
    /** @nocollapse */
    ValidationSummaryComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: LanguageService },
        { type: ChangeDetectorRef }
    ]; };
    ValidationSummaryComponent.propDecorators = {
        validationSummaryElement: [{ type: ViewChild, args: ['validationSummary',] }]
    };
    return ValidationSummaryComponent;
}());
export { ValidationSummaryComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy92YWxpZGF0aW9uLXN1bW1hcnkvdmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sSUFBSSxNQUFNLGFBQWEsQ0FBQzs7SUF3QjdCLG9DQUNTLGVBQ0MsaUJBQ0E7UUFGRCxrQkFBYSxHQUFiLGFBQWE7UUFDWixvQkFBZSxHQUFmLGVBQWU7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCO0tBQ3RCO0lBRUwsNERBQTREOzs7OztJQUM1RCxxREFBZ0I7Ozs7SUFBaEI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEtBQUssc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQzNELElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztnQkFDdkIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDaEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsMGxCQWFYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDZOQUE2TixDQUFDO2lCQUN4Tzs7OztnQkF0QlEsYUFBYTtnQkFDYixlQUFlO2dCQUZtQixpQkFBaUI7OzsyQ0EwQnpELFNBQVMsU0FBQyxtQkFBbUI7O3FDQTFCaEM7O1NBd0JhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlNb2RlcywgU3dhbFR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctdmFsaWRhdGlvbi1zdW1tYXJ5JyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI3ZhbGlkYXRpb25TdW1tYXJ5XHJcbiAgICAgY2xhc3M9XCJ2YWxpZGF0aW9uLXN1bW1hcnktY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy52YWxpZGF0aW9uU3VtbWFyeU1vZGUgIT0nTGlzdCdcIj5cclxuICA8ZGl2IGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5XCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8udmFsaWRhdGlvbkVycm9ycz8ubGVuZ3RoID4gMFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLXN1bW1hcnktdGl0bGUtc2VjdGlvblwiPnt7J3ZhbGlkYXRpb25zLlZhbGlkYXRpb25TdW1tYXJ5RXJyb3JzJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgY2xhc3M9XCJ2YWxpZGF0aW9uLXN1bW1hcnktZXJyb3JcIiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLnZhbGlkYXRpb24tc3VtbWFyeXtib3JkZXI6MXB4IHNvbGlkICNkNmQ2ZDY7cGFkZGluZy10b3A6MTVweDtjb2xvcjpyZWQ7bWFyZ2luLWJvdHRvbToyMHB4fS52YWxpZGF0aW9uLXN1bW1hcnktdGl0bGUtc2VjdGlvbntmb250LXdlaWdodDo3MDA7cGFkZGluZzoxNXB4IDIwcHg7ZGlzcGxheTpibG9ja30udmFsaWRhdGlvbi1zdW1tYXJ5LWNvbnRhaW5lcnttYXJnaW4tdG9wOjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3ZhbGlkYXRpb25TdW1tYXJ5JykgdmFsaWRhdGlvblN1bW1hcnlFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTaG93cyB0aGUgdmFsaWRhdGlvbiBzdW1tYXJ5IGFzIGFuIGFsZXJ0LiovXHJcbiAgc2hvd1N1bW1hcnlBbGVydCgpIHtcclxuICAgIGlmICh0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZXR0aW5ncy52YWxpZGF0aW9uU3VtbWFyeU1vZGUgPT09IFZhbGlkYXRpb25TdW1tYXJ5TW9kZXMuQWxlcnQpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgICBzd2FsKHtcclxuICAgICAgICBodG1sOiB0aGlzLnZhbGlkYXRpb25TdW1tYXJ5RWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCxcclxuICAgICAgICB0eXBlOiBTd2FsVHlwZXMuV2FybmluZyxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==