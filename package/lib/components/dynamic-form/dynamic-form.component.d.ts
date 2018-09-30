import { OnInit, EventEmitter, ElementRef, ChangeDetectorRef, QueryList } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from '../../services/http-requests.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { UtilitiesService } from '../../services/utilities.service';
import { LanguageService } from '../../services/language.service';
import { BridgeService } from '../../services/bridge.service';
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
import { FieldComponent } from '../field-templates/field/field.component';
import { Configuration } from '../../models/configuration';
export declare class DynamicFormComponent implements OnInit {
    bridgeService: BridgeService;
    private httpRequestsService;
    private localStorageService;
    private utilitiesService;
    private translateService;
    private languageService;
    private changeDetectorRef;
    private translatePipe;
    private route;
    /** @property The configuration source url.*/
    configurationSourceUrl: string;
    /** @property The parent component.*/
    parentComponent: any;
    /** @property The additional parameters.*/
    additionalParameters: any;
    /** @property The onFormCleared event. Triggered when the form is cleared.*/
    formCleared: EventEmitter<any>;
    /** @property The onFormDataBound event. Triggered when the form is data bound.*/
    formDataBound: EventEmitter<any>;
    /** @property The onBeforeFormSaved event. Triggered before the form is saved.*/
    beforeFormSaved: EventEmitter<any>;
    /** @property The onAfterFormSaved event. Triggered after the form is saved.*/
    afterFormSaved: EventEmitter<any>;
    /** @property The onBeforeFormSubmitted event. Triggered before the form is submitted.*/
    beforeFormSubmitted: EventEmitter<any>;
    /** @property The onAfterFormSubmitted event. Triggered after the form is submitted.*/
    afterFormSubmitted: EventEmitter<any>;
    /** @property The root container element.*/
    containerElement: ElementRef;
    /** @property The validation summary component.*/
    validationSummaryComponent: ValidationSummaryComponent;
    /** @property The list of input field components.*/
    inputFieldComponents: QueryList<InputFieldComponent>;
    /** @property The list of select field components.*/
    selectFieldComponents: QueryList<SelectFieldComponent>;
    /** @property The list of datetime field components.*/
    datetimeFieldComponents: QueryList<DatetimeFieldComponent>;
    /** @property The list of datetime hijri field components.*/
    datetimeHijriFieldComponents: QueryList<DatetimeHijriFieldComponent>;
    /** @property The list of checkbox field components.*/
    checkboxFieldComponents: QueryList<CheckboxFieldComponent>;
    /** @property The list of radio button field components.*/
    radiobuttonFieldComponents: QueryList<RadiobuttonFieldComponent>;
    /** @property The list of multi select field components.*/
    multiSelectFieldComponents: QueryList<MultiSelectFieldComponent>;
    /** @property The list of chips field components.*/
    chipsFieldComponents: QueryList<ChipsFieldComponent>;
    /** @property The list of editor field components.*/
    editorFieldComponents: QueryList<EditorFieldComponent>;
    /** @property The list of mask field components.*/
    maskFieldComponents: QueryList<MaskFieldComponent>;
    /** @property The list of time field components.*/
    timeFieldComponents: QueryList<TimeFieldComponent>;
    /** @property The list of location field components.*/
    locationFieldComponents: QueryList<LocationFieldComponent>;
    /** @property The list of file upload field components.*/
    fileUploadFieldComponents: QueryList<FileUploadFieldComponent>;
    /** @property The list of recaptcha field components.*/
    imageCropperFieldComponents: QueryList<ImageCropperFieldComponent>;
    /** @property The list of recaptcha field components.*/
    recaptchaFieldComponents: QueryList<RecaptchaFieldComponent>;
    /** @property The list of recaptcha field components.*/
    ratingFieldComponents: QueryList<RatingFieldComponent>;
    /** @property The list of all field components.*/
    fieldComponents: Array<FieldComponent>;
    /** @property The main configuration object.*/
    configuration: Configuration;
    /** @property Whether to show the progress indicator.*/
    showProgressIndicator: boolean;
    constructor(bridgeService: BridgeService, httpRequestsService: HttpRequestsService, localStorageService: LocalStorageService, utilitiesService: UtilitiesService, translateService: TranslateService, languageService: LanguageService, changeDetectorRef: ChangeDetectorRef, translatePipe: TranslatePipe, route: ActivatedRoute);
    ngOnInit(): void;
    /** @description Clears the form.
    * @param NgForm form The form.
    */
    clearForm(form: NgForm): void;
    /** @description Saves the form.
    * @param NgForm form The form.
    */
    saveForm(form: NgForm): void;
    /** @description Submits the form.
    * @param NgForm form The form.
    */
    submitForm(form: NgForm): void;
    /** @description Validates the form.*/
    validateForm(): void;
    /** @description Gets whether the form is valid.
     * @return boolean Whether the form is valid.
    */
    isFormValid(): boolean;
    /** @description Gets the request body.
     * @return any source The request body.
    */
    getRequestBody(): any;
    /** @description Gets the form field values.
     * @return any source The form values.
    */
    getFormValues(): any;
    /** @description Gets the form field values.
     * @return any source The form data.
    */
    getFormData(): FormData;
    /** @description Gets a field component reference by its name.
     * @param string name The name.
     * @return FieldComponent The field component reference.
    */
    getComponent(name: string): FieldComponent;
    /** @description Checks whether the button should be hidden.
     * @param any button The button.
     * @return FieldComponent Whether the button should be hidden.
    */
    isButtonHidden(button: any): boolean;
    /** @description Sets the form data.
     * @param any formData The form data.
    */
    setFormData(formData: any): void;
    /** @description Binds the dynamic form.*/
    private bindForm();
    /** @description Loads the configuration as a get request or from local storage.*/
    private loadConfiguration();
    /** @description Handles all fields' default settings.*/
    private handleDefaultSettings();
    /** @description Handles a date field's default settings.
     * It is buggy if done from the component after it is loaded.
     * @param Field field The field component.
    */
    private handleDefaultDateTimeSettings(field);
    /** @description Binds the form data.*/
    private bindFormData();
    /** @description Validates a form field component.
     * @param FieldComponent fieldComponent The field component.
     * @return Array<InputError> The list of validation errors.
    */
    private validateFormFieldComponent(fieldComponent);
    /** @description Triggers a dynamic event in case it is defined.
     * @param string eventType The type of the event.
     * @param any eventArguments The event arguments of the action causing the trigger.
     * @param any source The source of the action causing the trigger.
    */
    triggerDynamicEvent(eventType: string, eventArguments: any, source: any): void;
}
