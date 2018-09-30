/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CLOCK_TYPE } from '../w-clock/w-clock.component';
export class WTimeDialogComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     */
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.VIEW_HOURS = CLOCK_TYPE.HOURS;
        this.VIEW_MINUTES = CLOCK_TYPE.MINUTES;
        this.currentView = this.VIEW_HOURS;
        this.userTime = data.time;
        this.color = data.color;
    }
    /**
     * @return {?}
     */
    revert() {
        this.dialogRef.close(-1);
    }
    /**
     * @return {?}
     */
    submit() {
        this.dialogRef.close(this.userTime);
    }
}
WTimeDialogComponent.decorators = [
    { type: Component, args: [{
                styles: [`.w-timepicker-dialog{padding:0;margin:-24px;width:calc(100% + 48px)}`],
                template: `<div mat-dialog-content class="w-timepicker-dialog">
  <ntw-time [color]="color" [userTime]="userTime" (reverted)="revert()" (submitted)="submit()"></ntw-time>
</div>
`
            },] },
];
/** @nocollapse */
WTimeDialogComponent.ctorParameters = () => [
    { type: UserTimeData, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef }
];
if (false) {
    /** @type {?} */
    WTimeDialogComponent.prototype.userTime;
    /** @type {?} */
    WTimeDialogComponent.prototype.VIEW_HOURS;
    /** @type {?} */
    WTimeDialogComponent.prototype.VIEW_MINUTES;
    /** @type {?} */
    WTimeDialogComponent.prototype.currentView;
    /** @type {?} */
    WTimeDialogComponent.prototype.color;
    /** @type {?} */
    WTimeDialogComponent.prototype.data;
    /** @type {?} */
    WTimeDialogComponent.prototype.dialogRef;
}
export class UserTimeData {
}
if (false) {
    /** @type {?} */
    UserTimeData.prototype.time;
    /** @type {?} */
    UserTimeData.prototype.color;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy10aW1lLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LXRpbWUtZGlhbG9nL3ctdGltZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSw4QkFBOEIsQ0FBQztBQVNqRSxNQUFNOzs7OztJQU9KLFlBQ21DLElBQWtCLEVBQzNDO1FBRHlCLFNBQUksR0FBSixJQUFJLENBQWM7UUFDM0MsY0FBUyxHQUFULFNBQVM7MEJBUEUsVUFBVSxDQUFDLEtBQUs7NEJBQ2QsVUFBVSxDQUFDLE9BQU87MkJBQ1AsSUFBSSxDQUFDLFVBQVU7UUFNL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUN6Qjs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxNQUFNLEVBQUUsQ0FBQyxzRUFBc0UsQ0FBQztnQkFDaEYsUUFBUSxFQUFFOzs7Q0FHWDthQUNBOzs7O1lBUzBDLFlBQVksdUJBQWxELE1BQU0sU0FBQyxlQUFlO1lBbkJsQixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ3JCLE1BQU07Q0FHTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDTE9DS19UWVBFLCBJVGltZSB9IGZyb20gJy4uL3ctY2xvY2svdy1jbG9jay5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3R5bGVzOiBbYC53LXRpbWVwaWNrZXItZGlhbG9ne3BhZGRpbmc6MDttYXJnaW46LTI0cHg7d2lkdGg6Y2FsYygxMDAlICsgNDhweCl9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cInctdGltZXBpY2tlci1kaWFsb2dcIj5cclxuICA8bnR3LXRpbWUgW2NvbG9yXT1cImNvbG9yXCIgW3VzZXJUaW1lXT1cInVzZXJUaW1lXCIgKHJldmVydGVkKT1cInJldmVydCgpXCIgKHN1Ym1pdHRlZCk9XCJzdWJtaXQoKVwiPjwvbnR3LXRpbWU+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXVGltZURpYWxvZ0NvbXBvbmVudCB7XHJcbiAgcHVibGljIHVzZXJUaW1lOiBJVGltZTtcclxuICBwcml2YXRlIFZJRVdfSE9VUlMgPSBDTE9DS19UWVBFLkhPVVJTO1xyXG4gIHByaXZhdGUgVklFV19NSU5VVEVTID0gQ0xPQ0tfVFlQRS5NSU5VVEVTO1xyXG4gIHByaXZhdGUgY3VycmVudFZpZXc6IENMT0NLX1RZUEUgPSB0aGlzLlZJRVdfSE9VUlM7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogVXNlclRpbWVEYXRhLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxXVGltZURpYWxvZ0NvbXBvbmVudD4pIHtcclxuICAgIHRoaXMudXNlclRpbWUgPSBkYXRhLnRpbWU7XHJcbiAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcclxuICB9XHJcblxyXG4gIHJldmVydCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKC0xKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJUaW1lRGF0YSB7XHJcbiAgdGltZTogSVRpbWU7XHJcbiAgY29sb3I6IHN0cmluZztcclxufVxyXG4iXX0=