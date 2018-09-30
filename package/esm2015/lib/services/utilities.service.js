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
const functionToken = 'Function:';
/** @type {?} */
const spaceRegex = /\+/g;
/** @type {?} */
const queryStringRegex = /([^&=]+)=?([^&]*)/g;
export class UtilitiesService {
    /**
     * @param {?} bridgeService
     * @param {?} httpRequestsService
     * @param {?} localStorageService
     * @param {?} languageService
     */
    constructor(bridgeService, httpRequestsService, localStorageService, languageService) {
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
    evaluateFunctionOrDefault(functionString, defaultValue) {
        if (functionString.indexOf(functionToken) >= 0) {
            functionString = functionString.replace(functionToken, '');
            /** @type {?} */
            let jsFunctionName;
            /** @type {?} */
            let jsFunctionParameters = null;
            if (functionString.indexOf(',') >= 0) {
                /** @type {?} */
                const functionTokens = functionString.split(',');
                jsFunctionName = functionTokens[0];
                functionTokens.shift();
                jsFunctionParameters = functionTokens;
            }
            else {
                jsFunctionName = functionString;
            }
            /** @type {?} */
            const jsFunction = fieldEvalFunctions[jsFunctionName];
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
    }
    /**
     * \@description Attempts to load a file from local storage.
     * If not found it gets it as a web request.
     * @param {?} key
     * @return {?} any The loaded file.
     */
    loadFile(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let file = null;
            if (this.localStorageService.doesKeyExist(key)) {
                file = this.localStorageService.load(key);
                file.isLocal = true;
            }
            else {
                file = this.httpRequestsService.get(key).toPromise();
            }
            return file;
        });
    }
    /**
     * \@description Recursively merge properties of two objects from right to left.
     * @param {?} object1
     * @param {?} object2
     * @return {?} any The merged object.
     */
    mergeRecursive(object1, object2) {
        for (const item in object2) {
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
    }
    /**
     * \@description Returns the string with its tokens replaced.
     * @param {?} input
     * @param {?} route
     * @param {?} additionalParameters
     * @return {?} string The string with its tokens replaced.
     */
    replaceTokens(input, route, additionalParameters) {
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
    }
    /**
     * \@description Gets the string with its tokens replaced.
     * @param {?} input
     * @param {?} parameters
     * @return {?} string The string with its tokens replaced.
     */
    replaceTokensFromParameters(input, parameters) {
        for (const key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                /** @type {?} */
                const paramValue = parameters[key];
                input = input.replace('{' + key + '}', paramValue);
            }
        }
        return input;
    }
    /**
     * \@description Gets the query string parameters.
     * @return {?} object The query string parameters.
     */
    getQueryStringParameters() {
        /** @type {?} */
        const urlParameters = {};
        /** @type {?} */
        const query = window.location.search.substring(1);
        /** @type {?} */
        let match;
        while (match = queryStringRegex.exec(query)) {
            urlParameters[this.decodeURIComponent(match[1])] = this.decodeURIComponent(match[2]);
        }
        return urlParameters;
    }
    /**
     * \@description Decodes a URI Component.
     * @param {?} input
     * @return {?} string The decoded URI Component.
     */
    decodeURIComponent(input) {
        return decodeURIComponent(input.replace(spaceRegex, ' '));
    }
}
UtilitiesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
UtilitiesService.ctorParameters = () => [
    { type: BridgeService },
    { type: HttpRequestsService },
    { type: LocalStorageService },
    { type: LanguageService }
];
/** @nocollapse */ UtilitiesService.ngInjectableDef = i0.defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.inject(i1.BridgeService), i0.inject(i2.HttpRequestsService), i0.inject(i3.LocalStorageService), i0.inject(i4.LanguageService)); }, token: UtilitiesService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQUlqRCxNQUFNLGFBQWEsR0FBVyxXQUFXLENBQUM7O0FBRzFDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFHekIsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztBQUc5QyxNQUFNOzs7Ozs7O0lBQ0osWUFDVSxlQUNBLHFCQUNBLHFCQUNBO1FBSEEsa0JBQWEsR0FBYixhQUFhO1FBQ2Isd0JBQW1CLEdBQW5CLG1CQUFtQjtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLG9CQUFlLEdBQWYsZUFBZTtLQUNwQjs7Ozs7Ozs7SUFRRSx5QkFBeUIsQ0FBQyxjQUFzQixFQUFFLFlBQWlCO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxjQUFjLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBRTNELElBQUksY0FBYyxDQUE4Qjs7WUFBaEQsSUFBb0Isb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBRWhELEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxD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QkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RjtRQUVELE1BQU0sQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7SUFPZixrQkFBa0IsQ0FBQyxLQUFhO1FBQ3RDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7O1lBeko3RCxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBWnpCLGFBQWE7WUFIYixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICcuL2h0dHAtcmVxdWVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuL2JyaWRnZS5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgbGV0IGZpZWxkRXZhbEZ1bmN0aW9ucztcclxuXHJcbmNvbnN0IGZ1bmN0aW9uVG9rZW46IHN0cmluZyA9ICdGdW5jdGlvbjonO1xyXG5cclxuLy8gcmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXHJcbmNvbnN0IHNwYWNlUmVnZXggPSAvXFwrL2c7XHJcblxyXG4vLyByZWdleCB0byBtYXRjaCBxdWVyeSBzdHJpbmdzXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nUmVnZXggPSAvKFteJj1dKyk9PyhbXiZdKikvZztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXRpZXNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cFJlcXVlc3RzU2VydmljZTogSHR0cFJlcXVlc3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV2YWx1YXRlcyBhIGZ1bnRpb24gZnJvbSBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAqIEFsdGVybmF0aXZlbHkgcmV0dXJucyBhIGRlZmF1bHQgdmFsdWUgaWYgbm90IGZvdW5kLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZnVuY3Rpb25TdHJpbmcgVGhlIGZ1bmN0aW9uIHN0cmluZy5cclxuICAgKiBAcGFyYW0gYW55IGRlZmF1bHRWYWx1ZSBUaGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIGFueSBUaGUgZnVudGlvbiBldmFsdWF0aW9uIHJlc3VsdC5cclxuICAqL1xyXG4gIHB1YmxpYyBldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZ1bmN0aW9uU3RyaW5nOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmIChmdW5jdGlvblN0cmluZy5pbmRleE9mKGZ1bmN0aW9uVG9rZW4pID49IDApIHtcclxuICAgICAgZnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvblN0cmluZy5yZXBsYWNlKGZ1bmN0aW9uVG9rZW4sICcnKTtcclxuXHJcbiAgICAgIGxldCBqc0Z1bmN0aW9uTmFtZSwganNGdW5jdGlvblBhcmFtZXRlcnMgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGZ1bmN0aW9uU3RyaW5nLmluZGV4T2YoJywnKSA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZnVuY3Rpb25Ub2tlbnMgPSBmdW5jdGlvblN0cmluZy5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICBqc0Z1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uVG9rZW5zWzBdO1xyXG5cclxuICAgICAgICBmdW5jdGlvblRva2Vucy5zaGlmdCgpO1xyXG5cclxuICAgICAgICBqc0Z1bmN0aW9uUGFyYW1ldGVycyA9IGZ1bmN0aW9uVG9rZW5zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGpzRnVuY3Rpb25OYW1lID0gZnVuY3Rpb25TdHJpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzRnVuY3Rpb24gPSBmaWVsZEV2YWxGdW5jdGlvbnNbanNGdW5jdGlvbk5hbWVdO1xyXG5cclxuICAgICAgaWYgKGpzRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4ganNGdW5jdGlvbihqc0Z1bmN0aW9uUGFyYW1ldGVycywganNGdW5jdGlvblBhcmFtZXRlcnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEF0dGVtcHRzIHRvIGxvYWQgYSBmaWxlIGZyb20gbG9jYWwgc3RvcmFnZS5cclxuICAgKiBJZiBub3QgZm91bmQgaXQgZ2V0cyBpdCBhcyBhIHdlYiByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuIEl0IGlzIGJvdGggdGhlIHN0b3JhZ2Uga2V5IG9yIHRoZSB3ZWIgdXJsLlxyXG4gICAqIEByZXR1cm4gYW55IFRoZSBsb2FkZWQgZmlsZS5cclxuICAqL1xyXG4gIHB1YmxpYyBhc3luYyBsb2FkRmlsZShrZXkpIHtcclxuICAgIGxldCBmaWxlID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmRvZXNLZXlFeGlzdChrZXkpKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UubG9hZChrZXkpO1xyXG5cclxuICAgICAgZmlsZS5pc0xvY2FsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGtleSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJlY3Vyc2l2ZWx5IG1lcmdlIHByb3BlcnRpZXMgb2YgdHdvIG9iamVjdHMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gICAqIEBwYXJhbSBhbnkgb2JqZWN0MSBUaGUgbGVmdCBvYmplY3QuXHJcbiAgICogQHBhcmFtIGFueSBvYmplY3QyIFRoZSByaWdodCBvYmplY3QuXHJcbiAgICogQHJldHVybiBhbnkgVGhlIG1lcmdlZCBvYmplY3QuXHJcbiAgKi9cclxuICBwdWJsaWMgbWVyZ2VSZWN1cnNpdmUob2JqZWN0MTogYW55LCBvYmplY3QyOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIGluIG9iamVjdDIpIHtcclxuICAgICAgaWYgKG9iamVjdDIuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gcHJvcGVydHkgaW4gZGVzdGluYXRpb24gb2JqZWN0IHNldDsgdXBkYXRlIGl0cyB2YWx1ZS5cclxuICAgICAgICAgIGlmIChvYmplY3QyW2l0ZW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgb2JqZWN0MVtpdGVtXSA9IHRoaXMubWVyZ2VSZWN1cnNpdmUob2JqZWN0MVtpdGVtXSwgb2JqZWN0MltpdGVtXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gb2JqZWN0MltpdGVtXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAvLyBwcm9wZXJ0eSBpbiBkZXN0aW5hdGlvbiBvYmplY3Qgbm90IHNldDsgY3JlYXRlIGl0IGFuZCBzZXQgaXRzIHZhbHVlLlxyXG4gICAgICAgICAgb2JqZWN0MVtpdGVtXSA9IG9iamVjdDJbaXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iamVjdDE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN0cmluZyB3aXRoIGl0cyB0b2tlbnMgcmVwbGFjZWQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAqIEBwYXJhbSBhbnkgcm91dGUgVGhlIHJvdXRlLlxyXG4gICAqIEBwYXJhbSBhbnkgYWRkaXRpb25hbFBhcmFtZXRlcnMgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAqL1xyXG4gIHB1YmxpYyByZXBsYWNlVG9rZW5zKGlucHV0OiBzdHJpbmcsIHJvdXRlOiBhbnksIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCd7bGFuZ3VhZ2VUb2tlbn0nLCB0aGlzLmxhbmd1YWdlU2VydmljZS5zYXZlZExhbmd1YWdlKTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUucGFyYW1zKSB7XHJcbiAgICAgIGlucHV0ID0gdGhpcy5yZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQsIHJvdXRlLnBhcmFtcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgdGhpcy5nZXRRdWVyeVN0cmluZ1BhcmFtZXRlcnMoKSk7XHJcblxyXG4gICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuYmFzZUVuZFBvaW50VXJscyk7XHJcblxyXG4gICAgaWYgKGFkZGl0aW9uYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGlucHV0ID0gdGhpcy5yZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHN0cmluZyB3aXRoIGl0cyB0b2tlbnMgcmVwbGFjZWQuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmcgaW5wdXQgVGhlIHN0cmluZyBpbnB1dC5cclxuICAgICogQHBhcmFtIGFueSBwYXJhbWV0ZXJzIFRoZSBwYXJhbWV0ZXJzLlxyXG4gICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IHBhcmFtZXRlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCd7JyArIGtleSArICd9JywgcGFyYW1WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzLlxyXG4gICAgKiBAcmV0dXJuIG9iamVjdCBUaGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIGdldFF1ZXJ5U3RyaW5nUGFyYW1ldGVycygpOiBvYmplY3Qge1xyXG4gICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcblxyXG4gICAgbGV0IG1hdGNoO1xyXG5cclxuICAgIHdoaWxlIChtYXRjaCA9IHF1ZXJ5U3RyaW5nUmVnZXguZXhlYyhxdWVyeSkpIHtcclxuICAgICAgdXJsUGFyYW1ldGVyc1t0aGlzLmRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsxXSldID0gdGhpcy5kZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBEZWNvZGVzIGEgVVJJIENvbXBvbmVudC5cclxuICAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgZGVjb2RlZCBVUkkgQ29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0LnJlcGxhY2Uoc3BhY2VSZWdleCwgJyAnKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==