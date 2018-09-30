/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BridgeService } from '../../../services/bridge.service';
import { Field } from '../../../models/field';
import { SectionModes, FormModes } from '../../../models/enums';
import { InputError } from '../../../models/input-error';
export class FieldComponent {
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
if (false) {
    /**
     * \@property The validation error class.
     * @type {?}
     */
    FieldComponent.ValidationErrorClass;
    /**
     * \@property The related field.
     * @type {?}
     */
    FieldComponent.prototype.field;
    /**
     * \@property The control.
     * @type {?}
     */
    FieldComponent.prototype.control;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    FieldComponent.prototype.validateForRequired;
    /**
     * \@property Whether to validate for pattern.
     * @type {?}
     */
    FieldComponent.prototype.validateForPattern;
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    FieldComponent.prototype.validateForRange;
    /** @type {?} */
    FieldComponent.prototype.isPristine;
    /** @type {?} */
    FieldComponent.prototype.bridgeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNekQsTUFBTTs7OztJQXNCSixZQUNTO1FBQUEsa0JBQWEsR0FBYixhQUFhOzs7O21DQVpnQixLQUFLOzs7O2tDQUdOLEtBQUs7Ozs7Z0NBR1AsS0FBSztLQU9uQzs7Ozs7SUFHRSxxQkFBcUI7Ozs7Ozs7SUFPckIsV0FBVyxDQUFDLFFBQWE7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7SUFJWCxVQUFVO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFFN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMs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QUtTLG1CQUFtQjtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDO0tBQ2pGOzs7OztzQ0E1UCtDLDRCQUE0Qjs7WUFON0UsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBUlEsYUFBYTs7O29CQWNuQixLQUFLLFNBQUMsT0FBTztzQkFHYixTQUFTLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcmlkZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnJpZGdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9maWVsZCc7XHJcbmltcG9ydCB7IFNlY3Rpb25Nb2RlcywgRm9ybU1vZGVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2VudW1zJztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1maWVsZCcsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgdmFsaWRhdGlvbiBlcnJvciBjbGFzcy4qL1xyXG4gIHByb3RlY3RlZCBzdGF0aWMgVmFsaWRhdGlvbkVycm9yQ2xhc3M6IHN0cmluZyA9ICdjc3NDbGFzc2VzLlZhbGlkYXRpb25FcnJvcic7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHJlbGF0ZWQgZmllbGQuKi9cclxuICBASW5wdXQoJ2ZpZWxkJykgZmllbGQ6IEZpZWxkO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBjb250cm9sLiovXHJcbiAgQFZpZXdDaGlsZChOZ01vZGVsKSBjb250cm9sOiBOZ01vZGVsO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciBwYXR0ZXJuLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUGF0dGVybjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJhbmdlLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLy8gc3RpbGwgdW51c2VkLiBhbHdheXMgZmFsc2UuXHJcbiAgcHJpdmF0ZSBpc1ByaXN0aW5lOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBicmlkZ2VTZXJ2aWNlOiBCcmlkZ2VTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHRoZSBmaWVsZCdzIGRlZmF1bHQgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgaGFuZGxlRGVmYXVsdFNldHRpbmdzKCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgZmllbGQncyB2YWx1ZS5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgZmllbGQgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbmV3VmFsdWUudmFsdWU7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbnVsbDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wucmVzZXQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBnZXRWYWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLmRhdGEudmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlKSB7XHJcbiAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSwgdGhpcy5maWVsZC5kYXRhLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVHJpZ2dlcnMgYSBkeW5hbWljIGV2ZW50IGluIGNhc2UgaXQgaXMgZGVmaW5lZC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGV2ZW50VHlwZSBUaGUgdHlwZSBvZiB0aGUgZXZlbnQuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzIG9mIHRoZSBhY3Rpb24gY2F1c2luZyB0aGUgdHJpZ2dlci5cclxuICAgKiBAcGFyYW0gYW55IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBhY3Rpb24gY2F1c2luZyB0aGUgdHJpZ2dlci5cclxuICAqL1xyXG4gIHB1YmxpYyB0cmlnZ2VyRHluYW1pY0V2ZW50KGV2ZW50VHlwZTogc3RyaW5nLCBldmVudEFyZ3VtZW50czogYW55LCBzb3VyY2U6IGFueSkge1xyXG4gICAgaWYgKHNvdXJjZS5ldmVudFRyaWdnZXJzKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gc291cmNlLmV2ZW50VHJpZ2dlcnNbZXZlbnRUeXBlXTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudEV2ZW50SGFuZGxlckZ1bmN0aW9uID0gdGhpcy5icmlkZ2VTZXJ2aWNlLnBhcmVudENvbXBvbmVudFtldmVudC5oYW5kbGVyXTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBwYXJhbWV0ZXJzID0gW2V2ZW50QXJndW1lbnRzXTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnBhcmFtZXRlcnMgJiYgZXZlbnQucGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycy5jb25jYXQoZXZlbnQucGFyYW1ldGVycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbih0aGlzLmJyaWRnZVNlcnZpY2UucGFyZW50Q29tcG9uZW50LCBzb3VyY2UsIHBhcmFtZXRlcnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSBmaWVsZCBzaG91bGQgYmUgaGlkZGVuLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSBmaWVsZCBzaG91bGQgYmUgaGlkZGVuLlxyXG4gICovXHJcbiAgcHVibGljIGlzRmllbGRIaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5oaWRkZW4gfHxcclxuICAgICAgKHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNldHRpbmdzLnNlY3Rpb25Nb2RlICE9PSBTZWN0aW9uTW9kZXMuTm9uZSAmJlxyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnNlY3Rpb25zLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICB0aGlzLmZpZWxkLnNlY3Rpb25JZCAhPT0gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uY3VycmVudFNlY3Rpb24uaWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBzaG91bGQgYmUgc2hvd24uXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIHZhbGlkYXRpb24gc2hvdWxkIGJlIHNob3duLlxyXG4gICovXHJcbiAgcHVibGljIGlzVmFsaWRhdGlvblNob3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzUHJpc3RpbmUgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBhc3RlcmlzayBzaG91bGQgYmUgc2hvd24uXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIHZhbGlkYXRpb24gYXN0ZXJpc2sgc2hvdWxkIGJlIHNob3duLlxyXG4gICovXHJcbiAgcHVibGljIGlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbiAmJiAodGhpcy5maWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkIHx8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4gPiAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBmb3JtIGNvbnRyb2wgYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwdWJsaWMgdmFsaWRhdGUoZXZlbnRBcmd1bWVudHM/OiBhbnksIGlzU3VibWl0PzogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMucHJlVmFsaWRhdGUoaXNTdWJtaXQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKCkpIHtcclxuICAgICAgaWYgKHRoaXMuZmllbGQuaGlkZGVuKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcnMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGb3JtSW5EaXNwbGF5TW9kZSgpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZvclJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSZXF1aXJlZENvbmRpdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9yUGF0dGVybikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUGF0dGVybkNvbmRpdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9yUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVJhbmdlQ29uZGl0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb25TdW1tYXJ5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQWRkcyBhbiBlcnJvciB0byB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIG1lc3NhZ2UgVGhlIHZhbGlkYXRpb24gbWVzc2FnZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIHR5cGUgVGhlIHZhbGlkYXRpb24gZXJyb3IgdHlwZS5cclxuICAqL1xyXG4gIHB1YmxpYyBhZGRWYWxpZGF0aW9uRXJyb3IobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcgPSBGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcykge1xyXG4gICAgaWYgKCF0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMpIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IodHlwZSwgbWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsaWRhdGlvbiBlcnJvcnMuKi9cclxuICBwdWJsaWMgY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCkge1xyXG4gICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENoZWNrcyB3aGV0aGVyIHRoZSBmaWVsZCBzaG91bGQgYmUgdmFsaWF0ZWQuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZpZWxkIHNob3VsZCBiZSB2YWxpYXRlZC5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBzaG91bGRWYWxpZGF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb24gJiYgKCF0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgfHwgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFByZXBhcmVzIHRoZSBmaWVsZCBmb3IgdmFsaWRhdGlvbiBhbmQgbWFrZXMgc3VyZSBpdCBpc24ndCB2YWxpZGF0ZWQgcmVwZWF0ZWRseS5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHByZVZhbGlkYXRlKGlzU3VibWl0OiBib29sZWFuKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgdGhpcy5pc1ByaXN0aW5lID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGlzU3VibWl0KSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIHZhbGlkYXRpb24gc3VtbWFyeS4qL1xyXG4gIHByb3RlY3RlZCB1cGRhdGVWYWxpZGF0aW9uU3VtbWFyeSgpIHtcclxuICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLm1lcmdlZEZpZWxkcykge1xyXG4gICAgICBpZiAoZmllbGQudmFsaWRhdGlvbkVycm9ycykge1xyXG4gICAgICAgIHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMgPSB0aGlzLmJyaWRnZVNlcnZpY2VcclxuICAgICAgICAgIC5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMuY29uY2F0KGZpZWxkLnZhbGlkYXRpb25FcnJvcnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGNvbnRyb2wgZm9yIHRoZSByZXF1aXJlZCBjb25kaXRpb24gYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVJlcXVpcmVkQ29uZGl0aW9uKCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmZpZWxkLmRhdGEgfHwgIXRoaXMuZmllbGQuZGF0YS52YWx1ZSB8fCB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZFRleHQpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyBhIGNvbnRyb2wgZm9yIHRoZSBwYXR0ZXJuIGNvbmRpdGlvbiBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHByb3RlY3RlZCB2YWxpZGF0ZVBhdHRlcm5Db25kaXRpb24oKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5wYXR0ZXJuICYmIHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcmVnRXggPSBuZXcgUmVnRXhwKHRoaXMuZmllbGQudmFsaWRhdGlvbi5wYXR0ZXJuKTtcclxuICAgICAgaWYgKCFyZWdFeC50ZXN0KHRoaXMuZmllbGQuZGF0YS52YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnBhdHRlcm5UZXh0KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgYSBjb250cm9sIGZvciB0aGUgcmFuZ2UgY29uZGl0aW9uIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVSYW5nZUNvbmRpdGlvbigpOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICBjb25zdCB2YWx1ZUxlbmd0aCA9IHRoaXMuZmllbGQuZGF0YSAmJiB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPyB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoIDogMDtcclxuXHJcbiAgICBpZiAoKHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4gJiYgdmFsdWVMZW5ndGggPCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluKSB8fFxyXG4gICAgICAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCAmJiB2YWx1ZUxlbmd0aCA+IHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXgpKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmFuZ2VUZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gR2V0cyB3aGV0aGVyIHRoZSBmb3JtIGlzIGluIGRpc3BsYXkgbW9kZS5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgZm9ybSBpcyBpbiBkaXNwbGF5IG1vZGUuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgaXNGb3JtSW5EaXNwbGF5TW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5mb3JtTW9kZSA9PT0gRm9ybU1vZGVzLkRpc3BsYXk7XHJcbiAgfVxyXG59XHJcbiJdfQ==