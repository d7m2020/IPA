/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BridgeService } from '../../../services/bridge.service';
export class TabsSectionComponent {
    /**
     * @param {?} bridgeService
     */
    constructor(bridgeService) {
        this.bridgeService = bridgeService;
    }
    /**
     * \@description Switches the active section.
     * @param {?} section
     * @return {?}
     */
    switchSection(section) {
        this.bridgeService.configuration.currentSection = section;
    }
}
TabsSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-tabs-section',
                template: `<ul class="nav nav-tabs">
  <li *ngFor="let section of bridgeService?.configuration?.sections"
      class="nav-item">
    <a class="nav-link"
       href="javascript:;"
       [ngClass]="{'active':section.id==bridgeService?.configuration?.currentSection?.id}"
       (click)="switchSection(section)">
      <span>{{section.legend | translate}}</span>
      <span class="validation-errors-count"
            *ngIf="section.validationErrorsCount > 0">
      </span>
    </a>
  </li>
</ul>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
TabsSectionComponent.ctorParameters = () => [
    { type: BridgeService }
];
if (false) {
    /** @type {?} */
    TabsSectionComponent.prototype.bridgeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy90YWJzLXNlY3Rpb24vdGFicy1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFzQmpFLE1BQU07Ozs7SUFDSixZQUNTO1FBQUEsa0JBQWEsR0FBYixhQUFhO0tBQ2pCOzs7Ozs7SUFLRSxhQUFhLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQzs7OztZQTVCN0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Q0FjWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQXJCUSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvc2VjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy10YWJzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgPGxpICpuZ0Zvcj1cImxldCBzZWN0aW9uIG9mIGJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNlY3Rpb25zXCJcclxuICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiXHJcbiAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzpzZWN0aW9uLmlkPT1icmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5jdXJyZW50U2VjdGlvbj8uaWR9XCJcclxuICAgICAgIChjbGljayk9XCJzd2l0Y2hTZWN0aW9uKHNlY3Rpb24pXCI+XHJcbiAgICAgIDxzcGFuPnt7c2VjdGlvbi5sZWdlbmQgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9ycy1jb3VudFwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwic2VjdGlvbi52YWxpZGF0aW9uRXJyb3JzQ291bnQgPiAwXCI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2xpPlxyXG48L3VsPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic1NlY3Rpb25Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFN3aXRjaGVzIHRoZSBhY3RpdmUgc2VjdGlvbi5cclxuICAgKiBAcGFyYW0gU2VjdGlvbiBzZWN0aW9uIFRoZSBuZXcgYWN0aXZlIHNlY3Rpb24uXHJcbiAgKi9cclxuICBwdWJsaWMgc3dpdGNoU2VjdGlvbihzZWN0aW9uOiBTZWN0aW9uKSB7XHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHNlY3Rpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==