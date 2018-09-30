/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
export class DatetimeFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} translateService
     * @param {?} languageService
     * @param {?} datePipe
     */
    constructor(bridgeService, translateService, languageService, datePipe) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.translateService = translateService;
        this.languageService = languageService;
        this.datePipe = datePipe;
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setCalendarOptions();
        this.translateService.onLangChange.subscribe((response) => {
            this.setCalendarOptions();
        });
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name, this.datePipe.transform(this.field.data.value, this.field.formDataDateFormat));
        }
        return data;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        // buggy if done from here after component is loaded. Moved back to before component loaded.
    }
    /**
     * \@description Sets the calendar options.
     * @return {?}
     */
    setCalendarOptions() {
        if (this.calendarElement && this.languageService.translations) {
            /** @type {?} */
            const calendarOptions = this.languageService.translations.calendarOptions;
            if (calendarOptions) {
                this.calendarElement.locale = calendarOptions;
            }
        }
    }
}
DatetimeFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-datetime-field',
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
  <p-calendar #calendar
              [id]="field.name"
              [name]="field.name"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
              [title]="field.tooltip | translate"
              #input="ngModel"
              [(ngModel)]="field.data.value"
              [required]="field.validation.required"
              [readonlyInput]="field.readonly"
              [disabled]="field.disabled"
              [showIcon]="field.showIcon"
              [showTime]="field.showTime"
              [hourFormat]="field.hourFormat"
              [monthNavigator]="field.monthNavigator"
              [yearNavigator]="field.yearNavigator"
              [yearRange]="field.yearRange"
              [dateFormat]="field.dateFormat"
              [minDate]="field.minDateValue"
              [maxDate]="field.maxDateValue"
              [defaultDate]="field.defaultDateValue"
              *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
              (onClose)="validate();triggerDynamicEvent('onSelect', $event, field);"
              (onSelect)="validate();triggerDynamicEvent('onSelect', $event, field);">
  </p-calendar>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field.data.value | date:field.displayDateFormat}}
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
                styles: [`body.en :host ::ng-deep button.ui-datepicker-trigger{right:0}body.ar :host ::ng-deep button.ui-datepicker-trigger{left:0}:host ::ng-deep span.ui-calendar{display:block}:host ::ng-deep p-calendar input{border-radius:.25rem}body.ar :host ::ng-deep .ui-calendar-button{border-radius:.25rem 0 0 .25rem}body.ar :host ::ng-deep .ui-calendar.ui-calendar-w-btn input{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}:host ::ng-deep button.ui-datepicker-trigger{position:absolute}:host ::ng-deep .ui-calendar .ui-datepicker{width:17em;min-width:auto}:host ::ng-deep .ui-calendar .ui-calendar-button .ui-button-icon-left{font-size:1.25em}`]
            },] },
];
/** @nocollapse */
DatetimeFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: TranslateService },
    { type: LanguageService },
    { type: DatePipe }
];
DatetimeFieldComponent.propDecorators = {
    calendarElement: [{ type: ViewChild, args: ['calendar',] }]
};
if (false) {
    /**
     * \@property The search element.
     * @type {?}
     */
    DatetimeFieldComponent.prototype.calendarElement;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    DatetimeFieldComponent.prototype.validateForRequired;
    /** @type {?} */
    DatetimeFieldComponent.prototype.bridgeService;
    /** @type {?} */
    DatetimeFieldComponent.prototype.translateService;
    /** @type {?} */
    DatetimeFieldComponent.prototype.languageService;
    /** @type {?} */
    DatetimeFieldComponent.prototype.datePipe;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBOEQzQyxNQUFNLDZCQUE4QixTQUFRLGNBQWM7Ozs7Ozs7SUFPeEQsWUFDUyxlQUNDLGtCQUNBLGlCQUNBO1FBRVIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBTGQsa0JBQWEsR0FBYixhQUFhO1FBQ1oscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixvQkFBZSxHQUFmLGVBQWU7UUFDZixhQUFRLEdBQVIsUUFBUTs7OzttQ0FOb0IsSUFBSTtLQVN6Qzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFNTSxjQUFjLENBQUMsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQzdHO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBSVAscUJBQXFCOzs7Ozs7O0lBS3BCLGtCQUFrQjtRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7WUFDOUQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO1lBRTFFLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQzthQUMvQztTQUNGOzs7O1lBN0dKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1RFg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc29CQUFzb0IsQ0FBQzthQUNqcEI7Ozs7WUFoRVEsYUFBYTtZQUViLGdCQUFnQjtZQURoQixlQUFlO1lBRWYsUUFBUTs7OzhCQWdFZCxTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZGF0ZXRpbWUtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtY2FsZW5kYXIgI2NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICBbcmVhZG9ubHlJbnB1dF09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICBbc2hvd0ljb25dPVwiZmllbGQuc2hvd0ljb25cIlxyXG4gICAgICAgICAgICAgIFtzaG93VGltZV09XCJmaWVsZC5zaG93VGltZVwiXHJcbiAgICAgICAgICAgICAgW2hvdXJGb3JtYXRdPVwiZmllbGQuaG91ckZvcm1hdFwiXHJcbiAgICAgICAgICAgICAgW21vbnRoTmF2aWdhdG9yXT1cImZpZWxkLm1vbnRoTmF2aWdhdG9yXCJcclxuICAgICAgICAgICAgICBbeWVhck5hdmlnYXRvcl09XCJmaWVsZC55ZWFyTmF2aWdhdG9yXCJcclxuICAgICAgICAgICAgICBbeWVhclJhbmdlXT1cImZpZWxkLnllYXJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgW2RhdGVGb3JtYXRdPVwiZmllbGQuZGF0ZUZvcm1hdFwiXHJcbiAgICAgICAgICAgICAgW21pbkRhdGVdPVwiZmllbGQubWluRGF0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJmaWVsZC5tYXhEYXRlVmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtkZWZhdWx0RGF0ZV09XCJmaWVsZC5kZWZhdWx0RGF0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgIChvbkNsb3NlKT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3QnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgIChvblNlbGVjdCk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0JywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9wLWNhbGVuZGFyPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkLmRhdGEudmFsdWUgfCBkYXRlOmZpZWxkLmRpc3BsYXlEYXRlRm9ybWF0fX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbi51aS1kYXRlcGlja2VyLXRyaWdnZXJ7cmlnaHQ6MH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBidXR0b24udWktZGF0ZXBpY2tlci10cmlnZ2Vye2xlZnQ6MH06aG9zdCA6Om5nLWRlZXAgc3Bhbi51aS1jYWxlbmRhcntkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcCBwLWNhbGVuZGFyIGlucHV0e2JvcmRlci1yYWRpdXM6LjI1cmVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhci1idXR0b257Ym9yZGVyLXJhZGl1czouMjVyZW0gMCAwIC4yNXJlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXIudWktY2FsZW5kYXItdy1idG4gaW5wdXR7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6LjI1cmVtO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOi4yNXJlbX06aG9zdCA6Om5nLWRlZXAgYnV0dG9uLnVpLWRhdGVwaWNrZXItdHJpZ2dlcntwb3NpdGlvbjphYnNvbHV0ZX06aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyIC51aS1kYXRlcGlja2Vye3dpZHRoOjE3ZW07bWluLXdpZHRoOmF1dG99Omhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhciAudWktY2FsZW5kYXItYnV0dG9uIC51aS1idXR0b24taWNvbi1sZWZ0e2ZvbnQtc2l6ZToxLjI1ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGV0aW1lRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHNlYXJjaCBlbGVtZW50LiovXHJcbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXInKSBjYWxlbmRhckVsZW1lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNldENhbGVuZGFyT3B0aW9ucygpO1xyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICB0aGlzLnNldENhbGVuZGFyT3B0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSwgdGhpcy5kYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5maWVsZC5kYXRhLnZhbHVlLCB0aGlzLmZpZWxkLmZvcm1EYXRhRGF0ZUZvcm1hdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgLy8gYnVnZ3kgaWYgZG9uZSBmcm9tIGhlcmUgYWZ0ZXIgY29tcG9uZW50IGlzIGxvYWRlZC4gTW92ZWQgYmFjayB0byBiZWZvcmUgY29tcG9uZW50IGxvYWRlZC5cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FsZW5kYXIgb3B0aW9ucy4qL1xyXG4gIHByaXZhdGUgc2V0Q2FsZW5kYXJPcHRpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuY2FsZW5kYXJFbGVtZW50ICYmIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucykge1xyXG4gICAgICBjb25zdCBjYWxlbmRhck9wdGlvbnMgPSB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuY2FsZW5kYXJPcHRpb25zO1xyXG5cclxuICAgICAgaWYgKGNhbGVuZGFyT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJFbGVtZW50LmxvY2FsZSA9IGNhbGVuZGFyT3B0aW9ucztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19