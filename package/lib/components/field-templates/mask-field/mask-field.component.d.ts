import { FieldComponent } from '../field/field.component';
import { InputMask } from 'primeng/inputmask';
export declare class MaskFieldComponent extends FieldComponent {
    /** @property The validation summary component.*/
    inputMask: InputMask;
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    /** @property Whether to validate for pattern.*/
    validateForPattern: boolean;
    /** @description Updates the mask.
     * @param mask current The new mask.
    */
    updateMask(mask: any): void;
    /** @description Updates the value.
     * @param value current The new value.
    */
    updateMaskValue(value: any): void;
}
