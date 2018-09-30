/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
/** @type {?} */
var I18N_VALUES = {
    weekdays: ['إث', 'ثل', 'أر', 'خم', 'جم', 'سب', 'أح'],
    months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
        'ذو القعدة', 'ذو الحجة']
};
var IslamicI18n = /** @class */ (function (_super) {
    tslib_1.__extends(IslamicI18n, _super);
    function IslamicI18n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * \@description Gets the weekday short name.
     * @param {?} weekday
     * @return {?} string The weekday short name.
     */
    IslamicI18n.prototype.getWeekdayShortName = /**
     * \@description Gets the weekday short name.
     * @param {?} weekday
     * @return {?} string The weekday short name.
     */
    function (weekday) {
        return I18N_VALUES.weekdays[weekday - 1];
    };
    /**
     * \@description Gets the weekday short name.
     * @param {?} month
     * @return {?} string The month short name.
     */
    IslamicI18n.prototype.getMonthShortName = /**
     * \@description Gets the weekday short name.
     * @param {?} month
     * @return {?} string The month short name.
     */
    function (month) {
        return I18N_VALUES.months[month - 1];
    };
    /**
     * \@description Gets the month full name.
     * @param {?} month
     * @return {?} string The month full name.
     */
    IslamicI18n.prototype.getMonthFullName = /**
     * \@description Gets the month full name.
     * @param {?} month
     * @return {?} string The month full name.
     */
    function (month) {
        return this.getMonthShortName(month);
    };
    /**
     * \@description Gets the day aria label.
     * @param {?} date
     * @return {?} string The day aria label.
     */
    IslamicI18n.prototype.getDayAriaLabel = /**
     * \@description Gets the day aria label.
     * @param {?} date
     * @return {?} string The day aria label.
     */
    function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    IslamicI18n.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ IslamicI18n.ngInjectableDef = i0.defineInjectable({ factory: function IslamicI18n_Factory() { return new IslamicI18n(); }, token: IslamicI18n, providedIn: "root" });
    return IslamicI18n;
}(NgbDatepickerI18n));
export { IslamicI18n };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZGF0ZXBpY2tlci1jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUU5RSxJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEQsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUNqSCxXQUFXLEVBQUUsVUFBVSxDQUFDO0NBQzNCLENBQUM7O0lBRytCLHVDQUFpQjs7Ozs7Ozs7O0lBS3pDLHlDQUFtQjs7Ozs7Y0FBQyxPQUFlO1FBQ3hDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU9wQyx1Q0FBaUI7Ozs7O2NBQUMsS0FBYTtRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFPaEMsc0NBQWdCOzs7OztjQUFDLEtBQWE7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQU9oQyxxQ0FBZTs7Ozs7Y0FBQyxJQUFtQjtRQUN4QyxNQUFNLENBQUksSUFBSSxDQUFDLEdBQUcsU0FBSSxJQUFJLENBQUMsS0FBSyxTQUFJLElBQUksQ0FBQyxJQUFNLENBQUM7OztnQkEvQm5ELFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztzQkFUbEM7RUFVaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QsIE5nYkRhdGVwaWNrZXJJMThuIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgSTE4Tl9WQUxVRVMgPSB7XHJcbiAgd2Vla2RheXM6IFsn2KXYqycsICfYq9mEJywgJ9ij2LEnLCAn2K7ZhScsICfYrNmFJywgJ9iz2KgnLCAn2KPYrSddLFxyXG4gIG1vbnRoczogWyfZhdit2LHZhScsICfYtdmB2LEnLCAn2LHYqNmK2Lkg2KfZhNij2YjZhCcsICfYsdio2YrYuSDYp9mE2KLYrtixJywgJ9is2YXYp9iv2Ykg2KfZhNij2YjZhNmJJywgJ9is2YXYp9iv2Ykg2KfZhNii2K7YsdipJywgJ9ix2KzYqCcsICfYtNi52KjYp9mGJywgJ9ix2YXYttin2YYnLCAn2LTZiNin2YQnLFxyXG4gICAgJ9iw2Ygg2KfZhNmC2LnYr9ipJywgJ9iw2Ygg2KfZhNit2KzYqSddXHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgSXNsYW1pY0kxOG4gZXh0ZW5kcyBOZ2JEYXRlcGlja2VySTE4biB7XHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSB3ZWVrZGF5IHNob3J0IG5hbWUuXHJcbiAgICogQHBhcmFtIG51bWJlciB3ZWVrZGF5IFRoZSB3ZWVrZGF5LlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSB3ZWVrZGF5IHNob3J0IG5hbWUuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0V2Vla2RheVNob3J0TmFtZSh3ZWVrZGF5OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEkxOE5fVkFMVUVTLndlZWtkYXlzW3dlZWtkYXkgLSAxXTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgd2Vla2RheSBzaG9ydCBuYW1lLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgbW9udGggVGhlIG1vbnRoLlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSBtb250aCBzaG9ydCBuYW1lLlxyXG4gICovXHJcbiAgcHVibGljIGdldE1vbnRoU2hvcnROYW1lKG1vbnRoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEkxOE5fVkFMVUVTLm1vbnRoc1ttb250aCAtIDFdO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBtb250aCBmdWxsIG5hbWUuXHJcbiAgICogQHBhcmFtIG51bWJlciBtb250aCBUaGUgbW9udGguXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIG1vbnRoIGZ1bGwgbmFtZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRNb250aEZ1bGxOYW1lKG1vbnRoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0TW9udGhTaG9ydE5hbWUobW9udGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBkYXkgYXJpYSBsYWJlbC5cclxuICAgKiBAcGFyYW0gTmdiRGF0ZVN0cnVjdCBkYXRlIFRoZSBkYXRlLlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSBkYXkgYXJpYSBsYWJlbC5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXREYXlBcmlhTGFiZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7ZGF0ZS5kYXl9LSR7ZGF0ZS5tb250aH0tJHtkYXRlLnllYXJ9YDtcclxuICB9XHJcbn1cclxuIl19