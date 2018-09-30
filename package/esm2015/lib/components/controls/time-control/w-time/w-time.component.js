/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CLOCK_TYPE } from '../w-clock/w-clock.component';
import { TranslatePipe } from '@ngx-translate/core';
export class WTimeComponent {
    /**
     * @param {?} translatePipe
     */
    constructor(translatePipe) {
        this.translatePipe = translatePipe;
        this.userTimeChange = new EventEmitter();
        this.reverted = new EventEmitter();
        this.submitted = new EventEmitter();
        this.VIEW_HOURS = CLOCK_TYPE.HOURS;
        this.VIEW_MINUTES = CLOCK_TYPE.MINUTES;
        this.currentView = this.VIEW_HOURS;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.userTime) {
            this.userTime = {
                hour: 6,
                minute: 0,
                meriden: 'PM',
                format: 12
            };
        }
        if (!this.revertLabel) {
            this.revertLabel = this.translatePipe.transform('buttons.Cancel');
        }
        if (!this.submitLabel) {
            this.submitLabel = this.translatePipe.transform('buttons.Ok');
        }
    }
    /**
     * @return {?}
     */
    formatHour() {
        if (this.userTime.format === 24) {
            if (this.userTime.hour === 24) {
                return '00';
            }
            else if (this.userTime.hour < 10) {
                return '0' + String(this.userTime.hour);
            }
        }
        return String(this.userTime.hour);
    }
    /**
     * @return {?}
     */
    formatMinute() {
        if (this.userTime.minute === 0) {
            return '00';
        }
        else if (this.userTime.minute < 10) {
            return '0' + String(this.userTime.minute);
        }
        else {
            return String(this.userTime.minute);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setCurrentView(type) {
        this.currentView = type;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    setMeridien(m) {
        this.userTime.meriden = m;
    }
    /**
     * @return {?}
     */
    revert() {
        this.reverted.emit();
    }
    /**
     * @return {?}
     */
    submit() {
        this.submitted.emit(this.userTime);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emituserTimeChange(event) {
        this.userTimeChange.emit(this.userTime);
    }
}
WTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-time',
                template: `<div fxLayout="row"
     fxLayout.lt-md="column"
     fxLayoutAlign="center center"
     class="w-time"
     [ngClass.xs]="'vertical-time'"
     [ngClass.sm]="'vertical-time'">
  <mat-toolbar fxLayout="column"
               fxLayout.lt-md="row"
               fxLayoutAlign="center center"
               [color]="color"
               class="w-timepicker-time-container">

    <div class="w-timepicker-selected-time">
      <span [class]="currentView === VIEW_HOURS ? 'active': ''"
            (click)="setCurrentView(VIEW_HOURS)">{{ formatHour() }}:</span>
      <span [class]="currentView === VIEW_MINUTES ? 'active': ''"
            (click)="setCurrentView(VIEW_MINUTES)">{{ formatMinute() }}</span>
    </div>
    <div fxLayout="column"
         fxLayoutAlign="center center"
         class="w-timepicker-selected-ampm"
         *ngIf="userTime.format === 12">
      <span (click)="setMeridien('AM')"
            [class]="userTime.meriden === 'AM' ? 'active' : ''">{{'AM' | translate}}</span>
      <span (click)="setMeridien('PM')"
            [class]="userTime.meriden === 'PM' ? 'active' : ''">{{'PM' | translate}}</span>
    </div>

  </mat-toolbar>

  <div fxLayout="column"
       fxLayoutAlign="space-between center"
       class="w-time-content">
    <ntw-clock [color]="color"
             class="w-animation-zoom"
             [userTime]="userTime"
             (userTimeChange)="emituserTimeChange($event)"
             [(currentView)]="currentView"
             (viewChange)="setCurrentView($event)">
    </ntw-clock>

    <div fxFlexAlign="end">
      <button mat-button
              (click)="revert()">
        {{revertLabel}}
      </button>
      <button mat-button
              [color]="color"
              (click)="submit()">
        {{submitLabel}}
      </button>
    </div>
  </div>
</div>
`,
                styles: [`:host{display:block}.w-time{max-height:100%;min-height:350px;height:350px}.w-time .w-timepicker-time-container{padding:15px;min-width:160px;width:160px}.w-time .w-timepicker-time-container.mat-toolbar-single-row{height:100%}.w-time .w-timepicker-selected-time{font-size:3.5rem;font-weight:400;display:flex}.w-time .w-timepicker-selected-ampm{font-size:1rem;line-height:1.3rem;padding-top:2rem}.w-time .w-time-content{width:100%;height:100%;padding:6px}.w-time .w-time-content w-clock{padding:12px 0;height:calc(100% - 58px)}.w-time.vertical-time{height:auto}.w-time.vertical-time .w-timepicker-time-container{min-width:auto;width:100%;height:100px}.w-time.vertical-time .w-timepicker-time-container .w-timepicker-selected-ampm{padding:0 12px}.w-timepicker-selected-ampm>span,.w-timepicker-selected-time>span{outline:0;opacity:.5}.w-timepicker-selected-ampm>span:not(.active),.w-timepicker-selected-time>span:not(.active){cursor:pointer}.w-timepicker-selected-ampm>span.active,.w-timepicker-selected-time>span.active{opacity:1}.w-animate-next{opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove{transition:.5s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}.w-animate-prev{opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove{transition:.3s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}@-webkit-keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}.w-animation-zoom.ng-enter{transition:.3s cubic-bezier(.35,0,.25,1);-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:w-animation-bounce;animation-name:w-animation-bounce}`],
                providers: [TranslatePipe]
            },] },
];
/** @nocollapse */
WTimeComponent.ctorParameters = () => [
    { type: TranslatePipe }
];
WTimeComponent.propDecorators = {
    userTime: [{ type: Input }],
    userTimeChange: [{ type: Output }],
    revertLabel: [{ type: Input }],
    submitLabel: [{ type: Input }],
    reverted: [{ type: Output }],
    submitted: [{ type: Output }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WTimeComponent.prototype.userTime;
    /** @type {?} */
    WTimeComponent.prototype.userTimeChange;
    /** @type {?} */
    WTimeComponent.prototype.revertLabel;
    /** @type {?} */
    WTimeComponent.prototype.submitLabel;
    /** @type {?} */
    WTimeComponent.prototype.reverted;
    /** @type {?} */
    WTimeComponent.prototype.submitted;
    /** @type {?} */
    WTimeComponent.prototype.color;
    /** @type {?} */
    WTimeComponent.prototype.VIEW_HOURS;
    /** @type {?} */
    WTimeComponent.prototype.VIEW_MINUTES;
    /** @type {?} */
    WTimeComponent.prototype.currentView;
    /** @type {?} */
    WTimeComponent.prototype.translatePipe;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS93LXRpbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBUyxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUE4RHBELE1BQU07Ozs7SUFnQkosWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7OEJBZEEsSUFBSSxZQUFZLEVBQUU7d0JBS3pCLElBQUksWUFBWSxFQUFFO3lCQUNoQixJQUFJLFlBQVksRUFBRTswQkFJekMsVUFBVSxDQUFDLEtBQUs7NEJBQ2QsVUFBVSxDQUFDLE9BQU87MkJBQ1AsSUFBSSxDQUFDLFVBQVU7S0FFSzs7OztJQUVyRCxRQUFRO1FBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxDQUFDO2dCQUNULE9BQU8sRUFBRSxJQUFJO2dCQUNiLE1BQU0sRUFBRSxFQUFFO2FBQ1gsQ0FBQztTQUNIO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkU7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0Q7S0FDRjs7OztJQUVELFVBQVU7UUFDUixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDYjtZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxZQUFZO1FBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2I7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckM7S0FDRjs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBZ0I7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7S0FDekI7Ozs7O0lBRUQsV0FBVyxDQUFDLENBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQzNCOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQUs7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pDOzs7WUF6SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNEWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyx3MEVBQXcwRSxDQUFDO2dCQUNsMUUsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7O1lBN0RRLGFBQWE7Ozt1QkErRG5CLEtBQUs7NkJBQ0wsTUFBTTswQkFFTixLQUFLOzBCQUNMLEtBQUs7dUJBRUwsTUFBTTt3QkFDTixNQUFNO29CQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUaW1lLCBDTE9DS19UWVBFIH0gZnJvbSAnLi4vdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXRpbWUnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiXHJcbiAgICAgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIlxyXG4gICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcclxuICAgICBjbGFzcz1cInctdGltZVwiXHJcbiAgICAgW25nQ2xhc3MueHNdPVwiJ3ZlcnRpY2FsLXRpbWUnXCJcclxuICAgICBbbmdDbGFzcy5zbV09XCIndmVydGljYWwtdGltZSdcIj5cclxuICA8bWF0LXRvb2xiYXIgZnhMYXlvdXQ9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICBmeExheW91dC5sdC1tZD1cInJvd1wiXHJcbiAgICAgICAgICAgICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcclxuICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJ3LXRpbWVwaWNrZXItdGltZS1jb250YWluZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidy10aW1lcGlja2VyLXNlbGVjdGVkLXRpbWVcIj5cclxuICAgICAgPHNwYW4gW2NsYXNzXT1cImN1cnJlbnRWaWV3ID09PSBWSUVXX0hPVVJTID8gJ2FjdGl2ZSc6ICcnXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInNldEN1cnJlbnRWaWV3KFZJRVdfSE9VUlMpXCI+e3sgZm9ybWF0SG91cigpIH19Ojwvc3Bhbj5cclxuICAgICAgPHNwYW4gW2NsYXNzXT1cImN1cnJlbnRWaWV3ID09PSBWSUVXX01JTlVURVMgPyAnYWN0aXZlJzogJydcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0Q3VycmVudFZpZXcoVklFV19NSU5VVEVTKVwiPnt7IGZvcm1hdE1pbnV0ZSgpIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCJcclxuICAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgICAgICBjbGFzcz1cInctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBtXCJcclxuICAgICAgICAgKm5nSWY9XCJ1c2VyVGltZS5mb3JtYXQgPT09IDEyXCI+XHJcbiAgICAgIDxzcGFuIChjbGljayk9XCJzZXRNZXJpZGllbignQU0nKVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJ1c2VyVGltZS5tZXJpZGVuID09PSAnQU0nID8gJ2FjdGl2ZScgOiAnJ1wiPnt7J0FNJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gICAgICA8c3BhbiAoY2xpY2spPVwic2V0TWVyaWRpZW4oJ1BNJylcIlxyXG4gICAgICAgICAgICBbY2xhc3NdPVwidXNlclRpbWUubWVyaWRlbiA9PT0gJ1BNJyA/ICdhY3RpdmUnIDogJydcIj57eydQTScgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC10b29sYmFyPlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCJcclxuICAgICAgIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiXHJcbiAgICAgICBjbGFzcz1cInctdGltZS1jb250ZW50XCI+XHJcbiAgICA8bnR3LWNsb2NrIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cInctYW5pbWF0aW9uLXpvb21cIlxyXG4gICAgICAgICAgICAgW3VzZXJUaW1lXT1cInVzZXJUaW1lXCJcclxuICAgICAgICAgICAgICh1c2VyVGltZUNoYW5nZSk9XCJlbWl0dXNlclRpbWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICBbKGN1cnJlbnRWaWV3KV09XCJjdXJyZW50Vmlld1wiXHJcbiAgICAgICAgICAgICAodmlld0NoYW5nZSk9XCJzZXRDdXJyZW50VmlldygkZXZlbnQpXCI+XHJcbiAgICA8L250dy1jbG9jaz5cclxuXHJcbiAgICA8ZGl2IGZ4RmxleEFsaWduPVwiZW5kXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvblxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJyZXZlcnQoKVwiPlxyXG4gICAgICAgIHt7cmV2ZXJ0TGFiZWx9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwic3VibWl0KClcIj5cclxuICAgICAgICB7e3N1Ym1pdExhYmVsfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9LnctdGltZXttYXgtaGVpZ2h0OjEwMCU7bWluLWhlaWdodDozNTBweDtoZWlnaHQ6MzUwcHh9LnctdGltZSAudy10aW1lcGlja2VyLXRpbWUtY29udGFpbmVye3BhZGRpbmc6MTVweDttaW4td2lkdGg6MTYwcHg7d2lkdGg6MTYwcHh9LnctdGltZSAudy10aW1lcGlja2VyLXRpbWUtY29udGFpbmVyLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7aGVpZ2h0OjEwMCV9LnctdGltZSAudy10aW1lcGlja2VyLXNlbGVjdGVkLXRpbWV7Zm9udC1zaXplOjMuNXJlbTtmb250LXdlaWdodDo0MDA7ZGlzcGxheTpmbGV4fS53LXRpbWUgLnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBte2ZvbnQtc2l6ZToxcmVtO2xpbmUtaGVpZ2h0OjEuM3JlbTtwYWRkaW5nLXRvcDoycmVtfS53LXRpbWUgLnctdGltZS1jb250ZW50e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cGFkZGluZzo2cHh9LnctdGltZSAudy10aW1lLWNvbnRlbnQgdy1jbG9ja3twYWRkaW5nOjEycHggMDtoZWlnaHQ6Y2FsYygxMDAlIC0gNThweCl9LnctdGltZS52ZXJ0aWNhbC10aW1le2hlaWdodDphdXRvfS53LXRpbWUudmVydGljYWwtdGltZSAudy10aW1lcGlja2VyLXRpbWUtY29udGFpbmVye21pbi13aWR0aDphdXRvO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHB4fS53LXRpbWUudmVydGljYWwtdGltZSAudy10aW1lcGlja2VyLXRpbWUtY29udGFpbmVyIC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbXtwYWRkaW5nOjAgMTJweH0udy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG0+c3Bhbiwudy10aW1lcGlja2VyLXNlbGVjdGVkLXRpbWU+c3BhbntvdXRsaW5lOjA7b3BhY2l0eTouNX0udy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG0+c3Bhbjpub3QoLmFjdGl2ZSksLnctdGltZXBpY2tlci1zZWxlY3RlZC10aW1lPnNwYW46bm90KC5hY3RpdmUpe2N1cnNvcjpwb2ludGVyfS53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbT5zcGFuLmFjdGl2ZSwudy10aW1lcGlja2VyLXNlbGVjdGVkLXRpbWU+c3Bhbi5hY3RpdmV7b3BhY2l0eToxfS53LWFuaW1hdGUtbmV4dHtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTAlLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTAlLDAsMXB4KX0udy1hbmltYXRlLW5leHQtcmVtb3Zle3RyYW5zaXRpb246LjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUwJSwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUwJSwwLDFweCl9LnctYW5pbWF0ZS1uZXh0LXJlbW92ZS1hY3RpdmV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMXB4KX0udy1hbmltYXRlLXByZXZ7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLDAsMXB4KX0udy1hbmltYXRlLXByZXYtcmVtb3Zle3RyYW5zaXRpb246LjNzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLDAsMXB4KX0udy1hbmltYXRlLXByZXYtcmVtb3ZlLWFjdGl2ZXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwxcHgpfUAtd2Via2l0LWtleWZyYW1lcyB3LWFuaW1hdGlvbi1ib3VuY2V7ZnJvbXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX03MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgdy1hbmltYXRpb24tYm91bmNle2Zyb217b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9NzAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX0udy1hbmltYXRpb24tem9vbS5uZy1lbnRlcnt0cmFuc2l0aW9uOi4zcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi4zczthbmltYXRpb24tZHVyYXRpb246LjNzOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6dy1hbmltYXRpb24tYm91bmNlO2FuaW1hdGlvbi1uYW1lOnctYW5pbWF0aW9uLWJvdW5jZX1gXSxcclxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGVQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV1RpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHVzZXJUaW1lOiBJVGltZTtcclxuICBAT3V0cHV0KCkgdXNlclRpbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGltZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIHJldmVydExhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3VibWl0TGFiZWw6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIHJldmVydGVkOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPElUaW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIFZJRVdfSE9VUlMgPSBDTE9DS19UWVBFLkhPVVJTO1xyXG4gIHB1YmxpYyBWSUVXX01JTlVURVMgPSBDTE9DS19UWVBFLk1JTlVURVM7XHJcbiAgcHVibGljIGN1cnJlbnRWaWV3OiBDTE9DS19UWVBFID0gdGhpcy5WSUVXX0hPVVJTO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVBpcGUpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy51c2VyVGltZSkge1xyXG4gICAgICB0aGlzLnVzZXJUaW1lID0ge1xyXG4gICAgICAgIGhvdXI6IDYsXHJcbiAgICAgICAgbWludXRlOiAwLFxyXG4gICAgICAgIG1lcmlkZW46ICdQTScsXHJcbiAgICAgICAgZm9ybWF0OiAxMlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5yZXZlcnRMYWJlbCkge1xyXG4gICAgICB0aGlzLnJldmVydExhYmVsID0gdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSgnYnV0dG9ucy5DYW5jZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3VibWl0TGFiZWwpIHtcclxuICAgICAgdGhpcy5zdWJtaXRMYWJlbCA9IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0oJ2J1dHRvbnMuT2snKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXIoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnVzZXJUaW1lLmZvcm1hdCA9PT0gMjQpIHtcclxuICAgICAgaWYgKHRoaXMudXNlclRpbWUuaG91ciA9PT0gMjQpIHtcclxuICAgICAgICByZXR1cm4gJzAwJztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnVzZXJUaW1lLmhvdXIgPCAxMCkge1xyXG4gICAgICAgIHJldHVybiAnMCcgKyBTdHJpbmcodGhpcy51c2VyVGltZS5ob3VyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBTdHJpbmcodGhpcy51c2VyVGltZS5ob3VyKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdE1pbnV0ZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudXNlclRpbWUubWludXRlID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAnMDAnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZXJUaW1lLm1pbnV0ZSA8IDEwKSB7XHJcbiAgICAgIHJldHVybiAnMCcgKyBTdHJpbmcodGhpcy51c2VyVGltZS5taW51dGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnVzZXJUaW1lLm1pbnV0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50Vmlldyh0eXBlOiBDTE9DS19UWVBFKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdHlwZTtcclxuICB9XHJcblxyXG4gIHNldE1lcmlkaWVuKG06ICdQTScgfCAnQU0nKSB7XHJcbiAgICB0aGlzLnVzZXJUaW1lLm1lcmlkZW4gPSBtO1xyXG4gIH1cclxuXHJcbiAgcmV2ZXJ0KCkge1xyXG4gICAgdGhpcy5yZXZlcnRlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxuXHJcbiAgZW1pdHVzZXJUaW1lQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnVzZXJUaW1lQ2hhbmdlLmVtaXQodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==