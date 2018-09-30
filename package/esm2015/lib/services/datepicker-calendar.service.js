/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
/** @type {?} */
const I18N_VALUES = {
    weekdays: ['إث', 'ثل', 'أر', 'خم', 'جم', 'سب', 'أح'],
    months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
        'ذو القعدة', 'ذو الحجة']
};
export class IslamicI18n extends NgbDatepickerI18n {
    /**
     * \@description Gets the weekday short name.
     * @param {?} weekday
     * @return {?} string The weekday short name.
     */
    getWeekdayShortName(weekday) {
        return I18N_VALUES.weekdays[weekday - 1];
    }
    /**
     * \@description Gets the weekday short name.
     * @param {?} month
     * @return {?} string The month short name.
     */
    getMonthShortName(month) {
        return I18N_VALUES.months[month - 1];
    }
    /**
     * \@description Gets the month full name.
     * @param {?} month
     * @return {?} string The month full name.
     */
    getMonthFullName(month) {
        return this.getMonthShortName(month);
    }
    /**
     * \@description Gets the day aria label.
     * @param {?} date
     * @return {?} string The day aria label.
     */
    getDayAriaLabel(date) {
        return `${date.day}-${date.month}-${date.year}`;
    }
}
IslamicI18n.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ IslamicI18n.ngInjectableDef = i0.defineInjectable({ factory: function IslamicI18n_Factory() { return new IslamicI18n(); }, token: IslamicI18n, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGF0ZXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRTlFLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO1FBQ2pILFdBQVcsRUFBRSxVQUFVLENBQUM7Q0FDM0IsQ0FBQztBQUdGLE1BQU0sa0JBQW1CLFNBQVEsaUJBQWlCOzs7Ozs7SUFLekMsbUJBQW1CLENBQUMsT0FBZTtRQUN4QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFPcEMsaUJBQWlCLENBQUMsS0FBYTtRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFPaEMsZ0JBQWdCLENBQUMsS0FBYTtRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7O0lBT2hDLGVBQWUsQ0FBQyxJQUFtQjtRQUN4QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7O1lBL0JuRCxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0LCBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IEkxOE5fVkFMVUVTID0ge1xyXG4gIHdlZWtkYXlzOiBbJ9il2KsnLCAn2KvZhCcsICfYo9ixJywgJ9iu2YUnLCAn2KzZhScsICfYs9ioJywgJ9ij2K0nXSxcclxuICBtb250aHM6IFsn2YXYrdix2YUnLCAn2LXZgdixJywgJ9ix2KjZiti5INin2YTYo9mI2YQnLCAn2LHYqNmK2Lkg2KfZhNii2K7YsScsICfYrNmF2KfYr9mJINin2YTYo9mI2YTZiScsICfYrNmF2KfYr9mJINin2YTYotiu2LHYqScsICfYsdis2KgnLCAn2LTYudio2KfZhicsICfYsdmF2LbYp9mGJywgJ9i02YjYp9mEJyxcclxuICAgICfYsNmIINin2YTZgti52K/YqScsICfYsNmIINin2YTYrdis2KknXVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIElzbGFtaWNJMThuIGV4dGVuZHMgTmdiRGF0ZXBpY2tlckkxOG4ge1xyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgd2Vla2RheSBzaG9ydCBuYW1lLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgd2Vla2RheSBUaGUgd2Vla2RheS5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgd2Vla2RheSBzaG9ydCBuYW1lLlxyXG4gICovXHJcbiAgcHVibGljIGdldFdlZWtkYXlTaG9ydE5hbWUod2Vla2RheTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBJMThOX1ZBTFVFUy53ZWVrZGF5c1t3ZWVrZGF5IC0gMV07XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHdlZWtkYXkgc2hvcnQgbmFtZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIG1vbnRoIFRoZSBtb250aC5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgbW9udGggc2hvcnQgbmFtZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBJMThOX1ZBTFVFUy5tb250aHNbbW9udGggLSAxXTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgbW9udGggZnVsbCBuYW1lLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgbW9udGggVGhlIG1vbnRoLlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSBtb250aCBmdWxsIG5hbWUuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1vbnRoU2hvcnROYW1lKG1vbnRoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZGF5IGFyaWEgbGFiZWwuXHJcbiAgICogQHBhcmFtIE5nYkRhdGVTdHJ1Y3QgZGF0ZSBUaGUgZGF0ZS5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgZGF5IGFyaWEgbGFiZWwuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke2RhdGUuZGF5fS0ke2RhdGUubW9udGh9LSR7ZGF0ZS55ZWFyfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==