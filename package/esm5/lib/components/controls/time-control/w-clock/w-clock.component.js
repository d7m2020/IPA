/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/** @enum {number} */
var CLOCK_TYPE = {
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
var WClockComponent = /** @class */ (function () {
    function WClockComponent() {
        this.userTimeChange = new EventEmitter();
        this.viewChange = new EventEmitter();
        this.steps = new Array();
    }
    /**
     * @return {?}
     */
    WClockComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setupUI();
    };
    /**
     * @return {?}
     */
    WClockComponent.prototype.setupUI = /**
     * @return {?}
     */
    function () {
        this.steps = new Array();
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                for (var i = 1; i <= this.userTime.format; i++) {
                    this.steps.push(i);
                    this.selectedTimePart = this.userTime.hour || 0;
                    if (this.selectedTimePart > this.userTime.format) {
                        this.selectedTimePart -= this.userTime.format;
                    }
                }
                break;
            case CLOCK_TYPE.MINUTES:
                for (var i = 5; i <= 55; i += 5) {
                    this.steps.push(i);
                }
                this.steps.push(0);
                this.selectedTimePart = this.userTime.minute || 0;
                break;
        }
    };
    /**
     * @return {?}
     */
    WClockComponent.prototype.getPointerStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var divider = 1;
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                divider = this.userTime.format;
                break;
            case CLOCK_TYPE.MINUTES:
                divider = 60;
                break;
        }
        /** @type {?} */
        var degrees = 0;
        if (this.currentView === CLOCK_TYPE.HOURS) {
            degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
        }
        else {
            degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
        }
        /** @type {?} */
        var style = {
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        };
        return style;
    };
    /**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    WClockComponent.prototype.getTimeValueClass = /**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    function (step, index) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.STEP_DEG = 360 / this.userTime.format;
        }
        else {
            this.STEP_DEG = 360 / 12;
        }
        /** @type {?} */
        var classes = 'w-clock-step w-clock-deg' + (this.STEP_DEG * (index + 1));
        if (this.selectedTimePart === step) {
            classes += ' mat-primary';
        }
        return classes;
    };
    /**
     * @param {?} step
     * @return {?}
     */
    WClockComponent.prototype.changeTimeValue = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
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
    };
    WClockComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-clock',
                    styles: [".w-clock-wrapper{height:100%;padding:0 24px}.w-clock-wrapper .w-clock{width:200px;height:200px;border-radius:50%;cursor:pointer;padding:24px;background:#ededed}.w-clock-wrapper .w-clock .w-clock-container{width:100%;height:100%;position:relative;display:block}.w-clock-wrapper .w-clock .w-clock-center{height:6px;width:6px;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:50%}.w-clock-wrapper .w-clock .w-pointer{box-shadow:none;width:1px;height:50%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;padding:0;-webkit-transform-origin:top center;transform-origin:top center;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;z-index:0;pointer-events:none}.w-clock-wrapper .w-clock .w-clock-step{display:block;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.w-clock-wrapper .w-clock .w-clock-step .mat-mini-fab{box-shadow:none;background-color:transparent}.w-clock-wrapper .w-clock .w-clock-selected{position:absolute;bottom:-19px;left:-19px;min-width:0;min-height:0;pointer-events:none;box-shadow:none;cursor:none}.w-clock-deg0{top:0;left:50%}.w-clock-deg15{top:1.70370869%;left:62.94095226%}.w-clock-deg30{top:6.69872981%;left:75%}.w-clock-deg45{top:14.64466094%;left:85.35533905%}.w-clock-deg60{top:25%;left:93.30127019%}.w-clock-deg75{top:37.05904774%;left:98.29629131%}.w-clock-deg90{top:50%;left:100%}.w-clock-deg105{top:62.94095226%;left:98.29629131%}.w-clock-deg120{top:75%;left:93.30127019%}.w-clock-deg135{top:85.35533906%;left:85.35533906%}.w-clock-deg150{top:93.30127019%;left:75%}.w-clock-deg165{top:98.29629131%;left:62.94095226%}.w-clock-deg180{top:100%;left:50%}.w-clock-deg195{top:98.29629131%;left:37.05904774%}.w-clock-deg210{top:93.30127019%;left:25%}.w-clock-deg225{top:85.35533906%;left:14.64466094%}.w-clock-deg240{top:75%;left:6.69872981%}.w-clock-deg255{top:62.94095226%;left:1.703708686%}.w-clock-deg270{top:50%;left:0}.w-clock-deg285{top:37.05904774%;left:1.703708686%}.w-clock-deg300{top:25%;left:6.69872981%}.w-clock-deg315{top:14.64466094%;left:14.64466094%}.w-clock-deg330{top:6.69872981%;left:25%}.w-clock-deg345{top:1.703708686%;left:37.05904774%}.w-clock-deg360{top:0;left:50%}"],
                    template: "<div fxLayout=\"row\"\n     fxLayoutAlign=\"center center\"\n     class=\"w-clock-wrapper\">\n  <div class=\"w-clock\">\n    <div class=\"w-clock-container\">\n\n      <!-- Clock center -->\n      <button mat-mini-fab\n              [color]=\"color\"\n              class=\"w-clock-center\"></button>\n\n      <!-- Clock hand -->\n      <mat-toolbar [ngStyle]=\"getPointerStyle()\"\n                   [color]=\"color\"\n                   class=\"w-pointer\">\n        <button mat-mini-fab\n                [color]=\"color\"\n                class=\"w-clock-selected\"></button>\n      </mat-toolbar>\n\n      <!-- Hour / Minute number faces -->\n      <div *ngFor=\"let step of steps; let i = index\"\n           [class]=\"getTimeValueClass(step, i)\">\n        <button mat-mini-fab\n                [color]=\"selectedTimePart === step ? color : ''\"\n                (click)=\"changeTimeValue(step)\">\n          {{ step }}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"
                },] },
    ];
    WClockComponent.propDecorators = {
        userTime: [{ type: Input }],
        userTimeChange: [{ type: Output }],
        currentView: [{ type: Input }],
        viewChange: [{ type: Output }],
        color: [{ type: Input }]
    };
    return WClockComponent;
}());
export { WClockComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy1jbG9jay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7SUFJaEYsUUFBUztJQUNULFVBQVc7OztzQkFEWCxLQUFLO3NCQUNMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFvRGdELElBQUksWUFBWSxFQUFFOzBCQUczQyxJQUFJLFlBQVksRUFBYztxQkFJN0MsSUFBSSxLQUFLLEVBQVU7Ozs7O0lBSWxDLHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVNLGlDQUFPOzs7O1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssVUFBVSxDQUFDLEtBQUs7Z0JBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7b0JBRWhELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBRWpE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QyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUcxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs7WUFHNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Z0JBMUkzQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDLHF1RUFBcXVFLENBQUM7b0JBQy91RSxRQUFRLEVBQUUsbStCQWlDWDtpQkFDQTs7OzJCQUVFLEtBQUs7aUNBQ0wsTUFBTTs4QkFFTixLQUFLOzZCQUNMLE1BQU07d0JBRU4sS0FBSzs7MEJBOURSOztTQXVEYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gQ3VycmVudCB0eXBlIHRvIHNob3dcclxuZXhwb3J0IGVudW0gQ0xPQ0tfVFlQRSB7XHJcbiAgSE9VUlMgPSAxLFxyXG4gIE1JTlVURVMgPSAyXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFRpbWVGb3JtYXQgPSAxMiB8IDI0O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGltZSB7XHJcbiAgaG91cjogbnVtYmVyO1xyXG4gIG1pbnV0ZTogbnVtYmVyO1xyXG4gIG1lcmlkZW46ICdQTScgfCAnQU0nO1xyXG4gIGZvcm1hdDogVGltZUZvcm1hdDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctY2xvY2snLFxyXG4gIHN0eWxlczogW2Audy1jbG9jay13cmFwcGVye2hlaWdodDoxMDAlO3BhZGRpbmc6MCAyNHB4fS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2t7d2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4O2JvcmRlci1yYWRpdXM6NTAlO2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6MjRweDtiYWNrZ3JvdW5kOiNlZGVkZWR9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stY2VudGVye2hlaWdodDo2cHg7d2lkdGg6NnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO21hcmdpbjphdXRvO2JvcmRlci1yYWRpdXM6NTAlfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctcG9pbnRlcntib3gtc2hhZG93Om5vbmU7d2lkdGg6MXB4O2hlaWdodDo1MCU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnRvcCBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzO3otaW5kZXg6MDtwb2ludGVyLWV2ZW50czpub25lfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc3RlcHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yc30udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLXN0ZXAgLm1hdC1taW5pLWZhYntib3gtc2hhZG93Om5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLXNlbGVjdGVke3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotMTlweDtsZWZ0Oi0xOXB4O21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lO2JveC1zaGFkb3c6bm9uZTtjdXJzb3I6bm9uZX0udy1jbG9jay1kZWcwe3RvcDowO2xlZnQ6NTAlfS53LWNsb2NrLWRlZzE1e3RvcDoxLjcwMzcwODY5JTtsZWZ0OjYyLjk0MDk1MjI2JX0udy1jbG9jay1kZWczMHt0b3A6Ni42OTg3Mjk4MSU7bGVmdDo3NSV9LnctY2xvY2stZGVnNDV7dG9wOjE0LjY0NDY2MDk0JTtsZWZ0Ojg1LjM1NTMzOTA1JX0udy1jbG9jay1kZWc2MHt0b3A6MjUlO2xlZnQ6OTMuMzAxMjcwMTklfS53LWNsb2NrLWRlZzc1e3RvcDozNy4wNTkwNDc3NCU7bGVmdDo5OC4yOTYyOTEzMSV9LnctY2xvY2stZGVnOTB7dG9wOjUwJTtsZWZ0OjEwMCV9LnctY2xvY2stZGVnMTA1e3RvcDo2Mi45NDA5NTIyNiU7bGVmdDo5OC4yOTYyOTEzMSV9LnctY2xvY2stZGVnMTIwe3RvcDo3NSU7bGVmdDo5My4zMDEyNzAxOSV9LnctY2xvY2stZGVnMTM1e3RvcDo4NS4zNTUzMzkwNiU7bGVmdDo4NS4zNTUzMzkwNiV9LnctY2xvY2stZGVnMTUwe3RvcDo5My4zMDEyNzAxOSU7bGVmdDo3NSV9LnctY2xvY2stZGVnMTY1e3RvcDo5OC4yOTYyOTEzMSU7bGVmdDo2Mi45NDA5NTIyNiV9LnctY2xvY2stZGVnMTgwe3RvcDoxMDAlO2xlZnQ6NTAlfS53LWNsb2NrLWRlZzE5NXt0b3A6OTguMjk2MjkxMzElO2xlZnQ6MzcuMDU5MDQ3NzQlfS53LWNsb2NrLWRlZzIxMHt0b3A6OTMuMzAxMjcwMTklO2xlZnQ6MjUlfS53LWNsb2NrLWRlZzIyNXt0b3A6ODUuMzU1MzM5MDYlO2xlZnQ6MTQuNjQ0NjYwOTQlfS53LWNsb2NrLWRlZzI0MHt0b3A6NzUlO2xlZnQ6Ni42OTg3Mjk4MSV9LnctY2xvY2stZGVnMjU1e3RvcDo2Mi45NDA5NTIyNiU7bGVmdDoxLjcwMzcwODY4NiV9LnctY2xvY2stZGVnMjcwe3RvcDo1MCU7bGVmdDowfS53LWNsb2NrLWRlZzI4NXt0b3A6MzcuMDU5MDQ3NzQlO2xlZnQ6MS43MDM3MDg2ODYlfS53LWNsb2NrLWRlZzMwMHt0b3A6MjUlO2xlZnQ6Ni42OTg3Mjk4MSV9LnctY2xvY2stZGVnMzE1e3RvcDoxNC42NDQ2NjA5NCU7bGVmdDoxNC42NDQ2NjA5NCV9LnctY2xvY2stZGVnMzMwe3RvcDo2LjY5ODcyOTgxJTtsZWZ0OjI1JX0udy1jbG9jay1kZWczNDV7dG9wOjEuNzAzNzA4Njg2JTtsZWZ0OjM3LjA1OTA0Nzc0JX0udy1jbG9jay1kZWczNjB7dG9wOjA7bGVmdDo1MCV9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCJcclxuICAgICBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgY2xhc3M9XCJ3LWNsb2NrLXdyYXBwZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwidy1jbG9ja1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInctY2xvY2stY29udGFpbmVyXCI+XHJcblxyXG4gICAgICA8IS0tIENsb2NrIGNlbnRlciAtLT5cclxuICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwidy1jbG9jay1jZW50ZXJcIj48L2J1dHRvbj5cclxuXHJcbiAgICAgIDwhLS0gQ2xvY2sgaGFuZCAtLT5cclxuICAgICAgPG1hdC10b29sYmFyIFtuZ1N0eWxlXT1cImdldFBvaW50ZXJTdHlsZSgpXCJcclxuICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctcG9pbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LWNsb2NrLXNlbGVjdGVkXCI+PC9idXR0b24+XHJcbiAgICAgIDwvbWF0LXRvb2xiYXI+XHJcblxyXG4gICAgICA8IS0tIEhvdXIgLyBNaW51dGUgbnVtYmVyIGZhY2VzIC0tPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICBbY2xhc3NdPVwiZ2V0VGltZVZhbHVlQ2xhc3Moc3RlcCwgaSlcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYlxyXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cInNlbGVjdGVkVGltZVBhcnQgPT09IHN0ZXAgPyBjb2xvciA6ICcnXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VUaW1lVmFsdWUoc3RlcClcIj5cclxuICAgICAgICAgIHt7IHN0ZXAgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1c2VyVGltZTogSVRpbWU7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyB1c2VyVGltZUNoYW5nZTogRXZlbnRFbWl0dGVyPElUaW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGN1cnJlbnRWaWV3OiBDTE9DS19UWVBFO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgdmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q0xPQ0tfVFlQRT4oKTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGVwcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgcHVibGljIHNlbGVjdGVkVGltZVBhcnQ7XHJcbiAgcHVibGljIFNURVBfREVHOiBudW1iZXI7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXR1cFVJKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0dXBVSSgpIHtcclxuICAgIHRoaXMuc3RlcHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG5cclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50Vmlldykge1xyXG4gICAgICBjYXNlIENMT0NLX1RZUEUuSE9VUlM6XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy51c2VyVGltZS5mb3JtYXQ7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5zdGVwcy5wdXNoKGkpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFRpbWVQYXJ0ID0gdGhpcy51c2VyVGltZS5ob3VyIHx8IDA7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUaW1lUGFydCA+IHRoaXMudXNlclRpbWUuZm9ybWF0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgLT0gdGhpcy51c2VyVGltZS5mb3JtYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENMT0NLX1RZUEUuTUlOVVRFUzpcclxuICAgICAgICBmb3IgKGxldCBpID0gNTsgaSA8PSA1NTsgaSArPSA1KSB7XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGVwcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0ZXBzLnB1c2goMCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRpbWVQYXJ0ID0gdGhpcy51c2VyVGltZS5taW51dGUgfHwgMDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFBvaW50ZXJTdHlsZSgpIHtcclxuICAgIGxldCBkaXZpZGVyID0gMTtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50Vmlldykge1xyXG4gICAgICBjYXNlIENMT0NLX1RZUEUuSE9VUlM6XHJcbiAgICAgICAgZGl2aWRlciA9IHRoaXMudXNlclRpbWUuZm9ybWF0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENMT0NLX1RZUEUuTUlOVVRFUzpcclxuICAgICAgICBkaXZpZGVyID0gNjA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlZ3JlZXMgPSAwO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IENMT0NLX1RZUEUuSE9VUlMpIHtcclxuICAgICAgZGVncmVlcyA9IE1hdGgucm91bmQodGhpcy51c2VyVGltZS5ob3VyICogKDM2MCAvIGRpdmlkZXIpKSAtIDE4MDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlZ3JlZXMgPSBNYXRoLnJvdW5kKHRoaXMudXNlclRpbWUubWludXRlICogKDM2MCAvIGRpdmlkZXIpKSAtIDE4MDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlcyArICdkZWcpJyxcclxuICAgICAgJy1tcy10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknLFxyXG4gICAgICAndHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlcyArICdkZWcpJ1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VGltZVZhbHVlQ2xhc3Moc3RlcDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICB0aGlzLlNURVBfREVHID0gMzYwIC8gdGhpcy51c2VyVGltZS5mb3JtYXQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLlNURVBfREVHID0gMzYwIC8gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNsYXNzZXMgPSAndy1jbG9jay1zdGVwIHctY2xvY2stZGVnJyArICh0aGlzLlNURVBfREVHICogKGluZGV4ICsgMSkpO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkVGltZVBhcnQgPT09IHN0ZXApIHtcclxuXHJcbiAgICAgIGNsYXNzZXMgKz0gJyBtYXQtcHJpbWFyeSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVGltZVZhbHVlKHN0ZXA6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IENMT0NLX1RZUEUuSE9VUlMpIHtcclxuICAgICAgdGhpcy51c2VyVGltZS5ob3VyID0gc3RlcDtcclxuXHJcbiAgICAgIC8vIGF1dG8gc3dpdGNoIHRvIG1pbnV0ZXNcclxuICAgICAgdGhpcy52aWV3Q2hhbmdlLmVtaXQoQ0xPQ0tfVFlQRS5NSU5VVEVTKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXNlclRpbWUubWludXRlID0gc3RlcDtcclxuXHJcbiAgICAgIC8vIGF1dG8gc3dpdGNoIHRvIGhvdXJzXHJcbiAgICAgIHRoaXMudmlld0NoYW5nZS5lbWl0KENMT0NLX1RZUEUuSE9VUlMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXNlclRpbWVDaGFuZ2UuZW1pdCh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcbn1cclxuIl19