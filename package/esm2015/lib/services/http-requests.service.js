/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpRequestsService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * \@description Executes a get request and returns the response.
     * @param {?} endpointUrl
     * @return {?} Observable<any> The response.
     */
    get(endpointUrl) {
        /** @type {?} */
        const httpHeaders = new HttpHeaders();
        return this.httpClient.get(endpointUrl, { headers: httpHeaders });
    }
    /**
     * \@description Executes a post request and returns the response.
     * @param {?} endpointUrl
     * @param {?} request
     * @return {?} Observable<any> The response.
     */
    post(endpointUrl, request) {
        /** @type {?} */
        const httpHeaders = new HttpHeaders();
        return this.httpClient.post(endpointUrl, request, { headers: httpHeaders });
    }
    /**
     * \@description Executes a put request and returns the response.
     * @param {?} endpointUrl
     * @param {?} request
     * @return {?} Observable<any> The response.
     */
    put(endpointUrl, request) {
        /** @type {?} */
        const httpHeaders = new HttpHeaders();
        return this.httpClient.put(endpointUrl, request, { headers: httpHeaders });
    }
}
HttpRequestsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
HttpRequestsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpRequestsService.ngInjectableDef = i0.defineInjectable({ factory: function HttpRequestsService_Factory() { return new HttpRequestsService(i0.inject(i1.HttpClient)); }, token: HttpRequestsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HttpRequestsService.prototype.httpClient;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUkvRCxNQUFNOzs7O0lBQ0osWUFBc0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtLQUFLOzs7Ozs7SUFNMUMsR0FBRyxDQUFDLFdBQW1COztRQUM1QixNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBTSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7SUFRbEUsSUFBSSxDQUFDLFdBQW1CLEVBQUUsT0FBWTs7UUFDM0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUV0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQU0sV0FBVyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7OztJQVE1RSxHQUFHLENBQUMsV0FBbUIsRUFBRSxPQUFZOztRQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBTSxXQUFXLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7Ozs7WUFqQ25GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBnZXQgcmVxdWVzdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBlbmRwb2ludFVybCBUaGUgZW5kcG9pbnQgVXJsLlxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxhbnk+IFRoZSByZXNwb25zZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXQoZW5kcG9pbnRVcmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PGFueT4oZW5kcG9pbnRVcmwsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgcG9zdCByZXF1ZXN0IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50VXJsIFRoZSBlbmRwb2ludCBVcmwuXHJcbiAgICogQHBhcmFtIGFueSByZXF1ZXN0IFRoZSByZXF1ZXN0IHBheWxvYWQuXHJcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGFueT4gVGhlIHJlc3BvbnNlLlxyXG4gICovXHJcbiAgcHVibGljIHBvc3QoZW5kcG9pbnRVcmw6IHN0cmluZywgcmVxdWVzdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4oZW5kcG9pbnRVcmwsIHJlcXVlc3QsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgcHV0IHJlcXVlc3QgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnRVcmwgVGhlIGVuZHBvaW50IFVybC5cclxuICAgKiBAcGFyYW0gYW55IHJlcXVlc3QgVGhlIHJlcXVlc3QgcGF5bG9hZC5cclxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8YW55PiBUaGUgcmVzcG9uc2UuXHJcbiAgKi9cclxuICBwdWJsaWMgcHV0KGVuZHBvaW50VXJsOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0PGFueT4oZW5kcG9pbnRVcmwsIHJlcXVlc3QsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==