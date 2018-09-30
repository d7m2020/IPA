/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BridgeService } from '../../../services/bridge.service';
var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent(bridgeService) {
        this.bridgeService = bridgeService;
    }
    /**
     * \@description Switches the active section.
     * @param {?} section
     * @return {?}
     */
    TabsSectionComponent.prototype.switchSection = /**
     * \@description Switches the active section.
     * @param {?} section
     * @return {?}
     */
    function (section) {
        this.bridgeService.configuration.currentSection = section;
    };
    TabsSectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-tabs-section',
                    template: "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let section of bridgeService?.configuration?.sections\"\n      class=\"nav-item\">\n    <a class=\"nav-link\"\n       href=\"javascript:;\"\n       [ngClass]=\"{'active':section.id==bridgeService?.configuration?.currentSection?.id}\"\n       (click)=\"switchSection(section)\">\n      <span>{{section.legend | translate}}</span>\n      <span class=\"validation-errors-count\"\n            *ngIf=\"section.validationErrorsCount > 0\">\n      </span>\n    </a>\n  </li>\n</ul>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TabsSectionComponent.ctorParameters = function () { return [
        { type: BridgeService }
    ]; };
    return TabsSectionComponent;
}());
export { TabsSectionComponent };
if (false) {
    /** @type {?} */
    TabsSectionComponent.prototype.bridgeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy90YWJzLXNlY3Rpb24vdGFicy1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBdUIvRCw4QkFDUztRQUFBLGtCQUFhLEdBQWIsYUFBYTtLQUNqQjs7Ozs7O0lBS0UsNENBQWE7Ozs7O2NBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQzs7O2dCQTVCN0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwwZ0JBY1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQXJCUSxhQUFhOzsrQkFEdEI7O1NBdUJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3NlY3Rpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctdGFicy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gIDxsaSAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZWN0aW9uc1wiXHJcbiAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIlxyXG4gICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6c2VjdGlvbi5pZD09YnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uY3VycmVudFNlY3Rpb24/LmlkfVwiXHJcbiAgICAgICAoY2xpY2spPVwic3dpdGNoU2VjdGlvbihzZWN0aW9uKVwiPlxyXG4gICAgICA8c3Bhbj57e3NlY3Rpb24ubGVnZW5kIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvcnMtY291bnRcIlxyXG4gICAgICAgICAgICAqbmdJZj1cInNlY3Rpb24udmFsaWRhdGlvbkVycm9yc0NvdW50ID4gMFwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9saT5cclxuPC91bD5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNTZWN0aW9uQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTd2l0Y2hlcyB0aGUgYWN0aXZlIHNlY3Rpb24uXHJcbiAgICogQHBhcmFtIFNlY3Rpb24gc2VjdGlvbiBUaGUgbmV3IGFjdGl2ZSBzZWN0aW9uLlxyXG4gICovXHJcbiAgcHVibGljIHN3aXRjaFNlY3Rpb24oc2VjdGlvbjogU2VjdGlvbikge1xyXG4gICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=