import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
export declare class TimeFieldComponent extends FieldComponent {
    bridgeService: BridgeService;
    private utilitiesService;
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    constructor(bridgeService: BridgeService, utilitiesService: UtilitiesService);
    /** @description Handles the field's default settings.*/
    handleDefaultSettings(): void;
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
    /** @description Sets a time picker field's value once it is changed.
     * @param any newValue The new value.
    */
    setTimePickerFieldValue(newValue: any): void;
}
