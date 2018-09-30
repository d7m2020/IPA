/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Optional } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
import { HttpRequestsService } from '../../../services/http-requests.service';
var BoundableFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BoundableFieldComponent, _super);
    function BoundableFieldComponent(bridgeService, httpRequestsService, translateService, utilitiesService, route) {
        var _this = _super.call(this, bridgeService) || this;
        _this.bridgeService = bridgeService;
        _this.httpRequestsService = httpRequestsService;
        _this.translateService = translateService;
        _this.utilitiesService = utilitiesService;
        _this.route = route;
        return _this;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    BoundableFieldComponent.prototype.handleDefaultSettings = /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isFormInDisplayMode()) {
            this.dataBindOptions();
            this.translateService.onLangChange.subscribe(function (event) {
                _this.dataBindOptions();
            });
        }
    };
    /** @description Binds the field's options.*/
    /**
     * \@description Binds the field's options.
     * @return {?}
     */
    BoundableFieldComponent.prototype.dataBindOptions = /**
     * \@description Binds the field's options.
     * @return {?}
     */
    function () {
        if (this.field.data && this.field.data.optionsEndpoint) {
            /** @type {?} */
            var endpoint = this.utilitiesService.replaceTokens(this.bridgeService.configuration.endpoints.lookups[this.field.data.optionsEndpoint], this.route, this.bridgeService.additionalParameters);
            this.bindOptions(endpoint);
        }
    };
    /** @description Binds the field's options.
     * @param string endpoint The endpoint.
    */
    /**
     * \@description Binds the field's options.
     * @param {?} endpoint
     * @return {?}
     */
    BoundableFieldComponent.prototype.bindOptions = /**
     * \@description Binds the field's options.
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        var _this = this;
        this.httpRequestsService.get(endpoint).subscribe(function (response) {
            _this.field.data.options = response;
        }, function (exception) {
            console.error('bindOptions: ', exception);
        });
    };
    BoundableFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-boundable-field',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    BoundableFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: HttpRequestsService },
        { type: TranslateService },
        { type: UtilitiesService },
        { type: ActivatedRoute, decorators: [{ type: Optional }] }
    ]; };
    return BoundableFieldComponent;
}(FieldComponent));
export { BoundableFieldComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztJQU1qQyxtREFBYztJQUN6RCxpQ0FDUyxlQUNDLHFCQUNBLGtCQUNBLGtCQUNZLEtBQXFCO1FBTDNDLFlBT0Usa0JBQU0sYUFBYSxDQUFDLFNBQ3JCO1FBUFEsbUJBQWEsR0FBYixhQUFhO1FBQ1oseUJBQW1CLEdBQW5CLG1CQUFtQjtRQUNuQixzQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLHNCQUFnQixHQUFoQixnQkFBZ0I7UUFDSixXQUFLLEdBQUwsS0FBSyxDQUFnQjs7S0FHMUM7Ozs7O0lBR00sdURBQXFCOzs7Ozs7UUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBc0I7Z0JBQ2xFLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QixDQUFDLENBQUM7U0FDSjs7SUFHSCw2Q0FBNkM7Ozs7O0lBQ25DLGlEQUFlOzs7O0lBQXpCO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs7WUFDdkQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFDbkYsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUN4QyxDQUFDO1lBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QjtLQUNGO0lBRUQ7O01BRUU7Ozs7OztJQUNRLDZDQUFXOzs7OztJQUFyQixVQUFzQixRQUFnQjtRQUF0QyxpQkFNQztRQUxDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUN2RCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1NBQ3BDLEVBQUUsVUFBQSxTQUFTO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ0o7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBUFEsYUFBYTtnQkFFYixtQkFBbUI7Z0JBSm5CLGdCQUFnQjtnQkFHaEIsZ0JBQWdCO2dCQUZoQixjQUFjLHVCQWVsQixRQUFROztrQ0FsQmI7RUFZNkMsY0FBYztTQUE5Qyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2h0dHAtcmVxdWVzdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1ib3VuZGFibGUtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQm91bmRhYmxlRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cFJlcXVlc3RzU2VydmljZTogSHR0cFJlcXVlc3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbGl0aWVzU2VydmljZTogVXRpbGl0aWVzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5kYXRhQmluZE9wdGlvbnMoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhQmluZE9wdGlvbnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBmaWVsZCdzIG9wdGlvbnMuKi9cclxuICBwcm90ZWN0ZWQgZGF0YUJpbmRPcHRpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEub3B0aW9uc0VuZHBvaW50KSB7XHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLmxvb2t1cHNbdGhpcy5maWVsZC5kYXRhLm9wdGlvbnNFbmRwb2ludF0sXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZE9wdGlvbnMoZW5kcG9pbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBCaW5kcyB0aGUgZmllbGQncyBvcHRpb25zLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnQgVGhlIGVuZHBvaW50LlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIGJpbmRPcHRpb25zKGVuZHBvaW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoZW5kcG9pbnQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS5vcHRpb25zID0gcmVzcG9uc2U7XHJcbiAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdiaW5kT3B0aW9uczogJywgZXhjZXB0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=