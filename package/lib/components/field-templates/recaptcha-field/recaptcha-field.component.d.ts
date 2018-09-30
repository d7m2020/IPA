import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { InputError } from '../../../models/input-error';
export declare class RecaptchaFieldComponent extends FieldComponent {
    bridgeService: BridgeService;
    private languageService;
    /** @property The recaptcha element.*/
    recaptchaElement: any;
    /** @property Whether the field is valid.*/
    private isValid;
    constructor(bridgeService: BridgeService, languageService: LanguageService);
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Validates the form control and updates its validation errors list.
     * @param any eventArguments The event arguments.
     * @param boolean isSubmit Determines whether the validation is reached from form submission.
     * @return Array<InputError> The list of validation errors.
    */
    validate(eventArguments?: any, isSubmit?: boolean): Array<InputError>;
    /** @description Sets the captcha language.*/
    setCaptchaLanguge(): void;
}
