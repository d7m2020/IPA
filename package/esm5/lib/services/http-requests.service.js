/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var HttpRequestsService = /** @class */ (function () {
    function HttpRequestsService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * \@description Executes a get request and returns the response.
     * @param {?} endpointUrl
     * @return {?} Observable<any> The response.
     */
    HttpRequestsService.prototype.get = /**
     * \@description Executes a get request and returns the response.
     * @param {?} endpointUrl
     * @return {?} Observable<any> The response.
     */
    function (endpointUrl) {
        /** @type {?} */
        var httpHeaders = new HttpHeaders();
        return this.httpClient.get(endpointUrl, { headers: httpHeaders });
    };
    /**
     * \@description Executes a post request and returns the response.
     * @param {?} endpointUrl
     * @param {?} request
     * @return {?} Observable<any> The response.
     */
    HttpRequestsService.prototype.post = /**
     * \@description Executes a post request and returns the response.
     * @param {?} endpointUrl
     * @param {?} request
     * @return {?} Observable<any> The response.
     */
    function (endpointUrl, request) {
        /** @type {?} */
        var httpHeaders = new HttpHeaders();
        return this.httpClient.post(endpointUrl, request, { headers: httpHeaders });
    };
    /**
     * \@description Executes a put request and returns the response.
     * @param {?} endpointUrl
     * @param {?} request
     * @return {?} Observable<any> The response.
     */
    HttpRequestsService.prototype.put = /**
     * \@description Executes a put request and returns the response.
     * @param {?} endpointUrl
     * @param {?} request
     * @return {?} Observable<any> The response.
     */
    function (endpointUrl, request) {
        /** @type {?} */
        var httpHeaders = new HttpHeaders();
        return this.httpClient.put(endpointUrl, request, { headers: httpHeaders });
    };
    HttpRequestsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    HttpRequestsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpRequestsService.ngInjectableDef = i0.defineInjectable({ factory: function HttpRequestsService_Factory() { return new HttpRequestsService(i0.inject(i1.HttpClient)); }, token: HttpRequestsService, providedIn: "root" });
    return HttpRequestsService;
}());
export { HttpRequestsService };
if (false) {
    /** @type {?} */
    HttpRequestsService.prototype.httpClient;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7SUFLN0QsNkJBQXNCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7S0FBSzs7Ozs7O0lBTTFDLGlDQUFHOzs7OztjQUFDLFdBQW1COztRQUM1QixJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBTSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7SUFRbEUsa0NBQUk7Ozs7OztjQUFDLFdBQW1CLEVBQUUsT0FBWTs7UUFDM0MsSUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQU0sV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7OztJQVE1RSxpQ0FBRzs7Ozs7O2NBQUMsV0FBbUIsRUFBRSxPQUFZOztRQUMxQyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7OztnQkFqQ25GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLFVBQVU7Ozs4QkFEbkI7O1NBS2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0c1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeGVjdXRlcyBhIGdldCByZXF1ZXN0IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50VXJsIFRoZSBlbmRwb2ludCBVcmwuXHJcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGFueT4gVGhlIHJlc3BvbnNlLlxyXG4gICovXHJcbiAgcHVibGljIGdldChlbmRwb2ludFVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8YW55PihlbmRwb2ludFVybCwgeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBwb3N0IHJlcXVlc3QgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnRVcmwgVGhlIGVuZHBvaW50IFVybC5cclxuICAgKiBAcGFyYW0gYW55IHJlcXVlc3QgVGhlIHJlcXVlc3QgcGF5bG9hZC5cclxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8YW55PiBUaGUgcmVzcG9uc2UuXHJcbiAgKi9cclxuICBwdWJsaWMgcG9zdChlbmRwb2ludFVybDogc3RyaW5nLCByZXF1ZXN0OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8YW55PihlbmRwb2ludFVybCwgcmVxdWVzdCwgeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBwdXQgcmVxdWVzdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBlbmRwb2ludFVybCBUaGUgZW5kcG9pbnQgVXJsLlxyXG4gICAqIEBwYXJhbSBhbnkgcmVxdWVzdCBUaGUgcmVxdWVzdCBwYXlsb2FkLlxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxhbnk+IFRoZSByZXNwb25zZS5cclxuICAqL1xyXG4gIHB1YmxpYyBwdXQoZW5kcG9pbnRVcmw6IHN0cmluZywgcmVxdWVzdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQ8YW55PihlbmRwb2ludFVybCwgcmVxdWVzdCwgeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KTtcclxuICB9XHJcbn1cclxuIl19