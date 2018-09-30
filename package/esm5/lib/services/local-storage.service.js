/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    /**
     * \@description Checks a record exists in the local storage.
     * @param {?} key
     * @return {?} boolean Whether the record exists.
     */
    LocalStorageService.prototype.doesKeyExist = /**
     * \@description Checks a record exists in the local storage.
     * @param {?} key
     * @return {?} boolean Whether the record exists.
     */
    function (key) {
        return localStorage.getItem(key) != null;
    };
    /**
     * \@description Saves a record in the local storage.
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    LocalStorageService.prototype.save = /**
     * \@description Saves a record in the local storage.
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        data = JSON.stringify(data);
        localStorage.setItem(key, data);
    };
    /**
     * \@description Loads a record from the local storage.
     * @param {?} key
     * @return {?} any data The record data.
     */
    LocalStorageService.prototype.load = /**
     * \@description Loads a record from the local storage.
     * @param {?} key
     * @return {?} any data The record data.
     */
    function (key) {
        /** @type {?} */
        var data = localStorage.getItem(key);
        return JSON.parse(data);
    };
    /**
     * \@description Loads a record from the local storage if it exists.
     * Alternatively returns a default value if not found.
     * @param {?} key
     * @param {?} defaultValue
     * @return {?} any data The record data.
     */
    LocalStorageService.prototype.loadOrDefault = /**
     * \@description Loads a record from the local storage if it exists.
     * Alternatively returns a default value if not found.
     * @param {?} key
     * @param {?} defaultValue
     * @return {?} any data The record data.
     */
    function (key, defaultValue) {
        /** @type {?} */
        var value = this.load(key);
        if (!value) {
            value = defaultValue;
        }
        return value;
    };
    LocalStorageService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LocalStorageService.ctorParameters = function () { return []; };
    /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
    return LocalStorageService;
}());
export { LocalStorageService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFJekM7S0FBaUI7Ozs7OztJQU1WLDBDQUFZOzs7OztjQUFDLEdBQVc7UUFDN0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDOzs7Ozs7OztJQU9wQyxrQ0FBSTs7Ozs7O2NBQUMsR0FBVyxFQUFFLElBQVM7UUFDaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7SUFPM0Isa0NBQUk7Ozs7O2NBQUMsR0FBVzs7UUFDckIsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBU25CLDJDQUFhOzs7Ozs7O2NBQUMsR0FBVyxFQUFFLFlBQWlCOztRQUNqRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssR0FBRyxZQUFZLENBQUM7U0FDdEI7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDOzs7Z0JBN0NoQixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs4QkFGbEM7O1NBR2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGEgcmVjb3JkIGV4aXN0cyBpbiB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGtleSBUaGUga2V5LlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSByZWNvcmQgZXhpc3RzLlxyXG4gICovXHJcbiAgcHVibGljIGRvZXNLZXlFeGlzdChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgYSByZWNvcmQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcGFyYW0gYW55IGRhdGEgVGhlIHJlY29yZCBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIHNhdmUoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIGEgcmVjb3JkIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcmV0dXJuIGFueSBkYXRhIFRoZSByZWNvcmQgZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBsb2FkKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBMb2FkcyBhIHJlY29yZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGlmIGl0IGV4aXN0cy5cclxuICAgKiBBbHRlcm5hdGl2ZWx5IHJldHVybnMgYSBkZWZhdWx0IHZhbHVlIGlmIG5vdCBmb3VuZC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGtleSBUaGUga2V5LlxyXG4gICAqIEBwYXJhbSBhbnkgZGVmYXVsdFZhbHVlIFRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAqIEByZXR1cm4gYW55IGRhdGEgVGhlIHJlY29yZCBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGxvYWRPckRlZmF1bHQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogYW55IHtcclxuICAgIGxldCB2YWx1ZSA9IHRoaXMubG9hZChrZXkpO1xyXG5cclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=