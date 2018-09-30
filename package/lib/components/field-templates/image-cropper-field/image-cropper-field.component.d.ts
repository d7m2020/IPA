import { ElementRef, OnInit } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { FileUpload } from 'primeng/fileupload';
export declare class ImageCropperFieldComponent extends FieldComponent implements OnInit {
    /** @property The image cropper component.*/
    cropper: ImageCropperComponent;
    /** @property */
    croppedImageElement: ElementRef;
    /** @property The file upload control.*/
    fileUploadControl: FileUpload;
    /** @property The cropper settings.*/
    cropperSettings: CropperSettings;
    /** @property The image file.*/
    imageFile: any;
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    ngOnInit(): void;
    /** @description Updates the field's value.
     * @param any newValue The new field value.
    */
    updateValue(newValue: any): void;
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Sets the cropped image value.*/
    setValue(): void;
    /** @description Sets the cropped image.*/
    setCropperImage(): void;
    /** @description Initializes the cropper component.*/
    private initializeCropper();
}
