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
export class DynamicFormComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3JFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUN4RSxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUczRCxPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7QUFDL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFrTXJFLE1BQU07Ozs7Ozs7Ozs7OztJQTJGSixZQUNTLGVBQ0MscUJBQ0EscUJBQ0Esa0JBQ0Esa0JBQ0EsaUJBQ0EsbUJBQ0EsZUFDWSxLQUFxQjtRQVJsQyxrQkFBYSxHQUFiLGFBQWE7UUFDWix3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLHdCQUFtQixHQUFuQixtQkFBbUI7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZTtRQUNmLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsa0JBQWEsR0FBYixhQUFhO1FBQ0QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7Ozs7MkJBekZuQixJQUFJLFlBQVksRUFBTzs7Ozs2QkFHckIsSUFBSSxZQUFZLEVBQU87Ozs7K0JBR3JCLElBQUksWUFBWSxFQUFPOzs7OzhCQUd4QixJQUFJLFlBQVksRUFBTzs7OzttQ0FHbEIsSUFBSSxZQUFZLEVBQU87Ozs7a0NBR3hCLElBQUksWUFBWSxFQUFPOzs7OytCQXlETixJQUFJLEtBQUssRUFBa0I7Ozs7NkJBR3JDLElBQUksYUFBYSxFQUFFOzs7O3FDQUdqQixJQUFJO0tBWXZDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFMUQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBRXBFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7Ozs7O0lBS00sU0FBUyxDQUFDLElBQVk7UUFDM0IsR0FBRyxDQUFDLENBQUMsTUFBTSxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBYyxDQUFDO1FBRTlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7SUFNbkIsUUFBUSxDQUFDLElBQVk7O1FBRTFCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sd0JBQXdCLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9DO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDOztZQUVsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFFcEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUNqQyxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQ3hDLENBQUM7WUFFRixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUV4RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO2dCQUVuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQzt3QkFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7d0JBQzdGLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDOUYsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO3dCQUN2QixpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtxQkFDaEUsQ0FBQyxDQUFDO2lCQUNKO2FBQ0YsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBRTFFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7Z0JBRW5DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDO3dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDM0YsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDO3dCQUM1RixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7d0JBQ3JCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUNoRSxDQUFDLENBQUM7aUJBQ0o7YUFDRixDQUFDLENBQUM7U0FDSjs7Ozs7OztJQU1JLFVBQVUsQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7O1lBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVyQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBRXBCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDbkMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUN4QyxDQUFDO1lBRUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUU1RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO2dCQUVuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQzt3QkFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUM7d0JBQy9GLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQzt3QkFDaEcsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO3dCQUN2QixpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtxQkFDaEUsQ0FBQyxDQUFDO2lCQUNKO2FBQ0YsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFFekMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFFOUUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFFbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUM7d0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDO3dCQUM3RixJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUM7d0JBQzlGLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSzt3QkFDckIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7cUJBQ2hFLENBQUMsQ0FBQztpQkFDSjthQUNGLENBQUMsQ0FBQztTQUNKO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsMEJBQTBCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwRDs7Ozs7O0lBSUksWUFBWTtRQUNqQixHQUFHLENBQUMsQ0FBQyxNQUFNLGNBQWMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDakQ7Ozs7OztJQU1JLFdBQVc7UUFDaEIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7Ozs7OztJQU0zRixjQUFjO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdCOzs7Ozs7SUFNSSxhQUFhOztRQUNsQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsR0FBRyxDQUFDLENBQUMsTUFBTSxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDL0Q7U0FDRjtRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Ozs7OztJQU1ULFdBQVc7O1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFFMUIsR0FBRyxDQUFDLENBQUMsTUFBTSxjQUFjLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Ozs7O0lBT1AsWUFBWSxDQUFDLElBQVk7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7Ozs7Ozs7SUFPMUQsY0FBYyxDQUFDLE1BQVc7UUFDL0IsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxXQUFXO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUN4RSxDQUFDOzs7Ozs7O0lBTUcsV0FBVyxDQUFDLFFBQVE7UUFDekIsR0FBRyxDQUFDLENBQUMsTUFBTSxhQUFhLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O2dCQUN4QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFN0QsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtTQUNGOzs7Ozs7SUFJVyxRQUFROztZQUNwQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOztZQUcvQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVwRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7WUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxFQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLEVBQ3BDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFDdEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxFQUMzQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEVBQ3RDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsRUFDekMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxFQUN6QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEVBQ25DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsRUFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxFQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQ2xDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsRUFDdEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxFQUN4QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxFQUFFLEVBQzFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsRUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUNyQyxDQUFDO1lBRUYsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sY0FBYyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjtnQkFFRCxHQUFHLENBQUMsQ0FBQyxNQUFNLGNBQWMsSUFBSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztpQkFDcEM7YUFDRixDQUFDLENBQUM7Ozs7Ozs7SUFJUyxpQkFBaUI7O1lBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztZQUd2RixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Z0JBRWhDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztvQkFDbEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7O3dCQUVuRixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDOzt3QkFFN0UsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFFbkYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDakc7aUJBQ0Y7O2dCQUVELE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFcEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7aUJBQ3ZGO2dCQUVELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7O2dCQUdyRCxHQUFHLENBQUMsQ0FBQyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O3dCQUN4RCxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUM7d0JBRXJFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7OzRCQUNoQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUU1RyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7eUJBQ25EO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxTQUFTLHdDQUF3QyxDQUFDLENBQUM7eUJBQzlFO3FCQUNGO2lCQUNGO2dCQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoRjtZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7SUFJaEQscUJBQXFCO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sY0FBYyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2xELGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3hDOzs7Ozs7OztJQU9LLDZCQUE2QixDQUFDLEtBQVk7O1FBRWhELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDOUc7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzlHO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDMUg7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDMUg7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3Rjs7Ozs7O0lBSUssWUFBWTtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOztZQUNyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FDeEMsQ0FBQztZQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQzthQUNwQyxFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRTNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7Z0JBRW5DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDO3dCQUNILEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDMUYsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO3dCQUMzRixJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUs7d0JBQ3JCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3FCQUNoRSxDQUFDLENBQUM7aUJBQ0o7YUFDRixDQUFDLENBQUM7U0FDSjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztTQUNwQzs7Ozs7OztJQU9LLDBCQUEwQixDQUFDLGNBQThCOztRQUMvRCxJQUFJLHFCQUFxQixHQUFHLElBQUksS0FBSyxFQUFjLENBQUM7UUFFcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakMscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLENBQUMscUJBQXFCLENBQUM7Ozs7Ozs7OztJQVF4QixtQkFBbUIsQ0FBQyxTQUFpQixFQUFFLGNBQW1CLEVBQUUsTUFBVztRQUM1RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7WUFDekIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7WUFFOUMsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRS9ELEVBQUUsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztnQkFDL0IsMEJBQTBCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxRDtTQUNGOzs7O1lBbHRCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0xYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHltQkFBeW1CLENBQUM7Z0JBQ25uQixTQUFTLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDOztnQkFFM0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUF6TlEsYUFBYTtZQUpiLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBSmhCLGdCQUFnQjtZQUtoQixlQUFlO1lBUnRCLGlCQUFpQjtZQUdRLGFBQWE7WUFDL0IsY0FBYyx1QkFtVWxCLFFBQVE7OztxQ0FsR1YsS0FBSyxTQUFDLHdCQUF3Qjs4QkFHOUIsS0FBSyxTQUFDLGlCQUFpQjttQ0FHdkIsS0FBSyxTQUFDLHNCQUFzQjswQkFHNUIsTUFBTTs0QkFHTixNQUFNOzhCQUdOLE1BQU07NkJBR04sTUFBTTtrQ0FHTixNQUFNO2lDQUdOLE1BQU07K0JBR04sU0FBUyxTQUFDLFdBQVc7eUNBR3JCLFNBQVMsU0FBQywwQkFBMEI7bUNBR3BDLFlBQVksU0FBQyxtQkFBbUI7b0NBR2hDLFlBQVksU0FBQyxvQkFBb0I7c0NBR2pDLFlBQVksU0FBQyxzQkFBc0I7MkNBR25DLFlBQVksU0FBQywyQkFBMkI7c0NBR3hDLFlBQVksU0FBQyxzQkFBc0I7eUNBR25DLFlBQVksU0FBQyx5QkFBeUI7eUNBR3RDLFlBQVksU0FBQyx5QkFBeUI7bUNBR3RDLFlBQVksU0FBQyxtQkFBbUI7b0NBR2hDLFlBQVksU0FBQyxvQkFBb0I7a0NBR2pDLFlBQVksU0FBQyxrQkFBa0I7a0NBRy9CLFlBQVksU0FBQyxrQkFBa0I7c0NBRy9CLFlBQVksU0FBQyxzQkFBc0I7d0NBR25DLFlBQVksU0FBQyx3QkFBd0I7MENBR3JDLFlBQVksU0FBQywwQkFBMEI7dUNBR3ZDLFlBQVksU0FBQyx1QkFBdUI7b0NBR3BDLFlBQVksU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UsIFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaHR0cC1yZXF1ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlsaXRpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGVzLCBTd2FsVHlwZXMsIEZvcm1Nb2RlcywgUG9zdE1vZGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGV0aW1lRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvY2hlY2tib3gtZmllbGQvY2hlY2tib3gtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL211bHRpLXNlbGVjdC1maWVsZC9tdWx0aS1zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpcHNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9jaGlwcy1maWVsZC9jaGlwcy1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9lZGl0b3ItZmllbGQvZWRpdG9yLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc2tGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2xvY2F0aW9uLWZpZWxkL2xvY2F0aW9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9maWxlLXVwbG9hZC1maWVsZC9maWxlLXVwbG9hZC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC10ZW1wbGF0ZXMvcmVjYXB0Y2hhLWZpZWxkL3JlY2FwdGNoYS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYXRpbmdGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2ZpZWxkLXRlbXBsYXRlcy9yYXRpbmctZmllbGQvcmF0aW5nLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQtdGVtcGxhdGVzL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgUmVzcG9uc2VFdmVudEFyZ3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzcG9uc2UtZXZlbnQtYXJncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1keW5hbWljLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyXHJcbiAgICAgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICA8Zm9ybSBjbGFzcz1cImR5bmFtaWMtZm9ybS1mb3JtXCJcclxuICAgICAgICAjZj1cIm5nRm9ybVwiXHJcbiAgICAgICAgKG5nU3VibWl0KT1cInN1Ym1pdEZvcm0oZilcIlxyXG4gICAgICAgIFtoaWRkZW5dPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICBhdXRvY29tcGxldGU9XCJvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImR5bmFtaWMtZm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMgc2VjdGlvbnMtdG9wXCJcclxuICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTG9jYXRpb24gPT0gJ1RvcCcgfHwgY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90aCdcIj5cclxuICAgICAgICA8IS0tIHNlY3Rpb24gdGFicyAtLT5cclxuICAgICAgICA8bnR3LXRhYnMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnVGFicydcIj48L250dy10YWJzLXNlY3Rpb24+XHJcblxyXG4gICAgICAgIDwhLS0gbmV4dCBwcmV2aW91cyAtLT5cclxuICAgICAgICA8bnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbiAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5zZWN0aW9uTW9kZSA9PSAnTmV4dFByZXZpb3VzJ1wiPjwvbnR3LW5leHQtcHJldmlvdXMtc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gZm9ybSAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyIHJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMud3JhcHBlclwiXHJcbiAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgY29uZmlndXJhdGlvbj8ubWVyZ2VkRmllbGRzXCI+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbmZvIC0tPlxyXG4gICAgICAgICAgPG50dy1pbmZvLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbmZvJ1wiPlxyXG4gICAgICAgICAgPC9udHctaW5mby1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRleHQgb3IgbnVtYmVyIG9yIHBhc3N3b3JkIC0tPlxyXG4gICAgICAgICAgPG50dy1pbnB1dC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihmaWVsZC5maWVsZFR5cGU9PSd0ZXh0JyB8fCBmaWVsZC5maWVsZFR5cGU9PSdudW1iZXInIHx8IGZpZWxkLmZpZWxkVHlwZT09J3Bhc3N3b3JkJylcIj5cclxuICAgICAgICAgIDwvbnR3LWlucHV0LWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gZHJvcGRvd24gbGlzdCAtLT5cclxuICAgICAgICAgIDxudHctc2VsZWN0LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGRhdGV0aW1lIHBpY2tlciAtLT5cclxuICAgICAgICAgIDxudHctZGF0ZXRpbWUtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdkYXRldGltZSdcIj5cclxuICAgICAgICAgIDwvbnR3LWRhdGV0aW1lLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gaGlqcmkgZGF0ZXRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy1kYXRldGltZS1oaWpyaS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2RhdGV0aW1laGlqcmknXCI+XHJcbiAgICAgICAgICA8L250dy1kYXRldGltZS1oaWpyaS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHRpbWUgcGlja2VyIC0tPlxyXG4gICAgICAgICAgPG50dy10aW1lLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSd0aW1lJ1wiPlxyXG4gICAgICAgICAgPC9udHctdGltZS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoZWNrYm94IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LWNoZWNrYm94LWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0nY2hlY2tib3gnXCI+XHJcbiAgICAgICAgICA8L250dy1jaGVja2JveC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIHJhZGlvYnV0dG9uIGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhZGlvYnV0dG9uLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQuZmllbGRUeXBlPT0ncmFkaW9idXR0b24nXCI+XHJcbiAgICAgICAgICA8L250dy1yYWRpb2J1dHRvbi1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIG11bHRpU2VsZWN0IGxpc3QgLS0+XHJcbiAgICAgICAgICA8bnR3LW11bHRpLXNlbGVjdC1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtdWx0aXNlbGVjdCdcIj5cclxuICAgICAgICAgIDwvbnR3LW11bHRpLXNlbGVjdC1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGNoaXBzIC0tPlxyXG4gICAgICAgICAgPG50dy1jaGlwcy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2NoaXBzJ1wiPlxyXG4gICAgICAgICAgPC9udHctY2hpcHMtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBlZGl0b3IgLS0+XHJcbiAgICAgICAgICA8bnR3LWVkaXRvci1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdlZGl0b3InXCI+XHJcbiAgICAgICAgICA8L250dy1lZGl0b3ItZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBtYXNrIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXNrLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXNrJ1wiPlxyXG4gICAgICAgICAgPC9udHctbWFzay1maWVsZD5cclxuXHJcbiAgICAgICAgICA8IS0tIGxvY2F0aW9uIC0tPlxyXG4gICAgICAgICAgPG50dy1sb2NhdGlvbi1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLmZpZWxkVHlwZT09J2xvY2F0aW9uJ1wiPlxyXG4gICAgICAgICAgPC9udHctbG9jYXRpb24tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBmaWxlIHVwbG9hZCAtLT5cclxuICAgICAgICAgIDxudHctZmlsZS11cGxvYWQtZmllbGQgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdmaWxldXBsb2FkJ1wiPlxyXG4gICAgICAgICAgPC9udHctZmlsZS11cGxvYWQtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBSYXRpbmcgLS0+XHJcbiAgICAgICAgICA8bnR3LXJhdGluZy1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyYXRpbmcnXCI+XHJcbiAgICAgICAgICA8L250dy1yYXRpbmctZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSByZWNhcHRjaGEgLS0+XHJcbiAgICAgICAgICA8bnR3LXJlY2FwdGNoYS1maWVsZCBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdyZWNhcHRjaGEnXCI+XHJcbiAgICAgICAgICA8L250dy1yZWNhcHRjaGEtZmllbGQ+XHJcblxyXG4gICAgICAgICAgPCEtLSBpbWFnZSBjcm9wcGVyIC0tPlxyXG4gICAgICAgICAgPG50dy1pbWFnZS1jcm9wcGVyLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdpbWFnZWNyb3BwZXInXCI+XHJcbiAgICAgICAgICA8L250dy1pbWFnZS1jcm9wcGVyLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDwhLS0gbWFzdGVyZGV0YWlsIC0tPlxyXG4gICAgICAgICAgPG50dy1tYXN0ZXItZGV0YWlsLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5maWVsZFR5cGU9PSdtYXN0ZXJkZXRhaWwnXCI+XHJcbiAgICAgICAgICA8L250dy1tYXN0ZXItZGV0YWlsLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG5cclxuICAgICAgPCEtLSB2YWxpZGF0aW9uIHN1bW1hcnkgLS0+XHJcbiAgICAgIDxudHctdmFsaWRhdGlvbi1zdW1tYXJ5PjwvbnR3LXZhbGlkYXRpb24tc3VtbWFyeT5cclxuXHJcbiAgICAgIDwhLS0gYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8uY3NzQ2xhc3NcIlxyXG4gICAgICAgICAgIGRhdGEtaHRtbDJjYW52YXMtaWdub3JlPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWFpbi1idXR0b25zXCJcclxuICAgICAgICAgICAgICAqbmdJZj1cImNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uY2xlYXIpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LmNsZWFyPy5jc3NDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGVhckZvcm0oZilcIj5cclxuICAgICAgICAgICAge3tjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5jbGVhcj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zYXZlPy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmUpXCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnNhdmU/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVGb3JtKGYpXCI+XHJcbiAgICAgICAgICAgIHt7Y29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc2F2ZT8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJjb25maWd1cmF0aW9uPy5idXR0b25zPy5tYWluPy5zdWJtaXQ/Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBbdGl0bGVdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBbaGlkZGVuXT1cImlzQnV0dG9uSGlkZGVuKGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdClcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiY29uZmlndXJhdGlvbj8uYnV0dG9ucz8ubWFpbj8uc3VibWl0Py5jc3NDbGFzc1wiPlxyXG4gICAgICAgICAgICB7e2NvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/Lm1haW4/LnN1Ym1pdD8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFkZGl0aW9uYWwtYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGNvbmZpZ3VyYXRpb24/LmJ1dHRvbnM/LmFkZGl0aW9uYWxCdXR0b25zXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImJ1dHRvbj8ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0aXRsZV09XCJidXR0b24/LnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYnV0dG9uPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiaXNCdXR0b25IaWRkZW4oYnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzc109XCJidXR0b24/LmNzc0NsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJEeW5hbWljRXZlbnQoJ2NsaWNrJywgJGV2ZW50LCBidXR0b24pO1wiPlxyXG4gICAgICAgICAgICB7e2J1dHRvbj8ubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9ucyBzZWN0aW9ucy1ib3R0b21cIlxyXG4gICAgICAgICAgICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Mb2NhdGlvbiA9PSAnQm90dG9tJyB8fCBjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc2VjdGlvbkxvY2F0aW9uID09ICdCb3RoJ1wiPlxyXG4gICAgICAgIDwhLS0gc2VjdGlvbiB0YWJzIC0tPlxyXG4gICAgICAgIDxudHctdGFicy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdUYWJzJ1wiPjwvbnR3LXRhYnMtc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPCEtLSBuZXh0IHByZXZpb3VzIC0tPlxyXG4gICAgICAgIDxudHctbmV4dC1wcmV2aW91cy1zZWN0aW9uICpuZ0lmPVwiY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LnNlY3Rpb25Nb2RlID09ICdOZXh0UHJldmlvdXMnXCI+PC9udHctbmV4dC1wcmV2aW91cy1zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcblxyXG4gIDxudHctcHJvZ3Jlc3MtaW5kaWNhdG9yICpuZ0lmPVwic2hvd1Byb2dyZXNzSW5kaWNhdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3Bpbm5lclNvdXJjZVVybF09XCJjb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uc3Bpbm5lclNvdXJjZVVybFwiPjwvbnR3LXByb2dyZXNzLWluZGljYXRvcj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYC5mb3JtQnV0dG9uc3ttYXJnaW46MjBweCAwfWJvZHkuYXIgLm1haW4tYnV0dG9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH1ib2R5LmVuIC5tYWluLWJ1dHRvbnMgYnV0dG9ue21hcmdpbi1yaWdodDoxMHB4fWJvZHkuYXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnQ7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9Ym9keS5lbntkaXJlY3Rpb246bHRyIWltcG9ydGFudDt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fS51aS1kcm9wZG93bixpbnB1dC5mb3JtLWlucHV0LGlucHV0LnVpLWlucHV0dGV4dC51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdCxwLWRyb3Bkb3due3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDozNXB4fS5pbnB1dC1jb250YWluZXJ7bWFyZ2luLXRvcDoyNHB4fWxhYmVsLmZvcm0tbGFiZWx7Zm9udC13ZWlnaHQ6NzAwfXNwYW4ucmVxdWlyZWQtYXN0ZXJpc2t7Y29sb3I6cmVkfXAuZXJyb3IscC52YWxpZGF0aW9uLWVycm9ye2Rpc3BsYXk6YmxvY2s7Y29sb3I6cmVkfS5yZXN1bHQgaW1ne3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0uZm9ybS1kaXNwbGF5e2Rpc3BsYXk6YmxvY2t9dy1jbG9jayAqe2JveC1zaXppbmc6Y29udGVudC1ib3ghaW1wb3J0YW50fWBdLFxyXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGUsIEJyaWRnZVNlcnZpY2UsIFV0aWxpdGllc1NlcnZpY2VdLFxyXG4gIC8vIHByb3ZpZGUgdGhlIGJyaWRnZSBzZXJ2aWNlIGhlcmUgaW4gb3JkZXIgdG8gaGF2ZSBhIGRpZmZlcmVudCBpbnN0YW5jZSBwZXIgZm9ybSBpbnN0YW5jZS5cclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY29uZmlndXJhdGlvbiBzb3VyY2UgdXJsLiovXHJcbiAgQElucHV0KCdjb25maWd1cmF0aW9uU291cmNlVXJsJykgY29uZmlndXJhdGlvblNvdXJjZVVybDogc3RyaW5nO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBwYXJlbnQgY29tcG9uZW50LiovXHJcbiAgQElucHV0KCdwYXJlbnRDb21wb25lbnQnKSBwYXJlbnRDb21wb25lbnQ6IGFueTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLiovXHJcbiAgQElucHV0KCdhZGRpdGlvbmFsUGFyYW1ldGVycycpIGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBhbnk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uRm9ybUNsZWFyZWQgZXZlbnQuIFRyaWdnZXJlZCB3aGVuIHRoZSBmb3JtIGlzIGNsZWFyZWQuKi9cclxuICBAT3V0cHV0KCkgZm9ybUNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25Gb3JtRGF0YUJvdW5kIGV2ZW50LiBUcmlnZ2VyZWQgd2hlbiB0aGUgZm9ybSBpcyBkYXRhIGJvdW5kLiovXHJcbiAgQE91dHB1dCgpIGZvcm1EYXRhQm91bmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25CZWZvcmVGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc2F2ZWQuKi9cclxuICBAT3V0cHV0KCkgYmVmb3JlRm9ybVNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIG9uQWZ0ZXJGb3JtU2F2ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzYXZlZC4qL1xyXG4gIEBPdXRwdXQoKSBhZnRlckZvcm1TYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBvbkJlZm9yZUZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGZvcm0gaXMgc3VibWl0dGVkLiovXHJcbiAgQE91dHB1dCgpIGJlZm9yZUZvcm1TdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgb25BZnRlckZvcm1TdWJtaXR0ZWQgZXZlbnQuIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQuKi9cclxuICBAT3V0cHV0KCkgYWZ0ZXJGb3JtU3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuKi9cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSB2YWxpZGF0aW9uIHN1bW1hcnkgY29tcG9uZW50LiovXHJcbiAgQFZpZXdDaGlsZChWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCkgdmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQ6IFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGlucHV0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKElucHV0RmllbGRDb21wb25lbnQpIGlucHV0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8SW5wdXRGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2Ygc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFNlbGVjdEZpZWxkQ29tcG9uZW50KSBzZWxlY3RGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZGF0ZXRpbWUgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRGF0ZXRpbWVGaWVsZENvbXBvbmVudCkgZGF0ZXRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBkYXRldGltZSBoaWpyaSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQpIGRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGNoZWNrYm94IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKENoZWNrYm94RmllbGRDb21wb25lbnQpIGNoZWNrYm94RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8Q2hlY2tib3hGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgcmFkaW8gYnV0dG9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQpIHJhZGlvYnV0dG9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8UmFkaW9idXR0b25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgbXVsdGkgc2VsZWN0IGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQpIG11bHRpU2VsZWN0RmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgY2hpcHMgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ2hpcHNGaWVsZENvbXBvbmVudCkgY2hpcHNGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxDaGlwc0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBlZGl0b3IgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRWRpdG9yRmllbGRDb21wb25lbnQpIGVkaXRvckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVkaXRvckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBtYXNrIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKE1hc2tGaWVsZENvbXBvbmVudCkgbWFza0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PE1hc2tGaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgdGltZSBmaWVsZCBjb21wb25lbnRzLiovXHJcbiAgQFZpZXdDaGlsZHJlbihUaW1lRmllbGRDb21wb25lbnQpIHRpbWVGaWVsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxUaW1lRmllbGRDb21wb25lbnQ+O1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBsaXN0IG9mIGxvY2F0aW9uIGZpZWxkIGNvbXBvbmVudHMuKi9cclxuICBAVmlld0NoaWxkcmVuKExvY2F0aW9uRmllbGRDb21wb25lbnQpIGxvY2F0aW9uRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8TG9jYXRpb25GaWVsZENvbXBvbmVudD47XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGxpc3Qgb2YgZmlsZSB1cGxvYWQgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50KSBmaWxlVXBsb2FkRmllbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQpIGltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmVjYXB0Y2hhRmllbGRDb21wb25lbnQpIHJlY2FwdGNoYUZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiByZWNhcHRjaGEgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIEBWaWV3Q2hpbGRyZW4oUmF0aW5nRmllbGRDb21wb25lbnQpIHJhdGluZ0ZpZWxkQ29tcG9uZW50czogUXVlcnlMaXN0PFJhdGluZ0ZpZWxkQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbGlzdCBvZiBhbGwgZmllbGQgY29tcG9uZW50cy4qL1xyXG4gIHB1YmxpYyBmaWVsZENvbXBvbmVudHM6IEFycmF5PEZpZWxkQ29tcG9uZW50PiA9IG5ldyBBcnJheTxGaWVsZENvbXBvbmVudD4oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgbWFpbiBjb25maWd1cmF0aW9uIG9iamVjdC4qL1xyXG4gIHB1YmxpYyBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHNob3cgdGhlIHByb2dyZXNzIGluZGljYXRvci4qL1xyXG4gIHB1YmxpYyBzaG93UHJvZ3Jlc3NJbmRpY2F0b3I6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwUmVxdWVzdHNTZXJ2aWNlOiBIdHRwUmVxdWVzdHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsaXRpZXNTZXJ2aWNlOiBVdGlsaXRpZXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnQgPSB0aGlzLnBhcmVudENvbXBvbmVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnM7XHJcblxyXG4gICAgdGhpcy5iaW5kRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgY2xlYXJGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5jbGVhclZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICB0aGlzLmZvcm1DbGVhcmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU2F2ZXMgdGhlIGZvcm0uXHJcbiAgKiBAcGFyYW0gTmdGb3JtIGZvcm0gVGhlIGZvcm0uXHJcbiAgKi9cclxuICBwdWJsaWMgc2F2ZUZvcm0oZm9ybTogTmdGb3JtKSB7XHJcbiAgICAvLyB0cmlnZ2VyIHJlY2FwdGNoYSB2YWxpZGF0aW9uIGlmIGV4aXN0cy5cclxuICAgIGZvciAoY29uc3QgcmVjYXB0Y2hhRmllbGRDb21wb25lbnRzIG9mIHRoaXMucmVjYXB0Y2hhRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICByZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudmFsaWRhdGUobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGb3JtVmFsaWQoKSkge1xyXG4gICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFJlcXVlc3RCb2R5KCk7XHJcblxyXG4gICAgICB0aGlzLmJlZm9yZUZvcm1TYXZlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnNhdmUsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5wb3N0KGVuZHBvaW50LCB2YWx1ZXMpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFmdGVyRm9ybVNhdmVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZVN1Y2Nlc3NNZXNzYWdlVGl0bGUpLFxyXG4gICAgICAgICAgICBodG1sOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVTdWNjZXNzTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuU3VjY2VzcyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGV4Y2VwdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignc2F2ZUZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU2F2ZWQuZW1pdChuZXcgUmVzcG9uc2VFdmVudEFyZ3MoZmFsc2UsIGV4Y2VwdGlvbiwgdmFsdWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNhdmVFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2F2ZUVycm9yTWVzc2FnZURldGFpbHMpLFxyXG4gICAgICAgICAgICB0eXBlOiBTd2FsVHlwZXMuRXJyb3IsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gU3VibWl0cyB0aGUgZm9ybS5cclxuICAqIEBwYXJhbSBOZ0Zvcm0gZm9ybSBUaGUgZm9ybS5cclxuICAqL1xyXG4gIHB1YmxpYyBzdWJtaXRGb3JtKGZvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0oKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zvcm1WYWxpZCgpKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0UmVxdWVzdEJvZHkoKTtcclxuXHJcbiAgICAgIHRoaXMuYmVmb3JlRm9ybVN1Ym1pdHRlZC5lbWl0KHZhbHVlcyk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgY29uc3QgZW5kcG9pbnQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UucmVwbGFjZVRva2VucyhcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZW5kcG9pbnRzLnN1Ym1pdCxcclxuICAgICAgICB0aGlzLnJvdXRlLFxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5hZGRpdGlvbmFsUGFyYW1ldGVyc1xyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5odHRwUmVxdWVzdHNTZXJ2aWNlLnBvc3QoZW5kcG9pbnQsIHZhbHVlcykuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKHRydWUsIHJlc3BvbnNlLCB2YWx1ZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLnNob3dSZXN1bHRNZXNzYWdlKSB7XHJcbiAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0U3VjY2Vzc01lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLlN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0aGlzLmxhbmd1YWdlU2VydmljZS50cmFuc2xhdGlvbnMuYnV0dG9ucy5Pa1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBleGNlcHRpb24gPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3N1Ym1pdEZvcm06ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYWZ0ZXJGb3JtU3VibWl0dGVkLmVtaXQobmV3IFJlc3BvbnNlRXZlbnRBcmdzKGZhbHNlLCBleGNlcHRpb24sIHZhbHVlcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc0luZGljYXRvciA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc2hvd1Jlc3VsdE1lc3NhZ2UpIHtcclxuICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zdWJtaXRFcnJvck1lc3NhZ2VUaXRsZSksXHJcbiAgICAgICAgICAgIGh0bWw6IHRoaXMudHJhbnNsYXRlUGlwZS50cmFuc2Zvcm0odGhpcy5jb25maWd1cmF0aW9uLm5vdGlmaWNhdGlvbnMuc3VibWl0RXJyb3JNZXNzYWdlRGV0YWlscyksXHJcbiAgICAgICAgICAgIHR5cGU6IFN3YWxUeXBlcy5FcnJvcixcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnRyYW5zbGF0aW9ucy5idXR0b25zLk9rXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudC5zaG93U3VtbWFyeUFsZXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVGb3JtRmllbGRDb21wb25lbnQoZmllbGRDb21wb25lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBHZXRzIHdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZvcm0gaXMgdmFsaWQuXHJcbiAgKi9cclxuICBwdWJsaWMgaXNGb3JtVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzIHx8IHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgcmVxdWVzdCBib2R5LlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgcmVxdWVzdCBib2R5LlxyXG4gICovXHJcbiAgcHVibGljIGdldFJlcXVlc3RCb2R5KCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnBvc3RNb2RlID09PSBQb3N0TW9kZXMuRm9ybURhdGEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybURhdGEoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEZvcm1WYWx1ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZm9ybSBmaWVsZCB2YWx1ZXMuXHJcbiAgICogQHJldHVybiBhbnkgc291cmNlIFRoZSBmb3JtIHZhbHVlcy5cclxuICAqL1xyXG4gIHB1YmxpYyBnZXRGb3JtVmFsdWVzKCk6IGFueSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChmaWVsZENvbXBvbmVudC5maWVsZC5kYXRhKSB7XHJcbiAgICAgICAgdmFsdWVzW2ZpZWxkQ29tcG9uZW50LmZpZWxkLm5hbWVdID0gZmllbGRDb21wb25lbnQuZ2V0VmFsdWUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZvcm0gZmllbGQgdmFsdWVzLlxyXG4gICAqIEByZXR1cm4gYW55IHNvdXJjZSBUaGUgZm9ybSBkYXRhLlxyXG4gICovXHJcbiAgcHVibGljIGdldEZvcm1EYXRhKCk6IEZvcm1EYXRhIHtcclxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmZpZWxkQ29tcG9uZW50cykge1xyXG4gICAgICBkYXRhID0gZmllbGRDb21wb25lbnQuYXBwZW5kRm9ybURhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgYSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlIGJ5IGl0cyBuYW1lLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbmFtZSBUaGUgbmFtZS5cclxuICAgKiBAcmV0dXJuIEZpZWxkQ29tcG9uZW50IFRoZSBmaWVsZCBjb21wb25lbnQgcmVmZXJlbmNlLlxyXG4gICovXHJcbiAgcHVibGljIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBGaWVsZENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZENvbXBvbmVudHMuZmluZChmYyA9PiBmYy5maWVsZC5uYW1lID09PSBuYW1lKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIGJ1dHRvbiBzaG91bGQgYmUgaGlkZGVuLlxyXG4gICAqIEBwYXJhbSBhbnkgYnV0dG9uIFRoZSBidXR0b24uXHJcbiAgICogQHJldHVybiBGaWVsZENvbXBvbmVudCBXaGV0aGVyIHRoZSBidXR0b24gc2hvdWxkIGJlIGhpZGRlbi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc0J1dHRvbkhpZGRlbihidXR0b246IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChidXR0b24gJiYgYnV0dG9uLmhpZGRlbikgfHwgKHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiAmJlxyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24uaGlkZUJ1dHRvbnMgJiZcclxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmhpZGVCdXR0b25zLmluZGV4T2YoYnV0dG9uLm5hbWUpID4gLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gYW55IGZvcm1EYXRhIFRoZSBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgc2V0Rm9ybURhdGEoZm9ybURhdGEpIHtcclxuICAgIGZvciAoY29uc3QgcmVzcG9uc2VGaWVsZCBvZiBmb3JtRGF0YS5maWVsZHMpIHtcclxuICAgICAgaWYgKHJlc3BvbnNlRmllbGQudmFsdWUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZENvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHJlc3BvbnNlRmllbGQubmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChmaWVsZENvbXBvbmVudCkge1xyXG4gICAgICAgICAgZmllbGRDb21wb25lbnQudXBkYXRlVmFsdWUocmVzcG9uc2VGaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEJpbmRzIHRoZSBkeW5hbWljIGZvcm0uKi9cclxuICBwcml2YXRlIGFzeW5jIGJpbmRGb3JtKCkge1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQ29uZmlndXJhdGlvbigpO1xyXG5cclxuICAgIC8vIHdvcmthcm91bmQgZm9yIGRhdGV0aW1lIGZpZWxkcy5cclxuICAgIGNvbnN0IGRhdGVGaWVsZHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLmZpbHRlcihmID0+IGYuZmllbGRUeXBlID09PSBGaWVsZFR5cGVzLkRhdGVUaW1lKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGRhdGVGaWVsZHMpIHtcclxuICAgICAgdGhpcy5oYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5maWVsZENvbXBvbmVudHMgPSB0aGlzLmZpZWxkQ29tcG9uZW50cy5jb25jYXQoXHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnNlbGVjdEZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMuZGF0ZXRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmRhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoZWNrYm94RmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5yYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMubXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmNoaXBzRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5lZGl0b3JGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLm1hc2tGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnRpbWVGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5maWxlVXBsb2FkRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSxcclxuICAgICAgdGhpcy5pbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudHMudG9BcnJheSgpLFxyXG4gICAgICB0aGlzLnJlY2FwdGNoYUZpZWxkQ29tcG9uZW50cy50b0FycmF5KCksXHJcbiAgICAgIHRoaXMucmF0aW5nRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZENvbXBvbmVudCBvZiB0aGlzLmxvY2F0aW9uRmllbGRDb21wb25lbnRzLnRvQXJyYXkoKSkge1xyXG4gICAgICBmaWVsZENvbXBvbmVudC5hY3RpdmF0ZVNlYXJjaElucHV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLmZvcm1Nb2RlID09PSBGb3JtTW9kZXMuRGlzcGxheSkge1xyXG4gICAgICAgIHRoaXMuYmluZEZvcm1EYXRhKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGRDb21wb25lbnQgb2YgdGhpcy5yZWNhcHRjaGFGaWVsZENvbXBvbmVudHMudG9BcnJheSgpKSB7XHJcbiAgICAgICAgZmllbGRDb21wb25lbnQuc2V0Q2FwdGNoYUxhbmd1Z2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIExvYWRzIHRoZSBjb25maWd1cmF0aW9uIGFzIGEgZ2V0IHJlcXVlc3Qgb3IgZnJvbSBsb2NhbCBzdG9yYWdlLiovXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkQ29uZmlndXJhdGlvbigpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGF3YWl0IHRoaXMudXRpbGl0aWVzU2VydmljZS5sb2FkRmlsZSh0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2VVcmwpO1xyXG5cclxuICAgIC8vIGlmIGl0IGlzIGluIGxvY2FsLCByZWFkIHRoZSBhbHJlYWR5IG1lcmdlZCBmaWVsZHMuIG90aGVyd2lzZSwgbWVyZ2UgaXQgYW5kIHNhdmUgaW4gbG9jYWwgc3RvcmFnZS5cclxuICAgIGlmICghdGhpcy5jb25maWd1cmF0aW9uLmlzTG9jYWwpIHtcclxuICAgICAgLy8gbWVyZ2UgdGhlIGZvcm0ganNvbiBzY2hlbWEgZnJvbSB0aGUgZGlmZmVyZW50IHNvdXJjZSBwaWVjZXMuXHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3Muc291cmNlRm9ybVNjaGVtYXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jb25maWd1cmF0aW9uLnNldHRpbmdzLnNvdXJjZUZvcm1TY2hlbWFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc291cmNlRm9ybVNjaGVtYVVybCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zb3VyY2VGb3JtU2NoZW1hc1tpXTtcclxuXHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGb3JtU2NoZW1hID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHNvdXJjZUZvcm1TY2hlbWFVcmwpO1xyXG5cclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5tZXJnZVJlY3Vyc2l2ZShzb3VyY2VGb3JtU2NoZW1hLCB0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWxsRmllbGRzID0gYXdhaXQgdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UpO1xyXG5cclxuICAgICAgaWYgKCFhbGxGaWVsZHMuaXNMb2NhbCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5hbGxGaWVsZHNTb3VyY2UsIGFsbEZpZWxkcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMgPSBuZXcgQXJyYXk8RmllbGQ+KCk7XHJcblxyXG4gICAgICAvLyBtZXJnZSB0aGUgZmllbGQgcHJvcGVydGllcyB3aXRoIHRoZSBhbGwgZmllbGRzIGxpc3QuXHJcbiAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmZpZWxkcy5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zdCBzb3VyY2VGaWVsZCA9IGFsbEZpZWxkcy5maWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcclxuXHJcbiAgICAgICAgICBpZiAoc291cmNlRmllbGQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVyZ2VkRmllbGQgPSB0aGlzLnV0aWxpdGllc1NlcnZpY2UubWVyZ2VSZWN1cnNpdmUoc291cmNlRmllbGQsIHRoaXMuY29uZmlndXJhdGlvbi5maWVsZHNbZmllbGROYW1lXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVyZ2VkRmllbGRzLnB1c2gobWVyZ2VkRmllbGQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgZmllbGQgJHtmaWVsZE5hbWV9IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFsbC1maWVsZHMtbGlzdC5gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zYXZlKHRoaXMuY29uZmlndXJhdGlvblNvdXJjZVVybCwgdGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnNlY3Rpb25zICYmIHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50U2VjdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWN0aW9uc1swXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbjtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyBhbGwgZmllbGRzJyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkQ29tcG9uZW50IG9mIHRoaXMuZmllbGRDb21wb25lbnRzKSB7XHJcbiAgICAgIGZpZWxkQ29tcG9uZW50LmhhbmRsZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIGEgZGF0ZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuXHJcbiAgICogSXQgaXMgYnVnZ3kgaWYgZG9uZSBmcm9tIHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgaXMgbG9hZGVkLlxyXG4gICAqIEBwYXJhbSBGaWVsZCBmaWVsZCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0RGF0ZVRpbWVTZXR0aW5ncyhmaWVsZDogRmllbGQpIHtcclxuICAgIC8vIGluIGNhc2Ugb2YgZGF0ZXRpbWUgZmllbGQsIHBhcnNlIHRoZSB2YWx1ZXMgZnJvbSBzdHJpbmcgdG8gZGF0ZSBhbmQgZXhlY3V0ZSBhbnkgZnVuY3Rpb25zLlxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGUpIHtcclxuICAgICAgZmllbGQubWluRGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQubWluRGF0ZSwgbmV3IERhdGUoZmllbGQubWluRGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5tYXhEYXRlKSB7XHJcbiAgICAgIGZpZWxkLm1heERhdGVWYWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLm1heERhdGUsIG5ldyBEYXRlKGZpZWxkLm1heERhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmllbGQuZGF0YS5kYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMudXRpbGl0aWVzU2VydmljZS5ldmFsdWF0ZUZ1bmN0aW9uT3JEZWZhdWx0KGZpZWxkLmRhdGEuZGF0ZVZhbHVlLCBuZXcgRGF0ZShmaWVsZC5kYXRhLmRhdGVWYWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZC5kZWZhdWx0RGF0ZSkge1xyXG4gICAgICBmaWVsZC5kZWZhdWx0RGF0ZVZhbHVlID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLmV2YWx1YXRlRnVuY3Rpb25PckRlZmF1bHQoZmllbGQuZGVmYXVsdERhdGUsIG5ldyBEYXRlKGZpZWxkLmRlZmF1bHREYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpZWxkLm1pbkRhdGVWYWx1ZSAmJiBmaWVsZC5tYXhEYXRlVmFsdWUpIHtcclxuICAgICAgZmllbGQueWVhclJhbmdlID0gZmllbGQubWluRGF0ZVZhbHVlLmdldEZ1bGxZZWFyKCkgKyAnOicgKyBmaWVsZC5tYXhEYXRlVmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQmluZHMgdGhlIGZvcm0gZGF0YS4qL1xyXG4gIHByaXZhdGUgYmluZEZvcm1EYXRhKCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5lbmRwb2ludHMuZ2V0KSB7XHJcbiAgICAgIGNvbnN0IGVuZHBvaW50ID0gdGhpcy51dGlsaXRpZXNTZXJ2aWNlLnJlcGxhY2VUb2tlbnMoXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmVuZHBvaW50cy5nZXQsXHJcbiAgICAgICAgdGhpcy5yb3V0ZSxcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuYWRkaXRpb25hbFBhcmFtZXRlcnNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFJlcXVlc3RzU2VydmljZS5nZXQoZW5kcG9pbnQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRGb3JtRGF0YShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybURhdGFCb3VuZC5lbWl0KHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSBmYWxzZTtcclxuICAgICAgfSwgZXhjZXB0aW9uID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiaW5kRm9ybURhdGE6ICcsIGV4Y2VwdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5zaG93UmVzdWx0TWVzc2FnZSkge1xyXG4gICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKHRoaXMuY29uZmlndXJhdGlvbi5ub3RpZmljYXRpb25zLmdldEVycm9yTWVzc2FnZVRpdGxlKSxcclxuICAgICAgICAgICAgaHRtbDogdGhpcy50cmFuc2xhdGVQaXBlLnRyYW5zZm9ybSh0aGlzLmNvbmZpZ3VyYXRpb24ubm90aWZpY2F0aW9ucy5nZXRFcnJvck1lc3NhZ2VEZXRhaWxzKSxcclxuICAgICAgICAgICAgdHlwZTogU3dhbFR5cGVzLkVycm9yLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogdGhpcy5sYW5ndWFnZVNlcnZpY2UudHJhbnNsYXRpb25zLmJ1dHRvbnMuT2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhQm91bmQuZW1pdChudWxsKTtcclxuXHJcbiAgICAgIHRoaXMuc2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGZvcm0gZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEBwYXJhbSBGaWVsZENvbXBvbmVudCBmaWVsZENvbXBvbmVudCBUaGUgZmllbGQgY29tcG9uZW50LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlRm9ybUZpZWxkQ29tcG9uZW50KGZpZWxkQ29tcG9uZW50OiBGaWVsZENvbXBvbmVudCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGxldCBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICBpZiAoIWZpZWxkQ29tcG9uZW50LmZpZWxkLmhpZGRlbikge1xyXG4gICAgICBmaWVsZFZhbGlkYXRpb25FcnJvcnMgPSBmaWVsZENvbXBvbmVudC52YWxpZGF0ZShudWxsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBUcmlnZ2VycyBhIGR5bmFtaWMgZXZlbnQgaW4gY2FzZSBpdCBpcyBkZWZpbmVkLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZXZlbnRUeXBlIFRoZSB0eXBlIG9mIHRoZSBldmVudC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMgb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICAqIEBwYXJhbSBhbnkgc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIGFjdGlvbiBjYXVzaW5nIHRoZSB0cmlnZ2VyLlxyXG4gICovXHJcbiAgcHVibGljIHRyaWdnZXJEeW5hbWljRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcsIGV2ZW50QXJndW1lbnRzOiBhbnksIHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAoc291cmNlLmV2ZW50VHJpZ2dlcnMpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBzb3VyY2UuZXZlbnRUcmlnZ2Vyc1tldmVudFR5cGVdO1xyXG5cclxuICAgICAgY29uc3QgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24gPSB0aGlzLnBhcmVudENvbXBvbmVudFtldmVudF07XHJcblxyXG4gICAgICBpZiAocGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgICAgICBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbih0aGlzLnBhcmVudENvbXBvbmVudCwgc291cmNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=