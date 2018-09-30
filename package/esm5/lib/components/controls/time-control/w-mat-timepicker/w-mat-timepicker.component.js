/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WTimeDialogComponent } from '../w-time-dialog/w-time-dialog.component';
import { TranslatePipe } from '@ngx-translate/core';
var WMatTimePickerComponent = /** @class */ (function () {
    function WMatTimePickerComponent(dialog, translatePipe) {
        this.dialog = dialog;
        this.translatePipe = translatePipe;
        this.userTimeChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    WMatTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.userTime) {
            /** @type {?} */
            var currentDate = new Date();
            /** @type {?} */
            var time = {};
            time.hour = 0;
            time.minute = 0;
            time.format = 24;
            time.meriden = 'AM';
            this.userTime = time;
        }
    };
    Object.defineProperty(WMatTimePickerComponent.prototype, "time", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.userTime) {
                return '';
            }
            /** @type {?} */
            var meriden = "" + this.userTime.meriden;
            meriden = this.translatePipe.transform(meriden);
            if (this.userTime.format === 24) {
                meriden = '';
            }
            /** @type {?} */
            var hour = "" + this.userTime.hour;
            if (this.userTime.hour === 24) {
                hour = '00';
            }
            if (this.userTime.minute === 0) {
                return hour + ":00 " + meriden;
            }
            else if (this.userTime.minute < 10) {
                /** @type {?} */
                var tt = '0' + String(this.userTime.minute);
                return hour + ":" + tt + " " + meriden;
            }
            else {
                return hour + ":" + this.userTime.minute + " " + meriden;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    WMatTimePickerComponent.prototype.showPicker = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(WTimeDialogComponent, {
            data: {
                time: {
                    hour: this.userTime.hour,
                    minute: this.userTime.minute,
                    meriden: this.userTime.meriden,
                    format: this.userTime.format
                },
                color: this.color
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
            if (result === undefined) {
                return;
            }
            else if (result !== -1) {
                _this.userTime = result;
                _this.emituserTimeChange();
            }
        });
        return false;
    };
    /**
     * @return {?}
     */
    WMatTimePickerComponent.prototype.emituserTimeChange = /**
     * @return {?}
     */
    function () {
        this.userTimeChange.emit(this.userTime);
    };
    WMatTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-mat-timepicker',
                    styles: [".time-picker-button{padding:0;margin:0;min-width:44px}:host ::ng-deep .ui-dropdown,:host ::ng-deep input.ui-inputtext.ui-widget.ui-state-default,:host ::ng-deep p-dropdown,input.form-input{width:100%!important;height:35px}"],
                    template: "<div fxFlex\n     fxLayout=\"row\"\n     class=\"w-mat-timepicker\">\n\n  <button mat-button type=\"button\"\n          (click)=\"showPicker($event)\"\n          class=\"time-picker-button\">\n    <i class=\"fa fa-clock-o\"></i>\n  </button>\n\n  <input matInput\n         [id]=\"inputId\"\n         [name]=\"inputName\"\n         [disabled]=\"disabled\"\n         [readonly]=\"readonly\"\n         [class]=\"inputClass\"\n         [title]=\"tooltip\"\n         [placeholder]=\"placeholderValue\"\n         [value]=\"time\">\n</div>\n",
                    providers: [TranslatePipe]
                },] },
    ];
    /** @nocollapse */
    WMatTimePickerComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: TranslatePipe }
    ]; };
    WMatTimePickerComponent.propDecorators = {
        userTime: [{ type: Input }],
        userTimeChange: [{ type: Output }],
        color: [{ type: Input }],
        disabled: [{ type: Input }],
        readonly: [{ type: Input }],
        inputClass: [{ type: Input }],
        tooltip: [{ type: Input }],
        placeholderValue: [{ type: Input }],
        inputId: [{ type: Input }],
        inputName: [{ type: Input }]
    };
    return WMatTimePickerComponent;
}());
export { WMatTimePickerComponent };
if (false) {
    /** @type {?} */
    WMatTimePickerComponent.prototype.userTime;
    /** @type {?} */
    WMatTimePickerComponent.prototype.userTimeChange;
    /** @type {?} */
    WMatTimePickerComponent.prototype.color;
    /** @type {?} */
    WMatTimePickerComponent.prototype.disabled;
    /** @type {?} */
    WMatTimePickerComponent.prototype.readonly;
    /** @type {?} */
    WMatTimePickerComponent.prototype.inputClass;
    /** @type {?} */
    WMatTimePickerComponent.prototype.tooltip;
    /** @type {?} */
    WMatTimePickerComponent.prototype.placeholderValue;
    /** @type {?} */
    WMatTimePickerComponent.prototype.inputId;
    /** @type {?} */
    WMatTimePickerComponent.prototype.inputName;
    /** @type {?} */
    WMatTimePickerComponent.prototype.dialog;
    /** @type {?} */
    WMatTimePickerComponent.prototype.translatePipe;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidy1tYXQtdGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LW1hdC10aW1lcGlja2VyL3ctbWF0LXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBa0RsRCxpQ0FDVSxRQUNBO1FBREEsV0FBTSxHQUFOLE1BQU07UUFDTixrQkFBYSxHQUFiLGFBQWE7OEJBcEJ5QixJQUFJLFlBQVksRUFBRTtLQXFCN0Q7Ozs7SUFFTCwwQ0FBUTs7O0lBQVI7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztZQUNuQixJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOztZQUMvQixJQUFNLElBQUksR0FBUSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtLQUNGO0lBRUQsc0JBQUkseUNBQUk7Ozs7UUFBUjtZQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDWDs7WUFFRCxJQUFJLE9BQU8sR0FBRyxLQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBUyxDQUFDO1lBRXpDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7O1lBRUQsSUFBSSxJQUFJLEdBQUcsS0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQU0sQ0FBQztZQUNuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2I7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUksSUFBSSxZQUFPLE9BQVMsQ0FBQzthQUVoQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztnQkFFckMsSUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUksSUFBSSxTQUFJLEVBQUUsU0FBSSxPQUFTLENBQUM7YUFFbkM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUksSUFBSSxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxTQUFJLE9BQVMsQ0FBQzthQUNyRDtTQUNGOzs7T0FBQTs7Ozs7SUFFRCw0Q0FBVTs7OztJQUFWLFVBQVcsTUFBTTtRQUFqQixpQkF5QkM7O1FBeEJDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3ZELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtpQkFDN0I7Z0JBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFdBQVcsRUFBRTthQUNwQixTQUFTLENBQUMsVUFBQyxNQUFrQjs7WUFFNUIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQzthQUNSO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO2dCQUV2QixLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtTQUNGLENBQUMsQ0FBQztRQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7OztJQUVPLG9EQUFrQjs7OztRQUV4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7OztnQkE5SDNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixNQUFNLEVBQUUsQ0FBQyxnT0FBZ08sQ0FBQztvQkFDMU8sUUFBUSxFQUFFLHdoQkFvQlg7b0JBQ0MsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUMzQjs7OztnQkE5QlEsU0FBUztnQkFHVCxhQUFhOzs7MkJBOEJuQixLQUFLO2lDQUVMLE1BQU07d0JBRU4sS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7NkJBRUwsS0FBSzswQkFFTCxLQUFLO21DQUVMLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLOztrQ0FwRFI7O1NBaUNhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBJVGltZSB9IGZyb20gJy4uL3ctY2xvY2svdy1jbG9jay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXVGltZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3ctdGltZS1kaWFsb2cvdy10aW1lLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1tYXQtdGltZXBpY2tlcicsXHJcbiAgc3R5bGVzOiBbYC50aW1lLXBpY2tlci1idXR0b257cGFkZGluZzowO21hcmdpbjowO21pbi13aWR0aDo0NHB4fTpob3N0IDo6bmctZGVlcCAudWktZHJvcGRvd24sOmhvc3QgOjpuZy1kZWVwIGlucHV0LnVpLWlucHV0dGV4dC51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdCw6aG9zdCA6Om5nLWRlZXAgcC1kcm9wZG93bixpbnB1dC5mb3JtLWlucHV0e3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDozNXB4fWBdLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhcclxuICAgICBmeExheW91dD1cInJvd1wiXHJcbiAgICAgY2xhc3M9XCJ3LW1hdC10aW1lcGlja2VyXCI+XHJcblxyXG4gIDxidXR0b24gbWF0LWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIChjbGljayk9XCJzaG93UGlja2VyKCRldmVudClcIlxyXG4gICAgICAgICAgY2xhc3M9XCJ0aW1lLXBpY2tlci1idXR0b25cIj5cclxuICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvY2stb1wiPjwvaT5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGlucHV0IG1hdElucHV0XHJcbiAgICAgICAgIFtpZF09XCJpbnB1dElkXCJcclxuICAgICAgICAgW25hbWVdPVwiaW5wdXROYW1lXCJcclxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgICAgICAgW2NsYXNzXT1cImlucHV0Q2xhc3NcIlxyXG4gICAgICAgICBbdGl0bGVdPVwidG9vbHRpcFwiXHJcbiAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclZhbHVlXCJcclxuICAgICAgICAgW3ZhbHVlXT1cInRpbWVcIj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgcHJvdmlkZXJzOiBbVHJhbnNsYXRlUGlwZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXTWF0VGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdXNlclRpbWU6IElUaW1lO1xyXG5cclxuICBAT3V0cHV0KCkgdXNlclRpbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGltZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGlucHV0Q2xhc3M6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlclZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaW5wdXROYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlUGlwZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnVzZXJUaW1lKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgdGltZTogYW55ID0ge307XHJcbiAgICAgIHRpbWUuaG91ciA9IDA7XHJcbiAgICAgIHRpbWUubWludXRlID0gMDtcclxuICAgICAgdGltZS5mb3JtYXQgPSAyNDtcclxuICAgICAgdGltZS5tZXJpZGVuID0gJ0FNJztcclxuXHJcbiAgICAgIHRoaXMudXNlclRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRpbWUoKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy51c2VyVGltZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1lcmlkZW4gPSBgJHt0aGlzLnVzZXJUaW1lLm1lcmlkZW59YDtcclxuXHJcbiAgICBtZXJpZGVuID0gdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybShtZXJpZGVuKTtcclxuXHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5mb3JtYXQgPT09IDI0KSB7XHJcbiAgICAgIG1lcmlkZW4gPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaG91ciA9IGAke3RoaXMudXNlclRpbWUuaG91cn1gO1xyXG4gICAgaWYgKHRoaXMudXNlclRpbWUuaG91ciA9PT0gMjQpIHtcclxuICAgICAgaG91ciA9ICcwMCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudXNlclRpbWUubWludXRlID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBgJHtob3VyfTowMCAke21lcmlkZW59YDtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudXNlclRpbWUubWludXRlIDwgMTApIHtcclxuXHJcbiAgICAgIGNvbnN0IHR0ID0gJzAnICsgU3RyaW5nKHRoaXMudXNlclRpbWUubWludXRlKTtcclxuICAgICAgcmV0dXJuIGAke2hvdXJ9OiR7dHR9ICR7bWVyaWRlbn1gO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBgJHtob3VyfToke3RoaXMudXNlclRpbWUubWludXRlfSAke21lcmlkZW59YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dQaWNrZXIoJGV2ZW50KSB7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFdUaW1lRGlhbG9nQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICBob3VyOiB0aGlzLnVzZXJUaW1lLmhvdXIsXHJcbiAgICAgICAgICBtaW51dGU6IHRoaXMudXNlclRpbWUubWludXRlLFxyXG4gICAgICAgICAgbWVyaWRlbjogdGhpcy51c2VyVGltZS5tZXJpZGVuLFxyXG4gICAgICAgICAgZm9ybWF0OiB0aGlzLnVzZXJUaW1lLmZvcm1hdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3JcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKClcclxuICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBJVGltZSB8IC0xKSA9PiB7XHJcbiAgICAgICAgLy8gcmVzdWx0IHdpbGwgYmUgdXBkYXRlIHVzZXJUaW1lIG9iamVjdCBvciAtMSBvciB1bmRlZmluZWQgKGNsb3NlZCBkaWFsb2cgdy9vIGNsaWNraW5nIGNhbmNlbClcclxuICAgICAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPT0gLTEpIHtcclxuICAgICAgICAgIHRoaXMudXNlclRpbWUgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgICAgdGhpcy5lbWl0dXNlclRpbWVDaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0dXNlclRpbWVDaGFuZ2UoKSB7XHJcblxyXG4gICAgdGhpcy51c2VyVGltZUNoYW5nZS5lbWl0KHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG4iXX0=