import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
export declare class MultiSelectFieldComponent extends BoundableFieldComponent {
    /** @property Whether to validate for range.*/
    validateForRange: boolean;
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
}
