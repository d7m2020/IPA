/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Optional } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
import { HttpRequestsService } from '../../../services/http-requests.service';
export class BoundableFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} httpRequestsService
     * @param {?} translateService
     * @param {?} utilitiesService
     * @param {?} route
     */
    constructor(bridgeService, httpRequestsService, translateService, utilitiesService, route) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.httpRequestsService = httpRequestsService;
        this.translateService = translateService;
        this.utilitiesService = utilitiesService;
        this.route = route;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        if (!this.isFormInDisplayMode()) {
            this.dataBindOptions();
            this.translateService.onLangChange.subscribe((event) => {
                this.dataBindOptions();
            });
        }
    }
    /**
     * \@description Binds the field's options.
     * @return {?}
     */
    dataBindOptions() {
        if (this.field.data && this.field.data.optionsEndpoint) {
            /** @type {?} */
            const endpoint = this.utilitiesService.replaceTokens(this.bridgeService.configuration.endpoints.lookups[this.field.data.optionsEndpoint], this.route, this.bridgeService.additionalParameters);
            this.bindOptions(endpoint);
        }
    }
    /**
     * \@description Binds the field's options.
     * @param {?} endpoint
     * @return {?}
     */
    bindOptions(endpoint) {
        this.httpRequestsService.get(endpoint).subscribe(response => {
            this.field.data.options = response;
        }, exception => {
            console.error('bindOptions: ', exception);
        });
    }
}
BoundableFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-boundable-field',
                template: ''
            },] },
];
/** @nocollapse */
BoundableFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: HttpRequestsService },
    { type: TranslateService },
    { type: UtilitiesService },
    { type: ActivatedRoute, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    BoundableFieldComponent.prototype.bridgeService;
    /** @type {?} */
    BoundableFieldComponent.prototype.httpRequestsService;
    /** @type {?} */
    BoundableFieldComponent.prototype.translateService;
    /** @type {?} */
    BoundableFieldComponent.prototype.utilitiesService;
    /** @type {?} */
    BoundableFieldComponent.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFNOUUsTUFBTSw4QkFBK0IsU0FBUSxjQUFjOzs7Ozs7OztJQUN6RCxZQUNTLGVBQ0MscUJBQ0Esa0JBQ0Esa0JBQ1ksS0FBcUI7UUFFekMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBTmQsa0JBQWEsR0FBYixhQUFhO1FBQ1osd0JBQW1CLEdBQW5CLG1CQUFtQjtRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDSixVQUFLLEdBQUwsS0FBSyxDQUFnQjtLQUcxQzs7Ozs7SUFHTSxxQkFBcUI7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFO2dCQUN0RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEIsQ0FBQyxDQUFDO1NBQ0o7Ozs7OztJQUlPLGVBQWU7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs7WUFDdkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFDbkYsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUN4QyxDQUFDO1lBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtLQUNGOzs7Ozs7SUFLUyxXQUFXLENBQUMsUUFBZ0I7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztTQUNwQyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ0o7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQVBRLGFBQWE7WUFFYixtQkFBbUI7WUFKbkIsZ0JBQWdCO1lBR2hCLGdCQUFnQjtZQUZoQixjQUFjLHVCQWVsQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9odHRwLXJlcXVlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctYm91bmRhYmxlLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGh0dHBSZXF1ZXN0c1NlcnZpY2U6IEh0dHBSZXF1ZXN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxpdGllc1NlcnZpY2U6IFV0aWxpdGllc1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZGF0YUJpbmRPcHRpb25zKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YUJpbmRPcHRpb25zKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBCaW5kcyB0aGUgZmllbGQncyBvcHRpb25zLiovXHJcbiAgcHJvdGVjdGVkIGRhdGFCaW5kT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLm9wdGlvbnNFbmRwb2ludCkge1xyXG4gICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5yZXBsYWNlVG9rZW5zKFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5sb29rdXBzW3RoaXMuZmllbGQuZGF0YS5vcHRpb25zRW5kcG9pbnRdLFxyXG4gICAgICAgIHRoaXMucm91dGUsXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmFkZGl0aW9uYWxQYXJhbWV0ZXJzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRPcHRpb25zKGVuZHBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZpZWxkJ3Mgb3B0aW9ucy5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50IFRoZSBlbmRwb2ludC5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBiaW5kT3B0aW9ucyhlbmRwb2ludDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGVuZHBvaW50KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEub3B0aW9ucyA9IHJlc3BvbnNlO1xyXG4gICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignYmluZE9wdGlvbnM6ICcsIGV4Y2VwdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19