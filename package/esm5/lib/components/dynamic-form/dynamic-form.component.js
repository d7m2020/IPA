/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef, ViewChildren, QueryList, ViewEncapsulation, Optional } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from '../../services/http-requests.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { UtilitiesService } from '../../services/utilities.service';
import { LanguageService } from '../../services/language.service';
import { BridgeService } from '../../services/bridge.service';
import { FieldTypes, SwalTypes, FormModes, PostModes } from '../../models/enums';
import { ValidationSummaryComponent } from '../form-part-templates/validation-summary/validation-summary.component';
import { InputFieldComponent } from '../field-templates/input-field/input-field.component';
import { SelectFieldComponent } from '../field-templates/select-field/select-field.component';
import { DatetimeFieldComponent } from '../field-templates/datetime-field/datetime-field.component';
import { DatetimeHijriFieldComponent } from '../field-templates/datetime-hijri-field/datetime-hijri-field.component';
import { CheckboxFieldComponent } from '../field-templates/checkbox-field/checkbox-field.component';
import { RadiobuttonFieldComponent } from '../field-templates/radiobutton-field/radiobutton-field.component';
import { MultiSelectFieldComponent } from '../field-templates/multi-select-field/multi-select-field.component';
import { ChipsFieldComponent } from '../field-templates/chips-field/chips-field.component';
import { EditorFieldComponent } from '../field-templates/editor-field/editor-field.component';
import { MaskFieldComponent } from '../field-templates/mask-field/mask-field.component';
import { TimeFieldComponent } from '../field-templates/time-field/time-field.component';
import { LocationFieldComponent } from '../field-templates/location-field/location-field.component';
import { FileUploadFieldComponent } from '../field-templates/file-upload-field/file-upload-field.component';
import { ImageCropperFieldComponent } from '../field-templates/image-cropper-field/image-cropper-field.component';
import { RecaptchaFieldComponent } from '../field-templates/recaptcha-field/recaptcha-field.component';
import { RatingFieldComponent } from '../field-templates/rating-field/rating-field.component';
import { Configuration } from '../../models/configuration';
import swal from 'sweetalert2';
import { ResponseEventArgs } from '../../models/response-event-args';
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
            for (var _a = tslib_1.__values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = tslib_1.__values(this.recaptchaFieldComponents.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = tslib_1.__values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = tslib_1.__values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = tslib_1.__values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = tslib_1.__values(formData.fields), _b = _a.next(); !_b.done; _b = _a.next()) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var dateFields, dateFields_1, dateFields_1_1, field, _a, _b, fieldComponent, e_7, _c, e_8, _d;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.loadConfiguration()];
                    case 1:
                        _e.sent();
                        dateFields = this.configuration.mergedFields.filter(function (f) { return f.fieldType === FieldTypes.DateTime; });
                        try {
                            for (dateFields_1 = tslib_1.__values(dateFields), dateFields_1_1 = dateFields_1.next(); !dateFields_1_1.done; dateFields_1_1 = dateFields_1.next()) {
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
                            for (_a = tslib_1.__values(this.locationFieldComponents.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
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
                                for (var _a = tslib_1.__values(_this.recaptchaFieldComponents.toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, i, sourceFormSchemaUrl, sourceFormSchema, allFields, _loop_1, this_1, fieldName;
            return tslib_1.__generator(this, function (_b) {
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
            for (var _a = tslib_1.__values(this.fieldComponents), _b = _a.next(); !_b.done; _b = _a.next()) {
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
export { DynamicFormComponent };
if (false) {
    /**
     * \@property The configuration source url.
     * @type {?}
     */
    DynamicFormComponent.prototype.configurationSourceUrl;
    /**
     * \@property The parent component.
     * @type {?}
     */
    DynamicFormComponent.prototype.parentComponent;
    /**
     * \@property The additional parameters.
     * @type {?}
     */
    DynamicFormComponent.prototype.additionalParameters;
    /**
     * \@property The onFormCleared event. Triggered when the form is cleared.
     * @type {?}
     */
    DynamicFormComponent.prototype.formCleared;
    /**
     * \@property The onFormDataBound event. Triggered when the form is data bound.
     * @type {?}
     */
    DynamicFormComponent.prototype.formDataBound;
    /**
     * \@property The onBeforeFormSaved event. Triggered before the form is saved.
     * @type {?}
     */
    DynamicFormComponent.prototype.beforeFormSaved;
    /**
     * \@property The onAfterFormSaved event. Triggered after the form is saved.
     * @type {?}
     */
    DynamicFormComponent.prototype.afterFormSaved;
    /**
     * \@property The onBeforeFormSubmitted event. Triggered before the form is submitted.
     * @type {?}
     */
    DynamicFormComponent.prototype.beforeFormSubmitted;
    /**
     * \@property The onAfterFormSubmitted event. Triggered after the form is submitted.
     * @type {?}
     */
    DynamicFormComponent.prototype.afterFormSubmitted;
    /**
     * \@property The root container element.
     * @type {?}
     */
    DynamicFormComponent.prototype.containerElement;
    /**
     * \@property The validation summary component.
     * @type {?}
     */
    DynamicFormComponent.prototype.validationSummaryComponent;
    /**
     * \@property The list of input field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.inputFieldComponents;
    /**
     * \@property The list of select field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.selectFieldComponents;
    /**
     * \@property The list of datetime field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.datetimeFieldComponents;
    /**
     * \@property The list of datetime hijri field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.datetimeHijriFieldComponents;
    /**
     * \@property The list of checkbox field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.checkboxFieldComponents;
    /**
     * \@property The list of radio button field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.radiobuttonFieldComponents;
    /**
     * \@property The list of multi select field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.multiSelectFieldComponents;
    /**
     * \@property The list of chips field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.chipsFieldComponents;
    /**
     * \@property The list of editor field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.editorFieldComponents;
    /**
     * \@property The list of mask field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.maskFieldComponents;
    /**
     * \@property The list of time field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.timeFieldComponents;
    /**
     * \@property The list of location field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.locationFieldComponents;
    /**
     * \@property The list of file upload field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.fileUploadFieldComponents;
    /**
     * \@property The list of recaptcha field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.imageCropperFieldComponents;
    /**
     * \@property The list of recaptcha field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.recaptchaFieldComponents;
    /**
     * \@property The list of recaptcha field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.ratingFieldComponents;
    /**
     * \@property The list of all field components.
     * @type {?}
     */
    DynamicFormComponent.prototype.fieldComponents;
    /**
     * \@property The main configuration object.
     * @type {?}
     */
    DynamicFormComponent.prototype.configuration;
    /**
     * \@property Whether to show the progress indicator.
     * @type {?}
     */
    DynamicFormComponent.prototype.showProgressIndicator;
    /** @type {?} */
    DynamicFormComponent.prototype.bridgeService;
    /** @type {?} */
    DynamicFormComponent.prototype.httpRequestsService;
    /** @type {?} */
    DynamicFormComponent.prototype.localStorageService;
    /** @type {?} */
    DynamicFormComponent.prototype.utilitiesService;
    /** @type {?} */
    DynamicFormComponent.prototype.translateService;
    /** @type {?} */
    DynamicFormComponent.prototype.languageService;
    /** @type {?} */
    DynamicFormComponent.prototype.changeDetectorRef;
    /** @type {?} */
    DynamicFormComponent.prototype.translatePipe;
    /** @type {?} */
    DynamicFormComponent.prototype.route;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3JFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUN4RSxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUczRCxPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBNlJuRSw4QkFDUyxlQUNDLHFCQUNBLHFCQUNBLGtCQUNBLGtCQUNBLGlCQUNBLG1CQUNBLGVBQ1ksS0FBcUI7UUFSbEMsa0JBQWEsR0FBYixhQUFhO1FBQ1osd0JBQW1CLEdBQW5CLG1CQUFtQjtRQUNuQix3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixvQkFBZSxHQUFmLGVBQWU7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYTtRQUNELFVBQUssR0FBTCxLQUFLLENBQWdCOzs7OzJCQXpGbkIsSUFBSSxZQUFZLEVBQU87Ozs7NkJBR3JCLElBQUksWUFBWSxFQUFPOzs7OytCQUdyQixJQUFJLFlBQVksRUFBTzs7Ozs4QkFHeEIsSUFBSSxZQUFZLEVBQU87Ozs7bUNBR2xCLElBQUksWUFBWSxFQUFPOzs7O2tDQUd4QixJQUFJLFlBQVksRUFBTzs7OzsrQkF5RE4sSUFBSSxLQUFLLEVBQWtCOzs7OzZCQUdyQyxJQUFJLGFBQWEsRUFBRTs7OztxQ0FHakIsSUFBSTtLQVl2Qzs7OztJQUVMLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFMUQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBRXBFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7Ozs7O0lBS00sd0NBQVM7Ozs7O2NBQUMsSUFBWTs7WUFDM0IsR0FBRyxDQUFDLENBQXlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBO2dCQUE1QyxJQUFNLGNBQWMsV0FBQTtnQkFDdkIsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzdCOzs7Ozs7Ozs7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7UUFFOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7SUFNbkIsdUNBQVE7Ozs7O2NBQUMsSUFBWTs7O1lBQzFCLDBDQUEwQztZQUMxQyxHQUFHLENBQUMsQ0FBbUMsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQTtnQkFBekUsSUFBTSx3QkFBd0IsV0FBQTtnQkFDakMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvQzs7Ozs7Ozs7O1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDOztZQUVsQyxJQUFNLFFBQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUM7WUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFNLENBQUMsQ0FBQzs7WUFFcEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUNqQyxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQ3hDLENBQUM7WUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV0QixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFeEUsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFFbkMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUM7d0JBQ0gsS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDO3dCQUM3RixJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUM7d0JBQzlGLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTzt3QkFDdkIsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7cUJBQ2hFLENBQUMsQ0FBQztpQkFDSjthQUNGLEVBQUUsVUFBQSxTQUFTO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUV2QyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFMUUsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFFbkMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUM7d0JBQ0gsS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO3dCQUMzRixJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7d0JBQzVGLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSzt3QkFDckIsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7cUJBQ2hFLENBQUMsQ0FBQztpQkFDSjthQUNGLENBQUMsQ0FBQztTQUNKOzs7Ozs7OztJQU1JLHlDQUFVOzs7OztjQUFDLElBQVk7O1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7O1lBRWxDLElBQU0sUUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQU0sQ0FBQyxDQUFDO1lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBTSxDQUFDLENBQUM7O1lBRXBCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDbkMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUN4QyxDQUFDO1lBRUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdEIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFNUUsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFFbkMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUM7d0JBQ0gsS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO3dCQUMvRixJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7d0JBQ2hHLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTzt3QkFDdkIsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7cUJBQ2hFLENBQUMsQ0FBQztpQkFDSjthQUNGLEVBQUUsVUFBQSxTQUFTO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUV6QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUU5RSxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO2dCQUVuQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQzt3QkFDSCxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7d0JBQzdGLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDOUYsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLO3dCQUNyQixpQkFBaUIsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtxQkFDaEUsQ0FBQyxDQUFDO2lCQUNKO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BEOzs7Ozs7SUFJSSwyQ0FBWTs7Ozs7O1lBQ2pCLEdBQUcsQ0FBQyxDQUF5QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQTtnQkFBNUMsSUFBTSxjQUFjLFdBQUE7Z0JBQ3ZCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNqRDs7Ozs7Ozs7Ozs7Ozs7O0lBTUksMENBQVc7Ozs7O1FBQ2hCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFNM0YsNkNBQWM7Ozs7O1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdCOzs7Ozs7SUFNSSw0Q0FBYTs7Ozs7O1FBQ2xCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQzs7WUFFbEIsR0FBRyxDQUFDLENBQXlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBO2dCQUE1QyxJQUFNLGNBQWMsV0FBQTtnQkFDdkIsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM5QixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQy9EO2FBQ0Y7Ozs7Ozs7OztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7SUFNVCwwQ0FBVzs7Ozs7O1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7O1lBRTFCLEdBQUcsQ0FBQyxDQUF5QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQTtnQkFBNUMsSUFBTSxjQUFjLFdBQUE7Z0JBQ3ZCLElBQUksR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVDOzs7Ozs7Ozs7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Ozs7OztJQU9QLDJDQUFZOzs7OztjQUFDLElBQVk7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUF0QixDQUFzQixDQUFDLENBQUM7Ozs7Ozs7SUFPMUQsNkNBQWM7Ozs7O2NBQUMsTUFBVztRQUMvQixNQUFNLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVc7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3hFLENBQUM7Ozs7Ozs7SUFNRywwQ0FBVzs7Ozs7Y0FBQyxRQUFROztZQUN6QixHQUFHLENBQUMsQ0FBd0IsSUFBQSxLQUFBLGlCQUFBLFFBQVEsQ0FBQyxNQUFNLENBQUEsZ0JBQUE7Z0JBQXRDLElBQU0sYUFBYSxXQUFBO2dCQUN0QixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7b0JBQ3hCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUU3RCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUMzQztpQkFDRjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7SUFJVyx1Q0FBUTs7Ozs7Ozs7Ozs0QkFDcEIscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUd6QixVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUMsUUFBUSxFQUFuQyxDQUFtQyxDQUFDLENBQUM7OzRCQUVwRyxHQUFHLENBQUMsQ0FBZ0IsZUFBQSxpQkFBQSxVQUFVLENBQUE7Z0NBQW5CLEtBQUs7Z0NBQ2QsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUMzQzs7Ozs7Ozs7O3dCQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFFdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLEVBQ3BDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFDdEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxFQUMzQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEVBQ3RDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsRUFDekMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxFQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEVBQ25DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsRUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxFQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFDdEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxFQUN4QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxFQUFFLEVBQzFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsRUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUNyQyxDQUFDO3dCQUVGLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUU3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7OzRCQUVwQixHQUFHLENBQUMsQ0FBeUIsS0FBQSxpQkFBQSxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUE7Z0NBQXhELGNBQWM7Z0NBQ3ZCLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOzZCQUN0Qzs7Ozs7Ozs7O3dCQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTs0QkFDbkQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUMvRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7NkJBQ3JCOztnQ0FFRCxHQUFHLENBQUMsQ0FBeUIsSUFBQSxLQUFBLGlCQUFBLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxnQkFBQTtvQ0FBL0QsSUFBTSxjQUFjLFdBQUE7b0NBQ3ZCLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lDQUNwQzs7Ozs7Ozs7Ozt5QkFDRixDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFJUyxnREFBaUI7Ozs7Ozs7Ozs7d0JBQzdCLEtBQUEsSUFBSSxDQUFBO3dCQUFpQixxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFBOzt3QkFBdEYsR0FBSyxhQUFhLEdBQUcsU0FBaUUsQ0FBQzs2QkFHbkYsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBM0Isd0JBQTJCOzZCQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBN0Msd0JBQTZDO3dCQUN0QyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBRXJFLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVwRCxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUE7O3dCQUE1RSxnQkFBZ0IsR0FBRyxTQUF5RDt3QkFFbEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7O3dCQU5uQixDQUFDLEVBQUUsQ0FBQTs7NEJBVWxFLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUE7O3dCQUE3RixTQUFTLEdBQUcsU0FBaUY7d0JBRW5HLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO3lCQUN2Rjt3QkFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssRUFBUyxDQUFDOzRDQUcxQyxTQUFTOzRCQUNsQixFQUFFLENBQUMsQ0FBQyxPQUFLLGFBQWEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0NBQ3hELElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQXBCLENBQW9CLENBQUMsQ0FBQztnQ0FFckUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7b0NBQ2hCLElBQU0sV0FBVyxHQUFHLE9BQUssZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxPQUFLLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQ0FFNUcsT0FBSyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQ0FDbkQ7Z0NBQUMsSUFBSSxDQUFDLENBQUM7b0NBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFhLFNBQVMsMkNBQXdDLENBQUMsQ0FBQztpQ0FDOUU7NkJBQ0Y7Ozs7d0JBWEgsR0FBRyxDQUFDLENBQU8sU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO29DQUF2QyxTQUFTO3lCQVluQjt3QkFFRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Ozt3QkFHakYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzFFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNwRTt3QkFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDOzs7Ozs7Ozs7O0lBSWhELG9EQUFxQjs7Ozs7O1lBQzNCLEdBQUcsQ0FBQyxDQUF5QixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQTtnQkFBNUMsSUFBTSxjQUFjLFdBQUE7Z0JBQ3ZCLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7OztJQU9LLDREQUE2Qjs7Ozs7O2NBQUMsS0FBWTs7UUFFaEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM5RztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDOUc7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUMxSDtRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUMxSDtRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDN0MsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzdGOzs7Ozs7SUFJSywyQ0FBWTs7Ozs7O1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBQ3JDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFDaEMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUN4QyxDQUFDO1lBRUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO2dCQUN2RCxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUzQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbEMsS0FBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQzthQUNwQyxFQUFFLFVBQUEsU0FBUztnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUUzQyxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO2dCQUVuQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQzt3QkFDSCxLQUFLLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7d0JBQzFGLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDM0YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLO3dCQUNyQixpQkFBaUIsRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtxQkFDaEUsQ0FBQyxDQUFDO2lCQUNKO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7U0FDcEM7Ozs7Ozs7SUFPSyx5REFBMEI7Ozs7O2NBQUMsY0FBOEI7O1FBQy9ELElBQUkscUJBQXFCLEdBQUcsSUFBSSxLQUFLLEVBQWMsQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxxQkFBcUIsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RDtRQUVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0lBUXhCLGtEQUFtQjs7Ozs7OztjQUFDLFNBQWlCLEVBQUUsY0FBbUIsRUFBRSxNQUFXO1FBQzVFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOztZQUN6QixJQUFNLE9BQUssR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUU5QyxJQUFNLDBCQUEwQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBSyxDQUFDLENBQUM7WUFFL0QsRUFBRSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO2dCQUMvQiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzFEO1NBQ0Y7OztnQkFsdEJKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMm9QQXdMWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyx5bUJBQXltQixDQUFDO29CQUNubkIsU0FBUyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQzs7b0JBRTNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkF6TlEsYUFBYTtnQkFKYixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUpoQixnQkFBZ0I7Z0JBS2hCLGVBQWU7Z0JBUnRCLGlCQUFpQjtnQkFHUSxhQUFhO2dCQUMvQixjQUFjLHVCQW1VbEIsUUFBUTs7O3lDQWxHVixLQUFLLFNBQUMsd0JBQXdCO2tDQUc5QixLQUFLLFNBQUMsaUJBQWlCO3VDQUd2QixLQUFLLFNBQUMsc0JBQXNCOzhCQUc1QixNQUFNO2dDQUdOLE1BQU07a0NBR04sTUFBTTtpQ0FHTixNQUFNO3NDQUdOLE1BQU07cUNBR04sTUFBTTttQ0FHTixTQUFTLFNBQUMsV0FBVzs2Q0FHckIsU0FBUyxTQUFDLDBCQUEwQjt1Q0FHcEMsWUFBWSxTQUFDLG1CQUFtQjt3Q0FHaEMsWUFBWSxTQUFDLG9CQUFvQjswQ0FHakMsWUFBWSxTQUFDLHNCQUFzQjsrQ0FHbkMsWUFBWSxTQUFDLDJCQUEyQjswQ0FHeEMsWUFBWSxTQUFDLHNCQUFzQjs2Q0FHbkMsWUFBWSxTQUFDLHlCQUF5Qjs2Q0FHdEMsWUFBWSxTQUFDLHlCQUF5Qjt1Q0FHdEMsWUFBWSxTQUFDLG1CQUFtQjt3Q0FHaEMsWUFBWSxTQUFDLG9CQUFvQjtzQ0FHakMsWUFBWSxTQUFDLGtCQUFrQjtzQ0FHL0IsWUFBWSxTQUFDLGtCQUFrQjswQ0FHL0IsWUFBWSxTQUFDLHNCQUFzQjs0Q0FHbkMsWUFBWSxTQUFDLHdCQUF3Qjs4Q0FHckMsWUFBWSxTQUFDLDBCQUEwQjsyQ0FHdkMsWUFBWSxTQUFDLHVCQUF1Qjt3Q0FHcEMsWUFBWSxTQUFDLG9CQUFvQjs7K0JBclRwQzs7U0FxT2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZHJlbiwgUXVlcnlMaXN0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3B0aW9uYWxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2h0dHAtcmVxdWVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbGl0aWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlcywgU3dhbFR5cGVzLCBGb3JtTW9kZXMsIFBvc3RNb2RlcyB9IGZyb20gJy4uLy4uL21vZGVscy9lbnVtcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vZm9ybS1wYXJ0LXRlbXBsYXRlcy92YWxpZGF0aW9uLXN1bW1hcnkvdmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRldGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWZpZWxkL2RhdGV0aW1lLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9kYXRldGltZS1oaWpyaS1maWVsZC9kYXRldGltZS1oaWpyaS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2NoZWNrYm94LWZpZWxkL2NoZWNrYm94LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvcmFkaW9idXR0b24tZmllbGQvcmFkaW9idXR0b24tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9tdWx0aS1zZWxlY3QtZmllbGQvbXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoaXBzRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvY2hpcHMtZmllbGQvY2hpcHMtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvZWRpdG9yLWZpZWxkL2VkaXRvci1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXNrRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvbWFzay1maWVsZC9tYXNrLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy90aW1lLWZpZWxkL3RpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9jYXRpb25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9sb2NhdGlvbi1maWVsZC9sb2NhdGlvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvaW1hZ2UtY3JvcHBlci1maWVsZC9pbWFnZS1jcm9wcGVyLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL3JlY2FwdGNoYS1maWVsZC9yZWNhcHRjaGEtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvcmF0aW5nLWZpZWxkL3JhdGluZy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL21vZGVscy9maWVsZCc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCB7IFJlc3BvbnNlRXZlbnRBcmdzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLWV2ZW50LWFyZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZHluYW1pYy1mb3JtJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lclxyXG4gICAgIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgPGZvcm0gY2xhc3M9XCJkeW5hbWljLWZvcm0tZm9ybVwiXHJcbiAgICAgICAgI2Y9XCJuZ0Zvcm1cIlxyXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJzdWJtaXRGb3JtKGYpXCJcclxuICAgICAgICBbaGlkZGVuXT1cInNob3dQcm9ncmVzc0luZGljYXRvclwiXHJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkeW5hbWljLWZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zIHNlY3Rpb25zLXRvcFwiXHJcbiAgICAgICAgICAgKm5nSWY9XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbkxvY2F0aW9uID09ICdUb3AnIHx8IGNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTG9jYXRpb24gPT0gJ0JvdGgnXCI+XHJcbiAgICAgICAgPCEtLSBzZWN0aW9uIHRhYnMgLS0+XHJcbiAgICAgICAgPG50dy10YWJzLXNlY3Rpb24gKm5nSWY9XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbk1vZGUgPT0gJ1RhYnMnXCI+PC9udHctdGFicy1zZWN0aW9uPlxyXG5cclxuICAgICAgICA8IS0tIG5leHQgcHJldmlvdXMgLS0+XHJcbiAgICAgICAgPG50dy1uZXh0LXByZXZpb3VzLXNlY3Rpb24gKm5nSWY9XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbk1vZGUgPT0gJ05leHRQcmV2aW91cydcIj48L250dy1uZXh0LXByZXZpb3VzLXNlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcblxyXG4gICAgICA8IS0tIGZvcm0gLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lciByb3dcIj5cclxuICAgICAgICA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLndyYXBwZXJcIlxyXG4gICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGNvbmZpZ3VyYXRpb24/Lm1lcmdlZEZpZWxkc1wiPlxyXG5cclxuICAgICAgICAgIDwhLS0gaW5mbyAtLT5cclxuICAgICAgICAgIDxudHctaW5mby1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0naW5mbydcIj5cclxuICAgICAgICAgIDwvbnR3LWluZm8tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSB0ZXh0IG9yIG51bWJlciBvciBwYXNzd29yZCAtLT5cclxuICAgICAgICAgIDxudHctaW5wdXQtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIoZmllbGQuZmllbGRUeXBlPT0ndGV4dCcgfHwgZmllbGQuZmllbGRUeXBlPT0nbnVtYmVyJyB8fCBmaWVsZC5maWVsZFR5cGU9PSdwYXNzd29yZCcpXCI+XHJcbiAgICAgICAgICA8L250dy1pbnB1dC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGRyb3Bkb3duIGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LXNlbGVjdC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8L250dy1zZWxlY3QtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBkYXRldGltZSBwaWNrZXIgLS0+XHJcbiAgICAgICAgICA8bnR3LWRhdGV0aW1lLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nZGF0ZXRpbWUnXCI+XHJcbiAgICAgICAgICA8L250dy1kYXRldGltZS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGhpanJpIGRhdGV0aW1lIHBpY2tlciAtLT5cclxuICAgICAgICAgIDxudHctZGF0ZXRpbWUtaGlqcmktZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdkYXRldGltZWhpanJpJ1wiPlxyXG4gICAgICAgICAgPC9udHctZGF0ZXRpbWUtaGlqcmktZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSB0aW1lIHBpY2tlciAtLT5cclxuICAgICAgICAgIDxudHctdGltZS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ndGltZSdcIj5cclxuICAgICAgICAgIDwvbnR3LXRpbWUtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBjaGVja2JveCBsaXN0IC0tPlxyXG4gICAgICAgICAgPG50dy1jaGVja2JveC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2NoZWNrYm94J1wiPlxyXG4gICAgICAgICAgPC9udHctY2hlY2tib3gtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSByYWRpb2J1dHRvbiBsaXN0IC0tPlxyXG4gICAgICAgICAgPG50dy1yYWRpb2J1dHRvbi1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J3JhZGlvYnV0dG9uJ1wiPlxyXG4gICAgICAgICAgPC9udHctcmFkaW9idXR0b24tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBtdWx0aVNlbGVjdCBsaXN0IC0tPlxyXG4gICAgICAgICAgPG50dy1tdWx0aS1zZWxlY3QtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nbXVsdGlzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8L250dy1tdWx0aS1zZWxlY3QtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBjaGlwcyAtLT5cclxuICAgICAgICAgIDxudHctY2hpcHMtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdjaGlwcydcIj5cclxuICAgICAgICAgIDwvbnR3LWNoaXBzLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gZWRpdG9yIC0tPlxyXG4gICAgICAgICAgPG50dy1lZGl0b3ItZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nZWRpdG9yJ1wiPlxyXG4gICAgICAgICAgPC9udHctZWRpdG9yLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gbWFzayAtLT5cclxuICAgICAgICAgIDxudHctbWFzay1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nbWFzaydcIj5cclxuICAgICAgICAgIDwvbnR3LW1hc2stZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBsb2NhdGlvbiAtLT5cclxuICAgICAgICAgIDxudHctbG9jYXRpb24tZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdsb2NhdGlvbidcIj5cclxuICAgICAgICAgIDwvbnR3LWxvY2F0aW9uLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gZmlsZSB1cGxvYWQgLS0+XHJcbiAgICAgICAgICA8bnR3LWZpbGUtdXBsb2FkLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nZmlsZXVwbG9hZCdcIj5cclxuICAgICAgICAgIDwvbnR3LWZpbGUtdXBsb2FkLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gUmF0aW5nIC0tPlxyXG4gICAgICAgICAgPG50dy1yYXRpbmctZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ncmF0aW5nJ1wiPlxyXG4gICAgICAgICAgPC9udHctcmF0aW5nLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gcmVjYXB0Y2hhIC0tPlxyXG4gICAgICAgICAgPG50dy1yZWNhcHRjaGEtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ncmVjYXB0Y2hhJ1wiPlxyXG4gICAgICAgICAgPC9udHctcmVjYXB0Y2hhLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gaW1hZ2UgY3JvcHBlciAtLT5cclxuICAgICAgICAgIDxudHctaW1hZ2UtY3JvcHBlci1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0naW1hZ2Vjcm9wcGVyJ1wiPlxyXG4gICAgICAgICAgPC9udHctaW1hZ2UtY3JvcHBlci1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIG1hc3RlcmRldGFpbCAtLT5cclxuICAgICAgICAgIDxudHctbWFzdGVyLWRldGFpbC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nbWFzdGVyZGV0YWlsJ1wiPlxyXG4gICAgICAgICAgPC9udHctbWFzdGVyLWRldGFpbC1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gdmFsaWRhdGlvbiBzdW1tYXJ5IC0tPlxyXG4gICAgICA8bnR3LXZhbGlkYXRpb24tc3VtbWFyeT48L250dy12YWxpZGF0aW9uLXN1bW1hcnk+XHJcblxyXG4gICAgICA8IS0tIGJ1dHRvbnMgLS0+XHJcbiAgICAgIDxkaXYgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICBkYXRhLWh0bWwyY2FudmFzLWlnbm9yZT1cInRydWVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1haW4tYnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8udG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8uY3NzQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJGb3JtKGYpXCI+XHJcbiAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uY2xlYXI/LmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgW25hbWVdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlPy50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgW2hpZGRlbl09XCJpc0J1dHRvbkhpZGRlbihjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlPy5jc3NDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzYXZlRm9ybShmKVwiPlxyXG4gICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgW25hbWVdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8udG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQ/LmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgW2hpZGRlbl09XCJpc0J1dHRvbkhpZGRlbihjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8uY3NzQ2xhc3NcIj5cclxuICAgICAgICAgICAge3tjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQ/LmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhZGRpdGlvbmFsLWJ1dHRvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBjb25maWd1cmF0aW9uPy5idXR0b25zPy5hZGRpdGlvbmFsQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJidXR0b24/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiYnV0dG9uPy50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImJ1dHRvbj8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGJ1dHRvbilcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiYnV0dG9uPy5jc3NDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyRHluYW1pY0V2ZW50KCdjbGljaycsICRldmVudCwgYnV0dG9uKTtcIj5cclxuICAgICAgICAgICAge3tidXR0b24/LmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMgc2VjdGlvbnMtYm90dG9tXCJcclxuICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTG9jYXRpb24gPT0gJ0JvdHRvbScgfHwgY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90aCdcIj5cclxuICAgICAgICA8IS0tIHNlY3Rpb24gdGFicyAtLT5cclxuICAgICAgICA8bnR3LXRhYnMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnVGFicydcIj48L250dy10YWJzLXNlY3Rpb24+XHJcblxyXG4gICAgICAgIDwhLS0gbmV4dCBwcmV2aW91cyAtLT5cclxuICAgICAgICA8bnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnTmV4dFByZXZpb3VzJ1wiPjwvbnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG5cclxuICA8bnR3LXByb2dyZXNzLWluZGljYXRvciAqbmdJZj1cInNob3dQcm9ncmVzc0luZGljYXRvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3NwaW5uZXJTb3VyY2VVcmxdPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNwaW5uZXJTb3VyY2VVcmxcIj48L250dy1wcm9ncmVzcy1pbmRpY2F0b3I+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2AuZm9ybUJ1dHRvbnN7bWFyZ2luOjIwcHggMH1ib2R5LmFyIC5tYWluLWJ1dHRvbnMgYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9Ym9keS5lbiAubWFpbi1idXR0b25zIGJ1dHRvbnttYXJnaW4tcmlnaHQ6MTBweH1ib2R5LmFye2RpcmVjdGlvbjpydGwhaW1wb3J0YW50O3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fWJvZHkuZW57ZGlyZWN0aW9uOmx0ciFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH0udWktZHJvcGRvd24saW5wdXQuZm9ybS1pbnB1dCxpbnB1dC51aS1pbnB1dHRleHQudWktd2lkZ2V0LnVpLXN0YXRlLWRlZmF1bHQscC1kcm9wZG93bnt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MzVweH0uaW5wdXQtY29udGFpbmVye21hcmdpbi10b3A6MjRweH1sYWJlbC5mb3JtLWxhYmVse2ZvbnQtd2VpZ2h0OjcwMH1zcGFuLnJlcXVpcmVkLWFzdGVyaXNre2NvbG9yOnJlZH1wLmVycm9yLHAudmFsaWRhdGlvbi1lcnJvcntkaXNwbGF5OmJsb2NrO2NvbG9yOnJlZH0ucmVzdWx0IGltZ3t3aWR0aDoxNTBweDtoZWlnaHQ6MTUwcHh9LmZvcm0tZGlzcGxheXtkaXNwbGF5OmJsb2NrfXctY2xvY2sgKntib3gtc2l6aW5nOmNvbnRlbnQtYm94IWltcG9ydGFudH1gXSxcclxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGVQaXBlLCBCcmlkZ2VTZXJ2aWNlLCBVdGlsaXRpZXNTZXJ2aWNlXSxcclxuICAvLyBwcm92aWRlIHRoZSBicmlkZ2Ugc2VydmljZSBoZXJlIGluIG9yZGVyIHRvIGhhdmUgYSBkaWZmZXJlbnQgaW5zdGFuY2UgcGVyIGZvcm0gaW5zdGFuY2UuXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNvbmZpZ3VyYXRpb24gc291cmNlIHVybC4qL1xyXG4gIEBJbnB1dCgnY29uZmlndXJhdGlvblNvdXJjZVVybCcpIGNvbmZpZ3VyYXRpb25Tb3VyY2VVcmw6IHN0cmluZztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcGFyZW50IGNvbXBvbmVudC4qL1xyXG4gIEBJbnB1dCgncGFyZW50Q29tcG9uZW50JykgcGFyZW50Q29tcG9uZW50OiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycy4qL1xyXG4gIEBJbnB1dCgnYWRkaXRpb25hbFBhcmFtZXRlcnMnKSBhZGRpdGlvbmFsUGFyYW1ldGVyczogYW55O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBvbkZvcm1DbGVhcmVkIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgZm9ybSBpcyBjbGVhcmVkLiovXHJcbiAgQE91dHB1dCgpIGZvcm1DbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uRm9ybURhdGFCb3VuZCBldmVudC4gVHJpZ2dlcmVkIHdoZW4gdGhlIGZvcm0gaXMgZGF0YSBib3VuZC4qL1xyXG4gIEBPdXRwdXQoKSBmb3JtRGF0YUJvdW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uQmVmb3JlRm9ybVNhdmVkIGV2ZW50LiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBmb3JtIGlzIHNhdmVkLiovXHJcbiAgQE91dHB1dCgpIGJlZm9yZUZvcm1TYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBvbkFmdGVyRm9ybVNhdmVkIGV2ZW50LiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZvcm0gaXMgc2F2ZWQuKi9cclxuICBAT3V0cHV0KCkgYWZ0ZXJGb3JtU2F2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25CZWZvcmVGb3JtU3VibWl0dGVkIGV2ZW50LiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZC4qL1xyXG4gIEBPdXRwdXQoKSBiZWZvcmVGb3JtU3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uQWZ0ZXJGb3JtU3VibWl0dGVkIGV2ZW50LiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZvcm0gaXMgc3VibWl0dGVkLiovXHJcbiAgQE91dHB1dCgpIGFmdGVyRm9ybVN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSByb290IGNvbnRhaW5lciBlbGVtZW50LiovXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdmFsaWRhdGlvbiBzdW1tYXJ5IGNvbXBvbmVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQpIHZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50OiBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBpbnB1dCBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihJbnB1dEZpZWxkQ29tcG9uZW50KSBpbnB1dEZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PElucHV0RmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIHNlbGVjdCBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihTZWxlY3RGaWVsZENvbXBvbmVudCkgc2VsZWN0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8U2VsZWN0RmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGRhdGV0aW1lIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKERhdGV0aW1lRmllbGRDb21wb25lbnQpIGRhdGV0aW1lRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RGF0ZXRpbWVGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZGF0ZXRpbWUgaGlqcmkgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50KSBkYXRldGltZUhpanJpRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBjaGVja2JveCBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihDaGVja2JveEZpZWxkQ29tcG9uZW50KSBjaGVja2JveEZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PENoZWNrYm94RmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIHJhZGlvIGJ1dHRvbiBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50KSByYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIG11bHRpIHNlbGVjdCBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50KSBtdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGNoaXBzIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKENoaXBzRmllbGRDb21wb25lbnQpIGNoaXBzRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8Q2hpcHNGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZWRpdG9yIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKEVkaXRvckZpZWxkQ29tcG9uZW50KSBlZGl0b3JGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFZGl0b3JGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgbWFzayBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihNYXNrRmllbGRDb21wb25lbnQpIG1hc2tGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxNYXNrRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIHRpbWUgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oVGltZUZpZWxkQ29tcG9uZW50KSB0aW1lRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8VGltZUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBsb2NhdGlvbiBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihMb2NhdGlvbkZpZWxkQ29tcG9uZW50KSBsb2NhdGlvbkZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PExvY2F0aW9uRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGZpbGUgdXBsb2FkIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCkgZmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmVjYXB0Y2hhIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50KSBpbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmVjYXB0Y2hhIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50KSByZWNhcHRjaGFGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxSZWNhcHRjaGFGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmVjYXB0Y2hhIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFJhdGluZ0ZpZWxkQ29tcG9uZW50KSByYXRpbmdGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxSYXRpbmdGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgYWxsIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBwdWJsaWMgZmllbGRDb21wb25lbnRzOiBBcnJheTxGaWVsZENvbXBvbmVudD4gPSBuZXcgQXJyYXk8RmllbGRDb21wb25lbnQ+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG1haW4gY29uZmlndXJhdGlvbiBvYmplY3QuKi9cclxuICBwdWJsaWMgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byBzaG93IHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IuKi9cclxuICBwdWJsaWMgc2hvd1Byb2dyZXNzSW5kaWNhdG9yOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZSxcclxuICAgIHByaXZhdGUgaHR0cFJlcXVlc3RzU2VydmljZTogSHR0cFJlcXVlc3RzU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbGl0aWVzU2VydmljZTogVXRpbGl0aWVzU2VydmljZSxcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlUGlwZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UucGFyZW50Q29tcG9uZW50ID0gdGhpcy5wYXJlbnRDb21wb25lbnQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzID0gSlNPTi5wYXJzZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzO1xyXG5cclxuICAgIHRoaXMuYmluZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmb3JtLlxyXG4gICogQHBhcmFtIE5nRm9ybSBmb3JtIFRoZSBmb3JtLlxyXG4gICovXHJcbiAgcHVibGljIGNsZWFyRm9ybShmb3JtOiBOZ0Zvcm0pIHtcclxuICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5maWVsZENvbXBvbmVudHMpIHtcclxuICAgICAgZmllbGRDb21wb25lbnQuY2xlYXJWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgdGhpcy5mb3JtQ2xlYXJlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNhdmVzIHRoZSBmb3JtLlxyXG4gICogQHBhcmFtIE5nRm9ybSBmb3JtIFRoZSBmb3JtLlxyXG4gICovXHJcbiAgcHVibGljIHNhdmVGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgLy8gdHJpZ2dlciByZWNhcHRjaGEgdmFsaWRhdGlvbiBpZiBleGlzdHMuXHJcbiAgICBmb3IgKGNvbnN0IHJlY2FwdGNoYUZpZWxkQ29tcG9uZW50cyBvZiB0aGlzLnJlY2FwdGNoYUZpZWxkQ29tcG9uZW50cy50b0FycmF5KCkpIHtcclxuICAgICAgcmVjYXB0Y2hhRmllbGRDb21wb25lbnRzLnZhbGlkYXRlKG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzRm9ybVZhbGlkKCkpIHtcclxuICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRSZXF1ZXN0Qm9keSgpO1xyXG5cclxuICAgICAgdGhpcy5iZWZvcmVGb3JtU2F2ZWQuZW1pdCh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5zYXZlLFxyXG4gICAgICAgIHRoaXMucm91dGUsXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmFkZGl0aW9uYWxQYXJhbWV0ZXJzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UucG9zdChlbmRwb2ludCwgdmFsdWVzKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZnRlckZvcm1TYXZlZC5lbWl0KG5ldyBSZXNwb25zZUV2ZW50QXJncyh0cnVlLCByZXNwb25zZSwgdmFsdWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVTdWNjZXNzTWVzc2FnZVRpdGxlKSxcclxuICAgICAgICAgICAgaHRtbDogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zYXZlU3VjY2Vzc01lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLlN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NhdmVGb3JtOiAnLCBleGNlcHRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVNhdmVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKGZhbHNlLCBleGNlcHRpb24sIHZhbHVlcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2hvd1Jlc3VsdE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zYXZlRXJyb3JNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVFcnJvck1lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLkVycm9yLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFN1Ym1pdHMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgc3VibWl0Rm9ybShmb3JtOiBOZ0Zvcm0pIHtcclxuICAgIHRoaXMudmFsaWRhdGVGb3JtKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFJlcXVlc3RCb2R5KCk7XHJcblxyXG4gICAgICB0aGlzLmJlZm9yZUZvcm1TdWJtaXR0ZWQuZW1pdCh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5zdWJtaXQsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5wb3N0KGVuZHBvaW50LCB2YWx1ZXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVN1Ym1pdHRlZC5lbWl0KG5ldyBSZXNwb25zZUV2ZW50QXJncyh0cnVlLCByZXNwb25zZSwgdmFsdWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnN1Ym1pdFN1Y2Nlc3NNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnN1Ym1pdFN1Y2Nlc3NNZXNzYWdlRGV0YWlscyksXHJcbiAgICAgICAgICAgIHR5cGU6IFN3YWxUeXBlcy5TdWNjZXNzLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdzdWJtaXRGb3JtOiAnLCBleGNlcHRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVN1Ym1pdHRlZC5lbWl0KG5ldyBSZXNwb25zZUV2ZW50QXJncyhmYWxzZSwgZXhjZXB0aW9uLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0RXJyb3JNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnN1Ym1pdEVycm9yTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQuc2hvd1N1bW1hcnlBbGVydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGZvcm0uKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlRm9ybUZpZWxkQ29tcG9uZW50KGZpZWxkQ29tcG9uZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB3aGV0aGVyIHRoZSBmb3JtIGlzIHZhbGlkLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSBmb3JtIGlzIHZhbGlkLlxyXG4gICovXHJcbiAgcHVibGljIGlzRm9ybVZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycyB8fCB0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIHJlcXVlc3QgYm9keS5cclxuICAgKiBAcmV0dXJuIGFueSBzb3VyY2UgVGhlIHJlcXVlc3QgYm9keS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRSZXF1ZXN0Qm9keSgpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5wb3N0TW9kZSA9PT0gUG9zdE1vZGVzLkZvcm1EYXRhKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEZvcm1EYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRGb3JtVmFsdWVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZvcm0gZmllbGQgdmFsdWVzLlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgZm9ybSB2YWx1ZXMuXHJcbiAgKi9cclxuICBwdWJsaWMgZ2V0Rm9ybVZhbHVlcygpOiBhbnkge1xyXG4gICAgY29uc3QgdmFsdWVzID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBpZiAoZmllbGRDb21wb25lbnQuZmllbGQuZGF0YSkge1xyXG4gICAgICAgIHZhbHVlc1tmaWVsZENvbXBvbmVudC5maWVsZC5uYW1lXSA9IGZpZWxkQ29tcG9uZW50LmdldFZhbHVlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHRoZSBmb3JtIGZpZWxkIHZhbHVlcy5cclxuICAgKiBAcmV0dXJuIGFueSBzb3VyY2UgVGhlIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRGb3JtRGF0YSgpOiBGb3JtRGF0YSB7XHJcbiAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5maWVsZENvbXBvbmVudHMpIHtcclxuICAgICAgZGF0YSA9IGZpZWxkQ29tcG9uZW50LmFwcGVuZEZvcm1EYXRhKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIGEgZmllbGQgY29tcG9uZW50IHJlZmVyZW5jZSBieSBpdHMgbmFtZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIG5hbWUgVGhlIG5hbWUuXHJcbiAgICogQHJldHVybiBGaWVsZENvbXBvbmVudCBUaGUgZmllbGQgY29tcG9uZW50IHJlZmVyZW5jZS5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogRmllbGRDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGRDb21wb25lbnRzLmZpbmQoZmMgPT4gZmMuZmllbGQubmFtZSA9PT0gbmFtZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSBidXR0b24gc2hvdWxkIGJlIGhpZGRlbi5cclxuICAgKiBAcGFyYW0gYW55IGJ1dHRvbiBUaGUgYnV0dG9uLlxyXG4gICAqIEByZXR1cm4gRmllbGRDb21wb25lbnQgV2hldGhlciB0aGUgYnV0dG9uIHNob3VsZCBiZSBoaWRkZW4uXHJcbiAgKi9cclxuICBwdWJsaWMgaXNCdXR0b25IaWRkZW4oYnV0dG9uOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoYnV0dG9uICYmIGJ1dHRvbi5oaWRkZW4pIHx8ICh0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24gJiZcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmhpZGVCdXR0b25zICYmXHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbi5oaWRlQnV0dG9ucy5pbmRleE9mKGJ1dHRvbi5uYW1lKSA+IC0xXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIGFueSBmb3JtRGF0YSBUaGUgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIHNldEZvcm1EYXRhKGZvcm1EYXRhKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJlc3BvbnNlRmllbGQgb2YgZm9ybURhdGEuZmllbGRzKSB7XHJcbiAgICAgIGlmIChyZXNwb25zZUZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRDb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChyZXNwb25zZUZpZWxkLm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoZmllbGRDb21wb25lbnQpIHtcclxuICAgICAgICAgIGZpZWxkQ29tcG9uZW50LnVwZGF0ZVZhbHVlKHJlc3BvbnNlRmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBCaW5kcyB0aGUgZHluYW1pYyBmb3JtLiovXHJcbiAgcHJpdmF0ZSBhc3luYyBiaW5kRm9ybSgpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZENvbmZpZ3VyYXRpb24oKTtcclxuXHJcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBkYXRldGltZSBmaWVsZHMuXHJcbiAgICBjb25zdCBkYXRlRmllbGRzID0gdGhpcy5jb25maWd1cmF0aW9uLm1lcmdlZEZpZWxkcy5maWx0ZXIoZiA9PiBmLmZpZWxkVHlwZSA9PT0gRmllbGRUeXBlcy5EYXRlVGltZSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBkYXRlRmllbGRzKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRGVmYXVsdERhdGVUaW1lU2V0dGluZ3MoZmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIHRoaXMuZmllbGRDb21wb25lbnRzID0gdGhpcy5maWVsZENvbXBvbmVudHMuY29uY2F0KFxyXG4gICAgICB0aGlzLmlucHV0RmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5zZWxlY3RGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmRhdGV0aW1lRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5kYXRldGltZUhpanJpRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5jaGVja2JveEZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMucmFkaW9idXR0b25GaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLm11bHRpU2VsZWN0RmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5jaGlwc0ZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuZWRpdG9yRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5tYXNrRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy50aW1lRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5sb2NhdGlvbkZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuZmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuaW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5yZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnJhdGluZ0ZpZWxkQ29tcG9uZW50cy50b0FycmF5KClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuXHJcbiAgICB0aGlzLmJpbmRGb3JtRGF0YSgpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5sb2NhdGlvbkZpZWxkQ29tcG9uZW50cy50b0FycmF5KCkpIHtcclxuICAgICAgZmllbGRDb21wb25lbnQuYWN0aXZhdGVTZWFyY2hJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5mb3JtTW9kZSA9PT0gRm9ybU1vZGVzLkRpc3BsYXkpIHtcclxuICAgICAgICB0aGlzLmJpbmRGb3JtRGF0YSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMucmVjYXB0Y2hhRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICAgIGZpZWxkQ29tcG9uZW50LnNldENhcHRjaGFMYW5ndWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBMb2FkcyB0aGUgY29uZmlndXJhdGlvbiBhcyBhIGdldCByZXF1ZXN0IG9yIGZyb20gbG9jYWwgc3RvcmFnZS4qL1xyXG4gIHByaXZhdGUgYXN5bmMgbG9hZENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBhd2FpdCB0aGlzLnV0aWxpdGllc1NlcnZpY2UubG9hZEZpbGUodGhpcy5jb25maWd1cmF0aW9uU291cmNlVXJsKTtcclxuXHJcbiAgICAvLyBpZiBpdCBpcyBpbiBsb2NhbCwgcmVhZCB0aGUgYWxyZWFkeSBtZXJnZWQgZmllbGRzLiBvdGhlcndpc2UsIG1lcmdlIGl0IGFuZCBzYXZlIGluIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICBpZiAoIXRoaXMuY29uZmlndXJhdGlvbi5pc0xvY2FsKSB7XHJcbiAgICAgIC8vIG1lcmdlIHRoZSBmb3JtIGpzb24gc2NoZW1hIGZyb20gdGhlIGRpZmZlcmVudCBzb3VyY2UgcGllY2VzLlxyXG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnNvdXJjZUZvcm1TY2hlbWFzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zb3VyY2VGb3JtU2NoZW1hcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNvdXJjZUZvcm1TY2hlbWFVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc291cmNlRm9ybVNjaGVtYXNbaV07XHJcblxyXG4gICAgICAgICAgY29uc3Qgc291cmNlRm9ybVNjaGVtYSA9IGF3YWl0IHRoaXMudXRpbGl0aWVzU2VydmljZS5sb2FkRmlsZShzb3VyY2VGb3JtU2NoZW1hVXJsKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UubWVyZ2VSZWN1cnNpdmUoc291cmNlRm9ybVNjaGVtYSwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGF3YWl0IHRoaXMudXRpbGl0aWVzU2VydmljZS5sb2FkRmlsZSh0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuYWxsRmllbGRzU291cmNlKTtcclxuXHJcbiAgICAgIGlmICghYWxsRmllbGRzLmlzTG9jYWwpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2F2ZSh0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuYWxsRmllbGRzU291cmNlLCBhbGxGaWVsZHMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzID0gbmV3IEFycmF5PEZpZWxkPigpO1xyXG5cclxuICAgICAgLy8gbWVyZ2UgdGhlIGZpZWxkIHByb3BlcnRpZXMgd2l0aCB0aGUgYWxsIGZpZWxkcyBsaXN0LlxyXG4gICAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBpbiB0aGlzLmNvbmZpZ3VyYXRpb24uZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHMuaGFzT3duUHJvcGVydHkoZmllbGROYW1lKSkge1xyXG4gICAgICAgICAgY29uc3Qgc291cmNlRmllbGQgPSBhbGxGaWVsZHMuZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IGZpZWxkTmFtZSk7XHJcblxyXG4gICAgICAgICAgaWYgKHNvdXJjZUZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZEZpZWxkID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLm1lcmdlUmVjdXJzaXZlKHNvdXJjZUZpZWxkLCB0aGlzLmNvbmZpZ3VyYXRpb24uZmllbGRzW2ZpZWxkTmFtZV0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lcmdlZEZpZWxkcy5wdXNoKG1lcmdlZEZpZWxkKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGZpZWxkICR7ZmllbGROYW1lfSBkb2Vzbid0IGV4aXN0IGluIHRoZSBhbGwtZmllbGRzLWxpc3QuYCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2F2ZSh0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2VVcmwsIHRoaXMuY29uZmlndXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9ucyAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VjdGlvbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEhhbmRsZXMgYWxsIGZpZWxkcycgZGVmYXVsdCBzZXR0aW5ncy4qL1xyXG4gIHByaXZhdGUgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5oYW5kbGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBhIGRhdGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLlxyXG4gICAqIEl0IGlzIGJ1Z2d5IGlmIGRvbmUgZnJvbSB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIGxvYWRlZC5cclxuICAgKiBAcGFyYW0gRmllbGQgZmllbGQgVGhlIGZpZWxkIGNvbXBvbmVudC5cclxuICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRGVmYXVsdERhdGVUaW1lU2V0dGluZ3MoZmllbGQ6IEZpZWxkKSB7XHJcbiAgICAvLyBpbiBjYXNlIG9mIGRhdGV0aW1lIGZpZWxkLCBwYXJzZSB0aGUgdmFsdWVzIGZyb20gc3RyaW5nIHRvIGRhdGUgYW5kIGV4ZWN1dGUgYW55IGZ1bmN0aW9ucy5cclxuICAgIGlmIChmaWVsZC5taW5EYXRlKSB7XHJcbiAgICAgIGZpZWxkLm1pbkRhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLm1pbkRhdGUsIG5ldyBEYXRlKGZpZWxkLm1pbkRhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQubWF4RGF0ZSkge1xyXG4gICAgICBmaWVsZC5tYXhEYXRlVmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdChmaWVsZC5tYXhEYXRlLCBuZXcgRGF0ZShmaWVsZC5tYXhEYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLmRhdGEuZGF0ZVZhbHVlKSB7XHJcbiAgICAgIGZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UuZXZhbHVhdGVGdW5jdGlvbk9yRGVmYXVsdChmaWVsZC5kYXRhLmRhdGVWYWx1ZSwgbmV3IERhdGUoZmllbGQuZGF0YS5kYXRlVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuZGVmYXVsdERhdGUpIHtcclxuICAgICAgZmllbGQuZGVmYXVsdERhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLmRlZmF1bHREYXRlLCBuZXcgRGF0ZShmaWVsZC5kZWZhdWx0RGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5taW5EYXRlVmFsdWUgJiYgZmllbGQubWF4RGF0ZVZhbHVlKSB7XHJcbiAgICAgIGZpZWxkLnllYXJSYW5nZSA9IGZpZWxkLm1pbkRhdGVWYWx1ZS5nZXRGdWxsWWVhcigpICsgJzonICsgZmllbGQubWF4RGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBmb3JtIGRhdGEuKi9cclxuICBwcml2YXRlIGJpbmRGb3JtRGF0YSgpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLmdldCkge1xyXG4gICAgICBjb25zdCBlbmRwb2ludCA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5yZXBsYWNlVG9rZW5zKFxyXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5lbmRwb2ludHMuZ2V0LFxyXG4gICAgICAgIHRoaXMucm91dGUsXHJcbiAgICAgICAgdGhpcy5icmlkZ2VTZXJ2aWNlLmFkZGl0aW9uYWxQYXJhbWV0ZXJzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmh0dHBSZXF1ZXN0c1NlcnZpY2UuZ2V0KGVuZHBvaW50KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Rm9ybURhdGEocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm1EYXRhQm91bmQuZW1pdChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcbiAgICAgIH0sIGV4Y2VwdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignYmluZEZvcm1EYXRhOiAnLCBleGNlcHRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2hvd1Jlc3VsdE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5nZXRFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuZ2V0RXJyb3JNZXNzYWdlRGV0YWlscyksXHJcbiAgICAgICAgICAgIHR5cGU6IFN3YWxUeXBlcy5FcnJvcixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YUJvdW5kLmVtaXQobnVsbCk7XHJcblxyXG4gICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgYSBmb3JtIGZpZWxkIGNvbXBvbmVudC5cclxuICAgKiBAcGFyYW0gRmllbGRDb21wb25lbnQgZmllbGRDb21wb25lbnQgVGhlIGZpZWxkIGNvbXBvbmVudC5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUZvcm1GaWVsZENvbXBvbmVudChmaWVsZENvbXBvbmVudDogRmllbGRDb21wb25lbnQpOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICBsZXQgZmllbGRWYWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgaWYgKCFmaWVsZENvbXBvbmVudC5maWVsZC5oaWRkZW4pIHtcclxuICAgICAgZmllbGRWYWxpZGF0aW9uRXJyb3JzID0gZmllbGRDb21wb25lbnQudmFsaWRhdGUobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVHJpZ2dlcnMgYSBkeW5hbWljIGV2ZW50IGluIGNhc2UgaXQgaXMgZGVmaW5lZC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGV2ZW50VHlwZSBUaGUgdHlwZSBvZiB0aGUgZXZlbnQuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzIG9mIHRoZSBhY3Rpb24gY2F1c2luZyB0aGUgdHJpZ2dlci5cclxuICAgKiBAcGFyYW0gYW55IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBhY3Rpb24gY2F1c2luZyB0aGUgdHJpZ2dlci5cclxuICAqL1xyXG4gIHB1YmxpYyB0cmlnZ2VyRHluYW1pY0V2ZW50KGV2ZW50VHlwZTogc3RyaW5nLCBldmVudEFyZ3VtZW50czogYW55LCBzb3VyY2U6IGFueSkge1xyXG4gICAgaWYgKHNvdXJjZS5ldmVudFRyaWdnZXJzKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc291cmNlLmV2ZW50VHJpZ2dlcnNbZXZlbnRUeXBlXTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uID0gdGhpcy5wYXJlbnRDb21wb25lbnRbZXZlbnRdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24odGhpcy5wYXJlbnRDb21wb25lbnQsIHNvdXJjZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19