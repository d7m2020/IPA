import { Injectable, NgModule, Component, ViewChild, ChangeDetectorRef, Input, Inject, Output, EventEmitter, defineInjectable, inject, Optional, ViewEncapsulation, ViewChildren, NgZone } from '@angular/core';
import { __extends, __awaiter, __generator, __values } from 'tslib';
import { NgbDatepickerI18n, NgbCalendar, NgbCalendarIslamicUmalqura, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { utils, writeFile } from 'xlsx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatInputModule, MatToolbarModule, MatSnackBarModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatSelectModule } from '@angular/material';
import { NgModel, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { ImageCropperComponent, CropperSettings, ImageCropperModule } from 'ng2-img-cropper';
import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { InputMask, InputMaskModule } from 'primeng/inputmask';
import swal from 'sweetalert2';
import { RecaptchaCommonModule } from 'ng-recaptcha/recaptcha/recaptcha-common.module';
import { RecaptchaModule } from 'ng-recaptcha/recaptcha/recaptcha.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { RatingModule } from 'primeng/rating';
export { coreDirectives, AgmCoreModule } from '@agm/core/core.module';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BridgeService = /** @class */ (function () {
    function BridgeService() {
    }
    BridgeService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    BridgeService.ctorParameters = function () { return []; };
    /** @nocollapse */ BridgeService.ngInjectableDef = defineInjectable({ factory: function BridgeService_Factory() { return new BridgeService(); }, token: BridgeService, providedIn: "root" });
    return BridgeService;
}());

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
var IslamicI18n = /** @class */ (function (_super) {
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
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ IslamicI18n.ngInjectableDef = defineInjectable({ factory: function IslamicI18n_Factory() { return new IslamicI18n(); }, token: IslamicI18n, providedIn: "root" });
    return IslamicI18n;
}(NgbDatepickerI18n));

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
var ExportService = /** @class */ (function () {
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
        if (rtl === void 0) { rtl = true; }
        if (skipHeader === void 0) { skipHeader = false; }
        /** @type {?} */
        var worksheet = utils.json_to_sheet(json, { skipHeader: skipHeader });
        /** @type {?} */
        var workbook = utils.book_new();
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
        utils.book_append_sheet(workbook, worksheet, 'data');
        // save to file *
        writeFile(workbook, fileName + '_' + new Date().getTime() + excelExtension);
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
        if (size === void 0) { size = 'A4'; }
        if (margins === void 0) { margins = [0, 0]; }
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
        saveAs(data, fileName + '_' + new Date().getTime() + fileExtension);
    };
    ExportService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ExportService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExportService.ngInjectableDef = defineInjectable({ factory: function ExportService_Factory() { return new ExportService(); }, token: ExportService, providedIn: "root" });
    return ExportService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ HttpRequestsService.ngInjectableDef = defineInjectable({ factory: function HttpRequestsService_Factory() { return new HttpRequestsService(inject(HttpClient)); }, token: HttpRequestsService, providedIn: "root" });
    return HttpRequestsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ LocalStorageService.ngInjectableDef = defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });
    return LocalStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LanguageService = /** @class */ (function () {
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
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () { return [
        { type: TranslateService },
        { type: LocalStorageService }
    ]; };
    /** @nocollapse */ LanguageService.ngInjectableDef = defineInjectable({ factory: function LanguageService_Factory() { return new LanguageService(inject(TranslateService), inject(LocalStorageService)); }, token: LanguageService, providedIn: "root" });
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
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    UtilitiesService.ctorParameters = function () { return [
        { type: BridgeService },
        { type: HttpRequestsService },
        { type: LocalStorageService },
        { type: LanguageService }
    ]; };
    /** @nocollapse */ UtilitiesService.ngInjectableDef = defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(inject(BridgeService), inject(HttpRequestsService), inject(LocalStorageService), inject(LanguageService)); }, token: UtilitiesService, providedIn: "root" });
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
var AllFields = /** @class */ (function () {
    function AllFields() {
    }
    return AllFields;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Configuration = /** @class */ (function () {
    function Configuration() {
        this.isLocal = false;
    }
    return Configuration;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DefaultLocation = /** @class */ (function () {
    function DefaultLocation() {
    }
    return DefaultLocation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Endpoints = /** @class */ (function () {
    function Endpoints() {
    }
    return Endpoints;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FormModes = /** @class */ (function () {
    function FormModes() {
    }
    FormModes.New = 'New';
    FormModes.Display = 'Display';
    FormModes.Edit = 'Edit';
    return FormModes;
}());
var ValidationSummaryModes = /** @class */ (function () {
    function ValidationSummaryModes() {
    }
    ValidationSummaryModes.None = 'None';
    ValidationSummaryModes.Alert = 'Alert';
    ValidationSummaryModes.List = 'List';
    return ValidationSummaryModes;
}());
var SectionModes = /** @class */ (function () {
    function SectionModes() {
    }
    SectionModes.None = 'None';
    SectionModes.Tabs = 'Tabs';
    SectionModes.NextPrevious = 'NextPrevious';
    return SectionModes;
}());
var PostModes = /** @class */ (function () {
    function PostModes() {
    }
    PostModes.FormData = 'FormData';
    PostModes.FormBody = 'FormBody';
    return PostModes;
}());
var SwalTypes = /** @class */ (function () {
    function SwalTypes() {
    }
    SwalTypes.Warning = 'warning';
    SwalTypes.Error = 'error';
    SwalTypes.Success = 'success';
    SwalTypes.Info = 'info';
    SwalTypes.Question = 'question';
    return SwalTypes;
}());
var FieldTypes = /** @class */ (function () {
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
var Field = /** @class */ (function () {
    function Field() {
    }
    return Field;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FieldData = /** @class */ (function () {
    function FieldData() {
    }
    return FieldData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FieldValidation = /** @class */ (function () {
    function FieldValidation() {
    }
    return FieldValidation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InputError = /** @class */ (function () {
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
var Marker = /** @class */ (function () {
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
var MarkerSettings = /** @class */ (function () {
    function MarkerSettings() {
    }
    return MarkerSettings;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MarkerSettingsDefault = /** @class */ (function () {
    function MarkerSettingsDefault() {
    }
    return MarkerSettingsDefault;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MasterDetailDetails = /** @class */ (function () {
    function MasterDetailDetails() {
    }
    return MasterDetailDetails;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Notifications = /** @class */ (function () {
    function Notifications() {
    }
    return Notifications;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Section = /** @class */ (function () {
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
var Settings = /** @class */ (function () {
    function Settings() {
    }
    return Settings;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ResponseEventArgs = /** @class */ (function () {
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
var WClockComponent = /** @class */ (function () {
    function WClockComponent() {
        this.userTimeChange = new EventEmitter();
        this.viewChange = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ntw-clock',
                    styles: [".w-clock-wrapper{height:100%;padding:0 24px}.w-clock-wrapper .w-clock{width:200px;height:200px;border-radius:50%;cursor:pointer;padding:24px;background:#ededed}.w-clock-wrapper .w-clock .w-clock-container{width:100%;height:100%;position:relative;display:block}.w-clock-wrapper .w-clock .w-clock-center{height:6px;width:6px;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:50%}.w-clock-wrapper .w-clock .w-pointer{box-shadow:none;width:1px;height:50%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;padding:0;-webkit-transform-origin:top center;transform-origin:top center;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;z-index:0;pointer-events:none}.w-clock-wrapper .w-clock .w-clock-step{display:block;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.w-clock-wrapper .w-clock .w-clock-step .mat-mini-fab{box-shadow:none;background-color:transparent}.w-clock-wrapper .w-clock .w-clock-selected{position:absolute;bottom:-19px;left:-19px;min-width:0;min-height:0;pointer-events:none;box-shadow:none;cursor:none}.w-clock-deg0{top:0;left:50%}.w-clock-deg15{top:1.70370869%;left:62.94095226%}.w-clock-deg30{top:6.69872981%;left:75%}.w-clock-deg45{top:14.64466094%;left:85.35533905%}.w-clock-deg60{top:25%;left:93.30127019%}.w-clock-deg75{top:37.05904774%;left:98.29629131%}.w-clock-deg90{top:50%;left:100%}.w-clock-deg105{top:62.94095226%;left:98.29629131%}.w-clock-deg120{top:75%;left:93.30127019%}.w-clock-deg135{top:85.35533906%;left:85.35533906%}.w-clock-deg150{top:93.30127019%;left:75%}.w-clock-deg165{top:98.29629131%;left:62.94095226%}.w-clock-deg180{top:100%;left:50%}.w-clock-deg195{top:98.29629131%;left:37.05904774%}.w-clock-deg210{top:93.30127019%;left:25%}.w-clock-deg225{top:85.35533906%;left:14.64466094%}.w-clock-deg240{top:75%;left:6.69872981%}.w-clock-deg255{top:62.94095226%;left:1.703708686%}.w-clock-deg270{top:50%;left:0}.w-clock-deg285{top:37.05904774%;left:1.703708686%}.w-clock-deg300{top:25%;left:6.69872981%}.w-clock-deg315{top:14.64466094%;left:14.64466094%}.w-clock-deg330{top:6.69872981%;left:25%}.w-clock-deg345{top:1.703708686%;left:37.05904774%}.w-clock-deg360{top:0;left:50%}"],
                    template: "<div fxLayout=\"row\"\n     fxLayoutAlign=\"center center\"\n     class=\"w-clock-wrapper\">\n  <div class=\"w-clock\">\n    <div class=\"w-clock-container\">\n\n      <!-- Clock center -->\n      <button mat-mini-fab\n              [color]=\"color\"\n              class=\"w-clock-center\"></button>\n\n      <!-- Clock hand -->\n      <mat-toolbar [ngStyle]=\"getPointerStyle()\"\n                   [color]=\"color\"\n                   class=\"w-pointer\">\n        <button mat-mini-fab\n                [color]=\"color\"\n                class=\"w-clock-selected\"></button>\n      </mat-toolbar>\n\n      <!-- Hour / Minute number faces -->\n      <div *ngFor=\"let step of steps; let i = index\"\n           [class]=\"getTimeValueClass(step, i)\">\n        <button mat-mini-fab\n                [color]=\"selectedTimePart === step ? color : ''\"\n                (click)=\"changeTimeValue(step)\">\n          {{ step }}\n        </button>\n      </div>\n\n    </div>\n  </div>\n</div>\n"
                },] },
    ];
    WClockComponent.propDecorators = {
        userTime: [{ type: Input }],
        userTimeChange: [{ type: Output }],
        currentView: [{ type: Input }],
        viewChange: [{ type: Output }],
        color: [{ type: Input }]
    };
    return WClockComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WTimeDialogComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    styles: [".w-timepicker-dialog{padding:0;margin:-24px;width:calc(100% + 48px)}"],
                    template: "<div mat-dialog-content class=\"w-timepicker-dialog\">\n  <ntw-time [color]=\"color\" [userTime]=\"userTime\" (reverted)=\"revert()\" (submitted)=\"submit()\"></ntw-time>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    WTimeDialogComponent.ctorParameters = function () { return [
        { type: UserTimeData, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef }
    ]; };
    return WTimeDialogComponent;
}());
var UserTimeData = /** @class */ (function () {
    function UserTimeData() {
    }
    return UserTimeData;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var WTimeComponent = /** @class */ (function () {
    function WTimeComponent(translatePipe) {
        this.translatePipe = translatePipe;
        this.userTimeChange = new EventEmitter();
        this.reverted = new EventEmitter();
        this.submitted = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ntw-time',
                    template: "<div fxLayout=\"row\"\n     fxLayout.lt-md=\"column\"\n     fxLayoutAlign=\"center center\"\n     class=\"w-time\"\n     [ngClass.xs]=\"'vertical-time'\"\n     [ngClass.sm]=\"'vertical-time'\">\n  <mat-toolbar fxLayout=\"column\"\n               fxLayout.lt-md=\"row\"\n               fxLayoutAlign=\"center center\"\n               [color]=\"color\"\n               class=\"w-timepicker-time-container\">\n\n    <div class=\"w-timepicker-selected-time\">\n      <span [class]=\"currentView === VIEW_HOURS ? 'active': ''\"\n            (click)=\"setCurrentView(VIEW_HOURS)\">{{ formatHour() }}:</span>\n      <span [class]=\"currentView === VIEW_MINUTES ? 'active': ''\"\n            (click)=\"setCurrentView(VIEW_MINUTES)\">{{ formatMinute() }}</span>\n    </div>\n    <div fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         class=\"w-timepicker-selected-ampm\"\n         *ngIf=\"userTime.format === 12\">\n      <span (click)=\"setMeridien('AM')\"\n            [class]=\"userTime.meriden === 'AM' ? 'active' : ''\">{{'AM' | translate}}</span>\n      <span (click)=\"setMeridien('PM')\"\n            [class]=\"userTime.meriden === 'PM' ? 'active' : ''\">{{'PM' | translate}}</span>\n    </div>\n\n  </mat-toolbar>\n\n  <div fxLayout=\"column\"\n       fxLayoutAlign=\"space-between center\"\n       class=\"w-time-content\">\n    <ntw-clock [color]=\"color\"\n             class=\"w-animation-zoom\"\n             [userTime]=\"userTime\"\n             (userTimeChange)=\"emituserTimeChange($event)\"\n             [(currentView)]=\"currentView\"\n             (viewChange)=\"setCurrentView($event)\">\n    </ntw-clock>\n\n    <div fxFlexAlign=\"end\">\n      <button mat-button\n              (click)=\"revert()\">\n        {{revertLabel}}\n      </button>\n      <button mat-button\n              [color]=\"color\"\n              (click)=\"submit()\">\n        {{submitLabel}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host{display:block}.w-time{max-height:100%;min-height:350px;height:350px}.w-time .w-timepicker-time-container{padding:15px;min-width:160px;width:160px}.w-time .w-timepicker-time-container.mat-toolbar-single-row{height:100%}.w-time .w-timepicker-selected-time{font-size:3.5rem;font-weight:400;display:flex}.w-time .w-timepicker-selected-ampm{font-size:1rem;line-height:1.3rem;padding-top:2rem}.w-time .w-time-content{width:100%;height:100%;padding:6px}.w-time .w-time-content w-clock{padding:12px 0;height:calc(100% - 58px)}.w-time.vertical-time{height:auto}.w-time.vertical-time .w-timepicker-time-container{min-width:auto;width:100%;height:100px}.w-time.vertical-time .w-timepicker-time-container .w-timepicker-selected-ampm{padding:0 12px}.w-timepicker-selected-ampm>span,.w-timepicker-selected-time>span{outline:0;opacity:.5}.w-timepicker-selected-ampm>span:not(.active),.w-timepicker-selected-time>span:not(.active){cursor:pointer}.w-timepicker-selected-ampm>span.active,.w-timepicker-selected-time>span.active{opacity:1}.w-animate-next{opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove{transition:.5s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}.w-animate-prev{opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove{transition:.3s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}@-webkit-keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}.w-animation-zoom.ng-enter{transition:.3s cubic-bezier(.35,0,.25,1);-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:w-animation-bounce;animation-name:w-animation-bounce}"],
                    providers: [TranslatePipe]
                },] },
    ];
    /** @nocollapse */
    WTimeComponent.ctorParameters = function () { return [
        { type: TranslatePipe }
    ]; };
    WTimeComponent.propDecorators = {
        userTime: [{ type: Input }],
        userTimeChange: [{ type: Output }],
        revertLabel: [{ type: Input }],
        submitLabel: [{ type: Input }],
        reverted: [{ type: Output }],
        submitted: [{ type: Output }],
        color: [{ type: Input }]
    };
    return WTimeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FieldComponent = /** @class */ (function () {
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
        if (type === void 0) { type = FieldComponent.ValidationErrorClass; }
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
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
        { type: Component, args: [{
                    selector: 'ntw-field',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: BridgeService }
    ]; };
    FieldComponent.propDecorators = {
        field: [{ type: Input, args: ['field',] }],
        control: [{ type: ViewChild, args: [NgModel,] }]
    };
    return FieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BoundableFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-boundable-field',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    BoundableFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: HttpRequestsService },
        { type: TranslateService },
        { type: UtilitiesService },
        { type: ActivatedRoute, decorators: [{ type: Optional }] }
    ]; };
    return BoundableFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CheckboxFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var ChipsFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var DatetimeFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-datetime-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-calendar #calendar\n              [id]=\"field.name\"\n              [name]=\"field.name\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n              [title]=\"field.tooltip | translate\"\n              #input=\"ngModel\"\n              [(ngModel)]=\"field.data.value\"\n              [required]=\"field.validation.required\"\n              [readonlyInput]=\"field.readonly\"\n              [disabled]=\"field.disabled\"\n              [showIcon]=\"field.showIcon\"\n              [showTime]=\"field.showTime\"\n              [hourFormat]=\"field.hourFormat\"\n              [monthNavigator]=\"field.monthNavigator\"\n              [yearNavigator]=\"field.yearNavigator\"\n              [yearRange]=\"field.yearRange\"\n              [dateFormat]=\"field.dateFormat\"\n              [minDate]=\"field.minDateValue\"\n              [maxDate]=\"field.maxDateValue\"\n              [defaultDate]=\"field.defaultDateValue\"\n              *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n              (onClose)=\"validate();triggerDynamicEvent('onSelect', $event, field);\"\n              (onSelect)=\"validate();triggerDynamicEvent('onSelect', $event, field);\">\n  </p-calendar>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value | date:field.displayDateFormat}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["body.en :host ::ng-deep button.ui-datepicker-trigger{right:0}body.ar :host ::ng-deep button.ui-datepicker-trigger{left:0}:host ::ng-deep span.ui-calendar{display:block}:host ::ng-deep p-calendar input{border-radius:.25rem}body.ar :host ::ng-deep .ui-calendar-button{border-radius:.25rem 0 0 .25rem}body.ar :host ::ng-deep .ui-calendar.ui-calendar-w-btn input{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}:host ::ng-deep button.ui-datepicker-trigger{position:absolute}:host ::ng-deep .ui-calendar .ui-datepicker{width:17em;min-width:auto}:host ::ng-deep .ui-calendar .ui-calendar-button .ui-button-icon-left{font-size:1.25em}"]
                },] },
    ];
    /** @nocollapse */
    DatetimeFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: TranslateService },
        { type: LanguageService },
        { type: DatePipe }
    ]; };
    DatetimeFieldComponent.propDecorators = {
        calendarElement: [{ type: ViewChild, args: ['calendar',] }]
    };
    return DatetimeFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DatetimeHijriFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-datetime-hijri-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div class=\"hijri-date-control\">\n    <input [name]=\"field.name\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           [class]=\"field.cssClasses.input\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           ngbDatepicker\n           #input=\"ngbDatepicker\"\n           #defaultInput=\"ngModel\"\n           [readonly]=\"field.readonly\"\n           [disabled]=\"field.disabled\"\n           [(ngModel)]=\"field.data.value\"\n           [minDate]=\"field.minDateValue\"\n           [maxDate]=\"field.maxDateValue\"\n           [showWeekNumbers]=\"field.showWeekNumbers\"\n           [displayMonths]=\"field.displayMonths\"\n           [outsideDays]=\"field.outsideDays\"\n           [showWeekdays]=\"field.showWeekdays\"\n           *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n           (click)=\"toggleCalendar();validate();\"\n           (ngModelChange)=\"validate();triggerDynamicEvent('onSelect', $event, field);\" />\n\n    <!-- icon -->\n    <button class=\"hijri-date-icon-container\"\n            [disabled]=\"field.disabled\"\n            type=\"button\"\n            (click)=\"toggleCalendar();\">\n      <span class=\"hijri-date-icon\"\n            *ngIf=\"field.showIcon\">\n      </span>\n    </button>\n  </div>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.day}}/{{field?.data?.value?.month}}/{{field?.data?.value?.year}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [".hijri-date{height:35px}.hijri-date-control{position:relative}.hijri-date-icon-container{position:absolute;top:0;padding:0 6px;background-color:#2399e5;color:#fff;cursor:pointer;height:100%;line-height:1.8;border:0}button.hijri-date-icon-container:disabled{opacity:.35}.hijri-date-icon:focus,.hijri-date-icon:hover{background:#1f89ce}.hijri-date-icon:after{content:'\\e927';font-family:primeicons;font-size:1.25em}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg)}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .right .ngb-dp-navigation-chevron{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}body.ar :host ::ng-deep .custom-select{background-position:left.75rem center}body.ar :host ::ng-deep .hijri-date-icon-container{left:0}body.en :host ::ng-deep .hijri-date-icon-container{right:0}:host ::ng-deep .custom-select{background-position:left .25rem center!important;direction:rtl!important;min-width:100px}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-week-number,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-weekday{width:2.5rem;height:2.5rem}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day div{width:100%;height:100%;line-height:2.5rem}"],
                    providers: [
                        { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
                        { provide: NgbDatepickerI18n, useClass: IslamicI18n }
                    ]
                },] },
    ];
    /** @nocollapse */
    DatetimeHijriFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: UtilitiesService }
    ]; };
    DatetimeHijriFieldComponent.propDecorators = {
        calendar: [{ type: ViewChild, args: ['input',] }]
    };
    return DatetimeHijriFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EditorFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var FileUploadFieldComponent = /** @class */ (function (_super) {
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
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
        { type: Component, args: [{
                    selector: 'ntw-file-upload-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-fileUpload [id]=\"field.name\"\n                [name]=\"field.name\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                [url]=\"field.data.url\"\n                [multiple]=\"field.multiple\"\n                [accept]=\"field.validation.accept\"\n                #input\n                [auto]=\"field.auto\"\n                [maxFileSize]=\"field.validation.maxFileSizeInBytes\"\n                [mode]=\"field.mode\"\n                [showCancelButton]=\"field.buttons.showCancelButton\"\n                [showUploadButton]=\"field.buttons.showUploadButton\"\n                [chooseLabel]=\"field.buttons.chooseLabel | translate\"\n                [uploadLabel]=\"field.buttons.uploadLabel | translate\"\n                [cancelLabel]=\"field.buttons.cancelLabel | translate\"\n                [title]=\"field.tooltip | translate\"\n                [disabled]=\"field.disabled\"\n                invalidFileSizeMessageSummary=\"invalidFileSize\"\n                invalidFileSizeMessageDetail=\"invalidFileSize\"\n                invalidFileTypeMessageDetail=\"invalidFileType\"\n                invalidFileTypeMessageSummary=\"invalidFileType\"\n                customUpload=true\n                *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (onSelect)=\"validate('onSelect');\"\n                (onRemove)=\"validate('onRemove');\"\n                (onClear)=\"validate('onClear');\">\n  </p-fileUpload>\n\n  <!-- display -->\n  <div class=\"upload-file-viewer\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'New' && field?.data?.value?.length > 0\">\n    <div class=\"upload-file-item\"\n         *ngFor=\"let file of field.data.value\">\n      <a [href]=\"file.url\"\n         [download]=\"file.fileName\"\n         target=\"_blank\"\n         class=\"upload-file-anchor\">\n        <span>\n          <i class=\"fa fa-file\"></i>\n        </span>\n        <span class=\"upload-file-title\">{{file.fileName}}</span>\n      </a>\n\n      <a href=\"javascript:;\"\n         (click)=\"removeFile(file);validate('onRemoveFile');\"\n         *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n         class=\"trash-icon-style\">\n        <span>\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </span>\n      </a>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host ::ng-deep p-fileupload .ui-messages-error{display:none!important}:host ::ng-deep .ui-fileupload{margin-bottom:8px}.upload-file-viewer{border:1px solid #d5d5d5;padding:10px}.upload-file-viewer .upload-file-item{border:1px solid #d5d5d5;padding:10px;background:linear-gradient(to bottom,#f6f7f9 0,#ebedf0 100%);margin-bottom:10px}.upload-file-title{padding:0 15px}a.upload-file-anchor{line-height:2}.upload-file-viewer div:last-child{margin-bottom:0}a.trash-icon-style{padding:6px 11px;border-radius:6px;font-size:12px;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s}a.trash-icon-style:hover{border:1px solid #1f89ce;background:#1f89ce}body.ar :host ::ng-deep a.trash-icon-style{float:left}body.en :host ::ng-deep a.trash-icon-style{float:right}"]
                },] },
    ];
    FileUploadFieldComponent.propDecorators = {
        fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
    };
    return FileUploadFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageCropperFieldComponent = /** @class */ (function (_super) {
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
        this.cropperSettings = new CropperSettings();
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
        { type: Component, args: [{
                    selector: 'ntw-image-cropper-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field?.cssClasses?.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input -->\n  <!-- upload control -->\n  <p-fileUpload [id]=\"field.name\"\n                [name]=\"field.name\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                accept=\"image/*\"\n                mode=\"advanced\"\n                [showCancelButton]=false\n                [showUploadButton]=false\n                [chooseLabel]=\"field.buttons.chooseLabel | translate\"\n                [title]=\"field.tooltip | translate\"\n                [disabled]=\"field.disabled\"\n                invalidFileSizeMessageSummary=\"invalidFileSize\"\n                invalidFileSizeMessageDetail=\"invalidFileSize\"\n                invalidFileTypeMessageDetail=\"invalidFileType\"\n                invalidFileTypeMessageSummary=\"invalidFileType\"\n                customUpload=true\n                *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (onSelect)=\"setCropperImage();validate();\"\n                (onRemove)=\"clearValue();validate();\">\n  </p-fileUpload>\n\n  <!-- cropper -->\n  <img-cropper *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n               [hidden]=\"!imageFile.src\"\n               [image]=\"imageFile\"\n               [settings]=\"cropperSettings\"\n               (onCrop)=\"setValue()\">\n  </img-cropper>\n\n  <!-- cropped image -->\n  <span class=\"cropped-image\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n        [hidden]=\" !imageFile.image\">\n    <img #croppedImage\n         *ngIf=\"imageFile.image\"\n         [src]=\"imageFile.image\"\n         [width]=\"cropperSettings.width\"\n         [height]=\"cropperSettings.height\">\n  </span>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <img *ngIf=\"field.data.value\"\n         [src]=\"field.data.value\"\n         [width]=\"cropperSettings.width\"\n         [height]=\"cropperSettings.height\">\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}p-fileupload{display:block}:host ::ng-deep img-cropper .ng2-imgcrop{border:1px solid #d5d5d5;padding:20px 0;background-color:#ebedf0;width:100%;margin:10px 0;display:block}.form-display img{border:1px solid #d5d5d5;background-color:#ebedf0;padding:10px}.cropped-image{width:100%;display:block;border:1px solid #d5d5d5;background-color:#ebedf0;margin:0 auto;text-align:center;padding:10px}"]
                },] },
    ];
    ImageCropperFieldComponent.propDecorators = {
        cropper: [{ type: ViewChild, args: [ImageCropperComponent,] }],
        croppedImageElement: [{ type: ViewChild, args: ['croppedImage',] }],
        fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
    };
    return ImageCropperFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InfoFieldComponent = /** @class */ (function (_super) {
    __extends(InfoFieldComponent, _super);
    function InfoFieldComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoFieldComponent.decorators = [
        { type: Component, args: [{
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
var InputFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var LocationFieldComponent = /** @class */ (function (_super) {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
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
        { type: Component, args: [{
                    selector: 'ntw-location-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <div class=\"search-location-container\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\">\n    <!-- input && display -->\n    <input #search\n           [id]=\"field.name\"\n           [name]=\"field.name\"\n           [title]=\"field.tooltip | translate\"\n           [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n           autocorrect=\"off\"\n           autocapitalize=\"off\"\n           spellcheck=\"false\"\n           type=\"text\"\n           [class]=\"field.cssClasses.input\"\n           (keydown.enter)=\"$event.preventDefault()\">\n\n    <!-- icon -->\n    <span class=\"search-location-icon\">\n    </span>\n  </div>\n\n  <agm-map [latitude]=\"field.defaultLocation?.latitude\"\n           [longitude]=\"field.defaultLocation?.longitude\"\n           [zoom]=\"field.zoom\"\n           [zoomControl]=\"field.zoomControl\"\n           [ngClass]=\"{'invalid': isValidationShown()}\"\n           (mapClick)=\"addMarkers($event);validate();\">\n\n    <agm-marker *ngFor=\"let marker of field.data.value\"\n                (markerClick)=\"triggerDynamicEvent('markerClick', $event, marker);\"\n                [latitude]=\"marker.latitude\"\n                [longitude]=\"marker.longitude\"\n                [markerDraggable]=\"marker.draggable && bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (dragEnd)=\"updateMarkerPosition(marker, $event)\">\n\n      <agm-info-window *ngIf=\"marker.infoHtml\">\n        <div [innerHTML]=\"marker.infoHtml | translate\"></div>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["agm-map{width:100%;height:300px}span.search-location-icon:after{content:\"\\f002\";font:14px/2.5 FontAwesome;position:absolute;height:100%;color:#555}.search-location-container{position:relative}body.en :host ::ng-deep span.search-location-icon:after{right:5px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}body.ar :host ::ng-deep span.search-location-icon:after{left:5px}input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                },] },
    ];
    /** @nocollapse */
    LocationFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: MapsAPILoader },
        { type: NgZone }
    ]; };
    LocationFieldComponent.propDecorators = {
        searchElement: [{ type: ViewChild, args: ['search',] }]
    };
    return LocationFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MaskFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-mask-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-inputMask [id]=\"field.name\"\n               [name]=\"field.name\"\n               [class]=\"field.cssClasses.input\"\n               [ngClass]=\"{'invalid': isValidationShown()}\"\n               [title]=\"field.tooltip | translate\"\n               [placeholder]=\"(field.placeholder) ? (field.placeholder | translate) : ''\"\n               #input=\"ngModel\"\n               [readonly]=\"field.readonly\"\n               [(ngModel)]=\"field.data.value\"\n               [mask]=\"field.validation.mask\"\n               [slotChar]=\"field.slotChar\"\n               [autoClear]=\"field.autoClear\"\n               [unmask]=\"field.unmask\"\n               [disabled]=\"field.disabled\"\n               [maxlength]=\"field.validation.length\"\n               [characterPattern]=\"field.validation.characterPattern\"\n               [pattern]=\"field.validation.pattern\"\n               *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n               (ngModelChange)=\"validate();triggerDynamicEvent('onChange', $event, field);\">\n  </p-inputMask>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field.data.value}}\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    MaskFieldComponent.propDecorators = {
        inputMask: [{ type: ViewChild, args: [InputMask,] }]
    };
    return MaskFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidationSummaryComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'ntw-validation-summary',
                    template: "<div #validationSummary\n     class=\"validation-summary-container\"\n     [hidden]=\"bridgeService?.configuration?.settings?.validationSummaryMode !='List'\">\n  <div class=\"validation-summary\"\n       *ngIf=\"bridgeService?.configuration?.validationErrors?.length > 0\">\n    <span class=\"validation-summary-title-section\">{{'validations.ValidationSummaryErrors' | translate}}</span>\n    <ul>\n      <li class=\"validation-summary-error\" *ngFor=\"let error of bridgeService?.configuration?.validationErrors\">\n        {{error.message | translate}}\n      </li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [".validation-summary{border:1px solid #d6d6d6;padding-top:15px;color:red;margin-bottom:20px}.validation-summary-title-section{font-weight:700;padding:15px 20px;display:block}.validation-summary-container{margin-top:20px}"]
                },] },
    ];
    /** @nocollapse */
    ValidationSummaryComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: LanguageService },
        { type: ChangeDetectorRef }
    ]; };
    ValidationSummaryComponent.propDecorators = {
        validationSummaryElement: [{ type: ViewChild, args: ['validationSummary',] }]
    };
    return ValidationSummaryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SelectFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var RadiobuttonFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var MultiSelectFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var TimeFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-time-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <ntw-mat-timepicker color=\"primary\"\n                      [inputClass]=\"field.cssClasses.input\"\n                      [ngClass]=\"{'invalid': isValidationShown()}\"\n                      [inputId]=\"field.name\"\n                      [inputName]=\"field.name\"\n                      [disabled]=\"field.disabled\"\n                      readonly=true\n                      [tooltip]=\"field.tooltip | translate\"\n                      [placeholderValue]=\"field.tooltip | translate\"\n                      [(userTime)]=\"field.data.value\"\n                      *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                      (userTimeChange)=\"setTimePickerFieldValue($event);validate();triggerDynamicEvent('onChange', $event, field);\">\n  </ntw-mat-timepicker>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    {{field?.data?.value?.hour}}:{{field?.data?.value?.minute}}\n    <span *ngIf=\"field?.data?.value?.format == 12\">{{field?.data?.value?.meriden | translate}}</span>\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host ::ng-deep .time-picker-button.mat-button{position:absolute;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s;height:35px}body.en :host ::ng-deep .time-picker-button.mat-button{right:15px}body.ar :host ::ng-deep .time-picker-button.mat-button{left:15px}:host ::ng-deep .w-mat-timepicker .mat-button,:host ::ng-deep .w-mat-timepicker .mat-flat-button,:host ::ng-deep .w-mat-timepicker .mat-icon-button,:host ::ng-deep .w-mat-timepicker .mat-stroked-button{line-height:32px}:host ::ng-deep input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}"]
                },] },
    ];
    /** @nocollapse */
    TimeFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: UtilitiesService }
    ]; };
    return TimeFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RecaptchaFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-recaptcha-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <re-captcha #recaptcha\n              [id]=\"field.name\"\n              [siteKey]=\"field.siteKey\"\n              [class]=\"field.cssClasses.input\"\n              [ngClass]=\"{'invalid': isValidationShown()}\"\n              [theme]=\"field.theme\"\n              [size]=\"field.size\"\n              [title]=\"field.tooltip | translate\"\n              (resolved)=\"validate($event);\">\n  </re-captcha>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    RecaptchaFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: LanguageService }
    ]; };
    RecaptchaFieldComponent.propDecorators = {
        recaptchaElement: [{ type: ViewChild, args: ['recaptcha',] }]
    };
    return RecaptchaFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RatingFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
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
var DynamicFormComponent = /** @class */ (function () {
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
        this.formCleared = new EventEmitter();
        /**
         * \@property The onFormDataBound event. Triggered when the form is data bound.
         */
        this.formDataBound = new EventEmitter();
        /**
         * \@property The onBeforeFormSaved event. Triggered before the form is saved.
         */
        this.beforeFormSaved = new EventEmitter();
        /**
         * \@property The onAfterFormSaved event. Triggered after the form is saved.
         */
        this.afterFormSaved = new EventEmitter();
        /**
         * \@property The onBeforeFormSubmitted event. Triggered before the form is submitted.
         */
        this.beforeFormSubmitted = new EventEmitter();
        /**
         * \@property The onAfterFormSubmitted event. Triggered after the form is submitted.
         */
        this.afterFormSubmitted = new EventEmitter();
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
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
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
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
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
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
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
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
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_5) throw e_5.error; }
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
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_6) throw e_6.error; }
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
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (dateFields_1_1 && !dateFields_1_1.done && (_c = dateFields_1.return)) _c.call(dateFields_1);
                            }
                            finally { if (e_7) throw e_7.error; }
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
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_8) throw e_8.error; }
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
                            catch (e_9_1) { e_9 = { error: e_9_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_9) throw e_9.error; }
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
                        if (!!this.configuration.isLocal) return [3 /*break*/, 7];
                        if (!this.configuration.settings.sourceFormSchemas) return [3 /*break*/, 5];
                        i = this.configuration.settings.sourceFormSchemas.length - 1;
                        _b.label = 2;
                    case 2:
                        if (!(i >= 0)) return [3 /*break*/, 5];
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
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_10) throw e_10.error; }
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
        { type: Component, args: [{
                    selector: 'ntw-dynamic-form',
                    template: "<div #container\n     class=\"container\">\n  <form class=\"dynamic-form-form\"\n        #f=\"ngForm\"\n        (ngSubmit)=\"submitForm(f)\"\n        [hidden]=\"showProgressIndicator\"\n        autocomplete=\"on\">\n    <div class=\"dynamic-form\">\n      <div class=\"sections sections-top\"\n           *ngIf=\"configuration?.settings?.sectionLocation == 'Top' || configuration?.settings?.sectionLocation == 'Both'\">\n        <!-- section tabs -->\n        <ntw-tabs-section *ngIf=\"configuration?.settings?.sectionMode == 'Tabs'\"></ntw-tabs-section>\n\n        <!-- next previous -->\n        <ntw-next-previous-section *ngIf=\"configuration?.settings?.sectionMode == 'NextPrevious'\"></ntw-next-previous-section>\n      </div>\n\n      <div class=\"clearfix\"></div>\n\n      <!-- form -->\n      <div class=\"form-container row\">\n        <div [class]=\"field.cssClasses.wrapper\"\n             *ngFor=\"let field of configuration?.mergedFields\">\n\n          <!-- info -->\n          <ntw-info-field [field]=\"field\"\n                          *ngIf=\"field.fieldType=='info'\">\n          </ntw-info-field>\n\n          <!-- text or number or password -->\n          <ntw-input-field [field]=\"field\"\n                           *ngIf=\"(field.fieldType=='text' || field.fieldType=='number' || field.fieldType=='password')\">\n          </ntw-input-field>\n\n          <!-- dropdown list -->\n          <ntw-select-field [field]=\"field\"\n                            *ngIf=\"field.fieldType=='select'\">\n          </ntw-select-field>\n\n          <!-- datetime picker -->\n          <ntw-datetime-field [field]=\"field\"\n                              *ngIf=\"field.fieldType=='datetime'\">\n          </ntw-datetime-field>\n\n          <!-- hijri datetime picker -->\n          <ntw-datetime-hijri-field [field]=\"field\"\n                                    *ngIf=\"field.fieldType=='datetimehijri'\">\n          </ntw-datetime-hijri-field>\n\n          <!-- time picker -->\n          <ntw-time-field [field]=\"field\"\n                          *ngIf=\"field.fieldType=='time'\">\n          </ntw-time-field>\n\n          <!-- checkbox list -->\n          <ntw-checkbox-field [field]=\"field\"\n                              *ngIf=\"field.fieldType=='checkbox'\">\n          </ntw-checkbox-field>\n\n          <!-- radiobutton list -->\n          <ntw-radiobutton-field [field]=\"field\"\n                                 *ngIf=\"field.fieldType=='radiobutton'\">\n          </ntw-radiobutton-field>\n\n          <!-- multiSelect list -->\n          <ntw-multi-select-field [field]=\"field\"\n                                  *ngIf=\"field.fieldType=='multiselect'\">\n          </ntw-multi-select-field>\n\n          <!-- chips -->\n          <ntw-chips-field [field]=\"field\"\n                           *ngIf=\"field.fieldType=='chips'\">\n          </ntw-chips-field>\n\n          <!-- editor -->\n          <ntw-editor-field [field]=\"field\"\n                            *ngIf=\"field.fieldType=='editor'\">\n          </ntw-editor-field>\n\n          <!-- mask -->\n          <ntw-mask-field [field]=\"field\"\n                          *ngIf=\"field.fieldType=='mask'\">\n          </ntw-mask-field>\n\n          <!-- location -->\n          <ntw-location-field [field]=\"field\"\n                              *ngIf=\"field.fieldType=='location'\">\n          </ntw-location-field>\n\n          <!-- file upload -->\n          <ntw-file-upload-field [field]=\"field\"\n                                 *ngIf=\"field.fieldType=='fileupload'\">\n          </ntw-file-upload-field>\n\n          <!-- Rating -->\n          <ntw-rating-field [field]=\"field\"\n                            *ngIf=\"field.fieldType=='rating'\">\n          </ntw-rating-field>\n\n          <!-- recaptcha -->\n          <ntw-recaptcha-field [field]=\"field\"\n                               *ngIf=\"field.fieldType=='recaptcha'\">\n          </ntw-recaptcha-field>\n\n          <!-- image cropper -->\n          <ntw-image-cropper-field [field]=\"field\"\n                                   *ngIf=\"field.fieldType=='imagecropper'\">\n          </ntw-image-cropper-field>\n\n          <!-- masterdetail -->\n          <ntw-master-detail-field [field]=\"field\"\n                                   *ngIf=\"field.fieldType=='masterdetail'\">\n          </ntw-master-detail-field>\n        </div>\n      </div>\n\n      <div class=\"clearfix\"></div>\n\n      <!-- validation summary -->\n      <ntw-validation-summary></ntw-validation-summary>\n\n      <!-- buttons -->\n      <div [class]=\"configuration?.buttons?.cssClass\"\n           data-html2canvas-ignore=\"true\">\n        <span class=\"main-buttons\"\n              *ngIf=\"configuration?.settings?.formMode != 'Display'\">\n          <button type=\"button\"\n                  [name]=\"configuration?.buttons?.main?.clear?.name\"\n                  [title]=\"configuration?.buttons?.main?.clear?.tooltip | translate\"\n                  [disabled]=\"configuration?.buttons?.main?.clear?.disabled\"\n                  [hidden]=\"isButtonHidden(configuration?.buttons?.main?.clear)\"\n                  [class]=\"configuration?.buttons?.main?.clear?.cssClass\"\n                  (click)=\"clearForm(f)\">\n            {{configuration?.buttons?.main?.clear?.label | translate}}\n          </button>\n          <button type=\"button\"\n                  [name]=\"configuration?.buttons?.main?.save?.name\"\n                  [title]=\"configuration?.buttons?.main?.save?.tooltip | translate\"\n                  [disabled]=\"configuration?.buttons?.main?.save?.disabled\"\n                  [hidden]=\"isButtonHidden(configuration?.buttons?.main?.save)\"\n                  [class]=\"configuration?.buttons?.main?.save?.cssClass\"\n                  (click)=\"saveForm(f)\">\n            {{configuration?.buttons?.main?.save?.label | translate}}\n          </button>\n          <button type=\"submit\"\n                  [name]=\"configuration?.buttons?.main?.submit?.name\"\n                  [title]=\"configuration?.buttons?.main?.submit?.tooltip | translate\"\n                  [disabled]=\"configuration?.buttons?.main?.submit?.disabled\"\n                  [hidden]=\"isButtonHidden(configuration?.buttons?.main?.submit)\"\n                  [class]=\"configuration?.buttons?.main?.submit?.cssClass\">\n            {{configuration?.buttons?.main?.submit?.label | translate}}\n          </button>\n        </span>\n\n        <span class=\"additional-buttons\">\n          <button *ngFor=\"let button of configuration?.buttons?.additionalButtons\"\n                  type=\"button\"\n                  [name]=\"button?.name\"\n                  [title]=\"button?.tooltip | translate\"\n                  [disabled]=\"button?.disabled\"\n                  [hidden]=\"isButtonHidden(button)\"\n                  [class]=\"button?.cssClass\"\n                  (click)=\"triggerDynamicEvent('click', $event, button);\">\n            {{button?.label | translate}}\n          </button>\n        </span>\n      </div>\n\n      <div class=\"sections sections-bottom\"\n           *ngIf=\"configuration?.settings?.sectionLocation == 'Bottom' || configuration?.settings?.sectionLocation == 'Both'\">\n        <!-- section tabs -->\n        <ntw-tabs-section *ngIf=\"configuration?.settings?.sectionMode == 'Tabs'\"></ntw-tabs-section>\n\n        <!-- next previous -->\n        <ntw-next-previous-section *ngIf=\"configuration?.settings?.sectionMode == 'NextPrevious'\"></ntw-next-previous-section>\n      </div>\n    </div>\n  </form>\n\n  <div class=\"clearfix\"></div>\n\n  <ntw-progress-indicator *ngIf=\"showProgressIndicator\"\n                          [spinnerSourceUrl]=\"configuration?.settings?.spinnerSourceUrl\"></ntw-progress-indicator>\n</div>\n",
                    styles: [".formButtons{margin:20px 0}body.ar .main-buttons button{margin-left:10px}body.en .main-buttons button{margin-right:10px}body.ar{direction:rtl!important;text-align:right!important}body.en{direction:ltr!important;text-align:left!important}.ui-dropdown,input.form-input,input.ui-inputtext.ui-widget.ui-state-default,p-dropdown{width:100%!important;height:35px}.input-container{margin-top:24px}label.form-label{font-weight:700}span.required-asterisk{color:red}p.error,p.validation-error{display:block;color:red}.result img{width:150px;height:150px}.form-display{display:block}w-clock *{box-sizing:content-box!important}"],
                    providers: [TranslatePipe, BridgeService, UtilitiesService],
                    // provide the bridge service here in order to have a different instance per form instance.
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    DynamicFormComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: HttpRequestsService },
        { type: LocalStorageService },
        { type: UtilitiesService },
        { type: TranslateService },
        { type: LanguageService },
        { type: ChangeDetectorRef },
        { type: TranslatePipe },
        { type: ActivatedRoute, decorators: [{ type: Optional }] }
    ]; };
    DynamicFormComponent.propDecorators = {
        configurationSourceUrl: [{ type: Input, args: ['configurationSourceUrl',] }],
        parentComponent: [{ type: Input, args: ['parentComponent',] }],
        additionalParameters: [{ type: Input, args: ['additionalParameters',] }],
        formCleared: [{ type: Output }],
        formDataBound: [{ type: Output }],
        beforeFormSaved: [{ type: Output }],
        afterFormSaved: [{ type: Output }],
        beforeFormSubmitted: [{ type: Output }],
        afterFormSubmitted: [{ type: Output }],
        containerElement: [{ type: ViewChild, args: ['container',] }],
        validationSummaryComponent: [{ type: ViewChild, args: [ValidationSummaryComponent,] }],
        inputFieldComponents: [{ type: ViewChildren, args: [InputFieldComponent,] }],
        selectFieldComponents: [{ type: ViewChildren, args: [SelectFieldComponent,] }],
        datetimeFieldComponents: [{ type: ViewChildren, args: [DatetimeFieldComponent,] }],
        datetimeHijriFieldComponents: [{ type: ViewChildren, args: [DatetimeHijriFieldComponent,] }],
        checkboxFieldComponents: [{ type: ViewChildren, args: [CheckboxFieldComponent,] }],
        radiobuttonFieldComponents: [{ type: ViewChildren, args: [RadiobuttonFieldComponent,] }],
        multiSelectFieldComponents: [{ type: ViewChildren, args: [MultiSelectFieldComponent,] }],
        chipsFieldComponents: [{ type: ViewChildren, args: [ChipsFieldComponent,] }],
        editorFieldComponents: [{ type: ViewChildren, args: [EditorFieldComponent,] }],
        maskFieldComponents: [{ type: ViewChildren, args: [MaskFieldComponent,] }],
        timeFieldComponents: [{ type: ViewChildren, args: [TimeFieldComponent,] }],
        locationFieldComponents: [{ type: ViewChildren, args: [LocationFieldComponent,] }],
        fileUploadFieldComponents: [{ type: ViewChildren, args: [FileUploadFieldComponent,] }],
        imageCropperFieldComponents: [{ type: ViewChildren, args: [ImageCropperFieldComponent,] }],
        recaptchaFieldComponents: [{ type: ViewChildren, args: [RecaptchaFieldComponent,] }],
        ratingFieldComponents: [{ type: ViewChildren, args: [RatingFieldComponent,] }]
    };
    return DynamicFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DefaultMasterDetailFormComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'ntw-default-master-detail-form',
                    template: "<mat-dialog-actions>\n    <button mat-dialog-close mat-button>\n        <i class=\"fa fa-times-circle\"\n           aria-hidden=\"true\">\n        </i>\n    </button>\n</mat-dialog-actions>\n\n<mat-dialog-content>\n    <ntw-dynamic-form #detailsForm\n                      [parentComponent]=\"this\"\n                      [configurationSourceUrl]=\"field.details.configurationSourceUrl\">\n    </ntw-dynamic-form>\n</mat-dialog-content>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DefaultMasterDetailFormComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: Field, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    DefaultMasterDetailFormComponent.propDecorators = {
        detailsFormComponent: [{ type: ViewChild, args: ['detailsForm',] }]
    };
    return DefaultMasterDetailFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MasterDetailFieldComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: 'ntw-master-detail-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <div>\n    <a href=\"javascript:;\"\n       (click)=\"openDialog();\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </div>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    MasterDetailFieldComponent.ctorParameters = function () { return [
        { type: BridgeService },
        { type: MatDialog }
    ]; };
    return MasterDetailFieldComponent;
}(FieldComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NextPreviousSectionComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'ntw-next-previous-section',
                    template: "<div class=\"next-prev-container\">\n  <a class=\"arrow-prev\"\n     href=\"javascript:;\"\n     (click)=\"incrementSection(-1)\"\n     title=\"{{'buttons.Previous' | translate}}\">\n  </a>\n  <span class=\"next-prev-header\">{{bridgeService.configuration?.currentSection?.legend | translate}}</span>\n  <a class=\"arrow-next\"\n     href=\"javascript:;\"\n     (click)=\"incrementSection(1)\"\n     title=\"{{'buttons.Next' | translate}}\">\n  </a>\n</div>\n",
                    styles: [".next-prev-container a{text-decoration:none!important}.next-prev-container{text-align:center}.next-prev-header{font-size:2em;font-weight:700}body.en :host ::ng-deep a.arrow-prev:before{content:\"\\f104\";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next:before{content:\"\\f105\";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next{float:right}body.en :host ::ng-deep a.arrow-prev{float:left}body.ar :host ::ng-deep a.arrow-prev:before{content:\"\\f105\";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next:before{content:\"\\f104\";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next{float:left}body.ar :host ::ng-deep a.arrow-prev{float:right}"]
                },] },
    ];
    /** @nocollapse */
    NextPreviousSectionComponent.ctorParameters = function () { return [
        { type: BridgeService }
    ]; };
    return NextPreviousSectionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TabsSectionComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'ntw-tabs-section',
                    template: "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let section of bridgeService?.configuration?.sections\"\n      class=\"nav-item\">\n    <a class=\"nav-link\"\n       href=\"javascript:;\"\n       [ngClass]=\"{'active':section.id==bridgeService?.configuration?.currentSection?.id}\"\n       (click)=\"switchSection(section)\">\n      <span>{{section.legend | translate}}</span>\n      <span class=\"validation-errors-count\"\n            *ngIf=\"section.validationErrorsCount > 0\">\n      </span>\n    </a>\n  </li>\n</ul>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    TabsSectionComponent.ctorParameters = function () { return [
        { type: BridgeService }
    ]; };
    return TabsSectionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProgressIndicatorComponent = /** @class */ (function () {
    function ProgressIndicatorComponent() {
    }
    ProgressIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-progress-indicator',
                    template: "<div class=\"progress-indicator-container\"\n     *ngIf=\"spinnerSourceUrl\">\n  <div class=\"progress-indicator\">\n    <img [src]=\"spinnerSourceUrl\"\n         class=\"progress-indicator-image\"\n         alt=\"progress\" />\n  </div>\n</div>\n",
                    styles: [""]
                },] },
    ];
    ProgressIndicatorComponent.propDecorators = {
        spinnerSourceUrl: [{ type: Input, args: ['spinnerSourceUrl',] }]
    };
    return ProgressIndicatorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NetwaysLibModule = /** @class */ (function () {
    function NetwaysLibModule() {
    }
    NetwaysLibModule.decorators = [
        { type: NgModule, args: [{
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
                        CommonModule,
                        BrowserModule,
                        FormsModule,
                        BrowserAnimationsModule,
                        FlexLayoutModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        RadioButtonModule,
                        FileUploadModule,
                        EditorModule,
                        InputMaskModule,
                        ChipsModule,
                        DropdownModule,
                        MultiSelectModule,
                        MatDialogModule,
                        MatToolbarModule,
                        MatInputModule,
                        MatSnackBarModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatSelectModule,
                        ImageCropperModule,
                        RatingModule,
                        RecaptchaCommonModule,
                        RecaptchaModule.forRoot(),
                        NgbModule.forRoot(),
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [HttpClient]
                            }
                        }),
                        AgmCoreModule.forRoot({
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
    return new TranslateHttpLoader(http);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BridgeService, IslamicI18n, ExportService, HttpRequestsService, LanguageService, LocalStorageService, UtilitiesService, AllFields, Configuration, DefaultLocation, Endpoints, FormModes, ValidationSummaryModes, SectionModes, PostModes, SwalTypes, FieldTypes, Field, FieldData, FieldValidation, InputError, Marker, MarkerSettings, MarkerSettingsDefault, MasterDetailDetails, Notifications, Section, Settings, ResponseEventArgs, WMatTimePickerComponent, WTimeDialogComponent, UserTimeData, CLOCK_TYPE, WClockComponent, WTimeComponent, FieldComponent, BoundableFieldComponent, CheckboxFieldComponent, ChipsFieldComponent, DatetimeFieldComponent, DatetimeHijriFieldComponent, EditorFieldComponent, FileUploadFieldComponent, ImageCropperFieldComponent, InfoFieldComponent, InputFieldComponent, LocationFieldComponent, MaskFieldComponent, MasterDetailFieldComponent, MultiSelectFieldComponent, RadiobuttonFieldComponent, RatingFieldComponent, SelectFieldComponent, TimeFieldComponent, RecaptchaFieldComponent, DefaultMasterDetailFormComponent, NextPreviousSectionComponent, TabsSectionComponent, ValidationSummaryComponent, ProgressIndicatorComponent, DynamicFormComponent, NetwaysLibModule, HttpLoaderFactory, Field as ɵg, BridgeService as ɵa, IslamicI18n as ɵf, HttpRequestsService as ɵb, LanguageService as ɵe, LocalStorageService as ɵd, UtilitiesService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d2F5cy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25ldHdheXMtbGliL2xpYi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL2RhdGVwaWNrZXItY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL2V4cG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2FsbC1maWVsZHMudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvY29uZmlndXJhdGlvbi50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9kZWZhdWx0LWxvY2F0aW9uLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2VuZHBvaW50cy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9lbnVtcy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9maWVsZC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9maWVsZC1kYXRhLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2ZpZWxkLXZhbGlkYXRpb24udHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvaW5wdXQtZXJyb3IudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFwLW1hcmtlci50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9tYXJrZXItc2V0dGluZ3MudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFya2V0LXNldHRpbmdzLWRlZmF1bHQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFzdGVyLWRldGFpbC1kZXRhaWxzLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL25vdGlmaWNhdGlvbnMudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvc2VjdGlvbi50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9zZXR0aW5ncy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9yZXNwb25zZS1ldmVudC1hcmdzLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS1kaWFsb2cvdy10aW1lLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LW1hdC10aW1lcGlja2VyL3ctbWF0LXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lL3ctdGltZS5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9maWVsZC9maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoZWNrYm94LWZpZWxkL2NoZWNrYm94LWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoaXBzLWZpZWxkL2NoaXBzLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWZpZWxkL2RhdGV0aW1lLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2VkaXRvci1maWVsZC9lZGl0b3ItZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW1hZ2UtY3JvcHBlci1maWVsZC9pbWFnZS1jcm9wcGVyLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2luZm8tZmllbGQvaW5mby1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9sb2NhdGlvbi1maWVsZC9sb2NhdGlvbi1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tdWx0aS1zZWxlY3QtZmllbGQvbXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yZWNhcHRjaGEtZmllbGQvcmVjYXB0Y2hhLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhdGluZy1maWVsZC9yYXRpbmctZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXN0ZXItZGV0YWlsLWZpZWxkL21hc3Rlci1kZXRhaWwtZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL25leHQtcHJldmlvdXMtc2VjdGlvbi9uZXh0LXByZXZpb3VzLXNlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3Byb2dyZXNzLWluZGljYXRvci9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbmV0d2F5cy1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE5ldHdheXNMaWJNb2R1bGUgfSBmcm9tICcuLi9uZXR3YXlzLWxpYi5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEJyaWRnZVNlcnZpY2Uge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNvbmZpZ3VyYXRpb24uKi9cclxuICBwdWJsaWMgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcGFyZW50IGNvbXBvbmVudCBob3N0aW5nIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwdWJsaWMgcGFyZW50Q29tcG9uZW50OiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy4qL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsUGFyYW1ldGVyczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCwgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBJMThOX1ZBTFVFUyA9IHtcclxuICB3ZWVrZGF5czogWyfDmMKlw5jCqycsICfDmMKrw5nChCcsICfDmMKjw5jCsScsICfDmMKuw5nChScsICfDmMKsw5nChScsICfDmMKzw5jCqCcsICfDmMKjw5jCrSddLFxyXG4gIG1vbnRoczogWyfDmcKFw5jCrcOYwrHDmcKFJywgJ8OYwrXDmcKBw5jCsScsICfDmMKxw5jCqMOZworDmMK5IMOYwqfDmcKEw5jCo8OZwojDmcKEJywgJ8OYwrHDmMKow5nCisOYwrkgw5jCp8OZwoTDmMKiw5jCrsOYwrEnLCAnw5jCrMOZwoXDmMKnw5jCr8OZwokgw5jCp8OZwoTDmMKjw5nCiMOZwoTDmcKJJywgJ8OYwqzDmcKFw5jCp8OYwq/DmcKJIMOYwqfDmcKEw5jCosOYwq7DmMKxw5jCqScsICfDmMKxw5jCrMOYwqgnLCAnw5jCtMOYwrnDmMKow5jCp8OZwoYnLCAnw5jCscOZwoXDmMK2w5jCp8OZwoYnLCAnw5jCtMOZwojDmMKnw5nChCcsXHJcbiAgICAnw5jCsMOZwoggw5jCp8OZwoTDmcKCw5jCucOYwq/DmMKpJywgJ8OYwrDDmcKIIMOYwqfDmcKEw5jCrcOYwqzDmMKpJ11cclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBJc2xhbWljSTE4biBleHRlbmRzIE5nYkRhdGVwaWNrZXJJMThuIHtcclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHdlZWtkYXkgc2hvcnQgbmFtZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIHdlZWtkYXkgVGhlIHdlZWtkYXkuXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIHdlZWtkYXkgc2hvcnQgbmFtZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRXZWVrZGF5U2hvcnROYW1lKHdlZWtkYXk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSTE4Tl9WQUxVRVMud2Vla2RheXNbd2Vla2RheSAtIDFdO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSB3ZWVrZGF5IHNob3J0IG5hbWUuXHJcbiAgICogQHBhcmFtIG51bWJlciBtb250aCBUaGUgbW9udGguXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIG1vbnRoIHNob3J0IG5hbWUuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSTE4Tl9WQUxVRVMubW9udGhzW21vbnRoIC0gMV07XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIG1vbnRoIGZ1bGwgbmFtZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIG1vbnRoIFRoZSBtb250aC5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgbW9udGggZnVsbCBuYW1lLlxyXG4gICovXHJcbiAgcHVibGljIGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNb250aFNob3J0TmFtZShtb250aCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGRheSBhcmlhIGxhYmVsLlxyXG4gICAqIEBwYXJhbSBOZ2JEYXRlU3RydWN0IGRhdGUgVGhlIGRhdGUuXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIGRheSBhcmlhIGxhYmVsLlxyXG4gICovXHJcbiAgcHVibGljIGdldERheUFyaWFMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmRheX0tJHtkYXRlLm1vbnRofS0ke2RhdGUueWVhcn1gO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcclxuXHJcbmNvbnN0IGV4Y2VsRXh0ZW5zaW9uID0gJy54bHN4JztcclxuY29uc3QgcGRmVHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xyXG5jb25zdCBwZGZFeHRlbnNpb24gPSAnLnBkZic7XHJcblxyXG5kZWNsYXJlIGxldCBodG1sMmNhbnZhcywgcGRmTWFrZTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBFeHBvcnRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgYSBqc29uIG9iamVjdCBhcyBhbiBleGNlbCBmaWxlLlxyXG4gICAqIEBwYXJhbSBhbnkganNvbiBUaGUganNvbiBvYmplY3QuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlTmFtZSBUaGUgZXhjZWwgZmlsZSBuYW1lLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIHJ0bCBXaGV0aGVyIHJpZ2h0IHRvIGxlZnQgb3IgbGVmdCB0byByaWdodC5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBza2lwSGVhZGVyIFdoZXRoZXIgdG8gc2tpcCB0aGUgaGVhZGVyLlxyXG4gICovXHJcbiAgcHVibGljIGV4cG9ydEFzRXhjZWwoanNvbjogYW55W10sIGZpbGVOYW1lOiBzdHJpbmcsIHJ0bDogYm9vbGVhbiA9IHRydWUsIHNraXBIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgLy8gZ2VuZXJhdGUgd29ya3NoZWV0XHJcbiAgICBjb25zdCB3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGpzb24sIHsgc2tpcEhlYWRlcjogc2tpcEhlYWRlciB9KTtcclxuXHJcbiAgICBjb25zdCB3b3JrYm9vazogWExTWC5Xb3JrQm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcclxuXHJcbiAgICBpZiAoIXdvcmtib29rLldvcmtib29rKSB7XHJcbiAgICAgIHdvcmtib29rLldvcmtib29rID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3b3JrYm9vay5Xb3JrYm9vay5WaWV3cykge1xyXG4gICAgICB3b3JrYm9vay5Xb3JrYm9vay5WaWV3cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd29ya2Jvb2suV29ya2Jvb2suVmlld3NbMF0pIHtcclxuICAgICAgd29ya2Jvb2suV29ya2Jvb2suVmlld3NbMF0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JrYm9vay5Xb3JrYm9vay5WaWV3c1swXS5SVEwgPSBydGw7XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgd29ya2Jvb2sgYW5kIGFkZCB0aGUgd29ya3NoZWV0XHJcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdvcmtib29rLCB3b3Jrc2hlZXQsICdkYXRhJyk7XHJcblxyXG4gICAgLy8gc2F2ZSB0byBmaWxlICpcclxuICAgIFhMU1gud3JpdGVGaWxlKHdvcmtib29rLCBmaWxlTmFtZSArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZXhjZWxFeHRlbnNpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIGFuIGh0bWwgc3RyaW5nIGFzIHBkZi5cclxuICAgICogQHBhcmFtIHN0cmluZyBodG1sIFRoZSBodG1sIHRvIHByaW50LlxyXG4gICAgKiBAcGFyYW0gQXJyYXk8bnVtYmVyPiBtYXJnaW5zIFRoZSBwZGYgcGFnZSBtYXJnaW5zLlxyXG4gICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVOYW1lIFRoZSBwZGYgZmlsZSBuYW1lLlxyXG4gICAgKiBAcGFyYW0gYW55IHNpemUgVGhlIHBkZiBzaXplLlxyXG4gICovXHJcbiAgcHVibGljIGV4cG9ydEFzUGRmKGh0bWw6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgc2l6ZTogYW55ID0gJ0E0JywgbWFyZ2luczogQXJyYXk8bnVtYmVyPiA9IFswLCAwXSkge1xyXG4gICAgaWYgKGh0bWwpIHtcclxuICAgICAgaHRtbDJjYW52YXMoaHRtbCkudGhlbihjYW52YXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFVcmkgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvY0RlZmluaXRpb24gPSB7XHJcbiAgICAgICAgICBwYWdlU2l6ZTogc2l6ZSxcclxuICAgICAgICAgIHBhZ2VNYXJnaW5zOiBtYXJnaW5zLFxyXG4gICAgICAgICAgY29udGVudDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1hZ2U6IGRhdGFVcmlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLmdldEJsb2IoKGZpbGUpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvbXB0RmlsZVNhdmUoZmlsZSwgcGRmVHlwZSwgZmlsZU5hbWUsIHBkZkV4dGVuc2lvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIGEgZmlsZSBhcyBwZGYuXHJcbiAgICogQHBhcmFtIGFueSBidWZmZXIgVGhlIGZpbGUgYnVmZmVyLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZVR5cGUgVGhlIGZpbGUgbWltZSB0eXBlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZU5hbWUgVGhlIGZpbGUgbmFtZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVFeHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uLlxyXG4gICovXHJcbiAgcHVibGljIHByb21wdEZpbGVTYXZlKGJ1ZmZlcjogYW55LCBmaWxlVHlwZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBmaWxlRXh0ZW5zaW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGE6IEJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwge1xyXG4gICAgICB0eXBlOiBmaWxlVHlwZVxyXG4gICAgfSk7XHJcblxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhkYXRhLCBmaWxlTmFtZSArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZmlsZUV4dGVuc2lvbik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBnZXQgcmVxdWVzdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBlbmRwb2ludFVybCBUaGUgZW5kcG9pbnQgVXJsLlxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxhbnk+IFRoZSByZXNwb25zZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXQoZW5kcG9pbnRVcmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PGFueT4oZW5kcG9pbnRVcmwsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgcG9zdCByZXF1ZXN0IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50VXJsIFRoZSBlbmRwb2ludCBVcmwuXHJcbiAgICogQHBhcmFtIGFueSByZXF1ZXN0IFRoZSByZXF1ZXN0IHBheWxvYWQuXHJcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGFueT4gVGhlIHJlc3BvbnNlLlxyXG4gICovXHJcbiAgcHVibGljIHBvc3QoZW5kcG9pbnRVcmw6IHN0cmluZywgcmVxdWVzdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4oZW5kcG9pbnRVcmwsIHJlcXVlc3QsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgcHV0IHJlcXVlc3QgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnRVcmwgVGhlIGVuZHBvaW50IFVybC5cclxuICAgKiBAcGFyYW0gYW55IHJlcXVlc3QgVGhlIHJlcXVlc3QgcGF5bG9hZC5cclxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8YW55PiBUaGUgcmVzcG9uc2UuXHJcbiAgKi9cclxuICBwdWJsaWMgcHV0KGVuZHBvaW50VXJsOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0PGFueT4oZW5kcG9pbnRVcmwsIHJlcXVlc3QsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyBhIHJlY29yZCBleGlzdHMgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgcmVjb3JkIGV4aXN0cy5cclxuICAqL1xyXG4gIHB1YmxpYyBkb2VzS2V5RXhpc3Qoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNhdmVzIGEgcmVjb3JkIGluIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuXHJcbiAgICogQHBhcmFtIGFueSBkYXRhIFRoZSByZWNvcmQgZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBzYXZlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBMb2FkcyBhIHJlY29yZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuXHJcbiAgICogQHJldHVybiBhbnkgZGF0YSBUaGUgcmVjb3JkIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgbG9hZChrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSByZWNvcmQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHMuXHJcbiAgICogQWx0ZXJuYXRpdmVseSByZXR1cm5zIGEgZGVmYXVsdCB2YWx1ZSBpZiBub3QgZm91bmQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcGFyYW0gYW55IGRlZmF1bHRWYWx1ZSBUaGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIGFueSBkYXRhIFRoZSByZWNvcmQgZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBsb2FkT3JEZWZhdWx0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmxvYWQoa2V5KTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzYXZlZCBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBzYXZlZExhbmd1YWdlID0gdGhpcy5sb2NhbFN0b3JhZ2UubG9hZE9yRGVmYXVsdCgnTGFuZ3VhZ2UnLCAnZW4nKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdHJhbnNsYXRpb25zLiovXHJcbiAgcHVibGljIHRyYW5zbGF0aW9uczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UoZXZlbnQubGFuZyk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IGV2ZW50LnRyYW5zbGF0aW9ucztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsYW5ndWFnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGxhbmd1YWdlIFRoZSBsYW5ndWFnZS5cclxuICAqL1xyXG4gIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2UobGFuZ3VhZ2UpO1xyXG5cclxuICAgIHRoaXMuc2F2ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG5cclxuICAgIHRoaXMubG9jYWxTdG9yYWdlLnNhdmUoJ0xhbmd1YWdlJywgbGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBnZXRMYW5ndWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZS5sb2FkT3JEZWZhdWx0KCdMYW5ndWFnZScsICdlbicpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICcuL2h0dHAtcmVxdWVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuL2JyaWRnZS5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgbGV0IGZpZWxkRXZhbEZ1bmN0aW9ucztcclxuXHJcbmNvbnN0IGZ1bmN0aW9uVG9rZW46IHN0cmluZyA9ICdGdW5jdGlvbjonO1xyXG5cclxuLy8gcmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXHJcbmNvbnN0IHNwYWNlUmVnZXggPSAvXFwrL2c7XHJcblxyXG4vLyByZWdleCB0byBtYXRjaCBxdWVyeSBzdHJpbmdzXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nUmVnZXggPSAvKFteJj1dKyk9PyhbXiZdKikvZztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXRpZXNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cFJlcXVlc3RzU2VydmljZTogSHR0cFJlcXVlc3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV2YWx1YXRlcyBhIGZ1bnRpb24gZnJvbSBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAqIEFsdGVybmF0aXZlbHkgcmV0dXJucyBhIGRlZmF1bHQgdmFsdWUgaWYgbm90IGZvdW5kLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZnVuY3Rpb25TdHJpbmcgVGhlIGZ1bmN0aW9uIHN0cmluZy5cclxuICAgKiBAcGFyYW0gYW55IGRlZmF1bHRWYWx1ZSBUaGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIGFueSBUaGUgZnVudGlvbiBldmFsdWF0aW9uIHJlc3VsdC5cclxuICAqL1xyXG4gIHB1YmxpYyBldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZ1bmN0aW9uU3RyaW5nOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmIChmdW5jdGlvblN0cmluZy5pbmRleE9mKGZ1bmN0aW9uVG9rZW4pID49IDApIHtcclxuICAgICAgZnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvblN0cmluZy5yZXBsYWNlKGZ1bmN0aW9uVG9rZW4sICcnKTtcclxuXHJcbiAgICAgIGxldCBqc0Z1bmN0aW9uTmFtZSwganNGdW5jdGlvblBhcmFtZXRlcnMgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGZ1bmN0aW9uU3RyaW5nLmluZGV4T2YoJywnKSA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZnVuY3Rpb25Ub2tlbnMgPSBmdW5jdGlvblN0cmluZy5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICBqc0Z1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uVG9rZW5zWzBdO1xyXG5cclxuICAgICAgICBmdW5jdGlvblRva2Vucy5zaGlmdCgpO1xyXG5cclxuICAgICAgICBqc0Z1bmN0aW9uUGFyYW1ldGVycyA9IGZ1bmN0aW9uVG9rZW5zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGpzRnVuY3Rpb25OYW1lID0gZnVuY3Rpb25TdHJpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzRnVuY3Rpb24gPSBmaWVsZEV2YWxGdW5jdGlvbnNbanNGdW5jdGlvbk5hbWVdO1xyXG5cclxuICAgICAgaWYgKGpzRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4ganNGdW5jdGlvbihqc0Z1bmN0aW9uUGFyYW1ldGVycywganNGdW5jdGlvblBhcmFtZXRlcnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEF0dGVtcHRzIHRvIGxvYWQgYSBmaWxlIGZyb20gbG9jYWwgc3RvcmFnZS5cclxuICAgKiBJZiBub3QgZm91bmQgaXQgZ2V0cyBpdCBhcyBhIHdlYiByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuIEl0IGlzIGJvdGggdGhlIHN0b3JhZ2Uga2V5IG9yIHRoZSB3ZWIgdXJsLlxyXG4gICAqIEByZXR1cm4gYW55IFRoZSBsb2FkZWQgZmlsZS5cclxuICAqL1xyXG4gIHB1YmxpYyBhc3luYyBsb2FkRmlsZShrZXkpIHtcclxuICAgIGxldCBmaWxlID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmRvZXNLZXlFeGlzdChrZXkpKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UubG9hZChrZXkpO1xyXG5cclxuICAgICAgZmlsZS5pc0xvY2FsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGtleSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJlY3Vyc2l2ZWx5IG1lcmdlIHByb3BlcnRpZXMgb2YgdHdvIG9iamVjdHMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gICAqIEBwYXJhbSBhbnkgb2JqZWN0MSBUaGUgbGVmdCBvYmplY3QuXHJcbiAgICogQHBhcmFtIGFueSBvYmplY3QyIFRoZSByaWdodCBvYmplY3QuXHJcbiAgICogQHJldHVybiBhbnkgVGhlIG1lcmdlZCBvYmplY3QuXHJcbiAgKi9cclxuICBwdWJsaWMgbWVyZ2VSZWN1cnNpdmUob2JqZWN0MTogYW55LCBvYmplY3QyOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIGluIG9iamVjdDIpIHtcclxuICAgICAgaWYgKG9iamVjdDIuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gcHJvcGVydHkgaW4gZGVzdGluYXRpb24gb2JqZWN0IHNldDsgdXBkYXRlIGl0cyB2YWx1ZS5cclxuICAgICAgICAgIGlmIChvYmplY3QyW2l0ZW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgb2JqZWN0MVtpdGVtXSA9IHRoaXMubWVyZ2VSZWN1cnNpdmUob2JqZWN0MVtpdGVtXSwgb2JqZWN0MltpdGVtXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gb2JqZWN0MltpdGVtXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAvLyBwcm9wZXJ0eSBpbiBkZXN0aW5hdGlvbiBvYmplY3Qgbm90IHNldDsgY3JlYXRlIGl0IGFuZCBzZXQgaXRzIHZhbHVlLlxyXG4gICAgICAgICAgb2JqZWN0MVtpdGVtXSA9IG9iamVjdDJbaXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iamVjdDE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN0cmluZyB3aXRoIGl0cyB0b2tlbnMgcmVwbGFjZWQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAqIEBwYXJhbSBhbnkgcm91dGUgVGhlIHJvdXRlLlxyXG4gICAqIEBwYXJhbSBhbnkgYWRkaXRpb25hbFBhcmFtZXRlcnMgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAqL1xyXG4gIHB1YmxpYyByZXBsYWNlVG9rZW5zKGlucHV0OiBzdHJpbmcsIHJvdXRlOiBhbnksIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCd7bGFuZ3VhZ2VUb2tlbn0nLCB0aGlzLmxhbmd1YWdlU2VydmljZS5zYXZlZExhbmd1YWdlKTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUucGFyYW1zKSB7XHJcbiAgICAgIGlucHV0ID0gdGhpcy5yZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQsIHJvdXRlLnBhcmFtcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgdGhpcy5nZXRRdWVyeVN0cmluZ1BhcmFtZXRlcnMoKSk7XHJcblxyXG4gICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuYmFzZUVuZFBvaW50VXJscyk7XHJcblxyXG4gICAgaWYgKGFkZGl0aW9uYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGlucHV0ID0gdGhpcy5yZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHN0cmluZyB3aXRoIGl0cyB0b2tlbnMgcmVwbGFjZWQuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmcgaW5wdXQgVGhlIHN0cmluZyBpbnB1dC5cclxuICAgICogQHBhcmFtIGFueSBwYXJhbWV0ZXJzIFRoZSBwYXJhbWV0ZXJzLlxyXG4gICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IHBhcmFtZXRlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCd7JyArIGtleSArICd9JywgcGFyYW1WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzLlxyXG4gICAgKiBAcmV0dXJuIG9iamVjdCBUaGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIGdldFF1ZXJ5U3RyaW5nUGFyYW1ldGVycygpOiBvYmplY3Qge1xyXG4gICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcblxyXG4gICAgbGV0IG1hdGNoO1xyXG5cclxuICAgIHdoaWxlIChtYXRjaCA9IHF1ZXJ5U3RyaW5nUmVnZXguZXhlYyhxdWVyeSkpIHtcclxuICAgICAgdXJsUGFyYW1ldGVyc1t0aGlzLmRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsxXSldID0gdGhpcy5kZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBEZWNvZGVzIGEgVVJJIENvbXBvbmVudC5cclxuICAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgZGVjb2RlZCBVUkkgQ29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0LnJlcGxhY2Uoc3BhY2VSZWdleCwgJyAnKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxsRmllbGRzIHtcclxuICBpc0xvY2FsOiBib29sZWFuO1xyXG5cclxuICBmaWVsZHM6IEFycmF5PEZpZWxkPjtcclxufVxyXG4iLCJpbXBvcnQgeyBTZXR0aW5ncywgRW5kcG9pbnRzLCBOb3RpZmljYXRpb25zLCBTZWN0aW9uLCBGaWVsZCwgSW5wdXRFcnJvciB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcbiAgZW5kcG9pbnRzOiBFbmRwb2ludHM7XHJcblxyXG4gIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnM7XHJcblxyXG4gIHNlY3Rpb25zOiBBcnJheTxTZWN0aW9uPjtcclxuXHJcbiAgY3VycmVudFNlY3Rpb246IFNlY3Rpb247XHJcblxyXG4gIGZpZWxkczogYW55O1xyXG5cclxuICBtZXJnZWRGaWVsZHM6IEFycmF5PEZpZWxkPjtcclxuXHJcbiAgdmFsaWRhdGlvbkVycm9yczogQXJyYXk8SW5wdXRFcnJvcj47XHJcblxyXG4gIGlzTG9jYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgYnV0dG9uczogYW55O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBEZWZhdWx0TG9jYXRpb24ge1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcblxyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBFbmRwb2ludHMge1xyXG4gIGdldDogc3RyaW5nO1xyXG5cclxuICBzYXZlOiBzdHJpbmc7XHJcblxyXG4gIHN1Ym1pdDogc3RyaW5nO1xyXG5cclxuICBsb29rdXBzOiBvYmplY3Q7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3dlZXRBbGVydFR5cGUgfSBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybU1vZGVzIHtcclxuICBwdWJsaWMgc3RhdGljIE5ldyA9ICdOZXcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGlzcGxheSA9ICdEaXNwbGF5JztcclxuICBwdWJsaWMgc3RhdGljIEVkaXQgPSAnRWRpdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU3VtbWFyeU1vZGVzIHtcclxuICBwdWJsaWMgc3RhdGljIE5vbmUgPSAnTm9uZSc7XHJcbiAgcHVibGljIHN0YXRpYyBBbGVydCA9ICdBbGVydCc7XHJcbiAgcHVibGljIHN0YXRpYyBMaXN0ID0gJ0xpc3QnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbk1vZGVzIHtcclxuICBwdWJsaWMgc3RhdGljIE5vbmUgPSAnTm9uZSc7XHJcbiAgcHVibGljIHN0YXRpYyBUYWJzID0gJ1RhYnMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTmV4dFByZXZpb3VzID0gJ05leHRQcmV2aW91cyc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0TW9kZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgRm9ybURhdGEgPSAnRm9ybURhdGEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRm9ybUJvZHkgPSAnRm9ybUJvZHknO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3dhbFR5cGVzIHtcclxuICBwdWJsaWMgc3RhdGljIFdhcm5pbmc6IFN3ZWV0QWxlcnRUeXBlID0gJ3dhcm5pbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRXJyb3I6IFN3ZWV0QWxlcnRUeXBlID0gJ2Vycm9yJztcclxuICBwdWJsaWMgc3RhdGljIFN1Y2Nlc3M6IFN3ZWV0QWxlcnRUeXBlID0gJ3N1Y2Nlc3MnO1xyXG4gIHB1YmxpYyBzdGF0aWMgSW5mbzogU3dlZXRBbGVydFR5cGUgPSAnaW5mbyc7XHJcbiAgcHVibGljIHN0YXRpYyBRdWVzdGlvbjogU3dlZXRBbGVydFR5cGUgPSAncXVlc3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRUeXBlcyB7XHJcbiAgcHVibGljIHN0YXRpYyBJbmZvID0gJ2luZm8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgVGV4dCA9ICd0ZXh0JztcclxuICBwdWJsaWMgc3RhdGljIERhdGVUaW1lID0gJ2RhdGV0aW1lJztcclxuICBwdWJsaWMgc3RhdGljIERhdGVUaW1lSGlqcmkgPSAnZGF0ZXRpbWVoaWpyaSc7XHJcbiAgcHVibGljIHN0YXRpYyBSYWRpb0J1dHRvbiA9ICdyYWRpb2J1dHRvbic7XHJcbiAgcHVibGljIHN0YXRpYyBTZWxlY3QgPSAnc2VsZWN0JztcclxuICBwdWJsaWMgc3RhdGljIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJztcclxuICBwdWJsaWMgc3RhdGljIE51bWJlciA9ICdudW1iZXInO1xyXG4gIHB1YmxpYyBzdGF0aWMgTXVsdGlTZWxlY3QgPSAnbXVsdGlzZWxlY3QnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ2hlY2tib3ggPSAnY2hlY2tib3gnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRmlsZVVwbG9hZCA9ICdmaWxldXBsb2FkJztcclxuICBwdWJsaWMgc3RhdGljIENoaXBzID0gJ2NoaXBzJztcclxuICBwdWJsaWMgc3RhdGljIEVkaXRvciA9ICdlZGl0b3InO1xyXG4gIHB1YmxpYyBzdGF0aWMgUmVjYXB0Y2hhID0gJ3JlY2FwdGNoYSc7XHJcbiAgcHVibGljIHN0YXRpYyBUaW1lID0gJ3RpbWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTG9jYXRpb24gPSAnbG9jYXRpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgSW1hZ2VDcm9wcGVyID0gJ2ltYWdlY3JvcHBlcic7XHJcbiAgcHVibGljIHN0YXRpYyBSYXRpbmcgPSAncmF0aW5nJztcclxuICBwdWJsaWMgc3RhdGljIE1hc3RlckRldGFpbCA9ICdtYXN0ZXJkZXRhaWwnO1xyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkRGF0YSwgRmllbGRWYWxpZGF0aW9uLCBJbnB1dEVycm9yLCBEZWZhdWx0TG9jYXRpb24sIE1hcmtlclNldHRpbmdzLCBNYXN0ZXJEZXRhaWxEZXRhaWxzIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IENyb3BwZXJTZXR0aW5ncyB9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGQge1xyXG4gIGZpZWxkVHlwZTogc3RyaW5nO1xyXG5cclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHNlY3Rpb25JZDogbnVtYmVyO1xyXG5cclxuICBoaWRkZW46IGJvb2xlYW47XHJcblxyXG4gIGRhdGE6IEZpZWxkRGF0YTtcclxuXHJcbiAgdmFsaWRhdGlvbjogRmllbGRWYWxpZGF0aW9uO1xyXG5cclxuICB2YWxpZGF0aW9uRXJyb3JzOiBBcnJheTxJbnB1dEVycm9yPjtcclxuXHJcbiAgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgdG9vbHRpcDogc3RyaW5nO1xyXG5cclxuICBldmVudFRyaWdnZXJzOiBhbnk7XHJcblxyXG4gIGNzc0NsYXNzZXM6IGFueTtcclxuXHJcbiAgcmVhZG9ubHk6IGJvb2xlYW47XHJcblxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICBhdXRvQ29tcGxldGU6IHN0cmluZztcclxuXHJcbiAgLy8gZGF0ZXRpbWUgLSBoaWpyaSAtIHRpbWVcclxuICBtaW5EYXRlOiBzdHJpbmc7XHJcblxyXG4gIG1heERhdGU6IHN0cmluZztcclxuXHJcbiAgZGVmYXVsdERhdGU6IHN0cmluZztcclxuXHJcbiAgbWluRGF0ZVZhbHVlOiBEYXRlO1xyXG5cclxuICBtYXhEYXRlVmFsdWU6IERhdGU7XHJcblxyXG4gIGRlZmF1bHREYXRlVmFsdWU6IERhdGU7XHJcblxyXG4gIHllYXJSYW5nZTogc3RyaW5nO1xyXG5cclxuICBzZXRUaW1lOiBzdHJpbmc7XHJcblxyXG4gIHNob3dJY29uOiBib29sZWFuO1xyXG5cclxuICBkYXRlRm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoTmF2aWdhdG9yOiBib29sZWFuO1xyXG5cclxuICB5ZWFyTmF2aWdhdG9yOiBib29sZWFuO1xyXG5cclxuICBob3VyRm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gIHNob3dUaW1lOiBib29sZWFuO1xyXG5cclxuICBkaXNwbGF5RGF0ZUZvcm1hdDogc3RyaW5nO1xyXG5cclxuICBmb3JtRGF0YURhdGVGb3JtYXQ6IHN0cmluZztcclxuXHJcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xyXG5cclxuICBvdXRzaWRlRGF5czogc3RyaW5nO1xyXG5cclxuICBzaG93V2Vla2RheXM6IGJvb2xlYW47XHJcblxyXG4gIHNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcclxuXHJcbiAgLy8gbG9jYXRpb25cclxuICBkZWZhdWx0TG9jYXRpb246IERlZmF1bHRMb2NhdGlvbjtcclxuXHJcbiAgbWFya2VyU2V0dGluZ3M6IE1hcmtlclNldHRpbmdzO1xyXG5cclxuICB6b29tOiBudW1iZXI7XHJcblxyXG4gIHpvb21Db250cm9sOiBib29sZWFuO1xyXG5cclxuICAvLyByZWNhcHRjaGFcclxuICBzaXRlS2V5OiBzdHJpbmc7XHJcblxyXG4gIHNpemU6IHN0cmluZztcclxuXHJcbiAgdGhlbWU6IHN0cmluZztcclxuXHJcbiAgLy8gaW5mb1xyXG4gIGh0bWxTbmlwcGV0OiBzdHJpbmc7XHJcblxyXG4gIC8vIGltYWdlY3JvcHBlclxyXG4gIGNyb3BwZXJTZXR0aW5nczogQ3JvcHBlclNldHRpbmdzO1xyXG5cclxuICAvLyByYXRpbmdcclxuICBpY29uQ2FuY2VsQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgaWNvbk9uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgaWNvbk9mZkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGNhbmNlbEljb246IGJvb2xlYW47XHJcblxyXG4gIHN0YXJOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgLy8gcHJpbnRpbmdcclxuICBodG1sMkNhbnZhc0lnbm9yZTogYm9vbGVhbjtcclxuXHJcbiAgLy8gbWFzdGVyZGV0YWlsXHJcbiAgZGV0YWlsczogTWFzdGVyRGV0YWlsRGV0YWlscztcclxuXHJcbiAgLy8gc2VsZWN0XHJcbiAgZW5hYmxlZmlsdGVyOiBib29sZWFuO1xyXG5cclxuICAvLyBjaGlwc1xyXG4gIGFkZE9uVGFiOiBib29sZWFuO1xyXG5cclxuICBhZGRPbkJsdXI6IGJvb2xlYW47XHJcblxyXG4gIC8vIGVkaXRvclxyXG4gIGhlaWdodDogc3RyaW5nO1xyXG5cclxuICBzaG93VG9vbGJhcjogYm9vbGVhbjtcclxuXHJcbiAgLy8gbWFza1xyXG4gIHNsb3RDaGFyOiBzdHJpbmc7XHJcblxyXG4gIGF1dG9DbGVhcjogYm9vbGVhbjtcclxuXHJcbiAgdW5tYXNrOiBib29sZWFuO1xyXG5cclxuICBjaGFyYWN0ZXJQYXR0ZXJuOiBzdHJpbmc7XHJcblxyXG4gIC8vIGZpbGV1cGxvYWRcclxuICBhdXRvOiBib29sZWFuO1xyXG5cclxuICBtb2RlOiBzdHJpbmc7XHJcblxyXG4gIG11bHRpcGxlOiBib29sZWFuO1xyXG5cclxuICBidXR0b25zOiBhbnk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkRGF0YSB7XHJcbiAgdmFsdWU6IGFueTtcclxuXHJcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcclxuXHJcbiAgYWxsT3B0aW9uczogQXJyYXk8YW55PjtcclxuXHJcbiAgb3B0aW9uc0VuZHBvaW50OiBzdHJpbmc7XHJcblxyXG4gIGRhdGVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICB1cmw6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRmllbGRWYWxpZGF0aW9uIHtcclxuICByZXF1aXJlZDogYm9vbGVhbjtcclxuXHJcbiAgbWluOiBudW1iZXI7XHJcblxyXG4gIG1heDogbnVtYmVyO1xyXG5cclxuICBsZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgcGF0dGVybjogc3RyaW5nO1xyXG5cclxuICByZXF1aXJlZFRleHQ6IHN0cmluZztcclxuXHJcbiAgcGF0dGVyblRleHQ6IHN0cmluZztcclxuXHJcbiAgcmFuZ2VUZXh0OiBzdHJpbmc7XHJcblxyXG4gIG1heEZpbGVTaXplSW5CeXRlczogbnVtYmVyO1xyXG5cclxuICBpbnZhbGlkRmlsZVNpemVUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGludmFsaWRGaWxlVHlwZVRleHQ6IHN0cmluZztcclxuXHJcbiAgY2hhcmFjdGVyUGF0dGVybjogc3RyaW5nO1xyXG5cclxuICBtYXNrOiBzdHJpbmc7XHJcblxyXG4gIGFsbG93RHVwbGljYXRlOiBib29sZWFuO1xyXG5cclxuICBhY2NlcHQ6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5wdXRFcnJvciB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG5cclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrZXIge1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcblxyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG5cclxuICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcblxyXG4gIGluZm9IdG1sOiBzdHJpbmc7XHJcblxyXG4gIGV2ZW50VHJpZ2dlcnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGRyYWdnYWJsZTogYm9vbGVhbiwgaW5mb0h0bWw/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGF0aXR1ZGUgPSBsYXRpdHVkZTtcclxuXHJcbiAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZTtcclxuXHJcbiAgICB0aGlzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZTtcclxuXHJcbiAgICB0aGlzLmluZm9IdG1sID0gaW5mb0h0bWw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hcmtlclNldHRpbmdzRGVmYXVsdCB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtlclNldHRpbmdzIHtcclxuICBkZWZhdWx0TmV3TWFya2VyOiBNYXJrZXJTZXR0aW5nc0RlZmF1bHQ7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtlclNldHRpbmdzRGVmYXVsdCB7XHJcbiAgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG5cclxuICBpbmZvSHRtbDogc3RyaW5nO1xyXG5cclxuICBldmVudFRyaWdnZXJzOiBhbnk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hc3RlckRldGFpbERldGFpbHMge1xyXG4gIGNvbmZpZ3VyYXRpb25Tb3VyY2VVcmw6IHN0cmluZztcclxuXHJcbiAgZGlzcGxheUZpZWxkczogQXJyYXk8c3RyaW5nPjtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XHJcbiAgc2hvd1Jlc3VsdE1lc3NhZ2U6IGJvb2xlYW47XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgc2F2ZUVycm9yTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHNhdmVFcnJvck1lc3NhZ2VEZXRhaWxzOiBzdHJpbmc7XHJcblxyXG4gIHNhdmVTdWNjZXNzTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHNhdmVTdWNjZXNzTWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgc3VibWl0RXJyb3JNZXNzYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgc3VibWl0RXJyb3JNZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICBzdWJtaXRTdWNjZXNzTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHN1Ym1pdFN1Y2Nlc3NNZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICBpZDogbnVtYmVyO1xyXG5cclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIGxlZ2VuZDogc3RyaW5nO1xyXG5cclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgaGlkZUJ1dHRvbnM6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbGVnZW5kOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICB0aGlzLmxlZ2VuZCA9IGxlZ2VuZDtcclxuXHJcbiAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTZXR0aW5ncyB7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG5cclxuICB2YWxpZGF0aW9uU3VtbWFyeU1vZGU6IHN0cmluZztcclxuXHJcbiAgc2VjdGlvbk1vZGU6IHN0cmluZztcclxuXHJcbiAgc2VjdGlvbkxvY2F0aW9uOiBzdHJpbmc7XHJcblxyXG4gIGZvcm1Nb2RlOiBzdHJpbmc7XHJcblxyXG4gIHBvc3RNb2RlOiBzdHJpbmc7XHJcblxyXG4gIHNwaW5uZXJTb3VyY2VVcmw6IHN0cmluZztcclxuXHJcbiAgYWxsRmllbGRzU291cmNlOiBzdHJpbmc7XHJcblxyXG4gIGJhc2VFbmRQb2ludFVybHM6IGFueTtcclxuXHJcbiAgc291cmNlRm9ybVNjaGVtYXM6IEFycmF5PHN0cmluZz47XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlc3BvbnNlRXZlbnRBcmdzIHtcclxuICBpc1N1Y2Nlc3M6IGJvb2xlYW47XHJcblxyXG4gIHJlc3BvbnNlOiBhbnk7XHJcblxyXG4gIHBheWxvYWQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoaXNTdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55LCBwYXlsb2FkOiBhbnkpIHtcclxuICAgIHRoaXMuaXNTdWNjZXNzID0gaXNTdWNjZXNzO1xyXG5cclxuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBDdXJyZW50IHR5cGUgdG8gc2hvd1xyXG5leHBvcnQgZW51bSBDTE9DS19UWVBFIHtcclxuICBIT1VSUyA9IDEsXHJcbiAgTUlOVVRFUyA9IDJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGltZUZvcm1hdCA9IDEyIHwgMjQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lIHtcclxuICBob3VyOiBudW1iZXI7XHJcbiAgbWludXRlOiBudW1iZXI7XHJcbiAgbWVyaWRlbjogJ1BNJyB8ICdBTSc7XHJcbiAgZm9ybWF0OiBUaW1lRm9ybWF0O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jbG9jaycsXHJcbiAgc3R5bGVzOiBbYC53LWNsb2NrLXdyYXBwZXJ7aGVpZ2h0OjEwMCU7cGFkZGluZzowIDI0cHh9LnctY2xvY2std3JhcHBlciAudy1jbG9ja3t3aWR0aDoyMDBweDtoZWlnaHQ6MjAwcHg7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoyNHB4O2JhY2tncm91bmQ6I2VkZWRlZH0udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1jZW50ZXJ7aGVpZ2h0OjZweDt3aWR0aDo2cHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czo1MCV9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1wb2ludGVye2JveC1zaGFkb3c6bm9uZTt3aWR0aDoxcHg7aGVpZ2h0OjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBjZW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7ei1pbmRleDowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1zdGVwe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc3RlcCAubWF0LW1pbmktZmFie2JveC1zaGFkb3c6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc2VsZWN0ZWR7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xOXB4O2xlZnQ6LTE5cHg7bWluLXdpZHRoOjA7bWluLWhlaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNoYWRvdzpub25lO2N1cnNvcjpub25lfS53LWNsb2NrLWRlZzB7dG9wOjA7bGVmdDo1MCV9LnctY2xvY2stZGVnMTV7dG9wOjEuNzAzNzA4NjklO2xlZnQ6NjIuOTQwOTUyMjYlfS53LWNsb2NrLWRlZzMwe3RvcDo2LjY5ODcyOTgxJTtsZWZ0Ojc1JX0udy1jbG9jay1kZWc0NXt0b3A6MTQuNjQ0NjYwOTQlO2xlZnQ6ODUuMzU1MzM5MDUlfS53LWNsb2NrLWRlZzYwe3RvcDoyNSU7bGVmdDo5My4zMDEyNzAxOSV9LnctY2xvY2stZGVnNzV7dG9wOjM3LjA1OTA0Nzc0JTtsZWZ0Ojk4LjI5NjI5MTMxJX0udy1jbG9jay1kZWc5MHt0b3A6NTAlO2xlZnQ6MTAwJX0udy1jbG9jay1kZWcxMDV7dG9wOjYyLjk0MDk1MjI2JTtsZWZ0Ojk4LjI5NjI5MTMxJX0udy1jbG9jay1kZWcxMjB7dG9wOjc1JTtsZWZ0OjkzLjMwMTI3MDE5JX0udy1jbG9jay1kZWcxMzV7dG9wOjg1LjM1NTMzOTA2JTtsZWZ0Ojg1LjM1NTMzOTA2JX0udy1jbG9jay1kZWcxNTB7dG9wOjkzLjMwMTI3MDE5JTtsZWZ0Ojc1JX0udy1jbG9jay1kZWcxNjV7dG9wOjk4LjI5NjI5MTMxJTtsZWZ0OjYyLjk0MDk1MjI2JX0udy1jbG9jay1kZWcxODB7dG9wOjEwMCU7bGVmdDo1MCV9LnctY2xvY2stZGVnMTk1e3RvcDo5OC4yOTYyOTEzMSU7bGVmdDozNy4wNTkwNDc3NCV9LnctY2xvY2stZGVnMjEwe3RvcDo5My4zMDEyNzAxOSU7bGVmdDoyNSV9LnctY2xvY2stZGVnMjI1e3RvcDo4NS4zNTUzMzkwNiU7bGVmdDoxNC42NDQ2NjA5NCV9LnctY2xvY2stZGVnMjQwe3RvcDo3NSU7bGVmdDo2LjY5ODcyOTgxJX0udy1jbG9jay1kZWcyNTV7dG9wOjYyLjk0MDk1MjI2JTtsZWZ0OjEuNzAzNzA4Njg2JX0udy1jbG9jay1kZWcyNzB7dG9wOjUwJTtsZWZ0OjB9LnctY2xvY2stZGVnMjg1e3RvcDozNy4wNTkwNDc3NCU7bGVmdDoxLjcwMzcwODY4NiV9LnctY2xvY2stZGVnMzAwe3RvcDoyNSU7bGVmdDo2LjY5ODcyOTgxJX0udy1jbG9jay1kZWczMTV7dG9wOjE0LjY0NDY2MDk0JTtsZWZ0OjE0LjY0NDY2MDk0JX0udy1jbG9jay1kZWczMzB7dG9wOjYuNjk4NzI5ODElO2xlZnQ6MjUlfS53LWNsb2NrLWRlZzM0NXt0b3A6MS43MDM3MDg2ODYlO2xlZnQ6MzcuMDU5MDQ3NzQlfS53LWNsb2NrLWRlZzM2MHt0b3A6MDtsZWZ0OjUwJX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcclxuICAgICBjbGFzcz1cInctY2xvY2std3JhcHBlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LWNsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1jbG9jay1jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDwhLS0gQ2xvY2sgY2VudGVyIC0tPlxyXG4gICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYlxyXG4gICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWNsb2NrLWNlbnRlclwiPjwvYnV0dG9uPlxyXG5cclxuICAgICAgPCEtLSBDbG9jayBoYW5kIC0tPlxyXG4gICAgICA8bWF0LXRvb2xiYXIgW25nU3R5bGVdPVwiZ2V0UG9pbnRlclN0eWxlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1wb2ludGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctY2xvY2stc2VsZWN0ZWRcIj48L2J1dHRvbj5cclxuICAgICAgPC9tYXQtdG9vbGJhcj5cclxuXHJcbiAgICAgIDwhLS0gSG91ciAvIE1pbnV0ZSBudW1iZXIgZmFjZXMgLS0+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJnZXRUaW1lVmFsdWVDbGFzcyhzdGVwLCBpKVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICBbY29sb3JdPVwic2VsZWN0ZWRUaW1lUGFydCA9PT0gc3RlcCA/IGNvbG9yIDogJydcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVRpbWVWYWx1ZShzdGVwKVwiPlxyXG4gICAgICAgICAge3sgc3RlcCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdDbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcHVibGljIHVzZXJUaW1lOiBJVGltZTtcclxuICBAT3V0cHV0KCkgcHVibGljIHVzZXJUaW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY3VycmVudFZpZXc6IENMT0NLX1RZUEU7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyB2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDTE9DS19UWVBFPigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHN0ZXBzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICBwdWJsaWMgc2VsZWN0ZWRUaW1lUGFydDtcclxuICBwdWJsaWMgU1RFUF9ERUc6IG51bWJlcjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldHVwVUkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXR1cFVJKCkge1xyXG4gICAgdGhpcy5zdGVwcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5IT1VSUzpcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnVzZXJUaW1lLmZvcm1hdDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goaSk7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgPSB0aGlzLnVzZXJUaW1lLmhvdXIgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWVQYXJ0ID4gdGhpcy51c2VyVGltZS5mb3JtYXQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lUGFydCAtPSB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5NSU5VVEVTOlxyXG4gICAgICAgIGZvciAobGV0IGkgPSA1OyBpIDw9IDU1OyBpICs9IDUpIHtcclxuXHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RlcHMucHVzaCgwKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgPSB0aGlzLnVzZXJUaW1lLm1pbnV0ZSB8fCAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnRlclN0eWxlKCkge1xyXG4gICAgbGV0IGRpdmlkZXIgPSAxO1xyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5IT1VSUzpcclxuICAgICAgICBkaXZpZGVyID0gdGhpcy51c2VyVGltZS5mb3JtYXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5NSU5VVEVTOlxyXG4gICAgICAgIGRpdmlkZXIgPSA2MDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVncmVlcyA9IDA7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICBkZWdyZWVzID0gTWF0aC5yb3VuZCh0aGlzLnVzZXJUaW1lLmhvdXIgKiAoMzYwIC8gZGl2aWRlcikpIC0gMTgwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVncmVlcyA9IE1hdGgucm91bmQodGhpcy51c2VyVGltZS5taW51dGUgKiAoMzYwIC8gZGl2aWRlcikpIC0gMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknLFxyXG4gICAgICAnLW1zLXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZXMgKyAnZGVnKScsXHJcbiAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUaW1lVmFsdWVDbGFzcyhzdGVwOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBDTE9DS19UWVBFLkhPVVJTKSB7XHJcbiAgICAgIHRoaXMuU1RFUF9ERUcgPSAzNjAgLyB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuU1RFUF9ERUcgPSAzNjAgLyAxMjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xhc3NlcyA9ICd3LWNsb2NrLXN0ZXAgdy1jbG9jay1kZWcnICsgKHRoaXMuU1RFUF9ERUcgKiAoaW5kZXggKyAxKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUaW1lUGFydCA9PT0gc3RlcCkge1xyXG5cclxuICAgICAgY2xhc3NlcyArPSAnIG1hdC1wcmltYXJ5JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VUaW1lVmFsdWUoc3RlcDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICB0aGlzLnVzZXJUaW1lLmhvdXIgPSBzdGVwO1xyXG5cclxuICAgICAgLy8gYXV0byBzd2l0Y2ggdG8gbWludXRlc1xyXG4gICAgICB0aGlzLnZpZXdDaGFuZ2UuZW1pdChDTE9DS19UWVBFLk1JTlVURVMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51c2VyVGltZS5taW51dGUgPSBzdGVwO1xyXG5cclxuICAgICAgLy8gYXV0byBzd2l0Y2ggdG8gaG91cnNcclxuICAgICAgdGhpcy52aWV3Q2hhbmdlLmVtaXQoQ0xPQ0tfVFlQRS5IT1VSUyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51c2VyVGltZUNoYW5nZS5lbWl0KHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQ0xPQ0tfVFlQRSwgSVRpbWUgfSBmcm9tICcuLi93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHN0eWxlczogW2Audy10aW1lcGlja2VyLWRpYWxvZ3twYWRkaW5nOjA7bWFyZ2luOi0yNHB4O3dpZHRoOmNhbGMoMTAwJSArIDQ4cHgpfWBdLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJ3LXRpbWVwaWNrZXItZGlhbG9nXCI+XHJcbiAgPG50dy10aW1lIFtjb2xvcl09XCJjb2xvclwiIFt1c2VyVGltZV09XCJ1c2VyVGltZVwiIChyZXZlcnRlZCk9XCJyZXZlcnQoKVwiIChzdWJtaXR0ZWQpPVwic3VibWl0KClcIj48L250dy10aW1lPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV1RpbWVEaWFsb2dDb21wb25lbnQge1xyXG4gIHB1YmxpYyB1c2VyVGltZTogSVRpbWU7XHJcbiAgcHJpdmF0ZSBWSUVXX0hPVVJTID0gQ0xPQ0tfVFlQRS5IT1VSUztcclxuICBwcml2YXRlIFZJRVdfTUlOVVRFUyA9IENMT0NLX1RZUEUuTUlOVVRFUztcclxuICBwcml2YXRlIGN1cnJlbnRWaWV3OiBDTE9DS19UWVBFID0gdGhpcy5WSUVXX0hPVVJTO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IFVzZXJUaW1lRGF0YSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8V1RpbWVEaWFsb2dDb21wb25lbnQ+KSB7XHJcbiAgICB0aGlzLnVzZXJUaW1lID0gZGF0YS50aW1lO1xyXG4gICAgdGhpcy5jb2xvciA9IGRhdGEuY29sb3I7XHJcbiAgfVxyXG5cclxuICByZXZlcnQoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgtMSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyVGltZURhdGEge1xyXG4gIHRpbWU6IElUaW1lO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IElUaW1lIH0gZnJvbSAnLi4vdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdUaW1lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vdy10aW1lLWRpYWxvZy93LXRpbWUtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LW1hdC10aW1lcGlja2VyJyxcclxuICBzdHlsZXM6IFtgLnRpbWUtcGlja2VyLWJ1dHRvbntwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjQ0cHh9Omhvc3QgOjpuZy1kZWVwIC51aS1kcm9wZG93biw6aG9zdCA6Om5nLWRlZXAgaW5wdXQudWktaW5wdXR0ZXh0LnVpLXdpZGdldC51aS1zdGF0ZS1kZWZhdWx0LDpob3N0IDo6bmctZGVlcCBwLWRyb3Bkb3duLGlucHV0LmZvcm0taW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7aGVpZ2h0OjM1cHh9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGZ4RmxleFxyXG4gICAgIGZ4TGF5b3V0PVwicm93XCJcclxuICAgICBjbGFzcz1cInctbWF0LXRpbWVwaWNrZXJcIj5cclxuXHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cInNob3dQaWNrZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICBjbGFzcz1cInRpbWUtcGlja2VyLWJ1dHRvblwiPlxyXG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8aW5wdXQgbWF0SW5wdXRcclxuICAgICAgICAgW2lkXT1cImlucHV0SWRcIlxyXG4gICAgICAgICBbbmFtZV09XCJpbnB1dE5hbWVcIlxyXG4gICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgIFt0aXRsZV09XCJ0b29sdGlwXCJcclxuICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVmFsdWVcIlxyXG4gICAgICAgICBbdmFsdWVdPVwidGltZVwiPlxyXG48L2Rpdj5cclxuYCxcclxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGVQaXBlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB1c2VyVGltZTogSVRpbWU7XHJcblxyXG4gIEBPdXRwdXQoKSB1c2VyVGltZUNoYW5nZTogRXZlbnRFbWl0dGVyPElUaW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBpbnB1dE5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudXNlclRpbWUpIHtcclxuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCB0aW1lOiBhbnkgPSB7fTtcclxuICAgICAgdGltZS5ob3VyID0gMDtcclxuICAgICAgdGltZS5taW51dGUgPSAwO1xyXG4gICAgICB0aW1lLmZvcm1hdCA9IDI0O1xyXG4gICAgICB0aW1lLm1lcmlkZW4gPSAnQU0nO1xyXG5cclxuICAgICAgdGhpcy51c2VyVGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLnVzZXJUaW1lKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWVyaWRlbiA9IGAke3RoaXMudXNlclRpbWUubWVyaWRlbn1gO1xyXG5cclxuICAgIG1lcmlkZW4gPSB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKG1lcmlkZW4pO1xyXG5cclxuICAgIGlmICh0aGlzLnVzZXJUaW1lLmZvcm1hdCA9PT0gMjQpIHtcclxuICAgICAgbWVyaWRlbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBob3VyID0gYCR7dGhpcy51c2VyVGltZS5ob3VyfWA7XHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5ob3VyID09PSAyNCkge1xyXG4gICAgICBob3VyID0gJzAwJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGAke2hvdXJ9OjAwICR7bWVyaWRlbn1gO1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPCAxMCkge1xyXG5cclxuICAgICAgY29uc3QgdHQgPSAnMCcgKyBTdHJpbmcodGhpcy51c2VyVGltZS5taW51dGUpO1xyXG4gICAgICByZXR1cm4gYCR7aG91cn06JHt0dH0gJHttZXJpZGVufWA7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGAke2hvdXJ9OiR7dGhpcy51c2VyVGltZS5taW51dGV9ICR7bWVyaWRlbn1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1BpY2tlcigkZXZlbnQpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oV1RpbWVEaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgIGhvdXI6IHRoaXMudXNlclRpbWUuaG91cixcclxuICAgICAgICAgIG1pbnV0ZTogdGhpcy51c2VyVGltZS5taW51dGUsXHJcbiAgICAgICAgICBtZXJpZGVuOiB0aGlzLnVzZXJUaW1lLm1lcmlkZW4sXHJcbiAgICAgICAgICBmb3JtYXQ6IHRoaXMudXNlclRpbWUuZm9ybWF0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvclxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IElUaW1lIHwgLTEpID0+IHtcclxuICAgICAgICAvLyByZXN1bHQgd2lsbCBiZSB1cGRhdGUgdXNlclRpbWUgb2JqZWN0IG9yIC0xIG9yIHVuZGVmaW5lZCAoY2xvc2VkIGRpYWxvZyB3L28gY2xpY2tpbmcgY2FuY2VsKVxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy51c2VyVGltZSA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICB0aGlzLmVtaXR1c2VyVGltZUNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXR1c2VyVGltZUNoYW5nZSgpIHtcclxuXHJcbiAgICB0aGlzLnVzZXJUaW1lQ2hhbmdlLmVtaXQodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRpbWUsIENMT0NLX1RZUEUgfSBmcm9tICcuLi93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctdGltZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCJcclxuICAgICBmeExheW91dC5sdC1tZD1cImNvbHVtblwiXHJcbiAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgIGNsYXNzPVwidy10aW1lXCJcclxuICAgICBbbmdDbGFzcy54c109XCIndmVydGljYWwtdGltZSdcIlxyXG4gICAgIFtuZ0NsYXNzLnNtXT1cIid2ZXJ0aWNhbC10aW1lJ1wiPlxyXG4gIDxtYXQtdG9vbGJhciBmeExheW91dD1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgIGZ4TGF5b3V0Lmx0LW1kPVwicm93XCJcclxuICAgICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cInctdGltZXBpY2tlci10aW1lLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZVwiPlxyXG4gICAgICA8c3BhbiBbY2xhc3NdPVwiY3VycmVudFZpZXcgPT09IFZJRVdfSE9VUlMgPyAnYWN0aXZlJzogJydcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0Q3VycmVudFZpZXcoVklFV19IT1VSUylcIj57eyBmb3JtYXRIb3VyKCkgfX06PC9zcGFuPlxyXG4gICAgICA8c3BhbiBbY2xhc3NdPVwiY3VycmVudFZpZXcgPT09IFZJRVdfTUlOVVRFUyA/ICdhY3RpdmUnOiAnJ1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRDdXJyZW50VmlldyhWSUVXX01JTlVURVMpXCI+e3sgZm9ybWF0TWludXRlKCkgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIlxyXG4gICAgICAgICBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwidy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG1cIlxyXG4gICAgICAgICAqbmdJZj1cInVzZXJUaW1lLmZvcm1hdCA9PT0gMTJcIj5cclxuICAgICAgPHNwYW4gKGNsaWNrKT1cInNldE1lcmlkaWVuKCdBTScpXCJcclxuICAgICAgICAgICAgW2NsYXNzXT1cInVzZXJUaW1lLm1lcmlkZW4gPT09ICdBTScgPyAnYWN0aXZlJyA6ICcnXCI+e3snQU0nIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIChjbGljayk9XCJzZXRNZXJpZGllbignUE0nKVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJ1c2VyVGltZS5tZXJpZGVuID09PSAnUE0nID8gJ2FjdGl2ZScgOiAnJ1wiPnt7J1BNJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbWF0LXRvb2xiYXI+XHJcblxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIlxyXG4gICAgICAgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCJcclxuICAgICAgIGNsYXNzPVwidy10aW1lLWNvbnRlbnRcIj5cclxuICAgIDxudHctY2xvY2sgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwidy1hbmltYXRpb24tem9vbVwiXHJcbiAgICAgICAgICAgICBbdXNlclRpbWVdPVwidXNlclRpbWVcIlxyXG4gICAgICAgICAgICAgKHVzZXJUaW1lQ2hhbmdlKT1cImVtaXR1c2VyVGltZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIFsoY3VycmVudFZpZXcpXT1cImN1cnJlbnRWaWV3XCJcclxuICAgICAgICAgICAgICh2aWV3Q2hhbmdlKT1cInNldEN1cnJlbnRWaWV3KCRldmVudClcIj5cclxuICAgIDwvbnR3LWNsb2NrPlxyXG5cclxuICAgIDxkaXYgZnhGbGV4QWxpZ249XCJlbmRcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJldmVydCgpXCI+XHJcbiAgICAgICAge3tyZXZlcnRMYWJlbH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b25cclxuICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzdWJtaXQoKVwiPlxyXG4gICAgICAgIHt7c3VibWl0TGFiZWx9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30udy10aW1le21heC1oZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjM1MHB4O2hlaWdodDozNTBweH0udy10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXJ7cGFkZGluZzoxNXB4O21pbi13aWR0aDoxNjBweDt3aWR0aDoxNjBweH0udy10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXIubWF0LXRvb2xiYXItc2luZ2xlLXJvd3toZWlnaHQ6MTAwJX0udy10aW1lIC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZXtmb250LXNpemU6My41cmVtO2ZvbnQtd2VpZ2h0OjQwMDtkaXNwbGF5OmZsZXh9LnctdGltZSAudy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG17Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS4zcmVtO3BhZGRpbmctdG9wOjJyZW19LnctdGltZSAudy10aW1lLWNvbnRlbnR7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwYWRkaW5nOjZweH0udy10aW1lIC53LXRpbWUtY29udGVudCB3LWNsb2Nre3BhZGRpbmc6MTJweCAwO2hlaWdodDpjYWxjKDEwMCUgLSA1OHB4KX0udy10aW1lLnZlcnRpY2FsLXRpbWV7aGVpZ2h0OmF1dG99LnctdGltZS52ZXJ0aWNhbC10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXJ7bWluLXdpZHRoOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwcHh9LnctdGltZS52ZXJ0aWNhbC10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXIgLnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBte3BhZGRpbmc6MCAxMnB4fS53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbT5zcGFuLC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZT5zcGFue291dGxpbmU6MDtvcGFjaXR5Oi41fS53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbT5zcGFuOm5vdCguYWN0aXZlKSwudy10aW1lcGlja2VyLXNlbGVjdGVkLXRpbWU+c3Bhbjpub3QoLmFjdGl2ZSl7Y3Vyc29yOnBvaW50ZXJ9LnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBtPnNwYW4uYWN0aXZlLC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZT5zcGFuLmFjdGl2ZXtvcGFjaXR5OjF9LnctYW5pbWF0ZS1uZXh0e29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MCUsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MCUsMCwxcHgpfS53LWFuaW1hdGUtbmV4dC1yZW1vdmV7dHJhbnNpdGlvbjouNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTAlLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTAlLDAsMXB4KX0udy1hbmltYXRlLW5leHQtcmVtb3ZlLWFjdGl2ZXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwxcHgpfS53LWFuaW1hdGUtcHJldntvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwxcHgpfS53LWFuaW1hdGUtcHJldi1yZW1vdmV7dHJhbnNpdGlvbjouM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwxcHgpfS53LWFuaW1hdGUtcHJldi1yZW1vdmUtYWN0aXZle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDFweCl9QC13ZWJraXQta2V5ZnJhbWVzIHctYW5pbWF0aW9uLWJvdW5jZXtmcm9te29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfTcwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyB3LWFuaW1hdGlvbi1ib3VuY2V7ZnJvbXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX03MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS53LWFuaW1hdGlvbi16b29tLm5nLWVudGVye3RyYW5zaXRpb246LjNzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjNzO2FuaW1hdGlvbi1kdXJhdGlvbjouM3M7LXdlYmtpdC1hbmltYXRpb24tbmFtZTp3LWFuaW1hdGlvbi1ib3VuY2U7YW5pbWF0aW9uLW5hbWU6dy1hbmltYXRpb24tYm91bmNlfWBdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdXNlclRpbWU6IElUaW1lO1xyXG4gIEBPdXRwdXQoKSB1c2VyVGltZUNoYW5nZTogRXZlbnRFbWl0dGVyPElUaW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgcmV2ZXJ0TGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJtaXRMYWJlbDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcmV2ZXJ0ZWQ6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgVklFV19IT1VSUyA9IENMT0NLX1RZUEUuSE9VUlM7XHJcbiAgcHVibGljIFZJRVdfTUlOVVRFUyA9IENMT0NLX1RZUEUuTUlOVVRFUztcclxuICBwdWJsaWMgY3VycmVudFZpZXc6IENMT0NLX1RZUEUgPSB0aGlzLlZJRVdfSE9VUlM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlUGlwZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnVzZXJUaW1lKSB7XHJcbiAgICAgIHRoaXMudXNlclRpbWUgPSB7XHJcbiAgICAgICAgaG91cjogNixcclxuICAgICAgICBtaW51dGU6IDAsXHJcbiAgICAgICAgbWVyaWRlbjogJ1BNJyxcclxuICAgICAgICBmb3JtYXQ6IDEyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnJldmVydExhYmVsKSB7XHJcbiAgICAgIHRoaXMucmV2ZXJ0TGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKCdidXR0b25zLkNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdWJtaXRMYWJlbCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdExhYmVsID0gdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSgnYnV0dG9ucy5PaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0SG91cigpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudXNlclRpbWUuZm9ybWF0ID09PSAyNCkge1xyXG4gICAgICBpZiAodGhpcy51c2VyVGltZS5ob3VyID09PSAyNCkge1xyXG4gICAgICAgIHJldHVybiAnMDAnO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXNlclRpbWUuaG91ciA8IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuICcwJyArIFN0cmluZyh0aGlzLnVzZXJUaW1lLmhvdXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnVzZXJUaW1lLmhvdXIpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TWludXRlKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPT09IDApIHtcclxuICAgICAgcmV0dXJuICcwMCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudXNlclRpbWUubWludXRlIDwgMTApIHtcclxuICAgICAgcmV0dXJuICcwJyArIFN0cmluZyh0aGlzLnVzZXJUaW1lLm1pbnV0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gU3RyaW5nKHRoaXMudXNlclRpbWUubWludXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRWaWV3KHR5cGU6IENMT0NLX1RZUEUpIHtcclxuICAgIHRoaXMuY3VycmVudFZpZXcgPSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0TWVyaWRpZW4obTogJ1BNJyB8ICdBTScpIHtcclxuICAgIHRoaXMudXNlclRpbWUubWVyaWRlbiA9IG07XHJcbiAgfVxyXG5cclxuICByZXZlcnQoKSB7XHJcbiAgICB0aGlzLnJldmVydGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG5cclxuICBlbWl0dXNlclRpbWVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMudXNlclRpbWVDaGFuZ2UuZW1pdCh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuaW1wb3J0IHsgU2VjdGlvbk1vZGVzLCBGb3JtTW9kZXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBJbnB1dEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2lucHV0LWVycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIGVycm9yIGNsYXNzLiovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyBWYWxpZGF0aW9uRXJyb3JDbGFzczogc3RyaW5nID0gJ2Nzc0NsYXNzZXMuVmFsaWRhdGlvbkVycm9yJztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcmVsYXRlZCBmaWVsZC4qL1xyXG4gIEBJbnB1dCgnZmllbGQnKSBmaWVsZDogRmllbGQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNvbnRyb2wuKi9cclxuICBAVmlld0NoaWxkKE5nTW9kZWwpIGNvbnRyb2w6IE5nTW9kZWw7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHBhdHRlcm4uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JQYXR0ZXJuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBzdGlsbCB1bnVzZWQuIGFsd2F5cyBmYWxzZS5cclxuICBwcml2YXRlIGlzUHJpc3RpbmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBmaWVsZCdzIHZhbHVlLlxyXG4gICAqIEBwYXJhbSBhbnkgbmV3VmFsdWUgVGhlIG5ldyBmaWVsZCB2YWx1ZS5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBuZXdWYWx1ZS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGdldFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZGF0YS52YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIGR5bmFtaWMgZXZlbnQgaW4gY2FzZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZXZlbnRUeXBlIFRoZSB0eXBlIG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICAqIEBwYXJhbSBhbnkgc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHRyaWdnZXJEeW5hbWljRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50QXJndW1lbnRzOiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAoc291cmNlLmV2ZW50VHJpZ2dlcnMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBzb3VyY2UuZXZlbnRUcmlnZ2Vyc1tldmVudFR5cGVdO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24gPSB0aGlzLmJyaWRnZVNlcnZpY2UucGFyZW50Q29tcG9uZW50W2V2ZW50LmhhbmRsZXJdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBbZXZlbnRBcmd1bWVudHNdO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQucGFyYW1ldGVycyAmJiBldmVudC5wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmNvbmNhdChldmVudC5wYXJhbWV0ZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uKHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnQsIHNvdXJjZSwgcGFyYW1ldGVycyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSBoaWRkZW4uXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSBoaWRkZW4uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNGaWVsZEhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmhpZGRlbiB8fFxyXG4gICAgICAodGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc2VjdGlvbk1vZGUgIT09IFNlY3Rpb25Nb2Rlcy5Ob25lICYmXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHRoaXMuZmllbGQuc2VjdGlvbklkICE9PSB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbi5pZCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIHNob3VsZCBiZSBzaG93bi5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgdmFsaWRhdGlvbiBzaG91bGQgYmUgc2hvd24uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNWYWxpZGF0aW9uU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNQcmlzdGluZSAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGFzdGVyaXNrIHNob3VsZCBiZSBzaG93bi5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgdmFsaWRhdGlvbiBhc3RlcmlzayBzaG91bGQgYmUgc2hvd24uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uICYmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQgfHwgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbiA+IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGZvcm0gY29udHJvbCBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gaXNTdWJtaXQgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGlzIHJlYWNoZWQgZnJvbSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZShldmVudEFyZ3VtZW50cz86IGFueSwgaXNTdWJtaXQ/OiBib29sZWFuKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgdGhpcy5wcmVWYWxpZGF0ZShpc1N1Ym1pdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUoKSkge1xyXG4gICAgICBpZiAodGhpcy5maWVsZC5oaWRkZW4pIHtcclxuICAgICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9yUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJlcXVpcmVkQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JQYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQYXR0ZXJuQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JSYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUmFuZ2VDb25kaXRpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGRzIGFuIGVycm9yIHRvIHRoZSB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbWVzc2FnZSBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgdHlwZSBUaGUgdmFsaWRhdGlvbiBlcnJvciB0eXBlLlxyXG4gICovXHJcbiAgcHVibGljIGFkZFZhbGlkYXRpb25FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IHN0cmluZyA9IEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzKSB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycykge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcih0eXBlLCBtZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWxpZGF0aW9uIGVycm9ycy4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbGlkYXRpb25FcnJvcnMoKSB7XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSB2YWxpYXRlZC5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIHZhbGlhdGVkLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHNob3VsZFZhbGlkYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbiAmJiAoIXRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyB8fCB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID09PSAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gUHJlcGFyZXMgdGhlIGZpZWxkIGZvciB2YWxpZGF0aW9uIGFuZCBtYWtlcyBzdXJlIGl0IGlzbid0IHZhbGlkYXRlZCByZXBlYXRlZGx5LlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgcHJlVmFsaWRhdGUoaXNTdWJtaXQ6IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLmlzUHJpc3RpbmUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoaXNTdWJtaXQpIHtcclxuICAgICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgdmFsaWRhdGlvbiBzdW1tYXJ5LiovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCkge1xyXG4gICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzKSB7XHJcbiAgICAgIGlmIChmaWVsZC52YWxpZGF0aW9uRXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycyA9IHRoaXMuYnJpZGdlU2VydmljZVxyXG4gICAgICAgICAgLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycy5jb25jYXQoZmllbGQudmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGEgY29udHJvbCBmb3IgdGhlIHJlcXVpcmVkIGNvbmRpdGlvbiBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlUmVxdWlyZWRDb25kaXRpb24oKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICBpZiAoIXRoaXMuZmllbGQuZGF0YSB8fCAhdGhpcy5maWVsZC5kYXRhLnZhbHVlIHx8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkVGV4dCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGEgY29udHJvbCBmb3IgdGhlIHBhdHRlcm4gY29uZGl0aW9uIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlUGF0dGVybkNvbmRpdGlvbigpOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLnBhdHRlcm4gJiYgdGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWdFeCA9IG5ldyBSZWdFeHAodGhpcy5maWVsZC52YWxpZGF0aW9uLnBhdHRlcm4pO1xyXG4gICAgICBpZiAoIXJlZ0V4LnRlc3QodGhpcy5maWVsZC5kYXRhLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucGF0dGVyblRleHQpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGNvbnRyb2wgZm9yIHRoZSByYW5nZSBjb25kaXRpb24gYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVJhbmdlQ29uZGl0aW9uKCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGNvbnN0IHZhbHVlTGVuZ3RoID0gdGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA/IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggOiAwO1xyXG5cclxuICAgIGlmICgodGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbiAmJiB2YWx1ZUxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4pIHx8XHJcbiAgICAgICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4ICYmIHZhbHVlTGVuZ3RoID4gdGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCkpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5yYW5nZVRleHQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgdGhlIGZvcm0gaXMgaW4gZGlzcGxheSBtb2RlLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSBmb3JtIGlzIGluIGRpc3BsYXkgbW9kZS5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBpc0Zvcm1JbkRpc3BsYXlNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNldHRpbmdzLmZvcm1Nb2RlID09PSBGb3JtTW9kZXMuRGlzcGxheTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9odHRwLXJlcXVlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctYm91bmRhYmxlLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGh0dHBSZXF1ZXN0c1NlcnZpY2U6IEh0dHBSZXF1ZXN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxpdGllc1NlcnZpY2U6IFV0aWxpdGllc1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZGF0YUJpbmRPcHRpb25zKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YUJpbmRPcHRpb25zKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBCaW5kcyB0aGUgZmllbGQncyBvcHRpb25zLiovXHJcbiAgcHJvdGVjdGVkIGRhdGFCaW5kT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLm9wdGlvbnNFbmRwb2ludCkge1xyXG4gICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5yZXBsYWNlVG9rZW5zKFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5sb29rdXBzW3RoaXMuZmllbGQuZGF0YS5vcHRpb25zRW5kcG9pbnRdLFxyXG4gICAgICAgIHRoaXMucm91dGUsXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmFkZGl0aW9uYWxQYXJhbWV0ZXJzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRPcHRpb25zKGVuZHBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZpZWxkJ3Mgb3B0aW9ucy5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50IFRoZSBlbmRwb2ludC5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBiaW5kT3B0aW9ucyhlbmRwb2ludDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGVuZHBvaW50KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEub3B0aW9ucyA9IHJlc3BvbnNlO1xyXG4gICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignYmluZE9wdGlvbnM6ICcsIGV4Y2VwdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctY2hlY2tib3gtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBjbGFzcz1cImNoZWNrQm94SG9sZGVyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiPlxyXG4gICAgPHAtY2hlY2tib3ggKm5nRm9yPVwibGV0IGNoZWNrYm94IG9mIGZpZWxkLmRhdGEub3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZSsnXycraVwiXHJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCJjaGVja2JveC5uYW1lIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjaGVja2JveC5pZFwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgICA8L3AtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWwgKm5nSWY9XCJmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA+IDFcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCB0aXRsZSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e3RpdGxlfX08L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxzcGFuICpuZ0lmPVwiZmllbGQ/LmRhdGE/LnZhbHVlPy5sZW5ndGggPT0gMVwiPlxyXG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgdGl0bGUgb2YgZmllbGQ/LmRhdGE/LnZhbHVlXCI+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BwLWNoZWNrYm94e2Rpc3BsYXk6YmxvY2t9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNoa2JveC51aS13aWRnZXR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddJywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jaGlwcy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1jaGlwcyBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICBbYWxsb3dEdXBsaWNhdGVdPVwiZmllbGQudmFsaWRhdGlvbi5hbGxvd0R1cGxpY2F0ZVwiXHJcbiAgICAgICAgICAgW2FkZE9uQmx1cl09XCJmaWVsZC5hZGRPbkJsdXJcIlxyXG4gICAgICAgICAgIFthZGRPblRhYl09XCJmaWVsZC5hZGRPblRhYlwiXHJcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgKG9uQWRkKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQWRkJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAob25SZW1vdmUpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25SZW1vdmUnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLWNoaXBzPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRpdGxlIG9mIGZpZWxkLmRhdGEudmFsdWVcIj57e3RpdGxlfX08L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIC51aS1jaGlwcy1pbnB1dC10b2tlbiw6aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzLWlucHV0LXRva2VuIGlucHV0e3dpZHRoOjEwMCV9Omhvc3QgOjpuZy1kZWVwIC51aS1jaGlwcz51bC51aS1pbnB1dHRleHR7cGFkZGluZzo1cHggLjI1ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoaXBzRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10nLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1kYXRldGltZS1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1jYWxlbmRhciAjY2FsZW5kYXJcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIFtyZWFkb25seUlucHV0XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtzaG93SWNvbl09XCJmaWVsZC5zaG93SWNvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dUaW1lXT1cImZpZWxkLnNob3dUaW1lXCJcclxuICAgICAgICAgICAgICBbaG91ckZvcm1hdF09XCJmaWVsZC5ob3VyRm9ybWF0XCJcclxuICAgICAgICAgICAgICBbbW9udGhOYXZpZ2F0b3JdPVwiZmllbGQubW9udGhOYXZpZ2F0b3JcIlxyXG4gICAgICAgICAgICAgIFt5ZWFyTmF2aWdhdG9yXT1cImZpZWxkLnllYXJOYXZpZ2F0b3JcIlxyXG4gICAgICAgICAgICAgIFt5ZWFyUmFuZ2VdPVwiZmllbGQueWVhclJhbmdlXCJcclxuICAgICAgICAgICAgICBbZGF0ZUZvcm1hdF09XCJmaWVsZC5kYXRlRm9ybWF0XCJcclxuICAgICAgICAgICAgICBbbWluRGF0ZV09XCJmaWVsZC5taW5EYXRlVmFsdWVcIlxyXG4gICAgICAgICAgICAgIFttYXhEYXRlXT1cImZpZWxkLm1heERhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW2RlZmF1bHREYXRlXT1cImZpZWxkLmRlZmF1bHREYXRlVmFsdWVcIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgKG9uQ2xvc2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblNlbGVjdCcsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgICAgKG9uU2VsZWN0KT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3QnLCAkZXZlbnQsIGZpZWxkKTtcIj5cclxuICA8L3AtY2FsZW5kYXI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQuZGF0YS52YWx1ZSB8IGRhdGU6ZmllbGQuZGlzcGxheURhdGVGb3JtYXR9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYm9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYnV0dG9uLnVpLWRhdGVwaWNrZXItdHJpZ2dlcntyaWdodDowfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbi51aS1kYXRlcGlja2VyLXRyaWdnZXJ7bGVmdDowfTpob3N0IDo6bmctZGVlcCBzcGFuLnVpLWNhbGVuZGFye2Rpc3BsYXk6YmxvY2t9Omhvc3QgOjpuZy1kZWVwIHAtY2FsZW5kYXIgaW5wdXR7Ym9yZGVyLXJhZGl1czouMjVyZW19Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyLWJ1dHRvbntib3JkZXItcmFkaXVzOi4yNXJlbSAwIDAgLjI1cmVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhci51aS1jYWxlbmRhci13LWJ0biBpbnB1dHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czouMjVyZW07Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6LjI1cmVtfTpob3N0IDo6bmctZGVlcCBidXR0b24udWktZGF0ZXBpY2tlci10cmlnZ2Vye3Bvc2l0aW9uOmFic29sdXRlfTpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXIgLnVpLWRhdGVwaWNrZXJ7d2lkdGg6MTdlbTttaW4td2lkdGg6YXV0b306aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyIC51aS1jYWxlbmRhci1idXR0b24gLnVpLWJ1dHRvbi1pY29uLWxlZnR7Zm9udC1zaXplOjEuMjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgc2VhcmNoIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdjYWxlbmRhcicpIGNhbGVuZGFyRWxlbWVudDogYW55O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2FsZW5kYXJPcHRpb25zKCk7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Q2FsZW5kYXJPcHRpb25zKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lLCB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmZpZWxkLmRhdGEudmFsdWUsIHRoaXMuZmllbGQuZm9ybURhdGFEYXRlRm9ybWF0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICAvLyBidWdneSBpZiBkb25lIGZyb20gaGVyZSBhZnRlciBjb21wb25lbnQgaXMgbG9hZGVkLiBNb3ZlZCBiYWNrIHRvIGJlZm9yZSBjb21wb25lbnQgbG9hZGVkLlxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjYWxlbmRhciBvcHRpb25zLiovXHJcbiAgcHJpdmF0ZSBzZXRDYWxlbmRhck9wdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxlbmRhckVsZW1lbnQgJiYgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGNhbGVuZGFyT3B0aW9ucyA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5jYWxlbmRhck9wdGlvbnM7XHJcblxyXG4gICAgICBpZiAoY2FsZW5kYXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckVsZW1lbnQubG9jYWxlID0gY2FsZW5kYXJPcHRpb25zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5nYkNhbGVuZGFyLCBOZ2JEYXRlcGlja2VySTE4biwgTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXNsYW1pY0kxOG4gfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRlcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZGF0ZXRpbWUtaGlqcmktZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBjbGFzcz1cImhpanJpLWRhdGUtY29udHJvbFwiPlxyXG4gICAgPGlucHV0IFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgIG5nYkRhdGVwaWNrZXJcclxuICAgICAgICAgICAjaW5wdXQ9XCJuZ2JEYXRlcGlja2VyXCJcclxuICAgICAgICAgICAjZGVmYXVsdElucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgW21pbkRhdGVdPVwiZmllbGQubWluRGF0ZVZhbHVlXCJcclxuICAgICAgICAgICBbbWF4RGF0ZV09XCJmaWVsZC5tYXhEYXRlVmFsdWVcIlxyXG4gICAgICAgICAgIFtzaG93V2Vla051bWJlcnNdPVwiZmllbGQuc2hvd1dlZWtOdW1iZXJzXCJcclxuICAgICAgICAgICBbZGlzcGxheU1vbnRoc109XCJmaWVsZC5kaXNwbGF5TW9udGhzXCJcclxuICAgICAgICAgICBbb3V0c2lkZURheXNdPVwiZmllbGQub3V0c2lkZURheXNcIlxyXG4gICAgICAgICAgIFtzaG93V2Vla2RheXNdPVwiZmllbGQuc2hvd1dlZWtkYXlzXCJcclxuICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDYWxlbmRhcigpO3ZhbGlkYXRlKCk7XCJcclxuICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0JywgJGV2ZW50LCBmaWVsZCk7XCIgLz5cclxuXHJcbiAgICA8IS0tIGljb24gLS0+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ2FsZW5kYXIoKTtcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJoaWpyaS1kYXRlLWljb25cIlxyXG4gICAgICAgICAgICAqbmdJZj1cImZpZWxkLnNob3dJY29uXCI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkPy5kYXRhPy52YWx1ZT8uZGF5fX0ve3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1vbnRofX0ve3tmaWVsZD8uZGF0YT8udmFsdWU/LnllYXJ9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLmhpanJpLWRhdGV7aGVpZ2h0OjM1cHh9LmhpanJpLWRhdGUtY29udHJvbHtwb3NpdGlvbjpyZWxhdGl2ZX0uaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtwYWRkaW5nOjAgNnB4O2JhY2tncm91bmQtY29sb3I6IzIzOTllNTtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMDAlO2xpbmUtaGVpZ2h0OjEuODtib3JkZXI6MH1idXR0b24uaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcjpkaXNhYmxlZHtvcGFjaXR5Oi4zNX0uaGlqcmktZGF0ZS1pY29uOmZvY3VzLC5oaWpyaS1kYXRlLWljb246aG92ZXJ7YmFja2dyb3VuZDojMWY4OWNlfS5oaWpyaS1kYXRlLWljb246YWZ0ZXJ7Y29udGVudDonXFxcXGU5MjcnO2ZvbnQtZmFtaWx5OnByaW1laWNvbnM7Zm9udC1zaXplOjEuMjVlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlciBuZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uIC5uZ2ItZHAtbmF2aWdhdGlvbi1jaGV2cm9uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXIgbmdiLWRhdGVwaWNrZXItbmF2aWdhdGlvbiAucmlnaHQgLm5nYi1kcC1uYXZpZ2F0aW9uLWNoZXZyb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEzNWRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1zZWxlY3R7YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0Ljc1cmVtIGNlbnRlcn1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAuaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcntsZWZ0OjB9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgLmhpanJpLWRhdGUtaWNvbi1jb250YWluZXJ7cmlnaHQ6MH06aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1zZWxlY3R7YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IC4yNXJlbSBjZW50ZXIhaW1wb3J0YW50O2RpcmVjdGlvbjpydGwhaW1wb3J0YW50O21pbi13aWR0aDoxMDBweH06aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLWRheSw6aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLXdlZWstbnVtYmVyLDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtd2Vla2RheXt3aWR0aDoyLjVyZW07aGVpZ2h0OjIuNXJlbX06aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLWRheSBkaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsaW5lLWhlaWdodDoyLjVyZW19YF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IE5nYkNhbGVuZGFyLCB1c2VDbGFzczogTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgfSxcclxuICAgIHsgcHJvdmlkZTogTmdiRGF0ZXBpY2tlckkxOG4sIHVzZUNsYXNzOiBJc2xhbWljSTE4biB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgY2FsZW5kYXI6IE5nYklucHV0RGF0ZXBpY2tlcjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbGl0aWVzU2VydmljZTogVXRpbGl0aWVzU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5taW5EYXRlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubWluRGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQodGhpcy5maWVsZC5taW5EYXRlLCBuZXcgRGF0ZSh0aGlzLmZpZWxkLm1pbkRhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC5tYXhEYXRlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubWF4RGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQodGhpcy5maWVsZC5tYXhEYXRlLCBuZXcgRGF0ZSh0aGlzLmZpZWxkLm1heERhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhLmRhdGVWYWx1ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdChcclxuICAgICAgICB0aGlzLmZpZWxkLmRhdGEuZGF0ZVZhbHVlLFxyXG4gICAgICAgIG5ldyBEYXRlKHRoaXMuZmllbGQuZGF0YS5kYXRlVmFsdWUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcueWVhcicsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS55ZWFyKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcubW9udGgnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubW9udGgpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5kYXknLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgY2FsZW5kYXIuKi9cclxuICBwdWJsaWMgdG9nZ2xlQ2FsZW5kYXIoKSB7XHJcbiAgICB0aGlzLmNhbGVuZGFyLnRvZ2dsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZWRpdG9yLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxkaXYgW25nQ2xhc3NdPVwieydoaWRlLXRvb2xiYXInOiFmaWVsZC5zaG93VG9vbGJhcn1cIj5cclxuICAgIDxwLWVkaXRvciBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICBbc3R5bGVdPVwieydoZWlnaHQnOmZpZWxkLmhlaWdodH1cIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgKG9uU2VsZWN0aW9uQ2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0aW9uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAob25UZXh0Q2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO1wiPlxyXG4gICAgPC9wLWVkaXRvcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtpbm5lckhUTUxdPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+PC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2Bib2R5LmFyIDpob3N0IDo6bmctZGVlcCAucWwtZWRpdG9yIHB7ZGlyZWN0aW9uOnJ0bDt0ZXh0LWFsaWduOnJpZ2h0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIHNwYW4ucWwtcGlja2VyLWxhYmVse3RleHQtYWxpZ246bGVmdH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAucWwtZWRpdG9yLnFsLWJsYW5rOjpiZWZvcmV7bGVmdDp1bnNldH06aG9zdCA6Om5nLWRlZXAgLmhpZGUtdG9vbGJhciAudWktZWRpdG9yLXRvb2xiYXJ7ZGlzcGxheTpub25lfTpob3N0IDo6bmctZGVlcCAuaGlkZS10b29sYmFyIC51aS1lZGl0b3ItY29udGVudHtib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjIWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGdldFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuc2hvd1Rvb2xiYXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZGF0YS52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkLmRhdGEudmFsdWUucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICdwcmltZW5nL2ZpbGV1cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZmlsZS11cGxvYWQtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtZmlsZVVwbG9hZCBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgIFt1cmxdPVwiZmllbGQuZGF0YS51cmxcIlxyXG4gICAgICAgICAgICAgICAgW211bHRpcGxlXT1cImZpZWxkLm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIFthY2NlcHRdPVwiZmllbGQudmFsaWRhdGlvbi5hY2NlcHRcIlxyXG4gICAgICAgICAgICAgICAgI2lucHV0XHJcbiAgICAgICAgICAgICAgICBbYXV0b109XCJmaWVsZC5hdXRvXCJcclxuICAgICAgICAgICAgICAgIFttYXhGaWxlU2l6ZV09XCJmaWVsZC52YWxpZGF0aW9uLm1heEZpbGVTaXplSW5CeXRlc1wiXHJcbiAgICAgICAgICAgICAgICBbbW9kZV09XCJmaWVsZC5tb2RlXCJcclxuICAgICAgICAgICAgICAgIFtzaG93Q2FuY2VsQnV0dG9uXT1cImZpZWxkLmJ1dHRvbnMuc2hvd0NhbmNlbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd1VwbG9hZEJ1dHRvbl09XCJmaWVsZC5idXR0b25zLnNob3dVcGxvYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgW2Nob29zZUxhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2hvb3NlTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3VwbG9hZExhYmVsXT1cImZpZWxkLmJ1dHRvbnMudXBsb2FkTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2NhbmNlbExhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2FuY2VsTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBjdXN0b21VcGxvYWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJ2YWxpZGF0ZSgnb25TZWxlY3QnKTtcIlxyXG4gICAgICAgICAgICAgICAgKG9uUmVtb3ZlKT1cInZhbGlkYXRlKCdvblJlbW92ZScpO1wiXHJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJ2YWxpZGF0ZSgnb25DbGVhcicpO1wiPlxyXG4gIDwvcC1maWxlVXBsb2FkPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInVwbG9hZC1maWxlLXZpZXdlclwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnTmV3JyAmJiBmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA+IDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtZmlsZS1pdGVtXCJcclxuICAgICAgICAgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmllbGQuZGF0YS52YWx1ZVwiPlxyXG4gICAgICA8YSBbaHJlZl09XCJmaWxlLnVybFwiXHJcbiAgICAgICAgIFtkb3dubG9hZF09XCJmaWxlLmZpbGVOYW1lXCJcclxuICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgY2xhc3M9XCJ1cGxvYWQtZmlsZS1hbmNob3JcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1cGxvYWQtZmlsZS10aXRsZVwiPnt7ZmlsZS5maWxlTmFtZX19PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpbGUoZmlsZSk7dmFsaWRhdGUoJ29uUmVtb3ZlRmlsZScpO1wiXHJcbiAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgIGNsYXNzPVwidHJhc2gtaWNvbi1zdHlsZVwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIHAtZmlsZXVwbG9hZCAudWktbWVzc2FnZXMtZXJyb3J7ZGlzcGxheTpub25lIWltcG9ydGFudH06aG9zdCA6Om5nLWRlZXAgLnVpLWZpbGV1cGxvYWR7bWFyZ2luLWJvdHRvbTo4cHh9LnVwbG9hZC1maWxlLXZpZXdlcntib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoxMHB4fS51cGxvYWQtZmlsZS12aWV3ZXIgLnVwbG9hZC1maWxlLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y2ZjdmOSAwLCNlYmVkZjAgMTAwJSk7bWFyZ2luLWJvdHRvbToxMHB4fS51cGxvYWQtZmlsZS10aXRsZXtwYWRkaW5nOjAgMTVweH1hLnVwbG9hZC1maWxlLWFuY2hvcntsaW5lLWhlaWdodDoyfS51cGxvYWQtZmlsZS12aWV3ZXIgZGl2Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfWEudHJhc2gtaWNvbi1zdHlsZXtwYWRkaW5nOjZweCAxMXB4O2JvcmRlci1yYWRpdXM6NnB4O2ZvbnQtc2l6ZToxMnB4O2JvcmRlcjoxcHggc29saWQgIzIzOTllNTtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzIzOTllNTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfWEudHJhc2gtaWNvbi1zdHlsZTpob3Zlcntib3JkZXI6MXB4IHNvbGlkICMxZjg5Y2U7YmFja2dyb3VuZDojMWY4OWNlfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEudHJhc2gtaWNvbi1zdHlsZXtmbG9hdDpsZWZ0fWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGEudHJhc2gtaWNvbi1zdHlsZXtmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGZpbGUgdXBsb2FkIGNvbnRyb2wuKi9cclxuICBAVmlld0NoaWxkKEZpbGVVcGxvYWQpIGZpbGVVcGxvYWRDb250cm9sOiBGaWxlVXBsb2FkO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZVVwbG9hZENvbnRyb2wpIHtcclxuICAgICAgdGhpcy5maWxlVXBsb2FkQ29udHJvbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcykge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcykge1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSwgZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBmb3JtIGNvbnRyb2wgYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwdWJsaWMgdmFsaWRhdGUoZXZlbnRBcmd1bWVudHM/OiBhbnksIGlzU3VibWl0PzogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMucHJlVmFsaWRhdGUoaXNTdWJtaXQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKCkpIHtcclxuICAgICAgbGV0IHZhbHVlTGVuZ3RoID0gMDtcclxuICAgICAgaWYgKHRoaXMuZmlsZVVwbG9hZENvbnRyb2wpIHtcclxuICAgICAgICB2YWx1ZUxlbmd0aCA9IGV2ZW50QXJndW1lbnRzID09PSAnb25SZW1vdmUnID8gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcy5sZW5ndGggLSAxIDogdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgICB2YWx1ZUxlbmd0aCArPSB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4gJiYgdmFsdWVMZW5ndGggPCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluKSB8fFxyXG4gICAgICAgICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4ICYmIHZhbHVlTGVuZ3RoID4gdGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCkpIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJhbmdlVGV4dCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heEZpbGVTaXplSW5CeXRlcyA+IDAgJiYgdGhpcy5maWxlVXBsb2FkQ29udHJvbCAmJiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLm1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkRmlsZVNpemVNZXNzYWdlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5tc2dzLmZpbmQobSA9PiBtLnN1bW1hcnkgPT09ICdpbnZhbGlkRmlsZVNpemUnKTtcclxuXHJcbiAgICAgICAgaWYgKGludmFsaWRGaWxlU2l6ZU1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24uaW52YWxpZEZpbGVTaXplVGV4dCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW52YWxpZEZpbGVUeXBlTWVzc2FnZSA9IHRoaXMuZmlsZVVwbG9hZENvbnRyb2wubXNncy5maW5kKG0gPT4gbS5zdW1tYXJ5ID09PSAnaW52YWxpZEZpbGVUeXBlJyk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkRmlsZVR5cGVNZXNzYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLmludmFsaWRGaWxlVHlwZVRleHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIHRoZSBmaWxlLlxyXG4gICAqIEBwYXJhbSBhbnkgZmlsZSBUaGUgZmlsZSB0byByZW1vdmUuXHJcbiAgKi9cclxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5wb3AoZmlsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBDcm9wcGVyU2V0dGluZ3MgfSBmcm9tICduZzItaW1nLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAncHJpbWVuZy9maWxldXBsb2FkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWltYWdlLWNyb3BwZXItZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQ/LmNzc0NsYXNzZXM/LmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQgLS0+XHJcbiAgPCEtLSB1cGxvYWQgY29udHJvbCAtLT5cclxuICA8cC1maWxlVXBsb2FkIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBtb2RlPVwiYWR2YW5jZWRcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dDYW5jZWxCdXR0b25dPWZhbHNlXHJcbiAgICAgICAgICAgICAgICBbc2hvd1VwbG9hZEJ1dHRvbl09ZmFsc2VcclxuICAgICAgICAgICAgICAgIFtjaG9vc2VMYWJlbF09XCJmaWVsZC5idXR0b25zLmNob29zZUxhYmVsIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVNpemVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVNpemVNZXNzYWdlRGV0YWlsPVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlVHlwZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZVN1bW1hcnk9XCJpbnZhbGlkRmlsZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgY3VzdG9tVXBsb2FkPXRydWVcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAob25TZWxlY3QpPVwic2V0Q3JvcHBlckltYWdlKCk7dmFsaWRhdGUoKTtcIlxyXG4gICAgICAgICAgICAgICAgKG9uUmVtb3ZlKT1cImNsZWFyVmFsdWUoKTt2YWxpZGF0ZSgpO1wiPlxyXG4gIDwvcC1maWxlVXBsb2FkPlxyXG5cclxuICA8IS0tIGNyb3BwZXIgLS0+XHJcbiAgPGltZy1jcm9wcGVyICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiIWltYWdlRmlsZS5zcmNcIlxyXG4gICAgICAgICAgICAgICBbaW1hZ2VdPVwiaW1hZ2VGaWxlXCJcclxuICAgICAgICAgICAgICAgW3NldHRpbmdzXT1cImNyb3BwZXJTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgIChvbkNyb3ApPVwic2V0VmFsdWUoKVwiPlxyXG4gIDwvaW1nLWNyb3BwZXI+XHJcblxyXG4gIDwhLS0gY3JvcHBlZCBpbWFnZSAtLT5cclxuICA8c3BhbiBjbGFzcz1cImNyb3BwZWQtaW1hZ2VcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgW2hpZGRlbl09XCIgIWltYWdlRmlsZS5pbWFnZVwiPlxyXG4gICAgPGltZyAjY3JvcHBlZEltYWdlXHJcbiAgICAgICAgICpuZ0lmPVwiaW1hZ2VGaWxlLmltYWdlXCJcclxuICAgICAgICAgW3NyY109XCJpbWFnZUZpbGUuaW1hZ2VcIlxyXG4gICAgICAgICBbd2lkdGhdPVwiY3JvcHBlclNldHRpbmdzLndpZHRoXCJcclxuICAgICAgICAgW2hlaWdodF09XCJjcm9wcGVyU2V0dGluZ3MuaGVpZ2h0XCI+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8aW1nICpuZ0lmPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFtzcmNdPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFt3aWR0aF09XCJjcm9wcGVyU2V0dGluZ3Mud2lkdGhcIlxyXG4gICAgICAgICBbaGVpZ2h0XT1cImNyb3BwZXJTZXR0aW5ncy5oZWlnaHRcIj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGlucHV0LmZvcm0taW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO2JvcmRlci1yYWRpdXM6LjI1cmVtO3BhZGRpbmc6NXB4fXAtZmlsZXVwbG9hZHtkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcCBpbWctY3JvcHBlciAubmcyLWltZ2Nyb3B7Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O3BhZGRpbmc6MjBweCAwO2JhY2tncm91bmQtY29sb3I6I2ViZWRmMDt3aWR0aDoxMDAlO21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja30uZm9ybS1kaXNwbGF5IGltZ3tib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO3BhZGRpbmc6MTBweH0uY3JvcHBlZC1pbWFnZXt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O2JhY2tncm91bmQtY29sb3I6I2ViZWRmMDttYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgaW1hZ2UgY3JvcHBlciBjb21wb25lbnQuKi9cclxuICBAVmlld0NoaWxkKEltYWdlQ3JvcHBlckNvbXBvbmVudCkgY3JvcHBlcjogSW1hZ2VDcm9wcGVyQ29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5ICovXHJcbiAgQFZpZXdDaGlsZCgnY3JvcHBlZEltYWdlJykgY3JvcHBlZEltYWdlRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgZmlsZSB1cGxvYWQgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoRmlsZVVwbG9hZCkgZmlsZVVwbG9hZENvbnRyb2w6IEZpbGVVcGxvYWQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNyb3BwZXIgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgY3JvcHBlclNldHRpbmdzOiBDcm9wcGVyU2V0dGluZ3M7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGltYWdlIGZpbGUuKi9cclxuICBwdWJsaWMgaW1hZ2VGaWxlOiBhbnkgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVDcm9wcGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGZpZWxkJ3MgdmFsdWUuXHJcbiAgICogQHBhcmFtIGFueSBuZXdWYWx1ZSBUaGUgbmV3IGZpZWxkIHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5pbWFnZUZpbGUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlLnNldEF0dHJpYnV0ZSgnY3Jvc3NPcmlnaW4nLCAnYW5vbnltb3VzJyk7XHJcblxyXG4gICAgICB0aGlzLmltYWdlRmlsZS5zcmMgPSBuZXdWYWx1ZS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIHdvcmthcm91bmQgYXMgaXQgaXMgbm90IHdvcmtpbmcgd2l0aG91dCBpdC4gbm8gaWRlYSB3aHkgOilcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY3JvcHBlci5zZXRJbWFnZSh0aGlzLmltYWdlRmlsZSk7IH0sIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmNsZWFyKCk7XHJcblxyXG4gICAgICB0aGlzLmNyb3BwZXIucmVzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjcm9wcGVkIGltYWdlIHZhbHVlLiovXHJcbiAgcHVibGljIHNldFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JvcHBlZEltYWdlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLmNyb3BwZWRJbWFnZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jdXJyZW50U3JjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjcm9wcGVkIGltYWdlLiovXHJcbiAgcHVibGljIHNldENyb3BwZXJJbWFnZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IHRoaXMuZmlsZVVwbG9hZENvbnRyb2wuZmlsZXNbMF07XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkRmlsZSkge1xyXG4gICAgICB0aGlzLmltYWdlRmlsZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAvLyBzZXQgYXMgYSB0ZW1wb3JhcnkgdmFsdWUgZm9yIHZhbGlkYXRpb24gc2luY2UgdGhlIHJlYWQgaXMgYXN5bmMuXHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9ICdwbGFjZWhvbGRlcic7XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZGVuZCA9IChsb2FkRXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlLnNyYyA9IGxvYWRFdmVudC50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICB0aGlzLmNyb3BwZXIuc2V0SW1hZ2UodGhpcy5pbWFnZUZpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLmltYWdlRmlsZS5zcmM7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGNyb3BwZXIgY29tcG9uZW50LiovXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQ3JvcHBlcigpIHtcclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzID0gbmV3IENyb3BwZXJTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLm5vRmlsZUlucHV0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy53aWR0aCA9IHRoaXMuY3JvcHBlclNldHRpbmdzLmNyb3BwZWRXaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLndpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLmhlaWdodCA9IHRoaXMuY3JvcHBlclNldHRpbmdzLmNyb3BwZWRIZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MuY2FudmFzV2lkdGggPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNXaWR0aDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MubWluV2lkdGggPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5taW5XaWR0aDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5taW5IZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5taW5IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3Mucm91bmRlZCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLnJvdW5kZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1pbmZvLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuICA8ZGl2IFtpbm5lckhUTUxdPVwiZmllbGQuaHRtbFNuaXBwZXQgfCB0cmFuc2xhdGVcIj48L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZvRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1pbnB1dC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8aW5wdXQgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImZpZWxkLmF1dG9Db21wbGV0ZVwiXHJcbiAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICBbdHlwZV09XCJmaWVsZC5maWVsZFR5cGVcIlxyXG4gICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgIFtwYXR0ZXJuXT1cImZpZWxkLnZhbGlkYXRpb24ucGF0dGVyblwiXHJcbiAgICAgICAgIFttYXhsZW5ndGhdPVwiZmllbGQudmFsaWRhdGlvbi5sZW5ndGhcIlxyXG4gICAgICAgICBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQuZGF0YS52YWx1ZX19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BpbnB1dC5mb3JtLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHBhdHRlcm4uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JQYXR0ZXJuOiBib29sZWFuID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW91c2VFdmVudCwgTWFwc0FQSUxvYWRlciB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IH0gZnJvbSAnZ29vZ2xlbWFwcyc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tYXAtbWFya2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWxvY2F0aW9uLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1sb2NhdGlvbi1jb250YWluZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8IS0tIGlucHV0ICYmIGRpc3BsYXkgLS0+XHJcbiAgICA8aW5wdXQgI3NlYXJjaFxyXG4gICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcclxuICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcblxyXG4gICAgPCEtLSBpY29uIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtbG9jYXRpb24taWNvblwiPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwiZmllbGQuZGVmYXVsdExvY2F0aW9uPy5sYXRpdHVkZVwiXHJcbiAgICAgICAgICAgW2xvbmdpdHVkZV09XCJmaWVsZC5kZWZhdWx0TG9jYXRpb24/LmxvbmdpdHVkZVwiXHJcbiAgICAgICAgICAgW3pvb21dPVwiZmllbGQuem9vbVwiXHJcbiAgICAgICAgICAgW3pvb21Db250cm9sXT1cImZpZWxkLnpvb21Db250cm9sXCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgKG1hcENsaWNrKT1cImFkZE1hcmtlcnMoJGV2ZW50KTt2YWxpZGF0ZSgpO1wiPlxyXG5cclxuICAgIDxhZ20tbWFya2VyICpuZ0Zvcj1cImxldCBtYXJrZXIgb2YgZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAobWFya2VyQ2xpY2spPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnbWFya2VyQ2xpY2snLCAkZXZlbnQsIG1hcmtlcik7XCJcclxuICAgICAgICAgICAgICAgIFtsYXRpdHVkZV09XCJtYXJrZXIubGF0aXR1ZGVcIlxyXG4gICAgICAgICAgICAgICAgW2xvbmdpdHVkZV09XCJtYXJrZXIubG9uZ2l0dWRlXCJcclxuICAgICAgICAgICAgICAgIFttYXJrZXJEcmFnZ2FibGVdPVwibWFya2VyLmRyYWdnYWJsZSAmJiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChkcmFnRW5kKT1cInVwZGF0ZU1hcmtlclBvc2l0aW9uKG1hcmtlciwgJGV2ZW50KVwiPlxyXG5cclxuICAgICAgPGFnbS1pbmZvLXdpbmRvdyAqbmdJZj1cIm1hcmtlci5pbmZvSHRtbFwiPlxyXG4gICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJtYXJrZXIuaW5mb0h0bWwgfCB0cmFuc2xhdGVcIj48L2Rpdj5cclxuICAgICAgPC9hZ20taW5mby13aW5kb3c+XHJcbiAgICA8L2FnbS1tYXJrZXI+XHJcbiAgPC9hZ20tbWFwPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BhZ20tbWFwe3dpZHRoOjEwMCU7aGVpZ2h0OjMwMHB4fXNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7Y29udGVudDpcIlxcXFxmMDAyXCI7Zm9udDoxNHB4LzIuNSBGb250QXdlc29tZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtjb2xvcjojNTU1fS5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIHNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7cmlnaHQ6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgc3Bhbi5zZWFyY2gtbG9jYXRpb24taWNvbjphZnRlcntsZWZ0OjVweH1pbnB1dC5mb3JtLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25GaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzZWFyY2ggZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1hcHNBUElMb2FkZXI6IE1hcHNBUElMb2FkZXIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIC8vIHNldCBhIG1hcCBmaWVsZCdzIGxvY2F0aW9uIHRvIHVzZSBkZWZhdWx0IGxvY2F0aW9uIGlmIG5vIHZhbHVlIGlzIHNldCBhbmQgbG9jYXRpb24gaXMgYXZhaWxhYmxlLlxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmRlZmF1bHRMb2NhdGlvbiB8fCAhdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24ubGF0aXR1ZGUgfHwgIXRoaXMuZmllbGQuZGVmYXVsdExvY2F0aW9uLmxvbmdpdHVkZSkge1xyXG4gICAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBmaWVsZCdzIHZhbHVlLlxyXG4gICAqIEBwYXJhbSBhbnkgbmV3VmFsdWUgVGhlIG5ldyBmaWVsZCB2YWx1ZS5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG5ld1ZhbHVlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbih2YWx1ZS5sYXRpdHVkZSwgdmFsdWUubG9uZ2l0dWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddLmxhdGl0dWRlJywgdmFsdWUubGF0aXR1ZGUpO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10ubG9uZ2l0dWRlJywgdmFsdWUubG9uZ2l0dWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGQgYSBtYXJrZXIgZnJvbSB0aGUgY2xpY2tlZCBtYXAgbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIE1vdXNlRXZlbnQgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAqL1xyXG4gIHB1YmxpYyBhZGRNYXJrZXJzKGV2ZW50QXJndW1lbnRzOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbihldmVudEFyZ3VtZW50cy5jb29yZHMubGF0LCBldmVudEFyZ3VtZW50cy5jb29yZHMubG5nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWN0aXZhdGVzIHRoZSBnb29nbGUgbWFwIGxvY2F0aW9uIHNlYXJjaC4qL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZVNlYXJjaElucHV0KCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRWxlbWVudCkge1xyXG4gICAgICAvLyBsb2FkIFBsYWNlcyBBdXRvY29tcGxldGVcclxuICAgICAgdGhpcy5tYXBzQVBJTG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLm1lcmdlZEZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSB0aGlzLnNlYXJjaEVsZW1lbnQubmF0aXZlRWxlbWVudC5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKHRoaXMuc2VhcmNoRWxlbWVudC5uYXRpdmVFbGVtZW50LCB7fSk7XHJcbiAgICAgICAgYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwbGFjZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgcGxhY2U6IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZVJlc3VsdCA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlc3VsdFxyXG4gICAgICAgICAgICBpZiAocGxhY2UuZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCB8fCBwbGFjZS5nZW9tZXRyeSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IGxhdGl0dWRlLCBsb25naXR1ZGUgYW5kIHpvb21cclxuICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG5cclxuICAgICAgICAgICAgZmllbGQuZGVmYXVsdExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiBsYXRpdHVkZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6IGxvbmdpdHVkZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmllbGQuem9vbSA9IDEyO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcclxuICAgICAgICAgICAgICBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcclxuICAgICAgICAgICAgICBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKSxcclxuICAgICAgICAgICAgICBmaWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmRyYWdnYWJsZSxcclxuICAgICAgICAgICAgICBmaWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmluZm9IdG1sXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE1hcmtlcnNGcm9tTG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZCBhIG1hcmtlciBmcm9tIHRoZSBjbGlja2VkIG1hcCBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0gbnVtYmVyIGxhdGl0dWRlIFRoZSBsYXRpdHVkZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIGxvbmdpdHVkZSBUaGUgbG9uZ2l0dWRlLlxyXG4gICovXHJcbiAgcHJpdmF0ZSBhZGRNYXJrZXJzRnJvbUxvY2F0aW9uKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCA+IDAgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXgpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmRyYWdnYWJsZSxcclxuICAgICAgICB0aGlzLmZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuaW5mb0h0bWxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG1hcmtlci5ldmVudFRyaWdnZXJzID0gdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmV2ZW50VHJpZ2dlcnM7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUucHVzaChtYXJrZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGUgdGhlIG1hcmtlcidzIHBvc2l0aW9uIHdoZW4gZHJhZyBpcyBkb25lLlxyXG4gICAqIEBwYXJhbSBNYXJrZXIgbWFya2VyIFRoZSBtYXJrZXIgdG8gdXBkYXRlLlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cyBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBNYXJrZXIsIGV2ZW50QXJndW1lbnRzOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBtYXJrZXIubGF0aXR1ZGUgPSBldmVudEFyZ3VtZW50cy5jb29yZHMubGF0O1xyXG4gICAgbWFya2VyLmxvbmdpdHVkZSA9IGV2ZW50QXJndW1lbnRzLmNvb3Jkcy5sbmc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRNYXNrIH0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbWFzay1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1pbnB1dE1hc2sgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgW21hc2tdPVwiZmllbGQudmFsaWRhdGlvbi5tYXNrXCJcclxuICAgICAgICAgICAgICAgW3Nsb3RDaGFyXT1cImZpZWxkLnNsb3RDaGFyXCJcclxuICAgICAgICAgICAgICAgW2F1dG9DbGVhcl09XCJmaWVsZC5hdXRvQ2xlYXJcIlxyXG4gICAgICAgICAgICAgICBbdW5tYXNrXT1cImZpZWxkLnVubWFza1wiXHJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgIFttYXhsZW5ndGhdPVwiZmllbGQudmFsaWRhdGlvbi5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICBbY2hhcmFjdGVyUGF0dGVybl09XCJmaWVsZC52YWxpZGF0aW9uLmNoYXJhY3RlclBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICBbcGF0dGVybl09XCJmaWVsZC52YWxpZGF0aW9uLnBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9wLWlucHV0TWFzaz5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZC5kYXRhLnZhbHVlfX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdmFsaWRhdGlvbiBzdW1tYXJ5IGNvbXBvbmVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoSW5wdXRNYXNrKSBpbnB1dE1hc2s6IElucHV0TWFzaztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciBwYXR0ZXJuLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUGF0dGVybjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgbWFzay5cclxuICAgKiBAcGFyYW0gbWFzayBjdXJyZW50IFRoZSBuZXcgbWFzay5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVNYXNrKG1hc2s6IGFueSkge1xyXG4gICAgdGhpcy5pbnB1dE1hc2suX21hc2sgPSBtYXNrO1xyXG5cclxuICAgIHRoaXMuaW5wdXRNYXNrLmluaXRNYXNrKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dE1hc2suaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dE1hc2suaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWx1ZS5cclxuICAgKiBAcGFyYW0gdmFsdWUgY3VycmVudCBUaGUgbmV3IHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZU1hc2tWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmlucHV0TWFzay53cml0ZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU3VtbWFyeU1vZGVzLCBTd2FsVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZW51bXMnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy12YWxpZGF0aW9uLXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjdmFsaWRhdGlvblN1bW1hcnlcclxuICAgICBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeS1jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnZhbGlkYXRpb25TdW1tYXJ5TW9kZSAhPSdMaXN0J1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJ2YWxpZGF0aW9uLXN1bW1hcnlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy52YWxpZGF0aW9uRXJyb3JzPy5sZW5ndGggPiAwXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeS10aXRsZS1zZWN0aW9uXCI+e3sndmFsaWRhdGlvbnMuVmFsaWRhdGlvblN1bW1hcnlFcnJvcnMnIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeS1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvciBvZiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AudmFsaWRhdGlvbi1zdW1tYXJ5e2JvcmRlcjoxcHggc29saWQgI2Q2ZDZkNjtwYWRkaW5nLXRvcDoxNXB4O2NvbG9yOnJlZDttYXJnaW4tYm90dG9tOjIwcHh9LnZhbGlkYXRpb24tc3VtbWFyeS10aXRsZS1zZWN0aW9ue2ZvbnQtd2VpZ2h0OjcwMDtwYWRkaW5nOjE1cHggMjBweDtkaXNwbGF5OmJsb2NrfS52YWxpZGF0aW9uLXN1bW1hcnktY29udGFpbmVye21hcmdpbi10b3A6MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHZhbGlkYXRpb24gc3VtbWFyeSBlbGVtZW50LiovXHJcbiAgQFZpZXdDaGlsZCgndmFsaWRhdGlvblN1bW1hcnknKSB2YWxpZGF0aW9uU3VtbWFyeUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNob3dzIHRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgYXMgYW4gYWxlcnQuKi9cclxuICBzaG93U3VtbWFyeUFsZXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNldHRpbmdzLnZhbGlkYXRpb25TdW1tYXJ5TW9kZSA9PT0gVmFsaWRhdGlvblN1bW1hcnlNb2Rlcy5BbGVydCkge1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgIGh0bWw6IHRoaXMudmFsaWRhdGlvblN1bW1hcnlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLFxyXG4gICAgICAgIHR5cGU6IFN3YWxUeXBlcy5XYXJuaW5nLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctc2VsZWN0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWRyb3Bkb3duIFtvcHRpb25zXT1cImZpZWxkLmRhdGEub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmllbGQuZW5hYmxlZmlsdGVyXCJcclxuICAgICAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNoYW5nZScsICRldmVudCwgZmllbGQpO1wiPlxyXG4gIDwvcC1kcm9wZG93bj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZD8uZGF0YT8udmFsdWU/Lm5hbWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYm9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWRyb3Bkb3duLXBhbmVsIC51aS1kcm9wZG93bi1pdGVte3RleHQtYWxpZ246cmlnaHR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1kcm9wZG93biAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLXRyaWdnZXJ7bGVmdDowO3JpZ2h0OnVuc2V0O2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNjtib3JkZXItbGVmdDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVse3BhZGRpbmctcmlnaHQ6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuaWQnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1yYWRpb2J1dHRvbi1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2IGNsYXNzPVwicmFkaW9CdXR0b25Ib2xkZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8cC1yYWRpb0J1dHRvbiAqbmdGb3I9XCJsZXQgcmFkaW9idXR0b24gb2YgZmllbGQuZGF0YS5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lKydfJytpXCJcclxuICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIiByYWRpb2J1dHRvbi5uYW1lIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyYWRpb2J1dHRvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DbGljaycsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO1wiPlxyXG4gICAgPC9wLXJhZGlvQnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkPy5kYXRhPy52YWx1ZX19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BwLXJhZGlvYnV0dG9ue2Rpc3BsYXk6YmxvY2t9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCb3VuZGFibGVGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1tdWx0aS1zZWxlY3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtbXVsdGlTZWxlY3QgW29wdGlvbnNdPVwiZmllbGQuZGF0YS5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgW2ZpbHRlclBsYWNlSG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmllbGQuZW5hYmxlZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgW2RlZmF1bHRMYWJlbF09XCJmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLW11bHRpU2VsZWN0PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQ/LmRhdGE/LnZhbHVlXCI+e3tpdGVtLm5hbWV9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCA6Om5nLWRlZXAgLnVpLW11bHRpc2VsZWN0LnVpLXdpZGdldHt3aWR0aDoxMDAlfTpob3N0IDo6bmctZGVlcCBwLW11bHRpc2VsZWN0IC51aS1tdWx0aXNlbGVjdC1sYWJlbC51aS1jb3JuZXItYWxse21hcmdpbi1ib3R0b206MDtoZWlnaHQ6MzVweH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lcntmbG9hdDpyaWdodH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QtaGVhZGVyIC51aS1tdWx0aXNlbGVjdC1jbG9zZXtyaWdodDp1bnNldDtsZWZ0Oi4zNzVlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QtcGFuZWwgLnVpLW11bHRpc2VsZWN0LWl0ZW17dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1tdWx0aXNlbGVjdCAudWktY29ybmVyLXJpZ2h0e2xlZnQ6MDtyaWdodDp1bnNldDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkNmQ2ZDY7Ym9yZGVyLWxlZnQ6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1tdWx0aXNlbGVjdCAudWktbXVsdGlzZWxlY3QtbGFiZWwudWktY29ybmVyLWFsbHtwYWRkaW5nLXJpZ2h0OjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddLmlkJywgdmFsdWUuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy10aW1lLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxudHctbWF0LXRpbWVwaWNrZXIgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXROYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5PXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyVmFsdWVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbKHVzZXJUaW1lKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAodXNlclRpbWVDaGFuZ2UpPVwic2V0VGltZVBpY2tlckZpZWxkVmFsdWUoJGV2ZW50KTt2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9udHctbWF0LXRpbWVwaWNrZXI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQ/LmRhdGE/LnZhbHVlPy5ob3VyfX06e3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1pbnV0ZX19XHJcbiAgICA8c3BhbiAqbmdJZj1cImZpZWxkPy5kYXRhPy52YWx1ZT8uZm9ybWF0ID09IDEyXCI+e3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1lcmlkZW4gfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IDo6bmctZGVlcCAudGltZS1waWNrZXItYnV0dG9uLm1hdC1idXR0b257cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjFweCBzb2xpZCAjMjM5OWU1O2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMjM5OWU1O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnM7aGVpZ2h0OjM1cHh9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgLnRpbWUtcGlja2VyLWJ1dHRvbi5tYXQtYnV0dG9ue3JpZ2h0OjE1cHh9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnRpbWUtcGlja2VyLWJ1dHRvbi5tYXQtYnV0dG9ue2xlZnQ6MTVweH06aG9zdCA6Om5nLWRlZXAgLnctbWF0LXRpbWVwaWNrZXIgLm1hdC1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtZmxhdC1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtaWNvbi1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtc3Ryb2tlZC1idXR0b257bGluZS1oZWlnaHQ6MzJweH06aG9zdCA6Om5nLWRlZXAgaW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQuc2V0VGltZSwgdGhpcy5maWVsZC5zZXRUaW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQuc2V0VGltZSwgdGhpcy5maWVsZC5zZXRUaW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5ob3VyJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmhvdXIpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5taW51dGUnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubWludXRlKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcubWVyaWRlbicsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5tZXJpZGVuKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuZm9ybWF0JywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgYSB0aW1lIHBpY2tlciBmaWVsZCdzIHZhbHVlIG9uY2UgaXQgaXMgY2hhbmdlZC5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0VGltZVBpY2tlckZpZWxkVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcmVjYXB0Y2hhLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxyZS1jYXB0Y2hhICNyZWNhcHRjaGFcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW3NpdGVLZXldPVwiZmllbGQuc2l0ZUtleVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGhlbWVdPVwiZmllbGQudGhlbWVcIlxyXG4gICAgICAgICAgICAgIFtzaXplXT1cImZpZWxkLnNpemVcIlxyXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAocmVzb2x2ZWQpPVwidmFsaWRhdGUoJGV2ZW50KTtcIj5cclxuICA8L3JlLWNhcHRjaGE+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSByZWNhcHRjaGEgZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3JlY2FwdGNoYScpIHJlY2FwdGNoYUVsZW1lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRoZSBmaWVsZCBpcyB2YWxpZC4qL1xyXG4gIHByaXZhdGUgaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybSBjb250cm9sIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHVibGljIHZhbGlkYXRlKGV2ZW50QXJndW1lbnRzPzogYW55LCBpc1N1Ym1pdD86IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLnByZVZhbGlkYXRlKGlzU3VibWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIWlzU3VibWl0KSB7XHJcbiAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldmVudEFyZ3VtZW50cyAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRUZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FwdGNoYSBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBzZXRDYXB0Y2hhTGFuZ3VnZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZWNhcHRjaGFFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNhcHRjaGFJRnJhbWUgPSB0aGlzLnJlY2FwdGNoYUVsZW1lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG5cclxuICAgICAgaWYgKGNhcHRjaGFJRnJhbWUpIHtcclxuICAgICAgICBjb25zdCBzcmMgPSBjYXB0Y2hhSUZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblxyXG4gICAgICAgIGNhcHRjaGFJRnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMucmVwbGFjZSgvaGw9KC4qPykmLywgJ2hsPScgKyBsYW5ndWFnZSArICcmJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXJhdGluZy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZD8uY3NzQ2xhc3Nlcz8ubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dCAmIGRpc3BsYXkgLS0+XHJcbiAgPHAtcmF0aW5nIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtzdGFyc109XCJmaWVsZC5zdGFyTnVtYmVyXCJcclxuICAgICAgICAgICAgW2ljb25DYW5jZWxDbGFzc109XCJmaWVsZC5pY29uQ2FuY2VsQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9uQ2xhc3NdPVwiZmllbGQuaWNvbk9uQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9mZkNsYXNzXT1cImZpZWxkLmljb25PZmZDbGFzc1wiXHJcbiAgICAgICAgICAgIFtjYW5jZWxdPVwiZmllbGQuY2FuY2VsSWNvbiAmJiAhZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAob25SYXRlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uUmF0ZScsICRldmVudCwgZmllbGQpO3ZhbGlkYXRlKCk7XCJcclxuICAgICAgICAgICAgKG9uQ2FuY2VsKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2FuY2VsJywgJGV2ZW50LCBmaWVsZCk7dmFsaWRhdGUoKTtcIj5cclxuICA8L3AtcmF0aW5nPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZmllbGQucmVhZG9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MpIHtcclxuICAgICAgdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MgPSAncGkgcGktIGJhbic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PbkNsYXNzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuaWNvbk9uQ2xhc3MgPSAncGkgcGktc3Rhcic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PZmZDbGFzcykge1xyXG4gICAgICB0aGlzLmZpZWxkLmljb25PZmZDbGFzcyA9ICdwaSBwaS1zdGFyLW8nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGVzLCBTd2FsVHlwZXMsIEZvcm1Nb2RlcywgUG9zdE1vZGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL211bHRpLXNlbGVjdC1maWVsZC9tdWx0aS1zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpcHNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9lZGl0b3ItZmllbGQvZWRpdG9yLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc2tGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2xvY2F0aW9uLWZpZWxkL2xvY2F0aW9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9maWxlLXVwbG9hZC1maWVsZC9maWxlLXVwbG9hZC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYXRpbmctZmllbGQvcmF0aW5nLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgUmVzcG9uc2VFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2UtZXZlbnQtYXJncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1keW5hbWljLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyXHJcbiAgICAgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8Zm9ybSBjbGFzcz1cImR5bmFtaWMtZm9ybS1mb3JtXCJcclxuICAgICAgICAjZj1cIm5nRm9ybVwiXHJcbiAgICAgICAgKG5nU3VibWl0KT1cInN1Ym1pdEZvcm0oZilcIlxyXG4gICAgICAgIFtoaWRkZW5dPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImR5bmFtaWMtZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMgc2VjdGlvbnMtdG9wXCJcclxuICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTG9jYXRpb24gPT0gJ1RvcCcgfHwgY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90aCdcIj5cclxuICAgICAgICA8IS0tIHNlY3Rpb24gdGFicyAtLT5cclxuICAgICAgICA8bnR3LXRhYnMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnVGFicydcIj48L250dy10YWJzLXNlY3Rpb24+XHJcblxyXG4gICAgICAgIDwhLS0gbmV4dCBwcmV2aW91cyAtLT5cclxuICAgICAgICA8bnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnTmV4dFByZXZpb3VzJ1wiPjwvbnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gZm9ybSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMud3JhcHBlclwiXHJcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY29uZmlndXJhdGlvbj8ubWVyZ2VkRmllbGRzXCI+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbmZvIC0tPlxyXG4gICAgICAgICAgPG50dy1pbmZvLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbmZvJ1wiPlxyXG4gICAgICAgICAgPC9udHctaW5mby1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRleHQgb3IgbnVtYmVyIG9yIHBhc3N3b3JkIC0tPlxyXG4gICAgICAgICAgPG50dy1pbnB1dC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihmaWVsZC5maWVsZFR5cGU9PSd0ZXh0JyB8fCBmaWVsZC5maWVsZFR5cGU9PSdudW1iZXInIHx8IGZpZWxkLmZpZWxkVHlwZT09J3Bhc3N3b3JkJylcIj5cclxuICAgICAgICAgIDwvbnR3LWlucHV0LWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gZHJvcGRvd24gbGlzdCAtLT5cclxuICAgICAgICAgIDxudHctc2VsZWN0LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGRhdGV0aW1lIHBpY2tlciAtLT5cclxuICAgICAgICAgIDxudHctZGF0ZXRpbWUtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdkYXRldGltZSdcIj5cclxuICAgICAgICAgIDwvbnR3LWRhdGV0aW1lLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gaGlqcmkgZGF0ZXRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy1kYXRldGltZS1oaWpyaS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2RhdGV0aW1laGlqcmknXCI+XHJcbiAgICAgICAgICA8L250dy1kYXRldGltZS1oaWpyaS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy10aW1lLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSd0aW1lJ1wiPlxyXG4gICAgICAgICAgPC9udHctdGltZS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoZWNrYm94IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LWNoZWNrYm94LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nY2hlY2tib3gnXCI+XHJcbiAgICAgICAgICA8L250dy1jaGVja2JveC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHJhZGlvYnV0dG9uIGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhZGlvYnV0dG9uLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ncmFkaW9idXR0b24nXCI+XHJcbiAgICAgICAgICA8L250dy1yYWRpb2J1dHRvbi1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIG11bHRpU2VsZWN0IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LW11bHRpLXNlbGVjdC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtdWx0aXNlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LW11bHRpLXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoaXBzIC0tPlxyXG4gICAgICAgICAgPG50dy1jaGlwcy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2NoaXBzJ1wiPlxyXG4gICAgICAgICAgPC9udHctY2hpcHMtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBlZGl0b3IgLS0+XHJcbiAgICAgICAgICA8bnR3LWVkaXRvci1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdlZGl0b3InXCI+XHJcbiAgICAgICAgICA8L250dy1lZGl0b3ItZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBtYXNrIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXNrLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXNrJ1wiPlxyXG4gICAgICAgICAgPC9udHctbWFzay1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGxvY2F0aW9uIC0tPlxyXG4gICAgICAgICAgPG50dy1sb2NhdGlvbi1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2xvY2F0aW9uJ1wiPlxyXG4gICAgICAgICAgPC9udHctbG9jYXRpb24tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBmaWxlIHVwbG9hZCAtLT5cclxuICAgICAgICAgIDxudHctZmlsZS11cGxvYWQtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdmaWxldXBsb2FkJ1wiPlxyXG4gICAgICAgICAgPC9udHctZmlsZS11cGxvYWQtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBSYXRpbmcgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhdGluZy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyYXRpbmcnXCI+XHJcbiAgICAgICAgICA8L250dy1yYXRpbmctZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSByZWNhcHRjaGEgLS0+XHJcbiAgICAgICAgICA8bnR3LXJlY2FwdGNoYS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyZWNhcHRjaGEnXCI+XHJcbiAgICAgICAgICA8L250dy1yZWNhcHRjaGEtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbWFnZSBjcm9wcGVyIC0tPlxyXG4gICAgICAgICAgPG50dy1pbWFnZS1jcm9wcGVyLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbWFnZWNyb3BwZXInXCI+XHJcbiAgICAgICAgICA8L250dy1pbWFnZS1jcm9wcGVyLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gbWFzdGVyZGV0YWlsIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXN0ZXItZGV0YWlsLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXN0ZXJkZXRhaWwnXCI+XHJcbiAgICAgICAgICA8L250dy1tYXN0ZXItZGV0YWlsLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG5cclxuICAgICAgPCEtLSB2YWxpZGF0aW9uIHN1bW1hcnkgLS0+XHJcbiAgICAgIDxudHctdmFsaWRhdGlvbi1zdW1tYXJ5PjwvbnR3LXZhbGlkYXRpb24tc3VtbWFyeT5cclxuXHJcbiAgICAgIDwhLS0gYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8uY3NzQ2xhc3NcIlxyXG4gICAgICAgICAgIGRhdGEtaHRtbDJjYW52YXMtaWdub3JlPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbi1idXR0b25zXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uY2xlYXIpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5jc3NDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZvcm0oZilcIj5cclxuICAgICAgICAgICAge3tjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVGb3JtKGYpXCI+XHJcbiAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdClcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py5jc3NDbGFzc1wiPlxyXG4gICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZGl0aW9uYWwtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/LmFkZGl0aW9uYWxCdXR0b25zXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImJ1dHRvbj8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJidXR0b24/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYnV0dG9uPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oYnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJidXR0b24/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ2NsaWNrJywgJGV2ZW50LCBidXR0b24pO1wiPlxyXG4gICAgICAgICAgICB7e2J1dHRvbj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9ucyBzZWN0aW9ucy1ib3R0b21cIlxyXG4gICAgICAgICAgICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90dG9tJyB8fCBjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbkxvY2F0aW9uID09ICdCb3RoJ1wiPlxyXG4gICAgICAgIDwhLS0gc2VjdGlvbiB0YWJzIC0tPlxyXG4gICAgICAgIDxudHctdGFicy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdUYWJzJ1wiPjwvbnR3LXRhYnMtc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPCEtLSBuZXh0IHByZXZpb3VzIC0tPlxyXG4gICAgICAgIDxudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdOZXh0UHJldmlvdXMnXCI+PC9udHctbmV4dC1wcmV2aW91cy1zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcblxyXG4gIDxudHctcHJvZ3Jlc3MtaW5kaWNhdG9yICpuZ0lmPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3Bpbm5lclNvdXJjZVVybF09XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc3Bpbm5lclNvdXJjZVVybFwiPjwvbnR3LXByb2dyZXNzLWluZGljYXRvcj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5mb3JtQnV0dG9uc3ttYXJnaW46MjBweCAwfWJvZHkuYXIgLm1haW4tYnV0dG9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH1ib2R5LmVuIC5tYWluLWJ1dHRvbnMgYnV0dG9ue21hcmdpbi1yaWdodDoxMHB4fWJvZHkuYXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9Ym9keS5lbntkaXJlY3Rpb246bHRyIWltcG9ydGFudDt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS51aS1kcm9wZG93bixpbnB1dC5mb3JtLWlucHV0LGlucHV0LnVpLWlucHV0dGV4dC51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdCxwLWRyb3Bkb3due3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDozNXB4fS5pbnB1dC1jb250YWluZXJ7bWFyZ2luLXRvcDoyNHB4fWxhYmVsLmZvcm0tbGFiZWx7Zm9udC13ZWlnaHQ6NzAwfXNwYW4ucmVxdWlyZWQtYXN0ZXJpc2t7Y29sb3I6cmVkfXAuZXJyb3IscC52YWxpZGF0aW9uLWVycm9ye2Rpc3BsYXk6YmxvY2s7Y29sb3I6cmVkfS5yZXN1bHQgaW1ne3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0uZm9ybS1kaXNwbGF5e2Rpc3BsYXk6YmxvY2t9dy1jbG9jayAqe2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fWBdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGUsIEJyaWRnZVNlcnZpY2UsIFV0aWxpdGllc1NlcnZpY2VdLFxyXG4gIC8vIHByb3ZpZGUgdGhlIGJyaWRnZSBzZXJ2aWNlIGhlcmUgaW4gb3JkZXIgdG8gaGF2ZSBhIGRpZmZlcmVudCBpbnN0YW5jZSBwZXIgZm9ybSBpbnN0YW5jZS5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY29uZmlndXJhdGlvbiBzb3VyY2UgdXJsLiovXHJcbiAgQElucHV0KCdjb25maWd1cmF0aW9uU291cmNlVXJsJykgY29uZmlndXJhdGlvblNvdXJjZVVybDogc3RyaW5nO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBwYXJlbnQgY29tcG9uZW50LiovXHJcbiAgQElucHV0KCdwYXJlbnRDb21wb25lbnQnKSBwYXJlbnRDb21wb25lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLiovXHJcbiAgQElucHV0KCdhZGRpdGlvbmFsUGFyYW1ldGVycycpIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uRm9ybUNsZWFyZWQgZXZlbnQuIFRyaWdnZXJlZCB3aGVuIHRoZSBmb3JtIGlzIGNsZWFyZWQuKi9cclxuICBAT3V0cHV0KCkgZm9ybUNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25Gb3JtRGF0YUJvdW5kIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgZm9ybSBpcyBkYXRhIGJvdW5kLiovXHJcbiAgQE91dHB1dCgpIGZvcm1EYXRhQm91bmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25CZWZvcmVGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc2F2ZWQuKi9cclxuICBAT3V0cHV0KCkgYmVmb3JlRm9ybVNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uQWZ0ZXJGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzYXZlZC4qL1xyXG4gIEBPdXRwdXQoKSBhZnRlckZvcm1TYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBvbkJlZm9yZUZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc3VibWl0dGVkLiovXHJcbiAgQE91dHB1dCgpIGJlZm9yZUZvcm1TdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25BZnRlckZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQuKi9cclxuICBAT3V0cHV0KCkgYWZ0ZXJGb3JtU3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZChWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCkgdmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQ6IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGlucHV0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKElucHV0RmllbGRDb21wb25lbnQpIGlucHV0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8SW5wdXRGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2Ygc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFNlbGVjdEZpZWxkQ29tcG9uZW50KSBzZWxlY3RGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZGF0ZXRpbWUgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRGF0ZXRpbWVGaWVsZENvbXBvbmVudCkgZGF0ZXRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBkYXRldGltZSBoaWpyaSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQpIGRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGNoZWNrYm94IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKENoZWNrYm94RmllbGRDb21wb25lbnQpIGNoZWNrYm94RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8Q2hlY2tib3hGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmFkaW8gYnV0dG9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQpIHJhZGlvYnV0dG9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8UmFkaW9idXR0b25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgbXVsdGkgc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQpIG11bHRpU2VsZWN0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgY2hpcHMgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ2hpcHNGaWVsZENvbXBvbmVudCkgY2hpcHNGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxDaGlwc0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBlZGl0b3IgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRWRpdG9yRmllbGRDb21wb25lbnQpIGVkaXRvckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVkaXRvckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBtYXNrIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE1hc2tGaWVsZENvbXBvbmVudCkgbWFza0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PE1hc2tGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgdGltZSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihUaW1lRmllbGRDb21wb25lbnQpIHRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUaW1lRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGxvY2F0aW9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKExvY2F0aW9uRmllbGRDb21wb25lbnQpIGxvY2F0aW9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TG9jYXRpb25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZmlsZSB1cGxvYWQgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50KSBmaWxlVXBsb2FkRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQpIGltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmVjYXB0Y2hhRmllbGRDb21wb25lbnQpIHJlY2FwdGNoYUZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmF0aW5nRmllbGRDb21wb25lbnQpIHJhdGluZ0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJhdGluZ0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBhbGwgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIHB1YmxpYyBmaWVsZENvbXBvbmVudHM6IEFycmF5PEZpZWxkQ29tcG9uZW50PiA9IG5ldyBBcnJheTxGaWVsZENvbXBvbmVudD4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbWFpbiBjb25maWd1cmF0aW9uIG9iamVjdC4qL1xyXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHNob3cgdGhlIHByb2dyZXNzIGluZGljYXRvci4qL1xyXG4gIHB1YmxpYyBzaG93UHJvZ3Jlc3NJbmRpY2F0b3I6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwUmVxdWVzdHNTZXJ2aWNlOiBIdHRwUmVxdWVzdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnM7XHJcblxyXG4gICAgdGhpcy5iaW5kRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgY2xlYXJGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5jbGVhclZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICB0aGlzLmZvcm1DbGVhcmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgc2F2ZUZvcm0oZm9ybTogTmdGb3JtKSB7XHJcbiAgICAvLyB0cmlnZ2VyIHJlY2FwdGNoYSB2YWxpZGF0aW9uIGlmIGV4aXN0cy5cclxuICAgIGZvciAoY29uc3QgcmVjYXB0Y2hhRmllbGRDb21wb25lbnRzIG9mIHRoaXMucmVjYXB0Y2hhRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICByZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudmFsaWRhdGUobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFJlcXVlc3RCb2R5KCk7XHJcblxyXG4gICAgICB0aGlzLmJlZm9yZUZvcm1TYXZlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnNhdmUsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5wb3N0KGVuZHBvaW50LCB2YWx1ZXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVNhdmVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZVN1Y2Nlc3NNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVTdWNjZXNzTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuU3VjY2VzcyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGV4Y2VwdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignc2F2ZUZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU2F2ZWQuZW1pdChuZXcgUmVzcG9uc2VFdmVudEFyZ3MoZmFsc2UsIGV4Y2VwdGlvbiwgdmFsdWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZUVycm9yTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU3VibWl0cyB0aGUgZm9ybS5cclxuICAqIEBwYXJhbSBOZ0Zvcm0gZm9ybSBUaGUgZm9ybS5cclxuICAqL1xyXG4gIHB1YmxpYyBzdWJtaXRGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0UmVxdWVzdEJvZHkoKTtcclxuXHJcbiAgICAgIHRoaXMuYmVmb3JlRm9ybVN1Ym1pdHRlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnN1Ym1pdCxcclxuICAgICAgICB0aGlzLnJvdXRlLFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVyc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5odHRwUmVxdWVzdHNTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIHZhbHVlcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLlN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N1Ym1pdEZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKGZhbHNlLCBleGNlcHRpb24sIHZhbHVlcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2hvd1Jlc3VsdE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zdWJtaXRFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0RXJyb3JNZXNzYWdlRGV0YWlscyksXHJcbiAgICAgICAgICAgIHR5cGU6IFN3YWxUeXBlcy5FcnJvcixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudC5zaG93U3VtbWFyeUFsZXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVGb3JtRmllbGRDb21wb25lbnQoZmllbGRDb21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgKi9cclxuICBwdWJsaWMgaXNGb3JtVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzIHx8IHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVxdWVzdCBib2R5LlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgcmVxdWVzdCBib2R5LlxyXG4gICovXHJcbiAgcHVibGljIGdldFJlcXVlc3RCb2R5KCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnBvc3RNb2RlID09PSBQb3N0TW9kZXMuRm9ybURhdGEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybURhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEZvcm1WYWx1ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZm9ybSBmaWVsZCB2YWx1ZXMuXHJcbiAgICogQHJldHVybiBhbnkgc291cmNlIFRoZSBmb3JtIHZhbHVlcy5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRGb3JtVmFsdWVzKCk6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChmaWVsZENvbXBvbmVudC5maWVsZC5kYXRhKSB7XHJcbiAgICAgICAgdmFsdWVzW2ZpZWxkQ29tcG9uZW50LmZpZWxkLm5hbWVdID0gZmllbGRDb21wb25lbnQuZ2V0VmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZvcm0gZmllbGQgdmFsdWVzLlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGdldEZvcm1EYXRhKCk6IEZvcm1EYXRhIHtcclxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBkYXRhID0gZmllbGRDb21wb25lbnQuYXBwZW5kRm9ybURhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlIGJ5IGl0cyBuYW1lLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZS5cclxuICAgKiBAcmV0dXJuIEZpZWxkQ29tcG9uZW50IFRoZSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlLlxyXG4gICovXHJcbiAgcHVibGljIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBGaWVsZENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZENvbXBvbmVudHMuZmluZChmYyA9PiBmYy5maWVsZC5uYW1lID09PSBuYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG91bGQgYmUgaGlkZGVuLlxyXG4gICAqIEBwYXJhbSBhbnkgYnV0dG9uIFRoZSBidXR0b24uXHJcbiAgICogQHJldHVybiBGaWVsZENvbXBvbmVudCBXaGV0aGVyIHRoZSBidXR0b24gc2hvdWxkIGJlIGhpZGRlbi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc0J1dHRvbkhpZGRlbihidXR0b246IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChidXR0b24gJiYgYnV0dG9uLmhpZGRlbikgfHwgKHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiAmJlxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24uaGlkZUJ1dHRvbnMgJiZcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmhpZGVCdXR0b25zLmluZGV4T2YoYnV0dG9uLm5hbWUpID4gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gYW55IGZvcm1EYXRhIFRoZSBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0Rm9ybURhdGEoZm9ybURhdGEpIHtcclxuICAgIGZvciAoY29uc3QgcmVzcG9uc2VGaWVsZCBvZiBmb3JtRGF0YS5maWVsZHMpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlRmllbGQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHJlc3BvbnNlRmllbGQubmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgZmllbGRDb21wb25lbnQudXBkYXRlVmFsdWUocmVzcG9uc2VGaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwcml2YXRlIGFzeW5jIGJpbmRGb3JtKCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICAgIC8vIHdvcmthcm91bmQgZm9yIGRhdGV0aW1lIGZpZWxkcy5cclxuICAgIGNvbnN0IGRhdGVGaWVsZHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLmZpbHRlcihmID0+IGYuZmllbGRUeXBlID09PSBGaWVsZFR5cGVzLkRhdGVUaW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGRhdGVGaWVsZHMpIHtcclxuICAgICAgdGhpcy5oYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5maWVsZENvbXBvbmVudHMgPSB0aGlzLmZpZWxkQ29tcG9uZW50cy5jb25jYXQoXHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnNlbGVjdEZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoZWNrYm94RmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5yYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoaXBzRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5lZGl0b3JGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLm1hc2tGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5maWxlVXBsb2FkRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5pbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnJlY2FwdGNoYUZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMucmF0aW5nRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5hY3RpdmF0ZVNlYXJjaElucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmZvcm1Nb2RlID09PSBGb3JtTW9kZXMuRGlzcGxheSkge1xyXG4gICAgICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5yZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudG9BcnJheSgpKSB7XHJcbiAgICAgICAgZmllbGRDb21wb25lbnQuc2V0Q2FwdGNoYUxhbmd1Z2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBjb25maWd1cmF0aW9uIGFzIGEgZ2V0IHJlcXVlc3Qgb3IgZnJvbSBsb2NhbCBzdG9yYWdlLiovXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlndXJhdGlvbigpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGF3YWl0IHRoaXMudXRpbGl0aWVzU2VydmljZS5sb2FkRmlsZSh0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2VVcmwpO1xyXG5cclxuICAgIC8vIGlmIGl0IGlzIGluIGxvY2FsLCByZWFkIHRoZSBhbHJlYWR5IG1lcmdlZCBmaWVsZHMuIG90aGVyd2lzZSwgbWVyZ2UgaXQgYW5kIHNhdmUgaW4gbG9jYWwgc3RvcmFnZS5cclxuICAgIGlmICghdGhpcy5jb25maWd1cmF0aW9uLmlzTG9jYWwpIHtcclxuICAgICAgLy8gbWVyZ2UgdGhlIGZvcm0ganNvbiBzY2hlbWEgZnJvbSB0aGUgZGlmZmVyZW50IHNvdXJjZSBwaWVjZXMuXHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc291cmNlRm9ybVNjaGVtYXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnNvdXJjZUZvcm1TY2hlbWFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc291cmNlRm9ybVNjaGVtYVVybCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zb3VyY2VGb3JtU2NoZW1hc1tpXTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGb3JtU2NoZW1hID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHNvdXJjZUZvcm1TY2hlbWFVcmwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5tZXJnZVJlY3Vyc2l2ZShzb3VyY2VGb3JtU2NoZW1hLCB0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWxsRmllbGRzID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UpO1xyXG5cclxuICAgICAgaWYgKCFhbGxGaWVsZHMuaXNMb2NhbCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UsIGFsbEZpZWxkcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMgPSBuZXcgQXJyYXk8RmllbGQ+KCk7XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgZmllbGQgcHJvcGVydGllcyB3aXRoIHRoZSBhbGwgZmllbGRzIGxpc3QuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmZpZWxkcy5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGaWVsZCA9IGFsbEZpZWxkcy5maWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcclxuXHJcbiAgICAgICAgICBpZiAoc291cmNlRmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkRmllbGQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UubWVyZ2VSZWN1cnNpdmUoc291cmNlRmllbGQsIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHNbZmllbGROYW1lXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLnB1c2gobWVyZ2VkRmllbGQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgZmllbGQgJHtmaWVsZE5hbWV9IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFsbC1maWVsZHMtbGlzdC5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvblNvdXJjZVVybCwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNlY3Rpb25zICYmIHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9uc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBhbGwgZmllbGRzJyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGZpZWxkQ29tcG9uZW50LmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGEgZGF0ZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuXHJcbiAgICogSXQgaXMgYnVnZ3kgaWYgZG9uZSBmcm9tIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbG9hZGVkLlxyXG4gICAqIEBwYXJhbSBGaWVsZCBmaWVsZCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZDogRmllbGQpIHtcclxuICAgIC8vIGluIGNhc2Ugb2YgZGF0ZXRpbWUgZmllbGQsIHBhcnNlIHRoZSB2YWx1ZXMgZnJvbSBzdHJpbmcgdG8gZGF0ZSBhbmQgZXhlY3V0ZSBhbnkgZnVuY3Rpb25zLlxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGUpIHtcclxuICAgICAgZmllbGQubWluRGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQubWluRGF0ZSwgbmV3IERhdGUoZmllbGQubWluRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5tYXhEYXRlKSB7XHJcbiAgICAgIGZpZWxkLm1heERhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLm1heERhdGUsIG5ldyBEYXRlKGZpZWxkLm1heERhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuZGF0YS5kYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLmRhdGEuZGF0ZVZhbHVlLCBuZXcgRGF0ZShmaWVsZC5kYXRhLmRhdGVWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5kZWZhdWx0RGF0ZSkge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0RGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQuZGVmYXVsdERhdGUsIG5ldyBEYXRlKGZpZWxkLmRlZmF1bHREYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGVWYWx1ZSAmJiBmaWVsZC5tYXhEYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQueWVhclJhbmdlID0gZmllbGQubWluRGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCkgKyAnOicgKyBmaWVsZC5tYXhEYXRlVmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZvcm0gZGF0YS4qL1xyXG4gIHByaXZhdGUgYmluZEZvcm1EYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5lbmRwb2ludHMuZ2V0KSB7XHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5nZXQsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoZW5kcG9pbnQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGb3JtRGF0YShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybURhdGFCb3VuZC5lbWl0KHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuICAgICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiaW5kRm9ybURhdGE6ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLmdldEVycm9yTWVzc2FnZVRpdGxlKSxcclxuICAgICAgICAgICAgaHRtbDogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5nZXRFcnJvck1lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLkVycm9yLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhQm91bmQuZW1pdChudWxsKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGZvcm0gZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBGaWVsZENvbXBvbmVudCBmaWVsZENvbXBvbmVudCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlRm9ybUZpZWxkQ29tcG9uZW50KGZpZWxkQ29tcG9uZW50OiBGaWVsZENvbXBvbmVudCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGxldCBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkQ29tcG9uZW50LmZpZWxkLmhpZGRlbikge1xyXG4gICAgICBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBmaWVsZENvbXBvbmVudC52YWxpZGF0ZShudWxsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIGR5bmFtaWMgZXZlbnQgaW4gY2FzZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZXZlbnRUeXBlIFRoZSB0eXBlIG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICAqIEBwYXJhbSBhbnkgc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHRyaWdnZXJEeW5hbWljRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50QXJndW1lbnRzOiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAoc291cmNlLmV2ZW50VHJpZ2dlcnMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBzb3VyY2UuZXZlbnRUcmlnZ2Vyc1tldmVudFR5cGVdO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24gPSB0aGlzLnBhcmVudENvbXBvbmVudFtldmVudF07XHJcblxyXG4gICAgICBpZiAocGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgICAgICBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbih0aGlzLnBhcmVudENvbXBvbmVudCwgc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmllbGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPG1hdC1kaWFsb2ctYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWRpYWxvZy1jbG9zZSBtYXQtYnV0dG9uPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCJcclxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XHJcblxyXG48bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgPG50dy1keW5hbWljLWZvcm0gI2RldGFpbHNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50Q29tcG9uZW50XT1cInRoaXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ3VyYXRpb25Tb3VyY2VVcmxdPVwiZmllbGQuZGV0YWlscy5jb25maWd1cmF0aW9uU291cmNlVXJsXCI+XHJcbiAgICA8L250dy1keW5hbWljLWZvcm0+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJlZmVyZW5jZSB0byB0aGUgZGV0YWlscyBkeW5hbWljIGZvcm0gY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZCgnZGV0YWlsc0Zvcm0nKSBkZXRhaWxzRm9ybUNvbXBvbmVudDogRHluYW1pY0Zvcm1Db21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHVibGljIGZpZWxkOiBGaWVsZFxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGNoaWxkIGFuZCBjbG9zZXMgdGhlIGRpYWxvZy5cclxuICAgKiBAcGFyYW0gRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQgY3VycmVudCBUaGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgZGVmYXVsdCBtYXN0ZXIgZGV0YWlsIGZvcm0gY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBhbnkgdHJpZ2dlcmluZ0ZpZWxkIFRoZSBmaWVsZCB0cmlnZ2VyaW5nIHRoZSBhY3Rpb24uXHJcbiAgKi9cclxuICBhZGRDaGlsZChjdXJyZW50OiBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCwgdHJpZ2dlcmluZ0ZpZWxkOiBhbnkpIHtcclxuICAgIC8vY3VycmVudC5kZXRhaWxzRm9ybUNvbXBvbmVudC52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICAvL2lmIChjdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICBjb25zdCB2YWx1ZXMgPSBjdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LmdldEZvcm1WYWx1ZXMoKTtcclxuXHJcbiAgICAvLyAgY3VycmVudC5kaWFsb2dSZWYuY2xvc2UodmFsdWVzKTtcclxuICAgIC8vfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Zvcm0tcGFydC10ZW1wbGF0ZXMvZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0vZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbWFzdGVyLWRldGFpbC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2PlxyXG4gICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICAoY2xpY2spPVwib3BlbkRpYWxvZygpO1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuXHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgZGV0YWlscyBkaWFsb2cuKi9cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGV0YWlsc0RpYWxvZyA9IHRoaXMuZGlhbG9nLm9wZW4oRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsIHtcclxuICAgICAgZGF0YTogdGhpcy5maWVsZFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGV0YWlsc0RpYWxvZy5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuZXh0LXByZXYtY29udGFpbmVyXCI+XHJcbiAgPGEgY2xhc3M9XCJhcnJvdy1wcmV2XCJcclxuICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAoY2xpY2spPVwiaW5jcmVtZW50U2VjdGlvbigtMSlcIlxyXG4gICAgIHRpdGxlPVwie3snYnV0dG9ucy5QcmV2aW91cycgfCB0cmFuc2xhdGV9fVwiPlxyXG4gIDwvYT5cclxuICA8c3BhbiBjbGFzcz1cIm5leHQtcHJldi1oZWFkZXJcIj57e2JyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbj8uY3VycmVudFNlY3Rpb24/LmxlZ2VuZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gIDxhIGNsYXNzPVwiYXJyb3ctbmV4dFwiXHJcbiAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgKGNsaWNrKT1cImluY3JlbWVudFNlY3Rpb24oMSlcIlxyXG4gICAgIHRpdGxlPVwie3snYnV0dG9ucy5OZXh0JyB8IHRyYW5zbGF0ZX19XCI+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm5leHQtcHJldi1jb250YWluZXIgYXt0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnR9Lm5leHQtcHJldi1jb250YWluZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lm5leHQtcHJldi1oZWFkZXJ7Zm9udC1zaXplOjJlbTtmb250LXdlaWdodDo3MDB9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1wcmV2OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDRcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDVcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0e2Zsb2F0OnJpZ2h0fWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldntmbG9hdDpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldjpiZWZvcmV7Y29udGVudDpcIlxcXFxmMTA1XCI7Zm9udDozZW0vMSBGb250QXdlc29tZTtjb2xvcjojNTU1NTY1fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctbmV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxmMTA0XCI7Zm9udDozZW0vMSBGb250QXdlc29tZTtjb2xvcjojNTU1NTY1fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctbmV4dHtmbG9hdDpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldntmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ3ljbGVzIHRocm91Z2ggdGhlIHNlY3Rpb25zLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgaW5jcmVtZW50IFRoZSBpbmNyZW1lbnQuXHJcbiAgKi9cclxuICBwdWJsaWMgaW5jcmVtZW50U2VjdGlvbihpbmNyZW1lbnQ6IG51bWJlcikge1xyXG4gICAgbGV0IG5ld1NlY3Rpb25JZCA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmlkICsgaW5jcmVtZW50O1xyXG5cclxuICAgIGlmIChuZXdTZWN0aW9uSWQgPT09IDApIHtcclxuICAgICAgbmV3U2VjdGlvbklkID0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChuZXdTZWN0aW9uSWQgPT09IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmxlbmd0aCArIDEpIHtcclxuICAgICAgbmV3U2VjdGlvbklkID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmZpbmQocyA9PiBzLmlkID09PSBuZXdTZWN0aW9uSWQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9zZWN0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXRhYnMtc2VjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICA8bGkgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2YgYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2VjdGlvbnNcIlxyXG4gICAgICBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCJcclxuICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOnNlY3Rpb24uaWQ9PWJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LmN1cnJlbnRTZWN0aW9uPy5pZH1cIlxyXG4gICAgICAgKGNsaWNrKT1cInN3aXRjaFNlY3Rpb24oc2VjdGlvbilcIj5cclxuICAgICAgPHNwYW4+e3tzZWN0aW9uLmxlZ2VuZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JzLWNvdW50XCJcclxuICAgICAgICAgICAgKm5nSWY9XCJzZWN0aW9uLnZhbGlkYXRpb25FcnJvcnNDb3VudCA+IDBcIj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzU2VjdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU3dpdGNoZXMgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAqIEBwYXJhbSBTZWN0aW9uIHNlY3Rpb24gVGhlIG5ldyBhY3RpdmUgc2VjdGlvbi5cclxuICAqL1xyXG4gIHB1YmxpYyBzd2l0Y2hTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24pIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcHJvZ3Jlc3MtaW5kaWNhdG9yJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1pbmRpY2F0b3ItY29udGFpbmVyXCJcclxuICAgICAqbmdJZj1cInNwaW5uZXJTb3VyY2VVcmxcIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtaW5kaWNhdG9yXCI+XHJcbiAgICA8aW1nIFtzcmNdPVwic3Bpbm5lclNvdXJjZVVybFwiXHJcbiAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3MtaW5kaWNhdG9yLWltYWdlXCJcclxuICAgICAgICAgYWx0PVwicHJvZ3Jlc3NcIiAvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzcGlubmVyIHNvdXJjZSB1cmwuKi9cclxuICBASW5wdXQoJ3NwaW5uZXJTb3VyY2VVcmwnKSBzcGlubmVyU291cmNlVXJsOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhQ29tbW9uTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhL3JlY2FwdGNoYS9yZWNhcHRjaGEtY29tbW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlY2FwdGNoYU1vZHVsZSB9IGZyb20gJ25nLXJlY2FwdGNoYS9yZWNhcHRjaGEvcmVjYXB0Y2hhLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhbGVuZGFyJztcclxuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NoZWNrYm94JztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3JhZGlvYnV0dG9uJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL211bHRpc2VsZWN0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IENoaXBzTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGlwcyc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZWRpdG9yJztcclxuaW1wb3J0IHsgSW5wdXRNYXNrTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZzItaW1nLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBSYXRpbmdNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JhdGluZyc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHtcclxuICBNYXREaWFsb2dNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZSxcclxuICBNYXRCdXR0b25Nb2R1bGUsIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLFxyXG4gIE1hdFNlbGVjdE1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IFdNYXRUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LW1hdC10aW1lcGlja2VyL3ctbWF0LXRpbWVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV1RpbWVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS1kaWFsb2cvdy10aW1lLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXQ2xvY2tDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctY2xvY2svdy1jbG9jay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXVGltZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lL3ctdGltZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2lucHV0LWZpZWxkL2lucHV0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWZpZWxkL2RhdGV0aW1lLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtaGlqcmktZmllbGQvZGF0ZXRpbWUtaGlqcmktZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmFkaW9idXR0b24tZmllbGQvcmFkaW9idXR0b24tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbXVsdGktc2VsZWN0LWZpZWxkL211bHRpLXNlbGVjdC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGlwc0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZWRpdG9yLWZpZWxkL2VkaXRvci1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXNrRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL21hc2stZmllbGQvbWFzay1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9sb2NhdGlvbi1maWVsZC9sb2NhdGlvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2ZpbGUtdXBsb2FkLWZpZWxkL2ZpbGUtdXBsb2FkLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZm9GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW5mby1maWVsZC9pbmZvLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc3RlckRldGFpbEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXN0ZXItZGV0YWlsLWZpZWxkL21hc3Rlci1kZXRhaWwtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2ltYWdlLWNyb3BwZXItZmllbGQvaW1hZ2UtY3JvcHBlci1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmF0aW5nLWZpZWxkL3JhdGluZy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgVGFic1NlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy90YWJzLXNlY3Rpb24vdGFicy1zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5leHRQcmV2aW91c1NlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9uZXh0LXByZXZpb3VzLXNlY3Rpb24vbmV4dC1wcmV2aW91cy1zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvdmFsaWRhdGlvbi1zdW1tYXJ5L3ZhbGlkYXRpb24tc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3Byb2dyZXNzLWluZGljYXRvci9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV1RpbWVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBXQ2xvY2tDb21wb25lbnQsXHJcbiAgICBXVGltZUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQm91bmRhYmxlRmllbGRDb21wb25lbnQsXHJcbiAgICBJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hGaWVsZENvbXBvbmVudCxcclxuICAgIFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQsXHJcbiAgICBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hpcHNGaWVsZENvbXBvbmVudCxcclxuICAgIEVkaXRvckZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFza0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgTG9jYXRpb25GaWVsZENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCxcclxuICAgIFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5mb0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCxcclxuICAgIFJhdGluZ0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGFic1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBOZXh0UHJldmlvdXNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LFxyXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIElucHV0VGV4dE1vZHVsZSxcclxuICAgIENhbGVuZGFyTW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBSYWRpb0J1dHRvbk1vZHVsZSxcclxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGUsXHJcbiAgICBJbnB1dE1hc2tNb2R1bGUsXHJcbiAgICBDaGlwc01vZHVsZSxcclxuICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXHJcbiAgICBSYXRpbmdNb2R1bGUsXHJcbiAgICBSZWNhcHRjaGFDb21tb25Nb2R1bGUsXHJcbiAgICBSZWNhcHRjaGFNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgbG9hZGVyOiB7XHJcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6IEh0dHBMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGFwaUtleTogJ0FJemFTeURrazRtQVkxcjVRLWFidXg1UE9Dc2NUUjBMb2pXTXdVbycsXHJcbiAgICAgIGxpYnJhcmllczogWydwbGFjZXMnXSxcclxuICAgICAgcmVnaW9uOiAnTEInLFxyXG4gICAgICBsYW5ndWFnZTogJ2VuJ1xyXG4gICAgfSlcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsXHJcbiAgICBXTWF0VGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdUaW1lRGlhbG9nQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBXTWF0VGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdUaW1lRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgV0Nsb2NrQ29tcG9uZW50LFxyXG4gICAgV1RpbWVDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudCxcclxuICAgIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCxcclxuICAgIERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCxcclxuICAgIENoZWNrYm94RmllbGRDb21wb25lbnQsXHJcbiAgICBSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCxcclxuICAgIENoaXBzRmllbGRDb21wb25lbnQsXHJcbiAgICBFZGl0b3JGaWVsZENvbXBvbmVudCxcclxuICAgIE1hc2tGaWVsZENvbXBvbmVudCxcclxuICAgIFRpbWVGaWVsZENvbXBvbmVudCxcclxuICAgIExvY2F0aW9uRmllbGRDb21wb25lbnQsXHJcbiAgICBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQsXHJcbiAgICBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCxcclxuICAgIEluZm9GaWVsZENvbXBvbmVudCxcclxuICAgIE1hc3RlckRldGFpbEZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQsXHJcbiAgICBSYXRpbmdGaWVsZENvbXBvbmVudCxcclxuICAgIFRhYnNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCxcclxuICAgIFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCxcclxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV0d2F5c0xpYk1vZHVsZSB7IH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIdHRwTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIlhMU1gudXRpbHMiLCJYTFNYLndyaXRlRmlsZSIsIkZpbGVTYXZlci5zYXZlQXMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFlRTtLQUFpQjs7Z0JBWGxCLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O3dCQUpsQzs7Ozs7Ozs7QUNHQSxJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEQsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUNqSCxXQUFXLEVBQUUsVUFBVSxDQUFDO0NBQzNCLENBQUM7O0lBRytCQSwrQkFBaUI7Ozs7Ozs7OztJQUt6Qyx5Q0FBbUI7Ozs7O2NBQUMsT0FBZTtRQUN4QyxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBT3BDLHVDQUFpQjs7Ozs7Y0FBQyxLQUFhO1FBQ3BDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7SUFPaEMs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