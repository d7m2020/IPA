/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDatepickerI18n, NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';
import { FieldComponent } from '../field/field.component';
import { IslamicI18n } from '../../../services/datepicker-calendar.service';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
export class DatetimeHijriFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} utilitiesService
     */
    constructor(bridgeService, utilitiesService) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.utilitiesService = utilitiesService;
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
        if (this.field.minDate) {
            this.field.minDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.minDate, new Date(this.field.minDate));
        }
        if (this.field.maxDate) {
            this.field.maxDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.maxDate, new Date(this.field.maxDate));
        }
        if (this.field.data.dateValue) {
            this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.data.dateValue, new Date(this.field.data.dateValue));
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.year', this.field.data.value.year);
            data.append(this.field.name + '.month', this.field.data.value.month);
            data.append(this.field.name + '.day', this.field.data.value.day);
        }
        return data;
    }
    /**
     * \@description Toggles the calendar.
     * @return {?}
     */
    toggleCalendar() {
        this.calendar.toggle();
    }
}
DatetimeHijriFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-datetime-hijri-field',
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
  <div class="hijri-date-control">
    <input [name]="field.name"
           [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
           [class]="field.cssClasses.input"
           [ngClass]="{'invalid': isValidationShown()}"
           ngbDatepicker
           #input="ngbDatepicker"
           #defaultInput="ngModel"
           [readonly]="field.readonly"
           [disabled]="field.disabled"
           [(ngModel)]="field.data.value"
           [minDate]="field.minDateValue"
           [maxDate]="field.maxDateValue"
           [showWeekNumbers]="field.showWeekNumbers"
           [displayMonths]="field.displayMonths"
           [outsideDays]="field.outsideDays"
           [showWeekdays]="field.showWeekdays"
           *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
           (click)="toggleCalendar();validate();"
           (ngModelChange)="validate();triggerDynamicEvent('onSelect', $event, field);" />

    <!-- icon -->
    <button class="hijri-date-icon-container"
            [disabled]="field.disabled"
            type="button"
            (click)="toggleCalendar();">
      <span class="hijri-date-icon"
            *ngIf="field.showIcon">
      </span>
    </button>
  </div>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value?.day}}/{{field?.data?.value?.month}}/{{field?.data?.value?.year}}
  </span>

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
                styles: [`.hijri-date{height:35px}.hijri-date-control{position:relative}.hijri-date-icon-container{position:absolute;top:0;padding:0 6px;background-color:#2399e5;color:#fff;cursor:pointer;height:100%;line-height:1.8;border:0}button.hijri-date-icon-container:disabled{opacity:.35}.hijri-date-icon:focus,.hijri-date-icon:hover{background:#1f89ce}.hijri-date-icon:after{content:'\\e927';font-family:primeicons;font-size:1.25em}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg)}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .right .ngb-dp-navigation-chevron{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}body.ar :host ::ng-deep .custom-select{background-position:left.75rem center}body.ar :host ::ng-deep .hijri-date-icon-container{left:0}body.en :host ::ng-deep .hijri-date-icon-container{right:0}:host ::ng-deep .custom-select{background-position:left .25rem center!important;direction:rtl!important;min-width:100px}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-week-number,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-weekday{width:2.5rem;height:2.5rem}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day div{width:100%;height:100%;line-height:2.5rem}`],
                providers: [
                    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
                    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
                ]
            },] },
];
/** @nocollapse */
DatetimeHijriFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: UtilitiesService }
];
DatetimeHijriFieldComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: ['input',] }]
};
if (false) {
    /** @type {?} */
    DatetimeHijriFieldComponent.prototype.calendar;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    DatetimeHijriFieldComponent.prototype.validateForRequired;
    /** @type {?} */
    DatetimeHijriFieldComponent.prototype.bridgeService;
    /** @type {?} */
    DatetimeHijriFieldComponent.prototype.utilitiesService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtaGlqcmktZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtaGlqcmktZmllbGQvZGF0ZXRpbWUtaGlqcmktZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUF1RXZFLE1BQU0sa0NBQW1DLFNBQVEsY0FBYzs7Ozs7SUFNN0QsWUFDUyxlQUNDO1FBRVIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSGQsa0JBQWEsR0FBYixhQUFhO1FBQ1oscUJBQWdCLEdBQWhCLGdCQUFnQjs7OzttQ0FKWSxJQUFJO0tBT3pDOzs7OztJQUdNLHFCQUFxQjtRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM3SDtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzdIO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUNwQyxDQUFDO1NBQ0g7Ozs7Ozs7SUFPSSxjQUFjLENBQUMsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBSVAsY0FBYztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7O1lBdEgxQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0RFg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsMHpDQUEwekMsQ0FBQztnQkFDcDBDLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFO29CQUM5RCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2lCQUN0RDthQUNGOzs7O1lBdkVRLGFBQWE7WUFDYixnQkFBZ0I7Ozt1QkF3RXRCLFNBQVMsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiSW5wdXREYXRlcGlja2VyIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ2JDYWxlbmRhciwgTmdiRGF0ZXBpY2tlckkxOG4sIE5nYkNhbGVuZGFySXNsYW1pY1VtYWxxdXJhIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElzbGFtaWNJMThuIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZGF0ZXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWRhdGV0aW1lLWhpanJpLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxkaXYgY2xhc3M9XCJoaWpyaS1kYXRlLWNvbnRyb2xcIj5cclxuICAgIDxpbnB1dCBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICBuZ2JEYXRlcGlja2VyXHJcbiAgICAgICAgICAgI2lucHV0PVwibmdiRGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgI2RlZmF1bHRJbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgIFttaW5EYXRlXT1cImZpZWxkLm1pbkRhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgW21heERhdGVdPVwiZmllbGQubWF4RGF0ZVZhbHVlXCJcclxuICAgICAgICAgICBbc2hvd1dlZWtOdW1iZXJzXT1cImZpZWxkLnNob3dXZWVrTnVtYmVyc1wiXHJcbiAgICAgICAgICAgW2Rpc3BsYXlNb250aHNdPVwiZmllbGQuZGlzcGxheU1vbnRoc1wiXHJcbiAgICAgICAgICAgW291dHNpZGVEYXlzXT1cImZpZWxkLm91dHNpZGVEYXlzXCJcclxuICAgICAgICAgICBbc2hvd1dlZWtkYXlzXT1cImZpZWxkLnNob3dXZWVrZGF5c1wiXHJcbiAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ2FsZW5kYXIoKTt2YWxpZGF0ZSgpO1wiXHJcbiAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblNlbGVjdCcsICRldmVudCwgZmllbGQpO1wiIC8+XHJcblxyXG4gICAgPCEtLSBpY29uIC0tPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImhpanJpLWRhdGUtaWNvbi1jb250YWluZXJcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUNhbGVuZGFyKCk7XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaGlqcmktZGF0ZS1pY29uXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5zaG93SWNvblwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZD8uZGF0YT8udmFsdWU/LmRheX19L3t7ZmllbGQ/LmRhdGE/LnZhbHVlPy5tb250aH19L3t7ZmllbGQ/LmRhdGE/LnZhbHVlPy55ZWFyfX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5oaWpyaS1kYXRle2hlaWdodDozNXB4fS5oaWpyaS1kYXRlLWNvbnRyb2x7cG9zaXRpb246cmVsYXRpdmV9LmhpanJpLWRhdGUtaWNvbi1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cGFkZGluZzowIDZweDtiYWNrZ3JvdW5kLWNvbG9yOiMyMzk5ZTU7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTAwJTtsaW5lLWhlaWdodDoxLjg7Ym9yZGVyOjB9YnV0dG9uLmhpanJpLWRhdGUtaWNvbi1jb250YWluZXI6ZGlzYWJsZWR7b3BhY2l0eTouMzV9LmhpanJpLWRhdGUtaWNvbjpmb2N1cywuaGlqcmktZGF0ZS1pY29uOmhvdmVye2JhY2tncm91bmQ6IzFmODljZX0uaGlqcmktZGF0ZS1pY29uOmFmdGVye2NvbnRlbnQ6J1xcXFxlOTI3Jztmb250LWZhbWlseTpwcmltZWljb25zO2ZvbnQtc2l6ZToxLjI1ZW19Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXIgbmdiLWRhdGVwaWNrZXItbmF2aWdhdGlvbiAubmdiLWRwLW5hdmlnYXRpb24tY2hldnJvbnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyIG5nYi1kYXRlcGlja2VyLW5hdmlnYXRpb24gLnJpZ2h0IC5uZ2ItZHAtbmF2aWdhdGlvbi1jaGV2cm9uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tc2VsZWN0e2JhY2tncm91bmQtcG9zaXRpb246bGVmdC43NXJlbSBjZW50ZXJ9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLmhpanJpLWRhdGUtaWNvbi1jb250YWluZXJ7bGVmdDowfWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIC5oaWpyaS1kYXRlLWljb24tY29udGFpbmVye3JpZ2h0OjB9Omhvc3QgOjpuZy1kZWVwIC5jdXN0b20tc2VsZWN0e2JhY2tncm91bmQtcG9zaXRpb246bGVmdCAuMjVyZW0gY2VudGVyIWltcG9ydGFudDtkaXJlY3Rpb246cnRsIWltcG9ydGFudDttaW4td2lkdGg6MTAwcHh9Omhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcgLm5nYi1kcC1kYXksOmhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcgLm5nYi1kcC13ZWVrLW51bWJlciw6aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLXdlZWtkYXl7d2lkdGg6Mi41cmVtO2hlaWdodDoyLjVyZW19Omhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcgLm5nYi1kcC1kYXkgZGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bGluZS1oZWlnaHQ6Mi41cmVtfWBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBOZ2JDYWxlbmRhciwgdXNlQ2xhc3M6IE5nYkNhbGVuZGFySXNsYW1pY1VtYWxxdXJhIH0sXHJcbiAgICB7IHByb3ZpZGU6IE5nYkRhdGVwaWNrZXJJMThuLCB1c2VDbGFzczogSXNsYW1pY0kxOG4gfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGNhbGVuZGFyOiBOZ2JJbnB1dERhdGVwaWNrZXI7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxpdGllc1NlcnZpY2U6IFV0aWxpdGllc1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQubWluRGF0ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLm1pbkRhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQubWluRGF0ZSwgbmV3IERhdGUodGhpcy5maWVsZC5taW5EYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmllbGQubWF4RGF0ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLm1heERhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQubWF4RGF0ZSwgbmV3IERhdGUodGhpcy5maWVsZC5tYXhEYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YS5kYXRlVmFsdWUpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoXHJcbiAgICAgICAgdGhpcy5maWVsZC5kYXRhLmRhdGVWYWx1ZSxcclxuICAgICAgICBuZXcgRGF0ZSh0aGlzLmZpZWxkLmRhdGEuZGF0ZVZhbHVlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnLnllYXInLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUueWVhcik7XHJcblxyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnLm1vbnRoJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLm1vbnRoKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuZGF5JywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFRvZ2dsZXMgdGhlIGNhbGVuZGFyLiovXHJcbiAgcHVibGljIHRvZ2dsZUNhbGVuZGFyKCkge1xyXG4gICAgdGhpcy5jYWxlbmRhci50b2dnbGUoKTtcclxuICB9XHJcbn1cclxuIl19