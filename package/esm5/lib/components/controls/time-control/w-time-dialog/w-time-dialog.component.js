/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CLOCK_TYPE } from '../w-clock/w-clock.component';
var WTimeDialogComponent = /** @class */ (function () {
    function WTimeDialogComponent(data, dialogRef) {
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
    WTimeDialogComponent.prototype.revert = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(-1);
    };
    /**
     * @return {?}
     */
    WTimeDialogComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(this.userTime);
    };
    WTimeDialogComponent.decorators = [
        { type: Component, args: [{
                    styles: [".w-timepicker-dialog{padding:0;margin:-24px;width:calc(100% + 48px)}"],
                    template: "<div mat-dialog-content class=\"w-timepicker-dialog\">\n  <ntw-time [color]=\"color\" [userTime]=\"userTime\" (reverted)=\"revert()\" (submitted)=\"submit()\"></ntw-time>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    WTimeDialogComponent.ctorParameters = function () { return [
        { type: UserTimeData, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef }
    ]; };
    return WTimeDialogComponent;
}());
export { WTimeDialogComponent };
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
var UserTimeData = /** @class */ (function () {
    function UserTimeData() {
    }
    return UserTimeData;
}());
export { UserTimeData };
if (false) {
    /** @type {?} */
    UserTimeData.prototype.time;
    /** @type {?} */
    UserTimeData.prototype.color;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy10aW1lLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LXRpbWUtZGlhbG9nL3ctdGltZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSw4QkFBOEIsQ0FBQzs7SUFnQi9ELDhCQUNtQyxJQUFrQixFQUMzQztRQUR5QixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQzNDLGNBQVMsR0FBVCxTQUFTOzBCQVBFLFVBQVUsQ0FBQyxLQUFLOzRCQUNkLFVBQVUsQ0FBQyxPQUFPOzJCQUNQLElBQUksQ0FBQyxVQUFVO1FBTS9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDekI7Ozs7SUFFRCxxQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQscUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3JDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULE1BQU0sRUFBRSxDQUFDLHNFQUFzRSxDQUFDO29CQUNoRixRQUFRLEVBQUUsc0xBR1g7aUJBQ0E7Ozs7Z0JBUzBDLFlBQVksdUJBQWxELE1BQU0sU0FBQyxlQUFlO2dCQW5CbEIsWUFBWTs7K0JBRHJCOztTQVlhLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QmpDLElBQUE7Ozt1QkFuQ0E7SUFzQ0MsQ0FBQTtBQUhELHdCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IENMT0NLX1RZUEUsIElUaW1lIH0gZnJvbSAnLi4vdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzdHlsZXM6IFtgLnctdGltZXBpY2tlci1kaWFsb2d7cGFkZGluZzowO21hcmdpbjotMjRweDt3aWR0aDpjYWxjKDEwMCUgKyA0OHB4KX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgbWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwidy10aW1lcGlja2VyLWRpYWxvZ1wiPlxyXG4gIDxudHctdGltZSBbY29sb3JdPVwiY29sb3JcIiBbdXNlclRpbWVdPVwidXNlclRpbWVcIiAocmV2ZXJ0ZWQpPVwicmV2ZXJ0KClcIiAoc3VibWl0dGVkKT1cInN1Ym1pdCgpXCI+PC9udHctdGltZT5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdUaW1lRGlhbG9nQ29tcG9uZW50IHtcclxuICBwdWJsaWMgdXNlclRpbWU6IElUaW1lO1xyXG4gIHByaXZhdGUgVklFV19IT1VSUyA9IENMT0NLX1RZUEUuSE9VUlM7XHJcbiAgcHJpdmF0ZSBWSUVXX01JTlVURVMgPSBDTE9DS19UWVBFLk1JTlVURVM7XHJcbiAgcHJpdmF0ZSBjdXJyZW50VmlldzogQ0xPQ0tfVFlQRSA9IHRoaXMuVklFV19IT1VSUztcclxuICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHJpdmF0ZSBkYXRhOiBVc2VyVGltZURhdGEsXHJcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFdUaW1lRGlhbG9nQ29tcG9uZW50Pikge1xyXG4gICAgdGhpcy51c2VyVGltZSA9IGRhdGEudGltZTtcclxuICAgIHRoaXMuY29sb3IgPSBkYXRhLmNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcmV2ZXJ0KCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoLTEpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclRpbWVEYXRhIHtcclxuICB0aW1lOiBJVGltZTtcclxuICBjb2xvcjogc3RyaW5nO1xyXG59XHJcbiJdfQ==