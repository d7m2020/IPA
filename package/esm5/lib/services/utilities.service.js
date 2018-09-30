/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { LocalStorageService } from './local-storage.service';
import { LanguageService } from './language.service';
import { BridgeService } from './bridge.service';
import * as i0 from "@angular/core";
import * as i1 from "./bridge.service";
import * as i2 from "./http-requests.service";
import * as i3 from "./local-storage.service";
import * as i4 from "./language.service";
/** @type {?} */
var functionToken = 'Function:';
/** @type {?} */
var spaceRegex = /\+/g;
/** @type {?} */
var queryStringRegex = /([^&=]+)=?([^&]*)/g;
var UtilitiesService = /** @class */ (function () {
    function UtilitiesService(bridgeService, httpRequestsService, localStorageService, languageService) {
        this.bridgeService = bridgeService;
        this.httpRequestsService = httpRequestsService;
        this.localStorageService = localStorageService;
        this.languageService = languageService;
    }
    /**
     * \@description Evaluates a funtion from its string representation.
     * Alternatively returns a default value if not found.
     * @param {?} functionString
     * @param {?} defaultValue
     * @return {?} any The funtion evaluation result.
     */
    UtilitiesService.prototype.evaluateFunctionOrDefault = /**
     * \@description Evaluates a funtion from its string representation.
     * Alternatively returns a default value if not found.
     * @param {?} functionString
     * @param {?} defaultValue
     * @return {?} any The funtion evaluation result.
     */
    function (functionString, defaultValue) {
        if (functionString.indexOf(functionToken) >= 0) {
            functionString = functionString.replace(functionToken, '');
            /** @type {?} */
            var jsFunctionName = void 0;
            /** @type {?} */
            var jsFunctionParameters = null;
            if (functionString.indexOf(',') >= 0) {
                /** @type {?} */
                var functionTokens = functionString.split(',');
                jsFunctionName = functionTokens[0];
                functionTokens.shift();
                jsFunctionParameters = functionTokens;
            }
            else {
                jsFunctionName = functionString;
            }
            /** @type {?} */
            var jsFunction = fieldEvalFunctions[jsFunctionName];
            if (jsFunction) {
                return jsFunction(jsFunctionParameters, jsFunctionParameters);
            }
            else {
                return defaultValue;
            }
        }
        else {
            return defaultValue;
        }
    };
    /**
     * \@description Attempts to load a file from local storage.
     * If not found it gets it as a web request.
     * @param {?} key
     * @return {?} any The loaded file.
     */
    UtilitiesService.prototype.loadFile = /**
     * \@description Attempts to load a file from local storage.
     * If not found it gets it as a web request.
     * @param {?} key
     * @return {?} any The loaded file.
     */
    function (key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var file;
            return tslib_1.__generator(this, function (_a) {
                file = null;
                if (this.localStorageService.doesKeyExist(key)) {
                    file = this.localStorageService.load(key);
                    file.isLocal = true;
                }
                else {
                    file = this.httpRequestsService.get(key).toPromise();
                }
                return [2 /*return*/, file];
            });
        });
    };
    /**
     * \@description Recursively merge properties of two objects from right to left.
     * @param {?} object1
     * @param {?} object2
     * @return {?} any The merged object.
     */
    UtilitiesService.prototype.mergeRecursive = /**
     * \@description Recursively merge properties of two objects from right to left.
     * @param {?} object1
     * @param {?} object2
     * @return {?} any The merged object.
     */
    function (object1, object2) {
        for (var item in object2) {
            if (object2.hasOwnProperty(item)) {
                try {
                    // property in destination object set; update its value.
                    if (object2[item].constructor === Object) {
                        object1[item] = this.mergeRecursive(object1[item], object2[item]);
                    }
                    else {
                        object1[item] = object2[item];
                    }
                }
                catch (e) {
                    // property in destination object not set; create it and set its value.
                    object1[item] = object2[item];
                }
            }
        }
        return object1;
    };
    /**
     * \@description Returns the string with its tokens replaced.
     * @param {?} input
     * @param {?} route
     * @param {?} additionalParameters
     * @return {?} string The string with its tokens replaced.
     */
    UtilitiesService.prototype.replaceTokens = /**
     * \@description Returns the string with its tokens replaced.
     * @param {?} input
     * @param {?} route
     * @param {?} additionalParameters
     * @return {?} string The string with its tokens replaced.
     */
    function (input, route, additionalParameters) {
        input = input.replace('{languageToken}', this.languageService.savedLanguage);
        if (route && route.params) {
            input = this.replaceTokensFromParameters(input, route.params.value);
        }
        input = this.replaceTokensFromParameters(input, this.getQueryStringParameters());
        input = this.replaceTokensFromParameters(input, this.bridgeService.configuration.settings.baseEndPointUrls);
        if (additionalParameters) {
            input = this.replaceTokensFromParameters(input, additionalParameters);
        }
        return input;
    };
    /**
     * \@description Gets the string with its tokens replaced.
     * @param {?} input
     * @param {?} parameters
     * @return {?} string The string with its tokens replaced.
     */
    UtilitiesService.prototype.replaceTokensFromParameters = /**
     * \@description Gets the string with its tokens replaced.
     * @param {?} input
     * @param {?} parameters
     * @return {?} string The string with its tokens replaced.
     */
    function (input, parameters) {
        for (var key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                /** @type {?} */
                var paramValue = parameters[key];
                input = input.replace('{' + key + '}', paramValue);
            }
        }
        return input;
    };
    /**
     * \@description Gets the query string parameters.
     * @return {?} object The query string parameters.
     */
    UtilitiesService.prototype.getQueryStringParameters = /**
     * \@description Gets the query string parameters.
     * @return {?} object The query string parameters.
     */
    function () {
        /** @type {?} */
        var urlParameters = {};
        /** @type {?} */
        var query = window.location.search.substring(1);
        /** @type {?} */
        var match;
        while (match = queryStringRegex.exec(query)) {
            urlParameters[this.decodeURIComponent(match[1])] = this.decodeURIComponent(match[2]);
        }
        return urlParameters;
    };
    /**
     * \@description Decodes a URI Component.
     * @param {?} input
     * @return {?} string The decoded URI Component.
     */
    UtilitiesService.prototype.decodeURIComponent = /**
     * \@description Decodes a URI Component.
     * @param {?} input
     * @return {?} string The decoded URI Component.
     */
    function (input) {
        return decodeURIComponent(input.replace(spaceRegex, ' '));
    };
    UtilitiesService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    UtilitiesService.ctorParameters = function () { return [
        { type: BridgeService },
        { type: HttpRequestsService },
        { type: LocalStorageService },
        { type: LanguageService }
    ]; };
    /** @nocollapse */ UtilitiesService.ngInjectableDef = i0.defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.inject(i1.BridgeService), i0.inject(i2.HttpRequestsService), i0.inject(i3.LocalStorageService), i0.inject(i4.LanguageService)); }, token: UtilitiesService, providedIn: "root" });
    return UtilitiesService;
}());
export { UtilitiesService };
if (false) {
    /** @type {?} */
    UtilitiesService.prototype.bridgeService;
    /** @type {?} */
    UtilitiesService.prototype.httpRequestsService;
    /** @type {?} */
    UtilitiesService.prototype.localStorageService;
    /** @type {?} */
    UtilitiesService.prototype.languageService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQUlqRCxJQUFNLGFBQWEsR0FBVyxXQUFXLENBQUM7O0FBRzFDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFHekIsSUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQzs7SUFJNUMsMEJBQ1UsZUFDQSxxQkFDQSxxQkFDQTtRQUhBLGtCQUFhLEdBQWIsYUFBYTtRQUNiLHdCQUFtQixHQUFuQixtQkFBbUI7UUFDbkIsd0JBQW1CLEdBQW5CLG1CQUFtQjtRQUNuQixvQkFBZSxHQUFmLGVBQWU7S0FDcEI7Ozs7Ozs7O0lBUUUsb0RBQXlCOzs7Ozs7O2NBQUMsY0FBc0IsRUFBRSxZQUFpQjtRQUN4RSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztZQUUzRCxJQUFJLGNBQWMsVUFBOEI7O1lBQWhELElBQW9CLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUVoRCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJ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QUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEY7UUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDOzs7Ozs7O0lBT2YsNkNBQWtCOzs7OztjQUFDLEtBQWE7UUFDdEMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztnQkF6SjdELFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBWnpCLGFBQWE7Z0JBSGIsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLGVBQWU7OzsyQkFIeEI7O1NBaUJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RzU2VydmljZSB9IGZyb20gJy4vaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4vYnJpZGdlLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBsZXQgZmllbGRFdmFsRnVuY3Rpb25zO1xyXG5cclxuY29uc3QgZnVuY3Rpb25Ub2tlbjogc3RyaW5nID0gJ0Z1bmN0aW9uOic7XHJcblxyXG4vLyByZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcclxuY29uc3Qgc3BhY2VSZWdleCA9IC9cXCsvZztcclxuXHJcbi8vIHJlZ2V4IHRvIG1hdGNoIHF1ZXJ5IHN0cmluZ3NcclxuY29uc3QgcXVlcnlTdHJpbmdSZWdleCA9IC8oW14mPV0rKT0/KFteJl0qKS9nO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdGllc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwUmVxdWVzdHNTZXJ2aWNlOiBIdHRwUmVxdWVzdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXZhbHVhdGVzIGEgZnVudGlvbiBmcm9tIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICogQWx0ZXJuYXRpdmVseSByZXR1cm5zIGEgZGVmYXVsdCB2YWx1ZSBpZiBub3QgZm91bmQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmdW5jdGlvblN0cmluZyBUaGUgZnVuY3Rpb24gc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBhbnkgZGVmYXVsdFZhbHVlIFRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAqIEByZXR1cm4gYW55IFRoZSBmdW50aW9uIGV2YWx1YXRpb24gcmVzdWx0LlxyXG4gICovXHJcbiAgcHVibGljIGV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZnVuY3Rpb25TdHJpbmc6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKGZ1bmN0aW9uU3RyaW5nLmluZGV4T2YoZnVuY3Rpb25Ub2tlbikgPj0gMCkge1xyXG4gICAgICBmdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uU3RyaW5nLnJlcGxhY2UoZnVuY3Rpb25Ub2tlbiwgJycpO1xyXG5cclxuICAgICAgbGV0IGpzRnVuY3Rpb25OYW1lLCBqc0Z1bmN0aW9uUGFyYW1ldGVycyA9IG51bGw7XHJcblxyXG4gICAgICBpZiAoZnVuY3Rpb25TdHJpbmcuaW5kZXhPZignLCcpID49IDApIHtcclxuICAgICAgICBjb25zdCBmdW5jdGlvblRva2VucyA9IGZ1bmN0aW9uU3RyaW5nLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIGpzRnVuY3Rpb25OYW1lID0gZnVuY3Rpb25Ub2tlbnNbMF07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uVG9rZW5zLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIGpzRnVuY3Rpb25QYXJhbWV0ZXJzID0gZnVuY3Rpb25Ub2tlbnM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAganNGdW5jdGlvbk5hbWUgPSBmdW5jdGlvblN0cmluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNGdW5jdGlvbiA9IGZpZWxkRXZhbEZ1bmN0aW9uc1tqc0Z1bmN0aW9uTmFtZV07XHJcblxyXG4gICAgICBpZiAoanNGdW5jdGlvbikge1xyXG4gICAgICAgIHJldHVybiBqc0Z1bmN0aW9uKGpzRnVuY3Rpb25QYXJhbWV0ZXJzLCBqc0Z1bmN0aW9uUGFyYW1ldGVycyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXR0ZW1wdHMgdG8gbG9hZCBhIGZpbGUgZnJvbSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIElmIG5vdCBmb3VuZCBpdCBnZXRzIGl0IGFzIGEgd2ViIHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS4gSXQgaXMgYm90aCB0aGUgc3RvcmFnZSBrZXkgb3IgdGhlIHdlYiB1cmwuXHJcbiAgICogQHJldHVybiBhbnkgVGhlIGxvYWRlZCBmaWxlLlxyXG4gICovXHJcbiAgcHVibGljIGFzeW5jIGxvYWRGaWxlKGtleSkge1xyXG4gICAgbGV0IGZpbGUgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZG9lc0tleUV4aXN0KGtleSkpIHtcclxuICAgICAgZmlsZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5sb2FkKGtleSk7XHJcblxyXG4gICAgICBmaWxlLmlzTG9jYWwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsZSA9IHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoa2V5KS50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gUmVjdXJzaXZlbHkgbWVyZ2UgcHJvcGVydGllcyBvZiB0d28gb2JqZWN0cyBmcm9tIHJpZ2h0IHRvIGxlZnQuXHJcbiAgICogQHBhcmFtIGFueSBvYmplY3QxIFRoZSBsZWZ0IG9iamVjdC5cclxuICAgKiBAcGFyYW0gYW55IG9iamVjdDIgVGhlIHJpZ2h0IG9iamVjdC5cclxuICAgKiBAcmV0dXJuIGFueSBUaGUgbWVyZ2VkIG9iamVjdC5cclxuICAqL1xyXG4gIHB1YmxpYyBtZXJnZVJlY3Vyc2l2ZShvYmplY3QxOiBhbnksIG9iamVjdDI6IGFueSk6IGFueSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gb2JqZWN0Mikge1xyXG4gICAgICBpZiAob2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShpdGVtKSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBwcm9wZXJ0eSBpbiBkZXN0aW5hdGlvbiBvYmplY3Qgc2V0OyB1cGRhdGUgaXRzIHZhbHVlLlxyXG4gICAgICAgICAgaWYgKG9iamVjdDJbaXRlbV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gdGhpcy5tZXJnZVJlY3Vyc2l2ZShvYmplY3QxW2l0ZW1dLCBvYmplY3QyW2l0ZW1dKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdDFbaXRlbV0gPSBvYmplY3QyW2l0ZW1dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIHByb3BlcnR5IGluIGRlc3RpbmF0aW9uIG9iamVjdCBub3Qgc2V0OyBjcmVhdGUgaXQgYW5kIHNldCBpdHMgdmFsdWUuXHJcbiAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gb2JqZWN0MltpdGVtXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqZWN0MTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGlucHV0IFRoZSBzdHJpbmcgaW5wdXQuXHJcbiAgICogQHBhcmFtIGFueSByb3V0ZSBUaGUgcm91dGUuXHJcbiAgICogQHBhcmFtIGFueSBhZGRpdGlvbmFsUGFyYW1ldGVycyBUaGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSBzdHJpbmcgd2l0aCBpdHMgdG9rZW5zIHJlcGxhY2VkLlxyXG4gICovXHJcbiAgcHVibGljIHJlcGxhY2VUb2tlbnMoaW5wdXQ6IHN0cmluZywgcm91dGU6IGFueSwgYWRkaXRpb25hbFBhcmFtZXRlcnM6IGFueSk6IHN0cmluZyB7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoJ3tsYW5ndWFnZVRva2VufScsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnNhdmVkTGFuZ3VhZ2UpO1xyXG5cclxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5wYXJhbXMpIHtcclxuICAgICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgcm91dGUucGFyYW1zLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCA9IHRoaXMucmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0LCB0aGlzLmdldFF1ZXJ5U3RyaW5nUGFyYW1ldGVycygpKTtcclxuXHJcbiAgICBpbnB1dCA9IHRoaXMucmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0LCB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5iYXNlRW5kUG9pbnRVcmxzKTtcclxuXHJcbiAgICBpZiAoYWRkaXRpb25hbFBhcmFtZXRlcnMpIHtcclxuICAgICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgYWRkaXRpb25hbFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAgKiBAcGFyYW0gYW55IHBhcmFtZXRlcnMgVGhlIHBhcmFtZXRlcnMuXHJcbiAgICAqIEByZXR1cm4gc3RyaW5nIFRoZSBzdHJpbmcgd2l0aCBpdHMgdG9rZW5zIHJlcGxhY2VkLlxyXG4gICovXHJcbiAgcHJpdmF0ZSByZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQ6IHN0cmluZywgcGFyYW1ldGVyczogYW55KTogc3RyaW5nIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtZXRlcnMpIHtcclxuICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbVZhbHVlID0gcGFyYW1ldGVyc1trZXldO1xyXG5cclxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoJ3snICsga2V5ICsgJ30nLCBwYXJhbVZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbiAgICAqIEByZXR1cm4gb2JqZWN0IFRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycy5cclxuICAqL1xyXG4gIHByaXZhdGUgZ2V0UXVlcnlTdHJpbmdQYXJhbWV0ZXJzKCk6IG9iamVjdCB7XHJcbiAgICBjb25zdCB1cmxQYXJhbWV0ZXJzID0ge307XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcclxuXHJcbiAgICBsZXQgbWF0Y2g7XHJcblxyXG4gICAgd2hpbGUgKG1hdGNoID0gcXVlcnlTdHJpbmdSZWdleC5leGVjKHF1ZXJ5KSkge1xyXG4gICAgICB1cmxQYXJhbWV0ZXJzW3RoaXMuZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKV0gPSB0aGlzLmRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybFBhcmFtZXRlcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIERlY29kZXMgYSBVUkkgQ29tcG9uZW50LlxyXG4gICAgKiBAcGFyYW0gc3RyaW5nIGlucHV0IFRoZSBzdHJpbmcgaW5wdXQuXHJcbiAgICAqIEByZXR1cm4gc3RyaW5nIFRoZSBkZWNvZGVkIFVSSSBDb21wb25lbnQuXHJcbiAgKi9cclxuICBwcml2YXRlIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQucmVwbGFjZShzcGFjZVJlZ2V4LCAnICcpKTtcclxuICB9XHJcbn1cclxuIl19