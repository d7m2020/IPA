import { BoundableFieldComponent } from '../boundable-field/boundable-field.component';
export declare class SelectFieldComponent extends BoundableFieldComponent {
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
}
