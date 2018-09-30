import { FieldComponent } from '../field/field.component';
import { InputError } from '../../../models/input-error';
import { FileUpload } from 'primeng/fileupload';
export declare class FileUploadFieldComponent extends FieldComponent {
    /** @property The file upload control.*/
    fileUploadControl: FileUpload;
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
    /** @description Validates the form control and updates its validation errors list.
     * @param any eventArguments The event arguments.
     * @param boolean isSubmit Determines whether the validation is reached from form submission.
     * @return Array<InputError> The list of validation errors.
    */
    validate(eventArguments?: any, isSubmit?: boolean): Array<InputError>;
    /** @description Removes the file.
     * @param any file The file to remove.
    */
    removeFile(file: any): void;
}
