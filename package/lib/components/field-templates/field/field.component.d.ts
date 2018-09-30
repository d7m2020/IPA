import { NgModel } from '@angular/forms';
import { BridgeService } from '../../../services/bridge.service';
import { Field } from '../../../models/field';
import { InputError } from '../../../models/input-error';
export declare class FieldComponent {
    bridgeService: BridgeService;
    /** @property The validation error class.*/
    protected static ValidationErrorClass: string;
    /** @property The related field.*/
    field: Field;
    /** @property The control.*/
    control: NgModel;
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    /** @property Whether to validate for pattern.*/
    validateForPattern: boolean;
    /** @property Whether to validate for range.*/
    validateForRange: boolean;
    private isPristine;
    constructor(bridgeService: BridgeService);
    /** @description Handles the field's default settings.*/
    handleDefaultSettings(): void;
    /** @description Updates the field's value.
     * @param any newValue The new field value.
    */
    updateValue(newValue: any): void;
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Gets the field's value.*/
    getValue(): any;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
    /** @description Triggers a dynamic event in case it is defined.
     * @param string eventType The type of the event.
     * @param any eventArguments The event arguments of the action causing the trigger.
     * @param any source The source of the action causing the trigger.
    */
    triggerDynamicEvent(eventType: string, eventArguments: any, source: any): void;
    /** @description Checks whether the field should be hidden.
     * @return boolean Whether the field should be hidden.
    */
    isFieldHidden(): boolean;
    /** @description Checks whether the validation should be shown.
     * @return boolean Whether the validation should be shown.
    */
    isValidationShown(): boolean;
    /** @description Checks whether the validation asterisk should be shown.
     * @return boolean Whether the validation asterisk should be shown.
    */
    isValidationAsteriskShown(): boolean;
    /** @description Validates the form control and updates its validation errors list.
     * @param any eventArguments The event arguments.
     * @param boolean isSubmit Determines whether the validation is reached from form submission.
     * @return Array<InputError> The list of validation errors.
    */
    validate(eventArguments?: any, isSubmit?: boolean): Array<InputError>;
    /** @description Adds an error to the validation errors list.
     * @param string message The validation message.
     * @param string type The validation error type.
    */
    addValidationError(message: string, type?: string): void;
    /** @description Clears the field's validation errors.*/
    clearValidationErrors(): void;
    /** @description Checks whether the field should be valiated.
     * @return boolean Whether the field should be valiated.
    */
    protected shouldValidate(): boolean;
    /** @description Prepares the field for validation and makes sure it isn't validated repeatedly.
     * @param boolean isSubmit Determines whether the validation is reached from form submission.
     * @return Array<InputError> The list of validation errors.
    */
    protected preValidate(isSubmit: boolean): Array<InputError>;
    /** @description Updates the validation summary.*/
    protected updateValidationSummary(): void;
    /** @description Validates a control for the required condition and updates its validation errors list.
     * @return Array<InputError> The list of validation errors.
    */
    protected validateRequiredCondition(): Array<InputError>;
    /** @description Validates a control for the pattern condition and updates its validation errors list.
      * @return Array<InputError> The list of validation errors.
    */
    protected validatePatternCondition(): Array<InputError>;
    /** @description Validates a control for the range condition and updates its validation errors list.
     * @return Array<InputError> The list of validation errors.
    */
    protected validateRangeCondition(): Array<InputError>;
    /** @description Gets whether the form is in display mode.
     * @return boolean Whether the form is in display mode.
    */
    protected isFormInDisplayMode(): boolean;
}
