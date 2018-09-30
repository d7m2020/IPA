/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
export class RatingFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
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
    }
}
RatingFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-rating-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field?.cssClasses?.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input & display -->
  <p-rating [id]="field.name"
            [name]="field.name"
            [(ngModel)]="field.data.value"
            [class]="field.cssClasses.input"
            [ngClass]="{'invalid': isValidationShown()}"
            [title]="field.tooltip | translate"
            [readonly]="field.readonly"
            [disabled]="field.disabled"
            [stars]="field.starNumber"
            [iconCancelClass]="field.iconCancelClass"
            [iconOnClass]="field.iconOnClass"
            [iconOffClass]="field.iconOffClass"
            [cancel]="field.cancelIcon && !field.readonly"
            (onRate)="triggerDynamicEvent('onRate', $event, field);validate();"
            (onCancel)="triggerDynamicEvent('onCancel', $event, field);validate();">
  </p-rating>

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
if (false) {
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    RatingFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhdGluZy1maWVsZC9yYXRpbmctZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQThDMUQsTUFBTSwyQkFBNEIsU0FBUSxjQUFjOzs7Ozs7bUNBRWhCLElBQUk7Ozs7OztJQUduQyxxQkFBcUI7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztTQUMzQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztTQUN2QztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztTQUMxQzs7OztZQWhFSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1Q1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcmF0aW5nLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkPy5jc3NDbGFzc2VzPy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0ICYgZGlzcGxheSAtLT5cclxuICA8cC1yYXRpbmcgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgW3N0YXJzXT1cImZpZWxkLnN0YXJOdW1iZXJcIlxyXG4gICAgICAgICAgICBbaWNvbkNhbmNlbENsYXNzXT1cImZpZWxkLmljb25DYW5jZWxDbGFzc1wiXHJcbiAgICAgICAgICAgIFtpY29uT25DbGFzc109XCJmaWVsZC5pY29uT25DbGFzc1wiXHJcbiAgICAgICAgICAgIFtpY29uT2ZmQ2xhc3NdPVwiZmllbGQuaWNvbk9mZkNsYXNzXCJcclxuICAgICAgICAgICAgW2NhbmNlbF09XCJmaWVsZC5jYW5jZWxJY29uICYmICFmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgIChvblJhdGUpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25SYXRlJywgJGV2ZW50LCBmaWVsZCk7dmFsaWRhdGUoKTtcIlxyXG4gICAgICAgICAgICAob25DYW5jZWwpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DYW5jZWwnLCAkZXZlbnQsIGZpZWxkKTt2YWxpZGF0ZSgpO1wiPlxyXG4gIDwvcC1yYXRpbmc+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAodGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5maWVsZC5yZWFkb25seSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25DYW5jZWxDbGFzcykge1xyXG4gICAgICB0aGlzLmZpZWxkLmljb25DYW5jZWxDbGFzcyA9ICdwaSBwaS0gYmFuJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZmllbGQuaWNvbk9uQ2xhc3MpIHtcclxuICAgICAgdGhpcy5maWVsZC5pY29uT25DbGFzcyA9ICdwaSBwaS1zdGFyJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZmllbGQuaWNvbk9mZkNsYXNzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuaWNvbk9mZkNsYXNzID0gJ3BpIHBpLXN0YXItbyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==