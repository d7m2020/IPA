import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
export declare class DatetimeHijriFieldComponent extends FieldComponent {
    bridgeService: BridgeService;
    private utilitiesService;
    calendar: NgbInputDatepicker;
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    constructor(bridgeService: BridgeService, utilitiesService: UtilitiesService);
    /** @description Handles the field's default settings.*/
    handleDefaultSettings(): void;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
    /** @description Toggles the calendar.*/
    toggleCalendar(): void;
}
