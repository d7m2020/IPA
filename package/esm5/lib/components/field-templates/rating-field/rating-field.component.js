/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
var RatingFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RatingFieldComponent, _super);
    function RatingFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        return _this;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    RatingFieldComponent.prototype.handleDefaultSettings = /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    function () {
        if (this.isFormInDisplayMode()) {
            this.field.readonly = true;
        }
        if (!this.field.iconCancelClass) {
            this.field.iconCancelClass = 'pi pi- ban';
        }
        if (!this.field.iconOnClass) {
            this.field.iconOnClass = 'pi pi-star';
        }
        if (!this.field.iconOffClass) {
            this.field.iconOffClass = 'pi pi-star-o';
        }
    };
    RatingFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-rating-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field?.cssClasses?.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input & display -->\n  <p-rating [id]=\"field.name\"\n            [name]=\"field.name\"\n            [(ngModel)]=\"field.data.value\"\n            [class]=\"field.cssClasses.input\"\n            [ngClass]=\"{'invalid': isValidationShown()}\"\n            [title]=\"field.tooltip | translate\"\n            [readonly]=\"field.readonly\"\n            [disabled]=\"field.disabled\"\n            [stars]=\"field.starNumber\"\n            [iconCancelClass]=\"field.iconCancelClass\"\n            [iconOnClass]=\"field.iconOnClass\"\n            [iconOffClass]=\"field.iconOffClass\"\n            [cancel]=\"field.cancelIcon && !field.readonly\"\n            (onRate)=\"triggerDynamicEvent('onRate', $event, field);validate();\"\n            (onCancel)=\"triggerDynamicEvent('onCancel', $event, field);validate();\">\n  </p-rating>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    return RatingFieldComponent;
}(FieldComponent));
export { RatingFieldComponent };
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    RatingFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhdGluZy1maWVsZC9yYXRpbmctZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBOENoQixnREFBYzs7Ozs7O29DQUVoQixJQUFJOzs7Ozs7O0lBR25DLG9EQUFxQjs7Ozs7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztTQUMzQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztTQUN2QztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztTQUMxQzs7O2dCQWhFSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLHM4Q0F1Q1g7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzsrQkE5Q0Q7RUErQzBDLGNBQWM7U0FBM0Msb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXJhdGluZy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZD8uY3NzQ2xhc3Nlcz8ubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dCAmIGRpc3BsYXkgLS0+XHJcbiAgPHAtcmF0aW5nIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtzdGFyc109XCJmaWVsZC5zdGFyTnVtYmVyXCJcclxuICAgICAgICAgICAgW2ljb25DYW5jZWxDbGFzc109XCJmaWVsZC5pY29uQ2FuY2VsQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9uQ2xhc3NdPVwiZmllbGQuaWNvbk9uQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9mZkNsYXNzXT1cImZpZWxkLmljb25PZmZDbGFzc1wiXHJcbiAgICAgICAgICAgIFtjYW5jZWxdPVwiZmllbGQuY2FuY2VsSWNvbiAmJiAhZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAob25SYXRlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uUmF0ZScsICRldmVudCwgZmllbGQpO3ZhbGlkYXRlKCk7XCJcclxuICAgICAgICAgICAgKG9uQ2FuY2VsKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2FuY2VsJywgJGV2ZW50LCBmaWVsZCk7dmFsaWRhdGUoKTtcIj5cclxuICA8L3AtcmF0aW5nPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZmllbGQucmVhZG9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MpIHtcclxuICAgICAgdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MgPSAncGkgcGktIGJhbic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PbkNsYXNzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuaWNvbk9uQ2xhc3MgPSAncGkgcGktc3Rhcic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PZmZDbGFzcykge1xyXG4gICAgICB0aGlzLmZpZWxkLmljb25PZmZDbGFzcyA9ICdwaSBwaS1zdGFyLW8nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=