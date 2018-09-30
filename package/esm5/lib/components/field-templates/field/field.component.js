/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BridgeService } from '../../../services/bridge.service';
import { Field } from '../../../models/field';
import { SectionModes, FormModes } from '../../../models/enums';
import { InputError } from '../../../models/input-error';
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
            for (var _a = tslib_1.__values(this.bridgeService.configuration.mergedFields), _b = _a.next(); !_b.done; _b = _a.next()) {
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
export { FieldComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmllbGQvZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztJQTRCdkQsd0JBQ1M7UUFBQSxrQkFBYSxHQUFiLGFBQWE7Ozs7bUNBWmdCLEtBQUs7Ozs7a0NBR04sS0FBSzs7OztnQ0FHUCxLQUFLO0tBT25DOzs7OztJQUdFLDhDQUFxQjs7Ozs7Ozs7Ozs7SUFPckIsb0NBQVc7Ozs7O2NBQUMsUUFBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUV2QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7OztJQUlYLG1DQUFVOzs7OztRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRTdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxD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R0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ3hIO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7S0FDcEM7SUFFRDs7TUFFRTs7Ozs7SUFDUSw0Q0FBbUI7Ozs7SUFBN0I7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDO0tBQ2pGOzs7OzBDQTVQK0MsNEJBQTRCOztnQkFON0UsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFSUSxhQUFhOzs7d0JBY25CLEtBQUssU0FBQyxPQUFPOzBCQUdiLFNBQVMsU0FBQyxPQUFPOzt5QkFuQnBCOztTQVdhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZmllbGQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uTW9kZXMsIEZvcm1Nb2RlcyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9lbnVtcyc7XHJcbmltcG9ydCB7IElucHV0RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW5wdXQtZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZmllbGQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHZhbGlkYXRpb24gZXJyb3IgY2xhc3MuKi9cclxuICBwcm90ZWN0ZWQgc3RhdGljIFZhbGlkYXRpb25FcnJvckNsYXNzOiBzdHJpbmcgPSAnY3NzQ2xhc3Nlcy5WYWxpZGF0aW9uRXJyb3InO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSByZWxhdGVkIGZpZWxkLiovXHJcbiAgQElucHV0KCdmaWVsZCcpIGZpZWxkOiBGaWVsZDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoTmdNb2RlbCkgY29udHJvbDogTmdNb2RlbDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcGF0dGVybi4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclBhdHRlcm46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByYW5nZS4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIHN0aWxsIHVudXNlZC4gYWx3YXlzIGZhbHNlLlxyXG4gIHByaXZhdGUgaXNQcmlzdGluZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYnJpZGdlU2VydmljZTogQnJpZGdlU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSGFuZGxlcyB0aGUgZmllbGQncyBkZWZhdWx0IHNldHRpbmdzLiovXHJcbiAgcHVibGljIGhhbmRsZURlZmF1bHRTZXR0aW5ncygpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGZpZWxkJ3MgdmFsdWUuXHJcbiAgICogQHBhcmFtIGFueSBuZXdWYWx1ZSBUaGUgbmV3IGZpZWxkIHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sLnJlc2V0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgZ2V0VmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC5kYXRhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWVsZC5kYXRhICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICBkYXRhLmFwcGVuZCh0aGlzLmZpZWxkLm5hbWUsIHRoaXMuZmllbGQuZGF0YS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFRyaWdnZXJzIGEgZHluYW1pYyBldmVudCBpbiBjYXNlIGl0IGlzIGRlZmluZWQuXHJcbiAgICogQHBhcmFtIHN0cmluZyBldmVudFR5cGUgVGhlIHR5cGUgb2YgdGhlIGV2ZW50LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cyBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgICogQHBhcmFtIGFueSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgYWN0aW9uIGNhdXNpbmcgdGhlIHRyaWdnZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgdHJpZ2dlckR5bmFtaWNFdmVudChldmVudFR5cGU6IHN0cmluZywgZXZlbnRBcmd1bWVudHM6IGFueSwgc291cmNlOiBhbnkpIHtcclxuICAgIGlmIChzb3VyY2UuZXZlbnRUcmlnZ2Vycykge1xyXG4gICAgICBjb25zdCBldmVudCA9IHNvdXJjZS5ldmVudFRyaWdnZXJzW2V2ZW50VHlwZV07XHJcblxyXG4gICAgICBjb25zdCBwYXJlbnRFdmVudEhhbmRsZXJGdW5jdGlvbiA9IHRoaXMuYnJpZGdlU2VydmljZS5wYXJlbnRDb21wb25lbnRbZXZlbnQuaGFuZGxlcl07XHJcblxyXG4gICAgICBpZiAocGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgcGFyYW1ldGVycyA9IFtldmVudEFyZ3VtZW50c107XHJcblxyXG4gICAgICAgIGlmIChldmVudC5wYXJhbWV0ZXJzICYmIGV2ZW50LnBhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMuY29uY2F0KGV2ZW50LnBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50RXZlbnRIYW5kbGVyRnVuY3Rpb24odGhpcy5icmlkZ2VTZXJ2aWNlLnBhcmVudENvbXBvbmVudCwgc291cmNlLCBwYXJhbWV0ZXJzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIGhpZGRlbi5cclxuICAgKiBAcmV0dXJuIGJvb2xlYW4gV2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIGhpZGRlbi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc0ZpZWxkSGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQuaGlkZGVuIHx8XHJcbiAgICAgICh0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZXR0aW5ncy5zZWN0aW9uTW9kZSAhPT0gU2VjdGlvbk1vZGVzLk5vbmUgJiZcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5zZWN0aW9ucy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgdGhpcy5maWVsZC5zZWN0aW9uSWQgIT09IHRoaXMuYnJpZGdlU2VydmljZS5jb25maWd1cmF0aW9uLmN1cnJlbnRTZWN0aW9uLmlkKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gc2hvdWxkIGJlIHNob3duLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSB2YWxpZGF0aW9uIHNob3VsZCBiZSBzaG93bi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc1ZhbGlkYXRpb25TaG93bigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc1ByaXN0aW5lICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gYXN0ZXJpc2sgc2hvdWxkIGJlIHNob3duLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSB2YWxpZGF0aW9uIGFzdGVyaXNrIHNob3VsZCBiZSBzaG93bi5cclxuICAqL1xyXG4gIHB1YmxpYyBpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb24gJiYgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5yZXF1aXJlZCB8fCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluID4gMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFZhbGlkYXRlcyB0aGUgZm9ybSBjb250cm9sIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEBwYXJhbSBhbnkgZXZlbnRBcmd1bWVudHMgVGhlIGV2ZW50IGFyZ3VtZW50cy5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBpc1N1Ym1pdCBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHZhbGlkYXRpb24gaXMgcmVhY2hlZCBmcm9tIGZvcm0gc3VibWlzc2lvbi5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHVibGljIHZhbGlkYXRlKGV2ZW50QXJndW1lbnRzPzogYW55LCBpc1N1Ym1pdD86IGJvb2xlYW4pOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICB0aGlzLnByZVZhbGlkYXRlKGlzU3VibWl0KTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmhpZGRlbikge1xyXG4gICAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVGb3JSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUmVxdWlyZWRDb25kaXRpb24oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZvclBhdHRlcm4pIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZVBhdHRlcm5Db25kaXRpb24oKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZvclJhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVSYW5nZUNvbmRpdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVWYWxpZGF0aW9uU3VtbWFyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZHMgYW4gZXJyb3IgdG8gdGhlIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIHN0cmluZyBtZXNzYWdlIFRoZSB2YWxpZGF0aW9uIG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIHN0cmluZyB0eXBlIFRoZSB2YWxpZGF0aW9uIGVycm9yIHR5cGUuXHJcbiAgKi9cclxuICBwdWJsaWMgYWRkVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2U6IHN0cmluZywgdHlwZTogc3RyaW5nID0gRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MpIHtcclxuICAgIGlmICghdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzKSB7XHJcbiAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKHR5cGUsIG1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbGlkYXRpb24gZXJyb3JzLiovXHJcbiAgcHVibGljIGNsZWFyVmFsaWRhdGlvbkVycm9ycygpIHtcclxuICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycyA9IG5ldyBBcnJheTxJbnB1dEVycm9yPigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDaGVja3Mgd2hldGhlciB0aGUgZmllbGQgc2hvdWxkIGJlIHZhbGlhdGVkLlxyXG4gICAqIEByZXR1cm4gYm9vbGVhbiBXaGV0aGVyIHRoZSBmaWVsZCBzaG91bGQgYmUgdmFsaWF0ZWQuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgc2hvdWxkVmFsaWRhdGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uICYmICghdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzIHx8IHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPT09IDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBQcmVwYXJlcyB0aGUgZmllbGQgZm9yIHZhbGlkYXRpb24gYW5kIG1ha2VzIHN1cmUgaXQgaXNuJ3QgdmFsaWRhdGVkIHJlcGVhdGVkbHkuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gaXNTdWJtaXQgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGlzIHJlYWNoZWQgZnJvbSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHByb3RlY3RlZCBwcmVWYWxpZGF0ZShpc1N1Ym1pdDogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMuaXNQcmlzdGluZSA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChpc1N1Ym1pdCkge1xyXG4gICAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMgPSBuZXcgQXJyYXk8SW5wdXRFcnJvcj4oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBVcGRhdGVzIHRoZSB2YWxpZGF0aW9uIHN1bW1hcnkuKi9cclxuICBwcm90ZWN0ZWQgdXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKSB7XHJcbiAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzID0gbmV3IEFycmF5PElucHV0RXJyb3I+KCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi5tZXJnZWRGaWVsZHMpIHtcclxuICAgICAgaWYgKGZpZWxkLnZhbGlkYXRpb25FcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmJyaWRnZVNlcnZpY2UuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzID0gdGhpcy5icmlkZ2VTZXJ2aWNlXHJcbiAgICAgICAgICAuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmNvbmNhdChmaWVsZC52YWxpZGF0aW9uRXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgYSBjb250cm9sIGZvciB0aGUgcmVxdWlyZWQgY29uZGl0aW9uIGFuZCB1cGRhdGVzIGl0cyB2YWxpZGF0aW9uIGVycm9ycyBsaXN0LlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVSZXF1aXJlZENvbmRpdGlvbigpOiBBcnJheTxJbnB1dEVycm9yPiB7XHJcbiAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLnJlcXVpcmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5maWVsZC5kYXRhIHx8ICF0aGlzLmZpZWxkLmRhdGEudmFsdWUgfHwgdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmVxdWlyZWRUZXh0KSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgYSBjb250cm9sIGZvciB0aGUgcGF0dGVybiBjb25kaXRpb24gYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwcm90ZWN0ZWQgdmFsaWRhdGVQYXR0ZXJuQ29uZGl0aW9uKCk6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucGF0dGVybiAmJiB0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlICYmIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLmZpZWxkLnZhbGlkYXRpb24ucGF0dGVybik7XHJcbiAgICAgIGlmICghcmVnRXgudGVzdCh0aGlzLmZpZWxkLmRhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5wYXR0ZXJuVGV4dCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIGEgY29udHJvbCBmb3IgdGhlIHJhbmdlIGNvbmRpdGlvbiBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcmV0dXJuIEFycmF5PElucHV0RXJyb3I+IFRoZSBsaXN0IG9mIHZhbGlkYXRpb24gZXJyb3JzLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIHZhbGlkYXRlUmFuZ2VDb25kaXRpb24oKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgY29uc3QgdmFsdWVMZW5ndGggPSB0aGlzLmZpZWxkLmRhdGEgJiYgdGhpcy5maWVsZC5kYXRhLnZhbHVlID8gdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgaWYgKCh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluICYmIHZhbHVlTGVuZ3RoIDwgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbikgfHxcclxuICAgICAgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXggJiYgdmFsdWVMZW5ndGggPiB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4KSkge1xyXG4gICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJhbmdlVGV4dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgd2hldGhlciB0aGUgZm9ybSBpcyBpbiBkaXNwbGF5IG1vZGUuXHJcbiAgICogQHJldHVybiBib29sZWFuIFdoZXRoZXIgdGhlIGZvcm0gaXMgaW4gZGlzcGxheSBtb2RlLlxyXG4gICovXHJcbiAgcHJvdGVjdGVkIGlzRm9ybUluRGlzcGxheU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5icmlkZ2VTZXJ2aWNlLmNvbmZpZ3VyYXRpb24uc2V0dGluZ3MuZm9ybU1vZGUgPT09IEZvcm1Nb2Rlcy5EaXNwbGF5O1xyXG4gIH1cclxufVxyXG4iXX0=