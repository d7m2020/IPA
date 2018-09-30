/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BridgeService } from '../../../services/bridge.service';
export class NextPreviousSectionComponent {
    /**
     * @param {?} bridgeService
     */
    constructor(bridgeService) {
        this.bridgeService = bridgeService;
    }
    /**
     * \@description Cycles through the sections.
     * @param {?} increment
     * @return {?}
     */
    incrementSection(increment) {
        /** @type {?} */
        let newSectionId = this.bridgeService.configuration.currentSection.id + increment;
        if (newSectionId === 0) {
            newSectionId = this.bridgeService.configuration.sections.length;
        }
        else if (newSectionId === this.bridgeService.configuration.sections.length + 1) {
            newSectionId = 1;
        }
        this.bridgeService.configuration.currentSection = this.bridgeService.configuration.sections.find(s => s.id === newSectionId);
    }
}
NextPreviousSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-next-previous-section',
                template: `<div class="next-prev-container">
  <a class="arrow-prev"
     href="javascript:;"
     (click)="incrementSection(-1)"
     title="{{'buttons.Previous' | translate}}">
  </a>
  <span class="next-prev-header">{{bridgeService.configuration?.currentSection?.legend | translate}}</span>
  <a class="arrow-next"
     href="javascript:;"
     (click)="incrementSection(1)"
     title="{{'buttons.Next' | translate}}">
  </a>
</div>
`,
                styles: [`.next-prev-container a{text-decoration:none!important}.next-prev-container{text-align:center}.next-prev-header{font-size:2em;font-weight:700}body.en :host ::ng-deep a.arrow-prev:before{content:"\\f104";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next:before{content:"\\f105";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next{float:right}body.en :host ::ng-deep a.arrow-prev{float:left}body.ar :host ::ng-deep a.arrow-prev:before{content:"\\f105";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next:before{content:"\\f104";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next{float:left}body.ar :host ::ng-deep a.arrow-prev{float:right}`]
            },] },
];
/** @nocollapse */
NextPreviousSectionComponent.ctorParameters = () => [
    { type: BridgeService }
];
if (false) {
    /** @type {?} */
    NextPreviousSectionComponent.prototype.bridgeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1wcmV2aW91cy1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9uZXh0LXByZXZpb3VzLXNlY3Rpb24vbmV4dC1wcmV2aW91cy1zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFvQmpFLE1BQU07Ozs7SUFDSixZQUNTO1FBQUEsa0JBQWEsR0FBYixhQUFhO0tBQ2pCOzs7Ozs7SUFLRSxnQkFBZ0IsQ0FBQyxTQUFpQjs7UUFDdkMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFFbEYsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDakU7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQyxDQUFDOzs7O1lBbkNoSSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0NBYVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMseXRCQUF5dEIsQ0FBQzthQUNwdUI7Ozs7WUFuQlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuZXh0LXByZXYtY29udGFpbmVyXCI+XHJcbiAgPGEgY2xhc3M9XCJhcnJvdy1wcmV2XCJcclxuICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAoY2xpY2spPVwiaW5jcmVtZW50U2VjdGlvbigtMSlcIlxyXG4gICAgIHRpdGxlPVwie3snYnV0dG9ucy5QcmV2aW91cycgfCB0cmFuc2xhdGV9fVwiPlxyXG4gIDwvYT5cclxuICA8c3BhbiBjbGFzcz1cIm5leHQtcHJldi1oZWFkZXJcIj57e2JyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbj8uY3VycmVudFNlY3Rpb24/LmxlZ2VuZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gIDxhIGNsYXNzPVwiYXJyb3ctbmV4dFwiXHJcbiAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgKGNsaWNrKT1cImluY3JlbWVudFNlY3Rpb24oMSlcIlxyXG4gICAgIHRpdGxlPVwie3snYnV0dG9ucy5OZXh0JyB8IHRyYW5zbGF0ZX19XCI+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm5leHQtcHJldi1jb250YWluZXIgYXt0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnR9Lm5leHQtcHJldi1jb250YWluZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lm5leHQtcHJldi1oZWFkZXJ7Zm9udC1zaXplOjJlbTtmb250LXdlaWdodDo3MDB9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1wcmV2OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDRcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDVcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0e2Zsb2F0OnJpZ2h0fWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldntmbG9hdDpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldjpiZWZvcmV7Y29udGVudDpcIlxcXFxmMTA1XCI7Zm9udDozZW0vMSBGb250QXdlc29tZTtjb2xvcjojNTU1NTY1fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctbmV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxmMTA0XCI7Zm9udDozZW0vMSBGb250QXdlc29tZTtjb2xvcjojNTU1NTY1fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctbmV4dHtmbG9hdDpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldntmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ3ljbGVzIHRocm91Z2ggdGhlIHNlY3Rpb25zLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgaW5jcmVtZW50IFRoZSBpbmNyZW1lbnQuXHJcbiAgKi9cclxuICBwdWJsaWMgaW5jcmVtZW50U2VjdGlvbihpbmNyZW1lbnQ6IG51bWJlcikge1xyXG4gICAgbGV0IG5ld1NlY3Rpb25JZCA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmlkICsgaW5jcmVtZW50O1xyXG5cclxuICAgIGlmIChuZXdTZWN0aW9uSWQgPT09IDApIHtcclxuICAgICAgbmV3U2VjdGlvbklkID0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChuZXdTZWN0aW9uSWQgPT09IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmxlbmd0aCArIDEpIHtcclxuICAgICAgbmV3U2VjdGlvbklkID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmZpbmQocyA9PiBzLmlkID09PSBuZXdTZWN0aW9uSWQpO1xyXG4gIH1cclxufVxyXG4iXX0=