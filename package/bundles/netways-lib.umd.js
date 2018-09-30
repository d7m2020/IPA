(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ng-bootstrap/ng-bootstrap'), require('file-saver'), require('xlsx'), require('@angular/common/http'), require('@ngx-translate/core'), require('@angular/material'), require('@angular/forms'), require('@angular/router'), require('@angular/common'), require('primeng/fileupload'), require('ng2-img-cropper'), require('@agm/core'), require('primeng/inputmask'), require('sweetalert2'), require('ng-recaptcha/recaptcha/recaptcha-common.module'), require('ng-recaptcha/recaptcha/recaptcha.module'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@angular/flex-layout'), require('@ngx-translate/http-loader'), require('primeng/inputtext'), require('primeng/calendar'), require('primeng/checkbox'), require('primeng/radiobutton'), require('primeng/dropdown'), require('primeng/multiselect'), require('primeng/chips'), require('primeng/editor'), require('primeng/rating'), require('@agm/core/core.module')) :
    typeof define === 'function' && define.amd ? define('netways-lib', ['exports', '@angular/core', '@ng-bootstrap/ng-bootstrap', 'file-saver', 'xlsx', '@angular/common/http', '@ngx-translate/core', '@angular/material', '@angular/forms', '@angular/router', '@angular/common', 'primeng/fileupload', 'ng2-img-cropper', '@agm/core', 'primeng/inputmask', 'sweetalert2', 'ng-recaptcha/recaptcha/recaptcha-common.module', 'ng-recaptcha/recaptcha/recaptcha.module', '@angular/platform-browser', '@angular/platform-browser/animations', '@angular/flex-layout', '@ngx-translate/http-loader', 'primeng/inputtext', 'primeng/calendar', 'primeng/checkbox', 'primeng/radiobutton', 'primeng/dropdown', 'primeng/multiselect', 'primeng/chips', 'primeng/editor', 'primeng/rating', '@agm/core/core.module'], factory) :
    (factory((global['netways-lib'] = {}),global.ng.core,null,null,null,global.ng.common.http,null,global.ng.material,global.ng.forms,global.ng.router,global.ng.common,null,null,null,null,null,null,null,global.ng.platformBrowser,global.ng.platformBrowser.animations,global.ng['flex-layout'],null,null,null,null,null,null,null,null,null,null,null));
}(this, (function (exports,i0,ngBootstrap,FileSaver,XLSX,i1,i1$1,material,forms,router,common,fileupload,ng2ImgCropper,core,inputmask,swal,recaptchaCommon_module,recaptcha_module,platformBrowser,animations,flexLayout,httpLoader,inputtext,calendar,checkbox,radiobutton,dropdown,multiselect,chips,editor,rating,core_module) { 'use strict';

    swal = swal && swal.hasOwnProperty('default') ? swal['default'] : swal;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BridgeService = (function () {
        function BridgeService() {
        }
        BridgeService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        BridgeService.ctorParameters = function () { return []; };
        /** @nocollapse */ BridgeService.ngInjectableDef = i0.defineInjectable({ factory: function BridgeService_Factory() { return new BridgeService(); }, token: BridgeService, providedIn: "root" });
        return BridgeService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var I18N_VALUES = {
        weekdays: ['إث', 'ثل', 'أر', 'خم', 'جم', 'سب', 'أح'],
        months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
            'ذو القعدة', 'ذو الحجة']
    };
    var IslamicI18n = (function (_super) {
        __extends(IslamicI18n, _super);
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */ IslamicI18n.ngInjectableDef = i0.defineInjectable({ factory: function IslamicI18n_Factory() { return new IslamicI18n(); }, token: IslamicI18n, providedIn: "root" });
        return IslamicI18n;
    }(ngBootstrap.NgbDatepickerI18n));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var excelExtension = '.xlsx';
    /** @type {?} */
    var pdfType = 'application/pdf';
    /** @type {?} */
    var pdfExtension = '.pdf';
    var ExportService = (function () {
        function ExportService() {
        }
        /**
         * \@description Exports a json object as an excel file.
         * @param {?} json
         * @param {?} fileName
         * @param {?=} rtl
         * @param {?=} skipHeader
         * @return {?}
         */
        ExportService.prototype.exportAsExcel = /**
         * \@description Exports a json object as an excel file.
         * @param {?} json
         * @param {?} fileName
         * @param {?=} rtl
         * @param {?=} skipHeader
         * @return {?}
         */
            function (json, fileName, rtl, skipHeader) {
                if (rtl === void 0) {
                    rtl = true;
                }
                if (skipHeader === void 0) {
                    skipHeader = false;
                }
                /** @type {?} */
                var worksheet = XLSX.utils.json_to_sheet(json, { skipHeader: skipHeader });
                /** @type {?} */
                var workbook = XLSX.utils.book_new();
                if (!workbook.Workbook) {
                    workbook.Workbook = {};
                }
                if (!workbook.Workbook.Views) {
                    workbook.Workbook.Views = [];
                }
                if (!workbook.Workbook.Views[0]) {
                    workbook.Workbook.Views[0] = {};
                }
                workbook.Workbook.Views[0].RTL = rtl;
                // generate workbook and add the worksheet
                XLSX.utils.book_append_sheet(workbook, worksheet, 'data');
                // save to file *
                XLSX.writeFile(workbook, fileName + '_' + new Date().getTime() + excelExtension);
            };
        /**
         * \@description Exports an html string as pdf.
         * @param {?} html
         * @param {?} fileName
         * @param {?=} size
         * @param {?=} margins
         * @return {?}
         */
        ExportService.prototype.exportAsPdf = /**
         * \@description Exports an html string as pdf.
         * @param {?} html
         * @param {?} fileName
         * @param {?=} size
         * @param {?=} margins
         * @return {?}
         */
            function (html, fileName, size, margins) {
                var _this = this;
                if (size === void 0) {
                    size = 'A4';
                }
                if (margins === void 0) {
                    margins = [0, 0];
                }
                if (html) {
                    html2canvas(html).then(function (canvas) {
                        /** @type {?} */
                        var dataUri = canvas.toDataURL();
                        /** @type {?} */
                        var docDefinition = {
                            pageSize: size,
                            pageMargins: margins,
                            content: [
                                {
                                    image: dataUri
                                }
                            ]
                        };
                        pdfMake.createPdf(docDefinition).getBlob(function (file) {
                            _this.promptFileSave(file, pdfType, fileName, pdfExtension);
                        });
                    });
                }
            };
        /**
         * \@description Exports a file as pdf.
         * @param {?} buffer
         * @param {?} fileType
         * @param {?} fileName
         * @param {?} fileExtension
         * @return {?}
         */
        ExportService.prototype.promptFileSave = /**
         * \@description Exports a file as pdf.
         * @param {?} buffer
         * @param {?} fileType
         * @param {?} fileName
         * @param {?} fileExtension
         * @return {?}
         */
            function (buffer, fileType, fileName, fileExtension) {
                /** @type {?} */
                var data = new Blob([buffer], {
                    type: fileType
                });
                FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + fileExtension);
            };
        ExportService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        ExportService.ctorParameters = function () { return []; };
        /** @nocollapse */ ExportService.ngInjectableDef = i0.defineInjectable({ factory: function ExportService_Factory() { return new ExportService(); }, token: ExportService, providedIn: "root" });
        return ExportService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HttpRequestsService = (function () {
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
                var httpHeaders = new i1.HttpHeaders();
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
                var httpHeaders = new i1.HttpHeaders();
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
                var httpHeaders = new i1.HttpHeaders();
                return this.httpClient.put(endpointUrl, request, { headers: httpHeaders });
            };
        HttpRequestsService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        HttpRequestsService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ HttpRequestsService.ngInjectableDef = i0.defineInjectable({ factory: function HttpRequestsService_Factory() { return new HttpRequestsService(i0.inject(i1.HttpClient)); }, token: HttpRequestsService, providedIn: "root" });
        return HttpRequestsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LocalStorageService = (function () {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        LocalStorageService.ctorParameters = function () { return []; };
        /** @nocollapse */ LocalStorageService.ngInjectableDef = i0.defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
        return LocalStorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LanguageService = (function () {
        function LanguageService(translate, localStorage) {
            var _this = this;
            this.translate = translate;
            this.localStorage = localStorage;
            /**
             * \@property The saved language.
             */
            this.savedLanguage = this.localStorage.loadOrDefault('Language', 'en');
            this.translate.onLangChange.subscribe(function (event) {
                _this.setLanguage(event.lang);
                _this.translations = event.translations;
            });
        }
        /**
         * \@description Sets the language.
         * @param {?} language
         * @return {?}
         */
        LanguageService.prototype.setLanguage = /**
         * \@description Sets the language.
         * @param {?} language
         * @return {?}
         */
            function (language) {
                this.translate.use(language);
                this.savedLanguage = language;
                this.localStorage.save('Language', language);
            };
        /**
         * \@description Gets the language.
         * @return {?}
         */
        LanguageService.prototype.getLanguage = /**
         * \@description Gets the language.
         * @return {?}
         */
            function () {
                return this.localStorage.loadOrDefault('Language', 'en');
            };
        LanguageService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        LanguageService.ctorParameters = function () {
            return [
                { type: i1$1.TranslateService },
                { type: LocalStorageService }
            ];
        };
        /** @nocollapse */ LanguageService.ngInjectableDef = i0.defineInjectable({ factory: function LanguageService_Factory() { return new LanguageService(i0.inject(i1$1.TranslateService), i0.inject(LocalStorageService)); }, token: LanguageService, providedIn: "root" });
        return LanguageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var functionToken = 'Function:';
    /** @type {?} */
    var spaceRegex = /\+/g;
    /** @type {?} */
    var queryStringRegex = /([^&=]+)=?([^&]*)/g;
    var UtilitiesService = (function () {
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
                return __awaiter(this, void 0, void 0, function () {
                    var file;
                    return __generator(this, function (_a) {
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] },
        ];
        /** @nocollapse */
        UtilitiesService.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: HttpRequestsService },
                { type: LocalStorageService },
                { type: LanguageService }
            ];
        };
        /** @nocollapse */ UtilitiesService.ngInjectableDef = i0.defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(i0.inject(BridgeService), i0.inject(HttpRequestsService), i0.inject(LocalStorageService), i0.inject(LanguageService)); }, token: UtilitiesService, providedIn: "root" });
        return UtilitiesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AllFields = (function () {
        function AllFields() {
        }
        return AllFields;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Configuration = (function () {
        function Configuration() {
            this.isLocal = false;
        }
        return Configuration;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DefaultLocation = (function () {
        function DefaultLocation() {
        }
        return DefaultLocation;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Endpoints = (function () {
        function Endpoints() {
        }
        return Endpoints;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormModes = (function () {
        function FormModes() {
        }
        FormModes.New = 'New';
        FormModes.Display = 'Display';
        FormModes.Edit = 'Edit';
        return FormModes;
    }());
    var ValidationSummaryModes = (function () {
        function ValidationSummaryModes() {
        }
        ValidationSummaryModes.None = 'None';
        ValidationSummaryModes.Alert = 'Alert';
        ValidationSummaryModes.List = 'List';
        return ValidationSummaryModes;
    }());
    var SectionModes = (function () {
        function SectionModes() {
        }
        SectionModes.None = 'None';
        SectionModes.Tabs = 'Tabs';
        SectionModes.NextPrevious = 'NextPrevious';
        return SectionModes;
    }());
    var PostModes = (function () {
        function PostModes() {
        }
        PostModes.FormData = 'FormData';
        PostModes.FormBody = 'FormBody';
        return PostModes;
    }());
    var SwalTypes = (function () {
        function SwalTypes() {
        }
        SwalTypes.Warning = 'warning';
        SwalTypes.Error = 'error';
        SwalTypes.Success = 'success';
        SwalTypes.Info = 'info';
        SwalTypes.Question = 'question';
        return SwalTypes;
    }());
    var FieldTypes = (function () {
        function FieldTypes() {
        }
        FieldTypes.Info = 'info';
        FieldTypes.Text = 'text';
        FieldTypes.DateTime = 'datetime';
        FieldTypes.DateTimeHijri = 'datetimehijri';
        FieldTypes.RadioButton = 'radiobutton';
        FieldTypes.Select = 'select';
        FieldTypes.Password = 'password';
        FieldTypes.Number = 'number';
        FieldTypes.MultiSelect = 'multiselect';
        FieldTypes.Checkbox = 'checkbox';
        FieldTypes.FileUpload = 'fileupload';
        FieldTypes.Chips = 'chips';
        FieldTypes.Editor = 'editor';
        FieldTypes.Recaptcha = 'recaptcha';
        FieldTypes.Time = 'time';
        FieldTypes.Location = 'location';
        FieldTypes.ImageCropper = 'imagecropper';
        FieldTypes.Rating = 'rating';
        FieldTypes.MasterDetail = 'masterdetail';
        return FieldTypes;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Field = (function () {
        function Field() {
        }
        return Field;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FieldData = (function () {
        function FieldData() {
        }
        return FieldData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FieldValidation = (function () {
        function FieldValidation() {
        }
        return FieldValidation;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputError = (function () {
        function InputError(type, message) {
            this.type = type;
            this.message = message;
        }
        return InputError;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Marker = (function () {
        function Marker(latitude, longitude, draggable, infoHtml) {
            this.latitude = latitude;
            this.longitude = longitude;
            this.draggable = draggable;
            this.infoHtml = infoHtml;
        }
        return Marker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MarkerSettings = (function () {
        function MarkerSettings() {
        }
        return MarkerSettings;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MarkerSettingsDefault = (function () {
        function MarkerSettingsDefault() {
        }
        return MarkerSettingsDefault;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MasterDetailDetails = (function () {
        function MasterDetailDetails() {
        }
        return MasterDetailDetails;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Notifications = (function () {
        function Notifications() {
        }
        return Notifications;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Section = (function () {
        function Section(id, name, legend, isActive) {
            this.id = id;
            this.name = name;
            this.legend = legend;
            this.isActive = isActive;
        }
        return Section;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Settings = (function () {
        function Settings() {
        }
        return Settings;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ResponseEventArgs = (function () {
        function ResponseEventArgs(isSuccess, response, payload) {
            this.isSuccess = isSuccess;
            this.response = response;
            this.payload = payload;
        }
        return ResponseEventArgs;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var CLOCK_TYPE = {
        HOURS: 1,
        MINUTES: 2,
    };
    CLOCK_TYPE[CLOCK_TYPE.HOURS] = 'HOURS';
    CLOCK_TYPE[CLOCK_TYPE.MINUTES] = 'MINUTES';
    var WClockComponent = (function () {
        function WClockComponent() {
            this.userTimeChange = new i0.EventEmitter();
            this.viewChange = new i0.EventEmitter();
            this.steps = new Array();
        }
        /**
         * @return {?}
         */
        WClockComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.setupUI();
            };
        /**
         * @return {?}
         */
        WClockComponent.prototype.setupUI = /**
         * @return {?}
         */
            function () {
                this.steps = new Array();
                switch (this.currentView) {
                    case CLOCK_TYPE.HOURS:
                        for (var i = 1; i <= this.userTime.format; i++) {
                            this.steps.push(i);
                            this.selectedTimePart = this.userTime.hour || 0;
                            if (this.selectedTimePart > this.userTime.format) {
                                this.selectedTimePart -= this.userTime.format;
                            }
                        }
                        break;
                    case CLOCK_TYPE.MINUTES:
                        for (var i = 5; i <= 55; i += 5) {
                            this.steps.push(i);
                        }
                        this.steps.push(0);
                        this.selectedTimePart = this.userTime.minute || 0;
                        break;
                }
            };
        /**
         * @return {?}
         */
        WClockComponent.prototype.getPointerStyle = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var divider = 1;
                switch (this.currentView) {
                    case CLOCK_TYPE.HOURS:
                        divider = this.userTime.format;
                        break;
                    case CLOCK_TYPE.MINUTES:
                        divider = 60;
                        break;
                }
                /** @type {?} */
                var degrees = 0;
                if (this.currentView === CLOCK_TYPE.HOURS) {
                    degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
                }
                else {
                    degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
                }
                /** @type {?} */
                var style = {
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    'transform': 'rotate(' + degrees + 'deg)'
                };
                return style;
            };
        /**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        WClockComponent.prototype.getTimeValueClass = /**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
            function (step, index) {
                if (this.currentView === CLOCK_TYPE.HOURS) {
                    this.STEP_DEG = 360 / this.userTime.format;
                }
                else {
                    this.STEP_DEG = 360 / 12;
                }
                /** @type {?} */
                var classes = 'w-clock-step w-clock-deg' + (this.STEP_DEG * (index + 1));
                if (this.selectedTimePart === step) {
                    classes += ' mat-primary';
                }
                return classes;
            };
        /**
         * @param {?} step
         * @return {?}
         */
        WClockComponent.prototype.changeTimeValue = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                if (this.currentView === CLOCK_TYPE.HOURS) {
                    this.userTime.hour = step;
                    // auto switch to minutes
                    this.viewChange.emit(CLOCK_TYPE.MINUTES);
                }
                else {
                    this.userTime.minute = step;
                    // auto switch to hours
                    this.viewChange.emit(CLOCK_TYPE.HOURS);
                }
                this.userTimeChange.emit(this.userTime);
            };
        WClockComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-clock',
                        styles: [".w-clock-wrapper{height:100%;padding:0 24px}.w-clock-wrapper .w-clock{width:200px;height:200px;border-radius:50%;cursor:pointer;padding:24px;background:#ededed}.w-clock-wrapper .w-clock .w-clock-container{width:100%;height:100%;position:relative;display:block}.w-clock-wrapper .w-clock .w-clock-center{height:6px;width:6px;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:50%}.w-clock-wrapper .w-clock .w-pointer{box-shadow:none;width:1px;height:50%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;padding:0;-webkit-transform-origin:top center;transform-origin:top center;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;z-index:0;pointer-events:none}.w-clock-wrapper .w-clock .w-clock-step{display:block;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.w-clock-wrapper .w-clock .w-clock-step .mat-mini-fab{box-shadow:none;background-color:transparent}.w-clock-wrapper .w-clock .w-clock-selected{position:absolute;bottom:-19px;left:-19px;min-width:0;min-height:0;pointer-events:none;box-shadow:none;cursor:none}.w-clock-deg0{top:0;left:50%}.w-clock-deg15{top:1.70370869%;left:62.94095226%}.w-clock-deg30{top:6.69872981%;left:75%}.w-clock-deg45{top:14.64466094%;left:85.35533905%}.w-clock-deg60{top:25%;left:93.30127019%}.w-clock-deg75{top:37.05904774%;left:98.29629131%}.w-clock-deg90{top:50%;left:100%}.w-clock-deg105{top:62.94095226%;left:98.29629131%}.w-clock-deg120{top:75%;left:93.30127019%}.w-clock-deg135{top:85.35533906%;left:85.35533906%}.w-clock-deg150{top:93.30127019%;left:75%}.w-clock-deg165{top:98.29629131%;left:62.94095226%}.w-clock-deg180{top:100%;left:50%}.w-clock-deg195{top:98.29629131%;left:37.05904774%}.w-clock-deg210{top:93.30127019%;left:25%}.w-clock-deg225{top:85.35533906%;left:14.64466094%}.w-clock-deg240{top:75%;left:6.69872981%}.w-clock-deg255{top:62.94095226%;left:1.703708686%}.w-clock-deg270{top:50%;left:0}.w-clock-deg285{top:37.05904774%;left:1.703708686%}.w-clock-deg300{top:25%;left:6.69872981%}.w-clock-deg315{top:14.64466094%;left:14.64466094%}.w-clock-deg330{top:6.69872981%;left:25%}.w-clock-deg345{top:1.703708686%;left:37.05904774%}.w-clock-deg360{top:0;left:50%}"],
                        template: "<div fxLayout=\"row\"\n     fxLayoutAlign=\"center center\"\n     class=\"w-clock-wrapper\">\n  <div class=\"w-clock\">\n    <div class=\"w-clock-container\">\n\n      <!-- Clock center -->\n      <button mat-mini-fab\n              [color]=\"color\"\n              class=\"w-clock-center\"></button>\n\n      <!-- Clock hand -->\n      <mat-toolbar [ngStyle]=\"getPointerStyle()\"\n                   [color]=\"color\"\n                   class=\"w-pointer\">\n        <button mat-mini-fab\n                [color]=\"color\"\n                class=\"w-clock-selected\"></button>\n      </mat-toolbar>\n\n      <!-- Hour / Minute number faces -->\n      <div *ngFor=\"let step of steps; let i = index\"\n           [class]=\"getTimeValueClass(step, i)\">\n        <button mat-mini-fab\n                [color]=\"selectedTimePart === step ? color : ''\"\n                (click)=\"changeTimeValue(step)\">\n          {{ step }}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"
                    },] },
        ];
        WClockComponent.propDecorators = {
            userTime: [{ type: i0.Input }],
            userTimeChange: [{ type: i0.Output }],
            currentView: [{ type: i0.Input }],
            viewChange: [{ type: i0.Output }],
            color: [{ type: i0.Input }]
        };
        return WClockComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WTimeDialogComponent = (function () {
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
            { type: i0.Component, args: [{
                        styles: [".w-timepicker-dialog{padding:0;margin:-24px;width:calc(100% + 48px)}"],
                        template: "<div mat-dialog-content class=\"w-timepicker-dialog\">\n  <ntw-time [color]=\"color\" [userTime]=\"userTime\" (reverted)=\"revert()\" (submitted)=\"submit()\"></ntw-time>\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        WTimeDialogComponent.ctorParameters = function () {
            return [
                { type: UserTimeData, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] },
                { type: material.MatDialogRef }
            ];
        };
        return WTimeDialogComponent;
    }());
    var UserTimeData = (function () {
        function UserTimeData() {
        }
        return UserTimeData;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WMatTimePickerComponent = (function () {
        function WMatTimePickerComponent(dialog, translatePipe) {
            this.dialog = dialog;
            this.translatePipe = translatePipe;
            this.userTimeChange = new i0.EventEmitter();
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
             */ function () {
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
            { type: i0.Component, args: [{
                        selector: 'ntw-mat-timepicker',
                        styles: [".time-picker-button{padding:0;margin:0;min-width:44px}:host ::ng-deep .ui-dropdown,:host ::ng-deep input.ui-inputtext.ui-widget.ui-state-default,:host ::ng-deep p-dropdown,input.form-input{width:100%!important;height:35px}"],
                        template: "<div fxFlex\n     fxLayout=\"row\"\n     class=\"w-mat-timepicker\">\n\n  <button mat-button type=\"button\"\n          (click)=\"showPicker($event)\"\n          class=\"time-picker-button\">\n    <i class=\"fa fa-clock-o\"></i>\n  </button>\n\n  <input matInput\n         [id]=\"inputId\"\n         [name]=\"inputName\"\n         [disabled]=\"disabled\"\n         [readonly]=\"readonly\"\n         [class]=\"inputClass\"\n         [title]=\"tooltip\"\n         [placeholder]=\"placeholderValue\"\n         [value]=\"time\">\n</div>\n",
                        providers: [i1$1.TranslatePipe]
                    },] },
        ];
        /** @nocollapse */
        WMatTimePickerComponent.ctorParameters = function () {
            return [
                { type: material.MatDialog },
                { type: i1$1.TranslatePipe }
            ];
        };
        WMatTimePickerComponent.propDecorators = {
            userTime: [{ type: i0.Input }],
            userTimeChange: [{ type: i0.Output }],
            color: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            readonly: [{ type: i0.Input }],
            inputClass: [{ type: i0.Input }],
            tooltip: [{ type: i0.Input }],
            placeholderValue: [{ type: i0.Input }],
            inputId: [{ type: i0.Input }],
            inputName: [{ type: i0.Input }]
        };
        return WMatTimePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WTimeComponent = (function () {
        function WTimeComponent(translatePipe) {
            this.translatePipe = translatePipe;
            this.userTimeChange = new i0.EventEmitter();
            this.reverted = new i0.EventEmitter();
            this.submitted = new i0.EventEmitter();
            this.VIEW_HOURS = CLOCK_TYPE.HOURS;
            this.VIEW_MINUTES = CLOCK_TYPE.MINUTES;
            this.currentView = this.VIEW_HOURS;
        }
        /**
         * @return {?}
         */
        WTimeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.userTime) {
                    this.userTime = {
                        hour: 6,
                        minute: 0,
                        meriden: 'PM',
                        format: 12
                    };
                }
                if (!this.revertLabel) {
                    this.revertLabel = this.translatePipe.transform('buttons.Cancel');
                }
                if (!this.submitLabel) {
                    this.submitLabel = this.translatePipe.transform('buttons.Ok');
                }
            };
        /**
         * @return {?}
         */
        WTimeComponent.prototype.formatHour = /**
         * @return {?}
         */
            function () {
                if (this.userTime.format === 24) {
                    if (this.userTime.hour === 24) {
                        return '00';
                    }
                    else if (this.userTime.hour < 10) {
                        return '0' + String(this.userTime.hour);
                    }
                }
                return String(this.userTime.hour);
            };
        /**
         * @return {?}
         */
        WTimeComponent.prototype.formatMinute = /**
         * @return {?}
         */
            function () {
                if (this.userTime.minute === 0) {
                    return '00';
                }
                else if (this.userTime.minute < 10) {
                    return '0' + String(this.userTime.minute);
                }
                else {
                    return String(this.userTime.minute);
                }
            };
        /**
         * @param {?} type
         * @return {?}
         */
        WTimeComponent.prototype.setCurrentView = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                this.currentView = type;
            };
        /**
         * @param {?} m
         * @return {?}
         */
        WTimeComponent.prototype.setMeridien = /**
         * @param {?} m
         * @return {?}
         */
            function (m) {
                this.userTime.meriden = m;
            };
        /**
         * @return {?}
         */
        WTimeComponent.prototype.revert = /**
         * @return {?}
         */
            function () {
                this.reverted.emit();
            };
        /**
         * @return {?}
         */
        WTimeComponent.prototype.submit = /**
         * @return {?}
         */
            function () {
                this.submitted.emit(this.userTime);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        WTimeComponent.prototype.emituserTimeChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.userTimeChange.emit(this.userTime);
            };
        WTimeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-time',
                        template: "<div fxLayout=\"row\"\n     fxLayout.lt-md=\"column\"\n     fxLayoutAlign=\"center center\"\n     class=\"w-time\"\n     [ngClass.xs]=\"'vertical-time'\"\n     [ngClass.sm]=\"'vertical-time'\">\n  <mat-toolbar fxLayout=\"column\"\n               fxLayout.lt-md=\"row\"\n               fxLayoutAlign=\"center center\"\n               [color]=\"color\"\n               class=\"w-timepicker-time-container\">\n\n    <div class=\"w-timepicker-selected-time\">\n      <span [class]=\"currentView === VIEW_HOURS ? 'active': ''\"\n            (click)=\"setCurrentView(VIEW_HOURS)\">{{ formatHour() }}:</span>\n      <span [class]=\"currentView === VIEW_MINUTES ? 'active': ''\"\n            (click)=\"setCurrentView(VIEW_MINUTES)\">{{ formatMinute() }}</span>\n    </div>\n    <div fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         class=\"w-timepicker-selected-ampm\"\n         *ngIf=\"userTime.format === 12\">\n      <span (click)=\"setMeridien('AM')\"\n            [class]=\"userTime.meriden === 'AM' ? 'active' : ''\">{{'AM' | translate}}</span>\n      <span (click)=\"setMeridien('PM')\"\n            [class]=\"userTime.meriden === 'PM' ? 'active' : ''\">{{'PM' | translate}}</span>\n    </div>\n\n  </mat-toolbar>\n\n  <div fxLayout=\"column\"\n       fxLayoutAlign=\"space-between center\"\n       class=\"w-time-content\">\n    <ntw-clock [color]=\"color\"\n             class=\"w-animation-zoom\"\n             [userTime]=\"userTime\"\n             (userTimeChange)=\"emituserTimeChange($event)\"\n             [(currentView)]=\"currentView\"\n             (viewChange)=\"setCurrentView($event)\">\n    </ntw-clock>\n\n    <div fxFlexAlign=\"end\">\n      <button mat-button\n              (click)=\"revert()\">\n        {{revertLabel}}\n      </button>\n      <button mat-button\n              [color]=\"color\"\n              (click)=\"submit()\">\n        {{submitLabel}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host{display:block}.w-time{max-height:100%;min-height:350px;height:350px}.w-time .w-timepicker-time-container{padding:15px;min-width:160px;width:160px}.w-time .w-timepicker-time-container.mat-toolbar-single-row{height:100%}.w-time .w-timepicker-selected-time{font-size:3.5rem;font-weight:400;display:flex}.w-time .w-timepicker-selected-ampm{font-size:1rem;line-height:1.3rem;padding-top:2rem}.w-time .w-time-content{width:100%;height:100%;padding:6px}.w-time .w-time-content w-clock{padding:12px 0;height:calc(100% - 58px)}.w-time.vertical-time{height:auto}.w-time.vertical-time .w-timepicker-time-container{min-width:auto;width:100%;height:100px}.w-time.vertical-time .w-timepicker-time-container .w-timepicker-selected-ampm{padding:0 12px}.w-timepicker-selected-ampm>span,.w-timepicker-selected-time>span{outline:0;opacity:.5}.w-timepicker-selected-ampm>span:not(.active),.w-timepicker-selected-time>span:not(.active){cursor:pointer}.w-timepicker-selected-ampm>span.active,.w-timepicker-selected-time>span.active{opacity:1}.w-animate-next{opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove{transition:.5s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}.w-animate-prev{opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove{transition:.3s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}@-webkit-keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}.w-animation-zoom.ng-enter{transition:.3s cubic-bezier(.35,0,.25,1);-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:w-animation-bounce;animation-name:w-animation-bounce}"],
                        providers: [i1$1.TranslatePipe]
                    },] },
        ];
        /** @nocollapse */
        WTimeComponent.ctorParameters = function () {
            return [
                { type: i1$1.TranslatePipe }
            ];
        };
        WTimeComponent.propDecorators = {
            userTime: [{ type: i0.Input }],
            userTimeChange: [{ type: i0.Output }],
            revertLabel: [{ type: i0.Input }],
            submitLabel: [{ type: i0.Input }],
            reverted: [{ type: i0.Output }],
            submitted: [{ type: i0.Output }],
            color: [{ type: i0.Input }]
        };
        return WTimeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FieldComponent = (function () {
        function FieldComponent(bridgeService) {
            this.bridgeService = bridgeService;
            /**
             * \@property Whether to validate for required.
             */
            this.validateForRequired = false;
            /**
             * \@property Whether to validate for pattern.
             */
            this.validateForPattern = false;
            /**
             * \@property Whether to validate for range.
             */
            this.validateForRange = false;
        }
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        FieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
            };
        /**
         * \@description Updates the field's value.
         * @param {?} newValue
         * @return {?}
         */
        FieldComponent.prototype.updateValue = /**
         * \@description Updates the field's value.
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                this.field.data.value = newValue.value;
                this.validate();
            };
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        FieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.field.data) {
                    this.field.data.value = null;
                    if (this.control) {
                        this.control.reset();
                    }
                    this.clearValidationErrors();
                }
            };
        /**
         * \@description Gets the field's value.
         * @return {?}
         */
        FieldComponent.prototype.getValue = /**
         * \@description Gets the field's value.
         * @return {?}
         */
            function () {
                return this.field.data.value;
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        FieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    data.append(this.field.name, this.field.data.value);
                }
                return data;
            };
        /**
         * \@description Triggers a dynamic event in case it is defined.
         * @param {?} eventType
         * @param {?} eventArguments
         * @param {?} source
         * @return {?}
         */
        FieldComponent.prototype.triggerDynamicEvent = /**
         * \@description Triggers a dynamic event in case it is defined.
         * @param {?} eventType
         * @param {?} eventArguments
         * @param {?} source
         * @return {?}
         */
            function (eventType, eventArguments, source) {
                if (source.eventTriggers) {
                    /** @type {?} */
                    var event_1 = source.eventTriggers[eventType];
                    /** @type {?} */
                    var parentEventHandlerFunction = this.bridgeService.parentComponent[event_1.handler];
                    if (parentEventHandlerFunction) {
                        /** @type {?} */
                        var parameters = [eventArguments];
                        if (event_1.parameters && event_1.parameters.length > 0) {
                            parameters = parameters.concat(event_1.parameters);
                        }
                        parentEventHandlerFunction(this.bridgeService.parentComponent, source, parameters);
                    }
                }
            };
        /**
         * \@description Checks whether the field should be hidden.
         * @return {?} boolean Whether the field should be hidden.
         */
        FieldComponent.prototype.isFieldHidden = /**
         * \@description Checks whether the field should be hidden.
         * @return {?} boolean Whether the field should be hidden.
         */
            function () {
                return this.field.hidden ||
                    (this.bridgeService.configuration.settings.sectionMode !== SectionModes.None &&
                        this.bridgeService.configuration.sections.length > 0 &&
                        this.field.sectionId !== this.bridgeService.configuration.currentSection.id);
            };
        /**
         * \@description Checks whether the validation should be shown.
         * @return {?} boolean Whether the validation should be shown.
         */
        FieldComponent.prototype.isValidationShown = /**
         * \@description Checks whether the validation should be shown.
         * @return {?} boolean Whether the validation should be shown.
         */
            function () {
                return !this.isPristine && this.field.validationErrors && this.field.validationErrors.length > 0;
            };
        /**
         * \@description Checks whether the validation asterisk should be shown.
         * @return {?} boolean Whether the validation asterisk should be shown.
         */
        FieldComponent.prototype.isValidationAsteriskShown = /**
         * \@description Checks whether the validation asterisk should be shown.
         * @return {?} boolean Whether the validation asterisk should be shown.
         */
            function () {
                return !this.isFormInDisplayMode() && this.field.validation && (this.field.validation.required || this.field.validation.min > 0);
            };
        /**
         * \@description Validates the form control and updates its validation errors list.
         * @param {?=} eventArguments
         * @param {?=} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
        FieldComponent.prototype.validate = /**
         * \@description Validates the form control and updates its validation errors list.
         * @param {?=} eventArguments
         * @param {?=} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
            function (eventArguments, isSubmit) {
                this.preValidate(isSubmit);
                if (this.shouldValidate()) {
                    if (this.field.hidden) {
                        this.clearValidationErrors();
                    }
                    else {
                        if (!this.isFormInDisplayMode()) {
                            if (this.validateForRequired) {
                                this.validateRequiredCondition();
                            }
                            if (this.validateForPattern) {
                                this.validatePatternCondition();
                            }
                            if (this.validateForRange) {
                                this.validateRangeCondition();
                            }
                        }
                    }
                    this.updateValidationSummary();
                }
                return this.field.validationErrors;
            };
        /**
         * \@description Adds an error to the validation errors list.
         * @param {?} message
         * @param {?=} type
         * @return {?}
         */
        FieldComponent.prototype.addValidationError = /**
         * \@description Adds an error to the validation errors list.
         * @param {?} message
         * @param {?=} type
         * @return {?}
         */
            function (message, type) {
                if (type === void 0) {
                    type = FieldComponent.ValidationErrorClass;
                }
                if (!this.field.validationErrors) {
                    this.field.validationErrors = new Array();
                }
                this.field.validationErrors.push(new InputError(type, message));
            };
        /**
         * \@description Clears the field's validation errors.
         * @return {?}
         */
        FieldComponent.prototype.clearValidationErrors = /**
         * \@description Clears the field's validation errors.
         * @return {?}
         */
            function () {
                this.field.validationErrors = new Array();
            };
        /** @description Checks whether the field should be valiated.
         * @return boolean Whether the field should be valiated.
        */
        /**
         * \@description Checks whether the field should be valiated.
         * @return {?} boolean Whether the field should be valiated.
         */
        FieldComponent.prototype.shouldValidate = /**
         * \@description Checks whether the field should be valiated.
         * @return {?} boolean Whether the field should be valiated.
         */
            function () {
                return this.field.validation && (!this.field.validationErrors || this.field.validationErrors.length === 0);
            };
        /** @description Prepares the field for validation and makes sure it isn't validated repeatedly.
         * @param boolean isSubmit Determines whether the validation is reached from form submission.
         * @return Array<InputError> The list of validation errors.
        */
        /**
         * \@description Prepares the field for validation and makes sure it isn't validated repeatedly.
         * @param {?} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
        FieldComponent.prototype.preValidate = /**
         * \@description Prepares the field for validation and makes sure it isn't validated repeatedly.
         * @param {?} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
            function (isSubmit) {
                this.isPristine = false;
                if (isSubmit) {
                    if (this.field.validationErrors && this.field.validationErrors.length > 0) {
                        return this.field.validationErrors;
                    }
                    else {
                        this.field.validationErrors = new Array();
                        return this.field.validationErrors;
                    }
                }
                else {
                    this.field.validationErrors = new Array();
                    return this.field.validationErrors;
                }
            };
        /** @description Updates the validation summary.*/
        /**
         * \@description Updates the validation summary.
         * @return {?}
         */
        FieldComponent.prototype.updateValidationSummary = /**
         * \@description Updates the validation summary.
         * @return {?}
         */
            function () {
                this.bridgeService.configuration.validationErrors = new Array();
                try {
                    for (var _a = __values(this.bridgeService.configuration.mergedFields), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var field = _b.value;
                        if (field.validationErrors) {
                            this.bridgeService.configuration.validationErrors = this.bridgeService
                                .configuration.validationErrors.concat(field.validationErrors);
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /** @description Validates a control for the required condition and updates its validation errors list.
         * @return Array<InputError> The list of validation errors.
        */
        /**
         * \@description Validates a control for the required condition and updates its validation errors list.
         * @return {?} Array<InputError> The list of validation errors.
         */
        FieldComponent.prototype.validateRequiredCondition = /**
         * \@description Validates a control for the required condition and updates its validation errors list.
         * @return {?} Array<InputError> The list of validation errors.
         */
            function () {
                if (this.field.validation.required) {
                    if (!this.field.data || !this.field.data.value || this.field.data.value.length === 0) {
                        this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.requiredText));
                    }
                }
                return this.field.validationErrors;
            };
        /** @description Validates a control for the pattern condition and updates its validation errors list.
          * @return Array<InputError> The list of validation errors.
        */
        /**
         * \@description Validates a control for the pattern condition and updates its validation errors list.
         * @return {?} Array<InputError> The list of validation errors.
         */
        FieldComponent.prototype.validatePatternCondition = /**
         * \@description Validates a control for the pattern condition and updates its validation errors list.
         * @return {?} Array<InputError> The list of validation errors.
         */
            function () {
                if (this.field.validation.pattern && this.field.data && this.field.data.value && this.field.data.value.length > 0) {
                    /** @type {?} */
                    var regEx = new RegExp(this.field.validation.pattern);
                    if (!regEx.test(this.field.data.value)) {
                        this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.patternText));
                    }
                }
                return this.field.validationErrors;
            };
        /** @description Validates a control for the range condition and updates its validation errors list.
         * @return Array<InputError> The list of validation errors.
        */
        /**
         * \@description Validates a control for the range condition and updates its validation errors list.
         * @return {?} Array<InputError> The list of validation errors.
         */
        FieldComponent.prototype.validateRangeCondition = /**
         * \@description Validates a control for the range condition and updates its validation errors list.
         * @return {?} Array<InputError> The list of validation errors.
         */
            function () {
                /** @type {?} */
                var valueLength = this.field.data && this.field.data.value ? this.field.data.value.length : 0;
                if ((this.field.validation.min && valueLength < this.field.validation.min) ||
                    (this.field.validation.max && valueLength > this.field.validation.max)) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.rangeText));
                }
                return this.field.validationErrors;
            };
        /** @description Gets whether the form is in display mode.
         * @return boolean Whether the form is in display mode.
        */
        /**
         * \@description Gets whether the form is in display mode.
         * @return {?} boolean Whether the form is in display mode.
         */
        FieldComponent.prototype.isFormInDisplayMode = /**
         * \@description Gets whether the form is in display mode.
         * @return {?} boolean Whether the form is in display mode.
         */
            function () {
                return this.bridgeService.configuration.settings.formMode === FormModes.Display;
            };
        /**
         * \@property The validation error class.
         */
        FieldComponent.ValidationErrorClass = 'cssClasses.ValidationError';
        FieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-field',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        FieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService }
            ];
        };
        FieldComponent.propDecorators = {
            field: [{ type: i0.Input, args: ['field',] }],
            control: [{ type: i0.ViewChild, args: [forms.NgModel,] }]
        };
        return FieldComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BoundableFieldComponent = (function (_super) {
        __extends(BoundableFieldComponent, _super);
        function BoundableFieldComponent(bridgeService, httpRequestsService, translateService, utilitiesService, route) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.httpRequestsService = httpRequestsService;
            _this.translateService = translateService;
            _this.utilitiesService = utilitiesService;
            _this.route = route;
            return _this;
        }
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        BoundableFieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.isFormInDisplayMode()) {
                    this.dataBindOptions();
                    this.translateService.onLangChange.subscribe(function (event) {
                        _this.dataBindOptions();
                    });
                }
            };
        /** @description Binds the field's options.*/
        /**
         * \@description Binds the field's options.
         * @return {?}
         */
        BoundableFieldComponent.prototype.dataBindOptions = /**
         * \@description Binds the field's options.
         * @return {?}
         */
            function () {
                if (this.field.data && this.field.data.optionsEndpoint) {
                    /** @type {?} */
                    var endpoint = this.utilitiesService.replaceTokens(this.bridgeService.configuration.endpoints.lookups[this.field.data.optionsEndpoint], this.route, this.bridgeService.additionalParameters);
                    this.bindOptions(endpoint);
                }
            };
        /** @description Binds the field's options.
         * @param string endpoint The endpoint.
        */
        /**
         * \@description Binds the field's options.
         * @param {?} endpoint
         * @return {?}
         */
        BoundableFieldComponent.prototype.bindOptions = /**
         * \@description Binds the field's options.
         * @param {?} endpoint
         * @return {?}
         */
            function (endpoint) {
                var _this = this;
                this.httpRequestsService.get(endpoint).subscribe(function (response) {
                    _this.field.data.options = response;
                }, function (exception) {
                    console.error('bindOptions: ', exception);
                });
            };
        BoundableFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-boundable-field',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        BoundableFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: HttpRequestsService },
                { type: i1$1.TranslateService },
                { type: UtilitiesService },
                { type: router.ActivatedRoute, decorators: [{ type: i0.Optional }] }
            ];
        };
        return BoundableFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxFieldComponent = (function (_super) {
        __extends(CheckboxFieldComponent, _super);
        function CheckboxFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for range.
             */
            _this.validateForRange = true;
            return _this;
        }
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        CheckboxFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.field.data) {
                    this.field.data.value = [];
                    this.control.reset();
                    this.clearValidationErrors();
                }
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        CheckboxFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    for (var i = 0; i < this.field.data.value.length; i++) {
                        /** @type {?} */
                        var value = this.field.data.value[i];
                        data.append(this.field.name + '[' + i + ']', value);
                    }
                }
                return data;
            };
        CheckboxFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-checkbox-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div class=\"checkBoxHolder\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\">\n    <p-checkbox *ngFor=\"let checkbox of field.data.options; let i = index\"\n                [id]=\"field.name+'_'+i\"\n                [name]=\"field.name\"\n                [(ngModel)]=\"field.data.value\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                [title]=\"field.tooltip | translate\"\n                #input=\"ngModel\"\n                [required]=\"field.validation.required\"\n                [label]=\"checkbox.name | translate\"\n                [value]=\"checkbox.id\"\n                [disabled]=\"field.disabled\"\n                (onChange)=\"triggerDynamicEvent('onChange', $event, field);\"\n                (ngModelChange)=\"validate();\">\n    </p-checkbox>\n  </div>\n\n  <!-- display -->\n  <div [class]=\"field.cssClasses.display\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <ul *ngIf=\"field?.data?.value?.length > 1\">\n      <li *ngFor=\"let title of field?.data?.value\">{{title}}</li>\n    </ul>\n    <span *ngIf=\"field?.data?.value?.length == 1\">\n      <span *ngFor=\"let title of field?.data?.value\">{{title}}</span>\n    </span>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["p-checkbox{display:block}body.ar :host ::ng-deep .ui-chkbox.ui-widget{float:right;margin-left:10px}"]
                    },] },
        ];
        return CheckboxFieldComponent;
    }(BoundableFieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ChipsFieldComponent = (function (_super) {
        __extends(ChipsFieldComponent, _super);
        function ChipsFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for range.
             */
            _this.validateForRange = true;
            return _this;
        }
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        ChipsFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    for (var i = 0; i < this.field.data.value.length; i++) {
                        /** @type {?} */
                        var value = this.field.data.value[i];
                        data.append(this.field.name + '[' + i + ']', value);
                    }
                }
                return data;
            };
        ChipsFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-chips-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-chips [id]=\"field.name\"\n           [name]=\"field.name\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           [class]=\"field.cssClasses.input\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           [title]=\"field.tooltip | translate\"\n           #input=\"ngModel\"\n           [disabled]=\"field.disabled\"\n           [(ngModel)]=\"field.data.value\"\n           [allowDuplicate]=\"field.validation.allowDuplicate\"\n           [addOnBlur]=\"field.addOnBlur\"\n           [addOnTab]=\"field.addOnTab\"\n           [required]=\"field.validation.required\"\n           *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n           (onAdd)=\"triggerDynamicEvent('onAdd', $event, field);\"\n           (onRemove)=\"triggerDynamicEvent('onRemove', $event, field);\"\n           (ngModelChange)=\"validate();\">\n  </p-chips>\n\n  <!-- display -->\n  <div [class]=\"field.cssClasses.display\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <ul>\n      <li *ngFor=\"let title of field.data.value\">{{title}}</li>\n    </ul>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host ::ng-deep .ui-chips-input-token,:host ::ng-deep .ui-chips-input-token input{width:100%}:host ::ng-deep .ui-chips>ul.ui-inputtext{padding:5px .25em}"]
                    },] },
        ];
        return ChipsFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DatetimeFieldComponent = (function (_super) {
        __extends(DatetimeFieldComponent, _super);
        function DatetimeFieldComponent(bridgeService, translateService, languageService, datePipe) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.translateService = translateService;
            _this.languageService = languageService;
            _this.datePipe = datePipe;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * @return {?}
         */
        DatetimeFieldComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.setCalendarOptions();
                this.translateService.onLangChange.subscribe(function (response) {
                    _this.setCalendarOptions();
                });
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        DatetimeFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    data.append(this.field.name, this.datePipe.transform(this.field.data.value, this.field.formDataDateFormat));
                }
                return data;
            };
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        DatetimeFieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
                // buggy if done from here after component is loaded. Moved back to before component loaded.
            };
        /**
         * \@description Sets the calendar options.
         * @return {?}
         */
        DatetimeFieldComponent.prototype.setCalendarOptions = /**
         * \@description Sets the calendar options.
         * @return {?}
         */
            function () {
                if (this.calendarElement && this.languageService.translations) {
                    /** @type {?} */
                    var calendarOptions = this.languageService.translations.calendarOptions;
                    if (calendarOptions) {
                        this.calendarElement.locale = calendarOptions;
                    }
                }
            };
        DatetimeFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-datetime-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-calendar #calendar\n              [id]=\"field.name\"\n              [name]=\"field.name\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [title]=\"field.tooltip | translate\"\n              #input=\"ngModel\"\n              [(ngModel)]=\"field.data.value\"\n              [required]=\"field.validation.required\"\n              [readonlyInput]=\"field.readonly\"\n              [disabled]=\"field.disabled\"\n              [showIcon]=\"field.showIcon\"\n              [showTime]=\"field.showTime\"\n              [hourFormat]=\"field.hourFormat\"\n              [monthNavigator]=\"field.monthNavigator\"\n              [yearNavigator]=\"field.yearNavigator\"\n              [yearRange]=\"field.yearRange\"\n              [dateFormat]=\"field.dateFormat\"\n              [minDate]=\"field.minDateValue\"\n              [maxDate]=\"field.maxDateValue\"\n              [defaultDate]=\"field.defaultDateValue\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onClose)=\"validate();triggerDynamicEvent('onSelect', $event, field);\"\n              (onSelect)=\"validate();triggerDynamicEvent('onSelect', $event, field);\">\n  </p-calendar>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value | date:field.displayDateFormat}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["body.en :host ::ng-deep button.ui-datepicker-trigger{right:0}body.ar :host ::ng-deep button.ui-datepicker-trigger{left:0}:host ::ng-deep span.ui-calendar{display:block}:host ::ng-deep p-calendar input{border-radius:.25rem}body.ar :host ::ng-deep .ui-calendar-button{border-radius:.25rem 0 0 .25rem}body.ar :host ::ng-deep .ui-calendar.ui-calendar-w-btn input{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}:host ::ng-deep button.ui-datepicker-trigger{position:absolute}:host ::ng-deep .ui-calendar .ui-datepicker{width:17em;min-width:auto}:host ::ng-deep .ui-calendar .ui-calendar-button .ui-button-icon-left{font-size:1.25em}"]
                    },] },
        ];
        /** @nocollapse */
        DatetimeFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: i1$1.TranslateService },
                { type: LanguageService },
                { type: common.DatePipe }
            ];
        };
        DatetimeFieldComponent.propDecorators = {
            calendarElement: [{ type: i0.ViewChild, args: ['calendar',] }]
        };
        return DatetimeFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DatetimeHijriFieldComponent = (function (_super) {
        __extends(DatetimeHijriFieldComponent, _super);
        function DatetimeHijriFieldComponent(bridgeService, utilitiesService) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.utilitiesService = utilitiesService;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        DatetimeHijriFieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
                if (this.field.minDate) {
                    this.field.minDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.minDate, new Date(this.field.minDate));
                }
                if (this.field.maxDate) {
                    this.field.maxDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.maxDate, new Date(this.field.maxDate));
                }
                if (this.field.data.dateValue) {
                    this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.data.dateValue, new Date(this.field.data.dateValue));
                }
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        DatetimeHijriFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    data.append(this.field.name + '.year', this.field.data.value.year);
                    data.append(this.field.name + '.month', this.field.data.value.month);
                    data.append(this.field.name + '.day', this.field.data.value.day);
                }
                return data;
            };
        /**
         * \@description Toggles the calendar.
         * @return {?}
         */
        DatetimeHijriFieldComponent.prototype.toggleCalendar = /**
         * \@description Toggles the calendar.
         * @return {?}
         */
            function () {
                this.calendar.toggle();
            };
        DatetimeHijriFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-datetime-hijri-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div class=\"hijri-date-control\">\n    <input [name]=\"field.name\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           [class]=\"field.cssClasses.input\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           ngbDatepicker\n           #input=\"ngbDatepicker\"\n           #defaultInput=\"ngModel\"\n           [readonly]=\"field.readonly\"\n           [disabled]=\"field.disabled\"\n           [(ngModel)]=\"field.data.value\"\n           [minDate]=\"field.minDateValue\"\n           [maxDate]=\"field.maxDateValue\"\n           [showWeekNumbers]=\"field.showWeekNumbers\"\n           [displayMonths]=\"field.displayMonths\"\n           [outsideDays]=\"field.outsideDays\"\n           [showWeekdays]=\"field.showWeekdays\"\n           *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n           (click)=\"toggleCalendar();validate();\"\n           (ngModelChange)=\"validate();triggerDynamicEvent('onSelect', $event, field);\" />\n\n    <!-- icon -->\n    <button class=\"hijri-date-icon-container\"\n            [disabled]=\"field.disabled\"\n            type=\"button\"\n            (click)=\"toggleCalendar();\">\n      <span class=\"hijri-date-icon\"\n            *ngIf=\"field.showIcon\">\n      </span>\n    </button>\n  </div>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.day}}/{{field?.data?.value?.month}}/{{field?.data?.value?.year}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [".hijri-date{height:35px}.hijri-date-control{position:relative}.hijri-date-icon-container{position:absolute;top:0;padding:0 6px;background-color:#2399e5;color:#fff;cursor:pointer;height:100%;line-height:1.8;border:0}button.hijri-date-icon-container:disabled{opacity:.35}.hijri-date-icon:focus,.hijri-date-icon:hover{background:#1f89ce}.hijri-date-icon:after{content:'\\e927';font-family:primeicons;font-size:1.25em}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg)}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .right .ngb-dp-navigation-chevron{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}body.ar :host ::ng-deep .custom-select{background-position:left.75rem center}body.ar :host ::ng-deep .hijri-date-icon-container{left:0}body.en :host ::ng-deep .hijri-date-icon-container{right:0}:host ::ng-deep .custom-select{background-position:left .25rem center!important;direction:rtl!important;min-width:100px}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-week-number,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-weekday{width:2.5rem;height:2.5rem}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day div{width:100%;height:100%;line-height:2.5rem}"],
                        providers: [
                            { provide: ngBootstrap.NgbCalendar, useClass: ngBootstrap.NgbCalendarIslamicUmalqura },
                            { provide: ngBootstrap.NgbDatepickerI18n, useClass: IslamicI18n }
                        ]
                    },] },
        ];
        /** @nocollapse */
        DatetimeHijriFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: UtilitiesService }
            ];
        };
        DatetimeHijriFieldComponent.propDecorators = {
            calendar: [{ type: i0.ViewChild, args: ['input',] }]
        };
        return DatetimeHijriFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EditorFieldComponent = (function (_super) {
        __extends(EditorFieldComponent, _super);
        function EditorFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * \@description Gets the field's value.
         * @return {?}
         */
        EditorFieldComponent.prototype.getValue = /**
         * \@description Gets the field's value.
         * @return {?}
         */
            function () {
                if (this.field.showToolbar) {
                    return this.field.data.value;
                }
                else {
                    return this.field.data.value.replace(/<[^>]*>/g, '');
                }
            };
        EditorFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-editor-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div [ngClass]=\"{'hide-toolbar':!field.showToolbar}\">\n    <p-editor [id]=\"field.name\"\n              [name]=\"field.name\"\n              #input=\"ngModel\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [title]=\"field.tooltip | translate\"\n              [readonly]=\"field.readonly\"\n              [(ngModel)]=\"field.data.value\"\n              [style]=\"{'height':field.height}\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onSelectionChange)=\"triggerDynamicEvent('onSelectionChange', $event, field);\"\n              (onTextChange)=\"triggerDynamicEvent('onChange', $event, field);\"\n              (ngModelChange)=\"validate();\">\n    </p-editor>\n  </div>\n\n  <!-- display -->\n  <span [innerHTML]=\"field.data.value\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\"></span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["body.ar :host ::ng-deep .ql-editor p{direction:rtl;text-align:right}body.ar :host ::ng-deep span.ql-picker-label{text-align:left}body.ar :host ::ng-deep .ql-editor.ql-blank::before{left:unset}:host ::ng-deep .hide-toolbar .ui-editor-toolbar{display:none}:host ::ng-deep .hide-toolbar .ui-editor-content{border-top:1px solid #ccc!important}"]
                    },] },
        ];
        return EditorFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FileUploadFieldComponent = (function (_super) {
        __extends(FileUploadFieldComponent, _super);
        function FileUploadFieldComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        FileUploadFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.fileUploadControl) {
                    this.fileUploadControl.clear();
                }
                /** @type {?} */
                var length = this.field.data.value.length;
                for (var i = 0; i < length; i++) {
                    this.removeFile(this.field.data.value[i]);
                }
                this.clearValidationErrors();
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        FileUploadFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.fileUploadControl.files) {
                    try {
                        for (var _a = __values(this.fileUploadControl.files), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var file = _b.value;
                            data.append(this.field.name, file);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return))
                                _c.call(_a);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return data;
                var e_1, _c;
            };
        /**
         * \@description Validates the form control and updates its validation errors list.
         * @param {?=} eventArguments
         * @param {?=} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
        FileUploadFieldComponent.prototype.validate = /**
         * \@description Validates the form control and updates its validation errors list.
         * @param {?=} eventArguments
         * @param {?=} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
            function (eventArguments, isSubmit) {
                this.preValidate(isSubmit);
                if (this.shouldValidate()) {
                    /** @type {?} */
                    var valueLength = 0;
                    if (this.fileUploadControl) {
                        valueLength = eventArguments === 'onRemove' ? this.fileUploadControl.files.length - 1 : this.fileUploadControl.files.length;
                    }
                    if (this.field.data.value) {
                        valueLength += this.field.data.value.length;
                    }
                    if ((this.field.validation.min && valueLength < this.field.validation.min) ||
                        (this.field.validation.max && valueLength > this.field.validation.max)) {
                        this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.rangeText));
                    }
                    if (this.field.validation.maxFileSizeInBytes > 0 && this.fileUploadControl && this.fileUploadControl.msgs) {
                        /** @type {?} */
                        var invalidFileSizeMessage = this.fileUploadControl.msgs.find(function (m) { return m.summary === 'invalidFileSize'; });
                        if (invalidFileSizeMessage) {
                            this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileSizeText));
                        }
                        /** @type {?} */
                        var invalidFileTypeMessage = this.fileUploadControl.msgs.find(function (m) { return m.summary === 'invalidFileType'; });
                        if (invalidFileTypeMessage) {
                            this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileTypeText));
                        }
                    }
                    this.updateValidationSummary();
                }
                return this.field.validationErrors;
            };
        /**
         * \@description Removes the file.
         * @param {?} file
         * @return {?}
         */
        FileUploadFieldComponent.prototype.removeFile = /**
         * \@description Removes the file.
         * @param {?} file
         * @return {?}
         */
            function (file) {
                this.field.data.value.pop(file);
            };
        FileUploadFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-file-upload-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-fileUpload [id]=\"field.name\"\n                [name]=\"field.name\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                [url]=\"field.data.url\"\n                [multiple]=\"field.multiple\"\n                [accept]=\"field.validation.accept\"\n                #input\n                [auto]=\"field.auto\"\n                [maxFileSize]=\"field.validation.maxFileSizeInBytes\"\n                [mode]=\"field.mode\"\n                [showCancelButton]=\"field.buttons.showCancelButton\"\n                [showUploadButton]=\"field.buttons.showUploadButton\"\n                [chooseLabel]=\"field.buttons.chooseLabel | translate\"\n                [uploadLabel]=\"field.buttons.uploadLabel | translate\"\n                [cancelLabel]=\"field.buttons.cancelLabel | translate\"\n                [title]=\"field.tooltip | translate\"\n                [disabled]=\"field.disabled\"\n                invalidFileSizeMessageSummary=\"invalidFileSize\"\n                invalidFileSizeMessageDetail=\"invalidFileSize\"\n                invalidFileTypeMessageDetail=\"invalidFileType\"\n                invalidFileTypeMessageSummary=\"invalidFileType\"\n                customUpload=true\n                *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (onSelect)=\"validate('onSelect');\"\n                (onRemove)=\"validate('onRemove');\"\n                (onClear)=\"validate('onClear');\">\n  </p-fileUpload>\n\n  <!-- display -->\n  <div class=\"upload-file-viewer\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'New' && field?.data?.value?.length > 0\">\n    <div class=\"upload-file-item\"\n         *ngFor=\"let file of field.data.value\">\n      <a [href]=\"file.url\"\n         [download]=\"file.fileName\"\n         target=\"_blank\"\n         class=\"upload-file-anchor\">\n        <span>\n          <i class=\"fa fa-file\"></i>\n        </span>\n        <span class=\"upload-file-title\">{{file.fileName}}</span>\n      </a>\n\n      <a href=\"javascript:;\"\n         (click)=\"removeFile(file);validate('onRemoveFile');\"\n         *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n         class=\"trash-icon-style\">\n        <span>\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </span>\n      </a>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host ::ng-deep p-fileupload .ui-messages-error{display:none!important}:host ::ng-deep .ui-fileupload{margin-bottom:8px}.upload-file-viewer{border:1px solid #d5d5d5;padding:10px}.upload-file-viewer .upload-file-item{border:1px solid #d5d5d5;padding:10px;background:linear-gradient(to bottom,#f6f7f9 0,#ebedf0 100%);margin-bottom:10px}.upload-file-title{padding:0 15px}a.upload-file-anchor{line-height:2}.upload-file-viewer div:last-child{margin-bottom:0}a.trash-icon-style{padding:6px 11px;border-radius:6px;font-size:12px;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s}a.trash-icon-style:hover{border:1px solid #1f89ce;background:#1f89ce}body.ar :host ::ng-deep a.trash-icon-style{float:left}body.en :host ::ng-deep a.trash-icon-style{float:right}"]
                    },] },
        ];
        FileUploadFieldComponent.propDecorators = {
            fileUploadControl: [{ type: i0.ViewChild, args: [fileupload.FileUpload,] }]
        };
        return FileUploadFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ImageCropperFieldComponent = (function (_super) {
        __extends(ImageCropperFieldComponent, _super);
        function ImageCropperFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property The image file.
             */
            _this.imageFile = new Image();
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * @return {?}
         */
        ImageCropperFieldComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.initializeCropper();
            };
        /**
         * \@description Updates the field's value.
         * @param {?} newValue
         * @return {?}
         */
        ImageCropperFieldComponent.prototype.updateValue = /**
         * \@description Updates the field's value.
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                var _this = this;
                this.field.data.value = newValue.value;
                if (!this.isFormInDisplayMode()) {
                    this.imageFile = new Image();
                    this.imageFile.setAttribute('crossOrigin', 'anonymous');
                    this.imageFile.src = newValue.value;
                    // workaround as it is not working without it. no idea why :)
                    setTimeout(function () { _this.cropper.setImage(_this.imageFile); }, 1);
                }
            };
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        ImageCropperFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.field.data) {
                    this.field.data.value = '';
                    this.fileUploadControl.clear();
                    this.cropper.reset();
                    this.imageFile = new Image();
                    this.clearValidationErrors();
                }
            };
        /**
         * \@description Sets the cropped image value.
         * @return {?}
         */
        ImageCropperFieldComponent.prototype.setValue = /**
         * \@description Sets the cropped image value.
         * @return {?}
         */
            function () {
                if (this.croppedImageElement) {
                    this.field.data.value = this.croppedImageElement.nativeElement.currentSrc;
                }
            };
        /**
         * \@description Sets the cropped image.
         * @return {?}
         */
        ImageCropperFieldComponent.prototype.setCropperImage = /**
         * \@description Sets the cropped image.
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var selectedFile = this.fileUploadControl.files[0];
                if (selectedFile) {
                    this.imageFile = new Image();
                    /** @type {?} */
                    var fileReader = new FileReader();
                    // set as a temporary value for validation since the read is async.
                    this.field.data.value = 'placeholder';
                    fileReader.onloadend = function (loadEvent) {
                        _this.imageFile.src = loadEvent.target.result;
                        _this.cropper.setImage(_this.imageFile);
                        _this.field.data.value = _this.imageFile.src;
                    };
                    fileReader.readAsDataURL(selectedFile);
                }
            };
        /**
         * \@description Initializes the cropper component.
         * @return {?}
         */
        ImageCropperFieldComponent.prototype.initializeCropper = /**
         * \@description Initializes the cropper component.
         * @return {?}
         */
            function () {
                this.cropperSettings = new ng2ImgCropper.CropperSettings();
                this.cropperSettings.noFileInput = true;
                this.cropperSettings.width = this.cropperSettings.croppedWidth = this.field.cropperSettings.width;
                this.cropperSettings.height = this.cropperSettings.croppedHeight = this.field.cropperSettings.height;
                this.cropperSettings.canvasWidth = this.field.cropperSettings.canvasWidth;
                this.cropperSettings.canvasHeight = this.field.cropperSettings.canvasHeight;
                this.cropperSettings.minWidth = this.field.cropperSettings.minWidth;
                this.cropperSettings.minHeight = this.field.cropperSettings.minHeight;
                this.cropperSettings.rounded = this.field.cropperSettings.rounded;
            };
        ImageCropperFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-image-cropper-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field?.cssClasses?.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input -->\n  <!-- upload control -->\n  <p-fileUpload [id]=\"field.name\"\n                [name]=\"field.name\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                accept=\"image/*\"\n                mode=\"advanced\"\n                [showCancelButton]=false\n                [showUploadButton]=false\n                [chooseLabel]=\"field.buttons.chooseLabel | translate\"\n                [title]=\"field.tooltip | translate\"\n                [disabled]=\"field.disabled\"\n                invalidFileSizeMessageSummary=\"invalidFileSize\"\n                invalidFileSizeMessageDetail=\"invalidFileSize\"\n                invalidFileTypeMessageDetail=\"invalidFileType\"\n                invalidFileTypeMessageSummary=\"invalidFileType\"\n                customUpload=true\n                *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (onSelect)=\"setCropperImage();validate();\"\n                (onRemove)=\"clearValue();validate();\">\n  </p-fileUpload>\n\n  <!-- cropper -->\n  <img-cropper *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n               [hidden]=\"!imageFile.src\"\n               [image]=\"imageFile\"\n               [settings]=\"cropperSettings\"\n               (onCrop)=\"setValue()\">\n  </img-cropper>\n\n  <!-- cropped image -->\n  <span class=\"cropped-image\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n        [hidden]=\" !imageFile.image\">\n    <img #croppedImage\n         *ngIf=\"imageFile.image\"\n         [src]=\"imageFile.image\"\n         [width]=\"cropperSettings.width\"\n         [height]=\"cropperSettings.height\">\n  </span>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <img *ngIf=\"field.data.value\"\n         [src]=\"field.data.value\"\n         [width]=\"cropperSettings.width\"\n         [height]=\"cropperSettings.height\">\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}p-fileupload{display:block}:host ::ng-deep img-cropper .ng2-imgcrop{border:1px solid #d5d5d5;padding:20px 0;background-color:#ebedf0;width:100%;margin:10px 0;display:block}.form-display img{border:1px solid #d5d5d5;background-color:#ebedf0;padding:10px}.cropped-image{width:100%;display:block;border:1px solid #d5d5d5;background-color:#ebedf0;margin:0 auto;text-align:center;padding:10px}"]
                    },] },
        ];
        ImageCropperFieldComponent.propDecorators = {
            cropper: [{ type: i0.ViewChild, args: [ng2ImgCropper.ImageCropperComponent,] }],
            croppedImageElement: [{ type: i0.ViewChild, args: ['croppedImage',] }],
            fileUploadControl: [{ type: i0.ViewChild, args: [fileupload.FileUpload,] }]
        };
        return ImageCropperFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InfoFieldComponent = (function (_super) {
        __extends(InfoFieldComponent, _super);
        function InfoFieldComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InfoFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-info-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n  <div [innerHTML]=\"field.htmlSnippet | translate\"></div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        return InfoFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputFieldComponent = (function (_super) {
        __extends(InputFieldComponent, _super);
        function InputFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            /**
             * \@property Whether to validate for pattern.
             */
            _this.validateForPattern = true;
            return _this;
        }
        InputFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-input-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <input [id]=\"field.name\"\n         [name]=\"field.name\"\n         [(ngModel)]=\"field.data.value\"\n         [class]=\"field.cssClasses.input\"\n         [ngClass]=\"{'invalid': isValidationShown()}\"\n         [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n         [title]=\"field.tooltip | translate\"\n         [autocomplete]=\"field.autoComplete\"\n         #input=\"ngModel\"\n         [type]=\"field.fieldType\"\n         [required]=\"field.validation.required\"\n         [pattern]=\"field.validation.pattern\"\n         [maxlength]=\"field.validation.length\"\n         [readonly]=\"field.readonly\"\n         [disabled]=\"field.disabled\"\n         *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n         (ngModelChange)=\"validate();triggerDynamicEvent('onChange', $event, field);\">\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                    },] },
        ];
        return InputFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LocationFieldComponent = (function (_super) {
        __extends(LocationFieldComponent, _super);
        function LocationFieldComponent(bridgeService, mapsAPILoader, ngZone) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.mapsAPILoader = mapsAPILoader;
            _this.ngZone = ngZone;
            /**
             * \@property Whether to validate for range.
             */
            _this.validateForRange = true;
            return _this;
        }
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        LocationFieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
                var _this = this;
                // set a map field's location to use default location if no value is set and location is available.
                if (!this.field.defaultLocation || !this.field.defaultLocation.latitude || !this.field.defaultLocation.longitude) {
                    if ('geolocation' in navigator) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            _this.field.defaultLocation = {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            };
                        });
                    }
                }
            };
        /**
         * \@description Updates the field's value.
         * @param {?} newValue
         * @return {?}
         */
        LocationFieldComponent.prototype.updateValue = /**
         * \@description Updates the field's value.
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                try {
                    for (var _a = __values(newValue.value), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var value = _b.value;
                        this.addMarkersFromLocation(value.latitude, value.longitude);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        LocationFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.field.data) {
                    this.field.data.value = [];
                    this.clearValidationErrors();
                }
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        LocationFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    for (var i = 0; i < this.field.data.value.length; i++) {
                        /** @type {?} */
                        var value = this.field.data.value[i];
                        data.append(this.field.name + '[' + i + '].latitude', value.latitude);
                        data.append(this.field.name + '[' + i + '].longitude', value.longitude);
                    }
                }
                return data;
            };
        /**
         * \@description Add a marker from the clicked map location.
         * @param {?} eventArguments
         * @return {?}
         */
        LocationFieldComponent.prototype.addMarkers = /**
         * \@description Add a marker from the clicked map location.
         * @param {?} eventArguments
         * @return {?}
         */
            function (eventArguments) {
                if (!this.isFormInDisplayMode()) {
                    this.addMarkersFromLocation(eventArguments.coords.lat, eventArguments.coords.lng);
                }
            };
        /**
         * \@description Activates the google map location search.
         * @return {?}
         */
        LocationFieldComponent.prototype.activateSearchInput = /**
         * \@description Activates the google map location search.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.searchElement) {
                    // load Places Autocomplete
                    this.mapsAPILoader.load().then(function () {
                        /** @type {?} */
                        var field = _this.bridgeService.configuration.mergedFields.find(function (f) { return f.name === _this.searchElement.nativeElement.id; });
                        /** @type {?} */
                        var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, {});
                        autocomplete.addListener('place_changed', function () {
                            _this.ngZone.run(function () {
                                /** @type {?} */
                                var place = autocomplete.getPlace();
                                // verify result
                                if (place.geometry === undefined || place.geometry === null) {
                                    return;
                                }
                                /** @type {?} */
                                var latitude = place.geometry.location.lat();
                                /** @type {?} */
                                var longitude = place.geometry.location.lng();
                                field.defaultLocation = {
                                    latitude: latitude,
                                    longitude: longitude
                                };
                                field.zoom = 12;
                                /** @type {?} */
                                var marker = new Marker(place.geometry.location.lat(), place.geometry.location.lng(), field.markerSettings.defaultNewMarker.draggable, field.markerSettings.defaultNewMarker.infoHtml);
                                _this.addMarkersFromLocation(latitude, longitude);
                            });
                        });
                    });
                }
            };
        /**
         * \@description Add a marker from the clicked map location.
         * @param {?} latitude
         * @param {?} longitude
         * @return {?}
         */
        LocationFieldComponent.prototype.addMarkersFromLocation = /**
         * \@description Add a marker from the clicked map location.
         * @param {?} latitude
         * @param {?} longitude
         * @return {?}
         */
            function (latitude, longitude) {
                if (!this.field.data.value) {
                    this.field.data.value = [];
                }
                if (this.field.validation.max > 0 && this.field.data.value.length < this.field.validation.max) {
                    /** @type {?} */
                    var marker = new Marker(latitude, longitude, this.field.markerSettings.defaultNewMarker.draggable, this.field.markerSettings.defaultNewMarker.infoHtml);
                    marker.eventTriggers = this.field.markerSettings.defaultNewMarker.eventTriggers;
                    this.field.data.value.push(marker);
                }
            };
        /**
         * \@description Update the marker's position when drag is done.
         * @param {?} marker
         * @param {?} eventArguments
         * @return {?}
         */
        LocationFieldComponent.prototype.updateMarkerPosition = /**
         * \@description Update the marker's position when drag is done.
         * @param {?} marker
         * @param {?} eventArguments
         * @return {?}
         */
            function (marker, eventArguments) {
                marker.latitude = eventArguments.coords.lat;
                marker.longitude = eventArguments.coords.lng;
            };
        LocationFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-location-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <div class=\"search-location-container\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\">\n    <!-- input && display -->\n    <input #search\n           [id]=\"field.name\"\n           [name]=\"field.name\"\n           [title]=\"field.tooltip | translate\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           type=\"text\"\n           [class]=\"field.cssClasses.input\"\n           (keydown.enter)=\"$event.preventDefault()\">\n\n    <!-- icon -->\n    <span class=\"search-location-icon\">\n    </span>\n  </div>\n\n  <agm-map [latitude]=\"field.defaultLocation?.latitude\"\n           [longitude]=\"field.defaultLocation?.longitude\"\n           [zoom]=\"field.zoom\"\n           [zoomControl]=\"field.zoomControl\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           (mapClick)=\"addMarkers($event);validate();\">\n\n    <agm-marker *ngFor=\"let marker of field.data.value\"\n                (markerClick)=\"triggerDynamicEvent('markerClick', $event, marker);\"\n                [latitude]=\"marker.latitude\"\n                [longitude]=\"marker.longitude\"\n                [markerDraggable]=\"marker.draggable && bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (dragEnd)=\"updateMarkerPosition(marker, $event)\">\n\n      <agm-info-window *ngIf=\"marker.infoHtml\">\n        <div [innerHTML]=\"marker.infoHtml | translate\"></div>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["agm-map{width:100%;height:300px}span.search-location-icon:after{content:\"\\f002\";font:14px/2.5 FontAwesome;position:absolute;height:100%;color:#555}.search-location-container{position:relative}body.en :host ::ng-deep span.search-location-icon:after{right:5px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}body.ar :host ::ng-deep span.search-location-icon:after{left:5px}input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                    },] },
        ];
        /** @nocollapse */
        LocationFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: core.MapsAPILoader },
                { type: i0.NgZone }
            ];
        };
        LocationFieldComponent.propDecorators = {
            searchElement: [{ type: i0.ViewChild, args: ['search',] }]
        };
        return LocationFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaskFieldComponent = (function (_super) {
        __extends(MaskFieldComponent, _super);
        function MaskFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            /**
             * \@property Whether to validate for pattern.
             */
            _this.validateForPattern = true;
            return _this;
        }
        /**
         * \@description Updates the mask.
         * @param {?} mask current The new mask.
         * @return {?}
         */
        MaskFieldComponent.prototype.updateMask = /**
         * \@description Updates the mask.
         * @param {?} mask current The new mask.
         * @return {?}
         */
            function (mask) {
                this.inputMask._mask = mask;
                this.inputMask.initMask();
                this.inputMask.inputViewChild.nativeElement.blur();
                this.inputMask.inputViewChild.nativeElement.focus();
            };
        /**
         * \@description Updates the value.
         * @param {?} value current The new value.
         * @return {?}
         */
        MaskFieldComponent.prototype.updateMaskValue = /**
         * \@description Updates the value.
         * @param {?} value current The new value.
         * @return {?}
         */
            function (value) {
                this.inputMask.writeValue(value);
            };
        MaskFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-mask-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-inputMask [id]=\"field.name\"\n               [name]=\"field.name\"\n               [class]=\"field.cssClasses.input\"\n               [ngClass]=\"{'invalid': isValidationShown()}\"\n               [title]=\"field.tooltip | translate\"\n               [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n               #input=\"ngModel\"\n               [readonly]=\"field.readonly\"\n               [(ngModel)]=\"field.data.value\"\n               [mask]=\"field.validation.mask\"\n               [slotChar]=\"field.slotChar\"\n               [autoClear]=\"field.autoClear\"\n               [unmask]=\"field.unmask\"\n               [disabled]=\"field.disabled\"\n               [maxlength]=\"field.validation.length\"\n               [characterPattern]=\"field.validation.characterPattern\"\n               [pattern]=\"field.validation.pattern\"\n               *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n               (ngModelChange)=\"validate();triggerDynamicEvent('onChange', $event, field);\">\n  </p-inputMask>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        MaskFieldComponent.propDecorators = {
            inputMask: [{ type: i0.ViewChild, args: [inputmask.InputMask,] }]
        };
        return MaskFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DefaultMasterDetailFormComponent = (function () {
        function DefaultMasterDetailFormComponent(dialogRef, field) {
            this.dialogRef = dialogRef;
            this.field = field;
        }
        /** @description Adds a child and closes the dialog.
         * @param DefaultMasterDetailFormComponent current The current instance of the default master detail form component.
         * @param any triggeringField The field triggering the action.
        */
        /**
         * \@description Adds a child and closes the dialog.
         * @param {?} current
         * @param {?} triggeringField
         * @return {?}
         */
        DefaultMasterDetailFormComponent.prototype.addChild = /**
         * \@description Adds a child and closes the dialog.
         * @param {?} current
         * @param {?} triggeringField
         * @return {?}
         */
            function (current, triggeringField) {
                //current.detailsFormComponent.validateForm();
                //if (current.detailsFormComponent.configuration.validationErrors.length === 0) {
                //  const values = current.detailsFormComponent.getFormValues();
                //  current.dialogRef.close(values);
                //}
            };
        DefaultMasterDetailFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-default-master-detail-form',
                        template: "<mat-dialog-actions>\n    <button mat-dialog-close mat-button>\n        <i class=\"fa fa-times-circle\"\n           aria-hidden=\"true\">\n        </i>\n    </button>\n</mat-dialog-actions>\n\n<mat-dialog-content>\n    <ntw-dynamic-form #detailsForm\n                      [parentComponent]=\"this\"\n                      [configurationSourceUrl]=\"field.details.configurationSourceUrl\">\n    </ntw-dynamic-form>\n</mat-dialog-content>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DefaultMasterDetailFormComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: Field, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        DefaultMasterDetailFormComponent.propDecorators = {
            detailsFormComponent: [{ type: i0.ViewChild, args: ['detailsForm',] }]
        };
        return DefaultMasterDetailFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MasterDetailFieldComponent = (function (_super) {
        __extends(MasterDetailFieldComponent, _super);
        function MasterDetailFieldComponent(bridgeService, dialog) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.dialog = dialog;
            /**
             * \@property Whether to validate for range.
             */
            _this.validateForRange = true;
            return _this;
        }
        /** @description Opens the details dialog.*/
        /**
         * \@description Opens the details dialog.
         * @return {?}
         */
        MasterDetailFieldComponent.prototype.openDialog = /**
         * \@description Opens the details dialog.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var detailsDialog = this.dialog.open(DefaultMasterDetailFormComponent, {
                    data: this.field
                });
                detailsDialog.afterClosed().subscribe(function (result) {
                    console.log(result);
                });
            };
        MasterDetailFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-master-detail-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div>\n    <a href=\"javascript:;\"\n       (click)=\"openDialog();\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </div>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        MasterDetailFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: material.MatDialog }
            ];
        };
        return MasterDetailFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MultiSelectFieldComponent = (function (_super) {
        __extends(MultiSelectFieldComponent, _super);
        function MultiSelectFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for range.
             */
            _this.validateForRange = true;
            return _this;
        }
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        MultiSelectFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.field.data) {
                    this.field.data.value = [];
                    this.control.reset();
                    this.clearValidationErrors();
                }
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        MultiSelectFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    for (var i = 0; i < this.field.data.value.length; i++) {
                        /** @type {?} */
                        var value = this.field.data.value[i];
                        data.append(this.field.name + '[' + i + '].id', value.id);
                    }
                }
                return data;
            };
        MultiSelectFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-multi-select-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-multiSelect [options]=\"field.data.options\"\n                 [id]=\"field.name\"\n                 [name]=\"field.name\"\n                 [class]=\"field.cssClasses.input\"\n                 [ngClass]=\"{'invalid': isValidationShown()}\"\n                 [title]=\"field.tooltip | translate\"\n                 #input=\"ngModel\"\n                 [filterPlaceHolder]=\"field.placeholder | translate\"\n                 [(ngModel)]=\"field.data.value\"\n                 [required]=\"field.validation.required\"\n                 [disabled]=\"field.disabled\"\n                 [filter]=\"field.enablefilter\"\n                 optionLabel=\"name\"\n                 dataKey=\"id\"\n                 [defaultLabel]=\"field.placeholder | translate\"\n                 *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                 (onChange)=\"triggerDynamicEvent('onChange', $event, field);\"\n                 (ngModelChange)=\"validate();\">\n  </p-multiSelect>\n\n  <!-- display -->\n  <div [class]=\"field.cssClasses.display\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <ul>\n      <li *ngFor=\"let item of field?.data?.value\">{{item.name}}</li>\n    </ul>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host ::ng-deep .ui-multiselect.ui-widget{width:100%}:host ::ng-deep p-multiselect .ui-multiselect-label.ui-corner-all{margin-bottom:0;height:35px}body.ar :host ::ng-deep .ui-multiselect-filter-container{float:right}body.ar :host ::ng-deep .ui-multiselect-header .ui-multiselect-close{right:unset;left:.375em}body.ar :host ::ng-deep .ui-multiselect-panel .ui-multiselect-item{text-align:right!important}body.ar :host ::ng-deep p-multiselect .ui-corner-right{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep p-multiselect .ui-multiselect-label.ui-corner-all{padding-right:5px}"]
                    },] },
        ];
        return MultiSelectFieldComponent;
    }(BoundableFieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RadiobuttonFieldComponent = (function (_super) {
        __extends(RadiobuttonFieldComponent, _super);
        function RadiobuttonFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        RadiobuttonFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-radiobutton-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div class=\"radioButtonHolder\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\">\n    <p-radioButton *ngFor=\"let radiobutton of field.data.options; let i = index\"\n                   [id]=\"field.name+'_'+i\"\n                   [name]=\"field.name\"\n                   [(ngModel)]=\"field.data.value\"\n                   [class]=\"field.cssClasses.input\"\n                   [ngClass]=\"{'invalid': isValidationShown()}\"\n                   [title]=\"field.tooltip | translate\"\n                   #input=\"ngModel\"\n                   [required]=\"field.validation.required\"\n                   [label]=\" radiobutton.name | translate\"\n                   [value]=\"radiobutton.id\"\n                   [disabled]=\"field.disabled\"\n                   (onClick)=\"triggerDynamicEvent('onClick', $event, field);\"\n                   (ngModelChange)=\"validate();\">\n    </p-radioButton>\n  </div>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["p-radiobutton{display:block}"]
                    },] },
        ];
        return RadiobuttonFieldComponent;
    }(BoundableFieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RatingFieldComponent = (function (_super) {
        __extends(RatingFieldComponent, _super);
        function RatingFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        RatingFieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
                if (this.isFormInDisplayMode()) {
                    this.field.readonly = true;
                }
                if (!this.field.iconCancelClass) {
                    this.field.iconCancelClass = 'pi pi- ban';
                }
                if (!this.field.iconOnClass) {
                    this.field.iconOnClass = 'pi pi-star';
                }
                if (!this.field.iconOffClass) {
                    this.field.iconOffClass = 'pi pi-star-o';
                }
            };
        RatingFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-rating-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field?.cssClasses?.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input & display -->\n  <p-rating [id]=\"field.name\"\n            [name]=\"field.name\"\n            [(ngModel)]=\"field.data.value\"\n            [class]=\"field.cssClasses.input\"\n            [ngClass]=\"{'invalid': isValidationShown()}\"\n            [title]=\"field.tooltip | translate\"\n            [readonly]=\"field.readonly\"\n            [disabled]=\"field.disabled\"\n            [stars]=\"field.starNumber\"\n            [iconCancelClass]=\"field.iconCancelClass\"\n            [iconOnClass]=\"field.iconOnClass\"\n            [iconOffClass]=\"field.iconOffClass\"\n            [cancel]=\"field.cancelIcon && !field.readonly\"\n            (onRate)=\"triggerDynamicEvent('onRate', $event, field);validate();\"\n            (onCancel)=\"triggerDynamicEvent('onCancel', $event, field);validate();\">\n  </p-rating>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        return RatingFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectFieldComponent = (function (_super) {
        __extends(SelectFieldComponent, _super);
        function SelectFieldComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        SelectFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    data.append(this.field.name + '.id', this.field.data.value.id);
                }
                return data;
            };
        SelectFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-select-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-dropdown [options]=\"field.data.options\"\n              [id]=\"field.name\"\n              [name]=\"field.name\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [title]=\"field.tooltip | translate\"\n              #input=\"ngModel\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [(ngModel)]=\"field.data.value\"\n              [required]=\"field.validation.required\"\n              [disabled]=\"field.disabled\"\n              [filter]=\"field.enablefilter\"\n              optionLabel=\"name\"\n              dataKey=\"id\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onChange)=\"validate();triggerDynamicEvent('onChange', $event, field);\">\n  </p-dropdown>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.name}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: ["body.ar :host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{text-align:right}body.ar :host ::ng-deep p-dropdown .ui-dropdown .ui-dropdown-trigger{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep .ui-dropdown .ui-dropdown-label{padding-right:5px}"]
                    },] },
        ];
        return SelectFieldComponent;
    }(BoundableFieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TimeFieldComponent = (function (_super) {
        __extends(TimeFieldComponent, _super);
        function TimeFieldComponent(bridgeService, utilitiesService) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.utilitiesService = utilitiesService;
            /**
             * \@property Whether to validate for required.
             */
            _this.validateForRequired = true;
            return _this;
        }
        /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
        TimeFieldComponent.prototype.handleDefaultSettings = /**
         * \@description Handles the field's default settings.
         * @return {?}
         */
            function () {
                this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.setTime, this.field.setTime);
            };
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        TimeFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                if (this.field.data) {
                    this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.setTime, this.field.setTime);
                }
            };
        /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
        TimeFieldComponent.prototype.appendFormData = /**
         * \@description Appends the form data.
         * @param {?} data
         * @return {?} FormData The updated form data.
         */
            function (data) {
                if (this.field.data && this.field.data.value) {
                    data.append(this.field.name + '.hour', this.field.data.value.hour);
                    data.append(this.field.name + '.minute', this.field.data.value.minute);
                    data.append(this.field.name + '.meriden', this.field.data.value.meriden);
                    data.append(this.field.name + '.format', this.field.data.value.format);
                }
                return data;
            };
        /**
         * \@description Sets a time picker field's value once it is changed.
         * @param {?} newValue
         * @return {?}
         */
        TimeFieldComponent.prototype.setTimePickerFieldValue = /**
         * \@description Sets a time picker field's value once it is changed.
         * @param {?} newValue
         * @return {?}
         */
            function (newValue) {
                this.field.data.value = newValue;
            };
        TimeFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-time-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <ntw-mat-timepicker color=\"primary\"\n                      [inputClass]=\"field.cssClasses.input\"\n                      [ngClass]=\"{'invalid': isValidationShown()}\"\n                      [inputId]=\"field.name\"\n                      [inputName]=\"field.name\"\n                      [disabled]=\"field.disabled\"\n                      readonly=true\n                      [tooltip]=\"field.tooltip | translate\"\n                      [placeholderValue]=\"field.tooltip | translate\"\n                      [(userTime)]=\"field.data.value\"\n                      *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                      (userTimeChange)=\"setTimePickerFieldValue($event);validate();triggerDynamicEvent('onChange', $event, field);\">\n  </ntw-mat-timepicker>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.hour}}:{{field?.data?.value?.minute}}\n    <span *ngIf=\"field?.data?.value?.format == 12\">{{field?.data?.value?.meriden | translate}}</span>\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [":host ::ng-deep .time-picker-button.mat-button{position:absolute;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s;height:35px}body.en :host ::ng-deep .time-picker-button.mat-button{right:15px}body.ar :host ::ng-deep .time-picker-button.mat-button{left:15px}:host ::ng-deep .w-mat-timepicker .mat-button,:host ::ng-deep .w-mat-timepicker .mat-flat-button,:host ::ng-deep .w-mat-timepicker .mat-icon-button,:host ::ng-deep .w-mat-timepicker .mat-stroked-button{line-height:32px}:host ::ng-deep input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                    },] },
        ];
        /** @nocollapse */
        TimeFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: UtilitiesService }
            ];
        };
        return TimeFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RecaptchaFieldComponent = (function (_super) {
        __extends(RecaptchaFieldComponent, _super);
        function RecaptchaFieldComponent(bridgeService, languageService) {
            var _this = _super.call(this, bridgeService) || this;
            _this.bridgeService = bridgeService;
            _this.languageService = languageService;
            return _this;
        }
        /**
         * \@description Clears the field's value.
         * @return {?}
         */
        RecaptchaFieldComponent.prototype.clearValue = /**
         * \@description Clears the field's value.
         * @return {?}
         */
            function () {
                this.isValid = false;
                this.clearValidationErrors();
            };
        /**
         * \@description Validates the form control and updates its validation errors list.
         * @param {?=} eventArguments
         * @param {?=} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
        RecaptchaFieldComponent.prototype.validate = /**
         * \@description Validates the form control and updates its validation errors list.
         * @param {?=} eventArguments
         * @param {?=} isSubmit
         * @return {?} Array<InputError> The list of validation errors.
         */
            function (eventArguments, isSubmit) {
                this.preValidate(isSubmit);
                if (this.shouldValidate()) {
                    if (this.field.validation.required) {
                        if (!isSubmit) {
                            this.isValid = eventArguments != null;
                        }
                        if (!this.isValid) {
                            this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.requiredText));
                        }
                    }
                    this.updateValidationSummary();
                }
                return this.field.validationErrors;
            };
        /**
         * \@description Sets the captcha language.
         * @return {?}
         */
        RecaptchaFieldComponent.prototype.setCaptchaLanguge = /**
         * \@description Sets the captcha language.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var language = this.languageService.getLanguage();
                if (this.recaptchaElement) {
                    /** @type {?} */
                    var captchaIFrame = this.recaptchaElement.elementRef.nativeElement.querySelector('iframe');
                    if (captchaIFrame) {
                        /** @type {?} */
                        var src = captchaIFrame.getAttribute('src');
                        captchaIFrame.setAttribute('src', src.replace(/hl=(.*?)&/, 'hl=' + language + '&'));
                    }
                }
                this.isValid = false;
                this.clearValidationErrors();
            };
        RecaptchaFieldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-recaptcha-field',
                        template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <re-captcha #recaptcha\n              [id]=\"field.name\"\n              [siteKey]=\"field.siteKey\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [theme]=\"field.theme\"\n              [size]=\"field.size\"\n              [title]=\"field.tooltip | translate\"\n              (resolved)=\"validate($event);\">\n  </re-captcha>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        RecaptchaFieldComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: LanguageService }
            ];
        };
        RecaptchaFieldComponent.propDecorators = {
            recaptchaElement: [{ type: i0.ViewChild, args: ['recaptcha',] }]
        };
        return RecaptchaFieldComponent;
    }(FieldComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NextPreviousSectionComponent = (function () {
        function NextPreviousSectionComponent(bridgeService) {
            this.bridgeService = bridgeService;
        }
        /**
         * \@description Cycles through the sections.
         * @param {?} increment
         * @return {?}
         */
        NextPreviousSectionComponent.prototype.incrementSection = /**
         * \@description Cycles through the sections.
         * @param {?} increment
         * @return {?}
         */
            function (increment) {
                /** @type {?} */
                var newSectionId = this.bridgeService.configuration.currentSection.id + increment;
                if (newSectionId === 0) {
                    newSectionId = this.bridgeService.configuration.sections.length;
                }
                else if (newSectionId === this.bridgeService.configuration.sections.length + 1) {
                    newSectionId = 1;
                }
                this.bridgeService.configuration.currentSection = this.bridgeService.configuration.sections.find(function (s) { return s.id === newSectionId; });
            };
        NextPreviousSectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-next-previous-section',
                        template: "<div class=\"next-prev-container\">\n  <a class=\"arrow-prev\"\n     href=\"javascript:;\"\n     (click)=\"incrementSection(-1)\"\n     title=\"{{'buttons.Previous' | translate}}\">\n  </a>\n  <span class=\"next-prev-header\">{{bridgeService.configuration?.currentSection?.legend | translate}}</span>\n  <a class=\"arrow-next\"\n     href=\"javascript:;\"\n     (click)=\"incrementSection(1)\"\n     title=\"{{'buttons.Next' | translate}}\">\n  </a>\n</div>\n",
                        styles: [".next-prev-container a{text-decoration:none!important}.next-prev-container{text-align:center}.next-prev-header{font-size:2em;font-weight:700}body.en :host ::ng-deep a.arrow-prev:before{content:\"\\f104\";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next:before{content:\"\\f105\";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next{float:right}body.en :host ::ng-deep a.arrow-prev{float:left}body.ar :host ::ng-deep a.arrow-prev:before{content:\"\\f105\";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next:before{content:\"\\f104\";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next{float:left}body.ar :host ::ng-deep a.arrow-prev{float:right}"]
                    },] },
        ];
        /** @nocollapse */
        NextPreviousSectionComponent.ctorParameters = function () {
            return [
                { type: BridgeService }
            ];
        };
        return NextPreviousSectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TabsSectionComponent = (function () {
        function TabsSectionComponent(bridgeService) {
            this.bridgeService = bridgeService;
        }
        /**
         * \@description Switches the active section.
         * @param {?} section
         * @return {?}
         */
        TabsSectionComponent.prototype.switchSection = /**
         * \@description Switches the active section.
         * @param {?} section
         * @return {?}
         */
            function (section) {
                this.bridgeService.configuration.currentSection = section;
            };
        TabsSectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-tabs-section',
                        template: "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let section of bridgeService?.configuration?.sections\"\n      class=\"nav-item\">\n    <a class=\"nav-link\"\n       href=\"javascript:;\"\n       [ngClass]=\"{'active':section.id==bridgeService?.configuration?.currentSection?.id}\"\n       (click)=\"switchSection(section)\">\n      <span>{{section.legend | translate}}</span>\n      <span class=\"validation-errors-count\"\n            *ngIf=\"section.validationErrorsCount > 0\">\n      </span>\n    </a>\n  </li>\n</ul>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        TabsSectionComponent.ctorParameters = function () {
            return [
                { type: BridgeService }
            ];
        };
        return TabsSectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ValidationSummaryComponent = (function () {
        function ValidationSummaryComponent(bridgeService, languageService, changeDetectorRef) {
            this.bridgeService = bridgeService;
            this.languageService = languageService;
            this.changeDetectorRef = changeDetectorRef;
        }
        /** @description Shows the validation summary as an alert.*/
        /**
         * \@description Shows the validation summary as an alert.
         * @return {?}
         */
        ValidationSummaryComponent.prototype.showSummaryAlert = /**
         * \@description Shows the validation summary as an alert.
         * @return {?}
         */
            function () {
                if (this.bridgeService.configuration.settings.validationSummaryMode === ValidationSummaryModes.Alert) {
                    this.changeDetectorRef.detectChanges();
                    swal({
                        html: this.validationSummaryElement.nativeElement.innerHTML,
                        type: SwalTypes.Warning,
                        confirmButtonText: this.languageService.translations.buttons.Ok
                    });
                }
            };
        ValidationSummaryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-validation-summary',
                        template: "<div #validationSummary\n     class=\"validation-summary-container\"\n     [hidden]=\"bridgeService?.configuration?.settings?.validationSummaryMode !='List'\">\n  <div class=\"validation-summary\"\n       *ngIf=\"bridgeService?.configuration?.validationErrors?.length > 0\">\n    <span class=\"validation-summary-title-section\">{{'validations.ValidationSummaryErrors' | translate}}</span>\n    <ul>\n      <li class=\"validation-summary-error\" *ngFor=\"let error of bridgeService?.configuration?.validationErrors\">\n        {{error.message | translate}}\n      </li>\n    </ul>\n  </div>\n</div>\n",
                        styles: [".validation-summary{border:1px solid #d6d6d6;padding-top:15px;color:red;margin-bottom:20px}.validation-summary-title-section{font-weight:700;padding:15px 20px;display:block}.validation-summary-container{margin-top:20px}"]
                    },] },
        ];
        /** @nocollapse */
        ValidationSummaryComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: LanguageService },
                { type: i0.ChangeDetectorRef }
            ];
        };
        ValidationSummaryComponent.propDecorators = {
            validationSummaryElement: [{ type: i0.ViewChild, args: ['validationSummary',] }]
        };
        return ValidationSummaryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ProgressIndicatorComponent = (function () {
        function ProgressIndicatorComponent() {
        }
        ProgressIndicatorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-progress-indicator',
                        template: "<div class=\"progress-indicator-container\"\n     *ngIf=\"spinnerSourceUrl\">\n  <div class=\"progress-indicator\">\n    <img [src]=\"spinnerSourceUrl\"\n         class=\"progress-indicator-image\"\n         alt=\"progress\" />\n  </div>\n</div>\n",
                        styles: [""]
                    },] },
        ];
        ProgressIndicatorComponent.propDecorators = {
            spinnerSourceUrl: [{ type: i0.Input, args: ['spinnerSourceUrl',] }]
        };
        return ProgressIndicatorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicFormComponent = (function () {
        function DynamicFormComponent(bridgeService, httpRequestsService, localStorageService, utilitiesService, translateService, languageService, changeDetectorRef, translatePipe, route) {
            this.bridgeService = bridgeService;
            this.httpRequestsService = httpRequestsService;
            this.localStorageService = localStorageService;
            this.utilitiesService = utilitiesService;
            this.translateService = translateService;
            this.languageService = languageService;
            this.changeDetectorRef = changeDetectorRef;
            this.translatePipe = translatePipe;
            this.route = route;
            /**
             * \@property The onFormCleared event. Triggered when the form is cleared.
             */
            this.formCleared = new i0.EventEmitter();
            /**
             * \@property The onFormDataBound event. Triggered when the form is data bound.
             */
            this.formDataBound = new i0.EventEmitter();
            /**
             * \@property The onBeforeFormSaved event. Triggered before the form is saved.
             */
            this.beforeFormSaved = new i0.EventEmitter();
            /**
             * \@property The onAfterFormSaved event. Triggered after the form is saved.
             */
            this.afterFormSaved = new i0.EventEmitter();
            /**
             * \@property The onBeforeFormSubmitted event. Triggered before the form is submitted.
             */
            this.beforeFormSubmitted = new i0.EventEmitter();
            /**
             * \@property The onAfterFormSubmitted event. Triggered after the form is submitted.
             */
            this.afterFormSubmitted = new i0.EventEmitter();
            /**
             * \@property The list of all field components.
             */
            this.fieldComponents = new Array();
            /**
             * \@property The main configuration object.
             */
            this.configuration = new Configuration();
            /**
             * \@property Whether to show the progress indicator.
             */
            this.showProgressIndicator = true;
        }
        /**
         * @return {?}
         */
        DynamicFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.bridgeService.parentComponent = this.parentComponent;
                if (typeof this.additionalParameters === 'string') {
                    this.additionalParameters = JSON.parse(this.additionalParameters);
                }
                this.bridgeService.additionalParameters = this.additionalParameters;
                this.bindForm();
            };
        /**
         * \@description Clears the form.
         * @param {?} form
         * @return {?}
         */
        DynamicFormComponent.prototype.clearForm = /**
         * \@description Clears the form.
         * @param {?} form
         * @return {?}
         */
            function (form) {
                try {
                    for (var _a = __values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var fieldComponent = _b.value;
                        fieldComponent.clearValue();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.configuration.validationErrors = new Array();
                this.formCleared.emit();
                var e_1, _c;
            };
        /**
         * \@description Saves the form.
         * @param {?} form
         * @return {?}
         */
        DynamicFormComponent.prototype.saveForm = /**
         * \@description Saves the form.
         * @param {?} form
         * @return {?}
         */
            function (form) {
                var _this = this;
                try {
                    // trigger recaptcha validation if exists.
                    for (var _a = __values(this.recaptchaFieldComponents.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var recaptchaFieldComponents = _b.value;
                        recaptchaFieldComponents.validate(null, true);
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                if (this.isFormValid()) {
                    this.showProgressIndicator = true;
                    /** @type {?} */
                    var values_1 = this.getRequestBody();
                    this.beforeFormSaved.emit(values_1);
                    console.log(values_1);
                    /** @type {?} */
                    var endpoint = this.utilitiesService.replaceTokens(this.configuration.endpoints.save, this.route, this.bridgeService.additionalParameters);
                    this.httpRequestsService.post(endpoint, values_1).subscribe(function (response) {
                        console.log(response);
                        _this.afterFormSaved.emit(new ResponseEventArgs(true, response, values_1));
                        _this.showProgressIndicator = false;
                        if (_this.configuration.notifications.showResultMessage) {
                            swal({
                                title: _this.translatePipe.transform(_this.configuration.notifications.saveSuccessMessageTitle),
                                html: _this.translatePipe.transform(_this.configuration.notifications.saveSuccessMessageDetails),
                                type: SwalTypes.Success,
                                confirmButtonText: _this.languageService.translations.buttons.Ok
                            });
                        }
                    }, function (exception) {
                        console.error('saveForm: ', exception);
                        _this.afterFormSaved.emit(new ResponseEventArgs(false, exception, values_1));
                        _this.showProgressIndicator = false;
                        if (_this.configuration.notifications.showResultMessage) {
                            swal({
                                title: _this.translatePipe.transform(_this.configuration.notifications.saveErrorMessageTitle),
                                html: _this.translatePipe.transform(_this.configuration.notifications.saveErrorMessageDetails),
                                type: SwalTypes.Error,
                                confirmButtonText: _this.languageService.translations.buttons.Ok
                            });
                        }
                    });
                }
                var e_2, _c;
            };
        /**
         * \@description Submits the form.
         * @param {?} form
         * @return {?}
         */
        DynamicFormComponent.prototype.submitForm = /**
         * \@description Submits the form.
         * @param {?} form
         * @return {?}
         */
            function (form) {
                var _this = this;
                this.validateForm();
                if (this.isFormValid()) {
                    this.showProgressIndicator = true;
                    /** @type {?} */
                    var values_2 = this.getRequestBody();
                    this.beforeFormSubmitted.emit(values_2);
                    console.log(values_2);
                    /** @type {?} */
                    var endpoint = this.utilitiesService.replaceTokens(this.configuration.endpoints.submit, this.route, this.bridgeService.additionalParameters);
                    this.httpRequestsService.post(endpoint, values_2).subscribe(function (response) {
                        console.log(response);
                        _this.afterFormSubmitted.emit(new ResponseEventArgs(true, response, values_2));
                        _this.showProgressIndicator = false;
                        if (_this.configuration.notifications.showResultMessage) {
                            swal({
                                title: _this.translatePipe.transform(_this.configuration.notifications.submitSuccessMessageTitle),
                                html: _this.translatePipe.transform(_this.configuration.notifications.submitSuccessMessageDetails),
                                type: SwalTypes.Success,
                                confirmButtonText: _this.languageService.translations.buttons.Ok
                            });
                        }
                    }, function (exception) {
                        console.error('submitForm: ', exception);
                        _this.afterFormSubmitted.emit(new ResponseEventArgs(false, exception, values_2));
                        _this.showProgressIndicator = false;
                        if (_this.configuration.notifications.showResultMessage) {
                            swal({
                                title: _this.translatePipe.transform(_this.configuration.notifications.submitErrorMessageTitle),
                                html: _this.translatePipe.transform(_this.configuration.notifications.submitErrorMessageDetails),
                                type: SwalTypes.Error,
                                confirmButtonText: _this.languageService.translations.buttons.Ok
                            });
                        }
                    });
                }
                else {
                    this.validationSummaryComponent.showSummaryAlert();
                }
            };
        /**
         * \@description Validates the form.
         * @return {?}
         */
        DynamicFormComponent.prototype.validateForm = /**
         * \@description Validates the form.
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var fieldComponent = _b.value;
                        this.validateFormFieldComponent(fieldComponent);
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                var e_3, _c;
            };
        /**
         * \@description Gets whether the form is valid.
         * @return {?} boolean Whether the form is valid.
         */
        DynamicFormComponent.prototype.isFormValid = /**
         * \@description Gets whether the form is valid.
         * @return {?} boolean Whether the form is valid.
         */
            function () {
                return !this.configuration.validationErrors || this.configuration.validationErrors.length === 0;
            };
        /**
         * \@description Gets the request body.
         * @return {?} any source The request body.
         */
        DynamicFormComponent.prototype.getRequestBody = /**
         * \@description Gets the request body.
         * @return {?} any source The request body.
         */
            function () {
                if (this.configuration.settings.postMode === PostModes.FormData) {
                    return this.getFormData();
                }
                else {
                    return this.getFormValues();
                }
            };
        /**
         * \@description Gets the form field values.
         * @return {?} any source The form values.
         */
        DynamicFormComponent.prototype.getFormValues = /**
         * \@description Gets the form field values.
         * @return {?} any source The form values.
         */
            function () {
                /** @type {?} */
                var values = {};
                try {
                    for (var _a = __values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var fieldComponent = _b.value;
                        if (fieldComponent.field.data) {
                            values[fieldComponent.field.name] = fieldComponent.getValue();
                        }
                    }
                }
                catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_4)
                            throw e_4.error;
                    }
                }
                return values;
                var e_4, _c;
            };
        /**
         * \@description Gets the form field values.
         * @return {?} any source The form data.
         */
        DynamicFormComponent.prototype.getFormData = /**
         * \@description Gets the form field values.
         * @return {?} any source The form data.
         */
            function () {
                /** @type {?} */
                var data = new FormData();
                try {
                    for (var _a = __values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var fieldComponent = _b.value;
                        data = fieldComponent.appendFormData(data);
                    }
                }
                catch (e_5_1) {
                    e_5 = { error: e_5_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_5)
                            throw e_5.error;
                    }
                }
                return data;
                var e_5, _c;
            };
        /**
         * \@description Gets a field component reference by its name.
         * @param {?} name
         * @return {?} FieldComponent The field component reference.
         */
        DynamicFormComponent.prototype.getComponent = /**
         * \@description Gets a field component reference by its name.
         * @param {?} name
         * @return {?} FieldComponent The field component reference.
         */
            function (name) {
                return this.fieldComponents.find(function (fc) { return fc.field.name === name; });
            };
        /**
         * \@description Checks whether the button should be hidden.
         * @param {?} button
         * @return {?} FieldComponent Whether the button should be hidden.
         */
        DynamicFormComponent.prototype.isButtonHidden = /**
         * \@description Checks whether the button should be hidden.
         * @param {?} button
         * @return {?} FieldComponent Whether the button should be hidden.
         */
            function (button) {
                return (button && button.hidden) || (this.configuration.currentSection &&
                    this.configuration.currentSection.hideButtons &&
                    this.configuration.currentSection.hideButtons.indexOf(button.name) > -1);
            };
        /**
         * \@description Sets the form data.
         * @param {?} formData
         * @return {?}
         */
        DynamicFormComponent.prototype.setFormData = /**
         * \@description Sets the form data.
         * @param {?} formData
         * @return {?}
         */
            function (formData) {
                try {
                    for (var _a = __values(formData.fields), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var responseField = _b.value;
                        if (responseField.value) {
                            /** @type {?} */
                            var fieldComponent = this.getComponent(responseField.name);
                            if (fieldComponent) {
                                fieldComponent.updateValue(responseField);
                            }
                        }
                    }
                }
                catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_6)
                            throw e_6.error;
                    }
                }
                var e_6, _c;
            };
        /**
         * \@description Binds the dynamic form.
         * @return {?}
         */
        DynamicFormComponent.prototype.bindForm = /**
         * \@description Binds the dynamic form.
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    var dateFields, dateFields_1, dateFields_1_1, field, _a, _b, fieldComponent, e_7, _c, e_8, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: return [4 /*yield*/, this.loadConfiguration()];
                            case 1:
                                _e.sent();
                                dateFields = this.configuration.mergedFields.filter(function (f) { return f.fieldType === FieldTypes.DateTime; });
                                try {
                                    for (dateFields_1 = __values(dateFields), dateFields_1_1 = dateFields_1.next(); !dateFields_1_1.done; dateFields_1_1 = dateFields_1.next()) {
                                        field = dateFields_1_1.value;
                                        this.handleDefaultDateTimeSettings(field);
                                    }
                                }
                                catch (e_7_1) {
                                    e_7 = { error: e_7_1 };
                                }
                                finally {
                                    try {
                                        if (dateFields_1_1 && !dateFields_1_1.done && (_c = dateFields_1.return))
                                            _c.call(dateFields_1);
                                    }
                                    finally {
                                        if (e_7)
                                            throw e_7.error;
                                    }
                                }
                                this.changeDetectorRef.detectChanges();
                                this.fieldComponents = this.fieldComponents.concat(this.inputFieldComponents.toArray(), this.selectFieldComponents.toArray(), this.datetimeFieldComponents.toArray(), this.datetimeHijriFieldComponents.toArray(), this.checkboxFieldComponents.toArray(), this.radiobuttonFieldComponents.toArray(), this.multiSelectFieldComponents.toArray(), this.chipsFieldComponents.toArray(), this.editorFieldComponents.toArray(), this.maskFieldComponents.toArray(), this.timeFieldComponents.toArray(), this.locationFieldComponents.toArray(), this.fileUploadFieldComponents.toArray(), this.imageCropperFieldComponents.toArray(), this.recaptchaFieldComponents.toArray(), this.ratingFieldComponents.toArray());
                                this.handleDefaultSettings();
                                this.bindFormData();
                                try {
                                    for (_a = __values(this.locationFieldComponents.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                        fieldComponent = _b.value;
                                        fieldComponent.activateSearchInput();
                                    }
                                }
                                catch (e_8_1) {
                                    e_8 = { error: e_8_1 };
                                }
                                finally {
                                    try {
                                        if (_b && !_b.done && (_d = _a.return))
                                            _d.call(_a);
                                    }
                                    finally {
                                        if (e_8)
                                            throw e_8.error;
                                    }
                                }
                                this.translateService.onLangChange.subscribe(function (response) {
                                    if (_this.configuration.settings.formMode === FormModes.Display) {
                                        _this.bindFormData();
                                    }
                                    try {
                                        for (var _a = __values(_this.recaptchaFieldComponents.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                            var fieldComponent = _b.value;
                                            fieldComponent.setCaptchaLanguge();
                                        }
                                    }
                                    catch (e_9_1) {
                                        e_9 = { error: e_9_1 };
                                    }
                                    finally {
                                        try {
                                            if (_b && !_b.done && (_c = _a.return))
                                                _c.call(_a);
                                        }
                                        finally {
                                            if (e_9)
                                                throw e_9.error;
                                        }
                                    }
                                    var e_9, _c;
                                });
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * \@description Loads the configuration as a get request or from local storage.
         * @return {?}
         */
        DynamicFormComponent.prototype.loadConfiguration = /**
         * \@description Loads the configuration as a get request or from local storage.
         * @return {?}
         */
            function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, i, sourceFormSchemaUrl, sourceFormSchema, allFields, _loop_1, this_1, fieldName;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, this.utilitiesService.loadFile(this.configurationSourceUrl)];
                            case 1:
                                _a.configuration = _b.sent();
                                if (!!this.configuration.isLocal)
                                    return [3 /*break*/, 7];
                                if (!this.configuration.settings.sourceFormSchemas)
                                    return [3 /*break*/, 5];
                                i = this.configuration.settings.sourceFormSchemas.length - 1;
                                _b.label = 2;
                            case 2:
                                if (!(i >= 0))
                                    return [3 /*break*/, 5];
                                sourceFormSchemaUrl = this.configuration.settings.sourceFormSchemas[i];
                                return [4 /*yield*/, this.utilitiesService.loadFile(sourceFormSchemaUrl)];
                            case 3:
                                sourceFormSchema = _b.sent();
                                this.configuration = this.utilitiesService.mergeRecursive(sourceFormSchema, this.configuration);
                                _b.label = 4;
                            case 4:
                                i--;
                                return [3 /*break*/, 2];
                            case 5: return [4 /*yield*/, this.utilitiesService.loadFile(this.configuration.settings.allFieldsSource)];
                            case 6:
                                allFields = _b.sent();
                                if (!allFields.isLocal) {
                                    this.localStorageService.save(this.configuration.settings.allFieldsSource, allFields);
                                }
                                this.configuration.mergedFields = new Array();
                                _loop_1 = function (fieldName) {
                                    if (this_1.configuration.fields.hasOwnProperty(fieldName)) {
                                        /** @type {?} */
                                        var sourceField = allFields.fields.find(function (f) { return f.name === fieldName; });
                                        if (sourceField) {
                                            /** @type {?} */
                                            var mergedField = this_1.utilitiesService.mergeRecursive(sourceField, this_1.configuration.fields[fieldName]);
                                            this_1.configuration.mergedFields.push(mergedField);
                                        }
                                        else {
                                            console.warn("The field " + fieldName + " doesn't exist in the all-fields-list.");
                                        }
                                    }
                                };
                                this_1 = this;
                                // merge the field properties with the all fields list.
                                for (fieldName in this.configuration.fields) {
                                    _loop_1(fieldName);
                                }
                                this.localStorageService.save(this.configurationSourceUrl, this.configuration);
                                _b.label = 7;
                            case 7:
                                if (this.configuration.sections && this.configuration.sections.length > 0) {
                                    this.configuration.currentSection = this.configuration.sections[0];
                                }
                                this.bridgeService.configuration = this.configuration;
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * \@description Handles all fields' default settings.
         * @return {?}
         */
        DynamicFormComponent.prototype.handleDefaultSettings = /**
         * \@description Handles all fields' default settings.
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var fieldComponent = _b.value;
                        fieldComponent.handleDefaultSettings();
                    }
                }
                catch (e_10_1) {
                    e_10 = { error: e_10_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_10)
                            throw e_10.error;
                    }
                }
                var e_10, _c;
            };
        /**
         * \@description Handles a date field's default settings.
         * It is buggy if done from the component after it is loaded.
         * @param {?} field
         * @return {?}
         */
        DynamicFormComponent.prototype.handleDefaultDateTimeSettings = /**
         * \@description Handles a date field's default settings.
         * It is buggy if done from the component after it is loaded.
         * @param {?} field
         * @return {?}
         */
            function (field) {
                // in case of datetime field, parse the values from string to date and execute any functions.
                if (field.minDate) {
                    field.minDateValue = this.utilitiesService.evaluateFunctionOrDefault(field.minDate, new Date(field.minDate));
                }
                if (field.maxDate) {
                    field.maxDateValue = this.utilitiesService.evaluateFunctionOrDefault(field.maxDate, new Date(field.maxDate));
                }
                if (field.data.dateValue) {
                    field.data.value = this.utilitiesService.evaluateFunctionOrDefault(field.data.dateValue, new Date(field.data.dateValue));
                }
                if (field.defaultDate) {
                    field.defaultDateValue = this.utilitiesService.evaluateFunctionOrDefault(field.defaultDate, new Date(field.defaultDate));
                }
                if (field.minDateValue && field.maxDateValue) {
                    field.yearRange = field.minDateValue.getFullYear() + ':' + field.maxDateValue.getFullYear();
                }
            };
        /**
         * \@description Binds the form data.
         * @return {?}
         */
        DynamicFormComponent.prototype.bindFormData = /**
         * \@description Binds the form data.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.configuration.endpoints.get) {
                    /** @type {?} */
                    var endpoint = this.utilitiesService.replaceTokens(this.configuration.endpoints.get, this.route, this.bridgeService.additionalParameters);
                    this.httpRequestsService.get(endpoint).subscribe(function (response) {
                        _this.setFormData(response);
                        _this.formDataBound.emit(response);
                        _this.showProgressIndicator = false;
                    }, function (exception) {
                        console.error('bindFormData: ', exception);
                        _this.showProgressIndicator = false;
                        if (_this.configuration.notifications.showResultMessage) {
                            swal({
                                title: _this.translatePipe.transform(_this.configuration.notifications.getErrorMessageTitle),
                                html: _this.translatePipe.transform(_this.configuration.notifications.getErrorMessageDetails),
                                type: SwalTypes.Error,
                                confirmButtonText: _this.languageService.translations.buttons.Ok
                            });
                        }
                    });
                }
                else {
                    this.formDataBound.emit(null);
                    this.showProgressIndicator = false;
                }
            };
        /**
         * \@description Validates a form field component.
         * @param {?} fieldComponent
         * @return {?} Array<InputError> The list of validation errors.
         */
        DynamicFormComponent.prototype.validateFormFieldComponent = /**
         * \@description Validates a form field component.
         * @param {?} fieldComponent
         * @return {?} Array<InputError> The list of validation errors.
         */
            function (fieldComponent) {
                /** @type {?} */
                var fieldValidationErrors = new Array();
                if (!fieldComponent.field.hidden) {
                    fieldValidationErrors = fieldComponent.validate(null, true);
                }
                return fieldValidationErrors;
            };
        /**
         * \@description Triggers a dynamic event in case it is defined.
         * @param {?} eventType
         * @param {?} eventArguments
         * @param {?} source
         * @return {?}
         */
        DynamicFormComponent.prototype.triggerDynamicEvent = /**
         * \@description Triggers a dynamic event in case it is defined.
         * @param {?} eventType
         * @param {?} eventArguments
         * @param {?} source
         * @return {?}
         */
            function (eventType, eventArguments, source) {
                if (source.eventTriggers) {
                    /** @type {?} */
                    var event_1 = source.eventTriggers[eventType];
                    /** @type {?} */
                    var parentEventHandlerFunction = this.parentComponent[event_1];
                    if (parentEventHandlerFunction) {
                        parentEventHandlerFunction(this.parentComponent, source);
                    }
                }
            };
        DynamicFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ntw-dynamic-form',
                        template: "<div #container\n     class=\"container\">\n  <form class=\"dynamic-form-form\"\n        #f=\"ngForm\"\n        (ngSubmit)=\"submitForm(f)\"\n        [hidden]=\"showProgressIndicator\"\n        autocomplete=\"on\">\n    <div class=\"dynamic-form\">\n      <div class=\"sections sections-top\"\n           *ngIf=\"configuration?.settings?.sectionLocation == 'Top' || configuration?.settings?.sectionLocation == 'Both'\">\n        <!-- section tabs -->\n        <ntw-tabs-section *ngIf=\"configuration?.settings?.sectionMode == 'Tabs'\"></ntw-tabs-section>\n\n        <!-- next previous -->\n        <ntw-next-previous-section *ngIf=\"configuration?.settings?.sectionMode == 'NextPrevious'\"></ntw-next-previous-section>\n      </div>\n\n      <div class=\"clearfix\"></div>\n\n      <!-- form -->\n      <div class=\"form-container row\">\n        <div [class]=\"field.cssClasses.wrapper\"\n             *ngFor=\"let field of configuration?.mergedFields\">\n\n          <!-- info -->\n          <ntw-info-field [field]=\"field\"\n                          *ngIf=\"field.fieldType=='info'\">\n          </ntw-info-field>\n\n          <!-- text or number or password -->\n          <ntw-input-field [field]=\"field\"\n                           *ngIf=\"(field.fieldType=='text' || field.fieldType=='number' || field.fieldType=='password')\">\n          </ntw-input-field>\n\n          <!-- dropdown list -->\n          <ntw-select-field [field]=\"field\"\n                            *ngIf=\"field.fieldType=='select'\">\n          </ntw-select-field>\n\n          <!-- datetime picker -->\n          <ntw-datetime-field [field]=\"field\"\n                              *ngIf=\"field.fieldType=='datetime'\">\n          </ntw-datetime-field>\n\n          <!-- hijri datetime picker -->\n          <ntw-datetime-hijri-field [field]=\"field\"\n                                    *ngIf=\"field.fieldType=='datetimehijri'\">\n          </ntw-datetime-hijri-field>\n\n          <!-- time picker -->\n          <ntw-time-field [field]=\"field\"\n                          *ngIf=\"field.fieldType=='time'\">\n          </ntw-time-field>\n\n          <!-- checkbox list -->\n          <ntw-checkbox-field [field]=\"field\"\n                              *ngIf=\"field.fieldType=='checkbox'\">\n          </ntw-checkbox-field>\n\n          <!-- radiobutton list -->\n          <ntw-radiobutton-field [field]=\"field\"\n                                 *ngIf=\"field.fieldType=='radiobutton'\">\n          </ntw-radiobutton-field>\n\n          <!-- multiSelect list -->\n          <ntw-multi-select-field [field]=\"field\"\n                                  *ngIf=\"field.fieldType=='multiselect'\">\n          </ntw-multi-select-field>\n\n          <!-- chips -->\n          <ntw-chips-field [field]=\"field\"\n                           *ngIf=\"field.fieldType=='chips'\">\n          </ntw-chips-field>\n\n          <!-- editor -->\n          <ntw-editor-field [field]=\"field\"\n                            *ngIf=\"field.fieldType=='editor'\">\n          </ntw-editor-field>\n\n          <!-- mask -->\n          <ntw-mask-field [field]=\"field\"\n                          *ngIf=\"field.fieldType=='mask'\">\n          </ntw-mask-field>\n\n          <!-- location -->\n          <ntw-location-field [field]=\"field\"\n                              *ngIf=\"field.fieldType=='location'\">\n          </ntw-location-field>\n\n          <!-- file upload -->\n          <ntw-file-upload-field [field]=\"field\"\n                                 *ngIf=\"field.fieldType=='fileupload'\">\n          </ntw-file-upload-field>\n\n          <!-- Rating -->\n          <ntw-rating-field [field]=\"field\"\n                            *ngIf=\"field.fieldType=='rating'\">\n          </ntw-rating-field>\n\n          <!-- recaptcha -->\n          <ntw-recaptcha-field [field]=\"field\"\n                               *ngIf=\"field.fieldType=='recaptcha'\">\n          </ntw-recaptcha-field>\n\n          <!-- image cropper -->\n          <ntw-image-cropper-field [field]=\"field\"\n                                   *ngIf=\"field.fieldType=='imagecropper'\">\n          </ntw-image-cropper-field>\n\n          <!-- masterdetail -->\n          <ntw-master-detail-field [field]=\"field\"\n                                   *ngIf=\"field.fieldType=='masterdetail'\">\n          </ntw-master-detail-field>\n        </div>\n      </div>\n\n      <div class=\"clearfix\"></div>\n\n      <!-- validation summary -->\n      <ntw-validation-summary></ntw-validation-summary>\n\n      <!-- buttons -->\n      <div [class]=\"configuration?.buttons?.cssClass\"\n           data-html2canvas-ignore=\"true\">\n        <span class=\"main-buttons\"\n              *ngIf=\"configuration?.settings?.formMode != 'Display'\">\n          <button type=\"button\"\n                  [name]=\"configuration?.buttons?.main?.clear?.name\"\n                  [title]=\"configuration?.buttons?.main?.clear?.tooltip | translate\"\n                  [disabled]=\"configuration?.buttons?.main?.clear?.disabled\"\n                  [hidden]=\"isButtonHidden(configuration?.buttons?.main?.clear)\"\n                  [class]=\"configuration?.buttons?.main?.clear?.cssClass\"\n                  (click)=\"clearForm(f)\">\n            {{configuration?.buttons?.main?.clear?.label | translate}}\n          </button>\n          <button type=\"button\"\n                  [name]=\"configuration?.buttons?.main?.save?.name\"\n                  [title]=\"configuration?.buttons?.main?.save?.tooltip | translate\"\n                  [disabled]=\"configuration?.buttons?.main?.save?.disabled\"\n                  [hidden]=\"isButtonHidden(configuration?.buttons?.main?.save)\"\n                  [class]=\"configuration?.buttons?.main?.save?.cssClass\"\n                  (click)=\"saveForm(f)\">\n            {{configuration?.buttons?.main?.save?.label | translate}}\n          </button>\n          <button type=\"submit\"\n                  [name]=\"configuration?.buttons?.main?.submit?.name\"\n                  [title]=\"configuration?.buttons?.main?.submit?.tooltip | translate\"\n                  [disabled]=\"configuration?.buttons?.main?.submit?.disabled\"\n                  [hidden]=\"isButtonHidden(configuration?.buttons?.main?.submit)\"\n                  [class]=\"configuration?.buttons?.main?.submit?.cssClass\">\n            {{configuration?.buttons?.main?.submit?.label | translate}}\n          </button>\n        </span>\n\n        <span class=\"additional-buttons\">\n          <button *ngFor=\"let button of configuration?.buttons?.additionalButtons\"\n                  type=\"button\"\n                  [name]=\"button?.name\"\n                  [title]=\"button?.tooltip | translate\"\n                  [disabled]=\"button?.disabled\"\n                  [hidden]=\"isButtonHidden(button)\"\n                  [class]=\"button?.cssClass\"\n                  (click)=\"triggerDynamicEvent('click', $event, button);\">\n            {{button?.label | translate}}\n          </button>\n        </span>\n      </div>\n\n      <div class=\"sections sections-bottom\"\n           *ngIf=\"configuration?.settings?.sectionLocation == 'Bottom' || configuration?.settings?.sectionLocation == 'Both'\">\n        <!-- section tabs -->\n        <ntw-tabs-section *ngIf=\"configuration?.settings?.sectionMode == 'Tabs'\"></ntw-tabs-section>\n\n        <!-- next previous -->\n        <ntw-next-previous-section *ngIf=\"configuration?.settings?.sectionMode == 'NextPrevious'\"></ntw-next-previous-section>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"clearfix\"></div>\n\n  <ntw-progress-indicator *ngIf=\"showProgressIndicator\"\n                          [spinnerSourceUrl]=\"configuration?.settings?.spinnerSourceUrl\"></ntw-progress-indicator>\n</div>\n",
                        styles: [".formButtons{margin:20px 0}body.ar .main-buttons button{margin-left:10px}body.en .main-buttons button{margin-right:10px}body.ar{direction:rtl!important;text-align:right!important}body.en{direction:ltr!important;text-align:left!important}.ui-dropdown,input.form-input,input.ui-inputtext.ui-widget.ui-state-default,p-dropdown{width:100%!important;height:35px}.input-container{margin-top:24px}label.form-label{font-weight:700}span.required-asterisk{color:red}p.error,p.validation-error{display:block;color:red}.result img{width:150px;height:150px}.form-display{display:block}w-clock *{box-sizing:content-box!important}"],
                        providers: [i1$1.TranslatePipe, BridgeService, UtilitiesService],
                        // provide the bridge service here in order to have a different instance per form instance.
                        encapsulation: i0.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        DynamicFormComponent.ctorParameters = function () {
            return [
                { type: BridgeService },
                { type: HttpRequestsService },
                { type: LocalStorageService },
                { type: UtilitiesService },
                { type: i1$1.TranslateService },
                { type: LanguageService },
                { type: i0.ChangeDetectorRef },
                { type: i1$1.TranslatePipe },
                { type: router.ActivatedRoute, decorators: [{ type: i0.Optional }] }
            ];
        };
        DynamicFormComponent.propDecorators = {
            configurationSourceUrl: [{ type: i0.Input, args: ['configurationSourceUrl',] }],
            parentComponent: [{ type: i0.Input, args: ['parentComponent',] }],
            additionalParameters: [{ type: i0.Input, args: ['additionalParameters',] }],
            formCleared: [{ type: i0.Output }],
            formDataBound: [{ type: i0.Output }],
            beforeFormSaved: [{ type: i0.Output }],
            afterFormSaved: [{ type: i0.Output }],
            beforeFormSubmitted: [{ type: i0.Output }],
            afterFormSubmitted: [{ type: i0.Output }],
            containerElement: [{ type: i0.ViewChild, args: ['container',] }],
            validationSummaryComponent: [{ type: i0.ViewChild, args: [ValidationSummaryComponent,] }],
            inputFieldComponents: [{ type: i0.ViewChildren, args: [InputFieldComponent,] }],
            selectFieldComponents: [{ type: i0.ViewChildren, args: [SelectFieldComponent,] }],
            datetimeFieldComponents: [{ type: i0.ViewChildren, args: [DatetimeFieldComponent,] }],
            datetimeHijriFieldComponents: [{ type: i0.ViewChildren, args: [DatetimeHijriFieldComponent,] }],
            checkboxFieldComponents: [{ type: i0.ViewChildren, args: [CheckboxFieldComponent,] }],
            radiobuttonFieldComponents: [{ type: i0.ViewChildren, args: [RadiobuttonFieldComponent,] }],
            multiSelectFieldComponents: [{ type: i0.ViewChildren, args: [MultiSelectFieldComponent,] }],
            chipsFieldComponents: [{ type: i0.ViewChildren, args: [ChipsFieldComponent,] }],
            editorFieldComponents: [{ type: i0.ViewChildren, args: [EditorFieldComponent,] }],
            maskFieldComponents: [{ type: i0.ViewChildren, args: [MaskFieldComponent,] }],
            timeFieldComponents: [{ type: i0.ViewChildren, args: [TimeFieldComponent,] }],
            locationFieldComponents: [{ type: i0.ViewChildren, args: [LocationFieldComponent,] }],
            fileUploadFieldComponents: [{ type: i0.ViewChildren, args: [FileUploadFieldComponent,] }],
            imageCropperFieldComponents: [{ type: i0.ViewChildren, args: [ImageCropperFieldComponent,] }],
            recaptchaFieldComponents: [{ type: i0.ViewChildren, args: [RecaptchaFieldComponent,] }],
            ratingFieldComponents: [{ type: i0.ViewChildren, args: [RatingFieldComponent,] }]
        };
        return DynamicFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NetwaysLibModule = (function () {
        function NetwaysLibModule() {
        }
        NetwaysLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            WMatTimePickerComponent,
                            WTimeDialogComponent,
                            WClockComponent,
                            WTimeComponent,
                            FieldComponent,
                            BoundableFieldComponent,
                            InputFieldComponent,
                            SelectFieldComponent,
                            DatetimeFieldComponent,
                            DatetimeHijriFieldComponent,
                            CheckboxFieldComponent,
                            RadiobuttonFieldComponent,
                            MultiSelectFieldComponent,
                            ChipsFieldComponent,
                            EditorFieldComponent,
                            MaskFieldComponent,
                            TimeFieldComponent,
                            LocationFieldComponent,
                            FileUploadFieldComponent,
                            RecaptchaFieldComponent,
                            InfoFieldComponent,
                            MasterDetailFieldComponent,
                            ImageCropperFieldComponent,
                            RatingFieldComponent,
                            TabsSectionComponent,
                            NextPreviousSectionComponent,
                            ValidationSummaryComponent,
                            ProgressIndicatorComponent,
                            DefaultMasterDetailFormComponent,
                            DynamicFormComponent
                        ],
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            animations.BrowserAnimationsModule,
                            flexLayout.FlexLayoutModule,
                            inputtext.InputTextModule,
                            calendar.CalendarModule,
                            checkbox.CheckboxModule,
                            radiobutton.RadioButtonModule,
                            fileupload.FileUploadModule,
                            editor.EditorModule,
                            inputmask.InputMaskModule,
                            chips.ChipsModule,
                            dropdown.DropdownModule,
                            multiselect.MultiSelectModule,
                            material.MatDialogModule,
                            material.MatToolbarModule,
                            material.MatInputModule,
                            material.MatSnackBarModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatFormFieldModule,
                            material.MatIconModule,
                            material.MatSelectModule,
                            ng2ImgCropper.ImageCropperModule,
                            rating.RatingModule,
                            recaptchaCommon_module.RecaptchaCommonModule,
                            recaptcha_module.RecaptchaModule.forRoot(),
                            ngBootstrap.NgbModule.forRoot(),
                            i1$1.TranslateModule.forRoot({
                                loader: {
                                    provide: i1$1.TranslateLoader,
                                    useFactory: HttpLoaderFactory,
                                    deps: [i1.HttpClient]
                                }
                            }),
                            core.AgmCoreModule.forRoot({
                                apiKey: 'AIzaSyDkk4mAY1r5Q-abux5POCscTR0LojWMwUo',
                                libraries: ['places'],
                                region: 'LB',
                                language: 'en'
                            })
                        ],
                        entryComponents: [
                            DefaultMasterDetailFormComponent,
                            WMatTimePickerComponent,
                            WTimeDialogComponent
                        ],
                        exports: [
                            WMatTimePickerComponent,
                            WTimeDialogComponent,
                            WClockComponent,
                            WTimeComponent,
                            FieldComponent,
                            BoundableFieldComponent,
                            InputFieldComponent,
                            SelectFieldComponent,
                            DatetimeFieldComponent,
                            DatetimeHijriFieldComponent,
                            CheckboxFieldComponent,
                            RadiobuttonFieldComponent,
                            MultiSelectFieldComponent,
                            ChipsFieldComponent,
                            EditorFieldComponent,
                            MaskFieldComponent,
                            TimeFieldComponent,
                            LocationFieldComponent,
                            FileUploadFieldComponent,
                            RecaptchaFieldComponent,
                            InfoFieldComponent,
                            MasterDetailFieldComponent,
                            ImageCropperFieldComponent,
                            RatingFieldComponent,
                            TabsSectionComponent,
                            NextPreviousSectionComponent,
                            ValidationSummaryComponent,
                            ProgressIndicatorComponent,
                            DefaultMasterDetailFormComponent,
                            DynamicFormComponent
                        ]
                    },] },
        ];
        return NetwaysLibModule;
    }());
    /**
     * @param {?} http
     * @return {?}
     */
    function HttpLoaderFactory(http) {
        return new httpLoader.TranslateHttpLoader(http);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.coreDirectives = core_module.coreDirectives;
    exports.AgmCoreModule = core_module.AgmCoreModule;
    exports.BridgeService = BridgeService;
    exports.IslamicI18n = IslamicI18n;
    exports.ExportService = ExportService;
    exports.HttpRequestsService = HttpRequestsService;
    exports.LanguageService = LanguageService;
    exports.LocalStorageService = LocalStorageService;
    exports.UtilitiesService = UtilitiesService;
    exports.AllFields = AllFields;
    exports.Configuration = Configuration;
    exports.DefaultLocation = DefaultLocation;
    exports.Endpoints = Endpoints;
    exports.FormModes = FormModes;
    exports.ValidationSummaryModes = ValidationSummaryModes;
    exports.SectionModes = SectionModes;
    exports.PostModes = PostModes;
    exports.SwalTypes = SwalTypes;
    exports.FieldTypes = FieldTypes;
    exports.Field = Field;
    exports.FieldData = FieldData;
    exports.FieldValidation = FieldValidation;
    exports.InputError = InputError;
    exports.Marker = Marker;
    exports.MarkerSettings = MarkerSettings;
    exports.MarkerSettingsDefault = MarkerSettingsDefault;
    exports.MasterDetailDetails = MasterDetailDetails;
    exports.Notifications = Notifications;
    exports.Section = Section;
    exports.Settings = Settings;
    exports.ResponseEventArgs = ResponseEventArgs;
    exports.WMatTimePickerComponent = WMatTimePickerComponent;
    exports.WTimeDialogComponent = WTimeDialogComponent;
    exports.UserTimeData = UserTimeData;
    exports.CLOCK_TYPE = CLOCK_TYPE;
    exports.WClockComponent = WClockComponent;
    exports.WTimeComponent = WTimeComponent;
    exports.FieldComponent = FieldComponent;
    exports.BoundableFieldComponent = BoundableFieldComponent;
    exports.CheckboxFieldComponent = CheckboxFieldComponent;
    exports.ChipsFieldComponent = ChipsFieldComponent;
    exports.DatetimeFieldComponent = DatetimeFieldComponent;
    exports.DatetimeHijriFieldComponent = DatetimeHijriFieldComponent;
    exports.EditorFieldComponent = EditorFieldComponent;
    exports.FileUploadFieldComponent = FileUploadFieldComponent;
    exports.ImageCropperFieldComponent = ImageCropperFieldComponent;
    exports.InfoFieldComponent = InfoFieldComponent;
    exports.InputFieldComponent = InputFieldComponent;
    exports.LocationFieldComponent = LocationFieldComponent;
    exports.MaskFieldComponent = MaskFieldComponent;
    exports.MasterDetailFieldComponent = MasterDetailFieldComponent;
    exports.MultiSelectFieldComponent = MultiSelectFieldComponent;
    exports.RadiobuttonFieldComponent = RadiobuttonFieldComponent;
    exports.RatingFieldComponent = RatingFieldComponent;
    exports.SelectFieldComponent = SelectFieldComponent;
    exports.TimeFieldComponent = TimeFieldComponent;
    exports.RecaptchaFieldComponent = RecaptchaFieldComponent;
    exports.DefaultMasterDetailFormComponent = DefaultMasterDetailFormComponent;
    exports.NextPreviousSectionComponent = NextPreviousSectionComponent;
    exports.TabsSectionComponent = TabsSectionComponent;
    exports.ValidationSummaryComponent = ValidationSummaryComponent;
    exports.ProgressIndicatorComponent = ProgressIndicatorComponent;
    exports.DynamicFormComponent = DynamicFormComponent;
    exports.NetwaysLibModule = NetwaysLibModule;
    exports.HttpLoaderFactory = HttpLoaderFactory;
    exports.ɵg = Field;
    exports.ɵa = BridgeService;
    exports.ɵf = IslamicI18n;
    exports.ɵb = HttpRequestsService;
    exports.ɵe = LanguageService;
    exports.ɵd = LocalStorageService;
    exports.ɵc = UtilitiesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d2F5cy1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvYnJpZGdlLnNlcnZpY2UudHMiLG51bGwsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL2RhdGVwaWNrZXItY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL2V4cG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2FsbC1maWVsZHMudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvY29uZmlndXJhdGlvbi50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9kZWZhdWx0LWxvY2F0aW9uLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2VuZHBvaW50cy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9lbnVtcy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9maWVsZC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9maWVsZC1kYXRhLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2ZpZWxkLXZhbGlkYXRpb24udHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvaW5wdXQtZXJyb3IudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFwLW1hcmtlci50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9tYXJrZXItc2V0dGluZ3MudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFya2V0LXNldHRpbmdzLWRlZmF1bHQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFzdGVyLWRldGFpbC1kZXRhaWxzLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL25vdGlmaWNhdGlvbnMudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvc2VjdGlvbi50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9zZXR0aW5ncy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9yZXNwb25zZS1ldmVudC1hcmdzLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS1kaWFsb2cvdy10aW1lLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LW1hdC10aW1lcGlja2VyL3ctbWF0LXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lL3ctdGltZS5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9maWVsZC9maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoZWNrYm94LWZpZWxkL2NoZWNrYm94LWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoaXBzLWZpZWxkL2NoaXBzLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWZpZWxkL2RhdGV0aW1lLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2VkaXRvci1maWVsZC9lZGl0b3ItZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW1hZ2UtY3JvcHBlci1maWVsZC9pbWFnZS1jcm9wcGVyLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2luZm8tZmllbGQvaW5mby1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9sb2NhdGlvbi1maWVsZC9sb2NhdGlvbi1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL21hc3Rlci1kZXRhaWwtZmllbGQvbWFzdGVyLWRldGFpbC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tdWx0aS1zZWxlY3QtZmllbGQvbXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhZGlvYnV0dG9uLWZpZWxkL3JhZGlvYnV0dG9uLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhdGluZy1maWVsZC9yYXRpbmctZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy90aW1lLWZpZWxkL3RpbWUtZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvbmV4dC1wcmV2aW91cy1zZWN0aW9uL25leHQtcHJldmlvdXMtc2VjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvdGFicy1zZWN0aW9uL3RhYnMtc2VjdGlvbi5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvdmFsaWRhdGlvbi1zdW1tYXJ5L3ZhbGlkYXRpb24tc3VtbWFyeS5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbmV0d2F5cy1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE5ldHdheXNMaWJNb2R1bGUgfSBmcm9tICcuLi9uZXR3YXlzLWxpYi5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEJyaWRnZVNlcnZpY2Uge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNvbmZpZ3VyYXRpb24uKi9cclxuICBwdWJsaWMgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcGFyZW50IGNvbXBvbmVudCBob3N0aW5nIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwdWJsaWMgcGFyZW50Q29tcG9uZW50OiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy4qL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsUGFyYW1ldGVyczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0LCBOZ2JEYXRlcGlja2VySTE4biB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IEkxOE5fVkFMVUVTID0ge1xyXG4gIHdlZWtkYXlzOiBbJ8OYwqXDmMKrJywgJ8OYwqvDmcKEJywgJ8OYwqPDmMKxJywgJ8OYwq7DmcKFJywgJ8OYwqzDmcKFJywgJ8OYwrPDmMKoJywgJ8OYwqPDmMKtJ10sXHJcbiAgbW9udGhzOiBbJ8OZwoXDmMKtw5jCscOZwoUnLCAnw5jCtcOZwoHDmMKxJywgJ8OYwrHDmMKow5nCisOYwrkgw5jCp8OZwoTDmMKjw5nCiMOZwoQnLCAnw5jCscOYwqjDmcKKw5jCuSDDmMKnw5nChMOYwqLDmMKuw5jCsScsICfDmMKsw5nChcOYwqfDmMKvw5nCiSDDmMKnw5nChMOYwqPDmcKIw5nChMOZwoknLCAnw5jCrMOZwoXDmMKnw5jCr8OZwokgw5jCp8OZwoTDmMKiw5jCrsOYwrHDmMKpJywgJ8OYwrHDmMKsw5jCqCcsICfDmMK0w5jCucOYwqjDmMKnw5nChicsICfDmMKxw5nChcOYwrbDmMKnw5nChicsICfDmMK0w5nCiMOYwqfDmcKEJyxcclxuICAgICfDmMKww5nCiCDDmMKnw5nChMOZwoLDmMK5w5jCr8OYwqknLCAnw5jCsMOZwoggw5jCp8OZwoTDmMKtw5jCrMOYwqknXVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIElzbGFtaWNJMThuIGV4dGVuZHMgTmdiRGF0ZXBpY2tlckkxOG4ge1xyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgd2Vla2RheSBzaG9ydCBuYW1lLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgd2Vla2RheSBUaGUgd2Vla2RheS5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgd2Vla2RheSBzaG9ydCBuYW1lLlxyXG4gICovXHJcbiAgcHVibGljIGdldFdlZWtkYXlTaG9ydE5hbWUod2Vla2RheTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBJMThOX1ZBTFVFUy53ZWVrZGF5c1t3ZWVrZGF5IC0gMV07XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHdlZWtkYXkgc2hvcnQgbmFtZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIG1vbnRoIFRoZSBtb250aC5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgbW9udGggc2hvcnQgbmFtZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRNb250aFNob3J0TmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBJMThOX1ZBTFVFUy5tb250aHNbbW9udGggLSAxXTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgbW9udGggZnVsbCBuYW1lLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgbW9udGggVGhlIG1vbnRoLlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSBtb250aCBmdWxsIG5hbWUuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0TW9udGhGdWxsTmFtZShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmdldE1vbnRoU2hvcnROYW1lKG1vbnRoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZGF5IGFyaWEgbGFiZWwuXHJcbiAgICogQHBhcmFtIE5nYkRhdGVTdHJ1Y3QgZGF0ZSBUaGUgZGF0ZS5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgZGF5IGFyaWEgbGFiZWwuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0RGF5QXJpYUxhYmVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke2RhdGUuZGF5fS0ke2RhdGUubW9udGh9LSR7ZGF0ZS55ZWFyfWA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5cclxuY29uc3QgZXhjZWxFeHRlbnNpb24gPSAnLnhsc3gnO1xyXG5jb25zdCBwZGZUeXBlID0gJ2FwcGxpY2F0aW9uL3BkZic7XHJcbmNvbnN0IHBkZkV4dGVuc2lvbiA9ICcucGRmJztcclxuXHJcbmRlY2xhcmUgbGV0IGh0bWwyY2FudmFzLCBwZGZNYWtlO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEV4cG9ydFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyBhIGpzb24gb2JqZWN0IGFzIGFuIGV4Y2VsIGZpbGUuXHJcbiAgICogQHBhcmFtIGFueSBqc29uIFRoZSBqc29uIG9iamVjdC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVOYW1lIFRoZSBleGNlbCBmaWxlIG5hbWUuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gcnRsIFdoZXRoZXIgcmlnaHQgdG8gbGVmdCBvciBsZWZ0IHRvIHJpZ2h0LlxyXG4gICAqIEBwYXJhbSBib29sZWFuIHNraXBIZWFkZXIgV2hldGhlciB0byBza2lwIHRoZSBoZWFkZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgZXhwb3J0QXNFeGNlbChqc29uOiBhbnlbXSwgZmlsZU5hbWU6IHN0cmluZywgcnRsOiBib29sZWFuID0gdHJ1ZSwgc2tpcEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAvLyBnZW5lcmF0ZSB3b3Jrc2hlZXRcclxuICAgIGNvbnN0IHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoanNvbiwgeyBza2lwSGVhZGVyOiBza2lwSGVhZGVyIH0pO1xyXG5cclxuICAgIGNvbnN0IHdvcmtib29rOiBYTFNYLldvcmtCb29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xyXG5cclxuICAgIGlmICghd29ya2Jvb2suV29ya2Jvb2spIHtcclxuICAgICAgd29ya2Jvb2suV29ya2Jvb2sgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdvcmtib29rLldvcmtib29rLlZpZXdzKSB7XHJcbiAgICAgIHdvcmtib29rLldvcmtib29rLlZpZXdzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3b3JrYm9vay5Xb3JrYm9vay5WaWV3c1swXSkge1xyXG4gICAgICB3b3JrYm9vay5Xb3JrYm9vay5WaWV3c1swXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmtib29rLldvcmtib29rLlZpZXdzWzBdLlJUTCA9IHJ0bDtcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB3b3JrYm9vayBhbmQgYWRkIHRoZSB3b3Jrc2hlZXRcclxuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya2Jvb2ssIHdvcmtzaGVldCwgJ2RhdGEnKTtcclxuXHJcbiAgICAvLyBzYXZlIHRvIGZpbGUgKlxyXG4gICAgWExTWC53cml0ZUZpbGUod29ya2Jvb2ssIGZpbGVOYW1lICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBleGNlbEV4dGVuc2lvbik7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgYW4gaHRtbCBzdHJpbmcgYXMgcGRmLlxyXG4gICAgKiBAcGFyYW0gc3RyaW5nIGh0bWwgVGhlIGh0bWwgdG8gcHJpbnQuXHJcbiAgICAqIEBwYXJhbSBBcnJheTxudW1iZXI+IG1hcmdpbnMgVGhlIHBkZiBwYWdlIG1hcmdpbnMuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmcgZmlsZU5hbWUgVGhlIHBkZiBmaWxlIG5hbWUuXHJcbiAgICAqIEBwYXJhbSBhbnkgc2l6ZSBUaGUgcGRmIHNpemUuXHJcbiAgKi9cclxuICBwdWJsaWMgZXhwb3J0QXNQZGYoaHRtbDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBzaXplOiBhbnkgPSAnQTQnLCBtYXJnaW5zOiBBcnJheTxudW1iZXI+ID0gWzAsIDBdKSB7XHJcbiAgICBpZiAoaHRtbCkge1xyXG4gICAgICBodG1sMmNhbnZhcyhodG1sKS50aGVuKGNhbnZhcyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVVyaSA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG9jRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgIHBhZ2VTaXplOiBzaXplLFxyXG4gICAgICAgICAgcGFnZU1hcmdpbnM6IG1hcmdpbnMsXHJcbiAgICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbWFnZTogZGF0YVVyaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGRmTWFrZS5jcmVhdGVQZGYoZG9jRGVmaW5pdGlvbikuZ2V0QmxvYigoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9tcHRGaWxlU2F2ZShmaWxlLCBwZGZUeXBlLCBmaWxlTmFtZSwgcGRmRXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgYSBmaWxlIGFzIHBkZi5cclxuICAgKiBAcGFyYW0gYW55IGJ1ZmZlciBUaGUgZmlsZSBidWZmZXIuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlVHlwZSBUaGUgZmlsZSBtaW1lIHR5cGUuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlTmFtZSBUaGUgZmlsZSBuYW1lLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZUV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24uXHJcbiAgKi9cclxuICBwdWJsaWMgcHJvbXB0RmlsZVNhdmUoYnVmZmVyOiBhbnksIGZpbGVUeXBlOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGZpbGVFeHRlbnNpb246IHN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YTogQmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7XHJcbiAgICAgIHR5cGU6IGZpbGVUeXBlXHJcbiAgICB9KTtcclxuXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGRhdGEsIGZpbGVOYW1lICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBmaWxlRXh0ZW5zaW9uKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0c1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeGVjdXRlcyBhIGdldCByZXF1ZXN0IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50VXJsIFRoZSBlbmRwb2ludCBVcmwuXHJcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGFueT4gVGhlIHJlc3BvbnNlLlxyXG4gICovXHJcbiAgcHVibGljIGdldChlbmRwb2ludFVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8YW55PihlbmRwb2ludFVybCwgeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBwb3N0IHJlcXVlc3QgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnRVcmwgVGhlIGVuZHBvaW50IFVybC5cclxuICAgKiBAcGFyYW0gYW55IHJlcXVlc3QgVGhlIHJlcXVlc3QgcGF5bG9hZC5cclxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8YW55PiBUaGUgcmVzcG9uc2UuXHJcbiAgKi9cclxuICBwdWJsaWMgcG9zdChlbmRwb2ludFVybDogc3RyaW5nLCByZXF1ZXN0OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8YW55PihlbmRwb2ludFVybCwgcmVxdWVzdCwgeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBwdXQgcmVxdWVzdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBlbmRwb2ludFVybCBUaGUgZW5kcG9pbnQgVXJsLlxyXG4gICAqIEBwYXJhbSBhbnkgcmVxdWVzdCBUaGUgcmVxdWVzdCBwYXlsb2FkLlxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxhbnk+IFRoZSByZXNwb25zZS5cclxuICAqL1xyXG4gIHB1YmxpYyBwdXQoZW5kcG9pbnRVcmw6IHN0cmluZywgcmVxdWVzdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQ8YW55PihlbmRwb2ludFVybCwgcmVxdWVzdCwgeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGEgcmVjb3JkIGV4aXN0cyBpbiB0aGUgbG9jYWwgc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGtleSBUaGUga2V5LlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSByZWNvcmQgZXhpc3RzLlxyXG4gICovXHJcbiAgcHVibGljIGRvZXNLZXlFeGlzdChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgIT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgYSByZWNvcmQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcGFyYW0gYW55IGRhdGEgVGhlIHJlY29yZCBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIHNhdmUoa2V5OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIGEgcmVjb3JkIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcmV0dXJuIGFueSBkYXRhIFRoZSByZWNvcmQgZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBsb2FkKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBMb2FkcyBhIHJlY29yZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGlmIGl0IGV4aXN0cy5cclxuICAgKiBBbHRlcm5hdGl2ZWx5IHJldHVybnMgYSBkZWZhdWx0IHZhbHVlIGlmIG5vdCBmb3VuZC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGtleSBUaGUga2V5LlxyXG4gICAqIEBwYXJhbSBhbnkgZGVmYXVsdFZhbHVlIFRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAqIEByZXR1cm4gYW55IGRhdGEgVGhlIHJlY29yZCBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGxvYWRPckRlZmF1bHQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogYW55IHtcclxuICAgIGxldCB2YWx1ZSA9IHRoaXMubG9hZChrZXkpO1xyXG5cclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2Uge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHNhdmVkIGxhbmd1YWdlLiovXHJcbiAgcHVibGljIHNhdmVkTGFuZ3VhZ2UgPSB0aGlzLmxvY2FsU3RvcmFnZS5sb2FkT3JEZWZhdWx0KCdMYW5ndWFnZScsICdlbicpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSB0cmFuc2xhdGlvbnMuKi9cclxuICBwdWJsaWMgdHJhbnNsYXRpb25zOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIHB1YmxpYyBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRMYW5ndWFnZShldmVudC5sYW5nKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNsYXRpb25zID0gZXZlbnQudHJhbnNsYXRpb25zO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGxhbmd1YWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlLlxyXG4gICovXHJcbiAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHJhbnNsYXRlLnVzZShsYW5ndWFnZSk7XHJcblxyXG4gICAgdGhpcy5zYXZlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcblxyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2F2ZSgnTGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGxhbmd1YWdlLiovXHJcbiAgcHVibGljIGdldExhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlLmxvYWRPckRlZmF1bHQoJ0xhbmd1YWdlJywgJ2VuJyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RzU2VydmljZSB9IGZyb20gJy4vaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4vYnJpZGdlLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBsZXQgZmllbGRFdmFsRnVuY3Rpb25zO1xyXG5cclxuY29uc3QgZnVuY3Rpb25Ub2tlbjogc3RyaW5nID0gJ0Z1bmN0aW9uOic7XHJcblxyXG4vLyByZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcclxuY29uc3Qgc3BhY2VSZWdleCA9IC9cXCsvZztcclxuXHJcbi8vIHJlZ2V4IHRvIG1hdGNoIHF1ZXJ5IHN0cmluZ3NcclxuY29uc3QgcXVlcnlTdHJpbmdSZWdleCA9IC8oW14mPV0rKT0/KFteJl0qKS9nO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdGllc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwUmVxdWVzdHNTZXJ2aWNlOiBIdHRwUmVxdWVzdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXZhbHVhdGVzIGEgZnVudGlvbiBmcm9tIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAgICogQWx0ZXJuYXRpdmVseSByZXR1cm5zIGEgZGVmYXVsdCB2YWx1ZSBpZiBub3QgZm91bmQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmdW5jdGlvblN0cmluZyBUaGUgZnVuY3Rpb24gc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBhbnkgZGVmYXVsdFZhbHVlIFRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAqIEByZXR1cm4gYW55IFRoZSBmdW50aW9uIGV2YWx1YXRpb24gcmVzdWx0LlxyXG4gICovXHJcbiAgcHVibGljIGV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZnVuY3Rpb25TdHJpbmc6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKGZ1bmN0aW9uU3RyaW5nLmluZGV4T2YoZnVuY3Rpb25Ub2tlbikgPj0gMCkge1xyXG4gICAgICBmdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uU3RyaW5nLnJlcGxhY2UoZnVuY3Rpb25Ub2tlbiwgJycpO1xyXG5cclxuICAgICAgbGV0IGpzRnVuY3Rpb25OYW1lLCBqc0Z1bmN0aW9uUGFyYW1ldGVycyA9IG51bGw7XHJcblxyXG4gICAgICBpZiAoZnVuY3Rpb25TdHJpbmcuaW5kZXhPZignLCcpID49IDApIHtcclxuICAgICAgICBjb25zdCBmdW5jdGlvblRva2VucyA9IGZ1bmN0aW9uU3RyaW5nLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgIGpzRnVuY3Rpb25OYW1lID0gZnVuY3Rpb25Ub2tlbnNbMF07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uVG9rZW5zLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgIGpzRnVuY3Rpb25QYXJhbWV0ZXJzID0gZnVuY3Rpb25Ub2tlbnM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAganNGdW5jdGlvbk5hbWUgPSBmdW5jdGlvblN0cmluZztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNGdW5jdGlvbiA9IGZpZWxkRXZhbEZ1bmN0aW9uc1tqc0Z1bmN0aW9uTmFtZV07XHJcblxyXG4gICAgICBpZiAoanNGdW5jdGlvbikge1xyXG4gICAgICAgIHJldHVybiBqc0Z1bmN0aW9uKGpzRnVuY3Rpb25QYXJhbWV0ZXJzLCBqc0Z1bmN0aW9uUGFyYW1ldGVycyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXR0ZW1wdHMgdG8gbG9hZCBhIGZpbGUgZnJvbSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIElmIG5vdCBmb3VuZCBpdCBnZXRzIGl0IGFzIGEgd2ViIHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS4gSXQgaXMgYm90aCB0aGUgc3RvcmFnZSBrZXkgb3IgdGhlIHdlYiB1cmwuXHJcbiAgICogQHJldHVybiBhbnkgVGhlIGxvYWRlZCBmaWxlLlxyXG4gICovXHJcbiAgcHVibGljIGFzeW5jIGxvYWRGaWxlKGtleSkge1xyXG4gICAgbGV0IGZpbGUgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZG9lc0tleUV4aXN0KGtleSkpIHtcclxuICAgICAgZmlsZSA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5sb2FkKGtleSk7XHJcblxyXG4gICAgICBmaWxlLmlzTG9jYWwgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsZSA9IHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoa2V5KS50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gUmVjdXJzaXZlbHkgbWVyZ2UgcHJvcGVydGllcyBvZiB0d28gb2JqZWN0cyBmcm9tIHJpZ2h0IHRvIGxlZnQuXHJcbiAgICogQHBhcmFtIGFueSBvYmplY3QxIFRoZSBsZWZ0IG9iamVjdC5cclxuICAgKiBAcGFyYW0gYW55IG9iamVjdDIgVGhlIHJpZ2h0IG9iamVjdC5cclxuICAgKiBAcmV0dXJuIGFueSBUaGUgbWVyZ2VkIG9iamVjdC5cclxuICAqL1xyXG4gIHB1YmxpYyBtZXJnZVJlY3Vyc2l2ZShvYmplY3QxOiBhbnksIG9iamVjdDI6IGFueSk6IGFueSB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gb2JqZWN0Mikge1xyXG4gICAgICBpZiAob2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShpdGVtKSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBwcm9wZXJ0eSBpbiBkZXN0aW5hdGlvbiBvYmplY3Qgc2V0OyB1cGRhdGUgaXRzIHZhbHVlLlxyXG4gICAgICAgICAgaWYgKG9iamVjdDJbaXRlbV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gdGhpcy5tZXJnZVJlY3Vyc2l2ZShvYmplY3QxW2l0ZW1dLCBvYmplY3QyW2l0ZW1dKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iamVjdDFbaXRlbV0gPSBvYmplY3QyW2l0ZW1dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIHByb3BlcnR5IGluIGRlc3RpbmF0aW9uIG9iamVjdCBub3Qgc2V0OyBjcmVhdGUgaXQgYW5kIHNldCBpdHMgdmFsdWUuXHJcbiAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gb2JqZWN0MltpdGVtXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqZWN0MTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGlucHV0IFRoZSBzdHJpbmcgaW5wdXQuXHJcbiAgICogQHBhcmFtIGFueSByb3V0ZSBUaGUgcm91dGUuXHJcbiAgICogQHBhcmFtIGFueSBhZGRpdGlvbmFsUGFyYW1ldGVycyBUaGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFRoZSBzdHJpbmcgd2l0aCBpdHMgdG9rZW5zIHJlcGxhY2VkLlxyXG4gICovXHJcbiAgcHVibGljIHJlcGxhY2VUb2tlbnMoaW5wdXQ6IHN0cmluZywgcm91dGU6IGFueSwgYWRkaXRpb25hbFBhcmFtZXRlcnM6IGFueSk6IHN0cmluZyB7XHJcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoJ3tsYW5ndWFnZVRva2VufScsIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnNhdmVkTGFuZ3VhZ2UpO1xyXG5cclxuICAgIGlmIChyb3V0ZSAmJiByb3V0ZS5wYXJhbXMpIHtcclxuICAgICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgcm91dGUucGFyYW1zLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCA9IHRoaXMucmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0LCB0aGlzLmdldFF1ZXJ5U3RyaW5nUGFyYW1ldGVycygpKTtcclxuXHJcbiAgICBpbnB1dCA9IHRoaXMucmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0LCB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5iYXNlRW5kUG9pbnRVcmxzKTtcclxuXHJcbiAgICBpZiAoYWRkaXRpb25hbFBhcmFtZXRlcnMpIHtcclxuICAgICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgYWRkaXRpb25hbFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAgKiBAcGFyYW0gYW55IHBhcmFtZXRlcnMgVGhlIHBhcmFtZXRlcnMuXHJcbiAgICAqIEByZXR1cm4gc3RyaW5nIFRoZSBzdHJpbmcgd2l0aCBpdHMgdG9rZW5zIHJlcGxhY2VkLlxyXG4gICovXHJcbiAgcHJpdmF0ZSByZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQ6IHN0cmluZywgcGFyYW1ldGVyczogYW55KTogc3RyaW5nIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtZXRlcnMpIHtcclxuICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cclxuICAgICAgICBjb25zdCBwYXJhbVZhbHVlID0gcGFyYW1ldGVyc1trZXldO1xyXG5cclxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoJ3snICsga2V5ICsgJ30nLCBwYXJhbVZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbiAgICAqIEByZXR1cm4gb2JqZWN0IFRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVycy5cclxuICAqL1xyXG4gIHByaXZhdGUgZ2V0UXVlcnlTdHJpbmdQYXJhbWV0ZXJzKCk6IG9iamVjdCB7XHJcbiAgICBjb25zdCB1cmxQYXJhbWV0ZXJzID0ge307XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcclxuXHJcbiAgICBsZXQgbWF0Y2g7XHJcblxyXG4gICAgd2hpbGUgKG1hdGNoID0gcXVlcnlTdHJpbmdSZWdleC5leGVjKHF1ZXJ5KSkge1xyXG4gICAgICB1cmxQYXJhbWV0ZXJzW3RoaXMuZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdKV0gPSB0aGlzLmRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVybFBhcmFtZXRlcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIERlY29kZXMgYSBVUkkgQ29tcG9uZW50LlxyXG4gICAgKiBAcGFyYW0gc3RyaW5nIGlucHV0IFRoZSBzdHJpbmcgaW5wdXQuXHJcbiAgICAqIEByZXR1cm4gc3RyaW5nIFRoZSBkZWNvZGVkIFVSSSBDb21wb25lbnQuXHJcbiAgKi9cclxuICBwcml2YXRlIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQucmVwbGFjZShzcGFjZVJlZ2V4LCAnICcpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGxGaWVsZHMge1xyXG4gIGlzTG9jYWw6IGJvb2xlYW47XHJcblxyXG4gIGZpZWxkczogQXJyYXk8RmllbGQ+O1xyXG59XHJcbiIsImltcG9ydCB7IFNldHRpbmdzLCBFbmRwb2ludHMsIE5vdGlmaWNhdGlvbnMsIFNlY3Rpb24sIEZpZWxkLCBJbnB1dEVycm9yIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuICBlbmRwb2ludHM6IEVuZHBvaW50cztcclxuXHJcbiAgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9ucztcclxuXHJcbiAgc2VjdGlvbnM6IEFycmF5PFNlY3Rpb24+O1xyXG5cclxuICBjdXJyZW50U2VjdGlvbjogU2VjdGlvbjtcclxuXHJcbiAgZmllbGRzOiBhbnk7XHJcblxyXG4gIG1lcmdlZEZpZWxkczogQXJyYXk8RmllbGQ+O1xyXG5cclxuICB2YWxpZGF0aW9uRXJyb3JzOiBBcnJheTxJbnB1dEVycm9yPjtcclxuXHJcbiAgaXNMb2NhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBidXR0b25zOiBhbnk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERlZmF1bHRMb2NhdGlvbiB7XHJcbiAgbGF0aXR1ZGU6IG51bWJlcjtcclxuXHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEVuZHBvaW50cyB7XHJcbiAgZ2V0OiBzdHJpbmc7XHJcblxyXG4gIHNhdmU6IHN0cmluZztcclxuXHJcbiAgc3VibWl0OiBzdHJpbmc7XHJcblxyXG4gIGxvb2t1cHM6IG9iamVjdDtcclxufVxyXG4iLCJpbXBvcnQgeyBTd2VldEFsZXJ0VHlwZSB9IGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtTW9kZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgTmV3ID0gJ05ldyc7XHJcbiAgcHVibGljIHN0YXRpYyBEaXNwbGF5ID0gJ0Rpc3BsYXknO1xyXG4gIHB1YmxpYyBzdGF0aWMgRWRpdCA9ICdFZGl0JztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TdW1tYXJ5TW9kZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgTm9uZSA9ICdOb25lJztcclxuICBwdWJsaWMgc3RhdGljIEFsZXJ0ID0gJ0FsZXJ0JztcclxuICBwdWJsaWMgc3RhdGljIExpc3QgPSAnTGlzdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uTW9kZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgTm9uZSA9ICdOb25lJztcclxuICBwdWJsaWMgc3RhdGljIFRhYnMgPSAnVGFicyc7XHJcbiAgcHVibGljIHN0YXRpYyBOZXh0UHJldmlvdXMgPSAnTmV4dFByZXZpb3VzJztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3RNb2RlcyB7XHJcbiAgcHVibGljIHN0YXRpYyBGb3JtRGF0YSA9ICdGb3JtRGF0YSc7XHJcbiAgcHVibGljIHN0YXRpYyBGb3JtQm9keSA9ICdGb3JtQm9keSc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTd2FsVHlwZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgV2FybmluZzogU3dlZXRBbGVydFR5cGUgPSAnd2FybmluZyc7XHJcbiAgcHVibGljIHN0YXRpYyBFcnJvcjogU3dlZXRBbGVydFR5cGUgPSAnZXJyb3InO1xyXG4gIHB1YmxpYyBzdGF0aWMgU3VjY2VzczogU3dlZXRBbGVydFR5cGUgPSAnc3VjY2Vzcyc7XHJcbiAgcHVibGljIHN0YXRpYyBJbmZvOiBTd2VldEFsZXJ0VHlwZSA9ICdpbmZvJztcclxuICBwdWJsaWMgc3RhdGljIFF1ZXN0aW9uOiBTd2VldEFsZXJ0VHlwZSA9ICdxdWVzdGlvbic7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFR5cGVzIHtcclxuICBwdWJsaWMgc3RhdGljIEluZm8gPSAnaW5mbyc7XHJcbiAgcHVibGljIHN0YXRpYyBUZXh0ID0gJ3RleHQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGF0ZVRpbWUgPSAnZGF0ZXRpbWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGF0ZVRpbWVIaWpyaSA9ICdkYXRldGltZWhpanJpJztcclxuICBwdWJsaWMgc3RhdGljIFJhZGlvQnV0dG9uID0gJ3JhZGlvYnV0dG9uJztcclxuICBwdWJsaWMgc3RhdGljIFNlbGVjdCA9ICdzZWxlY3QnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGFzc3dvcmQgPSAncGFzc3dvcmQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTnVtYmVyID0gJ251bWJlcic7XHJcbiAgcHVibGljIHN0YXRpYyBNdWx0aVNlbGVjdCA9ICdtdWx0aXNlbGVjdCc7XHJcbiAgcHVibGljIHN0YXRpYyBDaGVja2JveCA9ICdjaGVja2JveCc7XHJcbiAgcHVibGljIHN0YXRpYyBGaWxlVXBsb2FkID0gJ2ZpbGV1cGxvYWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ2hpcHMgPSAnY2hpcHMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRWRpdG9yID0gJ2VkaXRvcic7XHJcbiAgcHVibGljIHN0YXRpYyBSZWNhcHRjaGEgPSAncmVjYXB0Y2hhJztcclxuICBwdWJsaWMgc3RhdGljIFRpbWUgPSAndGltZSc7XHJcbiAgcHVibGljIHN0YXRpYyBMb2NhdGlvbiA9ICdsb2NhdGlvbic7XHJcbiAgcHVibGljIHN0YXRpYyBJbWFnZUNyb3BwZXIgPSAnaW1hZ2Vjcm9wcGVyJztcclxuICBwdWJsaWMgc3RhdGljIFJhdGluZyA9ICdyYXRpbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTWFzdGVyRGV0YWlsID0gJ21hc3RlcmRldGFpbCc7XHJcbn1cclxuIiwiaW1wb3J0IHsgRmllbGREYXRhLCBGaWVsZFZhbGlkYXRpb24sIElucHV0RXJyb3IsIERlZmF1bHRMb2NhdGlvbiwgTWFya2VyU2V0dGluZ3MsIE1hc3RlckRldGFpbERldGFpbHMgfSBmcm9tICcuJztcclxuaW1wb3J0IHsgQ3JvcHBlclNldHRpbmdzIH0gZnJvbSAnbmcyLWltZy1jcm9wcGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZCB7XHJcbiAgZmllbGRUeXBlOiBzdHJpbmc7XHJcblxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgc2VjdGlvbklkOiBudW1iZXI7XHJcblxyXG4gIGhpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgZGF0YTogRmllbGREYXRhO1xyXG5cclxuICB2YWxpZGF0aW9uOiBGaWVsZFZhbGlkYXRpb247XHJcblxyXG4gIHZhbGlkYXRpb25FcnJvcnM6IEFycmF5PElucHV0RXJyb3I+O1xyXG5cclxuICBsYWJlbDogc3RyaW5nO1xyXG5cclxuICB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIGV2ZW50VHJpZ2dlcnM6IGFueTtcclxuXHJcbiAgY3NzQ2xhc3NlczogYW55O1xyXG5cclxuICByZWFkb25seTogYm9vbGVhbjtcclxuXHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIGF1dG9Db21wbGV0ZTogc3RyaW5nO1xyXG5cclxuICAvLyBkYXRldGltZSAtIGhpanJpIC0gdGltZVxyXG4gIG1pbkRhdGU6IHN0cmluZztcclxuXHJcbiAgbWF4RGF0ZTogc3RyaW5nO1xyXG5cclxuICBkZWZhdWx0RGF0ZTogc3RyaW5nO1xyXG5cclxuICBtaW5EYXRlVmFsdWU6IERhdGU7XHJcblxyXG4gIG1heERhdGVWYWx1ZTogRGF0ZTtcclxuXHJcbiAgZGVmYXVsdERhdGVWYWx1ZTogRGF0ZTtcclxuXHJcbiAgeWVhclJhbmdlOiBzdHJpbmc7XHJcblxyXG4gIHNldFRpbWU6IHN0cmluZztcclxuXHJcbiAgc2hvd0ljb246IGJvb2xlYW47XHJcblxyXG4gIGRhdGVGb3JtYXQ6IHN0cmluZztcclxuXHJcbiAgbW9udGhOYXZpZ2F0b3I6IGJvb2xlYW47XHJcblxyXG4gIHllYXJOYXZpZ2F0b3I6IGJvb2xlYW47XHJcblxyXG4gIGhvdXJGb3JtYXQ6IHN0cmluZztcclxuXHJcbiAgc2hvd1RpbWU6IGJvb2xlYW47XHJcblxyXG4gIGRpc3BsYXlEYXRlRm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gIGZvcm1EYXRhRGF0ZUZvcm1hdDogc3RyaW5nO1xyXG5cclxuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XHJcblxyXG4gIG91dHNpZGVEYXlzOiBzdHJpbmc7XHJcblxyXG4gIHNob3dXZWVrZGF5czogYm9vbGVhbjtcclxuXHJcbiAgc2hvd1dlZWtOdW1iZXJzOiBib29sZWFuO1xyXG5cclxuICAvLyBsb2NhdGlvblxyXG4gIGRlZmF1bHRMb2NhdGlvbjogRGVmYXVsdExvY2F0aW9uO1xyXG5cclxuICBtYXJrZXJTZXR0aW5nczogTWFya2VyU2V0dGluZ3M7XHJcblxyXG4gIHpvb206IG51bWJlcjtcclxuXHJcbiAgem9vbUNvbnRyb2w6IGJvb2xlYW47XHJcblxyXG4gIC8vIHJlY2FwdGNoYVxyXG4gIHNpdGVLZXk6IHN0cmluZztcclxuXHJcbiAgc2l6ZTogc3RyaW5nO1xyXG5cclxuICB0aGVtZTogc3RyaW5nO1xyXG5cclxuICAvLyBpbmZvXHJcbiAgaHRtbFNuaXBwZXQ6IHN0cmluZztcclxuXHJcbiAgLy8gaW1hZ2Vjcm9wcGVyXHJcbiAgY3JvcHBlclNldHRpbmdzOiBDcm9wcGVyU2V0dGluZ3M7XHJcblxyXG4gIC8vIHJhdGluZ1xyXG4gIGljb25DYW5jZWxDbGFzczogc3RyaW5nO1xyXG5cclxuICBpY29uT25DbGFzczogc3RyaW5nO1xyXG5cclxuICBpY29uT2ZmQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgY2FuY2VsSWNvbjogYm9vbGVhbjtcclxuXHJcbiAgc3Rhck51bWJlcjogbnVtYmVyO1xyXG5cclxuICAvLyBwcmludGluZ1xyXG4gIGh0bWwyQ2FudmFzSWdub3JlOiBib29sZWFuO1xyXG5cclxuICAvLyBtYXN0ZXJkZXRhaWxcclxuICBkZXRhaWxzOiBNYXN0ZXJEZXRhaWxEZXRhaWxzO1xyXG5cclxuICAvLyBzZWxlY3RcclxuICBlbmFibGVmaWx0ZXI6IGJvb2xlYW47XHJcblxyXG4gIC8vIGNoaXBzXHJcbiAgYWRkT25UYWI6IGJvb2xlYW47XHJcblxyXG4gIGFkZE9uQmx1cjogYm9vbGVhbjtcclxuXHJcbiAgLy8gZWRpdG9yXHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcblxyXG4gIHNob3dUb29sYmFyOiBib29sZWFuO1xyXG5cclxuICAvLyBtYXNrXHJcbiAgc2xvdENoYXI6IHN0cmluZztcclxuXHJcbiAgYXV0b0NsZWFyOiBib29sZWFuO1xyXG5cclxuICB1bm1hc2s6IGJvb2xlYW47XHJcblxyXG4gIGNoYXJhY3RlclBhdHRlcm46IHN0cmluZztcclxuXHJcbiAgLy8gZmlsZXVwbG9hZFxyXG4gIGF1dG86IGJvb2xlYW47XHJcblxyXG4gIG1vZGU6IHN0cmluZztcclxuXHJcbiAgbXVsdGlwbGU6IGJvb2xlYW47XHJcblxyXG4gIGJ1dHRvbnM6IGFueTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRmllbGREYXRhIHtcclxuICB2YWx1ZTogYW55O1xyXG5cclxuICBvcHRpb25zOiBBcnJheTxhbnk+O1xyXG5cclxuICBhbGxPcHRpb25zOiBBcnJheTxhbnk+O1xyXG5cclxuICBvcHRpb25zRW5kcG9pbnQ6IHN0cmluZztcclxuXHJcbiAgZGF0ZVZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGaWVsZFZhbGlkYXRpb24ge1xyXG4gIHJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuICBtaW46IG51bWJlcjtcclxuXHJcbiAgbWF4OiBudW1iZXI7XHJcblxyXG4gIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICBwYXR0ZXJuOiBzdHJpbmc7XHJcblxyXG4gIHJlcXVpcmVkVGV4dDogc3RyaW5nO1xyXG5cclxuICBwYXR0ZXJuVGV4dDogc3RyaW5nO1xyXG5cclxuICByYW5nZVRleHQ6IHN0cmluZztcclxuXHJcbiAgbWF4RmlsZVNpemVJbkJ5dGVzOiBudW1iZXI7XHJcblxyXG4gIGludmFsaWRGaWxlU2l6ZVRleHQ6IHN0cmluZztcclxuXHJcbiAgaW52YWxpZEZpbGVUeXBlVGV4dDogc3RyaW5nO1xyXG5cclxuICBjaGFyYWN0ZXJQYXR0ZXJuOiBzdHJpbmc7XHJcblxyXG4gIG1hc2s6IHN0cmluZztcclxuXHJcbiAgYWxsb3dEdXBsaWNhdGU6IGJvb2xlYW47XHJcblxyXG4gIGFjY2VwdDogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnB1dEVycm9yIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtlciB7XHJcbiAgbGF0aXR1ZGU6IG51bWJlcjtcclxuXHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcblxyXG4gIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgaW5mb0h0bWw6IHN0cmluZztcclxuXHJcbiAgZXZlbnRUcmlnZ2VyczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlciwgZHJhZ2dhYmxlOiBib29sZWFuLCBpbmZvSHRtbD86IHN0cmluZykge1xyXG4gICAgdGhpcy5sYXRpdHVkZSA9IGxhdGl0dWRlO1xyXG5cclxuICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xyXG5cclxuICAgIHRoaXMuZHJhZ2dhYmxlID0gZHJhZ2dhYmxlO1xyXG5cclxuICAgIHRoaXMuaW5mb0h0bWwgPSBpbmZvSHRtbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFya2VyU2V0dGluZ3NEZWZhdWx0IH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFya2VyU2V0dGluZ3Mge1xyXG4gIGRlZmF1bHROZXdNYXJrZXI6IE1hcmtlclNldHRpbmdzRGVmYXVsdDtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTWFya2VyU2V0dGluZ3NEZWZhdWx0IHtcclxuICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcblxyXG4gIGluZm9IdG1sOiBzdHJpbmc7XHJcblxyXG4gIGV2ZW50VHJpZ2dlcnM6IGFueTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTWFzdGVyRGV0YWlsRGV0YWlscyB7XHJcbiAgY29uZmlndXJhdGlvblNvdXJjZVVybDogc3RyaW5nO1xyXG5cclxuICBkaXNwbGF5RmllbGRzOiBBcnJheTxzdHJpbmc+O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIHtcclxuICBzaG93UmVzdWx0TWVzc2FnZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0RXJyb3JNZXNzYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgZ2V0RXJyb3JNZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICBzYXZlRXJyb3JNZXNzYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgc2F2ZUVycm9yTWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgc2F2ZVN1Y2Nlc3NNZXNzYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgc2F2ZVN1Y2Nlc3NNZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICBzdWJtaXRFcnJvck1lc3NhZ2VUaXRsZTogc3RyaW5nO1xyXG5cclxuICBzdWJtaXRFcnJvck1lc3NhZ2VEZXRhaWxzOiBzdHJpbmc7XHJcblxyXG4gIHN1Ym1pdFN1Y2Nlc3NNZXNzYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgc3VibWl0U3VjY2Vzc01lc3NhZ2VEZXRhaWxzOiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGlkOiBudW1iZXI7XHJcblxyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgbGVnZW5kOiBzdHJpbmc7XHJcblxyXG4gIGlzQWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBoaWRlQnV0dG9uczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBsZWdlbmQ6IHN0cmluZywgaXNBY3RpdmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMubGVnZW5kID0gbGVnZW5kO1xyXG5cclxuICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcclxuICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gIHZhbGlkYXRpb25TdW1tYXJ5TW9kZTogc3RyaW5nO1xyXG5cclxuICBzZWN0aW9uTW9kZTogc3RyaW5nO1xyXG5cclxuICBzZWN0aW9uTG9jYXRpb246IHN0cmluZztcclxuXHJcbiAgZm9ybU1vZGU6IHN0cmluZztcclxuXHJcbiAgcG9zdE1vZGU6IHN0cmluZztcclxuXHJcbiAgc3Bpbm5lclNvdXJjZVVybDogc3RyaW5nO1xyXG5cclxuICBhbGxGaWVsZHNTb3VyY2U6IHN0cmluZztcclxuXHJcbiAgYmFzZUVuZFBvaW50VXJsczogYW55O1xyXG5cclxuICBzb3VyY2VGb3JtU2NoZW1hczogQXJyYXk8c3RyaW5nPjtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmVzcG9uc2VFdmVudEFyZ3Mge1xyXG4gIGlzU3VjY2VzczogYm9vbGVhbjtcclxuXHJcbiAgcmVzcG9uc2U6IGFueTtcclxuXHJcbiAgcGF5bG9hZDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihpc1N1Y2Nlc3M6IGJvb2xlYW4sIHJlc3BvbnNlOiBhbnksIHBheWxvYWQ6IGFueSkge1xyXG4gICAgdGhpcy5pc1N1Y2Nlc3MgPSBpc1N1Y2Nlc3M7XHJcblxyXG4gICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cclxuICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIEN1cnJlbnQgdHlwZSB0byBzaG93XHJcbmV4cG9ydCBlbnVtIENMT0NLX1RZUEUge1xyXG4gIEhPVVJTID0gMSxcclxuICBNSU5VVEVTID0gMlxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUaW1lRm9ybWF0ID0gMTIgfCAyNDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRpbWUge1xyXG4gIGhvdXI6IG51bWJlcjtcclxuICBtaW51dGU6IG51bWJlcjtcclxuICBtZXJpZGVuOiAnUE0nIHwgJ0FNJztcclxuICBmb3JtYXQ6IFRpbWVGb3JtYXQ7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWNsb2NrJyxcclxuICBzdHlsZXM6IFtgLnctY2xvY2std3JhcHBlcntoZWlnaHQ6MTAwJTtwYWRkaW5nOjAgMjRweH0udy1jbG9jay13cmFwcGVyIC53LWNsb2Nre3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweDtib3JkZXItcmFkaXVzOjUwJTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOjI0cHg7YmFja2dyb3VuZDojZWRlZGVkfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLWNlbnRlcntoZWlnaHQ6NnB4O3dpZHRoOjZweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjUwJX0udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LXBvaW50ZXJ7Ym94LXNoYWRvdzpub25lO3dpZHRoOjFweDtoZWlnaHQ6NTAlO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO21hcmdpbjowIGF1dG87cGFkZGluZzowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzLC13ZWJraXQtdHJhbnNmb3JtIC4yczt6LWluZGV4OjA7cG9pbnRlci1ldmVudHM6bm9uZX0udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLXN0ZXB7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnN9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1zdGVwIC5tYXQtbWluaS1mYWJ7Ym94LXNoYWRvdzpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1zZWxlY3RlZHtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTE5cHg7bGVmdDotMTlweDttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2hhZG93Om5vbmU7Y3Vyc29yOm5vbmV9LnctY2xvY2stZGVnMHt0b3A6MDtsZWZ0OjUwJX0udy1jbG9jay1kZWcxNXt0b3A6MS43MDM3MDg2OSU7bGVmdDo2Mi45NDA5NTIyNiV9LnctY2xvY2stZGVnMzB7dG9wOjYuNjk4NzI5ODElO2xlZnQ6NzUlfS53LWNsb2NrLWRlZzQ1e3RvcDoxNC42NDQ2NjA5NCU7bGVmdDo4NS4zNTUzMzkwNSV9LnctY2xvY2stZGVnNjB7dG9wOjI1JTtsZWZ0OjkzLjMwMTI3MDE5JX0udy1jbG9jay1kZWc3NXt0b3A6MzcuMDU5MDQ3NzQlO2xlZnQ6OTguMjk2MjkxMzElfS53LWNsb2NrLWRlZzkwe3RvcDo1MCU7bGVmdDoxMDAlfS53LWNsb2NrLWRlZzEwNXt0b3A6NjIuOTQwOTUyMjYlO2xlZnQ6OTguMjk2MjkxMzElfS53LWNsb2NrLWRlZzEyMHt0b3A6NzUlO2xlZnQ6OTMuMzAxMjcwMTklfS53LWNsb2NrLWRlZzEzNXt0b3A6ODUuMzU1MzM5MDYlO2xlZnQ6ODUuMzU1MzM5MDYlfS53LWNsb2NrLWRlZzE1MHt0b3A6OTMuMzAxMjcwMTklO2xlZnQ6NzUlfS53LWNsb2NrLWRlZzE2NXt0b3A6OTguMjk2MjkxMzElO2xlZnQ6NjIuOTQwOTUyMjYlfS53LWNsb2NrLWRlZzE4MHt0b3A6MTAwJTtsZWZ0OjUwJX0udy1jbG9jay1kZWcxOTV7dG9wOjk4LjI5NjI5MTMxJTtsZWZ0OjM3LjA1OTA0Nzc0JX0udy1jbG9jay1kZWcyMTB7dG9wOjkzLjMwMTI3MDE5JTtsZWZ0OjI1JX0udy1jbG9jay1kZWcyMjV7dG9wOjg1LjM1NTMzOTA2JTtsZWZ0OjE0LjY0NDY2MDk0JX0udy1jbG9jay1kZWcyNDB7dG9wOjc1JTtsZWZ0OjYuNjk4NzI5ODElfS53LWNsb2NrLWRlZzI1NXt0b3A6NjIuOTQwOTUyMjYlO2xlZnQ6MS43MDM3MDg2ODYlfS53LWNsb2NrLWRlZzI3MHt0b3A6NTAlO2xlZnQ6MH0udy1jbG9jay1kZWcyODV7dG9wOjM3LjA1OTA0Nzc0JTtsZWZ0OjEuNzAzNzA4Njg2JX0udy1jbG9jay1kZWczMDB7dG9wOjI1JTtsZWZ0OjYuNjk4NzI5ODElfS53LWNsb2NrLWRlZzMxNXt0b3A6MTQuNjQ0NjYwOTQlO2xlZnQ6MTQuNjQ0NjYwOTQlfS53LWNsb2NrLWRlZzMzMHt0b3A6Ni42OTg3Mjk4MSU7bGVmdDoyNSV9LnctY2xvY2stZGVnMzQ1e3RvcDoxLjcwMzcwODY4NiU7bGVmdDozNy4wNTkwNDc3NCV9LnctY2xvY2stZGVnMzYwe3RvcDowO2xlZnQ6NTAlfWBdLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiXHJcbiAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgIGNsYXNzPVwidy1jbG9jay13cmFwcGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInctY2xvY2tcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LWNsb2NrLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgPCEtLSBDbG9jayBjZW50ZXIgLS0+XHJcbiAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cInctY2xvY2stY2VudGVyXCI+PC9idXR0b24+XHJcblxyXG4gICAgICA8IS0tIENsb2NrIGhhbmQgLS0+XHJcbiAgICAgIDxtYXQtdG9vbGJhciBbbmdTdHlsZV09XCJnZXRQb2ludGVyU3R5bGUoKVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LXBvaW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYlxyXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy1jbG9jay1zZWxlY3RlZFwiPjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC10b29sYmFyPlxyXG5cclxuICAgICAgPCEtLSBIb3VyIC8gTWludXRlIG51bWJlciBmYWNlcyAtLT5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImdldFRpbWVWYWx1ZUNsYXNzKHN0ZXAsIGkpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgICAgIFtjb2xvcl09XCJzZWxlY3RlZFRpbWVQYXJ0ID09PSBzdGVwID8gY29sb3IgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlVGltZVZhbHVlKHN0ZXApXCI+XHJcbiAgICAgICAgICB7eyBzdGVwIH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV0Nsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwdWJsaWMgdXNlclRpbWU6IElUaW1lO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgdXNlclRpbWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJVGltZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXJyZW50VmlldzogQ0xPQ0tfVFlQRTtcclxuICBAT3V0cHV0KCkgcHVibGljIHZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENMT0NLX1RZUEU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc3RlcHMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gIHB1YmxpYyBzZWxlY3RlZFRpbWVQYXJ0O1xyXG4gIHB1YmxpYyBTVEVQX0RFRzogbnVtYmVyO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc2V0dXBVSSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldHVwVUkoKSB7XHJcbiAgICB0aGlzLnN0ZXBzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFZpZXcpIHtcclxuICAgICAgY2FzZSBDTE9DS19UWVBFLkhPVVJTOlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMudXNlclRpbWUuZm9ybWF0OyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuc3RlcHMucHVzaChpKTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lUGFydCA9IHRoaXMudXNlclRpbWUuaG91ciB8fCAwO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGltZVBhcnQgPiB0aGlzLnVzZXJUaW1lLmZvcm1hdCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRpbWVQYXJ0IC09IHRoaXMudXNlclRpbWUuZm9ybWF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDTE9DS19UWVBFLk1JTlVURVM6XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDU7IGkgPD0gNTU7IGkgKz0gNSkge1xyXG5cclxuICAgICAgICAgIHRoaXMuc3RlcHMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGVwcy5wdXNoKDApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lUGFydCA9IHRoaXMudXNlclRpbWUubWludXRlIHx8IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQb2ludGVyU3R5bGUoKSB7XHJcbiAgICBsZXQgZGl2aWRlciA9IDE7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFZpZXcpIHtcclxuICAgICAgY2FzZSBDTE9DS19UWVBFLkhPVVJTOlxyXG4gICAgICAgIGRpdmlkZXIgPSB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDTE9DS19UWVBFLk1JTlVURVM6XHJcbiAgICAgICAgZGl2aWRlciA9IDYwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWdyZWVzID0gMDtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBDTE9DS19UWVBFLkhPVVJTKSB7XHJcbiAgICAgIGRlZ3JlZXMgPSBNYXRoLnJvdW5kKHRoaXMudXNlclRpbWUuaG91ciAqICgzNjAgLyBkaXZpZGVyKSkgLSAxODA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWdyZWVzID0gTWF0aC5yb3VuZCh0aGlzLnVzZXJUaW1lLm1pbnV0ZSAqICgzNjAgLyBkaXZpZGVyKSkgLSAxODA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZXMgKyAnZGVnKScsXHJcbiAgICAgICctbXMtdHJhbnNmb3JtJzogJ3JvdGF0ZSgnICsgZGVncmVlcyArICdkZWcpJyxcclxuICAgICAgJ3RyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZXMgKyAnZGVnKSdcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRpbWVWYWx1ZUNsYXNzKHN0ZXA6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IENMT0NLX1RZUEUuSE9VUlMpIHtcclxuICAgICAgdGhpcy5TVEVQX0RFRyA9IDM2MCAvIHRoaXMudXNlclRpbWUuZm9ybWF0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5TVEVQX0RFRyA9IDM2MCAvIDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjbGFzc2VzID0gJ3ctY2xvY2stc3RlcCB3LWNsb2NrLWRlZycgKyAodGhpcy5TVEVQX0RFRyAqIChpbmRleCArIDEpKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWVQYXJ0ID09PSBzdGVwKSB7XHJcblxyXG4gICAgICBjbGFzc2VzICs9ICcgbWF0LXByaW1hcnknO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoYW5nZVRpbWVWYWx1ZShzdGVwOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBDTE9DS19UWVBFLkhPVVJTKSB7XHJcbiAgICAgIHRoaXMudXNlclRpbWUuaG91ciA9IHN0ZXA7XHJcblxyXG4gICAgICAvLyBhdXRvIHN3aXRjaCB0byBtaW51dGVzXHJcbiAgICAgIHRoaXMudmlld0NoYW5nZS5lbWl0KENMT0NLX1RZUEUuTUlOVVRFUyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVzZXJUaW1lLm1pbnV0ZSA9IHN0ZXA7XHJcblxyXG4gICAgICAvLyBhdXRvIHN3aXRjaCB0byBob3Vyc1xyXG4gICAgICB0aGlzLnZpZXdDaGFuZ2UuZW1pdChDTE9DS19UWVBFLkhPVVJTKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnVzZXJUaW1lQ2hhbmdlLmVtaXQodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBDTE9DS19UWVBFLCBJVGltZSB9IGZyb20gJy4uL3ctY2xvY2svdy1jbG9jay5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc3R5bGVzOiBbYC53LXRpbWVwaWNrZXItZGlhbG9ne3BhZGRpbmc6MDttYXJnaW46LTI0cHg7d2lkdGg6Y2FsYygxMDAlICsgNDhweCl9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cInctdGltZXBpY2tlci1kaWFsb2dcIj5cclxuICA8bnR3LXRpbWUgW2NvbG9yXT1cImNvbG9yXCIgW3VzZXJUaW1lXT1cInVzZXJUaW1lXCIgKHJldmVydGVkKT1cInJldmVydCgpXCIgKHN1Ym1pdHRlZCk9XCJzdWJtaXQoKVwiPjwvbnR3LXRpbWU+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXVGltZURpYWxvZ0NvbXBvbmVudCB7XHJcbiAgcHVibGljIHVzZXJUaW1lOiBJVGltZTtcclxuICBwcml2YXRlIFZJRVdfSE9VUlMgPSBDTE9DS19UWVBFLkhPVVJTO1xyXG4gIHByaXZhdGUgVklFV19NSU5VVEVTID0gQ0xPQ0tfVFlQRS5NSU5VVEVTO1xyXG4gIHByaXZhdGUgY3VycmVudFZpZXc6IENMT0NLX1RZUEUgPSB0aGlzLlZJRVdfSE9VUlM7XHJcbiAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHByaXZhdGUgZGF0YTogVXNlclRpbWVEYXRhLFxyXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxXVGltZURpYWxvZ0NvbXBvbmVudD4pIHtcclxuICAgIHRoaXMudXNlclRpbWUgPSBkYXRhLnRpbWU7XHJcbiAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcclxuICB9XHJcblxyXG4gIHJldmVydCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKC0xKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJUaW1lRGF0YSB7XHJcbiAgdGltZTogSVRpbWU7XHJcbiAgY29sb3I6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgSVRpbWUgfSBmcm9tICcuLi93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgV1RpbWVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi93LXRpbWUtZGlhbG9nL3ctdGltZS1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbWF0LXRpbWVwaWNrZXInLFxyXG4gIHN0eWxlczogW2AudGltZS1waWNrZXItYnV0dG9ue3BhZGRpbmc6MDttYXJnaW46MDttaW4td2lkdGg6NDRweH06aG9zdCA6Om5nLWRlZXAgLnVpLWRyb3Bkb3duLDpob3N0IDo6bmctZGVlcCBpbnB1dC51aS1pbnB1dHRleHQudWktd2lkZ2V0LnVpLXN0YXRlLWRlZmF1bHQsOmhvc3QgOjpuZy1kZWVwIHAtZHJvcGRvd24saW5wdXQuZm9ybS1pbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MzVweH1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4XHJcbiAgICAgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgIGNsYXNzPVwidy1tYXQtdGltZXBpY2tlclwiPlxyXG5cclxuICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAoY2xpY2spPVwic2hvd1BpY2tlcigkZXZlbnQpXCJcclxuICAgICAgICAgIGNsYXNzPVwidGltZS1waWNrZXItYnV0dG9uXCI+XHJcbiAgICA8aSBjbGFzcz1cImZhIGZhLWNsb2NrLW9cIj48L2k+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxpbnB1dCBtYXRJbnB1dFxyXG4gICAgICAgICBbaWRdPVwiaW5wdXRJZFwiXHJcbiAgICAgICAgIFtuYW1lXT1cImlucHV0TmFtZVwiXHJcbiAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICAgICAgIFtjbGFzc109XCJpbnB1dENsYXNzXCJcclxuICAgICAgICAgW3RpdGxlXT1cInRvb2x0aXBcIlxyXG4gICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJWYWx1ZVwiXHJcbiAgICAgICAgIFt2YWx1ZV09XCJ0aW1lXCI+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV01hdFRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHVzZXJUaW1lOiBJVGltZTtcclxuXHJcbiAgQE91dHB1dCgpIHVzZXJUaW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSByZWFkb25seTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJWYWx1ZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBpbnB1dElkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGlucHV0TmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVBpcGVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy51c2VyVGltZSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IHRpbWU6IGFueSA9IHt9O1xyXG4gICAgICB0aW1lLmhvdXIgPSAwO1xyXG4gICAgICB0aW1lLm1pbnV0ZSA9IDA7XHJcbiAgICAgIHRpbWUuZm9ybWF0ID0gMjQ7XHJcbiAgICAgIHRpbWUubWVyaWRlbiA9ICdBTSc7XHJcblxyXG4gICAgICB0aGlzLnVzZXJUaW1lID0gdGltZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB0aW1lKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMudXNlclRpbWUpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtZXJpZGVuID0gYCR7dGhpcy51c2VyVGltZS5tZXJpZGVufWA7XHJcblxyXG4gICAgbWVyaWRlbiA9IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0obWVyaWRlbik7XHJcblxyXG4gICAgaWYgKHRoaXMudXNlclRpbWUuZm9ybWF0ID09PSAyNCkge1xyXG4gICAgICBtZXJpZGVuID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhvdXIgPSBgJHt0aGlzLnVzZXJUaW1lLmhvdXJ9YDtcclxuICAgIGlmICh0aGlzLnVzZXJUaW1lLmhvdXIgPT09IDI0KSB7XHJcbiAgICAgIGhvdXIgPSAnMDAnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnVzZXJUaW1lLm1pbnV0ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYCR7aG91cn06MDAgJHttZXJpZGVufWA7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZXJUaW1lLm1pbnV0ZSA8IDEwKSB7XHJcblxyXG4gICAgICBjb25zdCB0dCA9ICcwJyArIFN0cmluZyh0aGlzLnVzZXJUaW1lLm1pbnV0ZSk7XHJcbiAgICAgIHJldHVybiBgJHtob3VyfToke3R0fSAke21lcmlkZW59YDtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYCR7aG91cn06JHt0aGlzLnVzZXJUaW1lLm1pbnV0ZX0gJHttZXJpZGVufWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93UGlja2VyKCRldmVudCkge1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihXVGltZURpYWxvZ0NvbXBvbmVudCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgaG91cjogdGhpcy51c2VyVGltZS5ob3VyLFxyXG4gICAgICAgICAgbWludXRlOiB0aGlzLnVzZXJUaW1lLm1pbnV0ZSxcclxuICAgICAgICAgIG1lcmlkZW46IHRoaXMudXNlclRpbWUubWVyaWRlbixcclxuICAgICAgICAgIGZvcm1hdDogdGhpcy51c2VyVGltZS5mb3JtYXRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogSVRpbWUgfCAtMSkgPT4ge1xyXG4gICAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIHVwZGF0ZSB1c2VyVGltZSBvYmplY3Qgb3IgLTEgb3IgdW5kZWZpbmVkIChjbG9zZWQgZGlhbG9nIHcvbyBjbGlja2luZyBjYW5jZWwpXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGlzLnVzZXJUaW1lID0gcmVzdWx0O1xyXG5cclxuICAgICAgICAgIHRoaXMuZW1pdHVzZXJUaW1lQ2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW1pdHVzZXJUaW1lQ2hhbmdlKCkge1xyXG5cclxuICAgIHRoaXMudXNlclRpbWVDaGFuZ2UuZW1pdCh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJVGltZSwgQ0xPQ0tfVFlQRSB9IGZyb20gJy4uL3ctY2xvY2svdy1jbG9jay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy10aW1lJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgIGZ4TGF5b3V0Lmx0LW1kPVwiY29sdW1uXCJcclxuICAgICBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgY2xhc3M9XCJ3LXRpbWVcIlxyXG4gICAgIFtuZ0NsYXNzLnhzXT1cIid2ZXJ0aWNhbC10aW1lJ1wiXHJcbiAgICAgW25nQ2xhc3Muc21dPVwiJ3ZlcnRpY2FsLXRpbWUnXCI+XHJcbiAgPG1hdC10b29sYmFyIGZ4TGF5b3V0PVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgZnhMYXlvdXQubHQtbWQ9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwidy10aW1lcGlja2VyLXRpbWUtY29udGFpbmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInctdGltZXBpY2tlci1zZWxlY3RlZC10aW1lXCI+XHJcbiAgICAgIDxzcGFuIFtjbGFzc109XCJjdXJyZW50VmlldyA9PT0gVklFV19IT1VSUyA/ICdhY3RpdmUnOiAnJ1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRDdXJyZW50VmlldyhWSUVXX0hPVVJTKVwiPnt7IGZvcm1hdEhvdXIoKSB9fTo8L3NwYW4+XHJcbiAgICAgIDxzcGFuIFtjbGFzc109XCJjdXJyZW50VmlldyA9PT0gVklFV19NSU5VVEVTID8gJ2FjdGl2ZSc6ICcnXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInNldEN1cnJlbnRWaWV3KFZJRVdfTUlOVVRFUylcIj57eyBmb3JtYXRNaW51dGUoKSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiXHJcbiAgICAgICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcclxuICAgICAgICAgY2xhc3M9XCJ3LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbVwiXHJcbiAgICAgICAgICpuZ0lmPVwidXNlclRpbWUuZm9ybWF0ID09PSAxMlwiPlxyXG4gICAgICA8c3BhbiAoY2xpY2spPVwic2V0TWVyaWRpZW4oJ0FNJylcIlxyXG4gICAgICAgICAgICBbY2xhc3NdPVwidXNlclRpbWUubWVyaWRlbiA9PT0gJ0FNJyA/ICdhY3RpdmUnIDogJydcIj57eydBTScgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gKGNsaWNrKT1cInNldE1lcmlkaWVuKCdQTScpXCJcclxuICAgICAgICAgICAgW2NsYXNzXT1cInVzZXJUaW1lLm1lcmlkZW4gPT09ICdQTScgPyAnYWN0aXZlJyA6ICcnXCI+e3snUE0nIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9tYXQtdG9vbGJhcj5cclxuXHJcbiAgPGRpdiBmeExheW91dD1cImNvbHVtblwiXHJcbiAgICAgICBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIlxyXG4gICAgICAgY2xhc3M9XCJ3LXRpbWUtY29udGVudFwiPlxyXG4gICAgPG50dy1jbG9jayBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJ3LWFuaW1hdGlvbi16b29tXCJcclxuICAgICAgICAgICAgIFt1c2VyVGltZV09XCJ1c2VyVGltZVwiXHJcbiAgICAgICAgICAgICAodXNlclRpbWVDaGFuZ2UpPVwiZW1pdHVzZXJUaW1lQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgWyhjdXJyZW50VmlldyldPVwiY3VycmVudFZpZXdcIlxyXG4gICAgICAgICAgICAgKHZpZXdDaGFuZ2UpPVwic2V0Q3VycmVudFZpZXcoJGV2ZW50KVwiPlxyXG4gICAgPC9udHctY2xvY2s+XHJcblxyXG4gICAgPGRpdiBmeEZsZXhBbGlnbj1cImVuZFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b25cclxuICAgICAgICAgICAgICAoY2xpY2spPVwicmV2ZXJ0KClcIj5cclxuICAgICAgICB7e3JldmVydExhYmVsfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvblxyXG4gICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInN1Ym1pdCgpXCI+XHJcbiAgICAgICAge3tzdWJtaXRMYWJlbH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS53LXRpbWV7bWF4LWhlaWdodDoxMDAlO21pbi1oZWlnaHQ6MzUwcHg7aGVpZ2h0OjM1MHB4fS53LXRpbWUgLnctdGltZXBpY2tlci10aW1lLWNvbnRhaW5lcntwYWRkaW5nOjE1cHg7bWluLXdpZHRoOjE2MHB4O3dpZHRoOjE2MHB4fS53LXRpbWUgLnctdGltZXBpY2tlci10aW1lLWNvbnRhaW5lci5tYXQtdG9vbGJhci1zaW5nbGUtcm93e2hlaWdodDoxMDAlfS53LXRpbWUgLnctdGltZXBpY2tlci1zZWxlY3RlZC10aW1le2ZvbnQtc2l6ZTozLjVyZW07Zm9udC13ZWlnaHQ6NDAwO2Rpc3BsYXk6ZmxleH0udy10aW1lIC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbXtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjNyZW07cGFkZGluZy10b3A6MnJlbX0udy10aW1lIC53LXRpbWUtY29udGVudHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmc6NnB4fS53LXRpbWUgLnctdGltZS1jb250ZW50IHctY2xvY2t7cGFkZGluZzoxMnB4IDA7aGVpZ2h0OmNhbGMoMTAwJSAtIDU4cHgpfS53LXRpbWUudmVydGljYWwtdGltZXtoZWlnaHQ6YXV0b30udy10aW1lLnZlcnRpY2FsLXRpbWUgLnctdGltZXBpY2tlci10aW1lLWNvbnRhaW5lcnttaW4td2lkdGg6YXV0bzt3aWR0aDoxMDAlO2hlaWdodDoxMDBweH0udy10aW1lLnZlcnRpY2FsLXRpbWUgLnctdGltZXBpY2tlci10aW1lLWNvbnRhaW5lciAudy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG17cGFkZGluZzowIDEycHh9LnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBtPnNwYW4sLnctdGltZXBpY2tlci1zZWxlY3RlZC10aW1lPnNwYW57b3V0bGluZTowO29wYWNpdHk6LjV9LnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBtPnNwYW46bm90KC5hY3RpdmUpLC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZT5zcGFuOm5vdCguYWN0aXZlKXtjdXJzb3I6cG9pbnRlcn0udy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG0+c3Bhbi5hY3RpdmUsLnctdGltZXBpY2tlci1zZWxlY3RlZC10aW1lPnNwYW4uYWN0aXZle29wYWNpdHk6MX0udy1hbmltYXRlLW5leHR7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUwJSwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDUwJSwwLDFweCl9LnctYW5pbWF0ZS1uZXh0LXJlbW92ZXt0cmFuc2l0aW9uOi41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MCUsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MCUsMCwxcHgpfS53LWFuaW1hdGUtbmV4dC1yZW1vdmUtYWN0aXZle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDFweCl9LnctYW5pbWF0ZS1wcmV2e29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDFweCl9LnctYW5pbWF0ZS1wcmV2LXJlbW92ZXt0cmFuc2l0aW9uOi4zcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDFweCl9LnctYW5pbWF0ZS1wcmV2LXJlbW92ZS1hY3RpdmV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMXB4KX1ALXdlYmtpdC1rZXlmcmFtZXMgdy1hbmltYXRpb24tYm91bmNle2Zyb217b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9NzAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHctYW5pbWF0aW9uLWJvdW5jZXtmcm9te29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfTcwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LnctYW5pbWF0aW9uLXpvb20ubmctZW50ZXJ7dHJhbnNpdGlvbjouM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouM3M7YW5pbWF0aW9uLWR1cmF0aW9uOi4zczstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnctYW5pbWF0aW9uLWJvdW5jZTthbmltYXRpb24tbmFtZTp3LWFuaW1hdGlvbi1ib3VuY2V9YF0sXHJcbiAgcHJvdmlkZXJzOiBbVHJhbnNsYXRlUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB1c2VyVGltZTogSVRpbWU7XHJcbiAgQE91dHB1dCgpIHVzZXJUaW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSByZXZlcnRMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1Ym1pdExhYmVsOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSByZXZlcnRlZDogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjxJVGltZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBWSUVXX0hPVVJTID0gQ0xPQ0tfVFlQRS5IT1VSUztcclxuICBwdWJsaWMgVklFV19NSU5VVEVTID0gQ0xPQ0tfVFlQRS5NSU5VVEVTO1xyXG4gIHB1YmxpYyBjdXJyZW50VmlldzogQ0xPQ0tfVFlQRSA9IHRoaXMuVklFV19IT1VSUztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudXNlclRpbWUpIHtcclxuICAgICAgdGhpcy51c2VyVGltZSA9IHtcclxuICAgICAgICBob3VyOiA2LFxyXG4gICAgICAgIG1pbnV0ZTogMCxcclxuICAgICAgICBtZXJpZGVuOiAnUE0nLFxyXG4gICAgICAgIGZvcm1hdDogMTJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMucmV2ZXJ0TGFiZWwpIHtcclxuICAgICAgdGhpcy5yZXZlcnRMYWJlbCA9IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0oJ2J1dHRvbnMuQ2FuY2VsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN1Ym1pdExhYmVsKSB7XHJcbiAgICAgIHRoaXMuc3VibWl0TGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKCdidXR0b25zLk9rJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRIb3VyKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5mb3JtYXQgPT09IDI0KSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXJUaW1lLmhvdXIgPT09IDI0KSB7XHJcbiAgICAgICAgcmV0dXJuICcwMCc7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VyVGltZS5ob3VyIDwgMTApIHtcclxuICAgICAgICByZXR1cm4gJzAnICsgU3RyaW5nKHRoaXMudXNlclRpbWUuaG91cik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMudXNlclRpbWUuaG91cik7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRNaW51dGUoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnVzZXJUaW1lLm1pbnV0ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gJzAwJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPCAxMCkge1xyXG4gICAgICByZXR1cm4gJzAnICsgU3RyaW5nKHRoaXMudXNlclRpbWUubWludXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBTdHJpbmcodGhpcy51c2VyVGltZS5taW51dGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFZpZXcodHlwZTogQ0xPQ0tfVFlQRSkge1xyXG4gICAgdGhpcy5jdXJyZW50VmlldyA9IHR5cGU7XHJcbiAgfVxyXG5cclxuICBzZXRNZXJpZGllbihtOiAnUE0nIHwgJ0FNJykge1xyXG4gICAgdGhpcy51c2VyVGltZS5tZXJpZGVuID0gbTtcclxuICB9XHJcblxyXG4gIHJldmVydCgpIHtcclxuICAgIHRoaXMucmV2ZXJ0ZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcblxyXG4gIGVtaXR1c2VyVGltZUNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy51c2VyVGltZUNoYW5nZS5lbWl0KHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmllbGQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uTW9kZXMsIEZvcm1Nb2RlcyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9lbnVtcyc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZmllbGQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHZhbGlkYXRpb24gZXJyb3IgY2xhc3MuKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIFZhbGlkYXRpb25FcnJvckNsYXNzOiBzdHJpbmcgPSAnY3NzQ2xhc3Nlcy5WYWxpZGF0aW9uRXJyb3InO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSByZWxhdGVkIGZpZWxkLiovXHJcbiAgQElucHV0KCdmaWVsZCcpIGZpZWxkOiBGaWVsZDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoTmdNb2RlbCkgY29udHJvbDogTmdNb2RlbDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcGF0dGVybi4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclBhdHRlcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIHN0aWxsIHVudXNlZC4gYWx3YXlzIGZhbHNlLlxyXG4gIHByaXZhdGUgaXNQcmlzdGluZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGZpZWxkJ3MgdmFsdWUuXHJcbiAgICogQHBhcmFtIGFueSBuZXdWYWx1ZSBUaGUgbmV3IGZpZWxkIHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgZ2V0VmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5kYXRhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUsIHRoaXMuZmllbGQuZGF0YS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFRyaWdnZXJzIGEgZHluYW1pYyBldmVudCBpbiBjYXNlIGl0IGlzIGRlZmluZWQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBldmVudFR5cGUgVGhlIHR5cGUgb2YgdGhlIGV2ZW50LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cyBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgICogQHBhcmFtIGFueSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgdHJpZ2dlckR5bmFtaWNFdmVudChldmVudFR5cGU6IHN0cmluZywgZXZlbnRBcmd1bWVudHM6IGFueSwgc291cmNlOiBhbnkpIHtcclxuICAgIGlmIChzb3VyY2UuZXZlbnRUcmlnZ2Vycykge1xyXG4gICAgICBjb25zdCBldmVudCA9IHNvdXJjZS5ldmVudFRyaWdnZXJzW2V2ZW50VHlwZV07XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbiA9IHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnRbZXZlbnQuaGFuZGxlcl07XHJcblxyXG4gICAgICBpZiAocGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IFtldmVudEFyZ3VtZW50c107XHJcblxyXG4gICAgICAgIGlmIChldmVudC5wYXJhbWV0ZXJzICYmIGV2ZW50LnBhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuY29uY2F0KGV2ZW50LnBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24odGhpcy5icmlkZ2VTZXJ2aWNlLnBhcmVudENvbXBvbmVudCwgc291cmNlLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIGhpZGRlbi5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIGhpZGRlbi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc0ZpZWxkSGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuaGlkZGVuIHx8XHJcbiAgICAgICh0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zZWN0aW9uTW9kZSAhPT0gU2VjdGlvbk1vZGVzLk5vbmUgJiZcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdGhpcy5maWVsZC5zZWN0aW9uSWQgIT09IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmlkKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gc2hvdWxkIGJlIHNob3duLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSB2YWxpZGF0aW9uIHNob3VsZCBiZSBzaG93bi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc1ZhbGlkYXRpb25TaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc1ByaXN0aW5lICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gYXN0ZXJpc2sgc2hvdWxkIGJlIHNob3duLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSB2YWxpZGF0aW9uIGFzdGVyaXNrIHNob3VsZCBiZSBzaG93bi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb24gJiYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCB8fCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluID4gMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybSBjb250cm9sIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHVibGljIHZhbGlkYXRlKGV2ZW50QXJndW1lbnRzPzogYW55LCBpc1N1Ym1pdD86IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLnByZVZhbGlkYXRlKGlzU3VibWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUmVxdWlyZWRDb25kaXRpb24oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZvclBhdHRlcm4pIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVBhdHRlcm5Db25kaXRpb24oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZvclJhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSYW5nZUNvbmRpdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVWYWxpZGF0aW9uU3VtbWFyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZHMgYW4gZXJyb3IgdG8gdGhlIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIHN0cmluZyBtZXNzYWdlIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyB0eXBlIFRoZSB2YWxpZGF0aW9uIGVycm9yIHR5cGUuXHJcbiAgKi9cclxuICBwdWJsaWMgYWRkVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nID0gRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MpIHtcclxuICAgIGlmICghdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKHR5cGUsIG1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbGlkYXRpb24gZXJyb3JzLiovXHJcbiAgcHVibGljIGNsZWFyVmFsaWRhdGlvbkVycm9ycygpIHtcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIHZhbGlhdGVkLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSBmaWVsZCBzaG91bGQgYmUgdmFsaWF0ZWQuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgc2hvdWxkVmFsaWRhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uICYmICghdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzIHx8IHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBQcmVwYXJlcyB0aGUgZmllbGQgZm9yIHZhbGlkYXRpb24gYW5kIG1ha2VzIHN1cmUgaXQgaXNuJ3QgdmFsaWRhdGVkIHJlcGVhdGVkbHkuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gaXNTdWJtaXQgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGlzIHJlYWNoZWQgZnJvbSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBwcmVWYWxpZGF0ZShpc1N1Ym1pdDogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMuaXNQcmlzdGluZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChpc1N1Ym1pdCkge1xyXG4gICAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWxpZGF0aW9uIHN1bW1hcnkuKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKSB7XHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMpIHtcclxuICAgICAgaWYgKGZpZWxkLnZhbGlkYXRpb25FcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzID0gdGhpcy5icmlkZ2VTZXJ2aWNlXHJcbiAgICAgICAgICAuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmNvbmNhdChmaWVsZC52YWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgYSBjb250cm9sIGZvciB0aGUgcmVxdWlyZWQgY29uZGl0aW9uIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVSZXF1aXJlZENvbmRpdGlvbigpOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5maWVsZC5kYXRhIHx8ICF0aGlzLmZpZWxkLmRhdGEudmFsdWUgfHwgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRUZXh0KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgYSBjb250cm9sIGZvciB0aGUgcGF0dGVybiBjb25kaXRpb24gYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVQYXR0ZXJuQ29uZGl0aW9uKCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucGF0dGVybiAmJiB0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucGF0dGVybik7XHJcbiAgICAgIGlmICghcmVnRXgudGVzdCh0aGlzLmZpZWxkLmRhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5wYXR0ZXJuVGV4dCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGEgY29udHJvbCBmb3IgdGhlIHJhbmdlIGNvbmRpdGlvbiBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlUmFuZ2VDb25kaXRpb24oKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgY29uc3QgdmFsdWVMZW5ndGggPSB0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlID8gdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgaWYgKCh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluICYmIHZhbHVlTGVuZ3RoIDwgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbikgfHxcclxuICAgICAgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXggJiYgdmFsdWVMZW5ndGggPiB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4KSkge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJhbmdlVGV4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgd2hldGhlciB0aGUgZm9ybSBpcyBpbiBkaXNwbGF5IG1vZGUuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZvcm0gaXMgaW4gZGlzcGxheSBtb2RlLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIGlzRm9ybUluRGlzcGxheU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZm9ybU1vZGUgPT09IEZvcm1Nb2Rlcy5EaXNwbGF5O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbGl0aWVzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2h0dHAtcmVxdWVzdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1ib3VuZGFibGUtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQm91bmRhYmxlRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cFJlcXVlc3RzU2VydmljZTogSHR0cFJlcXVlc3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbGl0aWVzU2VydmljZTogVXRpbGl0aWVzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5kYXRhQmluZE9wdGlvbnMoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhQmluZE9wdGlvbnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBmaWVsZCdzIG9wdGlvbnMuKi9cclxuICBwcm90ZWN0ZWQgZGF0YUJpbmRPcHRpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEub3B0aW9uc0VuZHBvaW50KSB7XHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLmxvb2t1cHNbdGhpcy5maWVsZC5kYXRhLm9wdGlvbnNFbmRwb2ludF0sXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZE9wdGlvbnMoZW5kcG9pbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBCaW5kcyB0aGUgZmllbGQncyBvcHRpb25zLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnQgVGhlIGVuZHBvaW50LlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIGJpbmRPcHRpb25zKGVuZHBvaW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoZW5kcG9pbnQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS5vcHRpb25zID0gcmVzcG9uc2U7XHJcbiAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdiaW5kT3B0aW9uczogJywgZXhjZXB0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jaGVja2JveC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2IGNsYXNzPVwiY2hlY2tCb3hIb2xkZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8cC1jaGVja2JveCAqbmdGb3I9XCJsZXQgY2hlY2tib3ggb2YgZmllbGQuZGF0YS5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lKydfJytpXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cImNoZWNrYm94Lm5hbWUgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImNoZWNrYm94LmlkXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICAgIDwvcC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIDx1bCAqbmdJZj1cImZpZWxkPy5kYXRhPy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRpdGxlIG9mIGZpZWxkPy5kYXRhPy52YWx1ZVwiPnt7dGl0bGV9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA9PSAxXCI+XHJcbiAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0aXRsZSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYHAtY2hlY2tib3h7ZGlzcGxheTpibG9ja31ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktY2hrYm94LnVpLXdpZGdldHtmbG9hdDpyaWdodDttYXJnaW4tbGVmdDoxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10nLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWNoaXBzLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWNoaXBzIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgIFthbGxvd0R1cGxpY2F0ZV09XCJmaWVsZC52YWxpZGF0aW9uLmFsbG93RHVwbGljYXRlXCJcclxuICAgICAgICAgICBbYWRkT25CbHVyXT1cImZpZWxkLmFkZE9uQmx1clwiXHJcbiAgICAgICAgICAgW2FkZE9uVGFiXT1cImZpZWxkLmFkZE9uVGFiXCJcclxuICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAob25BZGQpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25BZGQnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgIChvblJlbW92ZSk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblJlbW92ZScsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICA8L3AtY2hpcHM+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdGl0bGUgb2YgZmllbGQuZGF0YS52YWx1ZVwiPnt7dGl0bGV9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzLWlucHV0LXRva2VuLDpob3N0IDo6bmctZGVlcCAudWktY2hpcHMtaW5wdXQtdG9rZW4gaW5wdXR7d2lkdGg6MTAwJX06aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzPnVsLnVpLWlucHV0dGV4dHtwYWRkaW5nOjVweCAuMjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hpcHNGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmZpZWxkLmRhdGEudmFsdWVbaV07XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICdbJyArIGkgKyAnXScsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWRhdGV0aW1lLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWNhbGVuZGFyICNjYWxlbmRhclxyXG4gICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgW3JlYWRvbmx5SW5wdXRdPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW3Nob3dJY29uXT1cImZpZWxkLnNob3dJY29uXCJcclxuICAgICAgICAgICAgICBbc2hvd1RpbWVdPVwiZmllbGQuc2hvd1RpbWVcIlxyXG4gICAgICAgICAgICAgIFtob3VyRm9ybWF0XT1cImZpZWxkLmhvdXJGb3JtYXRcIlxyXG4gICAgICAgICAgICAgIFttb250aE5hdmlnYXRvcl09XCJmaWVsZC5tb250aE5hdmlnYXRvclwiXHJcbiAgICAgICAgICAgICAgW3llYXJOYXZpZ2F0b3JdPVwiZmllbGQueWVhck5hdmlnYXRvclwiXHJcbiAgICAgICAgICAgICAgW3llYXJSYW5nZV09XCJmaWVsZC55ZWFyUmFuZ2VcIlxyXG4gICAgICAgICAgICAgIFtkYXRlRm9ybWF0XT1cImZpZWxkLmRhdGVGb3JtYXRcIlxyXG4gICAgICAgICAgICAgIFttaW5EYXRlXT1cImZpZWxkLm1pbkRhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW21heERhdGVdPVwiZmllbGQubWF4RGF0ZVZhbHVlXCJcclxuICAgICAgICAgICAgICBbZGVmYXVsdERhdGVdPVwiZmllbGQuZGVmYXVsdERhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25DbG9zZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0JywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAob25TZWxlY3QpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblNlbGVjdCcsICRldmVudCwgZmllbGQpO1wiPlxyXG4gIDwvcC1jYWxlbmRhcj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZC5kYXRhLnZhbHVlIHwgZGF0ZTpmaWVsZC5kaXNwbGF5RGF0ZUZvcm1hdH19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2Bib2R5LmVuIDpob3N0IDo6bmctZGVlcCBidXR0b24udWktZGF0ZXBpY2tlci10cmlnZ2Vye3JpZ2h0OjB9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYnV0dG9uLnVpLWRhdGVwaWNrZXItdHJpZ2dlcntsZWZ0OjB9Omhvc3QgOjpuZy1kZWVwIHNwYW4udWktY2FsZW5kYXJ7ZGlzcGxheTpibG9ja306aG9zdCA6Om5nLWRlZXAgcC1jYWxlbmRhciBpbnB1dHtib3JkZXItcmFkaXVzOi4yNXJlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXItYnV0dG9ue2JvcmRlci1yYWRpdXM6LjI1cmVtIDAgMCAuMjVyZW19Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyLnVpLWNhbGVuZGFyLXctYnRuIGlucHV0e2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOi4yNXJlbTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czouMjVyZW19Omhvc3QgOjpuZy1kZWVwIGJ1dHRvbi51aS1kYXRlcGlja2VyLXRyaWdnZXJ7cG9zaXRpb246YWJzb2x1dGV9Omhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhciAudWktZGF0ZXBpY2tlcnt3aWR0aDoxN2VtO21pbi13aWR0aDphdXRvfTpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXIgLnVpLWNhbGVuZGFyLWJ1dHRvbiAudWktYnV0dG9uLWljb24tbGVmdHtmb250LXNpemU6MS4yNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRldGltZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzZWFyY2ggZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFyJykgY2FsZW5kYXJFbGVtZW50OiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGVcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zZXRDYWxlbmRhck9wdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgdGhpcy5zZXRDYWxlbmRhck9wdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUsIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuZmllbGQuZGF0YS52YWx1ZSwgdGhpcy5maWVsZC5mb3JtRGF0YURhdGVGb3JtYXQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIC8vIGJ1Z2d5IGlmIGRvbmUgZnJvbSBoZXJlIGFmdGVyIGNvbXBvbmVudCBpcyBsb2FkZWQuIE1vdmVkIGJhY2sgdG8gYmVmb3JlIGNvbXBvbmVudCBsb2FkZWQuXHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNhbGVuZGFyIG9wdGlvbnMuKi9cclxuICBwcml2YXRlIHNldENhbGVuZGFyT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmNhbGVuZGFyRWxlbWVudCAmJiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMpIHtcclxuICAgICAgY29uc3QgY2FsZW5kYXJPcHRpb25zID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmNhbGVuZGFyT3B0aW9ucztcclxuXHJcbiAgICAgIGlmIChjYWxlbmRhck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyRWxlbWVudC5sb2NhbGUgPSBjYWxlbmRhck9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nYklucHV0RGF0ZXBpY2tlciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmdiQ2FsZW5kYXIsIE5nYkRhdGVwaWNrZXJJMThuLCBOZ2JDYWxlbmRhcklzbGFtaWNVbWFscXVyYSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJc2xhbWljSTE4biB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RhdGVwaWNrZXItY2FsZW5kYXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1kYXRldGltZS1oaWpyaS1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2IGNsYXNzPVwiaGlqcmktZGF0ZS1jb250cm9sXCI+XHJcbiAgICA8aW5wdXQgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgbmdiRGF0ZXBpY2tlclxyXG4gICAgICAgICAgICNpbnB1dD1cIm5nYkRhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICNkZWZhdWx0SW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICBbbWluRGF0ZV09XCJmaWVsZC5taW5EYXRlVmFsdWVcIlxyXG4gICAgICAgICAgIFttYXhEYXRlXT1cImZpZWxkLm1heERhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgW3Nob3dXZWVrTnVtYmVyc109XCJmaWVsZC5zaG93V2Vla051bWJlcnNcIlxyXG4gICAgICAgICAgIFtkaXNwbGF5TW9udGhzXT1cImZpZWxkLmRpc3BsYXlNb250aHNcIlxyXG4gICAgICAgICAgIFtvdXRzaWRlRGF5c109XCJmaWVsZC5vdXRzaWRlRGF5c1wiXHJcbiAgICAgICAgICAgW3Nob3dXZWVrZGF5c109XCJmaWVsZC5zaG93V2Vla2RheXNcIlxyXG4gICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUNhbGVuZGFyKCk7dmFsaWRhdGUoKTtcIlxyXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3QnLCAkZXZlbnQsIGZpZWxkKTtcIiAvPlxyXG5cclxuICAgIDwhLS0gaWNvbiAtLT5cclxuICAgIDxidXR0b24gY2xhc3M9XCJoaWpyaS1kYXRlLWljb24tY29udGFpbmVyXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDYWxlbmRhcigpO1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImhpanJpLWRhdGUtaWNvblwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuc2hvd0ljb25cIj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQ/LmRhdGE/LnZhbHVlPy5kYXl9fS97e2ZpZWxkPy5kYXRhPy52YWx1ZT8ubW9udGh9fS97e2ZpZWxkPy5kYXRhPy52YWx1ZT8ueWVhcn19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AuaGlqcmktZGF0ZXtoZWlnaHQ6MzVweH0uaGlqcmktZGF0ZS1jb250cm9se3Bvc2l0aW9uOnJlbGF0aXZlfS5oaWpyaS1kYXRlLWljb24tY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3BhZGRpbmc6MCA2cHg7YmFja2dyb3VuZC1jb2xvcjojMjM5OWU1O2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEwMCU7bGluZS1oZWlnaHQ6MS44O2JvcmRlcjowfWJ1dHRvbi5oaWpyaS1kYXRlLWljb24tY29udGFpbmVyOmRpc2FibGVke29wYWNpdHk6LjM1fS5oaWpyaS1kYXRlLWljb246Zm9jdXMsLmhpanJpLWRhdGUtaWNvbjpob3ZlcntiYWNrZ3JvdW5kOiMxZjg5Y2V9LmhpanJpLWRhdGUtaWNvbjphZnRlcntjb250ZW50OidcXFxcZTkyNyc7Zm9udC1mYW1pbHk6cHJpbWVpY29ucztmb250LXNpemU6MS4yNWVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyIG5nYi1kYXRlcGlja2VyLW5hdmlnYXRpb24gLm5nYi1kcC1uYXZpZ2F0aW9uLWNoZXZyb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlciBuZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uIC5yaWdodCAubmdiLWRwLW5hdmlnYXRpb24tY2hldnJvbnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEzNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMTM1ZGVnKX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNlbGVjdHtiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQuNzVyZW0gY2VudGVyfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5oaWpyaS1kYXRlLWljb24tY29udGFpbmVye2xlZnQ6MH1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCAuaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcntyaWdodDowfTpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXNlbGVjdHtiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgLjI1cmVtIGNlbnRlciFpbXBvcnRhbnQ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7bWluLXdpZHRoOjEwMHB4fTpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtZGF5LDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtd2Vlay1udW1iZXIsOmhvc3QgOjpuZy1kZWVwIG5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcgLm5nYi1kcC13ZWVrZGF5e3dpZHRoOjIuNXJlbTtoZWlnaHQ6Mi41cmVtfTpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtZGF5IGRpdnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2xpbmUtaGVpZ2h0OjIuNXJlbX1gXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogTmdiQ2FsZW5kYXIsIHVzZUNsYXNzOiBOZ2JDYWxlbmRhcklzbGFtaWNVbWFscXVyYSB9LFxyXG4gICAgeyBwcm92aWRlOiBOZ2JEYXRlcGlja2VySTE4biwgdXNlQ2xhc3M6IElzbGFtaWNJMThuIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBjYWxlbmRhcjogTmdiSW5wdXREYXRlcGlja2VyO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLm1pbkRhdGUpIHtcclxuICAgICAgdGhpcy5maWVsZC5taW5EYXRlVmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdCh0aGlzLmZpZWxkLm1pbkRhdGUsIG5ldyBEYXRlKHRoaXMuZmllbGQubWluRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLm1heERhdGUpIHtcclxuICAgICAgdGhpcy5maWVsZC5tYXhEYXRlVmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdCh0aGlzLmZpZWxkLm1heERhdGUsIG5ldyBEYXRlKHRoaXMuZmllbGQubWF4RGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEuZGF0ZVZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KFxyXG4gICAgICAgIHRoaXMuZmllbGQuZGF0YS5kYXRlVmFsdWUsXHJcbiAgICAgICAgbmV3IERhdGUodGhpcy5maWVsZC5kYXRhLmRhdGVWYWx1ZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy55ZWFyJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLnllYXIpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5tb250aCcsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5tb250aCk7XHJcblxyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnLmRheScsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5kYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUb2dnbGVzIHRoZSBjYWxlbmRhci4qL1xyXG4gIHB1YmxpYyB0b2dnbGVDYWxlbmRhcigpIHtcclxuICAgIHRoaXMuY2FsZW5kYXIudG9nZ2xlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1lZGl0b3ItZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBbbmdDbGFzc109XCJ7J2hpZGUtdG9vbGJhcic6IWZpZWxkLnNob3dUb29sYmFyfVwiPlxyXG4gICAgPHAtZWRpdG9yIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7J2hlaWdodCc6ZmllbGQuaGVpZ2h0fVwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25TZWxlY3Rpb25DaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3Rpb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgIChvblRleHRDaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgICA8L3AtZWRpdG9yPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2lubmVySFRNTF09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj48L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5xbC1lZGl0b3IgcHtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgc3Bhbi5xbC1waWNrZXItbGFiZWx7dGV4dC1hbGlnbjpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZXtsZWZ0OnVuc2V0fTpob3N0IDo6bmctZGVlcCAuaGlkZS10b29sYmFyIC51aS1lZGl0b3ItdG9vbGJhcntkaXNwbGF5Om5vbmV9Omhvc3QgOjpuZy1kZWVwIC5oaWRlLXRvb2xiYXIgLnVpLWVkaXRvci1jb250ZW50e2JvcmRlci10b3A6MXB4IHNvbGlkICNjY2MhaW1wb3J0YW50fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgZ2V0VmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5zaG93VG9vbGJhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZC5kYXRhLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5yZXBsYWNlKC88W14+XSo+L2csICcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2lucHV0LWVycm9yJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1maWxlLXVwbG9hZC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1maWxlVXBsb2FkIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgW3VybF09XCJmaWVsZC5kYXRhLnVybFwiXHJcbiAgICAgICAgICAgICAgICBbbXVsdGlwbGVdPVwiZmllbGQubXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgW2FjY2VwdF09XCJmaWVsZC52YWxpZGF0aW9uLmFjY2VwdFwiXHJcbiAgICAgICAgICAgICAgICAjaW5wdXRcclxuICAgICAgICAgICAgICAgIFthdXRvXT1cImZpZWxkLmF1dG9cIlxyXG4gICAgICAgICAgICAgICAgW21heEZpbGVTaXplXT1cImZpZWxkLnZhbGlkYXRpb24ubWF4RmlsZVNpemVJbkJ5dGVzXCJcclxuICAgICAgICAgICAgICAgIFttb2RlXT1cImZpZWxkLm1vZGVcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dDYW5jZWxCdXR0b25dPVwiZmllbGQuYnV0dG9ucy5zaG93Q2FuY2VsQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIFtzaG93VXBsb2FkQnV0dG9uXT1cImZpZWxkLmJ1dHRvbnMuc2hvd1VwbG9hZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBbY2hvb3NlTGFiZWxdPVwiZmllbGQuYnV0dG9ucy5jaG9vc2VMYWJlbCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdXBsb2FkTGFiZWxdPVwiZmllbGQuYnV0dG9ucy51cGxvYWRMYWJlbCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbY2FuY2VsTGFiZWxdPVwiZmllbGQuYnV0dG9ucy5jYW5jZWxMYWJlbCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVTaXplTWVzc2FnZVN1bW1hcnk9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVTaXplTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlRGV0YWlsPVwiaW52YWxpZEZpbGVUeXBlXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlVHlwZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVUeXBlXCJcclxuICAgICAgICAgICAgICAgIGN1c3RvbVVwbG9hZD10cnVlXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAgKG9uU2VsZWN0KT1cInZhbGlkYXRlKCdvblNlbGVjdCcpO1wiXHJcbiAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwidmFsaWRhdGUoJ29uUmVtb3ZlJyk7XCJcclxuICAgICAgICAgICAgICAgIChvbkNsZWFyKT1cInZhbGlkYXRlKCdvbkNsZWFyJyk7XCI+XHJcbiAgPC9wLWZpbGVVcGxvYWQ+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IGNsYXNzPVwidXBsb2FkLWZpbGUtdmlld2VyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdOZXcnICYmIGZpZWxkPy5kYXRhPy52YWx1ZT8ubGVuZ3RoID4gMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVwbG9hZC1maWxlLWl0ZW1cIlxyXG4gICAgICAgICAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWVsZC5kYXRhLnZhbHVlXCI+XHJcbiAgICAgIDxhIFtocmVmXT1cImZpbGUudXJsXCJcclxuICAgICAgICAgW2Rvd25sb2FkXT1cImZpbGUuZmlsZU5hbWVcIlxyXG4gICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICBjbGFzcz1cInVwbG9hZC1maWxlLWFuY2hvclwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInVwbG9hZC1maWxlLXRpdGxlXCI+e3tmaWxlLmZpbGVOYW1lfX08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgICAoY2xpY2spPVwicmVtb3ZlRmlsZShmaWxlKTt2YWxpZGF0ZSgnb25SZW1vdmVGaWxlJyk7XCJcclxuICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgY2xhc3M9XCJ0cmFzaC1pY29uLXN0eWxlXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCA6Om5nLWRlZXAgcC1maWxldXBsb2FkIC51aS1tZXNzYWdlcy1lcnJvcntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fTpob3N0IDo6bmctZGVlcCAudWktZmlsZXVwbG9hZHttYXJnaW4tYm90dG9tOjhweH0udXBsb2FkLWZpbGUtdmlld2Vye2JvcmRlcjoxcHggc29saWQgI2Q1ZDVkNTtwYWRkaW5nOjEwcHh9LnVwbG9hZC1maWxlLXZpZXdlciAudXBsb2FkLWZpbGUtaXRlbXtib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoxMHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjZmN2Y5IDAsI2ViZWRmMCAxMDAlKTttYXJnaW4tYm90dG9tOjEwcHh9LnVwbG9hZC1maWxlLXRpdGxle3BhZGRpbmc6MCAxNXB4fWEudXBsb2FkLWZpbGUtYW5jaG9ye2xpbmUtaGVpZ2h0OjJ9LnVwbG9hZC1maWxlLXZpZXdlciBkaXY6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9YS50cmFzaC1pY29uLXN0eWxle3BhZGRpbmc6NnB4IDExcHg7Ym9yZGVyLXJhZGl1czo2cHg7Zm9udC1zaXplOjEycHg7Ym9yZGVyOjFweCBzb2xpZCAjMjM5OWU1O2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMjM5OWU1O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9YS50cmFzaC1pY29uLXN0eWxlOmhvdmVye2JvcmRlcjoxcHggc29saWQgIzFmODljZTtiYWNrZ3JvdW5kOiMxZjg5Y2V9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYS50cmFzaC1pY29uLXN0eWxle2Zsb2F0OmxlZnR9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS50cmFzaC1pY29uLXN0eWxle2Zsb2F0OnJpZ2h0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgZmlsZSB1cGxvYWQgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoRmlsZVVwbG9hZCkgZmlsZVVwbG9hZENvbnRyb2w6IEZpbGVVcGxvYWQ7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRmlsZSh0aGlzLmZpZWxkLmRhdGEudmFsdWVbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzKSB7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lLCBmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGZvcm0gY29udHJvbCBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gaXNTdWJtaXQgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGlzIHJlYWNoZWQgZnJvbSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZShldmVudEFyZ3VtZW50cz86IGFueSwgaXNTdWJtaXQ/OiBib29sZWFuKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgdGhpcy5wcmVWYWxpZGF0ZShpc1N1Ym1pdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUoKSkge1xyXG4gICAgICBsZXQgdmFsdWVMZW5ndGggPSAwO1xyXG4gICAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbCkge1xyXG4gICAgICAgIHZhbHVlTGVuZ3RoID0gZXZlbnRBcmd1bWVudHMgPT09ICdvblJlbW92ZScgPyB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzLmxlbmd0aCAtIDEgOiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlTGVuZ3RoICs9IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbiAmJiB2YWx1ZUxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4pIHx8XHJcbiAgICAgICAgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXggJiYgdmFsdWVMZW5ndGggPiB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4KSkge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmFuZ2VUZXh0KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4RmlsZVNpemVJbkJ5dGVzID4gMCAmJiB0aGlzLmZpbGVVcGxvYWRDb250cm9sICYmIHRoaXMuZmlsZVVwbG9hZENvbnRyb2wubXNncykge1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRGaWxlU2l6ZU1lc3NhZ2UgPSB0aGlzLmZpbGVVcGxvYWRDb250cm9sLm1zZ3MuZmluZChtID0+IG0uc3VtbWFyeSA9PT0gJ2ludmFsaWRGaWxlU2l6ZScpO1xyXG5cclxuICAgICAgICBpZiAoaW52YWxpZEZpbGVTaXplTWVzc2FnZSkge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5pbnZhbGlkRmlsZVNpemVUZXh0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5tc2dzLmZpbmQobSA9PiBtLnN1bW1hcnkgPT09ICdpbnZhbGlkRmlsZVR5cGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGludmFsaWRGaWxlVHlwZU1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24uaW52YWxpZEZpbGVUeXBlVGV4dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVWYWxpZGF0aW9uU3VtbWFyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgdGhlIGZpbGUuXHJcbiAgICogQHBhcmFtIGFueSBmaWxlIFRoZSBmaWxlIHRvIHJlbW92ZS5cclxuICAqL1xyXG4gIHB1YmxpYyByZW1vdmVGaWxlKGZpbGU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlLnBvcChmaWxlKTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJDb21wb25lbnQsIENyb3BwZXJTZXR0aW5ncyB9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICdwcmltZW5nL2ZpbGV1cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctaW1hZ2UtY3JvcHBlci1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZD8uY3NzQ2xhc3Nlcz8ubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dCAtLT5cclxuICA8IS0tIHVwbG9hZCBjb250cm9sIC0tPlxyXG4gIDxwLWZpbGVVcGxvYWQgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIG1vZGU9XCJhZHZhbmNlZFwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd0NhbmNlbEJ1dHRvbl09ZmFsc2VcclxuICAgICAgICAgICAgICAgIFtzaG93VXBsb2FkQnV0dG9uXT1mYWxzZVxyXG4gICAgICAgICAgICAgICAgW2Nob29zZUxhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2hvb3NlTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBjdXN0b21VcGxvYWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJzZXRDcm9wcGVySW1hZ2UoKTt2YWxpZGF0ZSgpO1wiXHJcbiAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwiY2xlYXJWYWx1ZSgpO3ZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLWZpbGVVcGxvYWQ+XHJcblxyXG4gIDwhLS0gY3JvcHBlciAtLT5cclxuICA8aW1nLWNyb3BwZXIgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgW2hpZGRlbl09XCIhaW1hZ2VGaWxlLnNyY1wiXHJcbiAgICAgICAgICAgICAgIFtpbWFnZV09XCJpbWFnZUZpbGVcIlxyXG4gICAgICAgICAgICAgICBbc2V0dGluZ3NdPVwiY3JvcHBlclNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgKG9uQ3JvcCk9XCJzZXRWYWx1ZSgpXCI+XHJcbiAgPC9pbWctY3JvcHBlcj5cclxuXHJcbiAgPCEtLSBjcm9wcGVkIGltYWdlIC0tPlxyXG4gIDxzcGFuIGNsYXNzPVwiY3JvcHBlZC1pbWFnZVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICBbaGlkZGVuXT1cIiAhaW1hZ2VGaWxlLmltYWdlXCI+XHJcbiAgICA8aW1nICNjcm9wcGVkSW1hZ2VcclxuICAgICAgICAgKm5nSWY9XCJpbWFnZUZpbGUuaW1hZ2VcIlxyXG4gICAgICAgICBbc3JjXT1cImltYWdlRmlsZS5pbWFnZVwiXHJcbiAgICAgICAgIFt3aWR0aF09XCJjcm9wcGVyU2V0dGluZ3Mud2lkdGhcIlxyXG4gICAgICAgICBbaGVpZ2h0XT1cImNyb3BwZXJTZXR0aW5ncy5oZWlnaHRcIj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIDxpbWcgKm5nSWY9XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgW3NyY109XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgW3dpZHRoXT1cImNyb3BwZXJTZXR0aW5ncy53aWR0aFwiXHJcbiAgICAgICAgIFtoZWlnaHRdPVwiY3JvcHBlclNldHRpbmdzLmhlaWdodFwiPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgaW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9cC1maWxldXBsb2Fke2Rpc3BsYXk6YmxvY2t9Omhvc3QgOjpuZy1kZWVwIGltZy1jcm9wcGVyIC5uZzItaW1nY3JvcHtib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoyMHB4IDA7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO3dpZHRoOjEwMCU7bWFyZ2luOjEwcHggMDtkaXNwbGF5OmJsb2NrfS5mb3JtLWRpc3BsYXkgaW1ne2JvcmRlcjoxcHggc29saWQgI2Q1ZDVkNTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmVkZjA7cGFkZGluZzoxMHB4fS5jcm9wcGVkLWltYWdle3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBpbWFnZSBjcm9wcGVyIGNvbXBvbmVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoSW1hZ2VDcm9wcGVyQ29tcG9uZW50KSBjcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgKi9cclxuICBAVmlld0NoaWxkKCdjcm9wcGVkSW1hZ2UnKSBjcm9wcGVkSW1hZ2VFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBmaWxlIHVwbG9hZCBjb250cm9sLiovXHJcbiAgQFZpZXdDaGlsZChGaWxlVXBsb2FkKSBmaWxlVXBsb2FkQ29udHJvbDogRmlsZVVwbG9hZDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY3JvcHBlciBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBjcm9wcGVyU2V0dGluZ3M6IENyb3BwZXJTZXR0aW5ncztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgaW1hZ2UgZmlsZS4qL1xyXG4gIHB1YmxpYyBpbWFnZUZpbGU6IGFueSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUNyb3BwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgZmllbGQncyB2YWx1ZS5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgZmllbGQgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbmV3VmFsdWUudmFsdWU7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSkge1xyXG4gICAgICB0aGlzLmltYWdlRmlsZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZUZpbGUuc2V0QXR0cmlidXRlKCdjcm9zc09yaWdpbicsICdhbm9ueW1vdXMnKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlLnNyYyA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgICAgLy8gd29ya2Fyb3VuZCBhcyBpdCBpcyBub3Qgd29ya2luZyB3aXRob3V0IGl0LiBubyBpZGVhIHdoeSA6KVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jcm9wcGVyLnNldEltYWdlKHRoaXMuaW1hZ2VGaWxlKTsgfSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSAnJztcclxuXHJcbiAgICAgIHRoaXMuZmlsZVVwbG9hZENvbnRyb2wuY2xlYXIoKTtcclxuXHJcbiAgICAgIHRoaXMuY3JvcHBlci5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZUZpbGUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNyb3BwZWQgaW1hZ2UgdmFsdWUuKi9cclxuICBwdWJsaWMgc2V0VmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5jcm9wcGVkSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMuY3JvcHBlZEltYWdlRWxlbWVudC5uYXRpdmVFbGVtZW50LmN1cnJlbnRTcmM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNyb3BwZWQgaW1hZ2UuKi9cclxuICBwdWJsaWMgc2V0Q3JvcHBlckltYWdlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlc1swXTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIC8vIHNldCBhcyBhIHRlbXBvcmFyeSB2YWx1ZSBmb3IgdmFsaWRhdGlvbiBzaW5jZSB0aGUgcmVhZCBpcyBhc3luYy5cclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gJ3BsYWNlaG9sZGVyJztcclxuXHJcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkZW5kID0gKGxvYWRFdmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGUuc3JjID0gbG9hZEV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3JvcHBlci5zZXRJbWFnZSh0aGlzLmltYWdlRmlsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMuaW1hZ2VGaWxlLnNyYztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgY3JvcHBlciBjb21wb25lbnQuKi9cclxuICBwcml2YXRlIGluaXRpYWxpemVDcm9wcGVyKCkge1xyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MgPSBuZXcgQ3JvcHBlclNldHRpbmdzKCk7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3Mubm9GaWxlSW5wdXQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLndpZHRoID0gdGhpcy5jcm9wcGVyU2V0dGluZ3MuY3JvcHBlZFdpZHRoID0gdGhpcy5maWVsZC5jcm9wcGVyU2V0dGluZ3Mud2lkdGg7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5jcm9wcGVyU2V0dGluZ3MuY3JvcHBlZEhlaWdodCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNXaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLmNhbnZhc1dpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5taW5XaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLm1pbldpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLm1pbkhlaWdodCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLm1pbkhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5yb3VuZGVkID0gdGhpcy5maWVsZC5jcm9wcGVyU2V0dGluZ3Mucm91bmRlZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWluZm8tZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG4gIDxkaXYgW2lubmVySFRNTF09XCJmaWVsZC5odG1sU25pcHBldCB8IHRyYW5zbGF0ZVwiPjwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluZm9GaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWlucHV0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxpbnB1dCBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgIFthdXRvY29tcGxldGVdPVwiZmllbGQuYXV0b0NvbXBsZXRlXCJcclxuICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgIFt0eXBlXT1cImZpZWxkLmZpZWxkVHlwZVwiXHJcbiAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgW3BhdHRlcm5dPVwiZmllbGQudmFsaWRhdGlvbi5wYXR0ZXJuXCJcclxuICAgICAgICAgW21heGxlbmd0aF09XCJmaWVsZC52YWxpZGF0aW9uLmxlbmd0aFwiXHJcbiAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZC5kYXRhLnZhbHVlfX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGlucHV0LmZvcm0taW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO2JvcmRlci1yYWRpdXM6LjI1cmVtO3BhZGRpbmc6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcGF0dGVybi4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclBhdHRlcm46IGJvb2xlYW4gPSB0cnVlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb3VzZUV2ZW50LCBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnQGFnbS9jb3JlJztcclxuaW1wb3J0IHsgfSBmcm9tICdnb29nbGVtYXBzJztcclxuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL21hcC1tYXJrZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbG9jYXRpb24tZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWxvY2F0aW9uLWNvbnRhaW5lclwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIj5cclxuICAgIDwhLS0gaW5wdXQgJiYgZGlzcGxheSAtLT5cclxuICAgIDxpbnB1dCAjc2VhcmNoXHJcbiAgICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxyXG4gICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcclxuICAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG4gICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuXHJcbiAgICA8IS0tIGljb24gLS0+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNlYXJjaC1sb2NhdGlvbi1pY29uXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxhZ20tbWFwIFtsYXRpdHVkZV09XCJmaWVsZC5kZWZhdWx0TG9jYXRpb24/LmxhdGl0dWRlXCJcclxuICAgICAgICAgICBbbG9uZ2l0dWRlXT1cImZpZWxkLmRlZmF1bHRMb2NhdGlvbj8ubG9uZ2l0dWRlXCJcclxuICAgICAgICAgICBbem9vbV09XCJmaWVsZC56b29tXCJcclxuICAgICAgICAgICBbem9vbUNvbnRyb2xdPVwiZmllbGQuem9vbUNvbnRyb2xcIlxyXG4gICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAobWFwQ2xpY2spPVwiYWRkTWFya2VycygkZXZlbnQpO3ZhbGlkYXRlKCk7XCI+XHJcblxyXG4gICAgPGFnbS1tYXJrZXIgKm5nRm9yPVwibGV0IG1hcmtlciBvZiBmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgIChtYXJrZXJDbGljayk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdtYXJrZXJDbGljaycsICRldmVudCwgbWFya2VyKTtcIlxyXG4gICAgICAgICAgICAgICAgW2xhdGl0dWRlXT1cIm1hcmtlci5sYXRpdHVkZVwiXHJcbiAgICAgICAgICAgICAgICBbbG9uZ2l0dWRlXT1cIm1hcmtlci5sb25naXR1ZGVcIlxyXG4gICAgICAgICAgICAgICAgW21hcmtlckRyYWdnYWJsZV09XCJtYXJrZXIuZHJhZ2dhYmxlICYmIGJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAgKGRyYWdFbmQpPVwidXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyLCAkZXZlbnQpXCI+XHJcblxyXG4gICAgICA8YWdtLWluZm8td2luZG93ICpuZ0lmPVwibWFya2VyLmluZm9IdG1sXCI+XHJcbiAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cIm1hcmtlci5pbmZvSHRtbCB8IHRyYW5zbGF0ZVwiPjwvZGl2PlxyXG4gICAgICA8L2FnbS1pbmZvLXdpbmRvdz5cclxuICAgIDwvYWdtLW1hcmtlcj5cclxuICA8L2FnbS1tYXA+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGFnbS1tYXB7d2lkdGg6MTAwJTtoZWlnaHQ6MzAwcHh9c3Bhbi5zZWFyY2gtbG9jYXRpb24taWNvbjphZnRlcntjb250ZW50OlwiXFxcXGYwMDJcIjtmb250OjE0cHgvMi41IEZvbnRBd2Vzb21lO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO2NvbG9yOiM1NTV9LnNlYXJjaC1sb2NhdGlvbi1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgc3Bhbi5zZWFyY2gtbG9jYXRpb24taWNvbjphZnRlcntyaWdodDo1cHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDkwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDkwZGVnKX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBzcGFuLnNlYXJjaC1sb2NhdGlvbi1pY29uOmFmdGVye2xlZnQ6NXB4fWlucHV0LmZvcm0taW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO2JvcmRlci1yYWRpdXM6LjI1cmVtO3BhZGRpbmc6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHNlYXJjaCBlbGVtZW50LiovXHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbWFwc0FQSUxvYWRlcjogTWFwc0FQSUxvYWRlcixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgLy8gc2V0IGEgbWFwIGZpZWxkJ3MgbG9jYXRpb24gdG8gdXNlIGRlZmF1bHQgbG9jYXRpb24gaWYgbm8gdmFsdWUgaXMgc2V0IGFuZCBsb2NhdGlvbiBpcyBhdmFpbGFibGUuXHJcbiAgICBpZiAoIXRoaXMuZmllbGQuZGVmYXVsdExvY2F0aW9uIHx8ICF0aGlzLmZpZWxkLmRlZmF1bHRMb2NhdGlvbi5sYXRpdHVkZSB8fCAhdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24ubG9uZ2l0dWRlKSB7XHJcbiAgICAgIGlmICgnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLmRlZmF1bHRMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGZpZWxkJ3MgdmFsdWUuXHJcbiAgICogQHBhcmFtIGFueSBuZXdWYWx1ZSBUaGUgbmV3IGZpZWxkIHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgbmV3VmFsdWUudmFsdWUpIHtcclxuICAgICAgdGhpcy5hZGRNYXJrZXJzRnJvbUxvY2F0aW9uKHZhbHVlLmxhdGl0dWRlLCB2YWx1ZS5sb25naXR1ZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gW107XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10ubGF0aXR1ZGUnLCB2YWx1ZS5sYXRpdHVkZSk7XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICdbJyArIGkgKyAnXS5sb25naXR1ZGUnLCB2YWx1ZS5sb25naXR1ZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZCBhIG1hcmtlciBmcm9tIHRoZSBjbGlja2VkIG1hcCBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0gTW91c2VFdmVudCBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG4gICovXHJcbiAgcHVibGljIGFkZE1hcmtlcnMoZXZlbnRBcmd1bWVudHM6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5hZGRNYXJrZXJzRnJvbUxvY2F0aW9uKGV2ZW50QXJndW1lbnRzLmNvb3Jkcy5sYXQsIGV2ZW50QXJndW1lbnRzLmNvb3Jkcy5sbmcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBY3RpdmF0ZXMgdGhlIGdvb2dsZSBtYXAgbG9jYXRpb24gc2VhcmNoLiovXHJcbiAgcHVibGljIGFjdGl2YXRlU2VhcmNoSW5wdXQoKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hFbGVtZW50KSB7XHJcbiAgICAgIC8vIGxvYWQgUGxhY2VzIEF1dG9jb21wbGV0ZVxyXG4gICAgICB0aGlzLm1hcHNBUElMb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IHRoaXMuc2VhcmNoRWxlbWVudC5uYXRpdmVFbGVtZW50LmlkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUodGhpcy5zZWFyY2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHt9KTtcclxuICAgICAgICBhdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHBsYWNlIHJlc3VsdFxyXG4gICAgICAgICAgICBjb25zdCBwbGFjZTogZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlUmVzdWx0ID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVzdWx0XHJcbiAgICAgICAgICAgIGlmIChwbGFjZS5nZW9tZXRyeSA9PT0gdW5kZWZpbmVkIHx8IHBsYWNlLmdlb21ldHJ5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgbGF0aXR1ZGUsIGxvbmdpdHVkZSBhbmQgem9vbVxyXG4gICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcblxyXG4gICAgICAgICAgICBmaWVsZC5kZWZhdWx0TG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6IGxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogbG9uZ2l0dWRlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmaWVsZC56b29tID0gMTI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxyXG4gICAgICAgICAgICAgIHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpLFxyXG4gICAgICAgICAgICAgIHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpLFxyXG4gICAgICAgICAgICAgIGZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuZHJhZ2dhYmxlLFxyXG4gICAgICAgICAgICAgIGZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuaW5mb0h0bWxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWRkIGEgbWFya2VyIGZyb20gdGhlIGNsaWNrZWQgbWFwIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgbGF0aXR1ZGUgVGhlIGxhdGl0dWRlLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgbG9uZ2l0dWRlIFRoZSBsb25naXR1ZGUuXHJcbiAgKi9cclxuICBwcml2YXRlIGFkZE1hcmtlcnNGcm9tTG9jYXRpb24obGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4ID4gMCAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoIDwgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCkge1xyXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICB0aGlzLmZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuZHJhZ2dhYmxlLFxyXG4gICAgICAgIHRoaXMuZmllbGQubWFya2VyU2V0dGluZ3MuZGVmYXVsdE5ld01hcmtlci5pbmZvSHRtbFxyXG4gICAgICApO1xyXG5cclxuICAgICAgbWFya2VyLmV2ZW50VHJpZ2dlcnMgPSB0aGlzLmZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuZXZlbnRUcmlnZ2VycztcclxuXHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5wdXNoKG1hcmtlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZSB0aGUgbWFya2VyJ3MgcG9zaXRpb24gd2hlbiBkcmFnIGlzIGRvbmUuXHJcbiAgICogQHBhcmFtIE1hcmtlciBtYXJrZXIgVGhlIG1hcmtlciB0byB1cGRhdGUuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzIG9mIHRoZSBhY3Rpb24gY2F1c2luZyB0aGUgdHJpZ2dlci5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVNYXJrZXJQb3NpdGlvbihtYXJrZXI6IE1hcmtlciwgZXZlbnRBcmd1bWVudHM6IE1vdXNlRXZlbnQpIHtcclxuICAgIG1hcmtlci5sYXRpdHVkZSA9IGV2ZW50QXJndW1lbnRzLmNvb3Jkcy5sYXQ7XHJcbiAgICBtYXJrZXIubG9uZ2l0dWRlID0gZXZlbnRBcmd1bWVudHMuY29vcmRzLmxuZztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dE1hc2sgfSBmcm9tICdwcmltZW5nL2lucHV0bWFzayc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1tYXNrLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWlucHV0TWFzayBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICBbbWFza109XCJmaWVsZC52YWxpZGF0aW9uLm1hc2tcIlxyXG4gICAgICAgICAgICAgICBbc2xvdENoYXJdPVwiZmllbGQuc2xvdENoYXJcIlxyXG4gICAgICAgICAgICAgICBbYXV0b0NsZWFyXT1cImZpZWxkLmF1dG9DbGVhclwiXHJcbiAgICAgICAgICAgICAgIFt1bm1hc2tdPVwiZmllbGQudW5tYXNrXCJcclxuICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgW21heGxlbmd0aF09XCJmaWVsZC52YWxpZGF0aW9uLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgIFtjaGFyYWN0ZXJQYXR0ZXJuXT1cImZpZWxkLnZhbGlkYXRpb24uY2hhcmFjdGVyUGF0dGVyblwiXHJcbiAgICAgICAgICAgICAgIFtwYXR0ZXJuXT1cImZpZWxkLnZhbGlkYXRpb24ucGF0dGVyblwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIj5cclxuICA8L3AtaW5wdXRNYXNrPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkLmRhdGEudmFsdWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc2tGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZChJbnB1dE1hc2spIGlucHV0TWFzazogSW5wdXRNYXNrO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHBhdHRlcm4uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JQYXR0ZXJuOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBtYXNrLlxyXG4gICAqIEBwYXJhbSBtYXNrIGN1cnJlbnQgVGhlIG5ldyBtYXNrLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZU1hc2sobWFzazogYW55KSB7XHJcbiAgICB0aGlzLmlucHV0TWFzay5fbWFzayA9IG1hc2s7XHJcblxyXG4gICAgdGhpcy5pbnB1dE1hc2suaW5pdE1hc2soKTtcclxuXHJcbiAgICB0aGlzLmlucHV0TWFzay5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuXHJcbiAgICB0aGlzLmlucHV0TWFzay5pbnB1dFZpZXdDaGlsZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIHZhbHVlLlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBjdXJyZW50IFRoZSBuZXcgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlTWFza1ZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuaW5wdXRNYXNrLndyaXRlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmllbGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPG1hdC1kaWFsb2ctYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWRpYWxvZy1jbG9zZSBtYXQtYnV0dG9uPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCJcclxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XHJcblxyXG48bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgPG50dy1keW5hbWljLWZvcm0gI2RldGFpbHNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50Q29tcG9uZW50XT1cInRoaXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ3VyYXRpb25Tb3VyY2VVcmxdPVwiZmllbGQuZGV0YWlscy5jb25maWd1cmF0aW9uU291cmNlVXJsXCI+XHJcbiAgICA8L250dy1keW5hbWljLWZvcm0+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJlZmVyZW5jZSB0byB0aGUgZGV0YWlscyBkeW5hbWljIGZvcm0gY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZCgnZGV0YWlsc0Zvcm0nKSBkZXRhaWxzRm9ybUNvbXBvbmVudDogRHluYW1pY0Zvcm1Db21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHVibGljIGZpZWxkOiBGaWVsZFxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGNoaWxkIGFuZCBjbG9zZXMgdGhlIGRpYWxvZy5cclxuICAgKiBAcGFyYW0gRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQgY3VycmVudCBUaGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgZGVmYXVsdCBtYXN0ZXIgZGV0YWlsIGZvcm0gY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBhbnkgdHJpZ2dlcmluZ0ZpZWxkIFRoZSBmaWVsZCB0cmlnZ2VyaW5nIHRoZSBhY3Rpb24uXHJcbiAgKi9cclxuICBhZGRDaGlsZChjdXJyZW50OiBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCwgdHJpZ2dlcmluZ0ZpZWxkOiBhbnkpIHtcclxuICAgIC8vY3VycmVudC5kZXRhaWxzRm9ybUNvbXBvbmVudC52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICAvL2lmIChjdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICBjb25zdCB2YWx1ZXMgPSBjdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LmdldEZvcm1WYWx1ZXMoKTtcclxuXHJcbiAgICAvLyAgY3VycmVudC5kaWFsb2dSZWYuY2xvc2UodmFsdWVzKTtcclxuICAgIC8vfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Zvcm0tcGFydC10ZW1wbGF0ZXMvZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0vZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbWFzdGVyLWRldGFpbC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2PlxyXG4gICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICAoY2xpY2spPVwib3BlbkRpYWxvZygpO1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuXHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgZGV0YWlscyBkaWFsb2cuKi9cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGV0YWlsc0RpYWxvZyA9IHRoaXMuZGlhbG9nLm9wZW4oRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsIHtcclxuICAgICAgZGF0YTogdGhpcy5maWVsZFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGV0YWlsc0RpYWxvZy5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3VuZGFibGVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LW11bHRpLXNlbGVjdC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1tdWx0aVNlbGVjdCBbb3B0aW9uc109XCJmaWVsZC5kYXRhLm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgICBbZmlsdGVyUGxhY2VIb2xkZXJdPVwiZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgW2ZpbHRlcl09XCJmaWVsZC5lbmFibGVmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICBbZGVmYXVsdExhYmVsXT1cImZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNoYW5nZScsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICA8L3AtbXVsdGlTZWxlY3Q+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e2l0ZW0ubmFtZX19PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QudWktd2lkZ2V0e3dpZHRoOjEwMCV9Omhvc3QgOjpuZy1kZWVwIHAtbXVsdGlzZWxlY3QgLnVpLW11bHRpc2VsZWN0LWxhYmVsLnVpLWNvcm5lci1hbGx7bWFyZ2luLWJvdHRvbTowO2hlaWdodDozNXB4fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1tdWx0aXNlbGVjdC1maWx0ZXItY29udGFpbmVye2Zsb2F0OnJpZ2h0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1tdWx0aXNlbGVjdC1oZWFkZXIgLnVpLW11bHRpc2VsZWN0LWNsb3Nle3JpZ2h0OnVuc2V0O2xlZnQ6LjM3NWVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1tdWx0aXNlbGVjdC1wYW5lbCAudWktbXVsdGlzZWxlY3QtaXRlbXt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBwLW11bHRpc2VsZWN0IC51aS1jb3JuZXItcmlnaHR7bGVmdDowO3JpZ2h0OnVuc2V0O2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNjtib3JkZXItbGVmdDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBwLW11bHRpc2VsZWN0IC51aS1tdWx0aXNlbGVjdC1sYWJlbC51aS1jb3JuZXItYWxse3BhZGRpbmctcmlnaHQ6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10uaWQnLCB2YWx1ZS5pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcmFkaW9idXR0b24tZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBjbGFzcz1cInJhZGlvQnV0dG9uSG9sZGVyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiPlxyXG4gICAgPHAtcmFkaW9CdXR0b24gKm5nRm9yPVwibGV0IHJhZGlvYnV0dG9uIG9mIGZpZWxkLmRhdGEub3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZSsnXycraVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCIgcmFkaW9idXR0b24ubmFtZSB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwicmFkaW9idXR0b24uaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2xpY2snLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsaWRhdGUoKTtcIj5cclxuICAgIDwvcC1yYWRpb0J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZD8uZGF0YT8udmFsdWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgcC1yYWRpb2J1dHRvbntkaXNwbGF5OmJsb2NrfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXJhdGluZy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZD8uY3NzQ2xhc3Nlcz8ubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dCAmIGRpc3BsYXkgLS0+XHJcbiAgPHAtcmF0aW5nIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtzdGFyc109XCJmaWVsZC5zdGFyTnVtYmVyXCJcclxuICAgICAgICAgICAgW2ljb25DYW5jZWxDbGFzc109XCJmaWVsZC5pY29uQ2FuY2VsQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9uQ2xhc3NdPVwiZmllbGQuaWNvbk9uQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9mZkNsYXNzXT1cImZpZWxkLmljb25PZmZDbGFzc1wiXHJcbiAgICAgICAgICAgIFtjYW5jZWxdPVwiZmllbGQuY2FuY2VsSWNvbiAmJiAhZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAob25SYXRlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uUmF0ZScsICRldmVudCwgZmllbGQpO3ZhbGlkYXRlKCk7XCJcclxuICAgICAgICAgICAgKG9uQ2FuY2VsKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2FuY2VsJywgJGV2ZW50LCBmaWVsZCk7dmFsaWRhdGUoKTtcIj5cclxuICA8L3AtcmF0aW5nPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZmllbGQucmVhZG9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MpIHtcclxuICAgICAgdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MgPSAncGkgcGktIGJhbic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PbkNsYXNzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuaWNvbk9uQ2xhc3MgPSAncGkgcGktc3Rhcic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PZmZDbGFzcykge1xyXG4gICAgICB0aGlzLmZpZWxkLmljb25PZmZDbGFzcyA9ICdwaSBwaS1zdGFyLW8nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1zZWxlY3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtZHJvcGRvd24gW29wdGlvbnNdPVwiZmllbGQuZGF0YS5vcHRpb25zXCJcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW2ZpbHRlcl09XCJmaWVsZC5lbmFibGVmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbkxhYmVsPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgZGF0YUtleT1cImlkXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9wLWRyb3Bkb3duPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkPy5kYXRhPy52YWx1ZT8ubmFtZX19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2Bib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktZHJvcGRvd24tcGFuZWwgLnVpLWRyb3Bkb3duLWl0ZW17dGV4dC1hbGlnbjpyaWdodH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBwLWRyb3Bkb3duIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tdHJpZ2dlcntsZWZ0OjA7cmlnaHQ6dW5zZXQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZDZkNmQ2O2JvcmRlci1sZWZ0OjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1kcm9wZG93biAudWktZHJvcGRvd24tbGFiZWx7cGFkZGluZy1yaWdodDo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQm91bmRhYmxlRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5pZCcsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy10aW1lLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxudHctbWF0LXRpbWVwaWNrZXIgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXROYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5PXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyVmFsdWVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbKHVzZXJUaW1lKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAodXNlclRpbWVDaGFuZ2UpPVwic2V0VGltZVBpY2tlckZpZWxkVmFsdWUoJGV2ZW50KTt2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9udHctbWF0LXRpbWVwaWNrZXI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQ/LmRhdGE/LnZhbHVlPy5ob3VyfX06e3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1pbnV0ZX19XHJcbiAgICA8c3BhbiAqbmdJZj1cImZpZWxkPy5kYXRhPy52YWx1ZT8uZm9ybWF0ID09IDEyXCI+e3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1lcmlkZW4gfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IDo6bmctZGVlcCAudGltZS1waWNrZXItYnV0dG9uLm1hdC1idXR0b257cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjFweCBzb2xpZCAjMjM5OWU1O2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMjM5OWU1O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnM7aGVpZ2h0OjM1cHh9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgLnRpbWUtcGlja2VyLWJ1dHRvbi5tYXQtYnV0dG9ue3JpZ2h0OjE1cHh9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnRpbWUtcGlja2VyLWJ1dHRvbi5tYXQtYnV0dG9ue2xlZnQ6MTVweH06aG9zdCA6Om5nLWRlZXAgLnctbWF0LXRpbWVwaWNrZXIgLm1hdC1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtZmxhdC1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtaWNvbi1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtc3Ryb2tlZC1idXR0b257bGluZS1oZWlnaHQ6MzJweH06aG9zdCA6Om5nLWRlZXAgaW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQuc2V0VGltZSwgdGhpcy5maWVsZC5zZXRUaW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQuc2V0VGltZSwgdGhpcy5maWVsZC5zZXRUaW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5ob3VyJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmhvdXIpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5taW51dGUnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubWludXRlKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcubWVyaWRlbicsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5tZXJpZGVuKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuZm9ybWF0JywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgYSB0aW1lIHBpY2tlciBmaWVsZCdzIHZhbHVlIG9uY2UgaXQgaXMgY2hhbmdlZC5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0VGltZVBpY2tlckZpZWxkVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcmVjYXB0Y2hhLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxyZS1jYXB0Y2hhICNyZWNhcHRjaGFcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW3NpdGVLZXldPVwiZmllbGQuc2l0ZUtleVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGhlbWVdPVwiZmllbGQudGhlbWVcIlxyXG4gICAgICAgICAgICAgIFtzaXplXT1cImZpZWxkLnNpemVcIlxyXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAocmVzb2x2ZWQpPVwidmFsaWRhdGUoJGV2ZW50KTtcIj5cclxuICA8L3JlLWNhcHRjaGE+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSByZWNhcHRjaGEgZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3JlY2FwdGNoYScpIHJlY2FwdGNoYUVsZW1lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRoZSBmaWVsZCBpcyB2YWxpZC4qL1xyXG4gIHByaXZhdGUgaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybSBjb250cm9sIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHVibGljIHZhbGlkYXRlKGV2ZW50QXJndW1lbnRzPzogYW55LCBpc1N1Ym1pdD86IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLnByZVZhbGlkYXRlKGlzU3VibWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIWlzU3VibWl0KSB7XHJcbiAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldmVudEFyZ3VtZW50cyAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRUZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FwdGNoYSBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBzZXRDYXB0Y2hhTGFuZ3VnZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZWNhcHRjaGFFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNhcHRjaGFJRnJhbWUgPSB0aGlzLnJlY2FwdGNoYUVsZW1lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG5cclxuICAgICAgaWYgKGNhcHRjaGFJRnJhbWUpIHtcclxuICAgICAgICBjb25zdCBzcmMgPSBjYXB0Y2hhSUZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblxyXG4gICAgICAgIGNhcHRjaGFJRnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMucmVwbGFjZSgvaGw9KC4qPykmLywgJ2hsPScgKyBsYW5ndWFnZSArICcmJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1uZXh0LXByZXZpb3VzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5leHQtcHJldi1jb250YWluZXJcIj5cclxuICA8YSBjbGFzcz1cImFycm93LXByZXZcIlxyXG4gICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgIChjbGljayk9XCJpbmNyZW1lbnRTZWN0aW9uKC0xKVwiXHJcbiAgICAgdGl0bGU9XCJ7eydidXR0b25zLlByZXZpb3VzJyB8IHRyYW5zbGF0ZX19XCI+XHJcbiAgPC9hPlxyXG4gIDxzcGFuIGNsYXNzPVwibmV4dC1wcmV2LWhlYWRlclwiPnt7YnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uPy5jdXJyZW50U2VjdGlvbj8ubGVnZW5kIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgPGEgY2xhc3M9XCJhcnJvdy1uZXh0XCJcclxuICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAoY2xpY2spPVwiaW5jcmVtZW50U2VjdGlvbigxKVwiXHJcbiAgICAgdGl0bGU9XCJ7eydidXR0b25zLk5leHQnIHwgdHJhbnNsYXRlfX1cIj5cclxuICA8L2E+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AubmV4dC1wcmV2LWNvbnRhaW5lciBhe3RleHQtZGVjb3JhdGlvbjpub25lIWltcG9ydGFudH0ubmV4dC1wcmV2LWNvbnRhaW5lcnt0ZXh0LWFsaWduOmNlbnRlcn0ubmV4dC1wcmV2LWhlYWRlcntmb250LXNpemU6MmVtO2ZvbnQtd2VpZ2h0OjcwMH1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCBhLmFycm93LXByZXY6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZjEwNFwiO2ZvbnQ6M2VtLzEgRm9udEF3ZXNvbWU7Y29sb3I6IzU1NTU2NX1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCBhLmFycm93LW5leHQ6YmVmb3Jle2NvbnRlbnQ6XCJcXFxcZjEwNVwiO2ZvbnQ6M2VtLzEgRm9udEF3ZXNvbWU7Y29sb3I6IzU1NTU2NX1ib2R5LmVuIDpob3N0IDo6bmctZGVlcCBhLmFycm93LW5leHR7ZmxvYXQ6cmlnaHR9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1wcmV2e2Zsb2F0OmxlZnR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1wcmV2OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDVcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDRcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0e2Zsb2F0OmxlZnR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1wcmV2e2Zsb2F0OnJpZ2h0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXh0UHJldmlvdXNTZWN0aW9uQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDeWNsZXMgdGhyb3VnaCB0aGUgc2VjdGlvbnMuXHJcbiAgICogQHBhcmFtIG51bWJlciBpbmNyZW1lbnQgVGhlIGluY3JlbWVudC5cclxuICAqL1xyXG4gIHB1YmxpYyBpbmNyZW1lbnRTZWN0aW9uKGluY3JlbWVudDogbnVtYmVyKSB7XHJcbiAgICBsZXQgbmV3U2VjdGlvbklkID0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24uaWQgKyBpbmNyZW1lbnQ7XHJcblxyXG4gICAgaWYgKG5ld1NlY3Rpb25JZCA9PT0gMCkge1xyXG4gICAgICBuZXdTZWN0aW9uSWQgPSB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGg7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1NlY3Rpb25JZCA9PT0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoICsgMSkge1xyXG4gICAgICBuZXdTZWN0aW9uSWQgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uID0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMuZmluZChzID0+IHMuaWQgPT09IG5ld1NlY3Rpb25JZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3NlY3Rpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctdGFicy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxyXG4gIDxsaSAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZWN0aW9uc1wiXHJcbiAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIlxyXG4gICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6c2VjdGlvbi5pZD09YnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uY3VycmVudFNlY3Rpb24/LmlkfVwiXHJcbiAgICAgICAoY2xpY2spPVwic3dpdGNoU2VjdGlvbihzZWN0aW9uKVwiPlxyXG4gICAgICA8c3Bhbj57e3NlY3Rpb24ubGVnZW5kIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvcnMtY291bnRcIlxyXG4gICAgICAgICAgICAqbmdJZj1cInNlY3Rpb24udmFsaWRhdGlvbkVycm9yc0NvdW50ID4gMFwiPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9saT5cclxuPC91bD5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNTZWN0aW9uQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTd2l0Y2hlcyB0aGUgYWN0aXZlIHNlY3Rpb24uXHJcbiAgICogQHBhcmFtIFNlY3Rpb24gc2VjdGlvbiBUaGUgbmV3IGFjdGl2ZSBzZWN0aW9uLlxyXG4gICovXHJcbiAgcHVibGljIHN3aXRjaFNlY3Rpb24oc2VjdGlvbjogU2VjdGlvbikge1xyXG4gICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TdW1tYXJ5TW9kZXMsIFN3YWxUeXBlcyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9lbnVtcyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXZhbGlkYXRpb24tc3VtbWFyeScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICN2YWxpZGF0aW9uU3VtbWFyeVxyXG4gICAgIGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5LWNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8udmFsaWRhdGlvblN1bW1hcnlNb2RlICE9J0xpc3QnXCI+XHJcbiAgPGRpdiBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeVwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnZhbGlkYXRpb25FcnJvcnM/Lmxlbmd0aCA+IDBcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5LXRpdGxlLXNlY3Rpb25cIj57eyd2YWxpZGF0aW9ucy5WYWxpZGF0aW9uU3VtbWFyeUVycm9ycycgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpIGNsYXNzPVwidmFsaWRhdGlvbi1zdW1tYXJ5LWVycm9yXCIgKm5nRm9yPVwibGV0IGVycm9yIG9mIGJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC52YWxpZGF0aW9uLXN1bW1hcnl7Ym9yZGVyOjFweCBzb2xpZCAjZDZkNmQ2O3BhZGRpbmctdG9wOjE1cHg7Y29sb3I6cmVkO21hcmdpbi1ib3R0b206MjBweH0udmFsaWRhdGlvbi1zdW1tYXJ5LXRpdGxlLXNlY3Rpb257Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmc6MTVweCAyMHB4O2Rpc3BsYXk6YmxvY2t9LnZhbGlkYXRpb24tc3VtbWFyeS1jb250YWluZXJ7bWFyZ2luLXRvcDoyMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdmFsaWRhdGlvbiBzdW1tYXJ5IGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCd2YWxpZGF0aW9uU3VtbWFyeScpIHZhbGlkYXRpb25TdW1tYXJ5RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2hvd3MgdGhlIHZhbGlkYXRpb24gc3VtbWFyeSBhcyBhbiBhbGVydC4qL1xyXG4gIHNob3dTdW1tYXJ5QWxlcnQoKSB7XHJcbiAgICBpZiAodGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MudmFsaWRhdGlvblN1bW1hcnlNb2RlID09PSBWYWxpZGF0aW9uU3VtbWFyeU1vZGVzLkFsZXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgc3dhbCh7XHJcbiAgICAgICAgaHRtbDogdGhpcy52YWxpZGF0aW9uU3VtbWFyeUVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsXHJcbiAgICAgICAgdHlwZTogU3dhbFR5cGVzLldhcm5pbmcsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1wcm9ncmVzcy1pbmRpY2F0b3InLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInByb2dyZXNzLWluZGljYXRvci1jb250YWluZXJcIlxyXG4gICAgICpuZ0lmPVwic3Bpbm5lclNvdXJjZVVybFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1pbmRpY2F0b3JcIj5cclxuICAgIDxpbWcgW3NyY109XCJzcGlubmVyU291cmNlVXJsXCJcclxuICAgICAgICAgY2xhc3M9XCJwcm9ncmVzcy1pbmRpY2F0b3ItaW1hZ2VcIlxyXG4gICAgICAgICBhbHQ9XCJwcm9ncmVzc1wiIC8+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHNwaW5uZXIgc291cmNlIHVybC4qL1xyXG4gIEBJbnB1dCgnc3Bpbm5lclNvdXJjZVVybCcpIHNwaW5uZXJTb3VyY2VVcmw6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGVzLCBTd2FsVHlwZXMsIEZvcm1Nb2RlcywgUG9zdE1vZGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL211bHRpLXNlbGVjdC1maWVsZC9tdWx0aS1zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpcHNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9lZGl0b3ItZmllbGQvZWRpdG9yLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc2tGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2xvY2F0aW9uLWZpZWxkL2xvY2F0aW9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9maWxlLXVwbG9hZC1maWVsZC9maWxlLXVwbG9hZC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYXRpbmctZmllbGQvcmF0aW5nLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgUmVzcG9uc2VFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2UtZXZlbnQtYXJncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1keW5hbWljLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyXHJcbiAgICAgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8Zm9ybSBjbGFzcz1cImR5bmFtaWMtZm9ybS1mb3JtXCJcclxuICAgICAgICAjZj1cIm5nRm9ybVwiXHJcbiAgICAgICAgKG5nU3VibWl0KT1cInN1Ym1pdEZvcm0oZilcIlxyXG4gICAgICAgIFtoaWRkZW5dPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImR5bmFtaWMtZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMgc2VjdGlvbnMtdG9wXCJcclxuICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTG9jYXRpb24gPT0gJ1RvcCcgfHwgY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90aCdcIj5cclxuICAgICAgICA8IS0tIHNlY3Rpb24gdGFicyAtLT5cclxuICAgICAgICA8bnR3LXRhYnMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnVGFicydcIj48L250dy10YWJzLXNlY3Rpb24+XHJcblxyXG4gICAgICAgIDwhLS0gbmV4dCBwcmV2aW91cyAtLT5cclxuICAgICAgICA8bnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnTmV4dFByZXZpb3VzJ1wiPjwvbnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gZm9ybSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMud3JhcHBlclwiXHJcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY29uZmlndXJhdGlvbj8ubWVyZ2VkRmllbGRzXCI+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbmZvIC0tPlxyXG4gICAgICAgICAgPG50dy1pbmZvLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbmZvJ1wiPlxyXG4gICAgICAgICAgPC9udHctaW5mby1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRleHQgb3IgbnVtYmVyIG9yIHBhc3N3b3JkIC0tPlxyXG4gICAgICAgICAgPG50dy1pbnB1dC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihmaWVsZC5maWVsZFR5cGU9PSd0ZXh0JyB8fCBmaWVsZC5maWVsZFR5cGU9PSdudW1iZXInIHx8IGZpZWxkLmZpZWxkVHlwZT09J3Bhc3N3b3JkJylcIj5cclxuICAgICAgICAgIDwvbnR3LWlucHV0LWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gZHJvcGRvd24gbGlzdCAtLT5cclxuICAgICAgICAgIDxudHctc2VsZWN0LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGRhdGV0aW1lIHBpY2tlciAtLT5cclxuICAgICAgICAgIDxudHctZGF0ZXRpbWUtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdkYXRldGltZSdcIj5cclxuICAgICAgICAgIDwvbnR3LWRhdGV0aW1lLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gaGlqcmkgZGF0ZXRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy1kYXRldGltZS1oaWpyaS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2RhdGV0aW1laGlqcmknXCI+XHJcbiAgICAgICAgICA8L250dy1kYXRldGltZS1oaWpyaS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy10aW1lLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSd0aW1lJ1wiPlxyXG4gICAgICAgICAgPC9udHctdGltZS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoZWNrYm94IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LWNoZWNrYm94LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nY2hlY2tib3gnXCI+XHJcbiAgICAgICAgICA8L250dy1jaGVja2JveC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHJhZGlvYnV0dG9uIGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhZGlvYnV0dG9uLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ncmFkaW9idXR0b24nXCI+XHJcbiAgICAgICAgICA8L250dy1yYWRpb2J1dHRvbi1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIG11bHRpU2VsZWN0IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LW11bHRpLXNlbGVjdC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtdWx0aXNlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LW11bHRpLXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoaXBzIC0tPlxyXG4gICAgICAgICAgPG50dy1jaGlwcy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2NoaXBzJ1wiPlxyXG4gICAgICAgICAgPC9udHctY2hpcHMtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBlZGl0b3IgLS0+XHJcbiAgICAgICAgICA8bnR3LWVkaXRvci1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdlZGl0b3InXCI+XHJcbiAgICAgICAgICA8L250dy1lZGl0b3ItZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBtYXNrIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXNrLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXNrJ1wiPlxyXG4gICAgICAgICAgPC9udHctbWFzay1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGxvY2F0aW9uIC0tPlxyXG4gICAgICAgICAgPG50dy1sb2NhdGlvbi1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2xvY2F0aW9uJ1wiPlxyXG4gICAgICAgICAgPC9udHctbG9jYXRpb24tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBmaWxlIHVwbG9hZCAtLT5cclxuICAgICAgICAgIDxudHctZmlsZS11cGxvYWQtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdmaWxldXBsb2FkJ1wiPlxyXG4gICAgICAgICAgPC9udHctZmlsZS11cGxvYWQtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBSYXRpbmcgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhdGluZy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyYXRpbmcnXCI+XHJcbiAgICAgICAgICA8L250dy1yYXRpbmctZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSByZWNhcHRjaGEgLS0+XHJcbiAgICAgICAgICA8bnR3LXJlY2FwdGNoYS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyZWNhcHRjaGEnXCI+XHJcbiAgICAgICAgICA8L250dy1yZWNhcHRjaGEtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbWFnZSBjcm9wcGVyIC0tPlxyXG4gICAgICAgICAgPG50dy1pbWFnZS1jcm9wcGVyLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbWFnZWNyb3BwZXInXCI+XHJcbiAgICAgICAgICA8L250dy1pbWFnZS1jcm9wcGVyLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gbWFzdGVyZGV0YWlsIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXN0ZXItZGV0YWlsLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXN0ZXJkZXRhaWwnXCI+XHJcbiAgICAgICAgICA8L250dy1tYXN0ZXItZGV0YWlsLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG5cclxuICAgICAgPCEtLSB2YWxpZGF0aW9uIHN1bW1hcnkgLS0+XHJcbiAgICAgIDxudHctdmFsaWRhdGlvbi1zdW1tYXJ5PjwvbnR3LXZhbGlkYXRpb24tc3VtbWFyeT5cclxuXHJcbiAgICAgIDwhLS0gYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8uY3NzQ2xhc3NcIlxyXG4gICAgICAgICAgIGRhdGEtaHRtbDJjYW52YXMtaWdub3JlPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbi1idXR0b25zXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uY2xlYXIpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5jc3NDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZvcm0oZilcIj5cclxuICAgICAgICAgICAge3tjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVGb3JtKGYpXCI+XHJcbiAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdClcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py5jc3NDbGFzc1wiPlxyXG4gICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZGl0aW9uYWwtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/LmFkZGl0aW9uYWxCdXR0b25zXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImJ1dHRvbj8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJidXR0b24/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYnV0dG9uPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oYnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJidXR0b24/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ2NsaWNrJywgJGV2ZW50LCBidXR0b24pO1wiPlxyXG4gICAgICAgICAgICB7e2J1dHRvbj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9ucyBzZWN0aW9ucy1ib3R0b21cIlxyXG4gICAgICAgICAgICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90dG9tJyB8fCBjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbkxvY2F0aW9uID09ICdCb3RoJ1wiPlxyXG4gICAgICAgIDwhLS0gc2VjdGlvbiB0YWJzIC0tPlxyXG4gICAgICAgIDxudHctdGFicy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdUYWJzJ1wiPjwvbnR3LXRhYnMtc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPCEtLSBuZXh0IHByZXZpb3VzIC0tPlxyXG4gICAgICAgIDxudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdOZXh0UHJldmlvdXMnXCI+PC9udHctbmV4dC1wcmV2aW91cy1zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcblxyXG4gIDxudHctcHJvZ3Jlc3MtaW5kaWNhdG9yICpuZ0lmPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3Bpbm5lclNvdXJjZVVybF09XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc3Bpbm5lclNvdXJjZVVybFwiPjwvbnR3LXByb2dyZXNzLWluZGljYXRvcj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5mb3JtQnV0dG9uc3ttYXJnaW46MjBweCAwfWJvZHkuYXIgLm1haW4tYnV0dG9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH1ib2R5LmVuIC5tYWluLWJ1dHRvbnMgYnV0dG9ue21hcmdpbi1yaWdodDoxMHB4fWJvZHkuYXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9Ym9keS5lbntkaXJlY3Rpb246bHRyIWltcG9ydGFudDt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS51aS1kcm9wZG93bixpbnB1dC5mb3JtLWlucHV0LGlucHV0LnVpLWlucHV0dGV4dC51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdCxwLWRyb3Bkb3due3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDozNXB4fS5pbnB1dC1jb250YWluZXJ7bWFyZ2luLXRvcDoyNHB4fWxhYmVsLmZvcm0tbGFiZWx7Zm9udC13ZWlnaHQ6NzAwfXNwYW4ucmVxdWlyZWQtYXN0ZXJpc2t7Y29sb3I6cmVkfXAuZXJyb3IscC52YWxpZGF0aW9uLWVycm9ye2Rpc3BsYXk6YmxvY2s7Y29sb3I6cmVkfS5yZXN1bHQgaW1ne3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0uZm9ybS1kaXNwbGF5e2Rpc3BsYXk6YmxvY2t9dy1jbG9jayAqe2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fWBdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGUsIEJyaWRnZVNlcnZpY2UsIFV0aWxpdGllc1NlcnZpY2VdLFxyXG4gIC8vIHByb3ZpZGUgdGhlIGJyaWRnZSBzZXJ2aWNlIGhlcmUgaW4gb3JkZXIgdG8gaGF2ZSBhIGRpZmZlcmVudCBpbnN0YW5jZSBwZXIgZm9ybSBpbnN0YW5jZS5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY29uZmlndXJhdGlvbiBzb3VyY2UgdXJsLiovXHJcbiAgQElucHV0KCdjb25maWd1cmF0aW9uU291cmNlVXJsJykgY29uZmlndXJhdGlvblNvdXJjZVVybDogc3RyaW5nO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBwYXJlbnQgY29tcG9uZW50LiovXHJcbiAgQElucHV0KCdwYXJlbnRDb21wb25lbnQnKSBwYXJlbnRDb21wb25lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLiovXHJcbiAgQElucHV0KCdhZGRpdGlvbmFsUGFyYW1ldGVycycpIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uRm9ybUNsZWFyZWQgZXZlbnQuIFRyaWdnZXJlZCB3aGVuIHRoZSBmb3JtIGlzIGNsZWFyZWQuKi9cclxuICBAT3V0cHV0KCkgZm9ybUNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25Gb3JtRGF0YUJvdW5kIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgZm9ybSBpcyBkYXRhIGJvdW5kLiovXHJcbiAgQE91dHB1dCgpIGZvcm1EYXRhQm91bmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25CZWZvcmVGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc2F2ZWQuKi9cclxuICBAT3V0cHV0KCkgYmVmb3JlRm9ybVNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uQWZ0ZXJGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzYXZlZC4qL1xyXG4gIEBPdXRwdXQoKSBhZnRlckZvcm1TYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBvbkJlZm9yZUZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc3VibWl0dGVkLiovXHJcbiAgQE91dHB1dCgpIGJlZm9yZUZvcm1TdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25BZnRlckZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQuKi9cclxuICBAT3V0cHV0KCkgYWZ0ZXJGb3JtU3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZChWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCkgdmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQ6IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGlucHV0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKElucHV0RmllbGRDb21wb25lbnQpIGlucHV0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8SW5wdXRGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2Ygc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFNlbGVjdEZpZWxkQ29tcG9uZW50KSBzZWxlY3RGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZGF0ZXRpbWUgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRGF0ZXRpbWVGaWVsZENvbXBvbmVudCkgZGF0ZXRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBkYXRldGltZSBoaWpyaSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQpIGRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGNoZWNrYm94IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKENoZWNrYm94RmllbGRDb21wb25lbnQpIGNoZWNrYm94RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8Q2hlY2tib3hGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmFkaW8gYnV0dG9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQpIHJhZGlvYnV0dG9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8UmFkaW9idXR0b25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgbXVsdGkgc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQpIG11bHRpU2VsZWN0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgY2hpcHMgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ2hpcHNGaWVsZENvbXBvbmVudCkgY2hpcHNGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxDaGlwc0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBlZGl0b3IgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRWRpdG9yRmllbGRDb21wb25lbnQpIGVkaXRvckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVkaXRvckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBtYXNrIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE1hc2tGaWVsZENvbXBvbmVudCkgbWFza0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PE1hc2tGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgdGltZSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihUaW1lRmllbGRDb21wb25lbnQpIHRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUaW1lRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGxvY2F0aW9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKExvY2F0aW9uRmllbGRDb21wb25lbnQpIGxvY2F0aW9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TG9jYXRpb25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZmlsZSB1cGxvYWQgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50KSBmaWxlVXBsb2FkRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQpIGltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmVjYXB0Y2hhRmllbGRDb21wb25lbnQpIHJlY2FwdGNoYUZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmF0aW5nRmllbGRDb21wb25lbnQpIHJhdGluZ0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJhdGluZ0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBhbGwgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIHB1YmxpYyBmaWVsZENvbXBvbmVudHM6IEFycmF5PEZpZWxkQ29tcG9uZW50PiA9IG5ldyBBcnJheTxGaWVsZENvbXBvbmVudD4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbWFpbiBjb25maWd1cmF0aW9uIG9iamVjdC4qL1xyXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHNob3cgdGhlIHByb2dyZXNzIGluZGljYXRvci4qL1xyXG4gIHB1YmxpYyBzaG93UHJvZ3Jlc3NJbmRpY2F0b3I6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwUmVxdWVzdHNTZXJ2aWNlOiBIdHRwUmVxdWVzdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnM7XHJcblxyXG4gICAgdGhpcy5iaW5kRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgY2xlYXJGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5jbGVhclZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICB0aGlzLmZvcm1DbGVhcmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgc2F2ZUZvcm0oZm9ybTogTmdGb3JtKSB7XHJcbiAgICAvLyB0cmlnZ2VyIHJlY2FwdGNoYSB2YWxpZGF0aW9uIGlmIGV4aXN0cy5cclxuICAgIGZvciAoY29uc3QgcmVjYXB0Y2hhRmllbGRDb21wb25lbnRzIG9mIHRoaXMucmVjYXB0Y2hhRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICByZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudmFsaWRhdGUobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFJlcXVlc3RCb2R5KCk7XHJcblxyXG4gICAgICB0aGlzLmJlZm9yZUZvcm1TYXZlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnNhdmUsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5wb3N0KGVuZHBvaW50LCB2YWx1ZXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVNhdmVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZVN1Y2Nlc3NNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVTdWNjZXNzTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuU3VjY2VzcyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGV4Y2VwdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignc2F2ZUZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU2F2ZWQuZW1pdChuZXcgUmVzcG9uc2VFdmVudEFyZ3MoZmFsc2UsIGV4Y2VwdGlvbiwgdmFsdWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZUVycm9yTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU3VibWl0cyB0aGUgZm9ybS5cclxuICAqIEBwYXJhbSBOZ0Zvcm0gZm9ybSBUaGUgZm9ybS5cclxuICAqL1xyXG4gIHB1YmxpYyBzdWJtaXRGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0UmVxdWVzdEJvZHkoKTtcclxuXHJcbiAgICAgIHRoaXMuYmVmb3JlRm9ybVN1Ym1pdHRlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnN1Ym1pdCxcclxuICAgICAgICB0aGlzLnJvdXRlLFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVyc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5odHRwUmVxdWVzdHNTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIHZhbHVlcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLlN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N1Ym1pdEZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKGZhbHNlLCBleGNlcHRpb24sIHZhbHVlcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2hvd1Jlc3VsdE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zdWJtaXRFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0RXJyb3JNZXNzYWdlRGV0YWlscyksXHJcbiAgICAgICAgICAgIHR5cGU6IFN3YWxUeXBlcy5FcnJvcixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudC5zaG93U3VtbWFyeUFsZXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVGb3JtRmllbGRDb21wb25lbnQoZmllbGRDb21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgKi9cclxuICBwdWJsaWMgaXNGb3JtVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzIHx8IHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVxdWVzdCBib2R5LlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgcmVxdWVzdCBib2R5LlxyXG4gICovXHJcbiAgcHVibGljIGdldFJlcXVlc3RCb2R5KCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnBvc3RNb2RlID09PSBQb3N0TW9kZXMuRm9ybURhdGEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybURhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEZvcm1WYWx1ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZm9ybSBmaWVsZCB2YWx1ZXMuXHJcbiAgICogQHJldHVybiBhbnkgc291cmNlIFRoZSBmb3JtIHZhbHVlcy5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRGb3JtVmFsdWVzKCk6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChmaWVsZENvbXBvbmVudC5maWVsZC5kYXRhKSB7XHJcbiAgICAgICAgdmFsdWVzW2ZpZWxkQ29tcG9uZW50LmZpZWxkLm5hbWVdID0gZmllbGRDb21wb25lbnQuZ2V0VmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZvcm0gZmllbGQgdmFsdWVzLlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGdldEZvcm1EYXRhKCk6IEZvcm1EYXRhIHtcclxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBkYXRhID0gZmllbGRDb21wb25lbnQuYXBwZW5kRm9ybURhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlIGJ5IGl0cyBuYW1lLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZS5cclxuICAgKiBAcmV0dXJuIEZpZWxkQ29tcG9uZW50IFRoZSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlLlxyXG4gICovXHJcbiAgcHVibGljIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBGaWVsZENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZENvbXBvbmVudHMuZmluZChmYyA9PiBmYy5maWVsZC5uYW1lID09PSBuYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG91bGQgYmUgaGlkZGVuLlxyXG4gICAqIEBwYXJhbSBhbnkgYnV0dG9uIFRoZSBidXR0b24uXHJcbiAgICogQHJldHVybiBGaWVsZENvbXBvbmVudCBXaGV0aGVyIHRoZSBidXR0b24gc2hvdWxkIGJlIGhpZGRlbi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc0J1dHRvbkhpZGRlbihidXR0b246IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChidXR0b24gJiYgYnV0dG9uLmhpZGRlbikgfHwgKHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiAmJlxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24uaGlkZUJ1dHRvbnMgJiZcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmhpZGVCdXR0b25zLmluZGV4T2YoYnV0dG9uLm5hbWUpID4gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gYW55IGZvcm1EYXRhIFRoZSBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0Rm9ybURhdGEoZm9ybURhdGEpIHtcclxuICAgIGZvciAoY29uc3QgcmVzcG9uc2VGaWVsZCBvZiBmb3JtRGF0YS5maWVsZHMpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlRmllbGQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHJlc3BvbnNlRmllbGQubmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgZmllbGRDb21wb25lbnQudXBkYXRlVmFsdWUocmVzcG9uc2VGaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwcml2YXRlIGFzeW5jIGJpbmRGb3JtKCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICAgIC8vIHdvcmthcm91bmQgZm9yIGRhdGV0aW1lIGZpZWxkcy5cclxuICAgIGNvbnN0IGRhdGVGaWVsZHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLmZpbHRlcihmID0+IGYuZmllbGRUeXBlID09PSBGaWVsZFR5cGVzLkRhdGVUaW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGRhdGVGaWVsZHMpIHtcclxuICAgICAgdGhpcy5oYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5maWVsZENvbXBvbmVudHMgPSB0aGlzLmZpZWxkQ29tcG9uZW50cy5jb25jYXQoXHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnNlbGVjdEZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoZWNrYm94RmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5yYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoaXBzRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5lZGl0b3JGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLm1hc2tGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5maWxlVXBsb2FkRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5pbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnJlY2FwdGNoYUZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMucmF0aW5nRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5hY3RpdmF0ZVNlYXJjaElucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmZvcm1Nb2RlID09PSBGb3JtTW9kZXMuRGlzcGxheSkge1xyXG4gICAgICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5yZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudG9BcnJheSgpKSB7XHJcbiAgICAgICAgZmllbGRDb21wb25lbnQuc2V0Q2FwdGNoYUxhbmd1Z2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBjb25maWd1cmF0aW9uIGFzIGEgZ2V0IHJlcXVlc3Qgb3IgZnJvbSBsb2NhbCBzdG9yYWdlLiovXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlndXJhdGlvbigpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGF3YWl0IHRoaXMudXRpbGl0aWVzU2VydmljZS5sb2FkRmlsZSh0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2VVcmwpO1xyXG5cclxuICAgIC8vIGlmIGl0IGlzIGluIGxvY2FsLCByZWFkIHRoZSBhbHJlYWR5IG1lcmdlZCBmaWVsZHMuIG90aGVyd2lzZSwgbWVyZ2UgaXQgYW5kIHNhdmUgaW4gbG9jYWwgc3RvcmFnZS5cclxuICAgIGlmICghdGhpcy5jb25maWd1cmF0aW9uLmlzTG9jYWwpIHtcclxuICAgICAgLy8gbWVyZ2UgdGhlIGZvcm0ganNvbiBzY2hlbWEgZnJvbSB0aGUgZGlmZmVyZW50IHNvdXJjZSBwaWVjZXMuXHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc291cmNlRm9ybVNjaGVtYXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnNvdXJjZUZvcm1TY2hlbWFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc291cmNlRm9ybVNjaGVtYVVybCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zb3VyY2VGb3JtU2NoZW1hc1tpXTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGb3JtU2NoZW1hID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHNvdXJjZUZvcm1TY2hlbWFVcmwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5tZXJnZVJlY3Vyc2l2ZShzb3VyY2VGb3JtU2NoZW1hLCB0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWxsRmllbGRzID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UpO1xyXG5cclxuICAgICAgaWYgKCFhbGxGaWVsZHMuaXNMb2NhbCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UsIGFsbEZpZWxkcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMgPSBuZXcgQXJyYXk8RmllbGQ+KCk7XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgZmllbGQgcHJvcGVydGllcyB3aXRoIHRoZSBhbGwgZmllbGRzIGxpc3QuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmZpZWxkcy5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGaWVsZCA9IGFsbEZpZWxkcy5maWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcclxuXHJcbiAgICAgICAgICBpZiAoc291cmNlRmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkRmllbGQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UubWVyZ2VSZWN1cnNpdmUoc291cmNlRmllbGQsIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHNbZmllbGROYW1lXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLnB1c2gobWVyZ2VkRmllbGQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgZmllbGQgJHtmaWVsZE5hbWV9IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFsbC1maWVsZHMtbGlzdC5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvblNvdXJjZVVybCwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNlY3Rpb25zICYmIHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9uc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBhbGwgZmllbGRzJyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGZpZWxkQ29tcG9uZW50LmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGEgZGF0ZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuXHJcbiAgICogSXQgaXMgYnVnZ3kgaWYgZG9uZSBmcm9tIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbG9hZGVkLlxyXG4gICAqIEBwYXJhbSBGaWVsZCBmaWVsZCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZDogRmllbGQpIHtcclxuICAgIC8vIGluIGNhc2Ugb2YgZGF0ZXRpbWUgZmllbGQsIHBhcnNlIHRoZSB2YWx1ZXMgZnJvbSBzdHJpbmcgdG8gZGF0ZSBhbmQgZXhlY3V0ZSBhbnkgZnVuY3Rpb25zLlxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGUpIHtcclxuICAgICAgZmllbGQubWluRGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQubWluRGF0ZSwgbmV3IERhdGUoZmllbGQubWluRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5tYXhEYXRlKSB7XHJcbiAgICAgIGZpZWxkLm1heERhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLm1heERhdGUsIG5ldyBEYXRlKGZpZWxkLm1heERhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuZGF0YS5kYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLmRhdGEuZGF0ZVZhbHVlLCBuZXcgRGF0ZShmaWVsZC5kYXRhLmRhdGVWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5kZWZhdWx0RGF0ZSkge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0RGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQuZGVmYXVsdERhdGUsIG5ldyBEYXRlKGZpZWxkLmRlZmF1bHREYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGVWYWx1ZSAmJiBmaWVsZC5tYXhEYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQueWVhclJhbmdlID0gZmllbGQubWluRGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCkgKyAnOicgKyBmaWVsZC5tYXhEYXRlVmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZvcm0gZGF0YS4qL1xyXG4gIHByaXZhdGUgYmluZEZvcm1EYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5lbmRwb2ludHMuZ2V0KSB7XHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5nZXQsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoZW5kcG9pbnQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGb3JtRGF0YShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybURhdGFCb3VuZC5lbWl0KHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuICAgICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiaW5kRm9ybURhdGE6ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLmdldEVycm9yTWVzc2FnZVRpdGxlKSxcclxuICAgICAgICAgICAgaHRtbDogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5nZXRFcnJvck1lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLkVycm9yLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhQm91bmQuZW1pdChudWxsKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGZvcm0gZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBGaWVsZENvbXBvbmVudCBmaWVsZENvbXBvbmVudCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlRm9ybUZpZWxkQ29tcG9uZW50KGZpZWxkQ29tcG9uZW50OiBGaWVsZENvbXBvbmVudCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGxldCBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkQ29tcG9uZW50LmZpZWxkLmhpZGRlbikge1xyXG4gICAgICBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBmaWVsZENvbXBvbmVudC52YWxpZGF0ZShudWxsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIGR5bmFtaWMgZXZlbnQgaW4gY2FzZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZXZlbnRUeXBlIFRoZSB0eXBlIG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICAqIEBwYXJhbSBhbnkgc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHRyaWdnZXJEeW5hbWljRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50QXJndW1lbnRzOiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAoc291cmNlLmV2ZW50VHJpZ2dlcnMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBzb3VyY2UuZXZlbnRUcmlnZ2Vyc1tldmVudFR5cGVdO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24gPSB0aGlzLnBhcmVudENvbXBvbmVudFtldmVudF07XHJcblxyXG4gICAgICBpZiAocGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgICAgICBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbih0aGlzLnBhcmVudENvbXBvbmVudCwgc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWNhcHRjaGFDb21tb25Nb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEvcmVjYXB0Y2hhL3JlY2FwdGNoYS1jb21tb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhL3JlY2FwdGNoYS9yZWNhcHRjaGEubW9kdWxlJztcclxuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmFkaW9idXR0b24nO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbXVsdGlzZWxlY3QnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgQ2hpcHNNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NoaXBzJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9lZGl0b3InO1xyXG5pbXBvcnQgeyBJbnB1dE1hc2tNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0bWFzayc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XHJcbmltcG9ydCB7IFJhdGluZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmF0aW5nJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQge1xyXG4gIE1hdERpYWxvZ01vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFRvb2xiYXJNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gIE1hdEJ1dHRvbk1vZHVsZSwgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsXHJcbiAgTWF0U2VsZWN0TW9kdWxlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgV01hdFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctbWF0LXRpbWVwaWNrZXIvdy1tYXQtdGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXVGltZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lLWRpYWxvZy93LXRpbWUtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdDbG9ja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LXRpbWUvdy10aW1lLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9kYXRldGltZS1oaWpyaS1maWVsZC9kYXRldGltZS1oaWpyaS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9jaGVja2JveC1maWVsZC9jaGVja2JveC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tdWx0aS1zZWxlY3QtZmllbGQvbXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoaXBzRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoaXBzLWZpZWxkL2NoaXBzLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRvckZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9lZGl0b3ItZmllbGQvZWRpdG9yLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc2tGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbWFzay1maWVsZC9tYXNrLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvdGltZS1maWVsZC90aW1lLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2xvY2F0aW9uLWZpZWxkL2xvY2F0aW9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbmZvLWZpZWxkL2luZm8tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL21hc3Rlci1kZXRhaWwtZmllbGQvbWFzdGVyLWRldGFpbC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW1hZ2UtY3JvcHBlci1maWVsZC9pbWFnZS1jcm9wcGVyLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhdGluZ0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yYXRpbmctZmllbGQvcmF0aW5nLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yZWNhcHRjaGEtZmllbGQvcmVjYXB0Y2hhLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBUYWJzU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL25leHQtcHJldmlvdXMtc2VjdGlvbi9uZXh0LXByZXZpb3VzLXNlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy92YWxpZGF0aW9uLXN1bW1hcnkvdmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgV01hdFRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBXVGltZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIFdDbG9ja0NvbXBvbmVudCxcclxuICAgIFdUaW1lQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcbiAgICBCb3VuZGFibGVGaWVsZENvbXBvbmVudCxcclxuICAgIElucHV0RmllbGRDb21wb25lbnQsXHJcbiAgICBTZWxlY3RGaWVsZENvbXBvbmVudCxcclxuICAgIERhdGV0aW1lRmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCxcclxuICAgIE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBDaGlwc0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgRWRpdG9yRmllbGRDb21wb25lbnQsXHJcbiAgICBNYXNrRmllbGRDb21wb25lbnQsXHJcbiAgICBUaW1lRmllbGRDb21wb25lbnQsXHJcbiAgICBMb2NhdGlvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQsXHJcbiAgICBJbmZvRmllbGRDb21wb25lbnQsXHJcbiAgICBNYXN0ZXJEZXRhaWxGaWVsZENvbXBvbmVudCxcclxuICAgIEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmF0aW5nRmllbGRDb21wb25lbnQsXHJcbiAgICBUYWJzU2VjdGlvbkNvbXBvbmVudCxcclxuICAgIE5leHRQcmV2aW91c1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsXHJcbiAgICBEeW5hbWljRm9ybUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICBDaGVja2JveE1vZHVsZSxcclxuICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgIEVkaXRvck1vZHVsZSxcclxuICAgIElucHV0TWFza01vZHVsZSxcclxuICAgIENoaXBzTW9kdWxlLFxyXG4gICAgRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBNdWx0aVNlbGVjdE1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcclxuICAgIFJhdGluZ01vZHVsZSxcclxuICAgIFJlY2FwdGNoYUNvbW1vbk1vZHVsZSxcclxuICAgIFJlY2FwdGNoYU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBsb2FkZXI6IHtcclxuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXHJcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnRdXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgYXBpS2V5OiAnQUl6YVN5RGtrNG1BWTFyNVEtYWJ1eDVQT0NzY1RSMExvaldNd1VvJyxcclxuICAgICAgbGlicmFyaWVzOiBbJ3BsYWNlcyddLFxyXG4gICAgICByZWdpb246ICdMQicsXHJcbiAgICAgIGxhbmd1YWdlOiAnZW4nXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCxcclxuICAgIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV1RpbWVEaWFsb2dDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV1RpbWVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBXQ2xvY2tDb21wb25lbnQsXHJcbiAgICBXVGltZUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQm91bmRhYmxlRmllbGRDb21wb25lbnQsXHJcbiAgICBJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hGaWVsZENvbXBvbmVudCxcclxuICAgIFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQsXHJcbiAgICBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hpcHNGaWVsZENvbXBvbmVudCxcclxuICAgIEVkaXRvckZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFza0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgTG9jYXRpb25GaWVsZENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCxcclxuICAgIFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5mb0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCxcclxuICAgIFJhdGluZ0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGFic1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBOZXh0UHJldmlvdXNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LFxyXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXR3YXlzTGliTW9kdWxlIHsgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5nYkRhdGVwaWNrZXJJMThuIiwiWExTWC51dGlscyIsIlhMU1gud3JpdGVGaWxlIiwiRmlsZVNhdmVyLnNhdmVBcyIsIkh0dHBIZWFkZXJzIiwiSHR0cENsaWVudCIsIlRyYW5zbGF0ZVNlcnZpY2UiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkluamVjdCIsIk1BVF9ESUFMT0dfREFUQSIsIk1hdERpYWxvZ1JlZiIsIlRyYW5zbGF0ZVBpcGUiLCJNYXREaWFsb2ciLCJ0c2xpYl8xLl9fdmFsdWVzIiwiVmlld0NoaWxkIiwiTmdNb2RlbCIsIkFjdGl2YXRlZFJvdXRlIiwiT3B0aW9uYWwiLCJEYXRlUGlwZSIsIk5nYkNhbGVuZGFyIiwiTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEiLCJGaWxlVXBsb2FkIiwiQ3JvcHBlclNldHRpbmdzIiwiSW1hZ2VDcm9wcGVyQ29tcG9uZW50IiwiTWFwc0FQSUxvYWRlciIsIk5nWm9uZSIsIklucHV0TWFzayIsIkNoYW5nZURldGVjdG9yUmVmIiwiVmlld0VuY2Fwc3VsYXRpb24iLCJWaWV3Q2hpbGRyZW4iLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIklucHV0VGV4dE1vZHVsZSIsIkNhbGVuZGFyTW9kdWxlIiwiQ2hlY2tib3hNb2R1bGUiLCJSYWRpb0J1dHRvbk1vZHVsZSIsIkZpbGVVcGxvYWRNb2R1bGUiLCJFZGl0b3JNb2R1bGUiLCJJbnB1dE1hc2tNb2R1bGUiLCJDaGlwc01vZHVsZSIsIkRyb3Bkb3duTW9kdWxlIiwiTXVsdGlTZWxlY3RNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdEJ1dHRvblRvZ2dsZU1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJJbWFnZUNyb3BwZXJNb2R1bGUiLCJSYXRpbmdNb2R1bGUiLCJSZWNhcHRjaGFDb21tb25Nb2R1bGUiLCJSZWNhcHRjaGFNb2R1bGUiLCJOZ2JNb2R1bGUiLCJUcmFuc2xhdGVNb2R1bGUiLCJU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