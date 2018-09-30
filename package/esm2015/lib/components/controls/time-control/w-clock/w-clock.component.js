/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/** @enum {number} */
const CLOCK_TYPE = {
    HOURS: 1,
    MINUTES: 2,
};
export { CLOCK_TYPE };
CLOCK_TYPE[CLOCK_TYPE.HOURS] = 'HOURS';
CLOCK_TYPE[CLOCK_TYPE.MINUTES] = 'MINUTES';
/** @typedef {?} */
var TimeFormat;
export { TimeFormat };
/**
 * @record
 */
export function ITime() { }
/** @type {?} */
ITime.prototype.hour;
/** @type {?} */
ITime.prototype.minute;
/** @type {?} */
ITime.prototype.meriden;
/** @type {?} */
ITime.prototype.format;
export class WClockComponent {
    constructor() {
        this.userTimeChange = new EventEmitter();
        this.viewChange = new EventEmitter();
        this.steps = new Array();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setupUI();
    }
    /**
     * @return {?}
     */
    setupUI() {
        this.steps = new Array();
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                for (let i = 1; i <= this.userTime.format; i++) {
                    this.steps.push(i);
                    this.selectedTimePart = this.userTime.hour || 0;
                    if (this.selectedTimePart > this.userTime.format) {
                        this.selectedTimePart -= this.userTime.format;
                    }
                }
                break;
            case CLOCK_TYPE.MINUTES:
                for (let i = 5; i <= 55; i += 5) {
                    this.steps.push(i);
                }
                this.steps.push(0);
                this.selectedTimePart = this.userTime.minute || 0;
                break;
        }
    }
    /**
     * @return {?}
     */
    getPointerStyle() {
        /** @type {?} */
        let divider = 1;
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                divider = this.userTime.format;
                break;
            case CLOCK_TYPE.MINUTES:
                divider = 60;
                break;
        }
        /** @type {?} */
        let degrees = 0;
        if (this.currentView === CLOCK_TYPE.HOURS) {
            degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
        }
        else {
            degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
        }
        /** @type {?} */
        const style = {
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        };
        return style;
    }
    /**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    getTimeValueClass(step, index) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.STEP_DEG = 360 / this.userTime.format;
        }
        else {
            this.STEP_DEG = 360 / 12;
        }
        /** @type {?} */
        let classes = 'w-clock-step w-clock-deg' + (this.STEP_DEG * (index + 1));
        if (this.selectedTimePart === step) {
            classes += ' mat-primary';
        }
        return classes;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    changeTimeValue(step) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.userTime.hour = step;
            // auto switch to minutes
            this.viewChange.emit(CLOCK_TYPE.MINUTES);
        }
        else {
            this.userTime.minute = step;
            // auto switch to hours
            this.viewChange.emit(CLOCK_TYPE.HOURS);
        }
        this.userTimeChange.emit(this.userTime);
    }
}
WClockComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-clock',
                styles: [`.w-clock-wrapper{height:100%;padding:0 24px}.w-clock-wrapper .w-clock{width:200px;height:200px;border-radius:50%;cursor:pointer;padding:24px;background:#ededed}.w-clock-wrapper .w-clock .w-clock-container{width:100%;height:100%;position:relative;display:block}.w-clock-wrapper .w-clock .w-clock-center{height:6px;width:6px;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:50%}.w-clock-wrapper .w-clock .w-pointer{box-shadow:none;width:1px;height:50%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;padding:0;-webkit-transform-origin:top center;transform-origin:top center;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;z-index:0;pointer-events:none}.w-clock-wrapper .w-clock .w-clock-step{display:block;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.w-clock-wrapper .w-clock .w-clock-step .mat-mini-fab{box-shadow:none;background-color:transparent}.w-clock-wrapper .w-clock .w-clock-selected{position:absolute;bottom:-19px;left:-19px;min-width:0;min-height:0;pointer-events:none;box-shadow:none;cursor:none}.w-clock-deg0{top:0;left:50%}.w-clock-deg15{top:1.70370869%;left:62.94095226%}.w-clock-deg30{top:6.69872981%;left:75%}.w-clock-deg45{top:14.64466094%;left:85.35533905%}.w-clock-deg60{top:25%;left:93.30127019%}.w-clock-deg75{top:37.05904774%;left:98.29629131%}.w-clock-deg90{top:50%;left:100%}.w-clock-deg105{top:62.94095226%;left:98.29629131%}.w-clock-deg120{top:75%;left:93.30127019%}.w-clock-deg135{top:85.35533906%;left:85.35533906%}.w-clock-deg150{top:93.30127019%;left:75%}.w-clock-deg165{top:98.29629131%;left:62.94095226%}.w-clock-deg180{top:100%;left:50%}.w-clock-deg195{top:98.29629131%;left:37.05904774%}.w-clock-deg210{top:93.30127019%;left:25%}.w-clock-deg225{top:85.35533906%;left:14.64466094%}.w-clock-deg240{top:75%;left:6.69872981%}.w-clock-deg255{top:62.94095226%;left:1.703708686%}.w-clock-deg270{top:50%;left:0}.w-clock-deg285{top:37.05904774%;left:1.703708686%}.w-clock-deg300{top:25%;left:6.69872981%}.w-clock-deg315{top:14.64466094%;left:14.64466094%}.w-clock-deg330{top:6.69872981%;left:25%}.w-clock-deg345{top:1.703708686%;left:37.05904774%}.w-clock-deg360{top:0;left:50%}`],
                template: `<div fxLayout="row"
     fxLayoutAlign="center center"
     class="w-clock-wrapper">
  <div class="w-clock">
    <div class="w-clock-container">

      <!-- Clock center -->
      <button mat-mini-fab
              [color]="color"
              class="w-clock-center"></button>

      <!-- Clock hand -->
      <mat-toolbar [ngStyle]="getPointerStyle()"
                   [color]="color"
                   class="w-pointer">
        <button mat-mini-fab
                [color]="color"
                class="w-clock-selected"></button>
      </mat-toolbar>

      <!-- Hour / Minute number faces -->
      <div *ngFor="let step of steps; let i = index"
           [class]="getTimeValueClass(step, i)">
        <button mat-mini-fab
                [color]="selectedTimePart === step ? color : ''"
                (click)="changeTimeValue(step)">
          {{ step }}
        </button>
      </div>

    </div>
  </div>
</div>
`
            },] },
];
WClockComponent.propDecorators = {
    userTime: [{ type: Input }],
    userTimeChange: [{ type: Output }],
    currentView: [{ type: Input }],
    viewChange: [{ type: Output }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WClockComponent.prototype.userTime;
    /** @type {?} */
    WClockComponent.prototype.userTimeChange;
    /** @type {?} */
    WClockComponent.prototype.currentView;
    /** @type {?} */
    WClockComponent.prototype.viewChange;
    /** @type {?} */
    WClockComponent.prototype.color;
    /** @type {?} */
    WClockComponent.prototype.steps;
    /** @type {?} */
    WClockComponent.prototype.selectedTimePart;
    /** @type {?} */
    WClockComponent.prototype.STEP_DEG;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy1jbG9jay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7SUFJaEYsUUFBUztJQUNULFVBQVc7OztzQkFEWCxLQUFLO3NCQUNMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRFQsTUFBTTs7OEJBRW1ELElBQUksWUFBWSxFQUFFOzBCQUczQyxJQUFJLFlBQVksRUFBYztxQkFJN0MsSUFBSSxLQUFLLEVBQVU7Ozs7O0lBSWxDLFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssVUFBVSxDQUFDLEtBQUs7Z0JBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRWpELElB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QUM7O1lBRzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztZQUc1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7WUExSTNDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsTUFBTSxFQUFFLENBQUMscXVFQUFxdUUsQ0FBQztnQkFDL3VFLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUNYO2FBQ0E7Ozt1QkFFRSxLQUFLOzZCQUNMLE1BQU07MEJBRU4sS0FBSzt5QkFDTCxNQUFNO29CQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBDdXJyZW50IHR5cGUgdG8gc2hvd1xyXG5leHBvcnQgZW51bSBDTE9DS19UWVBFIHtcclxuICBIT1VSUyA9IDEsXHJcbiAgTUlOVVRFUyA9IDJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGltZUZvcm1hdCA9IDEyIHwgMjQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lIHtcclxuICBob3VyOiBudW1iZXI7XHJcbiAgbWludXRlOiBudW1iZXI7XHJcbiAgbWVyaWRlbjogJ1BNJyB8ICdBTSc7XHJcbiAgZm9ybWF0OiBUaW1lRm9ybWF0O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jbG9jaycsXHJcbiAgc3R5bGVzOiBbYC53LWNsb2NrLXdyYXBwZXJ7aGVpZ2h0OjEwMCU7cGFkZGluZzowIDI0cHh9LnctY2xvY2std3JhcHBlciAudy1jbG9ja3t3aWR0aDoyMDBweDtoZWlnaHQ6MjAwcHg7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoyNHB4O2JhY2tncm91bmQ6I2VkZWRlZH0udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1jZW50ZXJ7aGVpZ2h0OjZweDt3aWR0aDo2cHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czo1MCV9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1wb2ludGVye2JveC1zaGFkb3c6bm9uZTt3aWR0aDoxcHg7aGVpZ2h0OjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBjZW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7ei1pbmRleDowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1zdGVwe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc3RlcCAubWF0LW1pbmktZmFie2JveC1zaGFkb3c6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc2VsZWN0ZWR7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xOXB4O2xlZnQ6LTE5cHg7bWluLXdpZHRoOjA7bWluLWhlaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNoYWRvdzpub25lO2N1cnNvcjpub25lfS53LWNsb2NrLWRlZzB7dG9wOjA7bGVmdDo1MCV9LnctY2xvY2stZGVnMTV7dG9wOjEuNzAzNzA4NjklO2xlZnQ6NjIuOTQwOTUyMjYlfS53LWNsb2NrLWRlZzMwe3RvcDo2LjY5ODcyOTgxJTtsZWZ0Ojc1JX0udy1jbG9jay1kZWc0NXt0b3A6MTQuNjQ0NjYwOTQlO2xlZnQ6ODUuMzU1MzM5MDUlfS53LWNsb2NrLWRlZzYwe3RvcDoyNSU7bGVmdDo5My4zMDEyNzAxOSV9LnctY2xvY2stZGVnNzV7dG9wOjM3LjA1OTA0Nzc0JTtsZWZ0Ojk4LjI5NjI5MTMxJX0udy1jbG9jay1kZWc5MHt0b3A6NTAlO2xlZnQ6MTAwJX0udy1jbG9jay1kZWcxMDV7dG9wOjYyLjk0MDk1MjI2JTtsZWZ0Ojk4LjI5NjI5MTMxJX0udy1jbG9jay1kZWcxMjB7dG9wOjc1JTtsZWZ0OjkzLjMwMTI3MDE5JX0udy1jbG9jay1kZWcxMzV7dG9wOjg1LjM1NTMzOTA2JTtsZWZ0Ojg1LjM1NTMzOTA2JX0udy1jbG9jay1kZWcxNTB7dG9wOjkzLjMwMTI3MDE5JTtsZWZ0Ojc1JX0udy1jbG9jay1kZWcxNjV7dG9wOjk4LjI5NjI5MTMxJTtsZWZ0OjYyLjk0MDk1MjI2JX0udy1jbG9jay1kZWcxODB7dG9wOjEwMCU7bGVmdDo1MCV9LnctY2xvY2stZGVnMTk1e3RvcDo5OC4yOTYyOTEzMSU7bGVmdDozNy4wNTkwNDc3NCV9LnctY2xvY2stZGVnMjEwe3RvcDo5My4zMDEyNzAxOSU7bGVmdDoyNSV9LnctY2xvY2stZGVnMjI1e3RvcDo4NS4zNTUzMzkwNiU7bGVmdDoxNC42NDQ2NjA5NCV9LnctY2xvY2stZGVnMjQwe3RvcDo3NSU7bGVmdDo2LjY5ODcyOTgxJX0udy1jbG9jay1kZWcyNTV7dG9wOjYyLjk0MDk1MjI2JTtsZWZ0OjEuNzAzNzA4Njg2JX0udy1jbG9jay1kZWcyNzB7dG9wOjUwJTtsZWZ0OjB9LnctY2xvY2stZGVnMjg1e3RvcDozNy4wNTkwNDc3NCU7bGVmdDoxLjcwMzcwODY4NiV9LnctY2xvY2stZGVnMzAwe3RvcDoyNSU7bGVmdDo2LjY5ODcyOTgxJX0udy1jbG9jay1kZWczMTV7dG9wOjE0LjY0NDY2MDk0JTtsZWZ0OjE0LjY0NDY2MDk0JX0udy1jbG9jay1kZWczMzB7dG9wOjYuNjk4NzI5ODElO2xlZnQ6MjUlfS53LWNsb2NrLWRlZzM0NXt0b3A6MS43MDM3MDg2ODYlO2xlZnQ6MzcuMDU5MDQ3NzQlfS53LWNsb2NrLWRlZzM2MHt0b3A6MDtsZWZ0OjUwJX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcclxuICAgICBjbGFzcz1cInctY2xvY2std3JhcHBlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LWNsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1jbG9jay1jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDwhLS0gQ2xvY2sgY2VudGVyIC0tPlxyXG4gICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYlxyXG4gICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWNsb2NrLWNlbnRlclwiPjwvYnV0dG9uPlxyXG5cclxuICAgICAgPCEtLSBDbG9jayBoYW5kIC0tPlxyXG4gICAgICA8bWF0LXRvb2xiYXIgW25nU3R5bGVdPVwiZ2V0UG9pbnRlclN0eWxlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1wb2ludGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctY2xvY2stc2VsZWN0ZWRcIj48L2J1dHRvbj5cclxuICAgICAgPC9tYXQtdG9vbGJhcj5cclxuXHJcbiAgICAgIDwhLS0gSG91ciAvIE1pbnV0ZSBudW1iZXIgZmFjZXMgLS0+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJnZXRUaW1lVmFsdWVDbGFzcyhzdGVwLCBpKVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICBbY29sb3JdPVwic2VsZWN0ZWRUaW1lUGFydCA9PT0gc3RlcCA/IGNvbG9yIDogJydcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVRpbWVWYWx1ZShzdGVwKVwiPlxyXG4gICAgICAgICAge3sgc3RlcCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdDbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcHVibGljIHVzZXJUaW1lOiBJVGltZTtcclxuICBAT3V0cHV0KCkgcHVibGljIHVzZXJUaW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY3VycmVudFZpZXc6IENMT0NLX1RZUEU7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyB2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDTE9DS19UWVBFPigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHN0ZXBzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICBwdWJsaWMgc2VsZWN0ZWRUaW1lUGFydDtcclxuICBwdWJsaWMgU1RFUF9ERUc6IG51bWJlcjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldHVwVUkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXR1cFVJKCkge1xyXG4gICAgdGhpcy5zdGVwcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5IT1VSUzpcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnVzZXJUaW1lLmZvcm1hdDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goaSk7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgPSB0aGlzLnVzZXJUaW1lLmhvdXIgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWVQYXJ0ID4gdGhpcy51c2VyVGltZS5mb3JtYXQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lUGFydCAtPSB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5NSU5VVEVTOlxyXG4gICAgICAgIGZvciAobGV0IGkgPSA1OyBpIDw9IDU1OyBpICs9IDUpIHtcclxuXHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RlcHMucHVzaCgwKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgPSB0aGlzLnVzZXJUaW1lLm1pbnV0ZSB8fCAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnRlclN0eWxlKCkge1xyXG4gICAgbGV0IGRpdmlkZXIgPSAxO1xyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5IT1VSUzpcclxuICAgICAgICBkaXZpZGVyID0gdGhpcy51c2VyVGltZS5mb3JtYXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5NSU5VVEVTOlxyXG4gICAgICAgIGRpdmlkZXIgPSA2MDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVncmVlcyA9IDA7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICBkZWdyZWVzID0gTWF0aC5yb3VuZCh0aGlzLnVzZXJUaW1lLmhvdXIgKiAoMzYwIC8gZGl2aWRlcikpIC0gMTgwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVncmVlcyA9IE1hdGgucm91bmQodGhpcy51c2VyVGltZS5taW51dGUgKiAoMzYwIC8gZGl2aWRlcikpIC0gMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknLFxyXG4gICAgICAnLW1zLXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZXMgKyAnZGVnKScsXHJcbiAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUaW1lVmFsdWVDbGFzcyhzdGVwOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBDTE9DS19UWVBFLkhPVVJTKSB7XHJcbiAgICAgIHRoaXMuU1RFUF9ERUcgPSAzNjAgLyB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuU1RFUF9ERUcgPSAzNjAgLyAxMjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xhc3NlcyA9ICd3LWNsb2NrLXN0ZXAgdy1jbG9jay1kZWcnICsgKHRoaXMuU1RFUF9ERUcgKiAoaW5kZXggKyAxKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUaW1lUGFydCA9PT0gc3RlcCkge1xyXG5cclxuICAgICAgY2xhc3NlcyArPSAnIG1hdC1wcmltYXJ5JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VUaW1lVmFsdWUoc3RlcDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICB0aGlzLnVzZXJUaW1lLmhvdXIgPSBzdGVwO1xyXG5cclxuICAgICAgLy8gYXV0byBzd2l0Y2ggdG8gbWludXRlc1xyXG4gICAgICB0aGlzLnZpZXdDaGFuZ2UuZW1pdChDTE9DS19UWVBFLk1JTlVURVMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51c2VyVGltZS5taW51dGUgPSBzdGVwO1xyXG5cclxuICAgICAgLy8gYXV0byBzd2l0Y2ggdG8gaG91cnNcclxuICAgICAgdGhpcy52aWV3Q2hhbmdlLmVtaXQoQ0xPQ0tfVFlQRS5IT1VSUyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51c2VyVGltZUNoYW5nZS5lbWl0KHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=