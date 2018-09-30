import { FieldComponent } from '../field/field.component';
export declare class ChipsFieldComponent extends FieldComponent {
    /** @property Whether to validate for range.*/
    validateForRange: boolean;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
}
