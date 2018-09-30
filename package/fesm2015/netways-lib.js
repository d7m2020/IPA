import { Injectable, NgModule, Component, ViewChild, Optional, Input, NgZone, Inject, ChangeDetectorRef, Output, EventEmitter, defineInjectable, inject, ViewEncapsulation, ViewChildren } from '@angular/core';
import { NgbDatepickerI18n, NgbCalendar, NgbCalendarIslamicUmalqura, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { utils, writeFile } from 'xlsx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { __awaiter } from 'tslib';
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
class BridgeService {
    constructor() { }
}
BridgeService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
BridgeService.ctorParameters = () => [];
/** @nocollapse */ BridgeService.ngInjectableDef = defineInjectable({ factory: function BridgeService_Factory() { return new BridgeService(); }, token: BridgeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const I18N_VALUES = {
    weekdays: ['إث', 'ثل', 'أر', 'خم', 'جم', 'سب', 'أح'],
    months: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
        'ذو القعدة', 'ذو الحجة']
};
class IslamicI18n extends NgbDatepickerI18n {
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
/** @nocollapse */ IslamicI18n.ngInjectableDef = defineInjectable({ factory: function IslamicI18n_Factory() { return new IslamicI18n(); }, token: IslamicI18n, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const excelExtension = '.xlsx';
/** @type {?} */
const pdfType = 'application/pdf';
/** @type {?} */
const pdfExtension = '.pdf';
class ExportService {
    constructor() { }
    /**
     * \@description Exports a json object as an excel file.
     * @param {?} json
     * @param {?} fileName
     * @param {?=} rtl
     * @param {?=} skipHeader
     * @return {?}
     */
    exportAsExcel(json, fileName, rtl = true, skipHeader = false) {
        /** @type {?} */
        const worksheet = utils.json_to_sheet(json, { skipHeader: skipHeader });
        /** @type {?} */
        const workbook = utils.book_new();
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
    }
    /**
     * \@description Exports an html string as pdf.
     * @param {?} html
     * @param {?} fileName
     * @param {?=} size
     * @param {?=} margins
     * @return {?}
     */
    exportAsPdf(html, fileName, size = 'A4', margins = [0, 0]) {
        if (html) {
            html2canvas(html).then(canvas => {
                /** @type {?} */
                const dataUri = canvas.toDataURL();
                /** @type {?} */
                const docDefinition = {
                    pageSize: size,
                    pageMargins: margins,
                    content: [
                        {
                            image: dataUri
                        }
                    ]
                };
                pdfMake.createPdf(docDefinition).getBlob((file) => {
                    this.promptFileSave(file, pdfType, fileName, pdfExtension);
                });
            });
        }
    }
    /**
     * \@description Exports a file as pdf.
     * @param {?} buffer
     * @param {?} fileType
     * @param {?} fileName
     * @param {?} fileExtension
     * @return {?}
     */
    promptFileSave(buffer, fileType, fileName, fileExtension) {
        /** @type {?} */
        const data = new Blob([buffer], {
            type: fileType
        });
        saveAs(data, fileName + '_' + new Date().getTime() + fileExtension);
    }
}
ExportService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
ExportService.ctorParameters = () => [];
/** @nocollapse */ ExportService.ngInjectableDef = defineInjectable({ factory: function ExportService_Factory() { return new ExportService(); }, token: ExportService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HttpRequestsService {
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
/** @nocollapse */ HttpRequestsService.ngInjectableDef = defineInjectable({ factory: function HttpRequestsService_Factory() { return new HttpRequestsService(inject(HttpClient)); }, token: HttpRequestsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocalStorageService {
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
/** @nocollapse */ LocalStorageService.ngInjectableDef = defineInjectable({ factory: function LocalStorageService_Factory() { return new LocalStorageService(); }, token: LocalStorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LanguageService {
    /**
     * @param {?} translate
     * @param {?} localStorage
     */
    constructor(translate, localStorage) {
        this.translate = translate;
        this.localStorage = localStorage;
        /**
         * \@property The saved language.
         */
        this.savedLanguage = this.localStorage.loadOrDefault('Language', 'en');
        this.translate.onLangChange.subscribe((event) => {
            this.setLanguage(event.lang);
            this.translations = event.translations;
        });
    }
    /**
     * \@description Sets the language.
     * @param {?} language
     * @return {?}
     */
    setLanguage(language) {
        this.translate.use(language);
        this.savedLanguage = language;
        this.localStorage.save('Language', language);
    }
    /**
     * \@description Gets the language.
     * @return {?}
     */
    getLanguage() {
        return this.localStorage.loadOrDefault('Language', 'en');
    }
}
LanguageService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    { type: TranslateService },
    { type: LocalStorageService }
];
/** @nocollapse */ LanguageService.ngInjectableDef = defineInjectable({ factory: function LanguageService_Factory() { return new LanguageService(inject(TranslateService), inject(LocalStorageService)); }, token: LanguageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const functionToken = 'Function:';
/** @type {?} */
const spaceRegex = /\+/g;
/** @type {?} */
const queryStringRegex = /([^&=]+)=?([^&]*)/g;
class UtilitiesService {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/** @nocollapse */ UtilitiesService.ngInjectableDef = defineInjectable({ factory: function UtilitiesService_Factory() { return new UtilitiesService(inject(BridgeService), inject(HttpRequestsService), inject(LocalStorageService), inject(LanguageService)); }, token: UtilitiesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AllFields {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Configuration {
    constructor() {
        this.isLocal = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DefaultLocation {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Endpoints {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FormModes {
}
FormModes.New = 'New';
FormModes.Display = 'Display';
FormModes.Edit = 'Edit';
class ValidationSummaryModes {
}
ValidationSummaryModes.None = 'None';
ValidationSummaryModes.Alert = 'Alert';
ValidationSummaryModes.List = 'List';
class SectionModes {
}
SectionModes.None = 'None';
SectionModes.Tabs = 'Tabs';
SectionModes.NextPrevious = 'NextPrevious';
class PostModes {
}
PostModes.FormData = 'FormData';
PostModes.FormBody = 'FormBody';
class SwalTypes {
}
SwalTypes.Warning = 'warning';
SwalTypes.Error = 'error';
SwalTypes.Success = 'success';
SwalTypes.Info = 'info';
SwalTypes.Question = 'question';
class FieldTypes {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Field {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FieldData {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FieldValidation {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputError {
    /**
     * @param {?} type
     * @param {?} message
     */
    constructor(type, message) {
        this.type = type;
        this.message = message;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Marker {
    /**
     * @param {?} latitude
     * @param {?} longitude
     * @param {?} draggable
     * @param {?=} infoHtml
     */
    constructor(latitude, longitude, draggable, infoHtml) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.draggable = draggable;
        this.infoHtml = infoHtml;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MarkerSettings {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MarkerSettingsDefault {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MasterDetailDetails {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Notifications {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Section {
    /**
     * @param {?} id
     * @param {?} name
     * @param {?} legend
     * @param {?} isActive
     */
    constructor(id, name, legend, isActive) {
        this.id = id;
        this.name = name;
        this.legend = legend;
        this.isActive = isActive;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Settings {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResponseEventArgs {
    /**
     * @param {?} isSuccess
     * @param {?} response
     * @param {?} payload
     */
    constructor(isSuccess, response, payload) {
        this.isSuccess = isSuccess;
        this.response = response;
        this.payload = payload;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const CLOCK_TYPE = {
    HOURS: 1,
    MINUTES: 2,
};
CLOCK_TYPE[CLOCK_TYPE.HOURS] = 'HOURS';
CLOCK_TYPE[CLOCK_TYPE.MINUTES] = 'MINUTES';
class WClockComponent {
    constructor() {
        this.userTimeChange = new EventEmitter();
        this.viewChange = new EventEmitter();
        this.steps = new Array();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setupUI();
    }
    /**
     * @return {?}
     */
    setupUI() {
        this.steps = new Array();
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                for (let i = 1; i <= this.userTime.format; i++) {
                    this.steps.push(i);
                    this.selectedTimePart = this.userTime.hour || 0;
                    if (this.selectedTimePart > this.userTime.format) {
                        this.selectedTimePart -= this.userTime.format;
                    }
                }
                break;
            case CLOCK_TYPE.MINUTES:
                for (let i = 5; i <= 55; i += 5) {
                    this.steps.push(i);
                }
                this.steps.push(0);
                this.selectedTimePart = this.userTime.minute || 0;
                break;
        }
    }
    /**
     * @return {?}
     */
    getPointerStyle() {
        /** @type {?} */
        let divider = 1;
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                divider = this.userTime.format;
                break;
            case CLOCK_TYPE.MINUTES:
                divider = 60;
                break;
        }
        /** @type {?} */
        let degrees = 0;
        if (this.currentView === CLOCK_TYPE.HOURS) {
            degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
        }
        else {
            degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
        }
        /** @type {?} */
        const style = {
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        };
        return style;
    }
    /**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    getTimeValueClass(step, index) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.STEP_DEG = 360 / this.userTime.format;
        }
        else {
            this.STEP_DEG = 360 / 12;
        }
        /** @type {?} */
        let classes = 'w-clock-step w-clock-deg' + (this.STEP_DEG * (index + 1));
        if (this.selectedTimePart === step) {
            classes += ' mat-primary';
        }
        return classes;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    changeTimeValue(step) {
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
    }
}
WClockComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-clock',
                styles: [`.w-clock-wrapper{height:100%;padding:0 24px}.w-clock-wrapper .w-clock{width:200px;height:200px;border-radius:50%;cursor:pointer;padding:24px;background:#ededed}.w-clock-wrapper .w-clock .w-clock-container{width:100%;height:100%;position:relative;display:block}.w-clock-wrapper .w-clock .w-clock-center{height:6px;width:6px;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:50%}.w-clock-wrapper .w-clock .w-pointer{box-shadow:none;width:1px;height:50%;position:absolute;left:0;right:0;bottom:0;margin:0 auto;padding:0;-webkit-transform-origin:top center;transform-origin:top center;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;z-index:0;pointer-events:none}.w-clock-wrapper .w-clock .w-clock-step{display:block;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.w-clock-wrapper .w-clock .w-clock-step .mat-mini-fab{box-shadow:none;background-color:transparent}.w-clock-wrapper .w-clock .w-clock-selected{position:absolute;bottom:-19px;left:-19px;min-width:0;min-height:0;pointer-events:none;box-shadow:none;cursor:none}.w-clock-deg0{top:0;left:50%}.w-clock-deg15{top:1.70370869%;left:62.94095226%}.w-clock-deg30{top:6.69872981%;left:75%}.w-clock-deg45{top:14.64466094%;left:85.35533905%}.w-clock-deg60{top:25%;left:93.30127019%}.w-clock-deg75{top:37.05904774%;left:98.29629131%}.w-clock-deg90{top:50%;left:100%}.w-clock-deg105{top:62.94095226%;left:98.29629131%}.w-clock-deg120{top:75%;left:93.30127019%}.w-clock-deg135{top:85.35533906%;left:85.35533906%}.w-clock-deg150{top:93.30127019%;left:75%}.w-clock-deg165{top:98.29629131%;left:62.94095226%}.w-clock-deg180{top:100%;left:50%}.w-clock-deg195{top:98.29629131%;left:37.05904774%}.w-clock-deg210{top:93.30127019%;left:25%}.w-clock-deg225{top:85.35533906%;left:14.64466094%}.w-clock-deg240{top:75%;left:6.69872981%}.w-clock-deg255{top:62.94095226%;left:1.703708686%}.w-clock-deg270{top:50%;left:0}.w-clock-deg285{top:37.05904774%;left:1.703708686%}.w-clock-deg300{top:25%;left:6.69872981%}.w-clock-deg315{top:14.64466094%;left:14.64466094%}.w-clock-deg330{top:6.69872981%;left:25%}.w-clock-deg345{top:1.703708686%;left:37.05904774%}.w-clock-deg360{top:0;left:50%}`],
                template: `<div fxLayout="row"
     fxLayoutAlign="center center"
     class="w-clock-wrapper">
  <div class="w-clock">
    <div class="w-clock-container">

      <!-- Clock center -->
      <button mat-mini-fab
              [color]="color"
              class="w-clock-center"></button>

      <!-- Clock hand -->
      <mat-toolbar [ngStyle]="getPointerStyle()"
                   [color]="color"
                   class="w-pointer">
        <button mat-mini-fab
                [color]="color"
                class="w-clock-selected"></button>
      </mat-toolbar>

      <!-- Hour / Minute number faces -->
      <div *ngFor="let step of steps; let i = index"
           [class]="getTimeValueClass(step, i)">
        <button mat-mini-fab
                [color]="selectedTimePart === step ? color : ''"
                (click)="changeTimeValue(step)">
          {{ step }}
        </button>
      </div>

    </div>
  </div>
</div>
`
            },] },
];
WClockComponent.propDecorators = {
    userTime: [{ type: Input }],
    userTimeChange: [{ type: Output }],
    currentView: [{ type: Input }],
    viewChange: [{ type: Output }],
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WTimeDialogComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     */
    constructor(data, dialogRef) {
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
    revert() {
        this.dialogRef.close(-1);
    }
    /**
     * @return {?}
     */
    submit() {
        this.dialogRef.close(this.userTime);
    }
}
WTimeDialogComponent.decorators = [
    { type: Component, args: [{
                styles: [`.w-timepicker-dialog{padding:0;margin:-24px;width:calc(100% + 48px)}`],
                template: `<div mat-dialog-content class="w-timepicker-dialog">
  <ntw-time [color]="color" [userTime]="userTime" (reverted)="revert()" (submitted)="submit()"></ntw-time>
</div>
`
            },] },
];
/** @nocollapse */
WTimeDialogComponent.ctorParameters = () => [
    { type: UserTimeData, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef }
];
class UserTimeData {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WMatTimePickerComponent {
    /**
     * @param {?} dialog
     * @param {?} translatePipe
     */
    constructor(dialog, translatePipe) {
        this.dialog = dialog;
        this.translatePipe = translatePipe;
        this.userTimeChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.userTime) {
            /** @type {?} */
            const time = {};
            time.hour = 0;
            time.minute = 0;
            time.format = 24;
            time.meriden = 'AM';
            this.userTime = time;
        }
    }
    /**
     * @return {?}
     */
    get time() {
        if (!this.userTime) {
            return '';
        }
        /** @type {?} */
        let meriden = `${this.userTime.meriden}`;
        meriden = this.translatePipe.transform(meriden);
        if (this.userTime.format === 24) {
            meriden = '';
        }
        /** @type {?} */
        let hour = `${this.userTime.hour}`;
        if (this.userTime.hour === 24) {
            hour = '00';
        }
        if (this.userTime.minute === 0) {
            return `${hour}:00 ${meriden}`;
        }
        else if (this.userTime.minute < 10) {
            /** @type {?} */
            const tt = '0' + String(this.userTime.minute);
            return `${hour}:${tt} ${meriden}`;
        }
        else {
            return `${hour}:${this.userTime.minute} ${meriden}`;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    showPicker($event) {
        /** @type {?} */
        const dialogRef = this.dialog.open(WTimeDialogComponent, {
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
            .subscribe((result) => {
            // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
            if (result === undefined) {
                return;
            }
            else if (result !== -1) {
                this.userTime = result;
                this.emituserTimeChange();
            }
        });
        return false;
    }
    /**
     * @return {?}
     */
    emituserTimeChange() {
        this.userTimeChange.emit(this.userTime);
    }
}
WMatTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-mat-timepicker',
                styles: [`.time-picker-button{padding:0;margin:0;min-width:44px}:host ::ng-deep .ui-dropdown,:host ::ng-deep input.ui-inputtext.ui-widget.ui-state-default,:host ::ng-deep p-dropdown,input.form-input{width:100%!important;height:35px}`],
                template: `<div fxFlex
     fxLayout="row"
     class="w-mat-timepicker">

  <button mat-button type="button"
          (click)="showPicker($event)"
          class="time-picker-button">
    <i class="fa fa-clock-o"></i>
  </button>

  <input matInput
         [id]="inputId"
         [name]="inputName"
         [disabled]="disabled"
         [readonly]="readonly"
         [class]="inputClass"
         [title]="tooltip"
         [placeholder]="placeholderValue"
         [value]="time">
</div>
`,
                providers: [TranslatePipe]
            },] },
];
/** @nocollapse */
WMatTimePickerComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: TranslatePipe }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class WTimeComponent {
    /**
     * @param {?} translatePipe
     */
    constructor(translatePipe) {
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
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    formatHour() {
        if (this.userTime.format === 24) {
            if (this.userTime.hour === 24) {
                return '00';
            }
            else if (this.userTime.hour < 10) {
                return '0' + String(this.userTime.hour);
            }
        }
        return String(this.userTime.hour);
    }
    /**
     * @return {?}
     */
    formatMinute() {
        if (this.userTime.minute === 0) {
            return '00';
        }
        else if (this.userTime.minute < 10) {
            return '0' + String(this.userTime.minute);
        }
        else {
            return String(this.userTime.minute);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setCurrentView(type) {
        this.currentView = type;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    setMeridien(m) {
        this.userTime.meriden = m;
    }
    /**
     * @return {?}
     */
    revert() {
        this.reverted.emit();
    }
    /**
     * @return {?}
     */
    submit() {
        this.submitted.emit(this.userTime);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emituserTimeChange(event) {
        this.userTimeChange.emit(this.userTime);
    }
}
WTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-time',
                template: `<div fxLayout="row"
     fxLayout.lt-md="column"
     fxLayoutAlign="center center"
     class="w-time"
     [ngClass.xs]="'vertical-time'"
     [ngClass.sm]="'vertical-time'">
  <mat-toolbar fxLayout="column"
               fxLayout.lt-md="row"
               fxLayoutAlign="center center"
               [color]="color"
               class="w-timepicker-time-container">

    <div class="w-timepicker-selected-time">
      <span [class]="currentView === VIEW_HOURS ? 'active': ''"
            (click)="setCurrentView(VIEW_HOURS)">{{ formatHour() }}:</span>
      <span [class]="currentView === VIEW_MINUTES ? 'active': ''"
            (click)="setCurrentView(VIEW_MINUTES)">{{ formatMinute() }}</span>
    </div>
    <div fxLayout="column"
         fxLayoutAlign="center center"
         class="w-timepicker-selected-ampm"
         *ngIf="userTime.format === 12">
      <span (click)="setMeridien('AM')"
            [class]="userTime.meriden === 'AM' ? 'active' : ''">{{'AM' | translate}}</span>
      <span (click)="setMeridien('PM')"
            [class]="userTime.meriden === 'PM' ? 'active' : ''">{{'PM' | translate}}</span>
    </div>

  </mat-toolbar>

  <div fxLayout="column"
       fxLayoutAlign="space-between center"
       class="w-time-content">
    <ntw-clock [color]="color"
             class="w-animation-zoom"
             [userTime]="userTime"
             (userTimeChange)="emituserTimeChange($event)"
             [(currentView)]="currentView"
             (viewChange)="setCurrentView($event)">
    </ntw-clock>

    <div fxFlexAlign="end">
      <button mat-button
              (click)="revert()">
        {{revertLabel}}
      </button>
      <button mat-button
              [color]="color"
              (click)="submit()">
        {{submitLabel}}
      </button>
    </div>
  </div>
</div>
`,
                styles: [`:host{display:block}.w-time{max-height:100%;min-height:350px;height:350px}.w-time .w-timepicker-time-container{padding:15px;min-width:160px;width:160px}.w-time .w-timepicker-time-container.mat-toolbar-single-row{height:100%}.w-time .w-timepicker-selected-time{font-size:3.5rem;font-weight:400;display:flex}.w-time .w-timepicker-selected-ampm{font-size:1rem;line-height:1.3rem;padding-top:2rem}.w-time .w-time-content{width:100%;height:100%;padding:6px}.w-time .w-time-content w-clock{padding:12px 0;height:calc(100% - 58px)}.w-time.vertical-time{height:auto}.w-time.vertical-time .w-timepicker-time-container{min-width:auto;width:100%;height:100px}.w-time.vertical-time .w-timepicker-time-container .w-timepicker-selected-ampm{padding:0 12px}.w-timepicker-selected-ampm>span,.w-timepicker-selected-time>span{outline:0;opacity:.5}.w-timepicker-selected-ampm>span:not(.active),.w-timepicker-selected-time>span:not(.active){cursor:pointer}.w-timepicker-selected-ampm>span.active,.w-timepicker-selected-time>span.active{opacity:1}.w-animate-next{opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove{transition:.5s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(50%,0,1px);transform:translate3d(50%,0,1px)}.w-animate-next-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}.w-animate-prev{opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove{transition:.3s cubic-bezier(.35,0,.25,1);opacity:0;-webkit-transform:translate3d(-50%,0,1px);transform:translate3d(-50%,0,1px)}.w-animate-prev-remove-active{opacity:1;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px)}@-webkit-keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes w-animation-bounce{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}70%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}to{-webkit-transform:scale(1);transform:scale(1)}}.w-animation-zoom.ng-enter{transition:.3s cubic-bezier(.35,0,.25,1);-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:w-animation-bounce;animation-name:w-animation-bounce}`],
                providers: [TranslatePipe]
            },] },
];
/** @nocollapse */
WTimeComponent.ctorParameters = () => [
    { type: TranslatePipe }
];
WTimeComponent.propDecorators = {
    userTime: [{ type: Input }],
    userTimeChange: [{ type: Output }],
    revertLabel: [{ type: Input }],
    submitLabel: [{ type: Input }],
    reverted: [{ type: Output }],
    submitted: [{ type: Output }],
    color: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FieldComponent {
    /**
     * @param {?} bridgeService
     */
    constructor(bridgeService) {
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
    handleDefaultSettings() {
    }
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    updateValue(newValue) {
        this.field.data.value = newValue.value;
        this.validate();
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = null;
            if (this.control) {
                this.control.reset();
            }
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Gets the field's value.
     * @return {?}
     */
    getValue() {
        return this.field.data.value;
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name, this.field.data.value);
        }
        return data;
    }
    /**
     * \@description Triggers a dynamic event in case it is defined.
     * @param {?} eventType
     * @param {?} eventArguments
     * @param {?} source
     * @return {?}
     */
    triggerDynamicEvent(eventType, eventArguments, source) {
        if (source.eventTriggers) {
            /** @type {?} */
            const event = source.eventTriggers[eventType];
            /** @type {?} */
            const parentEventHandlerFunction = this.bridgeService.parentComponent[event.handler];
            if (parentEventHandlerFunction) {
                /** @type {?} */
                let parameters = [eventArguments];
                if (event.parameters && event.parameters.length > 0) {
                    parameters = parameters.concat(event.parameters);
                }
                parentEventHandlerFunction(this.bridgeService.parentComponent, source, parameters);
            }
        }
    }
    /**
     * \@description Checks whether the field should be hidden.
     * @return {?} boolean Whether the field should be hidden.
     */
    isFieldHidden() {
        return this.field.hidden ||
            (this.bridgeService.configuration.settings.sectionMode !== SectionModes.None &&
                this.bridgeService.configuration.sections.length > 0 &&
                this.field.sectionId !== this.bridgeService.configuration.currentSection.id);
    }
    /**
     * \@description Checks whether the validation should be shown.
     * @return {?} boolean Whether the validation should be shown.
     */
    isValidationShown() {
        return !this.isPristine && this.field.validationErrors && this.field.validationErrors.length > 0;
    }
    /**
     * \@description Checks whether the validation asterisk should be shown.
     * @return {?} boolean Whether the validation asterisk should be shown.
     */
    isValidationAsteriskShown() {
        return !this.isFormInDisplayMode() && this.field.validation && (this.field.validation.required || this.field.validation.min > 0);
    }
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    validate(eventArguments, isSubmit) {
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
    }
    /**
     * \@description Adds an error to the validation errors list.
     * @param {?} message
     * @param {?=} type
     * @return {?}
     */
    addValidationError(message, type = FieldComponent.ValidationErrorClass) {
        if (!this.field.validationErrors) {
            this.field.validationErrors = new Array();
        }
        this.field.validationErrors.push(new InputError(type, message));
    }
    /**
     * \@description Clears the field's validation errors.
     * @return {?}
     */
    clearValidationErrors() {
        this.field.validationErrors = new Array();
    }
    /**
     * \@description Checks whether the field should be valiated.
     * @return {?} boolean Whether the field should be valiated.
     */
    shouldValidate() {
        return this.field.validation && (!this.field.validationErrors || this.field.validationErrors.length === 0);
    }
    /**
     * \@description Prepares the field for validation and makes sure it isn't validated repeatedly.
     * @param {?} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    preValidate(isSubmit) {
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
    }
    /**
     * \@description Updates the validation summary.
     * @return {?}
     */
    updateValidationSummary() {
        this.bridgeService.configuration.validationErrors = new Array();
        for (const field of this.bridgeService.configuration.mergedFields) {
            if (field.validationErrors) {
                this.bridgeService.configuration.validationErrors = this.bridgeService
                    .configuration.validationErrors.concat(field.validationErrors);
            }
        }
    }
    /**
     * \@description Validates a control for the required condition and updates its validation errors list.
     * @return {?} Array<InputError> The list of validation errors.
     */
    validateRequiredCondition() {
        if (this.field.validation.required) {
            if (!this.field.data || !this.field.data.value || this.field.data.value.length === 0) {
                this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.requiredText));
            }
        }
        return this.field.validationErrors;
    }
    /**
     * \@description Validates a control for the pattern condition and updates its validation errors list.
     * @return {?} Array<InputError> The list of validation errors.
     */
    validatePatternCondition() {
        if (this.field.validation.pattern && this.field.data && this.field.data.value && this.field.data.value.length > 0) {
            /** @type {?} */
            const regEx = new RegExp(this.field.validation.pattern);
            if (!regEx.test(this.field.data.value)) {
                this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.patternText));
            }
        }
        return this.field.validationErrors;
    }
    /**
     * \@description Validates a control for the range condition and updates its validation errors list.
     * @return {?} Array<InputError> The list of validation errors.
     */
    validateRangeCondition() {
        /** @type {?} */
        const valueLength = this.field.data && this.field.data.value ? this.field.data.value.length : 0;
        if ((this.field.validation.min && valueLength < this.field.validation.min) ||
            (this.field.validation.max && valueLength > this.field.validation.max)) {
            this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.rangeText));
        }
        return this.field.validationErrors;
    }
    /**
     * \@description Gets whether the form is in display mode.
     * @return {?} boolean Whether the form is in display mode.
     */
    isFormInDisplayMode() {
        return this.bridgeService.configuration.settings.formMode === FormModes.Display;
    }
}
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
FieldComponent.ctorParameters = () => [
    { type: BridgeService }
];
FieldComponent.propDecorators = {
    field: [{ type: Input, args: ['field',] }],
    control: [{ type: ViewChild, args: [NgModel,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class BoundableFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} httpRequestsService
     * @param {?} translateService
     * @param {?} utilitiesService
     * @param {?} route
     */
    constructor(bridgeService, httpRequestsService, translateService, utilitiesService, route) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.httpRequestsService = httpRequestsService;
        this.translateService = translateService;
        this.utilitiesService = utilitiesService;
        this.route = route;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        if (!this.isFormInDisplayMode()) {
            this.dataBindOptions();
            this.translateService.onLangChange.subscribe((event) => {
                this.dataBindOptions();
            });
        }
    }
    /**
     * \@description Binds the field's options.
     * @return {?}
     */
    dataBindOptions() {
        if (this.field.data && this.field.data.optionsEndpoint) {
            /** @type {?} */
            const endpoint = this.utilitiesService.replaceTokens(this.bridgeService.configuration.endpoints.lookups[this.field.data.optionsEndpoint], this.route, this.bridgeService.additionalParameters);
            this.bindOptions(endpoint);
        }
    }
    /**
     * \@description Binds the field's options.
     * @param {?} endpoint
     * @return {?}
     */
    bindOptions(endpoint) {
        this.httpRequestsService.get(endpoint).subscribe(response => {
            this.field.data.options = response;
        }, exception => {
            console.error('bindOptions: ', exception);
        });
    }
}
BoundableFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-boundable-field',
                template: ''
            },] },
];
/** @nocollapse */
BoundableFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: HttpRequestsService },
    { type: TranslateService },
    { type: UtilitiesService },
    { type: ActivatedRoute, decorators: [{ type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = [];
            this.control.reset();
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + ']', value);
            }
        }
        return data;
    }
}
CheckboxFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-checkbox-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <div class="checkBoxHolder"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'">
    <p-checkbox *ngFor="let checkbox of field.data.options; let i = index"
                [id]="field.name+'_'+i"
                [name]="field.name"
                [(ngModel)]="field.data.value"
                [class]="field.cssClasses.input"
                [ngClass]="{'invalid': isValidationShown()}"
                [title]="field.tooltip | translate"
                #input="ngModel"
                [required]="field.validation.required"
                [label]="checkbox.name | translate"
                [value]="checkbox.id"
                [disabled]="field.disabled"
                (onChange)="triggerDynamicEvent('onChange', $event, field);"
                (ngModelChange)="validate();">
    </p-checkbox>
  </div>

  <!-- display -->
  <div [class]="field.cssClasses.display"
       *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <ul *ngIf="field?.data?.value?.length > 1">
      <li *ngFor="let title of field?.data?.value">{{title}}</li>
    </ul>
    <span *ngIf="field?.data?.value?.length == 1">
      <span *ngFor="let title of field?.data?.value">{{title}}</span>
    </span>
  </div>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`p-checkbox{display:block}body.ar :host ::ng-deep .ui-chkbox.ui-widget{float:right;margin-left:10px}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ChipsFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + ']', value);
            }
        }
        return data;
    }
}
ChipsFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-chips-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-chips [id]="field.name"
           [name]="field.name"
           [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
           [class]="field.cssClasses.input"
           [ngClass]="{'invalid': isValidationShown()}"
           [title]="field.tooltip | translate"
           #input="ngModel"
           [disabled]="field.disabled"
           [(ngModel)]="field.data.value"
           [allowDuplicate]="field.validation.allowDuplicate"
           [addOnBlur]="field.addOnBlur"
           [addOnTab]="field.addOnTab"
           [required]="field.validation.required"
           *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
           (onAdd)="triggerDynamicEvent('onAdd', $event, field);"
           (onRemove)="triggerDynamicEvent('onRemove', $event, field);"
           (ngModelChange)="validate();">
  </p-chips>

  <!-- display -->
  <div [class]="field.cssClasses.display"
       *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <ul>
      <li *ngFor="let title of field.data.value">{{title}}</li>
    </ul>
  </div>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`:host ::ng-deep .ui-chips-input-token,:host ::ng-deep .ui-chips-input-token input{width:100%}:host ::ng-deep .ui-chips>ul.ui-inputtext{padding:5px .25em}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DatetimeFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} translateService
     * @param {?} languageService
     * @param {?} datePipe
     */
    constructor(bridgeService, translateService, languageService, datePipe) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.translateService = translateService;
        this.languageService = languageService;
        this.datePipe = datePipe;
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setCalendarOptions();
        this.translateService.onLangChange.subscribe((response) => {
            this.setCalendarOptions();
        });
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name, this.datePipe.transform(this.field.data.value, this.field.formDataDateFormat));
        }
        return data;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        // buggy if done from here after component is loaded. Moved back to before component loaded.
    }
    /**
     * \@description Sets the calendar options.
     * @return {?}
     */
    setCalendarOptions() {
        if (this.calendarElement && this.languageService.translations) {
            /** @type {?} */
            const calendarOptions = this.languageService.translations.calendarOptions;
            if (calendarOptions) {
                this.calendarElement.locale = calendarOptions;
            }
        }
    }
}
DatetimeFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-datetime-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-calendar #calendar
              [id]="field.name"
              [name]="field.name"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
              [title]="field.tooltip | translate"
              #input="ngModel"
              [(ngModel)]="field.data.value"
              [required]="field.validation.required"
              [readonlyInput]="field.readonly"
              [disabled]="field.disabled"
              [showIcon]="field.showIcon"
              [showTime]="field.showTime"
              [hourFormat]="field.hourFormat"
              [monthNavigator]="field.monthNavigator"
              [yearNavigator]="field.yearNavigator"
              [yearRange]="field.yearRange"
              [dateFormat]="field.dateFormat"
              [minDate]="field.minDateValue"
              [maxDate]="field.maxDateValue"
              [defaultDate]="field.defaultDateValue"
              *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
              (onClose)="validate();triggerDynamicEvent('onSelect', $event, field);"
              (onSelect)="validate();triggerDynamicEvent('onSelect', $event, field);">
  </p-calendar>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field.data.value | date:field.displayDateFormat}}
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`body.en :host ::ng-deep button.ui-datepicker-trigger{right:0}body.ar :host ::ng-deep button.ui-datepicker-trigger{left:0}:host ::ng-deep span.ui-calendar{display:block}:host ::ng-deep p-calendar input{border-radius:.25rem}body.ar :host ::ng-deep .ui-calendar-button{border-radius:.25rem 0 0 .25rem}body.ar :host ::ng-deep .ui-calendar.ui-calendar-w-btn input{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}:host ::ng-deep button.ui-datepicker-trigger{position:absolute}:host ::ng-deep .ui-calendar .ui-datepicker{width:17em;min-width:auto}:host ::ng-deep .ui-calendar .ui-calendar-button .ui-button-icon-left{font-size:1.25em}`]
            },] },
];
/** @nocollapse */
DatetimeFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: TranslateService },
    { type: LanguageService },
    { type: DatePipe }
];
DatetimeFieldComponent.propDecorators = {
    calendarElement: [{ type: ViewChild, args: ['calendar',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DatetimeHijriFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} utilitiesService
     */
    constructor(bridgeService, utilitiesService) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.utilitiesService = utilitiesService;
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        if (this.field.minDate) {
            this.field.minDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.minDate, new Date(this.field.minDate));
        }
        if (this.field.maxDate) {
            this.field.maxDateValue = this.utilitiesService.evaluateFunctionOrDefault(this.field.maxDate, new Date(this.field.maxDate));
        }
        if (this.field.data.dateValue) {
            this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.data.dateValue, new Date(this.field.data.dateValue));
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.year', this.field.data.value.year);
            data.append(this.field.name + '.month', this.field.data.value.month);
            data.append(this.field.name + '.day', this.field.data.value.day);
        }
        return data;
    }
    /**
     * \@description Toggles the calendar.
     * @return {?}
     */
    toggleCalendar() {
        this.calendar.toggle();
    }
}
DatetimeHijriFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-datetime-hijri-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <div class="hijri-date-control">
    <input [name]="field.name"
           [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
           [class]="field.cssClasses.input"
           [ngClass]="{'invalid': isValidationShown()}"
           ngbDatepicker
           #input="ngbDatepicker"
           #defaultInput="ngModel"
           [readonly]="field.readonly"
           [disabled]="field.disabled"
           [(ngModel)]="field.data.value"
           [minDate]="field.minDateValue"
           [maxDate]="field.maxDateValue"
           [showWeekNumbers]="field.showWeekNumbers"
           [displayMonths]="field.displayMonths"
           [outsideDays]="field.outsideDays"
           [showWeekdays]="field.showWeekdays"
           *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
           (click)="toggleCalendar();validate();"
           (ngModelChange)="validate();triggerDynamicEvent('onSelect', $event, field);" />

    <!-- icon -->
    <button class="hijri-date-icon-container"
            [disabled]="field.disabled"
            type="button"
            (click)="toggleCalendar();">
      <span class="hijri-date-icon"
            *ngIf="field.showIcon">
      </span>
    </button>
  </div>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value?.day}}/{{field?.data?.value?.month}}/{{field?.data?.value?.year}}
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`.hijri-date{height:35px}.hijri-date-control{position:relative}.hijri-date-icon-container{position:absolute;top:0;padding:0 6px;background-color:#2399e5;color:#fff;cursor:pointer;height:100%;line-height:1.8;border:0}button.hijri-date-icon-container:disabled{opacity:.35}.hijri-date-icon:focus,.hijri-date-icon:hover{background:#1f89ce}.hijri-date-icon:after{content:'\\e927';font-family:primeicons;font-size:1.25em}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg)}body.ar :host ::ng-deep ngb-datepicker ngb-datepicker-navigation .right .ngb-dp-navigation-chevron{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}body.ar :host ::ng-deep .custom-select{background-position:left.75rem center}body.ar :host ::ng-deep .hijri-date-icon-container{left:0}body.en :host ::ng-deep .hijri-date-icon-container{right:0}:host ::ng-deep .custom-select{background-position:left .25rem center!important;direction:rtl!important;min-width:100px}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-week-number,:host ::ng-deep ngb-datepicker-month-view .ngb-dp-weekday{width:2.5rem;height:2.5rem}:host ::ng-deep ngb-datepicker-month-view .ngb-dp-day div{width:100%;height:100%;line-height:2.5rem}`],
                providers: [
                    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
                    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
                ]
            },] },
];
/** @nocollapse */
DatetimeHijriFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: UtilitiesService }
];
DatetimeHijriFieldComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: ['input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EditorFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Gets the field's value.
     * @return {?}
     */
    getValue() {
        if (this.field.showToolbar) {
            return this.field.data.value;
        }
        else {
            return this.field.data.value.replace(/<[^>]*>/g, '');
        }
    }
}
EditorFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-editor-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <div [ngClass]="{'hide-toolbar':!field.showToolbar}">
    <p-editor [id]="field.name"
              [name]="field.name"
              #input="ngModel"
              [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [title]="field.tooltip | translate"
              [readonly]="field.readonly"
              [(ngModel)]="field.data.value"
              [style]="{'height':field.height}"
              *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
              (onSelectionChange)="triggerDynamicEvent('onSelectionChange', $event, field);"
              (onTextChange)="triggerDynamicEvent('onChange', $event, field);"
              (ngModelChange)="validate();">
    </p-editor>
  </div>

  <!-- display -->
  <span [innerHTML]="field.data.value"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'"></span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`body.ar :host ::ng-deep .ql-editor p{direction:rtl;text-align:right}body.ar :host ::ng-deep span.ql-picker-label{text-align:left}body.ar :host ::ng-deep .ql-editor.ql-blank::before{left:unset}:host ::ng-deep .hide-toolbar .ui-editor-toolbar{display:none}:host ::ng-deep .hide-toolbar .ui-editor-content{border-top:1px solid #ccc!important}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FileUploadFieldComponent extends FieldComponent {
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.fileUploadControl) {
            this.fileUploadControl.clear();
        }
        /** @type {?} */
        const length = this.field.data.value.length;
        for (let i = 0; i < length; i++) {
            this.removeFile(this.field.data.value[i]);
        }
        this.clearValidationErrors();
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.fileUploadControl.files) {
            for (const file of this.fileUploadControl.files) {
                data.append(this.field.name, file);
            }
        }
        return data;
    }
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    validate(eventArguments, isSubmit) {
        this.preValidate(isSubmit);
        if (this.shouldValidate()) {
            /** @type {?} */
            let valueLength = 0;
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
                const invalidFileSizeMessage = this.fileUploadControl.msgs.find(m => m.summary === 'invalidFileSize');
                if (invalidFileSizeMessage) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileSizeText));
                }
                /** @type {?} */
                const invalidFileTypeMessage = this.fileUploadControl.msgs.find(m => m.summary === 'invalidFileType');
                if (invalidFileTypeMessage) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileTypeText));
                }
            }
            this.updateValidationSummary();
        }
        return this.field.validationErrors;
    }
    /**
     * \@description Removes the file.
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        this.field.data.value.pop(file);
    }
}
FileUploadFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-file-upload-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-fileUpload [id]="field.name"
                [name]="field.name"
                [class]="field.cssClasses.input"
                [ngClass]="{'invalid': isValidationShown()}"
                [url]="field.data.url"
                [multiple]="field.multiple"
                [accept]="field.validation.accept"
                #input
                [auto]="field.auto"
                [maxFileSize]="field.validation.maxFileSizeInBytes"
                [mode]="field.mode"
                [showCancelButton]="field.buttons.showCancelButton"
                [showUploadButton]="field.buttons.showUploadButton"
                [chooseLabel]="field.buttons.chooseLabel | translate"
                [uploadLabel]="field.buttons.uploadLabel | translate"
                [cancelLabel]="field.buttons.cancelLabel | translate"
                [title]="field.tooltip | translate"
                [disabled]="field.disabled"
                invalidFileSizeMessageSummary="invalidFileSize"
                invalidFileSizeMessageDetail="invalidFileSize"
                invalidFileTypeMessageDetail="invalidFileType"
                invalidFileTypeMessageSummary="invalidFileType"
                customUpload=true
                *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                (onSelect)="validate('onSelect');"
                (onRemove)="validate('onRemove');"
                (onClear)="validate('onClear');">
  </p-fileUpload>

  <!-- display -->
  <div class="upload-file-viewer"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'New' && field?.data?.value?.length > 0">
    <div class="upload-file-item"
         *ngFor="let file of field.data.value">
      <a [href]="file.url"
         [download]="file.fileName"
         target="_blank"
         class="upload-file-anchor">
        <span>
          <i class="fa fa-file"></i>
        </span>
        <span class="upload-file-title">{{file.fileName}}</span>
      </a>

      <a href="javascript:;"
         (click)="removeFile(file);validate('onRemoveFile');"
         *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
         class="trash-icon-style">
        <span>
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </a>
      <div class="clearfix"></div>
    </div>
  </div>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`:host ::ng-deep p-fileupload .ui-messages-error{display:none!important}:host ::ng-deep .ui-fileupload{margin-bottom:8px}.upload-file-viewer{border:1px solid #d5d5d5;padding:10px}.upload-file-viewer .upload-file-item{border:1px solid #d5d5d5;padding:10px;background:linear-gradient(to bottom,#f6f7f9 0,#ebedf0 100%);margin-bottom:10px}.upload-file-title{padding:0 15px}a.upload-file-anchor{line-height:2}.upload-file-viewer div:last-child{margin-bottom:0}a.trash-icon-style{padding:6px 11px;border-radius:6px;font-size:12px;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s}a.trash-icon-style:hover{border:1px solid #1f89ce;background:#1f89ce}body.ar :host ::ng-deep a.trash-icon-style{float:left}body.en :host ::ng-deep a.trash-icon-style{float:right}`]
            },] },
];
FileUploadFieldComponent.propDecorators = {
    fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ImageCropperFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property The image file.
         */
        this.imageFile = new Image();
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeCropper();
    }
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    updateValue(newValue) {
        this.field.data.value = newValue.value;
        if (!this.isFormInDisplayMode()) {
            this.imageFile = new Image();
            this.imageFile.setAttribute('crossOrigin', 'anonymous');
            this.imageFile.src = newValue.value;
            // workaround as it is not working without it. no idea why :)
            setTimeout(() => { this.cropper.setImage(this.imageFile); }, 1);
        }
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = '';
            this.fileUploadControl.clear();
            this.cropper.reset();
            this.imageFile = new Image();
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Sets the cropped image value.
     * @return {?}
     */
    setValue() {
        if (this.croppedImageElement) {
            this.field.data.value = this.croppedImageElement.nativeElement.currentSrc;
        }
    }
    /**
     * \@description Sets the cropped image.
     * @return {?}
     */
    setCropperImage() {
        /** @type {?} */
        const selectedFile = this.fileUploadControl.files[0];
        if (selectedFile) {
            this.imageFile = new Image();
            /** @type {?} */
            const fileReader = new FileReader();
            // set as a temporary value for validation since the read is async.
            this.field.data.value = 'placeholder';
            fileReader.onloadend = (loadEvent) => {
                this.imageFile.src = loadEvent.target.result;
                this.cropper.setImage(this.imageFile);
                this.field.data.value = this.imageFile.src;
            };
            fileReader.readAsDataURL(selectedFile);
        }
    }
    /**
     * \@description Initializes the cropper component.
     * @return {?}
     */
    initializeCropper() {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = this.cropperSettings.croppedWidth = this.field.cropperSettings.width;
        this.cropperSettings.height = this.cropperSettings.croppedHeight = this.field.cropperSettings.height;
        this.cropperSettings.canvasWidth = this.field.cropperSettings.canvasWidth;
        this.cropperSettings.canvasHeight = this.field.cropperSettings.canvasHeight;
        this.cropperSettings.minWidth = this.field.cropperSettings.minWidth;
        this.cropperSettings.minHeight = this.field.cropperSettings.minHeight;
        this.cropperSettings.rounded = this.field.cropperSettings.rounded;
    }
}
ImageCropperFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-image-cropper-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field?.cssClasses?.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input -->
  <!-- upload control -->
  <p-fileUpload [id]="field.name"
                [name]="field.name"
                [class]="field.cssClasses.input"
                [ngClass]="{'invalid': isValidationShown()}"
                accept="image/*"
                mode="advanced"
                [showCancelButton]=false
                [showUploadButton]=false
                [chooseLabel]="field.buttons.chooseLabel | translate"
                [title]="field.tooltip | translate"
                [disabled]="field.disabled"
                invalidFileSizeMessageSummary="invalidFileSize"
                invalidFileSizeMessageDetail="invalidFileSize"
                invalidFileTypeMessageDetail="invalidFileType"
                invalidFileTypeMessageSummary="invalidFileType"
                customUpload=true
                *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                (onSelect)="setCropperImage();validate();"
                (onRemove)="clearValue();validate();">
  </p-fileUpload>

  <!-- cropper -->
  <img-cropper *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
               [hidden]="!imageFile.src"
               [image]="imageFile"
               [settings]="cropperSettings"
               (onCrop)="setValue()">
  </img-cropper>

  <!-- cropped image -->
  <span class="cropped-image"
        *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
        [hidden]=" !imageFile.image">
    <img #croppedImage
         *ngIf="imageFile.image"
         [src]="imageFile.image"
         [width]="cropperSettings.width"
         [height]="cropperSettings.height">
  </span>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <img *ngIf="field.data.value"
         [src]="field.data.value"
         [width]="cropperSettings.width"
         [height]="cropperSettings.height">
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}p-fileupload{display:block}:host ::ng-deep img-cropper .ng2-imgcrop{border:1px solid #d5d5d5;padding:20px 0;background-color:#ebedf0;width:100%;margin:10px 0;display:block}.form-display img{border:1px solid #d5d5d5;background-color:#ebedf0;padding:10px}.cropped-image{width:100%;display:block;border:1px solid #d5d5d5;background-color:#ebedf0;margin:0 auto;text-align:center;padding:10px}`]
            },] },
];
ImageCropperFieldComponent.propDecorators = {
    cropper: [{ type: ViewChild, args: [ImageCropperComponent,] }],
    croppedImageElement: [{ type: ViewChild, args: ['croppedImage',] }],
    fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InfoFieldComponent extends FieldComponent {
}
InfoFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-info-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">
  <div [innerHTML]="field.htmlSnippet | translate"></div>
</div>
`,
                styles: [``]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
        /**
         * \@property Whether to validate for pattern.
         */
        this.validateForPattern = true;
    }
}
InputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-input-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <input [id]="field.name"
         [name]="field.name"
         [(ngModel)]="field.data.value"
         [class]="field.cssClasses.input"
         [ngClass]="{'invalid': isValidationShown()}"
         [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
         [title]="field.tooltip | translate"
         [autocomplete]="field.autoComplete"
         #input="ngModel"
         [type]="field.fieldType"
         [required]="field.validation.required"
         [pattern]="field.validation.pattern"
         [maxlength]="field.validation.length"
         [readonly]="field.readonly"
         [disabled]="field.disabled"
         *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
         (ngModelChange)="validate();triggerDynamicEvent('onChange', $event, field);">

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field.data.value}}
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LocationFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} mapsAPILoader
     * @param {?} ngZone
     */
    constructor(bridgeService, mapsAPILoader, ngZone) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        // set a map field's location to use default location if no value is set and location is available.
        if (!this.field.defaultLocation || !this.field.defaultLocation.latitude || !this.field.defaultLocation.longitude) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.field.defaultLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                });
            }
        }
    }
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    updateValue(newValue) {
        for (const value of newValue.value) {
            this.addMarkersFromLocation(value.latitude, value.longitude);
        }
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = [];
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + '].latitude', value.latitude);
                data.append(this.field.name + '[' + i + '].longitude', value.longitude);
            }
        }
        return data;
    }
    /**
     * \@description Add a marker from the clicked map location.
     * @param {?} eventArguments
     * @return {?}
     */
    addMarkers(eventArguments) {
        if (!this.isFormInDisplayMode()) {
            this.addMarkersFromLocation(eventArguments.coords.lat, eventArguments.coords.lng);
        }
    }
    /**
     * \@description Activates the google map location search.
     * @return {?}
     */
    activateSearchInput() {
        if (this.searchElement) {
            // load Places Autocomplete
            this.mapsAPILoader.load().then(() => {
                /** @type {?} */
                const field = this.bridgeService.configuration.mergedFields.find(f => f.name === this.searchElement.nativeElement.id);
                /** @type {?} */
                const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {});
                autocomplete.addListener('place_changed', () => {
                    this.ngZone.run(() => {
                        /** @type {?} */
                        const place = autocomplete.getPlace();
                        // verify result
                        if (place.geometry === undefined || place.geometry === null) {
                            return;
                        }
                        /** @type {?} */
                        const latitude = place.geometry.location.lat();
                        /** @type {?} */
                        const longitude = place.geometry.location.lng();
                        field.defaultLocation = {
                            latitude: latitude,
                            longitude: longitude
                        };
                        field.zoom = 12;
                        /** @type {?} */
                        const marker = new Marker(place.geometry.location.lat(), place.geometry.location.lng(), field.markerSettings.defaultNewMarker.draggable, field.markerSettings.defaultNewMarker.infoHtml);
                        this.addMarkersFromLocation(latitude, longitude);
                    });
                });
            });
        }
    }
    /**
     * \@description Add a marker from the clicked map location.
     * @param {?} latitude
     * @param {?} longitude
     * @return {?}
     */
    addMarkersFromLocation(latitude, longitude) {
        if (!this.field.data.value) {
            this.field.data.value = [];
        }
        if (this.field.validation.max > 0 && this.field.data.value.length < this.field.validation.max) {
            /** @type {?} */
            const marker = new Marker(latitude, longitude, this.field.markerSettings.defaultNewMarker.draggable, this.field.markerSettings.defaultNewMarker.infoHtml);
            marker.eventTriggers = this.field.markerSettings.defaultNewMarker.eventTriggers;
            this.field.data.value.push(marker);
        }
    }
    /**
     * \@description Update the marker's position when drag is done.
     * @param {?} marker
     * @param {?} eventArguments
     * @return {?}
     */
    updateMarkerPosition(marker, eventArguments) {
        marker.latitude = eventArguments.coords.lat;
        marker.longitude = eventArguments.coords.lng;
    }
}
LocationFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-location-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <div class="search-location-container"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'">
    <!-- input && display -->
    <input #search
           [id]="field.name"
           [name]="field.name"
           [title]="field.tooltip | translate"
           [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
           autocorrect="off"
           autocapitalize="off"
           spellcheck="false"
           type="text"
           [class]="field.cssClasses.input"
           (keydown.enter)="$event.preventDefault()">

    <!-- icon -->
    <span class="search-location-icon">
    </span>
  </div>

  <agm-map [latitude]="field.defaultLocation?.latitude"
           [longitude]="field.defaultLocation?.longitude"
           [zoom]="field.zoom"
           [zoomControl]="field.zoomControl"
           [ngClass]="{'invalid': isValidationShown()}"
           (mapClick)="addMarkers($event);validate();">

    <agm-marker *ngFor="let marker of field.data.value"
                (markerClick)="triggerDynamicEvent('markerClick', $event, marker);"
                [latitude]="marker.latitude"
                [longitude]="marker.longitude"
                [markerDraggable]="marker.draggable && bridgeService?.configuration?.settings?.formMode != 'Display'"
                (dragEnd)="updateMarkerPosition(marker, $event)">

      <agm-info-window *ngIf="marker.infoHtml">
        <div [innerHTML]="marker.infoHtml | translate"></div>
      </agm-info-window>
    </agm-marker>
  </agm-map>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`agm-map{width:100%;height:300px}span.search-location-icon:after{content:"\\f002";font:14px/2.5 FontAwesome;position:absolute;height:100%;color:#555}.search-location-container{position:relative}body.en :host ::ng-deep span.search-location-icon:after{right:5px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}body.ar :host ::ng-deep span.search-location-icon:after{left:5px}input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}`]
            },] },
];
/** @nocollapse */
LocationFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: MapsAPILoader },
    { type: NgZone }
];
LocationFieldComponent.propDecorators = {
    searchElement: [{ type: ViewChild, args: ['search',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MaskFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
        /**
         * \@property Whether to validate for pattern.
         */
        this.validateForPattern = true;
    }
    /**
     * \@description Updates the mask.
     * @param {?} mask current The new mask.
     * @return {?}
     */
    updateMask(mask) {
        this.inputMask._mask = mask;
        this.inputMask.initMask();
        this.inputMask.inputViewChild.nativeElement.blur();
        this.inputMask.inputViewChild.nativeElement.focus();
    }
    /**
     * \@description Updates the value.
     * @param {?} value current The new value.
     * @return {?}
     */
    updateMaskValue(value) {
        this.inputMask.writeValue(value);
    }
}
MaskFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-mask-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-inputMask [id]="field.name"
               [name]="field.name"
               [class]="field.cssClasses.input"
               [ngClass]="{'invalid': isValidationShown()}"
               [title]="field.tooltip | translate"
               [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
               #input="ngModel"
               [readonly]="field.readonly"
               [(ngModel)]="field.data.value"
               [mask]="field.validation.mask"
               [slotChar]="field.slotChar"
               [autoClear]="field.autoClear"
               [unmask]="field.unmask"
               [disabled]="field.disabled"
               [maxlength]="field.validation.length"
               [characterPattern]="field.validation.characterPattern"
               [pattern]="field.validation.pattern"
               *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
               (ngModelChange)="validate();triggerDynamicEvent('onChange', $event, field);">
  </p-inputMask>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field.data.value}}
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [``]
            },] },
];
MaskFieldComponent.propDecorators = {
    inputMask: [{ type: ViewChild, args: [InputMask,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ValidationSummaryComponent {
    /**
     * @param {?} bridgeService
     * @param {?} languageService
     * @param {?} changeDetectorRef
     */
    constructor(bridgeService, languageService, changeDetectorRef) {
        this.bridgeService = bridgeService;
        this.languageService = languageService;
        this.changeDetectorRef = changeDetectorRef;
    }
    /**
     * \@description Shows the validation summary as an alert.
     * @return {?}
     */
    showSummaryAlert() {
        if (this.bridgeService.configuration.settings.validationSummaryMode === ValidationSummaryModes.Alert) {
            this.changeDetectorRef.detectChanges();
            swal({
                html: this.validationSummaryElement.nativeElement.innerHTML,
                type: SwalTypes.Warning,
                confirmButtonText: this.languageService.translations.buttons.Ok
            });
        }
    }
}
ValidationSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-validation-summary',
                template: `<div #validationSummary
     class="validation-summary-container"
     [hidden]="bridgeService?.configuration?.settings?.validationSummaryMode !='List'">
  <div class="validation-summary"
       *ngIf="bridgeService?.configuration?.validationErrors?.length > 0">
    <span class="validation-summary-title-section">{{'validations.ValidationSummaryErrors' | translate}}</span>
    <ul>
      <li class="validation-summary-error" *ngFor="let error of bridgeService?.configuration?.validationErrors">
        {{error.message | translate}}
      </li>
    </ul>
  </div>
</div>
`,
                styles: [`.validation-summary{border:1px solid #d6d6d6;padding-top:15px;color:red;margin-bottom:20px}.validation-summary-title-section{font-weight:700;padding:15px 20px;display:block}.validation-summary-container{margin-top:20px}`]
            },] },
];
/** @nocollapse */
ValidationSummaryComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: LanguageService },
    { type: ChangeDetectorRef }
];
ValidationSummaryComponent.propDecorators = {
    validationSummaryElement: [{ type: ViewChild, args: ['validationSummary',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.id', this.field.data.value.id);
        }
        return data;
    }
}
SelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-select-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-dropdown [options]="field.data.options"
              [id]="field.name"
              [name]="field.name"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [title]="field.tooltip | translate"
              #input="ngModel"
              [placeholder]="(field.placeholder) ? (field.placeholder | translate) : ''"
              [(ngModel)]="field.data.value"
              [required]="field.validation.required"
              [disabled]="field.disabled"
              [filter]="field.enablefilter"
              optionLabel="name"
              dataKey="id"
              *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
              (onChange)="validate();triggerDynamicEvent('onChange', $event, field);">
  </p-dropdown>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value?.name}}
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`body.ar :host ::ng-deep .ui-dropdown-panel .ui-dropdown-item{text-align:right}body.ar :host ::ng-deep p-dropdown .ui-dropdown .ui-dropdown-trigger{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep .ui-dropdown .ui-dropdown-label{padding-right:5px}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RadiobuttonFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
}
RadiobuttonFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-radiobutton-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <div class="radioButtonHolder"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'">
    <p-radioButton *ngFor="let radiobutton of field.data.options; let i = index"
                   [id]="field.name+'_'+i"
                   [name]="field.name"
                   [(ngModel)]="field.data.value"
                   [class]="field.cssClasses.input"
                   [ngClass]="{'invalid': isValidationShown()}"
                   [title]="field.tooltip | translate"
                   #input="ngModel"
                   [required]="field.validation.required"
                   [label]=" radiobutton.name | translate"
                   [value]="radiobutton.id"
                   [disabled]="field.disabled"
                   (onClick)="triggerDynamicEvent('onClick', $event, field);"
                   (ngModelChange)="validate();">
    </p-radioButton>
  </div>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value}}
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`p-radiobutton{display:block}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MultiSelectFieldComponent extends BoundableFieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = [];
            this.control.reset();
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            for (let i = 0; i < this.field.data.value.length; i++) {
                /** @type {?} */
                const value = this.field.data.value[i];
                data.append(this.field.name + '[' + i + '].id', value.id);
            }
        }
        return data;
    }
}
MultiSelectFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-multi-select-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-multiSelect [options]="field.data.options"
                 [id]="field.name"
                 [name]="field.name"
                 [class]="field.cssClasses.input"
                 [ngClass]="{'invalid': isValidationShown()}"
                 [title]="field.tooltip | translate"
                 #input="ngModel"
                 [filterPlaceHolder]="field.placeholder | translate"
                 [(ngModel)]="field.data.value"
                 [required]="field.validation.required"
                 [disabled]="field.disabled"
                 [filter]="field.enablefilter"
                 optionLabel="name"
                 dataKey="id"
                 [defaultLabel]="field.placeholder | translate"
                 *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                 (onChange)="triggerDynamicEvent('onChange', $event, field);"
                 (ngModelChange)="validate();">
  </p-multiSelect>

  <!-- display -->
  <div [class]="field.cssClasses.display"
       *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <ul>
      <li *ngFor="let item of field?.data?.value">{{item.name}}</li>
    </ul>
  </div>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`:host ::ng-deep .ui-multiselect.ui-widget{width:100%}:host ::ng-deep p-multiselect .ui-multiselect-label.ui-corner-all{margin-bottom:0;height:35px}body.ar :host ::ng-deep .ui-multiselect-filter-container{float:right}body.ar :host ::ng-deep .ui-multiselect-header .ui-multiselect-close{right:unset;left:.375em}body.ar :host ::ng-deep .ui-multiselect-panel .ui-multiselect-item{text-align:right!important}body.ar :host ::ng-deep p-multiselect .ui-corner-right{left:0;right:unset;border-right:1px solid #d6d6d6;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0}body.ar :host ::ng-deep p-multiselect .ui-multiselect-label.ui-corner-all{padding-right:5px}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TimeFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} utilitiesService
     */
    constructor(bridgeService, utilitiesService) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.utilitiesService = utilitiesService;
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.setTime, this.field.setTime);
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = this.utilitiesService.evaluateFunctionOrDefault(this.field.setTime, this.field.setTime);
        }
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.field.data && this.field.data.value) {
            data.append(this.field.name + '.hour', this.field.data.value.hour);
            data.append(this.field.name + '.minute', this.field.data.value.minute);
            data.append(this.field.name + '.meriden', this.field.data.value.meriden);
            data.append(this.field.name + '.format', this.field.data.value.format);
        }
        return data;
    }
    /**
     * \@description Sets a time picker field's value once it is changed.
     * @param {?} newValue
     * @return {?}
     */
    setTimePickerFieldValue(newValue) {
        this.field.data.value = newValue;
    }
}
TimeFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-time-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <ntw-mat-timepicker color="primary"
                      [inputClass]="field.cssClasses.input"
                      [ngClass]="{'invalid': isValidationShown()}"
                      [inputId]="field.name"
                      [inputName]="field.name"
                      [disabled]="field.disabled"
                      readonly=true
                      [tooltip]="field.tooltip | translate"
                      [placeholderValue]="field.tooltip | translate"
                      [(userTime)]="field.data.value"
                      *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                      (userTimeChange)="setTimePickerFieldValue($event);validate();triggerDynamicEvent('onChange', $event, field);">
  </ntw-mat-timepicker>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    {{field?.data?.value?.hour}}:{{field?.data?.value?.minute}}
    <span *ngIf="field?.data?.value?.format == 12">{{field?.data?.value?.meriden | translate}}</span>
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`:host ::ng-deep .time-picker-button.mat-button{position:absolute;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s;height:35px}body.en :host ::ng-deep .time-picker-button.mat-button{right:15px}body.ar :host ::ng-deep .time-picker-button.mat-button{left:15px}:host ::ng-deep .w-mat-timepicker .mat-button,:host ::ng-deep .w-mat-timepicker .mat-flat-button,:host ::ng-deep .w-mat-timepicker .mat-icon-button,:host ::ng-deep .w-mat-timepicker .mat-stroked-button{line-height:32px}:host ::ng-deep input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}`]
            },] },
];
/** @nocollapse */
TimeFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: UtilitiesService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RecaptchaFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} languageService
     */
    constructor(bridgeService, languageService) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.languageService = languageService;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        this.isValid = false;
        this.clearValidationErrors();
    }
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    validate(eventArguments, isSubmit) {
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
    }
    /**
     * \@description Sets the captcha language.
     * @return {?}
     */
    setCaptchaLanguge() {
        /** @type {?} */
        const language = this.languageService.getLanguage();
        if (this.recaptchaElement) {
            /** @type {?} */
            const captchaIFrame = this.recaptchaElement.elementRef.nativeElement.querySelector('iframe');
            if (captchaIFrame) {
                /** @type {?} */
                const src = captchaIFrame.getAttribute('src');
                captchaIFrame.setAttribute('src', src.replace(/hl=(.*?)&/, 'hl=' + language + '&'));
            }
        }
        this.isValid = false;
        this.clearValidationErrors();
    }
}
RecaptchaFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-recaptcha-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <re-captcha #recaptcha
              [id]="field.name"
              [siteKey]="field.siteKey"
              [class]="field.cssClasses.input"
              [ngClass]="{'invalid': isValidationShown()}"
              [theme]="field.theme"
              [size]="field.size"
              [title]="field.tooltip | translate"
              (resolved)="validate($event);">
  </re-captcha>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
RecaptchaFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: LanguageService }
];
RecaptchaFieldComponent.propDecorators = {
    recaptchaElement: [{ type: ViewChild, args: ['recaptcha',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RatingFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * \@description Handles the field's default settings.
     * @return {?}
     */
    handleDefaultSettings() {
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
    }
}
RatingFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-rating-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field?.cssClasses?.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input & display -->
  <p-rating [id]="field.name"
            [name]="field.name"
            [(ngModel)]="field.data.value"
            [class]="field.cssClasses.input"
            [ngClass]="{'invalid': isValidationShown()}"
            [title]="field.tooltip | translate"
            [readonly]="field.readonly"
            [disabled]="field.disabled"
            [stars]="field.starNumber"
            [iconCancelClass]="field.iconCancelClass"
            [iconOnClass]="field.iconOnClass"
            [iconOffClass]="field.iconOffClass"
            [cancel]="field.cancelIcon && !field.readonly"
            (onRate)="triggerDynamicEvent('onRate', $event, field);validate();"
            (onCancel)="triggerDynamicEvent('onCancel', $event, field);validate();">
  </p-rating>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [``]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DynamicFormComponent {
    /**
     * @param {?} bridgeService
     * @param {?} httpRequestsService
     * @param {?} localStorageService
     * @param {?} utilitiesService
     * @param {?} translateService
     * @param {?} languageService
     * @param {?} changeDetectorRef
     * @param {?} translatePipe
     * @param {?} route
     */
    constructor(bridgeService, httpRequestsService, localStorageService, utilitiesService, translateService, languageService, changeDetectorRef, translatePipe, route) {
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
    ngOnInit() {
        this.bridgeService.parentComponent = this.parentComponent;
        if (typeof this.additionalParameters === 'string') {
            this.additionalParameters = JSON.parse(this.additionalParameters);
        }
        this.bridgeService.additionalParameters = this.additionalParameters;
        this.bindForm();
    }
    /**
     * \@description Clears the form.
     * @param {?} form
     * @return {?}
     */
    clearForm(form) {
        for (const fieldComponent of this.fieldComponents) {
            fieldComponent.clearValue();
        }
        this.configuration.validationErrors = new Array();
        this.formCleared.emit();
    }
    /**
     * \@description Saves the form.
     * @param {?} form
     * @return {?}
     */
    saveForm(form) {
        // trigger recaptcha validation if exists.
        for (const recaptchaFieldComponents of this.recaptchaFieldComponents.toArray()) {
            recaptchaFieldComponents.validate(null, true);
        }
        if (this.isFormValid()) {
            this.showProgressIndicator = true;
            /** @type {?} */
            const values = this.getRequestBody();
            this.beforeFormSaved.emit(values);
            console.log(values);
            /** @type {?} */
            const endpoint = this.utilitiesService.replaceTokens(this.configuration.endpoints.save, this.route, this.bridgeService.additionalParameters);
            this.httpRequestsService.post(endpoint, values).subscribe(response => {
                console.log(response);
                this.afterFormSaved.emit(new ResponseEventArgs(true, response, values));
                this.showProgressIndicator = false;
                if (this.configuration.notifications.showResultMessage) {
                    swal({
                        title: this.translatePipe.transform(this.configuration.notifications.saveSuccessMessageTitle),
                        html: this.translatePipe.transform(this.configuration.notifications.saveSuccessMessageDetails),
                        type: SwalTypes.Success,
                        confirmButtonText: this.languageService.translations.buttons.Ok
                    });
                }
            }, exception => {
                console.error('saveForm: ', exception);
                this.afterFormSaved.emit(new ResponseEventArgs(false, exception, values));
                this.showProgressIndicator = false;
                if (this.configuration.notifications.showResultMessage) {
                    swal({
                        title: this.translatePipe.transform(this.configuration.notifications.saveErrorMessageTitle),
                        html: this.translatePipe.transform(this.configuration.notifications.saveErrorMessageDetails),
                        type: SwalTypes.Error,
                        confirmButtonText: this.languageService.translations.buttons.Ok
                    });
                }
            });
        }
    }
    /**
     * \@description Submits the form.
     * @param {?} form
     * @return {?}
     */
    submitForm(form) {
        this.validateForm();
        if (this.isFormValid()) {
            this.showProgressIndicator = true;
            /** @type {?} */
            const values = this.getRequestBody();
            this.beforeFormSubmitted.emit(values);
            console.log(values);
            /** @type {?} */
            const endpoint = this.utilitiesService.replaceTokens(this.configuration.endpoints.submit, this.route, this.bridgeService.additionalParameters);
            this.httpRequestsService.post(endpoint, values).subscribe(response => {
                console.log(response);
                this.afterFormSubmitted.emit(new ResponseEventArgs(true, response, values));
                this.showProgressIndicator = false;
                if (this.configuration.notifications.showResultMessage) {
                    swal({
                        title: this.translatePipe.transform(this.configuration.notifications.submitSuccessMessageTitle),
                        html: this.translatePipe.transform(this.configuration.notifications.submitSuccessMessageDetails),
                        type: SwalTypes.Success,
                        confirmButtonText: this.languageService.translations.buttons.Ok
                    });
                }
            }, exception => {
                console.error('submitForm: ', exception);
                this.afterFormSubmitted.emit(new ResponseEventArgs(false, exception, values));
                this.showProgressIndicator = false;
                if (this.configuration.notifications.showResultMessage) {
                    swal({
                        title: this.translatePipe.transform(this.configuration.notifications.submitErrorMessageTitle),
                        html: this.translatePipe.transform(this.configuration.notifications.submitErrorMessageDetails),
                        type: SwalTypes.Error,
                        confirmButtonText: this.languageService.translations.buttons.Ok
                    });
                }
            });
        }
        else {
            this.validationSummaryComponent.showSummaryAlert();
        }
    }
    /**
     * \@description Validates the form.
     * @return {?}
     */
    validateForm() {
        for (const fieldComponent of this.fieldComponents) {
            this.validateFormFieldComponent(fieldComponent);
        }
    }
    /**
     * \@description Gets whether the form is valid.
     * @return {?} boolean Whether the form is valid.
     */
    isFormValid() {
        return !this.configuration.validationErrors || this.configuration.validationErrors.length === 0;
    }
    /**
     * \@description Gets the request body.
     * @return {?} any source The request body.
     */
    getRequestBody() {
        if (this.configuration.settings.postMode === PostModes.FormData) {
            return this.getFormData();
        }
        else {
            return this.getFormValues();
        }
    }
    /**
     * \@description Gets the form field values.
     * @return {?} any source The form values.
     */
    getFormValues() {
        /** @type {?} */
        const values = {};
        for (const fieldComponent of this.fieldComponents) {
            if (fieldComponent.field.data) {
                values[fieldComponent.field.name] = fieldComponent.getValue();
            }
        }
        return values;
    }
    /**
     * \@description Gets the form field values.
     * @return {?} any source The form data.
     */
    getFormData() {
        /** @type {?} */
        let data = new FormData();
        for (const fieldComponent of this.fieldComponents) {
            data = fieldComponent.appendFormData(data);
        }
        return data;
    }
    /**
     * \@description Gets a field component reference by its name.
     * @param {?} name
     * @return {?} FieldComponent The field component reference.
     */
    getComponent(name) {
        return this.fieldComponents.find(fc => fc.field.name === name);
    }
    /**
     * \@description Checks whether the button should be hidden.
     * @param {?} button
     * @return {?} FieldComponent Whether the button should be hidden.
     */
    isButtonHidden(button) {
        return (button && button.hidden) || (this.configuration.currentSection &&
            this.configuration.currentSection.hideButtons &&
            this.configuration.currentSection.hideButtons.indexOf(button.name) > -1);
    }
    /**
     * \@description Sets the form data.
     * @param {?} formData
     * @return {?}
     */
    setFormData(formData) {
        for (const responseField of formData.fields) {
            if (responseField.value) {
                /** @type {?} */
                const fieldComponent = this.getComponent(responseField.name);
                if (fieldComponent) {
                    fieldComponent.updateValue(responseField);
                }
            }
        }
    }
    /**
     * \@description Binds the dynamic form.
     * @return {?}
     */
    bindForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadConfiguration();
            /** @type {?} */
            const dateFields = this.configuration.mergedFields.filter(f => f.fieldType === FieldTypes.DateTime);
            for (const field of dateFields) {
                this.handleDefaultDateTimeSettings(field);
            }
            this.changeDetectorRef.detectChanges();
            this.fieldComponents = this.fieldComponents.concat(this.inputFieldComponents.toArray(), this.selectFieldComponents.toArray(), this.datetimeFieldComponents.toArray(), this.datetimeHijriFieldComponents.toArray(), this.checkboxFieldComponents.toArray(), this.radiobuttonFieldComponents.toArray(), this.multiSelectFieldComponents.toArray(), this.chipsFieldComponents.toArray(), this.editorFieldComponents.toArray(), this.maskFieldComponents.toArray(), this.timeFieldComponents.toArray(), this.locationFieldComponents.toArray(), this.fileUploadFieldComponents.toArray(), this.imageCropperFieldComponents.toArray(), this.recaptchaFieldComponents.toArray(), this.ratingFieldComponents.toArray());
            this.handleDefaultSettings();
            this.bindFormData();
            for (const fieldComponent of this.locationFieldComponents.toArray()) {
                fieldComponent.activateSearchInput();
            }
            this.translateService.onLangChange.subscribe(response => {
                if (this.configuration.settings.formMode === FormModes.Display) {
                    this.bindFormData();
                }
                for (const fieldComponent of this.recaptchaFieldComponents.toArray()) {
                    fieldComponent.setCaptchaLanguge();
                }
            });
        });
    }
    /**
     * \@description Loads the configuration as a get request or from local storage.
     * @return {?}
     */
    loadConfiguration() {
        return __awaiter(this, void 0, void 0, function* () {
            this.configuration = yield this.utilitiesService.loadFile(this.configurationSourceUrl);
            // if it is in local, read the already merged fields. otherwise, merge it and save in local storage.
            if (!this.configuration.isLocal) {
                // merge the form json schema from the different source pieces.
                if (this.configuration.settings.sourceFormSchemas) {
                    for (let i = this.configuration.settings.sourceFormSchemas.length - 1; i >= 0; i--) {
                        /** @type {?} */
                        const sourceFormSchemaUrl = this.configuration.settings.sourceFormSchemas[i];
                        /** @type {?} */
                        const sourceFormSchema = yield this.utilitiesService.loadFile(sourceFormSchemaUrl);
                        this.configuration = this.utilitiesService.mergeRecursive(sourceFormSchema, this.configuration);
                    }
                }
                /** @type {?} */
                const allFields = yield this.utilitiesService.loadFile(this.configuration.settings.allFieldsSource);
                if (!allFields.isLocal) {
                    this.localStorageService.save(this.configuration.settings.allFieldsSource, allFields);
                }
                this.configuration.mergedFields = new Array();
                // merge the field properties with the all fields list.
                for (const fieldName in this.configuration.fields) {
                    if (this.configuration.fields.hasOwnProperty(fieldName)) {
                        /** @type {?} */
                        const sourceField = allFields.fields.find(f => f.name === fieldName);
                        if (sourceField) {
                            /** @type {?} */
                            const mergedField = this.utilitiesService.mergeRecursive(sourceField, this.configuration.fields[fieldName]);
                            this.configuration.mergedFields.push(mergedField);
                        }
                        else {
                            console.warn(`The field ${fieldName} doesn't exist in the all-fields-list.`);
                        }
                    }
                }
                this.localStorageService.save(this.configurationSourceUrl, this.configuration);
            }
            if (this.configuration.sections && this.configuration.sections.length > 0) {
                this.configuration.currentSection = this.configuration.sections[0];
            }
            this.bridgeService.configuration = this.configuration;
        });
    }
    /**
     * \@description Handles all fields' default settings.
     * @return {?}
     */
    handleDefaultSettings() {
        for (const fieldComponent of this.fieldComponents) {
            fieldComponent.handleDefaultSettings();
        }
    }
    /**
     * \@description Handles a date field's default settings.
     * It is buggy if done from the component after it is loaded.
     * @param {?} field
     * @return {?}
     */
    handleDefaultDateTimeSettings(field) {
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
    }
    /**
     * \@description Binds the form data.
     * @return {?}
     */
    bindFormData() {
        if (this.configuration.endpoints.get) {
            /** @type {?} */
            const endpoint = this.utilitiesService.replaceTokens(this.configuration.endpoints.get, this.route, this.bridgeService.additionalParameters);
            this.httpRequestsService.get(endpoint).subscribe(response => {
                this.setFormData(response);
                this.formDataBound.emit(response);
                this.showProgressIndicator = false;
            }, exception => {
                console.error('bindFormData: ', exception);
                this.showProgressIndicator = false;
                if (this.configuration.notifications.showResultMessage) {
                    swal({
                        title: this.translatePipe.transform(this.configuration.notifications.getErrorMessageTitle),
                        html: this.translatePipe.transform(this.configuration.notifications.getErrorMessageDetails),
                        type: SwalTypes.Error,
                        confirmButtonText: this.languageService.translations.buttons.Ok
                    });
                }
            });
        }
        else {
            this.formDataBound.emit(null);
            this.showProgressIndicator = false;
        }
    }
    /**
     * \@description Validates a form field component.
     * @param {?} fieldComponent
     * @return {?} Array<InputError> The list of validation errors.
     */
    validateFormFieldComponent(fieldComponent) {
        /** @type {?} */
        let fieldValidationErrors = new Array();
        if (!fieldComponent.field.hidden) {
            fieldValidationErrors = fieldComponent.validate(null, true);
        }
        return fieldValidationErrors;
    }
    /**
     * \@description Triggers a dynamic event in case it is defined.
     * @param {?} eventType
     * @param {?} eventArguments
     * @param {?} source
     * @return {?}
     */
    triggerDynamicEvent(eventType, eventArguments, source) {
        if (source.eventTriggers) {
            /** @type {?} */
            const event = source.eventTriggers[eventType];
            /** @type {?} */
            const parentEventHandlerFunction = this.parentComponent[event];
            if (parentEventHandlerFunction) {
                parentEventHandlerFunction(this.parentComponent, source);
            }
        }
    }
}
DynamicFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-dynamic-form',
                template: `<div #container
     class="container">
  <form class="dynamic-form-form"
        #f="ngForm"
        (ngSubmit)="submitForm(f)"
        [hidden]="showProgressIndicator"
        autocomplete="on">
    <div class="dynamic-form">
      <div class="sections sections-top"
           *ngIf="configuration?.settings?.sectionLocation == 'Top' || configuration?.settings?.sectionLocation == 'Both'">
        <!-- section tabs -->
        <ntw-tabs-section *ngIf="configuration?.settings?.sectionMode == 'Tabs'"></ntw-tabs-section>

        <!-- next previous -->
        <ntw-next-previous-section *ngIf="configuration?.settings?.sectionMode == 'NextPrevious'"></ntw-next-previous-section>
      </div>

      <div class="clearfix"></div>

      <!-- form -->
      <div class="form-container row">
        <div [class]="field.cssClasses.wrapper"
             *ngFor="let field of configuration?.mergedFields">

          <!-- info -->
          <ntw-info-field [field]="field"
                          *ngIf="field.fieldType=='info'">
          </ntw-info-field>

          <!-- text or number or password -->
          <ntw-input-field [field]="field"
                           *ngIf="(field.fieldType=='text' || field.fieldType=='number' || field.fieldType=='password')">
          </ntw-input-field>

          <!-- dropdown list -->
          <ntw-select-field [field]="field"
                            *ngIf="field.fieldType=='select'">
          </ntw-select-field>

          <!-- datetime picker -->
          <ntw-datetime-field [field]="field"
                              *ngIf="field.fieldType=='datetime'">
          </ntw-datetime-field>

          <!-- hijri datetime picker -->
          <ntw-datetime-hijri-field [field]="field"
                                    *ngIf="field.fieldType=='datetimehijri'">
          </ntw-datetime-hijri-field>

          <!-- time picker -->
          <ntw-time-field [field]="field"
                          *ngIf="field.fieldType=='time'">
          </ntw-time-field>

          <!-- checkbox list -->
          <ntw-checkbox-field [field]="field"
                              *ngIf="field.fieldType=='checkbox'">
          </ntw-checkbox-field>

          <!-- radiobutton list -->
          <ntw-radiobutton-field [field]="field"
                                 *ngIf="field.fieldType=='radiobutton'">
          </ntw-radiobutton-field>

          <!-- multiSelect list -->
          <ntw-multi-select-field [field]="field"
                                  *ngIf="field.fieldType=='multiselect'">
          </ntw-multi-select-field>

          <!-- chips -->
          <ntw-chips-field [field]="field"
                           *ngIf="field.fieldType=='chips'">
          </ntw-chips-field>

          <!-- editor -->
          <ntw-editor-field [field]="field"
                            *ngIf="field.fieldType=='editor'">
          </ntw-editor-field>

          <!-- mask -->
          <ntw-mask-field [field]="field"
                          *ngIf="field.fieldType=='mask'">
          </ntw-mask-field>

          <!-- location -->
          <ntw-location-field [field]="field"
                              *ngIf="field.fieldType=='location'">
          </ntw-location-field>

          <!-- file upload -->
          <ntw-file-upload-field [field]="field"
                                 *ngIf="field.fieldType=='fileupload'">
          </ntw-file-upload-field>

          <!-- Rating -->
          <ntw-rating-field [field]="field"
                            *ngIf="field.fieldType=='rating'">
          </ntw-rating-field>

          <!-- recaptcha -->
          <ntw-recaptcha-field [field]="field"
                               *ngIf="field.fieldType=='recaptcha'">
          </ntw-recaptcha-field>

          <!-- image cropper -->
          <ntw-image-cropper-field [field]="field"
                                   *ngIf="field.fieldType=='imagecropper'">
          </ntw-image-cropper-field>

          <!-- masterdetail -->
          <ntw-master-detail-field [field]="field"
                                   *ngIf="field.fieldType=='masterdetail'">
          </ntw-master-detail-field>
        </div>
      </div>

      <div class="clearfix"></div>

      <!-- validation summary -->
      <ntw-validation-summary></ntw-validation-summary>

      <!-- buttons -->
      <div [class]="configuration?.buttons?.cssClass"
           data-html2canvas-ignore="true">
        <span class="main-buttons"
              *ngIf="configuration?.settings?.formMode != 'Display'">
          <button type="button"
                  [name]="configuration?.buttons?.main?.clear?.name"
                  [title]="configuration?.buttons?.main?.clear?.tooltip | translate"
                  [disabled]="configuration?.buttons?.main?.clear?.disabled"
                  [hidden]="isButtonHidden(configuration?.buttons?.main?.clear)"
                  [class]="configuration?.buttons?.main?.clear?.cssClass"
                  (click)="clearForm(f)">
            {{configuration?.buttons?.main?.clear?.label | translate}}
          </button>
          <button type="button"
                  [name]="configuration?.buttons?.main?.save?.name"
                  [title]="configuration?.buttons?.main?.save?.tooltip | translate"
                  [disabled]="configuration?.buttons?.main?.save?.disabled"
                  [hidden]="isButtonHidden(configuration?.buttons?.main?.save)"
                  [class]="configuration?.buttons?.main?.save?.cssClass"
                  (click)="saveForm(f)">
            {{configuration?.buttons?.main?.save?.label | translate}}
          </button>
          <button type="submit"
                  [name]="configuration?.buttons?.main?.submit?.name"
                  [title]="configuration?.buttons?.main?.submit?.tooltip | translate"
                  [disabled]="configuration?.buttons?.main?.submit?.disabled"
                  [hidden]="isButtonHidden(configuration?.buttons?.main?.submit)"
                  [class]="configuration?.buttons?.main?.submit?.cssClass">
            {{configuration?.buttons?.main?.submit?.label | translate}}
          </button>
        </span>

        <span class="additional-buttons">
          <button *ngFor="let button of configuration?.buttons?.additionalButtons"
                  type="button"
                  [name]="button?.name"
                  [title]="button?.tooltip | translate"
                  [disabled]="button?.disabled"
                  [hidden]="isButtonHidden(button)"
                  [class]="button?.cssClass"
                  (click)="triggerDynamicEvent('click', $event, button);">
            {{button?.label | translate}}
          </button>
        </span>
      </div>

      <div class="sections sections-bottom"
           *ngIf="configuration?.settings?.sectionLocation == 'Bottom' || configuration?.settings?.sectionLocation == 'Both'">
        <!-- section tabs -->
        <ntw-tabs-section *ngIf="configuration?.settings?.sectionMode == 'Tabs'"></ntw-tabs-section>

        <!-- next previous -->
        <ntw-next-previous-section *ngIf="configuration?.settings?.sectionMode == 'NextPrevious'"></ntw-next-previous-section>
      </div>
    </div>
  </form>

  <div class="clearfix"></div>

  <ntw-progress-indicator *ngIf="showProgressIndicator"
                          [spinnerSourceUrl]="configuration?.settings?.spinnerSourceUrl"></ntw-progress-indicator>
</div>
`,
                styles: [`.formButtons{margin:20px 0}body.ar .main-buttons button{margin-left:10px}body.en .main-buttons button{margin-right:10px}body.ar{direction:rtl!important;text-align:right!important}body.en{direction:ltr!important;text-align:left!important}.ui-dropdown,input.form-input,input.ui-inputtext.ui-widget.ui-state-default,p-dropdown{width:100%!important;height:35px}.input-container{margin-top:24px}label.form-label{font-weight:700}span.required-asterisk{color:red}p.error,p.validation-error{display:block;color:red}.result img{width:150px;height:150px}.form-display{display:block}w-clock *{box-sizing:content-box!important}`],
                providers: [TranslatePipe, BridgeService, UtilitiesService],
                // provide the bridge service here in order to have a different instance per form instance.
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
DynamicFormComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: HttpRequestsService },
    { type: LocalStorageService },
    { type: UtilitiesService },
    { type: TranslateService },
    { type: LanguageService },
    { type: ChangeDetectorRef },
    { type: TranslatePipe },
    { type: ActivatedRoute, decorators: [{ type: Optional }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DefaultMasterDetailFormComponent {
    /**
     * @param {?} dialogRef
     * @param {?} field
     */
    constructor(dialogRef, field) {
        this.dialogRef = dialogRef;
        this.field = field;
    }
    /**
     * \@description Adds a child and closes the dialog.
     * @param {?} current
     * @param {?} triggeringField
     * @return {?}
     */
    addChild(current, triggeringField) {
        //current.detailsFormComponent.validateForm();
        //if (current.detailsFormComponent.configuration.validationErrors.length === 0) {
        //  const values = current.detailsFormComponent.getFormValues();
        //  current.dialogRef.close(values);
        //}
    }
}
DefaultMasterDetailFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-default-master-detail-form',
                template: `<mat-dialog-actions>
    <button mat-dialog-close mat-button>
        <i class="fa fa-times-circle"
           aria-hidden="true">
        </i>
    </button>
</mat-dialog-actions>

<mat-dialog-content>
    <ntw-dynamic-form #detailsForm
                      [parentComponent]="this"
                      [configurationSourceUrl]="field.details.configurationSourceUrl">
    </ntw-dynamic-form>
</mat-dialog-content>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
DefaultMasterDetailFormComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: Field, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
DefaultMasterDetailFormComponent.propDecorators = {
    detailsFormComponent: [{ type: ViewChild, args: ['detailsForm',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MasterDetailFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} dialog
     */
    constructor(bridgeService, dialog) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.dialog = dialog;
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Opens the details dialog.
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const detailsDialog = this.dialog.open(DefaultMasterDetailFormComponent, {
            data: this.field
        });
        detailsDialog.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
}
MasterDetailFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-master-detail-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <div>
    <a href="javascript:;"
       (click)="openDialog();">
      <i class="fa fa-plus"></i>
    </a>
  </div>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">

  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
MasterDetailFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: MatDialog }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NextPreviousSectionComponent {
    /**
     * @param {?} bridgeService
     */
    constructor(bridgeService) {
        this.bridgeService = bridgeService;
    }
    /**
     * \@description Cycles through the sections.
     * @param {?} increment
     * @return {?}
     */
    incrementSection(increment) {
        /** @type {?} */
        let newSectionId = this.bridgeService.configuration.currentSection.id + increment;
        if (newSectionId === 0) {
            newSectionId = this.bridgeService.configuration.sections.length;
        }
        else if (newSectionId === this.bridgeService.configuration.sections.length + 1) {
            newSectionId = 1;
        }
        this.bridgeService.configuration.currentSection = this.bridgeService.configuration.sections.find(s => s.id === newSectionId);
    }
}
NextPreviousSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-next-previous-section',
                template: `<div class="next-prev-container">
  <a class="arrow-prev"
     href="javascript:;"
     (click)="incrementSection(-1)"
     title="{{'buttons.Previous' | translate}}">
  </a>
  <span class="next-prev-header">{{bridgeService.configuration?.currentSection?.legend | translate}}</span>
  <a class="arrow-next"
     href="javascript:;"
     (click)="incrementSection(1)"
     title="{{'buttons.Next' | translate}}">
  </a>
</div>
`,
                styles: [`.next-prev-container a{text-decoration:none!important}.next-prev-container{text-align:center}.next-prev-header{font-size:2em;font-weight:700}body.en :host ::ng-deep a.arrow-prev:before{content:"\\f104";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next:before{content:"\\f105";font:3em/1 FontAwesome;color:#555565}body.en :host ::ng-deep a.arrow-next{float:right}body.en :host ::ng-deep a.arrow-prev{float:left}body.ar :host ::ng-deep a.arrow-prev:before{content:"\\f105";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next:before{content:"\\f104";font:3em/1 FontAwesome;color:#555565}body.ar :host ::ng-deep a.arrow-next{float:left}body.ar :host ::ng-deep a.arrow-prev{float:right}`]
            },] },
];
/** @nocollapse */
NextPreviousSectionComponent.ctorParameters = () => [
    { type: BridgeService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TabsSectionComponent {
    /**
     * @param {?} bridgeService
     */
    constructor(bridgeService) {
        this.bridgeService = bridgeService;
    }
    /**
     * \@description Switches the active section.
     * @param {?} section
     * @return {?}
     */
    switchSection(section) {
        this.bridgeService.configuration.currentSection = section;
    }
}
TabsSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-tabs-section',
                template: `<ul class="nav nav-tabs">
  <li *ngFor="let section of bridgeService?.configuration?.sections"
      class="nav-item">
    <a class="nav-link"
       href="javascript:;"
       [ngClass]="{'active':section.id==bridgeService?.configuration?.currentSection?.id}"
       (click)="switchSection(section)">
      <span>{{section.legend | translate}}</span>
      <span class="validation-errors-count"
            *ngIf="section.validationErrorsCount > 0">
      </span>
    </a>
  </li>
</ul>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
TabsSectionComponent.ctorParameters = () => [
    { type: BridgeService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ProgressIndicatorComponent {
}
ProgressIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-progress-indicator',
                template: `<div class="progress-indicator-container"
     *ngIf="spinnerSourceUrl">
  <div class="progress-indicator">
    <img [src]="spinnerSourceUrl"
         class="progress-indicator-image"
         alt="progress" />
  </div>
</div>
`,
                styles: [``]
            },] },
];
ProgressIndicatorComponent.propDecorators = {
    spinnerSourceUrl: [{ type: Input, args: ['spinnerSourceUrl',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NetwaysLibModule {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d2F5cy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25ldHdheXMtbGliL2xpYi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL2RhdGVwaWNrZXItY2FsZW5kYXIuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL2V4cG9ydC5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZS50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL3NlcnZpY2VzL3V0aWxpdGllcy5zZXJ2aWNlLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2FsbC1maWVsZHMudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvY29uZmlndXJhdGlvbi50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9kZWZhdWx0LWxvY2F0aW9uLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2VuZHBvaW50cy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9lbnVtcy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9maWVsZC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9maWVsZC1kYXRhLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL2ZpZWxkLXZhbGlkYXRpb24udHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvaW5wdXQtZXJyb3IudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFwLW1hcmtlci50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9tYXJrZXItc2V0dGluZ3MudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFya2V0LXNldHRpbmdzLWRlZmF1bHQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvbWFzdGVyLWRldGFpbC1kZXRhaWxzLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbW9kZWxzL25vdGlmaWNhdGlvbnMudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9tb2RlbHMvc2VjdGlvbi50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9zZXR0aW5ncy50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL21vZGVscy9yZXNwb25zZS1ldmVudC1hcmdzLnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS1kaWFsb2cvdy10aW1lLWRpYWxvZy5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LW1hdC10aW1lcGlja2VyL3ctbWF0LXRpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lL3ctdGltZS5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9maWVsZC9maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoZWNrYm94LWZpZWxkL2NoZWNrYm94LWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoaXBzLWZpZWxkL2NoaXBzLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWZpZWxkL2RhdGV0aW1lLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2VkaXRvci1maWVsZC9lZGl0b3ItZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW1hZ2UtY3JvcHBlci1maWVsZC9pbWFnZS1jcm9wcGVyLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2luZm8tZmllbGQvaW5mby1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9sb2NhdGlvbi1maWVsZC9sb2NhdGlvbi1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tdWx0aS1zZWxlY3QtZmllbGQvbXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yZWNhcHRjaGEtZmllbGQvcmVjYXB0Y2hhLWZpZWxkLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhdGluZy1maWVsZC9yYXRpbmctZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vbmV0d2F5cy1saWIvbGliL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL25ldHdheXMtbGliL2xpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXN0ZXItZGV0YWlsLWZpZWxkL21hc3Rlci1kZXRhaWwtZmllbGQuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL25leHQtcHJldmlvdXMtc2VjdGlvbi9uZXh0LXByZXZpb3VzLXNlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3Byb2dyZXNzLWluZGljYXRvci9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9uZXR3YXlzLWxpYi9saWIvbmV0d2F5cy1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IE5ldHdheXNMaWJNb2R1bGUgfSBmcm9tICcuLi9uZXR3YXlzLWxpYi5tb2R1bGUnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEJyaWRnZVNlcnZpY2Uge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNvbmZpZ3VyYXRpb24uKi9cclxuICBwdWJsaWMgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcGFyZW50IGNvbXBvbmVudCBob3N0aW5nIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwdWJsaWMgcGFyZW50Q29tcG9uZW50OiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy4qL1xyXG4gIHB1YmxpYyBhZGRpdGlvbmFsUGFyYW1ldGVyczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCwgTmdiRGF0ZXBpY2tlckkxOG4gfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBJMThOX1ZBTFVFUyA9IHtcclxuICB3ZWVrZGF5czogWyfDmMKlw5jCqycsICfDmMKrw5nChCcsICfDmMKjw5jCsScsICfDmMKuw5nChScsICfDmMKsw5nChScsICfDmMKzw5jCqCcsICfDmMKjw5jCrSddLFxyXG4gIG1vbnRoczogWyfDmcKFw5jCrcOYwrHDmcKFJywgJ8OYwrXDmcKBw5jCsScsICfDmMKxw5jCqMOZworDmMK5IMOYwqfDmcKEw5jCo8OZwojDmcKEJywgJ8OYwrHDmMKow5nCisOYwrkgw5jCp8OZwoTDmMKiw5jCrsOYwrEnLCAnw5jCrMOZwoXDmMKnw5jCr8OZwokgw5jCp8OZwoTDmMKjw5nCiMOZwoTDmcKJJywgJ8OYwqzDmcKFw5jCp8OYwq/DmcKJIMOYwqfDmcKEw5jCosOYwq7DmMKxw5jCqScsICfDmMKxw5jCrMOYwqgnLCAnw5jCtMOYwrnDmMKow5jCp8OZwoYnLCAnw5jCscOZwoXDmMK2w5jCp8OZwoYnLCAnw5jCtMOZwojDmMKnw5nChCcsXHJcbiAgICAnw5jCsMOZwoggw5jCp8OZwoTDmcKCw5jCucOYwq/DmMKpJywgJ8OYwrDDmcKIIMOYwqfDmcKEw5jCrcOYwqzDmMKpJ11cclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBJc2xhbWljSTE4biBleHRlbmRzIE5nYkRhdGVwaWNrZXJJMThuIHtcclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHdlZWtkYXkgc2hvcnQgbmFtZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIHdlZWtkYXkgVGhlIHdlZWtkYXkuXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIHdlZWtkYXkgc2hvcnQgbmFtZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRXZWVrZGF5U2hvcnROYW1lKHdlZWtkYXk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSTE4Tl9WQUxVRVMud2Vla2RheXNbd2Vla2RheSAtIDFdO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSB3ZWVrZGF5IHNob3J0IG5hbWUuXHJcbiAgICogQHBhcmFtIG51bWJlciBtb250aCBUaGUgbW9udGguXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIG1vbnRoIHNob3J0IG5hbWUuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0TW9udGhTaG9ydE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSTE4Tl9WQUxVRVMubW9udGhzW21vbnRoIC0gMV07XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIG1vbnRoIGZ1bGwgbmFtZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIG1vbnRoIFRoZSBtb250aC5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgbW9udGggZnVsbCBuYW1lLlxyXG4gICovXHJcbiAgcHVibGljIGdldE1vbnRoRnVsbE5hbWUobW9udGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRNb250aFNob3J0TmFtZShtb250aCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGRheSBhcmlhIGxhYmVsLlxyXG4gICAqIEBwYXJhbSBOZ2JEYXRlU3RydWN0IGRhdGUgVGhlIGRhdGUuXHJcbiAgICogQHJldHVybiBzdHJpbmcgVGhlIGRheSBhcmlhIGxhYmVsLlxyXG4gICovXHJcbiAgcHVibGljIGdldERheUFyaWFMYWJlbChkYXRlOiBOZ2JEYXRlU3RydWN0KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtkYXRlLmRheX0tJHtkYXRlLm1vbnRofS0ke2RhdGUueWVhcn1gO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEZpbGVTYXZlciBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcclxuXHJcbmNvbnN0IGV4Y2VsRXh0ZW5zaW9uID0gJy54bHN4JztcclxuY29uc3QgcGRmVHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xyXG5jb25zdCBwZGZFeHRlbnNpb24gPSAnLnBkZic7XHJcblxyXG5kZWNsYXJlIGxldCBodG1sMmNhbnZhcywgcGRmTWFrZTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBFeHBvcnRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgYSBqc29uIG9iamVjdCBhcyBhbiBleGNlbCBmaWxlLlxyXG4gICAqIEBwYXJhbSBhbnkganNvbiBUaGUganNvbiBvYmplY3QuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlTmFtZSBUaGUgZXhjZWwgZmlsZSBuYW1lLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIHJ0bCBXaGV0aGVyIHJpZ2h0IHRvIGxlZnQgb3IgbGVmdCB0byByaWdodC5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBza2lwSGVhZGVyIFdoZXRoZXIgdG8gc2tpcCB0aGUgaGVhZGVyLlxyXG4gICovXHJcbiAgcHVibGljIGV4cG9ydEFzRXhjZWwoanNvbjogYW55W10sIGZpbGVOYW1lOiBzdHJpbmcsIHJ0bDogYm9vbGVhbiA9IHRydWUsIHNraXBIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgLy8gZ2VuZXJhdGUgd29ya3NoZWV0XHJcbiAgICBjb25zdCB3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGpzb24sIHsgc2tpcEhlYWRlcjogc2tpcEhlYWRlciB9KTtcclxuXHJcbiAgICBjb25zdCB3b3JrYm9vazogWExTWC5Xb3JrQm9vayA9IFhMU1gudXRpbHMuYm9va19uZXcoKTtcclxuXHJcbiAgICBpZiAoIXdvcmtib29rLldvcmtib29rKSB7XHJcbiAgICAgIHdvcmtib29rLldvcmtib29rID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3b3JrYm9vay5Xb3JrYm9vay5WaWV3cykge1xyXG4gICAgICB3b3JrYm9vay5Xb3JrYm9vay5WaWV3cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd29ya2Jvb2suV29ya2Jvb2suVmlld3NbMF0pIHtcclxuICAgICAgd29ya2Jvb2suV29ya2Jvb2suVmlld3NbMF0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JrYm9vay5Xb3JrYm9vay5WaWV3c1swXS5SVEwgPSBydGw7XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgd29ya2Jvb2sgYW5kIGFkZCB0aGUgd29ya3NoZWV0XHJcbiAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdvcmtib29rLCB3b3Jrc2hlZXQsICdkYXRhJyk7XHJcblxyXG4gICAgLy8gc2F2ZSB0byBmaWxlICpcclxuICAgIFhMU1gud3JpdGVGaWxlKHdvcmtib29rLCBmaWxlTmFtZSArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZXhjZWxFeHRlbnNpb24pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIGFuIGh0bWwgc3RyaW5nIGFzIHBkZi5cclxuICAgICogQHBhcmFtIHN0cmluZyBodG1sIFRoZSBodG1sIHRvIHByaW50LlxyXG4gICAgKiBAcGFyYW0gQXJyYXk8bnVtYmVyPiBtYXJnaW5zIFRoZSBwZGYgcGFnZSBtYXJnaW5zLlxyXG4gICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVOYW1lIFRoZSBwZGYgZmlsZSBuYW1lLlxyXG4gICAgKiBAcGFyYW0gYW55IHNpemUgVGhlIHBkZiBzaXplLlxyXG4gICovXHJcbiAgcHVibGljIGV4cG9ydEFzUGRmKGh0bWw6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgc2l6ZTogYW55ID0gJ0E0JywgbWFyZ2luczogQXJyYXk8bnVtYmVyPiA9IFswLCAwXSkge1xyXG4gICAgaWYgKGh0bWwpIHtcclxuICAgICAgaHRtbDJjYW52YXMoaHRtbCkudGhlbihjYW52YXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFVcmkgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvY0RlZmluaXRpb24gPSB7XHJcbiAgICAgICAgICBwYWdlU2l6ZTogc2l6ZSxcclxuICAgICAgICAgIHBhZ2VNYXJnaW5zOiBtYXJnaW5zLFxyXG4gICAgICAgICAgY29udGVudDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaW1hZ2U6IGRhdGFVcmlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHBkZk1ha2UuY3JlYXRlUGRmKGRvY0RlZmluaXRpb24pLmdldEJsb2IoKGZpbGUpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvbXB0RmlsZVNhdmUoZmlsZSwgcGRmVHlwZSwgZmlsZU5hbWUsIHBkZkV4dGVuc2lvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIGEgZmlsZSBhcyBwZGYuXHJcbiAgICogQHBhcmFtIGFueSBidWZmZXIgVGhlIGZpbGUgYnVmZmVyLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZVR5cGUgVGhlIGZpbGUgbWltZSB0eXBlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZU5hbWUgVGhlIGZpbGUgbmFtZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVFeHRlbnNpb24gVGhlIGZpbGUgZXh0ZW5zaW9uLlxyXG4gICovXHJcbiAgcHVibGljIHByb21wdEZpbGVTYXZlKGJ1ZmZlcjogYW55LCBmaWxlVHlwZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBmaWxlRXh0ZW5zaW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGE6IEJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwge1xyXG4gICAgICB0eXBlOiBmaWxlVHlwZVxyXG4gICAgfSk7XHJcblxyXG4gICAgRmlsZVNhdmVyLnNhdmVBcyhkYXRhLCBmaWxlTmFtZSArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgZmlsZUV4dGVuc2lvbik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwUmVxdWVzdHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgYSBnZXQgcmVxdWVzdCBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBlbmRwb2ludFVybCBUaGUgZW5kcG9pbnQgVXJsLlxyXG4gICAqIEByZXR1cm4gT2JzZXJ2YWJsZTxhbnk+IFRoZSByZXNwb25zZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXQoZW5kcG9pbnRVcmw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PGFueT4oZW5kcG9pbnRVcmwsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgcG9zdCByZXF1ZXN0IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50VXJsIFRoZSBlbmRwb2ludCBVcmwuXHJcbiAgICogQHBhcmFtIGFueSByZXF1ZXN0IFRoZSByZXF1ZXN0IHBheWxvYWQuXHJcbiAgICogQHJldHVybiBPYnNlcnZhYmxlPGFueT4gVGhlIHJlc3BvbnNlLlxyXG4gICovXHJcbiAgcHVibGljIHBvc3QoZW5kcG9pbnRVcmw6IHN0cmluZywgcmVxdWVzdDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4oZW5kcG9pbnRVcmwsIHJlcXVlc3QsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIGEgcHV0IHJlcXVlc3QgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZW5kcG9pbnRVcmwgVGhlIGVuZHBvaW50IFVybC5cclxuICAgKiBAcGFyYW0gYW55IHJlcXVlc3QgVGhlIHJlcXVlc3QgcGF5bG9hZC5cclxuICAgKiBAcmV0dXJuIE9ic2VydmFibGU8YW55PiBUaGUgcmVzcG9uc2UuXHJcbiAgKi9cclxuICBwdWJsaWMgcHV0KGVuZHBvaW50VXJsOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0PGFueT4oZW5kcG9pbnRVcmwsIHJlcXVlc3QsIHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyBhIHJlY29yZCBleGlzdHMgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgcmVjb3JkIGV4aXN0cy5cclxuICAqL1xyXG4gIHB1YmxpYyBkb2VzS2V5RXhpc3Qoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNhdmVzIGEgcmVjb3JkIGluIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuXHJcbiAgICogQHBhcmFtIGFueSBkYXRhIFRoZSByZWNvcmQgZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBzYXZlKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBMb2FkcyBhIHJlY29yZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuXHJcbiAgICogQHJldHVybiBhbnkgZGF0YSBUaGUgcmVjb3JkIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgbG9hZChrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gTG9hZHMgYSByZWNvcmQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSBpZiBpdCBleGlzdHMuXHJcbiAgICogQWx0ZXJuYXRpdmVseSByZXR1cm5zIGEgZGVmYXVsdCB2YWx1ZSBpZiBub3QgZm91bmQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBrZXkgVGhlIGtleS5cclxuICAgKiBAcGFyYW0gYW55IGRlZmF1bHRWYWx1ZSBUaGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIGFueSBkYXRhIFRoZSByZWNvcmQgZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBsb2FkT3JEZWZhdWx0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmxvYWQoa2V5KTtcclxuXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzYXZlZCBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBzYXZlZExhbmd1YWdlID0gdGhpcy5sb2NhbFN0b3JhZ2UubG9hZE9yRGVmYXVsdCgnTGFuZ3VhZ2UnLCAnZW4nKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdHJhbnNsYXRpb25zLiovXHJcbiAgcHVibGljIHRyYW5zbGF0aW9uczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UoZXZlbnQubGFuZyk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IGV2ZW50LnRyYW5zbGF0aW9ucztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsYW5ndWFnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGxhbmd1YWdlIFRoZSBsYW5ndWFnZS5cclxuICAqL1xyXG4gIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2UobGFuZ3VhZ2UpO1xyXG5cclxuICAgIHRoaXMuc2F2ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG5cclxuICAgIHRoaXMubG9jYWxTdG9yYWdlLnNhdmUoJ0xhbmd1YWdlJywgbGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBnZXRMYW5ndWFnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZS5sb2FkT3JEZWZhdWx0KCdMYW5ndWFnZScsICdlbicpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICcuL2h0dHAtcmVxdWVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuL2JyaWRnZS5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgbGV0IGZpZWxkRXZhbEZ1bmN0aW9ucztcclxuXHJcbmNvbnN0IGZ1bmN0aW9uVG9rZW46IHN0cmluZyA9ICdGdW5jdGlvbjonO1xyXG5cclxuLy8gcmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXHJcbmNvbnN0IHNwYWNlUmVnZXggPSAvXFwrL2c7XHJcblxyXG4vLyByZWdleCB0byBtYXRjaCBxdWVyeSBzdHJpbmdzXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nUmVnZXggPSAvKFteJj1dKyk9PyhbXiZdKikvZztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXRpZXNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cFJlcXVlc3RzU2VydmljZTogSHR0cFJlcXVlc3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV2YWx1YXRlcyBhIGZ1bnRpb24gZnJvbSBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gICAqIEFsdGVybmF0aXZlbHkgcmV0dXJucyBhIGRlZmF1bHQgdmFsdWUgaWYgbm90IGZvdW5kLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZnVuY3Rpb25TdHJpbmcgVGhlIGZ1bmN0aW9uIHN0cmluZy5cclxuICAgKiBAcGFyYW0gYW55IGRlZmF1bHRWYWx1ZSBUaGUgZGVmYXVsdCB2YWx1ZS5cclxuICAgKiBAcmV0dXJuIGFueSBUaGUgZnVudGlvbiBldmFsdWF0aW9uIHJlc3VsdC5cclxuICAqL1xyXG4gIHB1YmxpYyBldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZ1bmN0aW9uU3RyaW5nOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmIChmdW5jdGlvblN0cmluZy5pbmRleE9mKGZ1bmN0aW9uVG9rZW4pID49IDApIHtcclxuICAgICAgZnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvblN0cmluZy5yZXBsYWNlKGZ1bmN0aW9uVG9rZW4sICcnKTtcclxuXHJcbiAgICAgIGxldCBqc0Z1bmN0aW9uTmFtZSwganNGdW5jdGlvblBhcmFtZXRlcnMgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKGZ1bmN0aW9uU3RyaW5nLmluZGV4T2YoJywnKSA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZnVuY3Rpb25Ub2tlbnMgPSBmdW5jdGlvblN0cmluZy5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICBqc0Z1bmN0aW9uTmFtZSA9IGZ1bmN0aW9uVG9rZW5zWzBdO1xyXG5cclxuICAgICAgICBmdW5jdGlvblRva2Vucy5zaGlmdCgpO1xyXG5cclxuICAgICAgICBqc0Z1bmN0aW9uUGFyYW1ldGVycyA9IGZ1bmN0aW9uVG9rZW5zO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGpzRnVuY3Rpb25OYW1lID0gZnVuY3Rpb25TdHJpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzRnVuY3Rpb24gPSBmaWVsZEV2YWxGdW5jdGlvbnNbanNGdW5jdGlvbk5hbWVdO1xyXG5cclxuICAgICAgaWYgKGpzRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4ganNGdW5jdGlvbihqc0Z1bmN0aW9uUGFyYW1ldGVycywganNGdW5jdGlvblBhcmFtZXRlcnMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEF0dGVtcHRzIHRvIGxvYWQgYSBmaWxlIGZyb20gbG9jYWwgc3RvcmFnZS5cclxuICAgKiBJZiBub3QgZm91bmQgaXQgZ2V0cyBpdCBhcyBhIHdlYiByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSBzdHJpbmcga2V5IFRoZSBrZXkuIEl0IGlzIGJvdGggdGhlIHN0b3JhZ2Uga2V5IG9yIHRoZSB3ZWIgdXJsLlxyXG4gICAqIEByZXR1cm4gYW55IFRoZSBsb2FkZWQgZmlsZS5cclxuICAqL1xyXG4gIHB1YmxpYyBhc3luYyBsb2FkRmlsZShrZXkpIHtcclxuICAgIGxldCBmaWxlID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmRvZXNLZXlFeGlzdChrZXkpKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UubG9hZChrZXkpO1xyXG5cclxuICAgICAgZmlsZS5pc0xvY2FsID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGtleSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJlY3Vyc2l2ZWx5IG1lcmdlIHByb3BlcnRpZXMgb2YgdHdvIG9iamVjdHMgZnJvbSByaWdodCB0byBsZWZ0LlxyXG4gICAqIEBwYXJhbSBhbnkgb2JqZWN0MSBUaGUgbGVmdCBvYmplY3QuXHJcbiAgICogQHBhcmFtIGFueSBvYmplY3QyIFRoZSByaWdodCBvYmplY3QuXHJcbiAgICogQHJldHVybiBhbnkgVGhlIG1lcmdlZCBvYmplY3QuXHJcbiAgKi9cclxuICBwdWJsaWMgbWVyZ2VSZWN1cnNpdmUob2JqZWN0MTogYW55LCBvYmplY3QyOiBhbnkpOiBhbnkge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIGluIG9iamVjdDIpIHtcclxuICAgICAgaWYgKG9iamVjdDIuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gcHJvcGVydHkgaW4gZGVzdGluYXRpb24gb2JqZWN0IHNldDsgdXBkYXRlIGl0cyB2YWx1ZS5cclxuICAgICAgICAgIGlmIChvYmplY3QyW2l0ZW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgb2JqZWN0MVtpdGVtXSA9IHRoaXMubWVyZ2VSZWN1cnNpdmUob2JqZWN0MVtpdGVtXSwgb2JqZWN0MltpdGVtXSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmplY3QxW2l0ZW1dID0gb2JqZWN0MltpdGVtXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAvLyBwcm9wZXJ0eSBpbiBkZXN0aW5hdGlvbiBvYmplY3Qgbm90IHNldDsgY3JlYXRlIGl0IGFuZCBzZXQgaXRzIHZhbHVlLlxyXG4gICAgICAgICAgb2JqZWN0MVtpdGVtXSA9IG9iamVjdDJbaXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iamVjdDE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJldHVybnMgdGhlIHN0cmluZyB3aXRoIGl0cyB0b2tlbnMgcmVwbGFjZWQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAqIEBwYXJhbSBhbnkgcm91dGUgVGhlIHJvdXRlLlxyXG4gICAqIEBwYXJhbSBhbnkgYWRkaXRpb25hbFBhcmFtZXRlcnMgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAqL1xyXG4gIHB1YmxpYyByZXBsYWNlVG9rZW5zKGlucHV0OiBzdHJpbmcsIHJvdXRlOiBhbnksIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCd7bGFuZ3VhZ2VUb2tlbn0nLCB0aGlzLmxhbmd1YWdlU2VydmljZS5zYXZlZExhbmd1YWdlKTtcclxuXHJcbiAgICBpZiAocm91dGUgJiYgcm91dGUucGFyYW1zKSB7XHJcbiAgICAgIGlucHV0ID0gdGhpcy5yZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQsIHJvdXRlLnBhcmFtcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgdGhpcy5nZXRRdWVyeVN0cmluZ1BhcmFtZXRlcnMoKSk7XHJcblxyXG4gICAgaW5wdXQgPSB0aGlzLnJlcGxhY2VUb2tlbnNGcm9tUGFyYW1ldGVycyhpbnB1dCwgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuYmFzZUVuZFBvaW50VXJscyk7XHJcblxyXG4gICAgaWYgKGFkZGl0aW9uYWxQYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGlucHV0ID0gdGhpcy5yZXBsYWNlVG9rZW5zRnJvbVBhcmFtZXRlcnMoaW5wdXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHN0cmluZyB3aXRoIGl0cyB0b2tlbnMgcmVwbGFjZWQuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmcgaW5wdXQgVGhlIHN0cmluZyBpbnB1dC5cclxuICAgICogQHBhcmFtIGFueSBwYXJhbWV0ZXJzIFRoZSBwYXJhbWV0ZXJzLlxyXG4gICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgc3RyaW5nIHdpdGggaXRzIHRva2VucyByZXBsYWNlZC5cclxuICAqL1xyXG4gIHByaXZhdGUgcmVwbGFjZVRva2Vuc0Zyb21QYXJhbWV0ZXJzKGlucHV0OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSk6IHN0cmluZyB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbWV0ZXJzKSB7XHJcbiAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFyYW1WYWx1ZSA9IHBhcmFtZXRlcnNba2V5XTtcclxuXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKCd7JyArIGtleSArICd9JywgcGFyYW1WYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzLlxyXG4gICAgKiBAcmV0dXJuIG9iamVjdCBUaGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIGdldFF1ZXJ5U3RyaW5nUGFyYW1ldGVycygpOiBvYmplY3Qge1xyXG4gICAgY29uc3QgdXJsUGFyYW1ldGVycyA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XHJcblxyXG4gICAgbGV0IG1hdGNoO1xyXG5cclxuICAgIHdoaWxlIChtYXRjaCA9IHF1ZXJ5U3RyaW5nUmVnZXguZXhlYyhxdWVyeSkpIHtcclxuICAgICAgdXJsUGFyYW1ldGVyc1t0aGlzLmRlY29kZVVSSUNvbXBvbmVudChtYXRjaFsxXSldID0gdGhpcy5kZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmxQYXJhbWV0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBEZWNvZGVzIGEgVVJJIENvbXBvbmVudC5cclxuICAgICogQHBhcmFtIHN0cmluZyBpbnB1dCBUaGUgc3RyaW5nIGlucHV0LlxyXG4gICAgKiBAcmV0dXJuIHN0cmluZyBUaGUgZGVjb2RlZCBVUkkgQ29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0LnJlcGxhY2Uoc3BhY2VSZWdleCwgJyAnKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLic7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxsRmllbGRzIHtcclxuICBpc0xvY2FsOiBib29sZWFuO1xyXG5cclxuICBmaWVsZHM6IEFycmF5PEZpZWxkPjtcclxufVxyXG4iLCJpbXBvcnQgeyBTZXR0aW5ncywgRW5kcG9pbnRzLCBOb3RpZmljYXRpb25zLCBTZWN0aW9uLCBGaWVsZCwgSW5wdXRFcnJvciB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG4gIHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcbiAgZW5kcG9pbnRzOiBFbmRwb2ludHM7XHJcblxyXG4gIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnM7XHJcblxyXG4gIHNlY3Rpb25zOiBBcnJheTxTZWN0aW9uPjtcclxuXHJcbiAgY3VycmVudFNlY3Rpb246IFNlY3Rpb247XHJcblxyXG4gIGZpZWxkczogYW55O1xyXG5cclxuICBtZXJnZWRGaWVsZHM6IEFycmF5PEZpZWxkPjtcclxuXHJcbiAgdmFsaWRhdGlvbkVycm9yczogQXJyYXk8SW5wdXRFcnJvcj47XHJcblxyXG4gIGlzTG9jYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgYnV0dG9uczogYW55O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBEZWZhdWx0TG9jYXRpb24ge1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcblxyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBFbmRwb2ludHMge1xyXG4gIGdldDogc3RyaW5nO1xyXG5cclxuICBzYXZlOiBzdHJpbmc7XHJcblxyXG4gIHN1Ym1pdDogc3RyaW5nO1xyXG5cclxuICBsb29rdXBzOiBvYmplY3Q7XHJcbn1cclxuIiwiaW1wb3J0IHsgU3dlZXRBbGVydFR5cGUgfSBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybU1vZGVzIHtcclxuICBwdWJsaWMgc3RhdGljIE5ldyA9ICdOZXcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGlzcGxheSA9ICdEaXNwbGF5JztcclxuICBwdWJsaWMgc3RhdGljIEVkaXQgPSAnRWRpdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uU3VtbWFyeU1vZGVzIHtcclxuICBwdWJsaWMgc3RhdGljIE5vbmUgPSAnTm9uZSc7XHJcbiAgcHVibGljIHN0YXRpYyBBbGVydCA9ICdBbGVydCc7XHJcbiAgcHVibGljIHN0YXRpYyBMaXN0ID0gJ0xpc3QnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbk1vZGVzIHtcclxuICBwdWJsaWMgc3RhdGljIE5vbmUgPSAnTm9uZSc7XHJcbiAgcHVibGljIHN0YXRpYyBUYWJzID0gJ1RhYnMnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTmV4dFByZXZpb3VzID0gJ05leHRQcmV2aW91cyc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0TW9kZXMge1xyXG4gIHB1YmxpYyBzdGF0aWMgRm9ybURhdGEgPSAnRm9ybURhdGEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRm9ybUJvZHkgPSAnRm9ybUJvZHknO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3dhbFR5cGVzIHtcclxuICBwdWJsaWMgc3RhdGljIFdhcm5pbmc6IFN3ZWV0QWxlcnRUeXBlID0gJ3dhcm5pbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRXJyb3I6IFN3ZWV0QWxlcnRUeXBlID0gJ2Vycm9yJztcclxuICBwdWJsaWMgc3RhdGljIFN1Y2Nlc3M6IFN3ZWV0QWxlcnRUeXBlID0gJ3N1Y2Nlc3MnO1xyXG4gIHB1YmxpYyBzdGF0aWMgSW5mbzogU3dlZXRBbGVydFR5cGUgPSAnaW5mbyc7XHJcbiAgcHVibGljIHN0YXRpYyBRdWVzdGlvbjogU3dlZXRBbGVydFR5cGUgPSAncXVlc3Rpb24nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRUeXBlcyB7XHJcbiAgcHVibGljIHN0YXRpYyBJbmZvID0gJ2luZm8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgVGV4dCA9ICd0ZXh0JztcclxuICBwdWJsaWMgc3RhdGljIERhdGVUaW1lID0gJ2RhdGV0aW1lJztcclxuICBwdWJsaWMgc3RhdGljIERhdGVUaW1lSGlqcmkgPSAnZGF0ZXRpbWVoaWpyaSc7XHJcbiAgcHVibGljIHN0YXRpYyBSYWRpb0J1dHRvbiA9ICdyYWRpb2J1dHRvbic7XHJcbiAgcHVibGljIHN0YXRpYyBTZWxlY3QgPSAnc2VsZWN0JztcclxuICBwdWJsaWMgc3RhdGljIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJztcclxuICBwdWJsaWMgc3RhdGljIE51bWJlciA9ICdudW1iZXInO1xyXG4gIHB1YmxpYyBzdGF0aWMgTXVsdGlTZWxlY3QgPSAnbXVsdGlzZWxlY3QnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ2hlY2tib3ggPSAnY2hlY2tib3gnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRmlsZVVwbG9hZCA9ICdmaWxldXBsb2FkJztcclxuICBwdWJsaWMgc3RhdGljIENoaXBzID0gJ2NoaXBzJztcclxuICBwdWJsaWMgc3RhdGljIEVkaXRvciA9ICdlZGl0b3InO1xyXG4gIHB1YmxpYyBzdGF0aWMgUmVjYXB0Y2hhID0gJ3JlY2FwdGNoYSc7XHJcbiAgcHVibGljIHN0YXRpYyBUaW1lID0gJ3RpbWUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTG9jYXRpb24gPSAnbG9jYXRpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgSW1hZ2VDcm9wcGVyID0gJ2ltYWdlY3JvcHBlcic7XHJcbiAgcHVibGljIHN0YXRpYyBSYXRpbmcgPSAncmF0aW5nJztcclxuICBwdWJsaWMgc3RhdGljIE1hc3RlckRldGFpbCA9ICdtYXN0ZXJkZXRhaWwnO1xyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkRGF0YSwgRmllbGRWYWxpZGF0aW9uLCBJbnB1dEVycm9yLCBEZWZhdWx0TG9jYXRpb24sIE1hcmtlclNldHRpbmdzLCBNYXN0ZXJEZXRhaWxEZXRhaWxzIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IENyb3BwZXJTZXR0aW5ncyB9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGQge1xyXG4gIGZpZWxkVHlwZTogc3RyaW5nO1xyXG5cclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIHNlY3Rpb25JZDogbnVtYmVyO1xyXG5cclxuICBoaWRkZW46IGJvb2xlYW47XHJcblxyXG4gIGRhdGE6IEZpZWxkRGF0YTtcclxuXHJcbiAgdmFsaWRhdGlvbjogRmllbGRWYWxpZGF0aW9uO1xyXG5cclxuICB2YWxpZGF0aW9uRXJyb3JzOiBBcnJheTxJbnB1dEVycm9yPjtcclxuXHJcbiAgbGFiZWw6IHN0cmluZztcclxuXHJcbiAgdG9vbHRpcDogc3RyaW5nO1xyXG5cclxuICBldmVudFRyaWdnZXJzOiBhbnk7XHJcblxyXG4gIGNzc0NsYXNzZXM6IGFueTtcclxuXHJcbiAgcmVhZG9ubHk6IGJvb2xlYW47XHJcblxyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG5cclxuICBhdXRvQ29tcGxldGU6IHN0cmluZztcclxuXHJcbiAgLy8gZGF0ZXRpbWUgLSBoaWpyaSAtIHRpbWVcclxuICBtaW5EYXRlOiBzdHJpbmc7XHJcblxyXG4gIG1heERhdGU6IHN0cmluZztcclxuXHJcbiAgZGVmYXVsdERhdGU6IHN0cmluZztcclxuXHJcbiAgbWluRGF0ZVZhbHVlOiBEYXRlO1xyXG5cclxuICBtYXhEYXRlVmFsdWU6IERhdGU7XHJcblxyXG4gIGRlZmF1bHREYXRlVmFsdWU6IERhdGU7XHJcblxyXG4gIHllYXJSYW5nZTogc3RyaW5nO1xyXG5cclxuICBzZXRUaW1lOiBzdHJpbmc7XHJcblxyXG4gIHNob3dJY29uOiBib29sZWFuO1xyXG5cclxuICBkYXRlRm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoTmF2aWdhdG9yOiBib29sZWFuO1xyXG5cclxuICB5ZWFyTmF2aWdhdG9yOiBib29sZWFuO1xyXG5cclxuICBob3VyRm9ybWF0OiBzdHJpbmc7XHJcblxyXG4gIHNob3dUaW1lOiBib29sZWFuO1xyXG5cclxuICBkaXNwbGF5RGF0ZUZvcm1hdDogc3RyaW5nO1xyXG5cclxuICBmb3JtRGF0YURhdGVGb3JtYXQ6IHN0cmluZztcclxuXHJcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xyXG5cclxuICBvdXRzaWRlRGF5czogc3RyaW5nO1xyXG5cclxuICBzaG93V2Vla2RheXM6IGJvb2xlYW47XHJcblxyXG4gIHNob3dXZWVrTnVtYmVyczogYm9vbGVhbjtcclxuXHJcbiAgLy8gbG9jYXRpb25cclxuICBkZWZhdWx0TG9jYXRpb246IERlZmF1bHRMb2NhdGlvbjtcclxuXHJcbiAgbWFya2VyU2V0dGluZ3M6IE1hcmtlclNldHRpbmdzO1xyXG5cclxuICB6b29tOiBudW1iZXI7XHJcblxyXG4gIHpvb21Db250cm9sOiBib29sZWFuO1xyXG5cclxuICAvLyByZWNhcHRjaGFcclxuICBzaXRlS2V5OiBzdHJpbmc7XHJcblxyXG4gIHNpemU6IHN0cmluZztcclxuXHJcbiAgdGhlbWU6IHN0cmluZztcclxuXHJcbiAgLy8gaW5mb1xyXG4gIGh0bWxTbmlwcGV0OiBzdHJpbmc7XHJcblxyXG4gIC8vIGltYWdlY3JvcHBlclxyXG4gIGNyb3BwZXJTZXR0aW5nczogQ3JvcHBlclNldHRpbmdzO1xyXG5cclxuICAvLyByYXRpbmdcclxuICBpY29uQ2FuY2VsQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgaWNvbk9uQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgaWNvbk9mZkNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGNhbmNlbEljb246IGJvb2xlYW47XHJcblxyXG4gIHN0YXJOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgLy8gcHJpbnRpbmdcclxuICBodG1sMkNhbnZhc0lnbm9yZTogYm9vbGVhbjtcclxuXHJcbiAgLy8gbWFzdGVyZGV0YWlsXHJcbiAgZGV0YWlsczogTWFzdGVyRGV0YWlsRGV0YWlscztcclxuXHJcbiAgLy8gc2VsZWN0XHJcbiAgZW5hYmxlZmlsdGVyOiBib29sZWFuO1xyXG5cclxuICAvLyBjaGlwc1xyXG4gIGFkZE9uVGFiOiBib29sZWFuO1xyXG5cclxuICBhZGRPbkJsdXI6IGJvb2xlYW47XHJcblxyXG4gIC8vIGVkaXRvclxyXG4gIGhlaWdodDogc3RyaW5nO1xyXG5cclxuICBzaG93VG9vbGJhcjogYm9vbGVhbjtcclxuXHJcbiAgLy8gbWFza1xyXG4gIHNsb3RDaGFyOiBzdHJpbmc7XHJcblxyXG4gIGF1dG9DbGVhcjogYm9vbGVhbjtcclxuXHJcbiAgdW5tYXNrOiBib29sZWFuO1xyXG5cclxuICBjaGFyYWN0ZXJQYXR0ZXJuOiBzdHJpbmc7XHJcblxyXG4gIC8vIGZpbGV1cGxvYWRcclxuICBhdXRvOiBib29sZWFuO1xyXG5cclxuICBtb2RlOiBzdHJpbmc7XHJcblxyXG4gIG11bHRpcGxlOiBib29sZWFuO1xyXG5cclxuICBidXR0b25zOiBhbnk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkRGF0YSB7XHJcbiAgdmFsdWU6IGFueTtcclxuXHJcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcclxuXHJcbiAgYWxsT3B0aW9uczogQXJyYXk8YW55PjtcclxuXHJcbiAgb3B0aW9uc0VuZHBvaW50OiBzdHJpbmc7XHJcblxyXG4gIGRhdGVWYWx1ZTogc3RyaW5nO1xyXG5cclxuICB1cmw6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRmllbGRWYWxpZGF0aW9uIHtcclxuICByZXF1aXJlZDogYm9vbGVhbjtcclxuXHJcbiAgbWluOiBudW1iZXI7XHJcblxyXG4gIG1heDogbnVtYmVyO1xyXG5cclxuICBsZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgcGF0dGVybjogc3RyaW5nO1xyXG5cclxuICByZXF1aXJlZFRleHQ6IHN0cmluZztcclxuXHJcbiAgcGF0dGVyblRleHQ6IHN0cmluZztcclxuXHJcbiAgcmFuZ2VUZXh0OiBzdHJpbmc7XHJcblxyXG4gIG1heEZpbGVTaXplSW5CeXRlczogbnVtYmVyO1xyXG5cclxuICBpbnZhbGlkRmlsZVNpemVUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGludmFsaWRGaWxlVHlwZVRleHQ6IHN0cmluZztcclxuXHJcbiAgY2hhcmFjdGVyUGF0dGVybjogc3RyaW5nO1xyXG5cclxuICBtYXNrOiBzdHJpbmc7XHJcblxyXG4gIGFsbG93RHVwbGljYXRlOiBib29sZWFuO1xyXG5cclxuICBhY2NlcHQ6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSW5wdXRFcnJvciB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG5cclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNYXJrZXIge1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcblxyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG5cclxuICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcblxyXG4gIGluZm9IdG1sOiBzdHJpbmc7XHJcblxyXG4gIGV2ZW50VHJpZ2dlcnM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IobGF0aXR1ZGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIsIGRyYWdnYWJsZTogYm9vbGVhbiwgaW5mb0h0bWw/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGF0aXR1ZGUgPSBsYXRpdHVkZTtcclxuXHJcbiAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZTtcclxuXHJcbiAgICB0aGlzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZTtcclxuXHJcbiAgICB0aGlzLmluZm9IdG1sID0gaW5mb0h0bWw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hcmtlclNldHRpbmdzRGVmYXVsdCB9IGZyb20gJy4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmtlclNldHRpbmdzIHtcclxuICBkZWZhdWx0TmV3TWFya2VyOiBNYXJrZXJTZXR0aW5nc0RlZmF1bHQ7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hcmtlclNldHRpbmdzRGVmYXVsdCB7XHJcbiAgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG5cclxuICBpbmZvSHRtbDogc3RyaW5nO1xyXG5cclxuICBldmVudFRyaWdnZXJzOiBhbnk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1hc3RlckRldGFpbERldGFpbHMge1xyXG4gIGNvbmZpZ3VyYXRpb25Tb3VyY2VVcmw6IHN0cmluZztcclxuXHJcbiAgZGlzcGxheUZpZWxkczogQXJyYXk8c3RyaW5nPjtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XHJcbiAgc2hvd1Jlc3VsdE1lc3NhZ2U6IGJvb2xlYW47XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIGdldEVycm9yTWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgc2F2ZUVycm9yTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHNhdmVFcnJvck1lc3NhZ2VEZXRhaWxzOiBzdHJpbmc7XHJcblxyXG4gIHNhdmVTdWNjZXNzTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHNhdmVTdWNjZXNzTWVzc2FnZURldGFpbHM6IHN0cmluZztcclxuXHJcbiAgc3VibWl0RXJyb3JNZXNzYWdlVGl0bGU6IHN0cmluZztcclxuXHJcbiAgc3VibWl0RXJyb3JNZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG5cclxuICBzdWJtaXRTdWNjZXNzTWVzc2FnZVRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIHN1Ym1pdFN1Y2Nlc3NNZXNzYWdlRGV0YWlsczogc3RyaW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uIHtcclxuICBpZDogbnVtYmVyO1xyXG5cclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIGxlZ2VuZDogc3RyaW5nO1xyXG5cclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgaGlkZUJ1dHRvbnM6IEFycmF5PHN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgbGVnZW5kOiBzdHJpbmcsIGlzQWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcblxyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuXHJcbiAgICB0aGlzLmxlZ2VuZCA9IGxlZ2VuZDtcclxuXHJcbiAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTZXR0aW5ncyB7XHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG5cclxuICB2YWxpZGF0aW9uU3VtbWFyeU1vZGU6IHN0cmluZztcclxuXHJcbiAgc2VjdGlvbk1vZGU6IHN0cmluZztcclxuXHJcbiAgc2VjdGlvbkxvY2F0aW9uOiBzdHJpbmc7XHJcblxyXG4gIGZvcm1Nb2RlOiBzdHJpbmc7XHJcblxyXG4gIHBvc3RNb2RlOiBzdHJpbmc7XHJcblxyXG4gIHNwaW5uZXJTb3VyY2VVcmw6IHN0cmluZztcclxuXHJcbiAgYWxsRmllbGRzU291cmNlOiBzdHJpbmc7XHJcblxyXG4gIGJhc2VFbmRQb2ludFVybHM6IGFueTtcclxuXHJcbiAgc291cmNlRm9ybVNjaGVtYXM6IEFycmF5PHN0cmluZz47XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlc3BvbnNlRXZlbnRBcmdzIHtcclxuICBpc1N1Y2Nlc3M6IGJvb2xlYW47XHJcblxyXG4gIHJlc3BvbnNlOiBhbnk7XHJcblxyXG4gIHBheWxvYWQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoaXNTdWNjZXNzOiBib29sZWFuLCByZXNwb25zZTogYW55LCBwYXlsb2FkOiBhbnkpIHtcclxuICAgIHRoaXMuaXNTdWNjZXNzID0gaXNTdWNjZXNzO1xyXG5cclxuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuXHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBDdXJyZW50IHR5cGUgdG8gc2hvd1xyXG5leHBvcnQgZW51bSBDTE9DS19UWVBFIHtcclxuICBIT1VSUyA9IDEsXHJcbiAgTUlOVVRFUyA9IDJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGltZUZvcm1hdCA9IDEyIHwgMjQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lIHtcclxuICBob3VyOiBudW1iZXI7XHJcbiAgbWludXRlOiBudW1iZXI7XHJcbiAgbWVyaWRlbjogJ1BNJyB8ICdBTSc7XHJcbiAgZm9ybWF0OiBUaW1lRm9ybWF0O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jbG9jaycsXHJcbiAgc3R5bGVzOiBbYC53LWNsb2NrLXdyYXBwZXJ7aGVpZ2h0OjEwMCU7cGFkZGluZzowIDI0cHh9LnctY2xvY2std3JhcHBlciAudy1jbG9ja3t3aWR0aDoyMDBweDtoZWlnaHQ6MjAwcHg7Ym9yZGVyLXJhZGl1czo1MCU7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzoyNHB4O2JhY2tncm91bmQ6I2VkZWRlZH0udy1jbG9jay13cmFwcGVyIC53LWNsb2NrIC53LWNsb2NrLWNvbnRhaW5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1jZW50ZXJ7aGVpZ2h0OjZweDt3aWR0aDo2cHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czo1MCV9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1wb2ludGVye2JveC1zaGFkb3c6bm9uZTt3aWR0aDoxcHg7aGVpZ2h0OjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46MCBhdXRvO3BhZGRpbmc6MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBjZW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycywtd2Via2l0LXRyYW5zZm9ybSAuMnM7ei1pbmRleDowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnctY2xvY2std3JhcHBlciAudy1jbG9jayAudy1jbG9jay1zdGVwe2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMsLXdlYmtpdC10cmFuc2Zvcm0gLjJzfS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc3RlcCAubWF0LW1pbmktZmFie2JveC1zaGFkb3c6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS53LWNsb2NrLXdyYXBwZXIgLnctY2xvY2sgLnctY2xvY2stc2VsZWN0ZWR7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xOXB4O2xlZnQ6LTE5cHg7bWluLXdpZHRoOjA7bWluLWhlaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNoYWRvdzpub25lO2N1cnNvcjpub25lfS53LWNsb2NrLWRlZzB7dG9wOjA7bGVmdDo1MCV9LnctY2xvY2stZGVnMTV7dG9wOjEuNzAzNzA4NjklO2xlZnQ6NjIuOTQwOTUyMjYlfS53LWNsb2NrLWRlZzMwe3RvcDo2LjY5ODcyOTgxJTtsZWZ0Ojc1JX0udy1jbG9jay1kZWc0NXt0b3A6MTQuNjQ0NjYwOTQlO2xlZnQ6ODUuMzU1MzM5MDUlfS53LWNsb2NrLWRlZzYwe3RvcDoyNSU7bGVmdDo5My4zMDEyNzAxOSV9LnctY2xvY2stZGVnNzV7dG9wOjM3LjA1OTA0Nzc0JTtsZWZ0Ojk4LjI5NjI5MTMxJX0udy1jbG9jay1kZWc5MHt0b3A6NTAlO2xlZnQ6MTAwJX0udy1jbG9jay1kZWcxMDV7dG9wOjYyLjk0MDk1MjI2JTtsZWZ0Ojk4LjI5NjI5MTMxJX0udy1jbG9jay1kZWcxMjB7dG9wOjc1JTtsZWZ0OjkzLjMwMTI3MDE5JX0udy1jbG9jay1kZWcxMzV7dG9wOjg1LjM1NTMzOTA2JTtsZWZ0Ojg1LjM1NTMzOTA2JX0udy1jbG9jay1kZWcxNTB7dG9wOjkzLjMwMTI3MDE5JTtsZWZ0Ojc1JX0udy1jbG9jay1kZWcxNjV7dG9wOjk4LjI5NjI5MTMxJTtsZWZ0OjYyLjk0MDk1MjI2JX0udy1jbG9jay1kZWcxODB7dG9wOjEwMCU7bGVmdDo1MCV9LnctY2xvY2stZGVnMTk1e3RvcDo5OC4yOTYyOTEzMSU7bGVmdDozNy4wNTkwNDc3NCV9LnctY2xvY2stZGVnMjEwe3RvcDo5My4zMDEyNzAxOSU7bGVmdDoyNSV9LnctY2xvY2stZGVnMjI1e3RvcDo4NS4zNTUzMzkwNiU7bGVmdDoxNC42NDQ2NjA5NCV9LnctY2xvY2stZGVnMjQwe3RvcDo3NSU7bGVmdDo2LjY5ODcyOTgxJX0udy1jbG9jay1kZWcyNTV7dG9wOjYyLjk0MDk1MjI2JTtsZWZ0OjEuNzAzNzA4Njg2JX0udy1jbG9jay1kZWcyNzB7dG9wOjUwJTtsZWZ0OjB9LnctY2xvY2stZGVnMjg1e3RvcDozNy4wNTkwNDc3NCU7bGVmdDoxLjcwMzcwODY4NiV9LnctY2xvY2stZGVnMzAwe3RvcDoyNSU7bGVmdDo2LjY5ODcyOTgxJX0udy1jbG9jay1kZWczMTV7dG9wOjE0LjY0NDY2MDk0JTtsZWZ0OjE0LjY0NDY2MDk0JX0udy1jbG9jay1kZWczMzB7dG9wOjYuNjk4NzI5ODElO2xlZnQ6MjUlfS53LWNsb2NrLWRlZzM0NXt0b3A6MS43MDM3MDg2ODYlO2xlZnQ6MzcuMDU5MDQ3NzQlfS53LWNsb2NrLWRlZzM2MHt0b3A6MDtsZWZ0OjUwJX1gXSxcclxuICB0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIlxyXG4gICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCJcclxuICAgICBjbGFzcz1cInctY2xvY2std3JhcHBlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3LWNsb2NrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidy1jbG9jay1jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDwhLS0gQ2xvY2sgY2VudGVyIC0tPlxyXG4gICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYlxyXG4gICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3LWNsb2NrLWNlbnRlclwiPjwvYnV0dG9uPlxyXG5cclxuICAgICAgPCEtLSBDbG9jayBoYW5kIC0tPlxyXG4gICAgICA8bWF0LXRvb2xiYXIgW25nU3R5bGVdPVwiZ2V0UG9pbnRlclN0eWxlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy1wb2ludGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWJcclxuICAgICAgICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctY2xvY2stc2VsZWN0ZWRcIj48L2J1dHRvbj5cclxuICAgICAgPC9tYXQtdG9vbGJhcj5cclxuXHJcbiAgICAgIDwhLS0gSG91ciAvIE1pbnV0ZSBudW1iZXIgZmFjZXMgLS0+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJnZXRUaW1lVmFsdWVDbGFzcyhzdGVwLCBpKVwiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiXHJcbiAgICAgICAgICAgICAgICBbY29sb3JdPVwic2VsZWN0ZWRUaW1lUGFydCA9PT0gc3RlcCA/IGNvbG9yIDogJydcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVRpbWVWYWx1ZShzdGVwKVwiPlxyXG4gICAgICAgICAge3sgc3RlcCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdDbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcHVibGljIHVzZXJUaW1lOiBJVGltZTtcclxuICBAT3V0cHV0KCkgcHVibGljIHVzZXJUaW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY3VycmVudFZpZXc6IENMT0NLX1RZUEU7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyB2aWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDTE9DS19UWVBFPigpO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuXHJcbiAgcHVibGljIHN0ZXBzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICBwdWJsaWMgc2VsZWN0ZWRUaW1lUGFydDtcclxuICBwdWJsaWMgU1RFUF9ERUc6IG51bWJlcjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldHVwVUkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXR1cFVJKCkge1xyXG4gICAgdGhpcy5zdGVwcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5IT1VSUzpcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLnVzZXJUaW1lLmZvcm1hdDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goaSk7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgPSB0aGlzLnVzZXJUaW1lLmhvdXIgfHwgMDtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWVQYXJ0ID4gdGhpcy51c2VyVGltZS5mb3JtYXQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lUGFydCAtPSB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5NSU5VVEVTOlxyXG4gICAgICAgIGZvciAobGV0IGkgPSA1OyBpIDw9IDU1OyBpICs9IDUpIHtcclxuXHJcbiAgICAgICAgICB0aGlzLnN0ZXBzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RlcHMucHVzaCgwKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGltZVBhcnQgPSB0aGlzLnVzZXJUaW1lLm1pbnV0ZSB8fCAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UG9pbnRlclN0eWxlKCkge1xyXG4gICAgbGV0IGRpdmlkZXIgPSAxO1xyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5IT1VSUzpcclxuICAgICAgICBkaXZpZGVyID0gdGhpcy51c2VyVGltZS5mb3JtYXQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0xPQ0tfVFlQRS5NSU5VVEVTOlxyXG4gICAgICAgIGRpdmlkZXIgPSA2MDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVncmVlcyA9IDA7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICBkZWdyZWVzID0gTWF0aC5yb3VuZCh0aGlzLnVzZXJUaW1lLmhvdXIgKiAoMzYwIC8gZGl2aWRlcikpIC0gMTgwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVncmVlcyA9IE1hdGgucm91bmQodGhpcy51c2VyVGltZS5taW51dGUgKiAoMzYwIC8gZGl2aWRlcikpIC0gMTgwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknLFxyXG4gICAgICAnLW1zLXRyYW5zZm9ybSc6ICdyb3RhdGUoJyArIGRlZ3JlZXMgKyAnZGVnKScsXHJcbiAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKCcgKyBkZWdyZWVzICsgJ2RlZyknXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzdHlsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUaW1lVmFsdWVDbGFzcyhzdGVwOiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3ID09PSBDTE9DS19UWVBFLkhPVVJTKSB7XHJcbiAgICAgIHRoaXMuU1RFUF9ERUcgPSAzNjAgLyB0aGlzLnVzZXJUaW1lLmZvcm1hdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuU1RFUF9ERUcgPSAzNjAgLyAxMjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2xhc3NlcyA9ICd3LWNsb2NrLXN0ZXAgdy1jbG9jay1kZWcnICsgKHRoaXMuU1RFUF9ERUcgKiAoaW5kZXggKyAxKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRUaW1lUGFydCA9PT0gc3RlcCkge1xyXG5cclxuICAgICAgY2xhc3NlcyArPSAnIG1hdC1wcmltYXJ5JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VUaW1lVmFsdWUoc3RlcDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ0xPQ0tfVFlQRS5IT1VSUykge1xyXG4gICAgICB0aGlzLnVzZXJUaW1lLmhvdXIgPSBzdGVwO1xyXG5cclxuICAgICAgLy8gYXV0byBzd2l0Y2ggdG8gbWludXRlc1xyXG4gICAgICB0aGlzLnZpZXdDaGFuZ2UuZW1pdChDTE9DS19UWVBFLk1JTlVURVMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51c2VyVGltZS5taW51dGUgPSBzdGVwO1xyXG5cclxuICAgICAgLy8gYXV0byBzd2l0Y2ggdG8gaG91cnNcclxuICAgICAgdGhpcy52aWV3Q2hhbmdlLmVtaXQoQ0xPQ0tfVFlQRS5IT1VSUyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51c2VyVGltZUNoYW5nZS5lbWl0KHRoaXMudXNlclRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgQ0xPQ0tfVFlQRSwgSVRpbWUgfSBmcm9tICcuLi93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHN0eWxlczogW2Audy10aW1lcGlja2VyLWRpYWxvZ3twYWRkaW5nOjA7bWFyZ2luOi0yNHB4O3dpZHRoOmNhbGMoMTAwJSArIDQ4cHgpfWBdLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJ3LXRpbWVwaWNrZXItZGlhbG9nXCI+XHJcbiAgPG50dy10aW1lIFtjb2xvcl09XCJjb2xvclwiIFt1c2VyVGltZV09XCJ1c2VyVGltZVwiIChyZXZlcnRlZCk9XCJyZXZlcnQoKVwiIChzdWJtaXR0ZWQpPVwic3VibWl0KClcIj48L250dy10aW1lPlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV1RpbWVEaWFsb2dDb21wb25lbnQge1xyXG4gIHB1YmxpYyB1c2VyVGltZTogSVRpbWU7XHJcbiAgcHJpdmF0ZSBWSUVXX0hPVVJTID0gQ0xPQ0tfVFlQRS5IT1VSUztcclxuICBwcml2YXRlIFZJRVdfTUlOVVRFUyA9IENMT0NLX1RZUEUuTUlOVVRFUztcclxuICBwcml2YXRlIGN1cnJlbnRWaWV3OiBDTE9DS19UWVBFID0gdGhpcy5WSUVXX0hPVVJTO1xyXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwcml2YXRlIGRhdGE6IFVzZXJUaW1lRGF0YSxcclxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8V1RpbWVEaWFsb2dDb21wb25lbnQ+KSB7XHJcbiAgICB0aGlzLnVzZXJUaW1lID0gZGF0YS50aW1lO1xyXG4gICAgdGhpcy5jb2xvciA9IGRhdGEuY29sb3I7XHJcbiAgfVxyXG5cclxuICByZXZlcnQoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgtMSk7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyVGltZURhdGEge1xyXG4gIHRpbWU6IElUaW1lO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IElUaW1lIH0gZnJvbSAnLi4vdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdUaW1lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vdy10aW1lLWRpYWxvZy93LXRpbWUtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LW1hdC10aW1lcGlja2VyJyxcclxuICBzdHlsZXM6IFtgLnRpbWUtcGlja2VyLWJ1dHRvbntwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjQ0cHh9Omhvc3QgOjpuZy1kZWVwIC51aS1kcm9wZG93biw6aG9zdCA6Om5nLWRlZXAgaW5wdXQudWktaW5wdXR0ZXh0LnVpLXdpZGdldC51aS1zdGF0ZS1kZWZhdWx0LDpob3N0IDo6bmctZGVlcCBwLWRyb3Bkb3duLGlucHV0LmZvcm0taW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7aGVpZ2h0OjM1cHh9YF0sXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGZ4RmxleFxyXG4gICAgIGZ4TGF5b3V0PVwicm93XCJcclxuICAgICBjbGFzcz1cInctbWF0LXRpbWVwaWNrZXJcIj5cclxuXHJcbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cInNob3dQaWNrZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICBjbGFzcz1cInRpbWUtcGlja2VyLWJ1dHRvblwiPlxyXG4gICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9jay1vXCI+PC9pPlxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8aW5wdXQgbWF0SW5wdXRcclxuICAgICAgICAgW2lkXT1cImlucHV0SWRcIlxyXG4gICAgICAgICBbbmFtZV09XCJpbnB1dE5hbWVcIlxyXG4gICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlcIlxyXG4gICAgICAgICBbY2xhc3NdPVwiaW5wdXRDbGFzc1wiXHJcbiAgICAgICAgIFt0aXRsZV09XCJ0b29sdGlwXCJcclxuICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVmFsdWVcIlxyXG4gICAgICAgICBbdmFsdWVdPVwidGltZVwiPlxyXG48L2Rpdj5cclxuYCxcclxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGVQaXBlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB1c2VyVGltZTogSVRpbWU7XHJcblxyXG4gIEBPdXRwdXQoKSB1c2VyVGltZUNoYW5nZTogRXZlbnRFbWl0dGVyPElUaW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyVmFsdWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBpbnB1dE5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMudXNlclRpbWUpIHtcclxuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCB0aW1lOiBhbnkgPSB7fTtcclxuICAgICAgdGltZS5ob3VyID0gMDtcclxuICAgICAgdGltZS5taW51dGUgPSAwO1xyXG4gICAgICB0aW1lLmZvcm1hdCA9IDI0O1xyXG4gICAgICB0aW1lLm1lcmlkZW4gPSAnQU0nO1xyXG5cclxuICAgICAgdGhpcy51c2VyVGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdGltZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLnVzZXJUaW1lKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWVyaWRlbiA9IGAke3RoaXMudXNlclRpbWUubWVyaWRlbn1gO1xyXG5cclxuICAgIG1lcmlkZW4gPSB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKG1lcmlkZW4pO1xyXG5cclxuICAgIGlmICh0aGlzLnVzZXJUaW1lLmZvcm1hdCA9PT0gMjQpIHtcclxuICAgICAgbWVyaWRlbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBob3VyID0gYCR7dGhpcy51c2VyVGltZS5ob3VyfWA7XHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5ob3VyID09PSAyNCkge1xyXG4gICAgICBob3VyID0gJzAwJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGAke2hvdXJ9OjAwICR7bWVyaWRlbn1gO1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPCAxMCkge1xyXG5cclxuICAgICAgY29uc3QgdHQgPSAnMCcgKyBTdHJpbmcodGhpcy51c2VyVGltZS5taW51dGUpO1xyXG4gICAgICByZXR1cm4gYCR7aG91cn06JHt0dH0gJHttZXJpZGVufWA7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGAke2hvdXJ9OiR7dGhpcy51c2VyVGltZS5taW51dGV9ICR7bWVyaWRlbn1gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1BpY2tlcigkZXZlbnQpIHtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oV1RpbWVEaWFsb2dDb21wb25lbnQsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgIGhvdXI6IHRoaXMudXNlclRpbWUuaG91cixcclxuICAgICAgICAgIG1pbnV0ZTogdGhpcy51c2VyVGltZS5taW51dGUsXHJcbiAgICAgICAgICBtZXJpZGVuOiB0aGlzLnVzZXJUaW1lLm1lcmlkZW4sXHJcbiAgICAgICAgICBmb3JtYXQ6IHRoaXMudXNlclRpbWUuZm9ybWF0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvclxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IElUaW1lIHwgLTEpID0+IHtcclxuICAgICAgICAvLyByZXN1bHQgd2lsbCBiZSB1cGRhdGUgdXNlclRpbWUgb2JqZWN0IG9yIC0xIG9yIHVuZGVmaW5lZCAoY2xvc2VkIGRpYWxvZyB3L28gY2xpY2tpbmcgY2FuY2VsKVxyXG4gICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpcy51c2VyVGltZSA9IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICB0aGlzLmVtaXR1c2VyVGltZUNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVtaXR1c2VyVGltZUNoYW5nZSgpIHtcclxuXHJcbiAgICB0aGlzLnVzZXJUaW1lQ2hhbmdlLmVtaXQodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRpbWUsIENMT0NLX1RZUEUgfSBmcm9tICcuLi93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctdGltZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCJcclxuICAgICBmeExheW91dC5sdC1tZD1cImNvbHVtblwiXHJcbiAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgIGNsYXNzPVwidy10aW1lXCJcclxuICAgICBbbmdDbGFzcy54c109XCIndmVydGljYWwtdGltZSdcIlxyXG4gICAgIFtuZ0NsYXNzLnNtXT1cIid2ZXJ0aWNhbC10aW1lJ1wiPlxyXG4gIDxtYXQtdG9vbGJhciBmeExheW91dD1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgIGZ4TGF5b3V0Lmx0LW1kPVwicm93XCJcclxuICAgICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cInctdGltZXBpY2tlci10aW1lLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZVwiPlxyXG4gICAgICA8c3BhbiBbY2xhc3NdPVwiY3VycmVudFZpZXcgPT09IFZJRVdfSE9VUlMgPyAnYWN0aXZlJzogJydcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0Q3VycmVudFZpZXcoVklFV19IT1VSUylcIj57eyBmb3JtYXRIb3VyKCkgfX06PC9zcGFuPlxyXG4gICAgICA8c3BhbiBbY2xhc3NdPVwiY3VycmVudFZpZXcgPT09IFZJRVdfTUlOVVRFUyA/ICdhY3RpdmUnOiAnJ1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXRDdXJyZW50VmlldyhWSUVXX01JTlVURVMpXCI+e3sgZm9ybWF0TWludXRlKCkgfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIlxyXG4gICAgICAgICBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgICAgIGNsYXNzPVwidy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG1cIlxyXG4gICAgICAgICAqbmdJZj1cInVzZXJUaW1lLmZvcm1hdCA9PT0gMTJcIj5cclxuICAgICAgPHNwYW4gKGNsaWNrKT1cInNldE1lcmlkaWVuKCdBTScpXCJcclxuICAgICAgICAgICAgW2NsYXNzXT1cInVzZXJUaW1lLm1lcmlkZW4gPT09ICdBTScgPyAnYWN0aXZlJyA6ICcnXCI+e3snQU0nIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIChjbGljayk9XCJzZXRNZXJpZGllbignUE0nKVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJ1c2VyVGltZS5tZXJpZGVuID09PSAnUE0nID8gJ2FjdGl2ZScgOiAnJ1wiPnt7J1BNJyB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbWF0LXRvb2xiYXI+XHJcblxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIlxyXG4gICAgICAgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCJcclxuICAgICAgIGNsYXNzPVwidy10aW1lLWNvbnRlbnRcIj5cclxuICAgIDxudHctY2xvY2sgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwidy1hbmltYXRpb24tem9vbVwiXHJcbiAgICAgICAgICAgICBbdXNlclRpbWVdPVwidXNlclRpbWVcIlxyXG4gICAgICAgICAgICAgKHVzZXJUaW1lQ2hhbmdlKT1cImVtaXR1c2VyVGltZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIFsoY3VycmVudFZpZXcpXT1cImN1cnJlbnRWaWV3XCJcclxuICAgICAgICAgICAgICh2aWV3Q2hhbmdlKT1cInNldEN1cnJlbnRWaWV3KCRldmVudClcIj5cclxuICAgIDwvbnR3LWNsb2NrPlxyXG5cclxuICAgIDxkaXYgZnhGbGV4QWxpZ249XCJlbmRcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJldmVydCgpXCI+XHJcbiAgICAgICAge3tyZXZlcnRMYWJlbH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b25cclxuICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJzdWJtaXQoKVwiPlxyXG4gICAgICAgIHt7c3VibWl0TGFiZWx9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30udy10aW1le21heC1oZWlnaHQ6MTAwJTttaW4taGVpZ2h0OjM1MHB4O2hlaWdodDozNTBweH0udy10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXJ7cGFkZGluZzoxNXB4O21pbi13aWR0aDoxNjBweDt3aWR0aDoxNjBweH0udy10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXIubWF0LXRvb2xiYXItc2luZ2xlLXJvd3toZWlnaHQ6MTAwJX0udy10aW1lIC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZXtmb250LXNpemU6My41cmVtO2ZvbnQtd2VpZ2h0OjQwMDtkaXNwbGF5OmZsZXh9LnctdGltZSAudy10aW1lcGlja2VyLXNlbGVjdGVkLWFtcG17Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS4zcmVtO3BhZGRpbmctdG9wOjJyZW19LnctdGltZSAudy10aW1lLWNvbnRlbnR7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwYWRkaW5nOjZweH0udy10aW1lIC53LXRpbWUtY29udGVudCB3LWNsb2Nre3BhZGRpbmc6MTJweCAwO2hlaWdodDpjYWxjKDEwMCUgLSA1OHB4KX0udy10aW1lLnZlcnRpY2FsLXRpbWV7aGVpZ2h0OmF1dG99LnctdGltZS52ZXJ0aWNhbC10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXJ7bWluLXdpZHRoOmF1dG87d2lkdGg6MTAwJTtoZWlnaHQ6MTAwcHh9LnctdGltZS52ZXJ0aWNhbC10aW1lIC53LXRpbWVwaWNrZXItdGltZS1jb250YWluZXIgLnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBte3BhZGRpbmc6MCAxMnB4fS53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbT5zcGFuLC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZT5zcGFue291dGxpbmU6MDtvcGFjaXR5Oi41fS53LXRpbWVwaWNrZXItc2VsZWN0ZWQtYW1wbT5zcGFuOm5vdCguYWN0aXZlKSwudy10aW1lcGlja2VyLXNlbGVjdGVkLXRpbWU+c3Bhbjpub3QoLmFjdGl2ZSl7Y3Vyc29yOnBvaW50ZXJ9LnctdGltZXBpY2tlci1zZWxlY3RlZC1hbXBtPnNwYW4uYWN0aXZlLC53LXRpbWVwaWNrZXItc2VsZWN0ZWQtdGltZT5zcGFuLmFjdGl2ZXtvcGFjaXR5OjF9LnctYW5pbWF0ZS1uZXh0e29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MCUsMCwxcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCg1MCUsMCwxcHgpfS53LWFuaW1hdGUtbmV4dC1yZW1vdmV7dHJhbnNpdGlvbjouNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTAlLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNTAlLDAsMXB4KX0udy1hbmltYXRlLW5leHQtcmVtb3ZlLWFjdGl2ZXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwxcHgpfS53LWFuaW1hdGUtcHJldntvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwxcHgpfS53LWFuaW1hdGUtcHJldi1yZW1vdmV7dHJhbnNpdGlvbjouM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwwLDFweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsMCwxcHgpfS53LWFuaW1hdGUtcHJldi1yZW1vdmUtYWN0aXZle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDFweCl9QC13ZWJraXQta2V5ZnJhbWVzIHctYW5pbWF0aW9uLWJvdW5jZXtmcm9te29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfTcwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyB3LWFuaW1hdGlvbi1ib3VuY2V7ZnJvbXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX03MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS53LWFuaW1hdGlvbi16b29tLm5nLWVudGVye3RyYW5zaXRpb246LjNzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjNzO2FuaW1hdGlvbi1kdXJhdGlvbjouM3M7LXdlYmtpdC1hbmltYXRpb24tbmFtZTp3LWFuaW1hdGlvbi1ib3VuY2U7YW5pbWF0aW9uLW5hbWU6dy1hbmltYXRpb24tYm91bmNlfWBdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdXNlclRpbWU6IElUaW1lO1xyXG4gIEBPdXRwdXQoKSB1c2VyVGltZUNoYW5nZTogRXZlbnRFbWl0dGVyPElUaW1lPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgcmV2ZXJ0TGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJtaXRMYWJlbDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgcmV2ZXJ0ZWQ6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8SVRpbWU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgVklFV19IT1VSUyA9IENMT0NLX1RZUEUuSE9VUlM7XHJcbiAgcHVibGljIFZJRVdfTUlOVVRFUyA9IENMT0NLX1RZUEUuTUlOVVRFUztcclxuICBwdWJsaWMgY3VycmVudFZpZXc6IENMT0NLX1RZUEUgPSB0aGlzLlZJRVdfSE9VUlM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlUGlwZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLnVzZXJUaW1lKSB7XHJcbiAgICAgIHRoaXMudXNlclRpbWUgPSB7XHJcbiAgICAgICAgaG91cjogNixcclxuICAgICAgICBtaW51dGU6IDAsXHJcbiAgICAgICAgbWVyaWRlbjogJ1BNJyxcclxuICAgICAgICBmb3JtYXQ6IDEyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnJldmVydExhYmVsKSB7XHJcbiAgICAgIHRoaXMucmV2ZXJ0TGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKCdidXR0b25zLkNhbmNlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdWJtaXRMYWJlbCkge1xyXG4gICAgICB0aGlzLnN1Ym1pdExhYmVsID0gdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSgnYnV0dG9ucy5PaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0SG91cigpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudXNlclRpbWUuZm9ybWF0ID09PSAyNCkge1xyXG4gICAgICBpZiAodGhpcy51c2VyVGltZS5ob3VyID09PSAyNCkge1xyXG4gICAgICAgIHJldHVybiAnMDAnO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXNlclRpbWUuaG91ciA8IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuICcwJyArIFN0cmluZyh0aGlzLnVzZXJUaW1lLmhvdXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnVzZXJUaW1lLmhvdXIpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TWludXRlKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy51c2VyVGltZS5taW51dGUgPT09IDApIHtcclxuICAgICAgcmV0dXJuICcwMCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudXNlclRpbWUubWludXRlIDwgMTApIHtcclxuICAgICAgcmV0dXJuICcwJyArIFN0cmluZyh0aGlzLnVzZXJUaW1lLm1pbnV0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gU3RyaW5nKHRoaXMudXNlclRpbWUubWludXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1cnJlbnRWaWV3KHR5cGU6IENMT0NLX1RZUEUpIHtcclxuICAgIHRoaXMuY3VycmVudFZpZXcgPSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgc2V0TWVyaWRpZW4obTogJ1BNJyB8ICdBTScpIHtcclxuICAgIHRoaXMudXNlclRpbWUubWVyaWRlbiA9IG07XHJcbiAgfVxyXG5cclxuICByZXZlcnQoKSB7XHJcbiAgICB0aGlzLnJldmVydGVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy51c2VyVGltZSk7XHJcbiAgfVxyXG5cclxuICBlbWl0dXNlclRpbWVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMudXNlclRpbWVDaGFuZ2UuZW1pdCh0aGlzLnVzZXJUaW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuaW1wb3J0IHsgU2VjdGlvbk1vZGVzLCBGb3JtTW9kZXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZW51bXMnO1xyXG5pbXBvcnQgeyBJbnB1dEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2lucHV0LWVycm9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIGVycm9yIGNsYXNzLiovXHJcbiAgcHJvdGVjdGVkIHN0YXRpYyBWYWxpZGF0aW9uRXJyb3JDbGFzczogc3RyaW5nID0gJ2Nzc0NsYXNzZXMuVmFsaWRhdGlvbkVycm9yJztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcmVsYXRlZCBmaWVsZC4qL1xyXG4gIEBJbnB1dCgnZmllbGQnKSBmaWVsZDogRmllbGQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNvbnRyb2wuKi9cclxuICBAVmlld0NoaWxkKE5nTW9kZWwpIGNvbnRyb2w6IE5nTW9kZWw7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmVxdWlyZWQuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHBhdHRlcm4uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JQYXR0ZXJuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBzdGlsbCB1bnVzZWQuIGFsd2F5cyBmYWxzZS5cclxuICBwcml2YXRlIGlzUHJpc3RpbmU6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBmaWVsZCdzIHZhbHVlLlxyXG4gICAqIEBwYXJhbSBhbnkgbmV3VmFsdWUgVGhlIG5ldyBmaWVsZCB2YWx1ZS5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBuZXdWYWx1ZS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBudWxsO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGdldFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuZGF0YS52YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIGR5bmFtaWMgZXZlbnQgaW4gY2FzZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZXZlbnRUeXBlIFRoZSB0eXBlIG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICAqIEBwYXJhbSBhbnkgc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHRyaWdnZXJEeW5hbWljRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50QXJndW1lbnRzOiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAoc291cmNlLmV2ZW50VHJpZ2dlcnMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBzb3VyY2UuZXZlbnRUcmlnZ2Vyc1tldmVudFR5cGVdO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24gPSB0aGlzLmJyaWRnZVNlcnZpY2UucGFyZW50Q29tcG9uZW50W2V2ZW50LmhhbmRsZXJdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBbZXZlbnRBcmd1bWVudHNdO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQucGFyYW1ldGVycyAmJiBldmVudC5wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmNvbmNhdChldmVudC5wYXJhbWV0ZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uKHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnQsIHNvdXJjZSwgcGFyYW1ldGVycyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSBoaWRkZW4uXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSBoaWRkZW4uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNGaWVsZEhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmhpZGRlbiB8fFxyXG4gICAgICAodGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc2VjdGlvbk1vZGUgIT09IFNlY3Rpb25Nb2Rlcy5Ob25lICYmXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHRoaXMuZmllbGQuc2VjdGlvbklkICE9PSB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbi5pZCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIHNob3VsZCBiZSBzaG93bi5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgdmFsaWRhdGlvbiBzaG91bGQgYmUgc2hvd24uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNWYWxpZGF0aW9uU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNQcmlzdGluZSAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGFzdGVyaXNrIHNob3VsZCBiZSBzaG93bi5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgdmFsaWRhdGlvbiBhc3RlcmlzayBzaG91bGQgYmUgc2hvd24uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uICYmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQgfHwgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbiA+IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGZvcm0gY29udHJvbCBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gaXNTdWJtaXQgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGlzIHJlYWNoZWQgZnJvbSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZShldmVudEFyZ3VtZW50cz86IGFueSwgaXNTdWJtaXQ/OiBib29sZWFuKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgdGhpcy5wcmVWYWxpZGF0ZShpc1N1Ym1pdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUoKSkge1xyXG4gICAgICBpZiAodGhpcy5maWVsZC5oaWRkZW4pIHtcclxuICAgICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9yUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJlcXVpcmVkQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JQYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQYXR0ZXJuQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JSYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUmFuZ2VDb25kaXRpb24oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGRzIGFuIGVycm9yIHRvIHRoZSB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbWVzc2FnZSBUaGUgdmFsaWRhdGlvbiBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgdHlwZSBUaGUgdmFsaWRhdGlvbiBlcnJvciB0eXBlLlxyXG4gICovXHJcbiAgcHVibGljIGFkZFZhbGlkYXRpb25FcnJvcihtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IHN0cmluZyA9IEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzKSB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycykge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcih0eXBlLCBtZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWxpZGF0aW9uIGVycm9ycy4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbGlkYXRpb25FcnJvcnMoKSB7XHJcbiAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSB2YWxpYXRlZC5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIHZhbGlhdGVkLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHNob3VsZFZhbGlkYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbiAmJiAoIXRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyB8fCB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID09PSAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gUHJlcGFyZXMgdGhlIGZpZWxkIGZvciB2YWxpZGF0aW9uIGFuZCBtYWtlcyBzdXJlIGl0IGlzbid0IHZhbGlkYXRlZCByZXBlYXRlZGx5LlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgcHJlVmFsaWRhdGUoaXNTdWJtaXQ6IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLmlzUHJpc3RpbmUgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoaXNTdWJtaXQpIHtcclxuICAgICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgdmFsaWRhdGlvbiBzdW1tYXJ5LiovXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCkge1xyXG4gICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzKSB7XHJcbiAgICAgIGlmIChmaWVsZC52YWxpZGF0aW9uRXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycyA9IHRoaXMuYnJpZGdlU2VydmljZVxyXG4gICAgICAgICAgLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycy5jb25jYXQoZmllbGQudmFsaWRhdGlvbkVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGEgY29udHJvbCBmb3IgdGhlIHJlcXVpcmVkIGNvbmRpdGlvbiBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlUmVxdWlyZWRDb25kaXRpb24oKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCkge1xyXG4gICAgICBpZiAoIXRoaXMuZmllbGQuZGF0YSB8fCAhdGhpcy5maWVsZC5kYXRhLnZhbHVlIHx8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkVGV4dCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGEgY29udHJvbCBmb3IgdGhlIHBhdHRlcm4gY29uZGl0aW9uIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlUGF0dGVybkNvbmRpdGlvbigpOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLnBhdHRlcm4gJiYgdGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCByZWdFeCA9IG5ldyBSZWdFeHAodGhpcy5maWVsZC52YWxpZGF0aW9uLnBhdHRlcm4pO1xyXG4gICAgICBpZiAoIXJlZ0V4LnRlc3QodGhpcy5maWVsZC5kYXRhLnZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucGF0dGVyblRleHQpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGNvbnRyb2wgZm9yIHRoZSByYW5nZSBjb25kaXRpb24gYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVJhbmdlQ29uZGl0aW9uKCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGNvbnN0IHZhbHVlTGVuZ3RoID0gdGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA/IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggOiAwO1xyXG5cclxuICAgIGlmICgodGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbiAmJiB2YWx1ZUxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4pIHx8XHJcbiAgICAgICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4ICYmIHZhbHVlTGVuZ3RoID4gdGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCkpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5yYW5nZVRleHQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgdGhlIGZvcm0gaXMgaW4gZGlzcGxheSBtb2RlLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSBmb3JtIGlzIGluIGRpc3BsYXkgbW9kZS5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBpc0Zvcm1JbkRpc3BsYXlNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNldHRpbmdzLmZvcm1Nb2RlID09PSBGb3JtTW9kZXMuRGlzcGxheTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIExhbmdDaGFuZ2VFdmVudCB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9odHRwLXJlcXVlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctYm91bmRhYmxlLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGh0dHBSZXF1ZXN0c1NlcnZpY2U6IEh0dHBSZXF1ZXN0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxpdGllc1NlcnZpY2U6IFV0aWxpdGllc1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZGF0YUJpbmRPcHRpb25zKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YUJpbmRPcHRpb25zKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBCaW5kcyB0aGUgZmllbGQncyBvcHRpb25zLiovXHJcbiAgcHJvdGVjdGVkIGRhdGFCaW5kT3B0aW9ucygpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLm9wdGlvbnNFbmRwb2ludCkge1xyXG4gICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5yZXBsYWNlVG9rZW5zKFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5sb29rdXBzW3RoaXMuZmllbGQuZGF0YS5vcHRpb25zRW5kcG9pbnRdLFxyXG4gICAgICAgIHRoaXMucm91dGUsXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmFkZGl0aW9uYWxQYXJhbWV0ZXJzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmJpbmRPcHRpb25zKGVuZHBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZpZWxkJ3Mgb3B0aW9ucy5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGVuZHBvaW50IFRoZSBlbmRwb2ludC5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBiaW5kT3B0aW9ucyhlbmRwb2ludDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGVuZHBvaW50KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEub3B0aW9ucyA9IHJlc3BvbnNlO1xyXG4gICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignYmluZE9wdGlvbnM6ICcsIGV4Y2VwdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctY2hlY2tib3gtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBjbGFzcz1cImNoZWNrQm94SG9sZGVyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiPlxyXG4gICAgPHAtY2hlY2tib3ggKm5nRm9yPVwibGV0IGNoZWNrYm94IG9mIGZpZWxkLmRhdGEub3B0aW9uczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZSsnXycraVwiXHJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCJjaGVja2JveC5uYW1lIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjaGVja2JveC5pZFwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgICA8L3AtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8dWwgKm5nSWY9XCJmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA+IDFcIj5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCB0aXRsZSBvZiBmaWVsZD8uZGF0YT8udmFsdWVcIj57e3RpdGxlfX08L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxzcGFuICpuZ0lmPVwiZmllbGQ/LmRhdGE/LnZhbHVlPy5sZW5ndGggPT0gMVwiPlxyXG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgdGl0bGUgb2YgZmllbGQ/LmRhdGE/LnZhbHVlXCI+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BwLWNoZWNrYm94e2Rpc3BsYXk6YmxvY2t9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNoa2JveC51aS13aWRnZXR7ZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddJywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1jaGlwcy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1jaGlwcyBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICBbYWxsb3dEdXBsaWNhdGVdPVwiZmllbGQudmFsaWRhdGlvbi5hbGxvd0R1cGxpY2F0ZVwiXHJcbiAgICAgICAgICAgW2FkZE9uQmx1cl09XCJmaWVsZC5hZGRPbkJsdXJcIlxyXG4gICAgICAgICAgIFthZGRPblRhYl09XCJmaWVsZC5hZGRPblRhYlwiXHJcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgKG9uQWRkKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQWRkJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAob25SZW1vdmUpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25SZW1vdmUnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLWNoaXBzPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHRpdGxlIG9mIGZpZWxkLmRhdGEudmFsdWVcIj57e3RpdGxlfX08L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIC51aS1jaGlwcy1pbnB1dC10b2tlbiw6aG9zdCA6Om5nLWRlZXAgLnVpLWNoaXBzLWlucHV0LXRva2VuIGlucHV0e3dpZHRoOjEwMCV9Omhvc3QgOjpuZy1kZWVwIC51aS1jaGlwcz51bC51aS1pbnB1dHRleHR7cGFkZGluZzo1cHggLjI1ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoaXBzRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10nLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1kYXRldGltZS1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1jYWxlbmRhciAjY2FsZW5kYXJcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiKGZpZWxkLnBsYWNlaG9sZGVyKSA/IChmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZSkgOiAnJ1wiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgIFtyZWFkb25seUlucHV0XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtzaG93SWNvbl09XCJmaWVsZC5zaG93SWNvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dUaW1lXT1cImZpZWxkLnNob3dUaW1lXCJcclxuICAgICAgICAgICAgICBbaG91ckZvcm1hdF09XCJmaWVsZC5ob3VyRm9ybWF0XCJcclxuICAgICAgICAgICAgICBbbW9udGhOYXZpZ2F0b3JdPVwiZmllbGQubW9udGhOYXZpZ2F0b3JcIlxyXG4gICAgICAgICAgICAgIFt5ZWFyTmF2aWdhdG9yXT1cImZpZWxkLnllYXJOYXZpZ2F0b3JcIlxyXG4gICAgICAgICAgICAgIFt5ZWFyUmFuZ2VdPVwiZmllbGQueWVhclJhbmdlXCJcclxuICAgICAgICAgICAgICBbZGF0ZUZvcm1hdF09XCJmaWVsZC5kYXRlRm9ybWF0XCJcclxuICAgICAgICAgICAgICBbbWluRGF0ZV09XCJmaWVsZC5taW5EYXRlVmFsdWVcIlxyXG4gICAgICAgICAgICAgIFttYXhEYXRlXT1cImZpZWxkLm1heERhdGVWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW2RlZmF1bHREYXRlXT1cImZpZWxkLmRlZmF1bHREYXRlVmFsdWVcIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgKG9uQ2xvc2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvblNlbGVjdCcsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgICAgKG9uU2VsZWN0KT1cInZhbGlkYXRlKCk7dHJpZ2dlckR5bmFtaWNFdmVudCgnb25TZWxlY3QnLCAkZXZlbnQsIGZpZWxkKTtcIj5cclxuICA8L3AtY2FsZW5kYXI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQuZGF0YS52YWx1ZSB8IGRhdGU6ZmllbGQuZGlzcGxheURhdGVGb3JtYXR9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYm9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYnV0dG9uLnVpLWRhdGVwaWNrZXItdHJpZ2dlcntyaWdodDowfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbi51aS1kYXRlcGlja2VyLXRyaWdnZXJ7bGVmdDowfTpob3N0IDo6bmctZGVlcCBzcGFuLnVpLWNhbGVuZGFye2Rpc3BsYXk6YmxvY2t9Omhvc3QgOjpuZy1kZWVwIHAtY2FsZW5kYXIgaW5wdXR7Ym9yZGVyLXJhZGl1czouMjVyZW19Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyLWJ1dHRvbntib3JkZXItcmFkaXVzOi4yNXJlbSAwIDAgLjI1cmVtfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIC51aS1jYWxlbmRhci51aS1jYWxlbmRhci13LWJ0biBpbnB1dHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czouMjVyZW07Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6LjI1cmVtfTpob3N0IDo6bmctZGVlcCBidXR0b24udWktZGF0ZXBpY2tlci10cmlnZ2Vye3Bvc2l0aW9uOmFic29sdXRlfTpob3N0IDo6bmctZGVlcCAudWktY2FsZW5kYXIgLnVpLWRhdGVwaWNrZXJ7d2lkdGg6MTdlbTttaW4td2lkdGg6YXV0b306aG9zdCA6Om5nLWRlZXAgLnVpLWNhbGVuZGFyIC51aS1jYWxlbmRhci1idXR0b24gLnVpLWJ1dHRvbi1pY29uLWxlZnR7Zm9udC1zaXplOjEuMjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgc2VhcmNoIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdjYWxlbmRhcicpIGNhbGVuZGFyRWxlbWVudDogYW55O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGF0ZVBpcGU6IERhdGVQaXBlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2FsZW5kYXJPcHRpb25zKCk7XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Q2FsZW5kYXJPcHRpb25zKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lLCB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmZpZWxkLmRhdGEudmFsdWUsIHRoaXMuZmllbGQuZm9ybURhdGFEYXRlRm9ybWF0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICAvLyBidWdneSBpZiBkb25lIGZyb20gaGVyZSBhZnRlciBjb21wb25lbnQgaXMgbG9hZGVkLiBNb3ZlZCBiYWNrIHRvIGJlZm9yZSBjb21wb25lbnQgbG9hZGVkLlxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjYWxlbmRhciBvcHRpb25zLiovXHJcbiAgcHJpdmF0ZSBzZXRDYWxlbmRhck9wdGlvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5jYWxlbmRhckVsZW1lbnQgJiYgdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zKSB7XHJcbiAgICAgIGNvbnN0IGNhbGVuZGFyT3B0aW9ucyA9IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5jYWxlbmRhck9wdGlvbnM7XHJcblxyXG4gICAgICBpZiAoY2FsZW5kYXJPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckVsZW1lbnQubG9jYWxlID0gY2FsZW5kYXJPcHRpb25zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JJbnB1dERhdGVwaWNrZXIgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5nYkNhbGVuZGFyLCBOZ2JEYXRlcGlja2VySTE4biwgTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSXNsYW1pY0kxOG4gfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9kYXRlcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZGF0ZXRpbWUtaGlqcmktZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdiBjbGFzcz1cImhpanJpLWRhdGUtY29udHJvbFwiPlxyXG4gICAgPGlucHV0IFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgIG5nYkRhdGVwaWNrZXJcclxuICAgICAgICAgICAjaW5wdXQ9XCJuZ2JEYXRlcGlja2VyXCJcclxuICAgICAgICAgICAjZGVmYXVsdElucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgW21pbkRhdGVdPVwiZmllbGQubWluRGF0ZVZhbHVlXCJcclxuICAgICAgICAgICBbbWF4RGF0ZV09XCJmaWVsZC5tYXhEYXRlVmFsdWVcIlxyXG4gICAgICAgICAgIFtzaG93V2Vla051bWJlcnNdPVwiZmllbGQuc2hvd1dlZWtOdW1iZXJzXCJcclxuICAgICAgICAgICBbZGlzcGxheU1vbnRoc109XCJmaWVsZC5kaXNwbGF5TW9udGhzXCJcclxuICAgICAgICAgICBbb3V0c2lkZURheXNdPVwiZmllbGQub3V0c2lkZURheXNcIlxyXG4gICAgICAgICAgIFtzaG93V2Vla2RheXNdPVwiZmllbGQuc2hvd1dlZWtkYXlzXCJcclxuICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDYWxlbmRhcigpO3ZhbGlkYXRlKCk7XCJcclxuICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0JywgJGV2ZW50LCBmaWVsZCk7XCIgLz5cclxuXHJcbiAgICA8IS0tIGljb24gLS0+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ2FsZW5kYXIoKTtcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJoaWpyaS1kYXRlLWljb25cIlxyXG4gICAgICAgICAgICAqbmdJZj1cImZpZWxkLnNob3dJY29uXCI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkPy5kYXRhPy52YWx1ZT8uZGF5fX0ve3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1vbnRofX0ve3tmaWVsZD8uZGF0YT8udmFsdWU/LnllYXJ9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLmhpanJpLWRhdGV7aGVpZ2h0OjM1cHh9LmhpanJpLWRhdGUtY29udHJvbHtwb3NpdGlvbjpyZWxhdGl2ZX0uaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtwYWRkaW5nOjAgNnB4O2JhY2tncm91bmQtY29sb3I6IzIzOTllNTtjb2xvcjojZmZmO2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMDAlO2xpbmUtaGVpZ2h0OjEuODtib3JkZXI6MH1idXR0b24uaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcjpkaXNhYmxlZHtvcGFjaXR5Oi4zNX0uaGlqcmktZGF0ZS1pY29uOmZvY3VzLC5oaWpyaS1kYXRlLWljb246aG92ZXJ7YmFja2dyb3VuZDojMWY4OWNlfS5oaWpyaS1kYXRlLWljb246YWZ0ZXJ7Y29udGVudDonXFxcXGU5MjcnO2ZvbnQtZmFtaWx5OnByaW1laWNvbnM7Zm9udC1zaXplOjEuMjVlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlciBuZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uIC5uZ2ItZHAtbmF2aWdhdGlvbi1jaGV2cm9uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXIgbmdiLWRhdGVwaWNrZXItbmF2aWdhdGlvbiAucmlnaHQgLm5nYi1kcC1uYXZpZ2F0aW9uLWNoZXZyb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0xMzVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEzNWRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1zZWxlY3R7YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0Ljc1cmVtIGNlbnRlcn1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAuaGlqcmktZGF0ZS1pY29uLWNvbnRhaW5lcntsZWZ0OjB9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgLmhpanJpLWRhdGUtaWNvbi1jb250YWluZXJ7cmlnaHQ6MH06aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1zZWxlY3R7YmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IC4yNXJlbSBjZW50ZXIhaW1wb3J0YW50O2RpcmVjdGlvbjpydGwhaW1wb3J0YW50O21pbi13aWR0aDoxMDBweH06aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLWRheSw6aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLXdlZWstbnVtYmVyLDpob3N0IDo6bmctZGVlcCBuZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IC5uZ2ItZHAtd2Vla2RheXt3aWR0aDoyLjVyZW07aGVpZ2h0OjIuNXJlbX06aG9zdCA6Om5nLWRlZXAgbmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyAubmdiLWRwLWRheSBkaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtsaW5lLWhlaWdodDoyLjVyZW19YF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IE5nYkNhbGVuZGFyLCB1c2VDbGFzczogTmdiQ2FsZW5kYXJJc2xhbWljVW1hbHF1cmEgfSxcclxuICAgIHsgcHJvdmlkZTogTmdiRGF0ZXBpY2tlckkxOG4sIHVzZUNsYXNzOiBJc2xhbWljSTE4biB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgY2FsZW5kYXI6IE5nYklucHV0RGF0ZXBpY2tlcjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbGl0aWVzU2VydmljZTogVXRpbGl0aWVzU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoYnJpZGdlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgdGhlIGZpZWxkJ3MgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5taW5EYXRlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubWluRGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQodGhpcy5maWVsZC5taW5EYXRlLCBuZXcgRGF0ZSh0aGlzLmZpZWxkLm1pbkRhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC5tYXhEYXRlKSB7XHJcbiAgICAgIHRoaXMuZmllbGQubWF4RGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQodGhpcy5maWVsZC5tYXhEYXRlLCBuZXcgRGF0ZSh0aGlzLmZpZWxkLm1heERhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhLmRhdGVWYWx1ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdChcclxuICAgICAgICB0aGlzLmZpZWxkLmRhdGEuZGF0ZVZhbHVlLFxyXG4gICAgICAgIG5ldyBEYXRlKHRoaXMuZmllbGQuZGF0YS5kYXRlVmFsdWUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcueWVhcicsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS55ZWFyKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcubW9udGgnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubW9udGgpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5kYXknLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVG9nZ2xlcyB0aGUgY2FsZW5kYXIuKi9cclxuICBwdWJsaWMgdG9nZ2xlQ2FsZW5kYXIoKSB7XHJcbiAgICB0aGlzLmNhbGVuZGFyLnRvZ2dsZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZWRpdG9yLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxkaXYgW25nQ2xhc3NdPVwieydoaWRlLXRvb2xiYXInOiFmaWVsZC5zaG93VG9vbGJhcn1cIj5cclxuICAgIDxwLWVkaXRvciBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICBbc3R5bGVdPVwieydoZWlnaHQnOmZpZWxkLmhlaWdodH1cIlxyXG4gICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgKG9uU2VsZWN0aW9uQ2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uU2VsZWN0aW9uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAob25UZXh0Q2hhbmdlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO1wiPlxyXG4gICAgPC9wLWVkaXRvcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtpbm5lckhUTUxdPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+PC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2Bib2R5LmFyIDpob3N0IDo6bmctZGVlcCAucWwtZWRpdG9yIHB7ZGlyZWN0aW9uOnJ0bDt0ZXh0LWFsaWduOnJpZ2h0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIHNwYW4ucWwtcGlja2VyLWxhYmVse3RleHQtYWxpZ246bGVmdH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAucWwtZWRpdG9yLnFsLWJsYW5rOjpiZWZvcmV7bGVmdDp1bnNldH06aG9zdCA6Om5nLWRlZXAgLmhpZGUtdG9vbGJhciAudWktZWRpdG9yLXRvb2xiYXJ7ZGlzcGxheTpub25lfTpob3N0IDo6bmctZGVlcCAuaGlkZS10b29sYmFyIC51aS1lZGl0b3ItY29udGVudHtib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjIWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGdldFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuc2hvd1Rvb2xiYXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmllbGQuZGF0YS52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkLmRhdGEudmFsdWUucmVwbGFjZSgvPFtePl0qPi9nLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICdwcmltZW5nL2ZpbGV1cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZmlsZS11cGxvYWQtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtZmlsZVVwbG9hZCBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgIFt1cmxdPVwiZmllbGQuZGF0YS51cmxcIlxyXG4gICAgICAgICAgICAgICAgW211bHRpcGxlXT1cImZpZWxkLm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIFthY2NlcHRdPVwiZmllbGQudmFsaWRhdGlvbi5hY2NlcHRcIlxyXG4gICAgICAgICAgICAgICAgI2lucHV0XHJcbiAgICAgICAgICAgICAgICBbYXV0b109XCJmaWVsZC5hdXRvXCJcclxuICAgICAgICAgICAgICAgIFttYXhGaWxlU2l6ZV09XCJmaWVsZC52YWxpZGF0aW9uLm1heEZpbGVTaXplSW5CeXRlc1wiXHJcbiAgICAgICAgICAgICAgICBbbW9kZV09XCJmaWVsZC5tb2RlXCJcclxuICAgICAgICAgICAgICAgIFtzaG93Q2FuY2VsQnV0dG9uXT1cImZpZWxkLmJ1dHRvbnMuc2hvd0NhbmNlbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd1VwbG9hZEJ1dHRvbl09XCJmaWVsZC5idXR0b25zLnNob3dVcGxvYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgW2Nob29zZUxhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2hvb3NlTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3VwbG9hZExhYmVsXT1cImZpZWxkLmJ1dHRvbnMudXBsb2FkTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2NhbmNlbExhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2FuY2VsTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBjdXN0b21VcGxvYWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJ2YWxpZGF0ZSgnb25TZWxlY3QnKTtcIlxyXG4gICAgICAgICAgICAgICAgKG9uUmVtb3ZlKT1cInZhbGlkYXRlKCdvblJlbW92ZScpO1wiXHJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJ2YWxpZGF0ZSgnb25DbGVhcicpO1wiPlxyXG4gIDwvcC1maWxlVXBsb2FkPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInVwbG9hZC1maWxlLXZpZXdlclwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnTmV3JyAmJiBmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA+IDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtZmlsZS1pdGVtXCJcclxuICAgICAgICAgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmllbGQuZGF0YS52YWx1ZVwiPlxyXG4gICAgICA8YSBbaHJlZl09XCJmaWxlLnVybFwiXHJcbiAgICAgICAgIFtkb3dubG9hZF09XCJmaWxlLmZpbGVOYW1lXCJcclxuICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgY2xhc3M9XCJ1cGxvYWQtZmlsZS1hbmNob3JcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1cGxvYWQtZmlsZS10aXRsZVwiPnt7ZmlsZS5maWxlTmFtZX19PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpbGUoZmlsZSk7dmFsaWRhdGUoJ29uUmVtb3ZlRmlsZScpO1wiXHJcbiAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgIGNsYXNzPVwidHJhc2gtaWNvbi1zdHlsZVwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIHAtZmlsZXVwbG9hZCAudWktbWVzc2FnZXMtZXJyb3J7ZGlzcGxheTpub25lIWltcG9ydGFudH06aG9zdCA6Om5nLWRlZXAgLnVpLWZpbGV1cGxvYWR7bWFyZ2luLWJvdHRvbTo4cHh9LnVwbG9hZC1maWxlLXZpZXdlcntib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoxMHB4fS51cGxvYWQtZmlsZS12aWV3ZXIgLnVwbG9hZC1maWxlLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y2ZjdmOSAwLCNlYmVkZjAgMTAwJSk7bWFyZ2luLWJvdHRvbToxMHB4fS51cGxvYWQtZmlsZS10aXRsZXtwYWRkaW5nOjAgMTVweH1hLnVwbG9hZC1maWxlLWFuY2hvcntsaW5lLWhlaWdodDoyfS51cGxvYWQtZmlsZS12aWV3ZXIgZGl2Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfWEudHJhc2gtaWNvbi1zdHlsZXtwYWRkaW5nOjZweCAxMXB4O2JvcmRlci1yYWRpdXM6NnB4O2ZvbnQtc2l6ZToxMnB4O2JvcmRlcjoxcHggc29saWQgIzIzOTllNTtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzIzOTllNTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfWEudHJhc2gtaWNvbi1zdHlsZTpob3Zlcntib3JkZXI6MXB4IHNvbGlkICMxZjg5Y2U7YmFja2dyb3VuZDojMWY4OWNlfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEudHJhc2gtaWNvbi1zdHlsZXtmbG9hdDpsZWZ0fWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGEudHJhc2gtaWNvbi1zdHlsZXtmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGZpbGUgdXBsb2FkIGNvbnRyb2wuKi9cclxuICBAVmlld0NoaWxkKEZpbGVVcGxvYWQpIGZpbGVVcGxvYWRDb250cm9sOiBGaWxlVXBsb2FkO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZVVwbG9hZENvbnRyb2wpIHtcclxuICAgICAgdGhpcy5maWxlVXBsb2FkQ29udHJvbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcykge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcykge1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSwgZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBmb3JtIGNvbnRyb2wgYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwdWJsaWMgdmFsaWRhdGUoZXZlbnRBcmd1bWVudHM/OiBhbnksIGlzU3VibWl0PzogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMucHJlVmFsaWRhdGUoaXNTdWJtaXQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKCkpIHtcclxuICAgICAgbGV0IHZhbHVlTGVuZ3RoID0gMDtcclxuICAgICAgaWYgKHRoaXMuZmlsZVVwbG9hZENvbnRyb2wpIHtcclxuICAgICAgICB2YWx1ZUxlbmd0aCA9IGV2ZW50QXJndW1lbnRzID09PSAnb25SZW1vdmUnID8gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcy5sZW5ndGggLSAxIDogdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgICB2YWx1ZUxlbmd0aCArPSB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4gJiYgdmFsdWVMZW5ndGggPCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluKSB8fFxyXG4gICAgICAgICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4ICYmIHZhbHVlTGVuZ3RoID4gdGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCkpIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJhbmdlVGV4dCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heEZpbGVTaXplSW5CeXRlcyA+IDAgJiYgdGhpcy5maWxlVXBsb2FkQ29udHJvbCAmJiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLm1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkRmlsZVNpemVNZXNzYWdlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5tc2dzLmZpbmQobSA9PiBtLnN1bW1hcnkgPT09ICdpbnZhbGlkRmlsZVNpemUnKTtcclxuXHJcbiAgICAgICAgaWYgKGludmFsaWRGaWxlU2l6ZU1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24uaW52YWxpZEZpbGVTaXplVGV4dCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW52YWxpZEZpbGVUeXBlTWVzc2FnZSA9IHRoaXMuZmlsZVVwbG9hZENvbnRyb2wubXNncy5maW5kKG0gPT4gbS5zdW1tYXJ5ID09PSAnaW52YWxpZEZpbGVUeXBlJyk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkRmlsZVR5cGVNZXNzYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLmludmFsaWRGaWxlVHlwZVRleHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIHRoZSBmaWxlLlxyXG4gICAqIEBwYXJhbSBhbnkgZmlsZSBUaGUgZmlsZSB0byByZW1vdmUuXHJcbiAgKi9cclxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5wb3AoZmlsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBDcm9wcGVyU2V0dGluZ3MgfSBmcm9tICduZzItaW1nLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAncHJpbWVuZy9maWxldXBsb2FkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWltYWdlLWNyb3BwZXItZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQ/LmNzc0NsYXNzZXM/LmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQgLS0+XHJcbiAgPCEtLSB1cGxvYWQgY29udHJvbCAtLT5cclxuICA8cC1maWxlVXBsb2FkIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBtb2RlPVwiYWR2YW5jZWRcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dDYW5jZWxCdXR0b25dPWZhbHNlXHJcbiAgICAgICAgICAgICAgICBbc2hvd1VwbG9hZEJ1dHRvbl09ZmFsc2VcclxuICAgICAgICAgICAgICAgIFtjaG9vc2VMYWJlbF09XCJmaWVsZC5idXR0b25zLmNob29zZUxhYmVsIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVNpemVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVNpemVNZXNzYWdlRGV0YWlsPVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlVHlwZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZVN1bW1hcnk9XCJpbnZhbGlkRmlsZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgY3VzdG9tVXBsb2FkPXRydWVcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAob25TZWxlY3QpPVwic2V0Q3JvcHBlckltYWdlKCk7dmFsaWRhdGUoKTtcIlxyXG4gICAgICAgICAgICAgICAgKG9uUmVtb3ZlKT1cImNsZWFyVmFsdWUoKTt2YWxpZGF0ZSgpO1wiPlxyXG4gIDwvcC1maWxlVXBsb2FkPlxyXG5cclxuICA8IS0tIGNyb3BwZXIgLS0+XHJcbiAgPGltZy1jcm9wcGVyICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiIWltYWdlRmlsZS5zcmNcIlxyXG4gICAgICAgICAgICAgICBbaW1hZ2VdPVwiaW1hZ2VGaWxlXCJcclxuICAgICAgICAgICAgICAgW3NldHRpbmdzXT1cImNyb3BwZXJTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgIChvbkNyb3ApPVwic2V0VmFsdWUoKVwiPlxyXG4gIDwvaW1nLWNyb3BwZXI+XHJcblxyXG4gIDwhLS0gY3JvcHBlZCBpbWFnZSAtLT5cclxuICA8c3BhbiBjbGFzcz1cImNyb3BwZWQtaW1hZ2VcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgW2hpZGRlbl09XCIgIWltYWdlRmlsZS5pbWFnZVwiPlxyXG4gICAgPGltZyAjY3JvcHBlZEltYWdlXHJcbiAgICAgICAgICpuZ0lmPVwiaW1hZ2VGaWxlLmltYWdlXCJcclxuICAgICAgICAgW3NyY109XCJpbWFnZUZpbGUuaW1hZ2VcIlxyXG4gICAgICAgICBbd2lkdGhdPVwiY3JvcHBlclNldHRpbmdzLndpZHRoXCJcclxuICAgICAgICAgW2hlaWdodF09XCJjcm9wcGVyU2V0dGluZ3MuaGVpZ2h0XCI+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8aW1nICpuZ0lmPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFtzcmNdPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFt3aWR0aF09XCJjcm9wcGVyU2V0dGluZ3Mud2lkdGhcIlxyXG4gICAgICAgICBbaGVpZ2h0XT1cImNyb3BwZXJTZXR0aW5ncy5oZWlnaHRcIj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGlucHV0LmZvcm0taW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO2JvcmRlci1yYWRpdXM6LjI1cmVtO3BhZGRpbmc6NXB4fXAtZmlsZXVwbG9hZHtkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcCBpbWctY3JvcHBlciAubmcyLWltZ2Nyb3B7Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O3BhZGRpbmc6MjBweCAwO2JhY2tncm91bmQtY29sb3I6I2ViZWRmMDt3aWR0aDoxMDAlO21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja30uZm9ybS1kaXNwbGF5IGltZ3tib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO3BhZGRpbmc6MTBweH0uY3JvcHBlZC1pbWFnZXt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O2JhY2tncm91bmQtY29sb3I6I2ViZWRmMDttYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgaW1hZ2UgY3JvcHBlciBjb21wb25lbnQuKi9cclxuICBAVmlld0NoaWxkKEltYWdlQ3JvcHBlckNvbXBvbmVudCkgY3JvcHBlcjogSW1hZ2VDcm9wcGVyQ29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5ICovXHJcbiAgQFZpZXdDaGlsZCgnY3JvcHBlZEltYWdlJykgY3JvcHBlZEltYWdlRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgZmlsZSB1cGxvYWQgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoRmlsZVVwbG9hZCkgZmlsZVVwbG9hZENvbnRyb2w6IEZpbGVVcGxvYWQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNyb3BwZXIgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgY3JvcHBlclNldHRpbmdzOiBDcm9wcGVyU2V0dGluZ3M7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGltYWdlIGZpbGUuKi9cclxuICBwdWJsaWMgaW1hZ2VGaWxlOiBhbnkgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVDcm9wcGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGZpZWxkJ3MgdmFsdWUuXHJcbiAgICogQHBhcmFtIGFueSBuZXdWYWx1ZSBUaGUgbmV3IGZpZWxkIHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5pbWFnZUZpbGUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlLnNldEF0dHJpYnV0ZSgnY3Jvc3NPcmlnaW4nLCAnYW5vbnltb3VzJyk7XHJcblxyXG4gICAgICB0aGlzLmltYWdlRmlsZS5zcmMgPSBuZXdWYWx1ZS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIHdvcmthcm91bmQgYXMgaXQgaXMgbm90IHdvcmtpbmcgd2l0aG91dCBpdC4gbm8gaWRlYSB3aHkgOilcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY3JvcHBlci5zZXRJbWFnZSh0aGlzLmltYWdlRmlsZSk7IH0sIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmNsZWFyKCk7XHJcblxyXG4gICAgICB0aGlzLmNyb3BwZXIucmVzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjcm9wcGVkIGltYWdlIHZhbHVlLiovXHJcbiAgcHVibGljIHNldFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JvcHBlZEltYWdlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLmNyb3BwZWRJbWFnZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jdXJyZW50U3JjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjcm9wcGVkIGltYWdlLiovXHJcbiAgcHVibGljIHNldENyb3BwZXJJbWFnZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IHRoaXMuZmlsZVVwbG9hZENvbnRyb2wuZmlsZXNbMF07XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkRmlsZSkge1xyXG4gICAgICB0aGlzLmltYWdlRmlsZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAvLyBzZXQgYXMgYSB0ZW1wb3JhcnkgdmFsdWUgZm9yIHZhbGlkYXRpb24gc2luY2UgdGhlIHJlYWQgaXMgYXN5bmMuXHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9ICdwbGFjZWhvbGRlcic7XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZGVuZCA9IChsb2FkRXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlLnNyYyA9IGxvYWRFdmVudC50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICB0aGlzLmNyb3BwZXIuc2V0SW1hZ2UodGhpcy5pbWFnZUZpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLmltYWdlRmlsZS5zcmM7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGNyb3BwZXIgY29tcG9uZW50LiovXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQ3JvcHBlcigpIHtcclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzID0gbmV3IENyb3BwZXJTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLm5vRmlsZUlucHV0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy53aWR0aCA9IHRoaXMuY3JvcHBlclNldHRpbmdzLmNyb3BwZWRXaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLndpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLmhlaWdodCA9IHRoaXMuY3JvcHBlclNldHRpbmdzLmNyb3BwZWRIZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MuY2FudmFzV2lkdGggPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNXaWR0aDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MubWluV2lkdGggPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5taW5XaWR0aDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5taW5IZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5taW5IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3Mucm91bmRlZCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLnJvdW5kZWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1pbmZvLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuICA8ZGl2IFtpbm5lckhUTUxdPVwiZmllbGQuaHRtbFNuaXBwZXQgfCB0cmFuc2xhdGVcIj48L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZvRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1pbnB1dC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8aW5wdXQgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImZpZWxkLmF1dG9Db21wbGV0ZVwiXHJcbiAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICBbdHlwZV09XCJmaWVsZC5maWVsZFR5cGVcIlxyXG4gICAgICAgICBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFwiXHJcbiAgICAgICAgIFtwYXR0ZXJuXT1cImZpZWxkLnZhbGlkYXRpb24ucGF0dGVyblwiXHJcbiAgICAgICAgIFttYXhsZW5ndGhdPVwiZmllbGQudmFsaWRhdGlvbi5sZW5ndGhcIlxyXG4gICAgICAgICBbcmVhZG9ubHldPVwiZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQuZGF0YS52YWx1ZX19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BpbnB1dC5mb3JtLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHBhdHRlcm4uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JQYXR0ZXJuOiBib29sZWFuID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW91c2VFdmVudCwgTWFwc0FQSUxvYWRlciB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IH0gZnJvbSAnZ29vZ2xlbWFwcyc7XHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tYXAtbWFya2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWxvY2F0aW9uLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1sb2NhdGlvbi1jb250YWluZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8IS0tIGlucHV0ICYmIGRpc3BsYXkgLS0+XHJcbiAgICA8aW5wdXQgI3NlYXJjaFxyXG4gICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcclxuICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcblxyXG4gICAgPCEtLSBpY29uIC0tPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtbG9jYXRpb24taWNvblwiPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8YWdtLW1hcCBbbGF0aXR1ZGVdPVwiZmllbGQuZGVmYXVsdExvY2F0aW9uPy5sYXRpdHVkZVwiXHJcbiAgICAgICAgICAgW2xvbmdpdHVkZV09XCJmaWVsZC5kZWZhdWx0TG9jYXRpb24/LmxvbmdpdHVkZVwiXHJcbiAgICAgICAgICAgW3pvb21dPVwiZmllbGQuem9vbVwiXHJcbiAgICAgICAgICAgW3pvb21Db250cm9sXT1cImZpZWxkLnpvb21Db250cm9sXCJcclxuICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgKG1hcENsaWNrKT1cImFkZE1hcmtlcnMoJGV2ZW50KTt2YWxpZGF0ZSgpO1wiPlxyXG5cclxuICAgIDxhZ20tbWFya2VyICpuZ0Zvcj1cImxldCBtYXJrZXIgb2YgZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAobWFya2VyQ2xpY2spPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnbWFya2VyQ2xpY2snLCAkZXZlbnQsIG1hcmtlcik7XCJcclxuICAgICAgICAgICAgICAgIFtsYXRpdHVkZV09XCJtYXJrZXIubGF0aXR1ZGVcIlxyXG4gICAgICAgICAgICAgICAgW2xvbmdpdHVkZV09XCJtYXJrZXIubG9uZ2l0dWRlXCJcclxuICAgICAgICAgICAgICAgIFttYXJrZXJEcmFnZ2FibGVdPVwibWFya2VyLmRyYWdnYWJsZSAmJiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChkcmFnRW5kKT1cInVwZGF0ZU1hcmtlclBvc2l0aW9uKG1hcmtlciwgJGV2ZW50KVwiPlxyXG5cclxuICAgICAgPGFnbS1pbmZvLXdpbmRvdyAqbmdJZj1cIm1hcmtlci5pbmZvSHRtbFwiPlxyXG4gICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJtYXJrZXIuaW5mb0h0bWwgfCB0cmFuc2xhdGVcIj48L2Rpdj5cclxuICAgICAgPC9hZ20taW5mby13aW5kb3c+XHJcbiAgICA8L2FnbS1tYXJrZXI+XHJcbiAgPC9hZ20tbWFwPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BhZ20tbWFwe3dpZHRoOjEwMCU7aGVpZ2h0OjMwMHB4fXNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7Y29udGVudDpcIlxcXFxmMDAyXCI7Zm9udDoxNHB4LzIuNSBGb250QXdlc29tZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTtjb2xvcjojNTU1fS5zZWFyY2gtbG9jYXRpb24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIHNwYW4uc2VhcmNoLWxvY2F0aW9uLWljb246YWZ0ZXJ7cmlnaHQ6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgc3Bhbi5zZWFyY2gtbG9jYXRpb24taWNvbjphZnRlcntsZWZ0OjVweH1pbnB1dC5mb3JtLWlucHV0e2JvcmRlcjoxcHggc29saWQgI2NlZDRkYTtib3JkZXItcmFkaXVzOi4yNXJlbTtwYWRkaW5nOjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25GaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzZWFyY2ggZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1hcHNBUElMb2FkZXI6IE1hcHNBUElMb2FkZXIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIC8vIHNldCBhIG1hcCBmaWVsZCdzIGxvY2F0aW9uIHRvIHVzZSBkZWZhdWx0IGxvY2F0aW9uIGlmIG5vIHZhbHVlIGlzIHNldCBhbmQgbG9jYXRpb24gaXMgYXZhaWxhYmxlLlxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmRlZmF1bHRMb2NhdGlvbiB8fCAhdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24ubGF0aXR1ZGUgfHwgIXRoaXMuZmllbGQuZGVmYXVsdExvY2F0aW9uLmxvbmdpdHVkZSkge1xyXG4gICAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC5kZWZhdWx0TG9jYXRpb24gPSB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSBmaWVsZCdzIHZhbHVlLlxyXG4gICAqIEBwYXJhbSBhbnkgbmV3VmFsdWUgVGhlIG5ldyBmaWVsZCB2YWx1ZS5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZShuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG5ld1ZhbHVlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbih2YWx1ZS5sYXRpdHVkZSwgdmFsdWUubG9uZ2l0dWRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IFtdO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddLmxhdGl0dWRlJywgdmFsdWUubGF0aXR1ZGUpO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUgKyAnWycgKyBpICsgJ10ubG9uZ2l0dWRlJywgdmFsdWUubG9uZ2l0dWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGQgYSBtYXJrZXIgZnJvbSB0aGUgY2xpY2tlZCBtYXAgbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIE1vdXNlRXZlbnQgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAqL1xyXG4gIHB1YmxpYyBhZGRNYXJrZXJzKGV2ZW50QXJndW1lbnRzOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuYWRkTWFya2Vyc0Zyb21Mb2NhdGlvbihldmVudEFyZ3VtZW50cy5jb29yZHMubGF0LCBldmVudEFyZ3VtZW50cy5jb29yZHMubG5nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWN0aXZhdGVzIHRoZSBnb29nbGUgbWFwIGxvY2F0aW9uIHNlYXJjaC4qL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZVNlYXJjaElucHV0KCkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoRWxlbWVudCkge1xyXG4gICAgICAvLyBsb2FkIFBsYWNlcyBBdXRvY29tcGxldGVcclxuICAgICAgdGhpcy5tYXBzQVBJTG9hZGVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLm1lcmdlZEZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSB0aGlzLnNlYXJjaEVsZW1lbnQubmF0aXZlRWxlbWVudC5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKHRoaXMuc2VhcmNoRWxlbWVudC5uYXRpdmVFbGVtZW50LCB7fSk7XHJcbiAgICAgICAgYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwbGFjZSByZXN1bHRcclxuICAgICAgICAgICAgY29uc3QgcGxhY2U6IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZVJlc3VsdCA9IGF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlc3VsdFxyXG4gICAgICAgICAgICBpZiAocGxhY2UuZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCB8fCBwbGFjZS5nZW9tZXRyeSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IGxhdGl0dWRlLCBsb25naXR1ZGUgYW5kIHpvb21cclxuICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG5cclxuICAgICAgICAgICAgZmllbGQuZGVmYXVsdExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgIGxhdGl0dWRlOiBsYXRpdHVkZSxcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6IGxvbmdpdHVkZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmllbGQuem9vbSA9IDEyO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcclxuICAgICAgICAgICAgICBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcclxuICAgICAgICAgICAgICBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKSxcclxuICAgICAgICAgICAgICBmaWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmRyYWdnYWJsZSxcclxuICAgICAgICAgICAgICBmaWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmluZm9IdG1sXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZE1hcmtlcnNGcm9tTG9jYXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZCBhIG1hcmtlciBmcm9tIHRoZSBjbGlja2VkIG1hcCBsb2NhdGlvbi5cclxuICAgKiBAcGFyYW0gbnVtYmVyIGxhdGl0dWRlIFRoZSBsYXRpdHVkZS5cclxuICAgKiBAcGFyYW0gbnVtYmVyIGxvbmdpdHVkZSBUaGUgbG9uZ2l0dWRlLlxyXG4gICovXHJcbiAgcHJpdmF0ZSBhZGRNYXJrZXJzRnJvbUxvY2F0aW9uKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCA+IDAgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXgpIHtcclxuICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmRyYWdnYWJsZSxcclxuICAgICAgICB0aGlzLmZpZWxkLm1hcmtlclNldHRpbmdzLmRlZmF1bHROZXdNYXJrZXIuaW5mb0h0bWxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG1hcmtlci5ldmVudFRyaWdnZXJzID0gdGhpcy5maWVsZC5tYXJrZXJTZXR0aW5ncy5kZWZhdWx0TmV3TWFya2VyLmV2ZW50VHJpZ2dlcnM7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUucHVzaChtYXJrZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGUgdGhlIG1hcmtlcidzIHBvc2l0aW9uIHdoZW4gZHJhZyBpcyBkb25lLlxyXG4gICAqIEBwYXJhbSBNYXJrZXIgbWFya2VyIFRoZSBtYXJrZXIgdG8gdXBkYXRlLlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cyBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlTWFya2VyUG9zaXRpb24obWFya2VyOiBNYXJrZXIsIGV2ZW50QXJndW1lbnRzOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBtYXJrZXIubGF0aXR1ZGUgPSBldmVudEFyZ3VtZW50cy5jb29yZHMubGF0O1xyXG4gICAgbWFya2VyLmxvbmdpdHVkZSA9IGV2ZW50QXJndW1lbnRzLmNvb3Jkcy5sbmc7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRNYXNrIH0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbWFzay1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1pbnB1dE1hc2sgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIihmaWVsZC5wbGFjZWhvbGRlcikgPyAoZmllbGQucGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUpIDogJydcIlxyXG4gICAgICAgICAgICAgICAjaW5wdXQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZpZWxkLnJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgW21hc2tdPVwiZmllbGQudmFsaWRhdGlvbi5tYXNrXCJcclxuICAgICAgICAgICAgICAgW3Nsb3RDaGFyXT1cImZpZWxkLnNsb3RDaGFyXCJcclxuICAgICAgICAgICAgICAgW2F1dG9DbGVhcl09XCJmaWVsZC5hdXRvQ2xlYXJcIlxyXG4gICAgICAgICAgICAgICBbdW5tYXNrXT1cImZpZWxkLnVubWFza1wiXHJcbiAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgIFttYXhsZW5ndGhdPVwiZmllbGQudmFsaWRhdGlvbi5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICBbY2hhcmFjdGVyUGF0dGVybl09XCJmaWVsZC52YWxpZGF0aW9uLmNoYXJhY3RlclBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICBbcGF0dGVybl09XCJmaWVsZC52YWxpZGF0aW9uLnBhdHRlcm5cIlxyXG4gICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9wLWlucHV0TWFzaz5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZC5kYXRhLnZhbHVlfX1cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdmFsaWRhdGlvbiBzdW1tYXJ5IGNvbXBvbmVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoSW5wdXRNYXNrKSBpbnB1dE1hc2s6IElucHV0TWFzaztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciBwYXR0ZXJuLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUGF0dGVybjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgbWFzay5cclxuICAgKiBAcGFyYW0gbWFzayBjdXJyZW50IFRoZSBuZXcgbWFzay5cclxuICAqL1xyXG4gIHB1YmxpYyB1cGRhdGVNYXNrKG1hc2s6IGFueSkge1xyXG4gICAgdGhpcy5pbnB1dE1hc2suX21hc2sgPSBtYXNrO1xyXG5cclxuICAgIHRoaXMuaW5wdXRNYXNrLmluaXRNYXNrKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dE1hc2suaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dE1hc2suaW5wdXRWaWV3Q2hpbGQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWx1ZS5cclxuICAgKiBAcGFyYW0gdmFsdWUgY3VycmVudCBUaGUgbmV3IHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZU1hc2tWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmlucHV0TWFzay53cml0ZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU3VtbWFyeU1vZGVzLCBTd2FsVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZW51bXMnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy12YWxpZGF0aW9uLXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjdmFsaWRhdGlvblN1bW1hcnlcclxuICAgICBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeS1jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnZhbGlkYXRpb25TdW1tYXJ5TW9kZSAhPSdMaXN0J1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJ2YWxpZGF0aW9uLXN1bW1hcnlcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy52YWxpZGF0aW9uRXJyb3JzPy5sZW5ndGggPiAwXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeS10aXRsZS1zZWN0aW9uXCI+e3sndmFsaWRhdGlvbnMuVmFsaWRhdGlvblN1bW1hcnlFcnJvcnMnIHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSBjbGFzcz1cInZhbGlkYXRpb24tc3VtbWFyeS1lcnJvclwiICpuZ0Zvcj1cImxldCBlcnJvciBvZiBicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AudmFsaWRhdGlvbi1zdW1tYXJ5e2JvcmRlcjoxcHggc29saWQgI2Q2ZDZkNjtwYWRkaW5nLXRvcDoxNXB4O2NvbG9yOnJlZDttYXJnaW4tYm90dG9tOjIwcHh9LnZhbGlkYXRpb24tc3VtbWFyeS10aXRsZS1zZWN0aW9ue2ZvbnQtd2VpZ2h0OjcwMDtwYWRkaW5nOjE1cHggMjBweDtkaXNwbGF5OmJsb2NrfS52YWxpZGF0aW9uLXN1bW1hcnktY29udGFpbmVye21hcmdpbi10b3A6MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHZhbGlkYXRpb24gc3VtbWFyeSBlbGVtZW50LiovXHJcbiAgQFZpZXdDaGlsZCgndmFsaWRhdGlvblN1bW1hcnknKSB2YWxpZGF0aW9uU3VtbWFyeUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNob3dzIHRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgYXMgYW4gYWxlcnQuKi9cclxuICBzaG93U3VtbWFyeUFsZXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNldHRpbmdzLnZhbGlkYXRpb25TdW1tYXJ5TW9kZSA9PT0gVmFsaWRhdGlvblN1bW1hcnlNb2Rlcy5BbGVydCkge1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICAgIHN3YWwoe1xyXG4gICAgICAgIGh0bWw6IHRoaXMudmFsaWRhdGlvblN1bW1hcnlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLFxyXG4gICAgICAgIHR5cGU6IFN3YWxUeXBlcy5XYXJuaW5nLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctc2VsZWN0LWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxwLWRyb3Bkb3duIFtvcHRpb25zXT1cImZpZWxkLmRhdGEub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIoZmllbGQucGxhY2Vob2xkZXIpID8gKGZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlKSA6ICcnXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmllbGQuZW5hYmxlZmlsdGVyXCJcclxuICAgICAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidmFsaWRhdGUoKTt0cmlnZ2VyRHluYW1pY0V2ZW50KCdvbkNoYW5nZScsICRldmVudCwgZmllbGQpO1wiPlxyXG4gIDwvcC1kcm9wZG93bj5cclxuXHJcbiAgPCEtLSBkaXNwbGF5IC0tPlxyXG4gIDxzcGFuIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmRpc3BsYXlcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAge3tmaWVsZD8uZGF0YT8udmFsdWU/Lm5hbWV9fVxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYm9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnVpLWRyb3Bkb3duLXBhbmVsIC51aS1kcm9wZG93bi1pdGVte3RleHQtYWxpZ246cmlnaHR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1kcm9wZG93biAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLXRyaWdnZXJ7bGVmdDowO3JpZ2h0OnVuc2V0O2JvcmRlci1yaWdodDoxcHggc29saWQgI2Q2ZDZkNjtib3JkZXItbGVmdDowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVse3BhZGRpbmctcmlnaHQ6NXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuaWQnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1yYWRpb2J1dHRvbi1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2IGNsYXNzPVwicmFkaW9CdXR0b25Ib2xkZXJcIlxyXG4gICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8cC1yYWRpb0J1dHRvbiAqbmdGb3I9XCJsZXQgcmFkaW9idXR0b24gb2YgZmllbGQuZGF0YS5vcHRpb25zOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgIFtpZF09XCJmaWVsZC5uYW1lKydfJytpXCJcclxuICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICNpbnB1dD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgW2xhYmVsXT1cIiByYWRpb2J1dHRvbi5uYW1lIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyYWRpb2J1dHRvbi5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DbGljaycsICRldmVudCwgZmllbGQpO1wiXHJcbiAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ2YWxpZGF0ZSgpO1wiPlxyXG4gICAgPC9wLXJhZGlvQnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICB7e2ZpZWxkPy5kYXRhPy52YWx1ZX19XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BwLXJhZGlvYnV0dG9ue2Rpc3BsYXk6YmxvY2t9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQgZXh0ZW5kcyBCb3VuZGFibGVGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1tdWx0aS1zZWxlY3QtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtbXVsdGlTZWxlY3QgW29wdGlvbnNdPVwiZmllbGQuZGF0YS5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgI2lucHV0PVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgW2ZpbHRlclBsYWNlSG9sZGVyXT1cImZpZWxkLnBsYWNlaG9sZGVyIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZpZWxkLmRhdGEudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgIFtmaWx0ZXJdPVwiZmllbGQuZW5hYmxlZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICBvcHRpb25MYWJlbD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgW2RlZmF1bHRMYWJlbF09XCJmaWVsZC5wbGFjZWhvbGRlciB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgICAob25DaGFuZ2UpPVwidHJpZ2dlckR5bmFtaWNFdmVudCgnb25DaGFuZ2UnLCAkZXZlbnQsIGZpZWxkKTtcIlxyXG4gICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLW11bHRpU2VsZWN0PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlID09ICdEaXNwbGF5J1wiPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQ/LmRhdGE/LnZhbHVlXCI+e3tpdGVtLm5hbWV9fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCA6Om5nLWRlZXAgLnVpLW11bHRpc2VsZWN0LnVpLXdpZGdldHt3aWR0aDoxMDAlfTpob3N0IDo6bmctZGVlcCBwLW11bHRpc2VsZWN0IC51aS1tdWx0aXNlbGVjdC1sYWJlbC51aS1jb3JuZXItYWxse21hcmdpbi1ib3R0b206MDtoZWlnaHQ6MzVweH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QtZmlsdGVyLWNvbnRhaW5lcntmbG9hdDpyaWdodH1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QtaGVhZGVyIC51aS1tdWx0aXNlbGVjdC1jbG9zZXtyaWdodDp1bnNldDtsZWZ0Oi4zNzVlbX1ib2R5LmFyIDpob3N0IDo6bmctZGVlcCAudWktbXVsdGlzZWxlY3QtcGFuZWwgLnVpLW11bHRpc2VsZWN0LWl0ZW17dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1tdWx0aXNlbGVjdCAudWktY29ybmVyLXJpZ2h0e2xlZnQ6MDtyaWdodDp1bnNldDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkNmQ2ZDY7Ym9yZGVyLWxlZnQ6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjB9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgcC1tdWx0aXNlbGVjdCAudWktbXVsdGlzZWxlY3QtbGFiZWwudWktY29ybmVyLWFsbHtwYWRkaW5nLXJpZ2h0OjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCBleHRlbmRzIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbC5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZVtpXTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJ1snICsgaSArICddLmlkJywgdmFsdWUuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyaWRnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9icmlkZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy10aW1lLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxudHctbWF0LXRpbWVwaWNrZXIgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2lucHV0SWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5wdXROYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5PXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyVmFsdWVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbKHVzZXJUaW1lKV09XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAodXNlclRpbWVDaGFuZ2UpPVwic2V0VGltZVBpY2tlckZpZWxkVmFsdWUoJGV2ZW50KTt2YWxpZGF0ZSgpO3RyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2hhbmdlJywgJGV2ZW50LCBmaWVsZCk7XCI+XHJcbiAgPC9udHctbWF0LXRpbWVwaWNrZXI+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIHt7ZmllbGQ/LmRhdGE/LnZhbHVlPy5ob3VyfX06e3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1pbnV0ZX19XHJcbiAgICA8c3BhbiAqbmdJZj1cImZpZWxkPy5kYXRhPy52YWx1ZT8uZm9ybWF0ID09IDEyXCI+e3tmaWVsZD8uZGF0YT8udmFsdWU/Lm1lcmlkZW4gfCB0cmFuc2xhdGV9fTwvc3Bhbj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYDpob3N0IDo6bmctZGVlcCAudGltZS1waWNrZXItYnV0dG9uLm1hdC1idXR0b257cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjFweCBzb2xpZCAjMjM5OWU1O2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMjM5OWU1O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnM7aGVpZ2h0OjM1cHh9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgLnRpbWUtcGlja2VyLWJ1dHRvbi5tYXQtYnV0dG9ue3JpZ2h0OjE1cHh9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgLnRpbWUtcGlja2VyLWJ1dHRvbi5tYXQtYnV0dG9ue2xlZnQ6MTVweH06aG9zdCA6Om5nLWRlZXAgLnctbWF0LXRpbWVwaWNrZXIgLm1hdC1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtZmxhdC1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtaWNvbi1idXR0b24sOmhvc3QgOjpuZy1kZWVwIC53LW1hdC10aW1lcGlja2VyIC5tYXQtc3Ryb2tlZC1idXR0b257bGluZS1oZWlnaHQ6MzJweH06aG9zdCA6Om5nLWRlZXAgaW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQuc2V0VGltZSwgdGhpcy5maWVsZC5zZXRUaW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KHRoaXMuZmllbGQuc2V0VGltZSwgdGhpcy5maWVsZC5zZXRUaW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQXBwZW5kcyB0aGUgZm9ybSBkYXRhLlxyXG4gICAqIEBwYXJhbSBGb3JtRGF0YSBkYXRhIFRoZSBkYXRhLlxyXG4gICAqIEByZXR1cm4gRm9ybURhdGEgVGhlIHVwZGF0ZWQgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGFwcGVuZEZvcm1EYXRhKGRhdGE6IEZvcm1EYXRhKTogRm9ybURhdGEge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5ob3VyJywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmhvdXIpO1xyXG5cclxuICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lICsgJy5taW51dGUnLCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubWludXRlKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcubWVyaWRlbicsIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5tZXJpZGVuKTtcclxuXHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSArICcuZm9ybWF0JywgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgYSB0aW1lIHBpY2tlciBmaWVsZCdzIHZhbHVlIG9uY2UgaXQgaXMgY2hhbmdlZC5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0VGltZVBpY2tlckZpZWxkVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbGFuZ3VhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcmVjYXB0Y2hhLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuY29udGFpbmVyXCJcclxuICAgICBbaGlkZGVuXT1cImlzRmllbGRIaWRkZW4oKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1odG1sMmNhbnZhcy1pZ25vcmVdPVwiZmllbGQuaHRtbDJDYW52YXNJZ25vcmVcIj5cclxuXHJcbiAgPCEtLSBsYWJlbCAtLT5cclxuICA8bGFiZWwgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMubGFiZWxcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dC0tPlxyXG4gIDxyZS1jYXB0Y2hhICNyZWNhcHRjaGFcclxuICAgICAgICAgICAgICBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgW3NpdGVLZXldPVwiZmllbGQuc2l0ZUtleVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICBbdGhlbWVdPVwiZmllbGQudGhlbWVcIlxyXG4gICAgICAgICAgICAgIFtzaXplXT1cImZpZWxkLnNpemVcIlxyXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAocmVzb2x2ZWQpPVwidmFsaWRhdGUoJGV2ZW50KTtcIj5cclxuICA8L3JlLWNhcHRjaGE+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSByZWNhcHRjaGEgZWxlbWVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ3JlY2FwdGNoYScpIHJlY2FwdGNoYUVsZW1lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRoZSBmaWVsZCBpcyB2YWxpZC4qL1xyXG4gIHByaXZhdGUgaXNWYWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybSBjb250cm9sIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHVibGljIHZhbGlkYXRlKGV2ZW50QXJndW1lbnRzPzogYW55LCBpc1N1Ym1pdD86IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLnByZVZhbGlkYXRlKGlzU3VibWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIWlzU3VibWl0KSB7XHJcbiAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBldmVudEFyZ3VtZW50cyAhPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRUZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2V0cyB0aGUgY2FwdGNoYSBsYW5ndWFnZS4qL1xyXG4gIHB1YmxpYyBzZXRDYXB0Y2hhTGFuZ3VnZSgpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICBpZiAodGhpcy5yZWNhcHRjaGFFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNhcHRjaGFJRnJhbWUgPSB0aGlzLnJlY2FwdGNoYUVsZW1lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG5cclxuICAgICAgaWYgKGNhcHRjaGFJRnJhbWUpIHtcclxuICAgICAgICBjb25zdCBzcmMgPSBjYXB0Y2hhSUZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XHJcblxyXG4gICAgICAgIGNhcHRjaGFJRnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMucmVwbGFjZSgvaGw9KC4qPykmLywgJ2hsPScgKyBsYW5ndWFnZSArICcmJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXJhdGluZy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZD8uY3NzQ2xhc3Nlcz8ubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dCAmIGRpc3BsYXkgLS0+XHJcbiAgPHAtcmF0aW5nIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgIFtyZWFkb25seV09XCJmaWVsZC5yZWFkb25seVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtzdGFyc109XCJmaWVsZC5zdGFyTnVtYmVyXCJcclxuICAgICAgICAgICAgW2ljb25DYW5jZWxDbGFzc109XCJmaWVsZC5pY29uQ2FuY2VsQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9uQ2xhc3NdPVwiZmllbGQuaWNvbk9uQ2xhc3NcIlxyXG4gICAgICAgICAgICBbaWNvbk9mZkNsYXNzXT1cImZpZWxkLmljb25PZmZDbGFzc1wiXHJcbiAgICAgICAgICAgIFtjYW5jZWxdPVwiZmllbGQuY2FuY2VsSWNvbiAmJiAhZmllbGQucmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAob25SYXRlKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uUmF0ZScsICRldmVudCwgZmllbGQpO3ZhbGlkYXRlKCk7XCJcclxuICAgICAgICAgICAgKG9uQ2FuY2VsKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ29uQ2FuY2VsJywgJGV2ZW50LCBmaWVsZCk7dmFsaWRhdGUoKTtcIj5cclxuICA8L3AtcmF0aW5nPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgIHRoaXMuZmllbGQucmVhZG9ubHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MpIHtcclxuICAgICAgdGhpcy5maWVsZC5pY29uQ2FuY2VsQ2xhc3MgPSAncGkgcGktIGJhbic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PbkNsYXNzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuaWNvbk9uQ2xhc3MgPSAncGkgcGktc3Rhcic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmZpZWxkLmljb25PZmZDbGFzcykge1xyXG4gICAgICB0aGlzLmZpZWxkLmljb25PZmZDbGFzcyA9ICdwaSBwaS1zdGFyLW8nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGVzLCBTd2FsVHlwZXMsIEZvcm1Nb2RlcywgUG9zdE1vZGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL211bHRpLXNlbGVjdC1maWVsZC9tdWx0aS1zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpcHNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9lZGl0b3ItZmllbGQvZWRpdG9yLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc2tGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2xvY2F0aW9uLWZpZWxkL2xvY2F0aW9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9maWxlLXVwbG9hZC1maWVsZC9maWxlLXVwbG9hZC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYXRpbmctZmllbGQvcmF0aW5nLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgUmVzcG9uc2VFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2UtZXZlbnQtYXJncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1keW5hbWljLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyXHJcbiAgICAgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8Zm9ybSBjbGFzcz1cImR5bmFtaWMtZm9ybS1mb3JtXCJcclxuICAgICAgICAjZj1cIm5nRm9ybVwiXHJcbiAgICAgICAgKG5nU3VibWl0KT1cInN1Ym1pdEZvcm0oZilcIlxyXG4gICAgICAgIFtoaWRkZW5dPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImR5bmFtaWMtZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMgc2VjdGlvbnMtdG9wXCJcclxuICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTG9jYXRpb24gPT0gJ1RvcCcgfHwgY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90aCdcIj5cclxuICAgICAgICA8IS0tIHNlY3Rpb24gdGFicyAtLT5cclxuICAgICAgICA8bnR3LXRhYnMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnVGFicydcIj48L250dy10YWJzLXNlY3Rpb24+XHJcblxyXG4gICAgICAgIDwhLS0gbmV4dCBwcmV2aW91cyAtLT5cclxuICAgICAgICA8bnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnTmV4dFByZXZpb3VzJ1wiPjwvbnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gZm9ybSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMud3JhcHBlclwiXHJcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY29uZmlndXJhdGlvbj8ubWVyZ2VkRmllbGRzXCI+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbmZvIC0tPlxyXG4gICAgICAgICAgPG50dy1pbmZvLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbmZvJ1wiPlxyXG4gICAgICAgICAgPC9udHctaW5mby1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRleHQgb3IgbnVtYmVyIG9yIHBhc3N3b3JkIC0tPlxyXG4gICAgICAgICAgPG50dy1pbnB1dC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihmaWVsZC5maWVsZFR5cGU9PSd0ZXh0JyB8fCBmaWVsZC5maWVsZFR5cGU9PSdudW1iZXInIHx8IGZpZWxkLmZpZWxkVHlwZT09J3Bhc3N3b3JkJylcIj5cclxuICAgICAgICAgIDwvbnR3LWlucHV0LWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gZHJvcGRvd24gbGlzdCAtLT5cclxuICAgICAgICAgIDxudHctc2VsZWN0LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGRhdGV0aW1lIHBpY2tlciAtLT5cclxuICAgICAgICAgIDxudHctZGF0ZXRpbWUtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdkYXRldGltZSdcIj5cclxuICAgICAgICAgIDwvbnR3LWRhdGV0aW1lLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gaGlqcmkgZGF0ZXRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy1kYXRldGltZS1oaWpyaS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2RhdGV0aW1laGlqcmknXCI+XHJcbiAgICAgICAgICA8L250dy1kYXRldGltZS1oaWpyaS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy10aW1lLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSd0aW1lJ1wiPlxyXG4gICAgICAgICAgPC9udHctdGltZS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoZWNrYm94IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LWNoZWNrYm94LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nY2hlY2tib3gnXCI+XHJcbiAgICAgICAgICA8L250dy1jaGVja2JveC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHJhZGlvYnV0dG9uIGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhZGlvYnV0dG9uLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ncmFkaW9idXR0b24nXCI+XHJcbiAgICAgICAgICA8L250dy1yYWRpb2J1dHRvbi1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIG11bHRpU2VsZWN0IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LW11bHRpLXNlbGVjdC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtdWx0aXNlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LW11bHRpLXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoaXBzIC0tPlxyXG4gICAgICAgICAgPG50dy1jaGlwcy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2NoaXBzJ1wiPlxyXG4gICAgICAgICAgPC9udHctY2hpcHMtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBlZGl0b3IgLS0+XHJcbiAgICAgICAgICA8bnR3LWVkaXRvci1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdlZGl0b3InXCI+XHJcbiAgICAgICAgICA8L250dy1lZGl0b3ItZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBtYXNrIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXNrLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXNrJ1wiPlxyXG4gICAgICAgICAgPC9udHctbWFzay1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGxvY2F0aW9uIC0tPlxyXG4gICAgICAgICAgPG50dy1sb2NhdGlvbi1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2xvY2F0aW9uJ1wiPlxyXG4gICAgICAgICAgPC9udHctbG9jYXRpb24tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBmaWxlIHVwbG9hZCAtLT5cclxuICAgICAgICAgIDxudHctZmlsZS11cGxvYWQtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdmaWxldXBsb2FkJ1wiPlxyXG4gICAgICAgICAgPC9udHctZmlsZS11cGxvYWQtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBSYXRpbmcgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhdGluZy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyYXRpbmcnXCI+XHJcbiAgICAgICAgICA8L250dy1yYXRpbmctZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSByZWNhcHRjaGEgLS0+XHJcbiAgICAgICAgICA8bnR3LXJlY2FwdGNoYS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyZWNhcHRjaGEnXCI+XHJcbiAgICAgICAgICA8L250dy1yZWNhcHRjaGEtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbWFnZSBjcm9wcGVyIC0tPlxyXG4gICAgICAgICAgPG50dy1pbWFnZS1jcm9wcGVyLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbWFnZWNyb3BwZXInXCI+XHJcbiAgICAgICAgICA8L250dy1pbWFnZS1jcm9wcGVyLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gbWFzdGVyZGV0YWlsIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXN0ZXItZGV0YWlsLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXN0ZXJkZXRhaWwnXCI+XHJcbiAgICAgICAgICA8L250dy1tYXN0ZXItZGV0YWlsLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG5cclxuICAgICAgPCEtLSB2YWxpZGF0aW9uIHN1bW1hcnkgLS0+XHJcbiAgICAgIDxudHctdmFsaWRhdGlvbi1zdW1tYXJ5PjwvbnR3LXZhbGlkYXRpb24tc3VtbWFyeT5cclxuXHJcbiAgICAgIDwhLS0gYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8uY3NzQ2xhc3NcIlxyXG4gICAgICAgICAgIGRhdGEtaHRtbDJjYW52YXMtaWdub3JlPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbi1idXR0b25zXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uY2xlYXIpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5jc3NDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZvcm0oZilcIj5cclxuICAgICAgICAgICAge3tjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVGb3JtKGYpXCI+XHJcbiAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdClcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py5jc3NDbGFzc1wiPlxyXG4gICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZGl0aW9uYWwtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/LmFkZGl0aW9uYWxCdXR0b25zXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImJ1dHRvbj8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJidXR0b24/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYnV0dG9uPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oYnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJidXR0b24/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ2NsaWNrJywgJGV2ZW50LCBidXR0b24pO1wiPlxyXG4gICAgICAgICAgICB7e2J1dHRvbj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9ucyBzZWN0aW9ucy1ib3R0b21cIlxyXG4gICAgICAgICAgICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90dG9tJyB8fCBjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbkxvY2F0aW9uID09ICdCb3RoJ1wiPlxyXG4gICAgICAgIDwhLS0gc2VjdGlvbiB0YWJzIC0tPlxyXG4gICAgICAgIDxudHctdGFicy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdUYWJzJ1wiPjwvbnR3LXRhYnMtc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPCEtLSBuZXh0IHByZXZpb3VzIC0tPlxyXG4gICAgICAgIDxudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdOZXh0UHJldmlvdXMnXCI+PC9udHctbmV4dC1wcmV2aW91cy1zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcblxyXG4gIDxudHctcHJvZ3Jlc3MtaW5kaWNhdG9yICpuZ0lmPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3Bpbm5lclNvdXJjZVVybF09XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc3Bpbm5lclNvdXJjZVVybFwiPjwvbnR3LXByb2dyZXNzLWluZGljYXRvcj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5mb3JtQnV0dG9uc3ttYXJnaW46MjBweCAwfWJvZHkuYXIgLm1haW4tYnV0dG9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH1ib2R5LmVuIC5tYWluLWJ1dHRvbnMgYnV0dG9ue21hcmdpbi1yaWdodDoxMHB4fWJvZHkuYXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9Ym9keS5lbntkaXJlY3Rpb246bHRyIWltcG9ydGFudDt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS51aS1kcm9wZG93bixpbnB1dC5mb3JtLWlucHV0LGlucHV0LnVpLWlucHV0dGV4dC51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdCxwLWRyb3Bkb3due3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDozNXB4fS5pbnB1dC1jb250YWluZXJ7bWFyZ2luLXRvcDoyNHB4fWxhYmVsLmZvcm0tbGFiZWx7Zm9udC13ZWlnaHQ6NzAwfXNwYW4ucmVxdWlyZWQtYXN0ZXJpc2t7Y29sb3I6cmVkfXAuZXJyb3IscC52YWxpZGF0aW9uLWVycm9ye2Rpc3BsYXk6YmxvY2s7Y29sb3I6cmVkfS5yZXN1bHQgaW1ne3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0uZm9ybS1kaXNwbGF5e2Rpc3BsYXk6YmxvY2t9dy1jbG9jayAqe2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fWBdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGUsIEJyaWRnZVNlcnZpY2UsIFV0aWxpdGllc1NlcnZpY2VdLFxyXG4gIC8vIHByb3ZpZGUgdGhlIGJyaWRnZSBzZXJ2aWNlIGhlcmUgaW4gb3JkZXIgdG8gaGF2ZSBhIGRpZmZlcmVudCBpbnN0YW5jZSBwZXIgZm9ybSBpbnN0YW5jZS5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY29uZmlndXJhdGlvbiBzb3VyY2UgdXJsLiovXHJcbiAgQElucHV0KCdjb25maWd1cmF0aW9uU291cmNlVXJsJykgY29uZmlndXJhdGlvblNvdXJjZVVybDogc3RyaW5nO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBwYXJlbnQgY29tcG9uZW50LiovXHJcbiAgQElucHV0KCdwYXJlbnRDb21wb25lbnQnKSBwYXJlbnRDb21wb25lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLiovXHJcbiAgQElucHV0KCdhZGRpdGlvbmFsUGFyYW1ldGVycycpIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uRm9ybUNsZWFyZWQgZXZlbnQuIFRyaWdnZXJlZCB3aGVuIHRoZSBmb3JtIGlzIGNsZWFyZWQuKi9cclxuICBAT3V0cHV0KCkgZm9ybUNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25Gb3JtRGF0YUJvdW5kIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgZm9ybSBpcyBkYXRhIGJvdW5kLiovXHJcbiAgQE91dHB1dCgpIGZvcm1EYXRhQm91bmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25CZWZvcmVGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc2F2ZWQuKi9cclxuICBAT3V0cHV0KCkgYmVmb3JlRm9ybVNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uQWZ0ZXJGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzYXZlZC4qL1xyXG4gIEBPdXRwdXQoKSBhZnRlckZvcm1TYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBvbkJlZm9yZUZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc3VibWl0dGVkLiovXHJcbiAgQE91dHB1dCgpIGJlZm9yZUZvcm1TdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25BZnRlckZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQuKi9cclxuICBAT3V0cHV0KCkgYWZ0ZXJGb3JtU3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZChWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCkgdmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQ6IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGlucHV0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKElucHV0RmllbGRDb21wb25lbnQpIGlucHV0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8SW5wdXRGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2Ygc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFNlbGVjdEZpZWxkQ29tcG9uZW50KSBzZWxlY3RGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZGF0ZXRpbWUgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRGF0ZXRpbWVGaWVsZENvbXBvbmVudCkgZGF0ZXRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBkYXRldGltZSBoaWpyaSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQpIGRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGNoZWNrYm94IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKENoZWNrYm94RmllbGRDb21wb25lbnQpIGNoZWNrYm94RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8Q2hlY2tib3hGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmFkaW8gYnV0dG9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQpIHJhZGlvYnV0dG9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8UmFkaW9idXR0b25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgbXVsdGkgc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQpIG11bHRpU2VsZWN0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgY2hpcHMgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ2hpcHNGaWVsZENvbXBvbmVudCkgY2hpcHNGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxDaGlwc0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBlZGl0b3IgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRWRpdG9yRmllbGRDb21wb25lbnQpIGVkaXRvckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVkaXRvckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBtYXNrIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE1hc2tGaWVsZENvbXBvbmVudCkgbWFza0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PE1hc2tGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgdGltZSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihUaW1lRmllbGRDb21wb25lbnQpIHRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUaW1lRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGxvY2F0aW9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKExvY2F0aW9uRmllbGRDb21wb25lbnQpIGxvY2F0aW9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TG9jYXRpb25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZmlsZSB1cGxvYWQgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50KSBmaWxlVXBsb2FkRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQpIGltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmVjYXB0Y2hhRmllbGRDb21wb25lbnQpIHJlY2FwdGNoYUZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmF0aW5nRmllbGRDb21wb25lbnQpIHJhdGluZ0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJhdGluZ0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBhbGwgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIHB1YmxpYyBmaWVsZENvbXBvbmVudHM6IEFycmF5PEZpZWxkQ29tcG9uZW50PiA9IG5ldyBBcnJheTxGaWVsZENvbXBvbmVudD4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbWFpbiBjb25maWd1cmF0aW9uIG9iamVjdC4qL1xyXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHNob3cgdGhlIHByb2dyZXNzIGluZGljYXRvci4qL1xyXG4gIHB1YmxpYyBzaG93UHJvZ3Jlc3NJbmRpY2F0b3I6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwUmVxdWVzdHNTZXJ2aWNlOiBIdHRwUmVxdWVzdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnM7XHJcblxyXG4gICAgdGhpcy5iaW5kRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgY2xlYXJGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5jbGVhclZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICB0aGlzLmZvcm1DbGVhcmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgc2F2ZUZvcm0oZm9ybTogTmdGb3JtKSB7XHJcbiAgICAvLyB0cmlnZ2VyIHJlY2FwdGNoYSB2YWxpZGF0aW9uIGlmIGV4aXN0cy5cclxuICAgIGZvciAoY29uc3QgcmVjYXB0Y2hhRmllbGRDb21wb25lbnRzIG9mIHRoaXMucmVjYXB0Y2hhRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICByZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudmFsaWRhdGUobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFJlcXVlc3RCb2R5KCk7XHJcblxyXG4gICAgICB0aGlzLmJlZm9yZUZvcm1TYXZlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnNhdmUsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5wb3N0KGVuZHBvaW50LCB2YWx1ZXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVNhdmVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZVN1Y2Nlc3NNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVTdWNjZXNzTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuU3VjY2VzcyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGV4Y2VwdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignc2F2ZUZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU2F2ZWQuZW1pdChuZXcgUmVzcG9uc2VFdmVudEFyZ3MoZmFsc2UsIGV4Y2VwdGlvbiwgdmFsdWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZUVycm9yTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU3VibWl0cyB0aGUgZm9ybS5cclxuICAqIEBwYXJhbSBOZ0Zvcm0gZm9ybSBUaGUgZm9ybS5cclxuICAqL1xyXG4gIHB1YmxpYyBzdWJtaXRGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0UmVxdWVzdEJvZHkoKTtcclxuXHJcbiAgICAgIHRoaXMuYmVmb3JlRm9ybVN1Ym1pdHRlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnN1Ym1pdCxcclxuICAgICAgICB0aGlzLnJvdXRlLFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVyc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5odHRwUmVxdWVzdHNTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIHZhbHVlcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLlN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N1Ym1pdEZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKGZhbHNlLCBleGNlcHRpb24sIHZhbHVlcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2hvd1Jlc3VsdE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zdWJtaXRFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0RXJyb3JNZXNzYWdlRGV0YWlscyksXHJcbiAgICAgICAgICAgIHR5cGU6IFN3YWxUeXBlcy5FcnJvcixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudC5zaG93U3VtbWFyeUFsZXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVGb3JtRmllbGRDb21wb25lbnQoZmllbGRDb21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgKi9cclxuICBwdWJsaWMgaXNGb3JtVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzIHx8IHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVxdWVzdCBib2R5LlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgcmVxdWVzdCBib2R5LlxyXG4gICovXHJcbiAgcHVibGljIGdldFJlcXVlc3RCb2R5KCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnBvc3RNb2RlID09PSBQb3N0TW9kZXMuRm9ybURhdGEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybURhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEZvcm1WYWx1ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZm9ybSBmaWVsZCB2YWx1ZXMuXHJcbiAgICogQHJldHVybiBhbnkgc291cmNlIFRoZSBmb3JtIHZhbHVlcy5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRGb3JtVmFsdWVzKCk6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChmaWVsZENvbXBvbmVudC5maWVsZC5kYXRhKSB7XHJcbiAgICAgICAgdmFsdWVzW2ZpZWxkQ29tcG9uZW50LmZpZWxkLm5hbWVdID0gZmllbGRDb21wb25lbnQuZ2V0VmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZvcm0gZmllbGQgdmFsdWVzLlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGdldEZvcm1EYXRhKCk6IEZvcm1EYXRhIHtcclxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBkYXRhID0gZmllbGRDb21wb25lbnQuYXBwZW5kRm9ybURhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlIGJ5IGl0cyBuYW1lLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZS5cclxuICAgKiBAcmV0dXJuIEZpZWxkQ29tcG9uZW50IFRoZSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlLlxyXG4gICovXHJcbiAgcHVibGljIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBGaWVsZENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZENvbXBvbmVudHMuZmluZChmYyA9PiBmYy5maWVsZC5uYW1lID09PSBuYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG91bGQgYmUgaGlkZGVuLlxyXG4gICAqIEBwYXJhbSBhbnkgYnV0dG9uIFRoZSBidXR0b24uXHJcbiAgICogQHJldHVybiBGaWVsZENvbXBvbmVudCBXaGV0aGVyIHRoZSBidXR0b24gc2hvdWxkIGJlIGhpZGRlbi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc0J1dHRvbkhpZGRlbihidXR0b246IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChidXR0b24gJiYgYnV0dG9uLmhpZGRlbikgfHwgKHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiAmJlxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24uaGlkZUJ1dHRvbnMgJiZcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmhpZGVCdXR0b25zLmluZGV4T2YoYnV0dG9uLm5hbWUpID4gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gYW55IGZvcm1EYXRhIFRoZSBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0Rm9ybURhdGEoZm9ybURhdGEpIHtcclxuICAgIGZvciAoY29uc3QgcmVzcG9uc2VGaWVsZCBvZiBmb3JtRGF0YS5maWVsZHMpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlRmllbGQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHJlc3BvbnNlRmllbGQubmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgZmllbGRDb21wb25lbnQudXBkYXRlVmFsdWUocmVzcG9uc2VGaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwcml2YXRlIGFzeW5jIGJpbmRGb3JtKCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICAgIC8vIHdvcmthcm91bmQgZm9yIGRhdGV0aW1lIGZpZWxkcy5cclxuICAgIGNvbnN0IGRhdGVGaWVsZHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLmZpbHRlcihmID0+IGYuZmllbGRUeXBlID09PSBGaWVsZFR5cGVzLkRhdGVUaW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGRhdGVGaWVsZHMpIHtcclxuICAgICAgdGhpcy5oYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5maWVsZENvbXBvbmVudHMgPSB0aGlzLmZpZWxkQ29tcG9uZW50cy5jb25jYXQoXHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnNlbGVjdEZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoZWNrYm94RmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5yYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoaXBzRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5lZGl0b3JGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLm1hc2tGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5maWxlVXBsb2FkRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5pbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnJlY2FwdGNoYUZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMucmF0aW5nRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5hY3RpdmF0ZVNlYXJjaElucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmZvcm1Nb2RlID09PSBGb3JtTW9kZXMuRGlzcGxheSkge1xyXG4gICAgICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5yZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudG9BcnJheSgpKSB7XHJcbiAgICAgICAgZmllbGRDb21wb25lbnQuc2V0Q2FwdGNoYUxhbmd1Z2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBjb25maWd1cmF0aW9uIGFzIGEgZ2V0IHJlcXVlc3Qgb3IgZnJvbSBsb2NhbCBzdG9yYWdlLiovXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlndXJhdGlvbigpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGF3YWl0IHRoaXMudXRpbGl0aWVzU2VydmljZS5sb2FkRmlsZSh0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2VVcmwpO1xyXG5cclxuICAgIC8vIGlmIGl0IGlzIGluIGxvY2FsLCByZWFkIHRoZSBhbHJlYWR5IG1lcmdlZCBmaWVsZHMuIG90aGVyd2lzZSwgbWVyZ2UgaXQgYW5kIHNhdmUgaW4gbG9jYWwgc3RvcmFnZS5cclxuICAgIGlmICghdGhpcy5jb25maWd1cmF0aW9uLmlzTG9jYWwpIHtcclxuICAgICAgLy8gbWVyZ2UgdGhlIGZvcm0ganNvbiBzY2hlbWEgZnJvbSB0aGUgZGlmZmVyZW50IHNvdXJjZSBwaWVjZXMuXHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc291cmNlRm9ybVNjaGVtYXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnNvdXJjZUZvcm1TY2hlbWFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc291cmNlRm9ybVNjaGVtYVVybCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zb3VyY2VGb3JtU2NoZW1hc1tpXTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGb3JtU2NoZW1hID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHNvdXJjZUZvcm1TY2hlbWFVcmwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5tZXJnZVJlY3Vyc2l2ZShzb3VyY2VGb3JtU2NoZW1hLCB0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWxsRmllbGRzID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UpO1xyXG5cclxuICAgICAgaWYgKCFhbGxGaWVsZHMuaXNMb2NhbCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UsIGFsbEZpZWxkcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMgPSBuZXcgQXJyYXk8RmllbGQ+KCk7XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgZmllbGQgcHJvcGVydGllcyB3aXRoIHRoZSBhbGwgZmllbGRzIGxpc3QuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmZpZWxkcy5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGaWVsZCA9IGFsbEZpZWxkcy5maWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcclxuXHJcbiAgICAgICAgICBpZiAoc291cmNlRmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkRmllbGQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UubWVyZ2VSZWN1cnNpdmUoc291cmNlRmllbGQsIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHNbZmllbGROYW1lXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLnB1c2gobWVyZ2VkRmllbGQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgZmllbGQgJHtmaWVsZE5hbWV9IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFsbC1maWVsZHMtbGlzdC5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvblNvdXJjZVVybCwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNlY3Rpb25zICYmIHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9uc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBhbGwgZmllbGRzJyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGZpZWxkQ29tcG9uZW50LmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGEgZGF0ZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuXHJcbiAgICogSXQgaXMgYnVnZ3kgaWYgZG9uZSBmcm9tIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbG9hZGVkLlxyXG4gICAqIEBwYXJhbSBGaWVsZCBmaWVsZCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZDogRmllbGQpIHtcclxuICAgIC8vIGluIGNhc2Ugb2YgZGF0ZXRpbWUgZmllbGQsIHBhcnNlIHRoZSB2YWx1ZXMgZnJvbSBzdHJpbmcgdG8gZGF0ZSBhbmQgZXhlY3V0ZSBhbnkgZnVuY3Rpb25zLlxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGUpIHtcclxuICAgICAgZmllbGQubWluRGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQubWluRGF0ZSwgbmV3IERhdGUoZmllbGQubWluRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5tYXhEYXRlKSB7XHJcbiAgICAgIGZpZWxkLm1heERhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLm1heERhdGUsIG5ldyBEYXRlKGZpZWxkLm1heERhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuZGF0YS5kYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLmRhdGEuZGF0ZVZhbHVlLCBuZXcgRGF0ZShmaWVsZC5kYXRhLmRhdGVWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5kZWZhdWx0RGF0ZSkge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0RGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQuZGVmYXVsdERhdGUsIG5ldyBEYXRlKGZpZWxkLmRlZmF1bHREYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGVWYWx1ZSAmJiBmaWVsZC5tYXhEYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQueWVhclJhbmdlID0gZmllbGQubWluRGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCkgKyAnOicgKyBmaWVsZC5tYXhEYXRlVmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZvcm0gZGF0YS4qL1xyXG4gIHByaXZhdGUgYmluZEZvcm1EYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5lbmRwb2ludHMuZ2V0KSB7XHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5nZXQsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoZW5kcG9pbnQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGb3JtRGF0YShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybURhdGFCb3VuZC5lbWl0KHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuICAgICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiaW5kRm9ybURhdGE6ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLmdldEVycm9yTWVzc2FnZVRpdGxlKSxcclxuICAgICAgICAgICAgaHRtbDogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5nZXRFcnJvck1lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLkVycm9yLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhQm91bmQuZW1pdChudWxsKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGZvcm0gZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBGaWVsZENvbXBvbmVudCBmaWVsZENvbXBvbmVudCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlRm9ybUZpZWxkQ29tcG9uZW50KGZpZWxkQ29tcG9uZW50OiBGaWVsZENvbXBvbmVudCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGxldCBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkQ29tcG9uZW50LmZpZWxkLmhpZGRlbikge1xyXG4gICAgICBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBmaWVsZENvbXBvbmVudC52YWxpZGF0ZShudWxsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIGR5bmFtaWMgZXZlbnQgaW4gY2FzZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZXZlbnRUeXBlIFRoZSB0eXBlIG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICAqIEBwYXJhbSBhbnkgc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHRyaWdnZXJEeW5hbWljRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50QXJndW1lbnRzOiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAoc291cmNlLmV2ZW50VHJpZ2dlcnMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBzb3VyY2UuZXZlbnRUcmlnZ2Vyc1tldmVudFR5cGVdO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24gPSB0aGlzLnBhcmVudENvbXBvbmVudFtldmVudF07XHJcblxyXG4gICAgICBpZiAocGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgICAgICBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbih0aGlzLnBhcmVudENvbXBvbmVudCwgc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmllbGQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPG1hdC1kaWFsb2ctYWN0aW9ucz5cclxuICAgIDxidXR0b24gbWF0LWRpYWxvZy1jbG9zZSBtYXQtYnV0dG9uPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMtY2lyY2xlXCJcclxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICA8L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XHJcblxyXG48bWF0LWRpYWxvZy1jb250ZW50PlxyXG4gICAgPG50dy1keW5hbWljLWZvcm0gI2RldGFpbHNGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50Q29tcG9uZW50XT1cInRoaXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ3VyYXRpb25Tb3VyY2VVcmxdPVwiZmllbGQuZGV0YWlscy5jb25maWd1cmF0aW9uU291cmNlVXJsXCI+XHJcbiAgICA8L250dy1keW5hbWljLWZvcm0+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJlZmVyZW5jZSB0byB0aGUgZGV0YWlscyBkeW5hbWljIGZvcm0gY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZCgnZGV0YWlsc0Zvcm0nKSBkZXRhaWxzRm9ybUNvbXBvbmVudDogRHluYW1pY0Zvcm1Db21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50PixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKVxyXG4gICAgcHVibGljIGZpZWxkOiBGaWVsZFxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhIGNoaWxkIGFuZCBjbG9zZXMgdGhlIGRpYWxvZy5cclxuICAgKiBAcGFyYW0gRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQgY3VycmVudCBUaGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgZGVmYXVsdCBtYXN0ZXIgZGV0YWlsIGZvcm0gY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBhbnkgdHJpZ2dlcmluZ0ZpZWxkIFRoZSBmaWVsZCB0cmlnZ2VyaW5nIHRoZSBhY3Rpb24uXHJcbiAgKi9cclxuICBhZGRDaGlsZChjdXJyZW50OiBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCwgdHJpZ2dlcmluZ0ZpZWxkOiBhbnkpIHtcclxuICAgIC8vY3VycmVudC5kZXRhaWxzRm9ybUNvbXBvbmVudC52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICAvL2lmIChjdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICBjb25zdCB2YWx1ZXMgPSBjdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LmdldEZvcm1WYWx1ZXMoKTtcclxuXHJcbiAgICAvLyAgY3VycmVudC5kaWFsb2dSZWYuY2xvc2UodmFsdWVzKTtcclxuICAgIC8vfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Zvcm0tcGFydC10ZW1wbGF0ZXMvZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0vZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbWFzdGVyLWRldGFpbC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8ZGl2PlxyXG4gICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgICAoY2xpY2spPVwib3BlbkRpYWxvZygpO1wiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuXHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcclxuICApIHtcclxuICAgIHN1cGVyKGJyaWRnZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBPcGVucyB0aGUgZGV0YWlscyBkaWFsb2cuKi9cclxuICBvcGVuRGlhbG9nKCkge1xyXG4gICAgY29uc3QgZGV0YWlsc0RpYWxvZyA9IHRoaXMuZGlhbG9nLm9wZW4oRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsIHtcclxuICAgICAgZGF0YTogdGhpcy5maWVsZFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGV0YWlsc0RpYWxvZy5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuZXh0LXByZXYtY29udGFpbmVyXCI+XHJcbiAgPGEgY2xhc3M9XCJhcnJvdy1wcmV2XCJcclxuICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAoY2xpY2spPVwiaW5jcmVtZW50U2VjdGlvbigtMSlcIlxyXG4gICAgIHRpdGxlPVwie3snYnV0dG9ucy5QcmV2aW91cycgfCB0cmFuc2xhdGV9fVwiPlxyXG4gIDwvYT5cclxuICA8c3BhbiBjbGFzcz1cIm5leHQtcHJldi1oZWFkZXJcIj57e2JyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbj8uY3VycmVudFNlY3Rpb24/LmxlZ2VuZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gIDxhIGNsYXNzPVwiYXJyb3ctbmV4dFwiXHJcbiAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXHJcbiAgICAgKGNsaWNrKT1cImluY3JlbWVudFNlY3Rpb24oMSlcIlxyXG4gICAgIHRpdGxlPVwie3snYnV0dG9ucy5OZXh0JyB8IHRyYW5zbGF0ZX19XCI+XHJcbiAgPC9hPlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgLm5leHQtcHJldi1jb250YWluZXIgYXt0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnR9Lm5leHQtcHJldi1jb250YWluZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9Lm5leHQtcHJldi1oZWFkZXJ7Zm9udC1zaXplOjJlbTtmb250LXdlaWdodDo3MDB9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1wcmV2OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDRcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0OmJlZm9yZXtjb250ZW50OlwiXFxcXGYxMDVcIjtmb250OjNlbS8xIEZvbnRBd2Vzb21lO2NvbG9yOiM1NTU1NjV9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS5hcnJvdy1uZXh0e2Zsb2F0OnJpZ2h0fWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldntmbG9hdDpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldjpiZWZvcmV7Y29udGVudDpcIlxcXFxmMTA1XCI7Zm9udDozZW0vMSBGb250QXdlc29tZTtjb2xvcjojNTU1NTY1fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctbmV4dDpiZWZvcmV7Y29udGVudDpcIlxcXFxmMTA0XCI7Zm9udDozZW0vMSBGb250QXdlc29tZTtjb2xvcjojNTU1NTY1fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctbmV4dHtmbG9hdDpsZWZ0fWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEuYXJyb3ctcHJldntmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ3ljbGVzIHRocm91Z2ggdGhlIHNlY3Rpb25zLlxyXG4gICAqIEBwYXJhbSBudW1iZXIgaW5jcmVtZW50IFRoZSBpbmNyZW1lbnQuXHJcbiAgKi9cclxuICBwdWJsaWMgaW5jcmVtZW50U2VjdGlvbihpbmNyZW1lbnQ6IG51bWJlcikge1xyXG4gICAgbGV0IG5ld1NlY3Rpb25JZCA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmlkICsgaW5jcmVtZW50O1xyXG5cclxuICAgIGlmIChuZXdTZWN0aW9uSWQgPT09IDApIHtcclxuICAgICAgbmV3U2VjdGlvbklkID0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmIChuZXdTZWN0aW9uSWQgPT09IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmxlbmd0aCArIDEpIHtcclxuICAgICAgbmV3U2VjdGlvbklkID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmZpbmQocyA9PiBzLmlkID09PSBuZXdTZWN0aW9uSWQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9zZWN0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LXRhYnMtc2VjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cclxuICA8bGkgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2YgYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2VjdGlvbnNcIlxyXG4gICAgICBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCJcclxuICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOnNlY3Rpb24uaWQ9PWJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LmN1cnJlbnRTZWN0aW9uPy5pZH1cIlxyXG4gICAgICAgKGNsaWNrKT1cInN3aXRjaFNlY3Rpb24oc2VjdGlvbilcIj5cclxuICAgICAgPHNwYW4+e3tzZWN0aW9uLmxlZ2VuZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JzLWNvdW50XCJcclxuICAgICAgICAgICAgKm5nSWY9XCJzZWN0aW9uLnZhbGlkYXRpb25FcnJvcnNDb3VudCA+IDBcIj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzU2VjdGlvbkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU3dpdGNoZXMgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAqIEBwYXJhbSBTZWN0aW9uIHNlY3Rpb24gVGhlIG5ldyBhY3RpdmUgc2VjdGlvbi5cclxuICAqL1xyXG4gIHB1YmxpYyBzd2l0Y2hTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24pIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctcHJvZ3Jlc3MtaW5kaWNhdG9yJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1pbmRpY2F0b3ItY29udGFpbmVyXCJcclxuICAgICAqbmdJZj1cInNwaW5uZXJTb3VyY2VVcmxcIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtaW5kaWNhdG9yXCI+XHJcbiAgICA8aW1nIFtzcmNdPVwic3Bpbm5lclNvdXJjZVVybFwiXHJcbiAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3MtaW5kaWNhdG9yLWltYWdlXCJcclxuICAgICAgICAgYWx0PVwicHJvZ3Jlc3NcIiAvPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBzcGlubmVyIHNvdXJjZSB1cmwuKi9cclxuICBASW5wdXQoJ3NwaW5uZXJTb3VyY2VVcmwnKSBzcGlubmVyU291cmNlVXJsOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhQ29tbW9uTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhL3JlY2FwdGNoYS9yZWNhcHRjaGEtY29tbW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IFJlY2FwdGNoYU1vZHVsZSB9IGZyb20gJ25nLXJlY2FwdGNoYS9yZWNhcHRjaGEvcmVjYXB0Y2hhLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhbGVuZGFyJztcclxuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NoZWNrYm94JztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3JhZGlvYnV0dG9uJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL211bHRpc2VsZWN0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IENoaXBzTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGlwcyc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZWRpdG9yJztcclxuaW1wb3J0IHsgSW5wdXRNYXNrTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dG1hc2snO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZzItaW1nLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBSYXRpbmdNb2R1bGUgfSBmcm9tICdwcmltZW5nL3JhdGluZyc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHtcclxuICBNYXREaWFsb2dNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZSxcclxuICBNYXRCdXR0b25Nb2R1bGUsIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJY29uTW9kdWxlLFxyXG4gIE1hdFNlbGVjdE1vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IFdNYXRUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LW1hdC10aW1lcGlja2VyL3ctbWF0LXRpbWVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV1RpbWVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS1kaWFsb2cvdy10aW1lLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXQ2xvY2tDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctY2xvY2svdy1jbG9jay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXVGltZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lL3ctdGltZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9ib3VuZGFibGUtZmllbGQvYm91bmRhYmxlLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2lucHV0LWZpZWxkL2lucHV0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWZpZWxkL2RhdGV0aW1lLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtaGlqcmktZmllbGQvZGF0ZXRpbWUtaGlqcmktZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmFkaW9idXR0b24tZmllbGQvcmFkaW9idXR0b24tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbXVsdGktc2VsZWN0LWZpZWxkL211bHRpLXNlbGVjdC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGlwc0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZWRpdG9yLWZpZWxkL2VkaXRvci1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXNrRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL21hc2stZmllbGQvbWFzay1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9sb2NhdGlvbi1maWVsZC9sb2NhdGlvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2ZpbGUtdXBsb2FkLWZpZWxkL2ZpbGUtdXBsb2FkLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZm9GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW5mby1maWVsZC9pbmZvLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc3RlckRldGFpbEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXN0ZXItZGV0YWlsLWZpZWxkL21hc3Rlci1kZXRhaWwtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2ltYWdlLWNyb3BwZXItZmllbGQvaW1hZ2UtY3JvcHBlci1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmF0aW5nLWZpZWxkL3JhdGluZy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgVGFic1NlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy90YWJzLXNlY3Rpb24vdGFicy1zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5leHRQcmV2aW91c1NlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9uZXh0LXByZXZpb3VzLXNlY3Rpb24vbmV4dC1wcmV2aW91cy1zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvdmFsaWRhdGlvbi1zdW1tYXJ5L3ZhbGlkYXRpb24tc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3Byb2dyZXNzLWluZGljYXRvci9wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS9kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV1RpbWVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBXQ2xvY2tDb21wb25lbnQsXHJcbiAgICBXVGltZUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQm91bmRhYmxlRmllbGRDb21wb25lbnQsXHJcbiAgICBJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hGaWVsZENvbXBvbmVudCxcclxuICAgIFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQsXHJcbiAgICBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hpcHNGaWVsZENvbXBvbmVudCxcclxuICAgIEVkaXRvckZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFza0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgTG9jYXRpb25GaWVsZENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCxcclxuICAgIFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5mb0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCxcclxuICAgIFJhdGluZ0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGFic1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBOZXh0UHJldmlvdXNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LFxyXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIElucHV0VGV4dE1vZHVsZSxcclxuICAgIENhbGVuZGFyTW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBSYWRpb0J1dHRvbk1vZHVsZSxcclxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGUsXHJcbiAgICBJbnB1dE1hc2tNb2R1bGUsXHJcbiAgICBDaGlwc01vZHVsZSxcclxuICAgIERyb3Bkb3duTW9kdWxlLFxyXG4gICAgTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXHJcbiAgICBSYXRpbmdNb2R1bGUsXHJcbiAgICBSZWNhcHRjaGFDb21tb25Nb2R1bGUsXHJcbiAgICBSZWNhcHRjaGFNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgbG9hZGVyOiB7XHJcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6IEh0dHBMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGFwaUtleTogJ0FJemFTeURrazRtQVkxcjVRLWFidXg1UE9Dc2NUUjBMb2pXTXdVbycsXHJcbiAgICAgIGxpYnJhcmllczogWydwbGFjZXMnXSxcclxuICAgICAgcmVnaW9uOiAnTEInLFxyXG4gICAgICBsYW5ndWFnZTogJ2VuJ1xyXG4gICAgfSlcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsXHJcbiAgICBXTWF0VGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdUaW1lRGlhbG9nQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBXTWF0VGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdUaW1lRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgV0Nsb2NrQ29tcG9uZW50LFxyXG4gICAgV1RpbWVDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudCxcclxuICAgIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCxcclxuICAgIERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCxcclxuICAgIENoZWNrYm94RmllbGRDb21wb25lbnQsXHJcbiAgICBSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCxcclxuICAgIENoaXBzRmllbGRDb21wb25lbnQsXHJcbiAgICBFZGl0b3JGaWVsZENvbXBvbmVudCxcclxuICAgIE1hc2tGaWVsZENvbXBvbmVudCxcclxuICAgIFRpbWVGaWVsZENvbXBvbmVudCxcclxuICAgIExvY2F0aW9uRmllbGRDb21wb25lbnQsXHJcbiAgICBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQsXHJcbiAgICBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCxcclxuICAgIEluZm9GaWVsZENvbXBvbmVudCxcclxuICAgIE1hc3RlckRldGFpbEZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQsXHJcbiAgICBSYXRpbmdGaWVsZENvbXBvbmVudCxcclxuICAgIFRhYnNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCxcclxuICAgIFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCxcclxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV0d2F5c0xpYk1vZHVsZSB7IH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIdHRwTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJYTFNYLnV0aWxzIiwiWExTWC53cml0ZUZpbGUiLCJGaWxlU2F2ZXIuc2F2ZUFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFlRSxpQkFBaUI7OztZQVhsQixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7Ozs7O0FDSmxDO0FBR0EsTUFBTSxXQUFXLEdBQUc7SUFDbEIsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BELE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU07UUFDakgsV0FBVyxFQUFFLFVBQVUsQ0FBQztDQUMzQixDQUFDO0FBR0YsaUJBQXlCLFNBQVEsaUJBQWlCOzs7Ozs7SUFLekMsbUJBQW1CLENBQUMsT0FBZTtRQUN4QyxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0lBT3BDLGlCQUFpQixDQUFDLEtBQWE7UUFDcEMsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU9oQyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGlCQUFp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