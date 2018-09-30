/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
export class CheckboxFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = [];
            this.control.reset();
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + ']', value);
            }
        }
        return data;
    }
}
CheckboxFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-checkbox-field',
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
  <div class="checkBoxHolder"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'">
    <p-checkbox *ngFor="let checkbox of field.data.options; let i = index"
                [id]="field.name+'_'+i"
                [name]="field.name"
                [(ngModel)]="field.data.value"
                [class]="field.cssClasses.input"
                [ngClass]="{'invalid': isValidationShown()}"
                [title]="field.tooltip | translate"
                #input="ngModel"
                [required]="field.validation.required"
                [label]="checkbox.name | translate"
                [value]="checkbox.id"
                [disabled]="field.disabled"
                (onChange)="triggerDynamicEvent('onChange', $event, field);"
                (ngModelChange)="validate();">
    </p-checkbox>
  </div>

  <!-- display -->
  <div [class]="field.cssClasses.display"
       *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <ul *ngIf="field?.data?.value?.length > 1">
      <li *ngFor="let title of field?.data?.value">{{title}}</li>
    </ul>
    <span *ngIf="field?.data?.value?.length == 1">
      <span *ngFor="let title of field?.data?.value">{{title}}</span>
    </span>
  </div>

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
                styles: [`p-checkbox{display:block}body.ar :host ::ng-deep .ui-chkbox.ui-widget{float:right;margin-left:10px}`]
            },] },
];
if (false) {
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    CheckboxFieldComponent.prototype.validateForRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBMkR2RixNQUFNLDZCQUE4QixTQUFRLHVCQUF1Qjs7Ozs7O2dDQUU5QixJQUFJOzs7Ozs7SUFHaEMsVUFBVTtRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7Ozs7Ozs7SUFPSSxjQUFjLENBQUMsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOztnQkFDdEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7O1lBckZmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FvRFg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMscUdBQXFHLENBQUM7YUFDaEgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jaGVja2JveC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2IGNsYXNzPVwiY2hlY2tCb3hIb2xkZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8cC1jaGVja2JveCAqbmdGb3I9XCJsZXQgY2hlY2tib3ggb2YgZmllbGQuZGF0YS5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lKydfJytpXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cImNoZWNrYm94Lm5hbWUgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImNoZWNrYm94LmlkXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICAgIDwvcC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIDx1bCAqbmdJZj1cImZpZWxkPy5kYXRhPy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRpdGxlIG9mIGZpZWxkPy5kYXRhPy52YWx1ZVwiPnt7dGl0bGV9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA9PSAxXCI+XHJcbiAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0aXRsZSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYHAtY2hlY2tib3h7ZGlzcGxheTpibG9ja31ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktY2hrYm94LnVpLXdpZGdldHtmbG9hdDpyaWdodDttYXJnaW4tbGVmdDoxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10nLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIl19