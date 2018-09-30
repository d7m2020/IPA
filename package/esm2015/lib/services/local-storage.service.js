/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LocalStorageService {
    constructor() { }
    /**
     * \@description Checks a record exists in the local storage.
     * @param {?} key
     * @return {?} boolean Whether the record exists.
     */
    doesKeyExist(key) {
        return localStorage.getItem(key) != null;
    }
    /**
     * \@description Saves a record in the local storage.
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    save(key, data) {
        data = JSON.stringify(data);
        localStorage.setItem(key, data);
    }
    /**
     * \@description Loads a record from the local storage.
     * @param {?} key
     * @return {?} any data The record data.
     */
    load(key) {
        /** @type {?} */
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }
    /**
     * \@description Loads a record from the local storage if it exists.
     * Alternatively returns a default value if not found.
     * @param {?} key
     * @param {?} defaultValue
     * @return {?} any data The record data.
     */
    loadOrDefault(key, defaultValue) {
        /** @type {?} */
        let value = this.load(key);
        if (!value) {
            value = defaultValue;
        }
        return value;
    }
}
LocalStorageService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LocalStorageService.ctorParameters = () => [];
/** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNO0lBQ0osaUJBQWlCOzs7Ozs7SUFNVixZQUFZLENBQUMsR0FBVztRQUM3QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7Ozs7Ozs7O0lBT3BDLElBQUksQ0FBQyxHQUFXLEVBQUUsSUFBUztRQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU8zQixJQUFJLENBQUMsR0FBVzs7UUFDckIsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBU25CLGFBQWEsQ0FBQyxHQUFXLEVBQUUsWUFBaUI7O1FBQ2pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxHQUFHLFlBQVksQ0FBQztTQUN0QjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7WUE3Q2hCLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3MgYSByZWNvcmQgZXhpc3RzIGluIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIHJlY29yZCBleGlzdHMuXHJcbiAgKi9cclxuICBwdWJsaWMgZG9lc0tleUV4aXN0KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAhPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTYXZlcyBhIHJlY29yZCBpbiB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGtleSBUaGUga2V5LlxyXG4gICAqIEBwYXJhbSBhbnkgZGF0YSBUaGUgcmVjb3JkIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgc2F2ZShrZXk6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSByZWNvcmQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGtleSBUaGUga2V5LlxyXG4gICAqIEByZXR1cm4gYW55IGRhdGEgVGhlIHJlY29yZCBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGxvYWQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIGEgcmVjb3JkIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgaWYgaXQgZXhpc3RzLlxyXG4gICAqIEFsdGVybmF0aXZlbHkgcmV0dXJucyBhIGRlZmF1bHQgdmFsdWUgaWYgbm90IGZvdW5kLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuXHJcbiAgICogQHBhcmFtIGFueSBkZWZhdWx0VmFsdWUgVGhlIGRlZmF1bHQgdmFsdWUuXHJcbiAgICogQHJldHVybiBhbnkgZGF0YSBUaGUgcmVjb3JkIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgbG9hZE9yRGVmYXVsdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IHZhbHVlID0gdGhpcy5sb2FkKGtleSk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==