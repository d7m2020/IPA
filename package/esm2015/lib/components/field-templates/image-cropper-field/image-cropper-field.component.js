/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { FileUpload } from 'primeng/fileupload';
export class ImageCropperFieldComponent extends FieldComponent {
    constructor() {
        super(...arguments);
        /**
         * \@property The image file.
         */
        this.imageFile = new Image();
        /**
         * \@property Whether to validate for required.
         */
        this.validateForRequired = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initializeCropper();
    }
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    updateValue(newValue) {
        this.field.data.value = newValue.value;
        if (!this.isFormInDisplayMode()) {
            this.imageFile = new Image();
            this.imageFile.setAttribute('crossOrigin', 'anonymous');
            this.imageFile.src = newValue.value;
            // workaround as it is not working without it. no idea why :)
            setTimeout(() => { this.cropper.setImage(this.imageFile); }, 1);
        }
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.field.data) {
            this.field.data.value = '';
            this.fileUploadControl.clear();
            this.cropper.reset();
            this.imageFile = new Image();
            this.clearValidationErrors();
        }
    }
    /**
     * \@description Sets the cropped image value.
     * @return {?}
     */
    setValue() {
        if (this.croppedImageElement) {
            this.field.data.value = this.croppedImageElement.nativeElement.currentSrc;
        }
    }
    /**
     * \@description Sets the cropped image.
     * @return {?}
     */
    setCropperImage() {
        /** @type {?} */
        const selectedFile = this.fileUploadControl.files[0];
        if (selectedFile) {
            this.imageFile = new Image();
            /** @type {?} */
            const fileReader = new FileReader();
            // set as a temporary value for validation since the read is async.
            this.field.data.value = 'placeholder';
            fileReader.onloadend = (loadEvent) => {
                this.imageFile.src = loadEvent.target.result;
                this.cropper.setImage(this.imageFile);
                this.field.data.value = this.imageFile.src;
            };
            fileReader.readAsDataURL(selectedFile);
        }
    }
    /**
     * \@description Initializes the cropper component.
     * @return {?}
     */
    initializeCropper() {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = this.cropperSettings.croppedWidth = this.field.cropperSettings.width;
        this.cropperSettings.height = this.cropperSettings.croppedHeight = this.field.cropperSettings.height;
        this.cropperSettings.canvasWidth = this.field.cropperSettings.canvasWidth;
        this.cropperSettings.canvasHeight = this.field.cropperSettings.canvasHeight;
        this.cropperSettings.minWidth = this.field.cropperSettings.minWidth;
        this.cropperSettings.minHeight = this.field.cropperSettings.minHeight;
        this.cropperSettings.rounded = this.field.cropperSettings.rounded;
    }
}
ImageCropperFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-image-cropper-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field?.cssClasses?.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input -->
  <!-- upload control -->
  <p-fileUpload [id]="field.name"
                [name]="field.name"
                [class]="field.cssClasses.input"
                [ngClass]="{'invalid': isValidationShown()}"
                accept="image/*"
                mode="advanced"
                [showCancelButton]=false
                [showUploadButton]=false
                [chooseLabel]="field.buttons.chooseLabel | translate"
                [title]="field.tooltip | translate"
                [disabled]="field.disabled"
                invalidFileSizeMessageSummary="invalidFileSize"
                invalidFileSizeMessageDetail="invalidFileSize"
                invalidFileTypeMessageDetail="invalidFileType"
                invalidFileTypeMessageSummary="invalidFileType"
                customUpload=true
                *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                (onSelect)="setCropperImage();validate();"
                (onRemove)="clearValue();validate();">
  </p-fileUpload>

  <!-- cropper -->
  <img-cropper *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
               [hidden]="!imageFile.src"
               [image]="imageFile"
               [settings]="cropperSettings"
               (onCrop)="setValue()">
  </img-cropper>

  <!-- cropped image -->
  <span class="cropped-image"
        *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
        [hidden]=" !imageFile.image">
    <img #croppedImage
         *ngIf="imageFile.image"
         [src]="imageFile.image"
         [width]="cropperSettings.width"
         [height]="cropperSettings.height">
  </span>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">
    <img *ngIf="field.data.value"
         [src]="field.data.value"
         [width]="cropperSettings.width"
         [height]="cropperSettings.height">
  </span>

  <!-- validations -->
  <div *ngIf="isValidationShown()">
    <div *ngFor="let error of field?.validationErrors">
      <p [ngClass]="error.type | translate">
        {{error.message | translate}}
      </p>
    </div>
  </div>
</div>
`,
                styles: [`input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}p-fileupload{display:block}:host ::ng-deep img-cropper .ng2-imgcrop{border:1px solid #d5d5d5;padding:20px 0;background-color:#ebedf0;width:100%;margin:10px 0;display:block}.form-display img{border:1px solid #d5d5d5;background-color:#ebedf0;padding:10px}.cropped-image{width:100%;display:block;border:1px solid #d5d5d5;background-color:#ebedf0;margin:0 auto;text-align:center;padding:10px}`]
            },] },
];
ImageCropperFieldComponent.propDecorators = {
    cropper: [{ type: ViewChild, args: [ImageCropperComponent,] }],
    croppedImageElement: [{ type: ViewChild, args: ['croppedImage',] }],
    fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
};
if (false) {
    /**
     * \@property The image cropper component.
     * @type {?}
     */
    ImageCropperFieldComponent.prototype.cropper;
    /**
     * \@property
     * @type {?}
     */
    ImageCropperFieldComponent.prototype.croppedImageElement;
    /**
     * \@property The file upload control.
     * @type {?}
     */
    ImageCropperFieldComponent.prototype.fileUploadControl;
    /**
     * \@property The cropper settings.
     * @type {?}
     */
    ImageCropperFieldComponent.prototype.cropperSettings;
    /**
     * \@property The image file.
     * @type {?}
     */
    ImageCropperFieldComponent.prototype.imageFile;
    /**
     * \@property Whether to validate for required.
     * @type {?}
     */
    ImageCropperFieldComponent.prototype.validateForRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUErRWhELE1BQU0saUNBQWtDLFNBQVEsY0FBYzs7Ozs7O3lCQWNwQyxJQUFJLEtBQUssRUFBRTs7OzttQ0FHRyxJQUFJOzs7OztJQUUxQyxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7Ozs7OztJQUtNLFdBQVcsQ0FBQyxRQUFhO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7WUFHcEMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFP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QUMsT0FBTyxDQUFDOzs7O1lBdExyRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3RVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsaWRBQWlkLENBQUM7YUFDNWQ7OztzQkFHRSxTQUFTLFNBQUMscUJBQXFCO2tDQUcvQixTQUFTLFNBQUMsY0FBYztnQ0FHeEIsU0FBUyxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBDcm9wcGVyU2V0dGluZ3MgfSBmcm9tICduZzItaW1nLWNyb3BwZXInO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAncHJpbWVuZy9maWxldXBsb2FkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWltYWdlLWNyb3BwZXItZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQ/LmNzc0NsYXNzZXM/LmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQgLS0+XHJcbiAgPCEtLSB1cGxvYWQgY29udHJvbCAtLT5cclxuICA8cC1maWxlVXBsb2FkIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICBtb2RlPVwiYWR2YW5jZWRcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dDYW5jZWxCdXR0b25dPWZhbHNlXHJcbiAgICAgICAgICAgICAgICBbc2hvd1VwbG9hZEJ1dHRvbl09ZmFsc2VcclxuICAgICAgICAgICAgICAgIFtjaG9vc2VMYWJlbF09XCJmaWVsZC5idXR0b25zLmNob29zZUxhYmVsIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJmaWVsZC50b29sdGlwIHwgdHJhbnNsYXRlXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVNpemVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVNpemVNZXNzYWdlRGV0YWlsPVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlVHlwZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZVN1bW1hcnk9XCJpbnZhbGlkRmlsZVR5cGVcIlxyXG4gICAgICAgICAgICAgICAgY3VzdG9tVXBsb2FkPXRydWVcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgICAob25TZWxlY3QpPVwic2V0Q3JvcHBlckltYWdlKCk7dmFsaWRhdGUoKTtcIlxyXG4gICAgICAgICAgICAgICAgKG9uUmVtb3ZlKT1cImNsZWFyVmFsdWUoKTt2YWxpZGF0ZSgpO1wiPlxyXG4gIDwvcC1maWxlVXBsb2FkPlxyXG5cclxuICA8IS0tIGNyb3BwZXIgLS0+XHJcbiAgPGltZy1jcm9wcGVyICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgICAgICAgIFtoaWRkZW5dPVwiIWltYWdlRmlsZS5zcmNcIlxyXG4gICAgICAgICAgICAgICBbaW1hZ2VdPVwiaW1hZ2VGaWxlXCJcclxuICAgICAgICAgICAgICAgW3NldHRpbmdzXT1cImNyb3BwZXJTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgIChvbkNyb3ApPVwic2V0VmFsdWUoKVwiPlxyXG4gIDwvaW1nLWNyb3BwZXI+XHJcblxyXG4gIDwhLS0gY3JvcHBlZCBpbWFnZSAtLT5cclxuICA8c3BhbiBjbGFzcz1cImNyb3BwZWQtaW1hZ2VcIlxyXG4gICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgW2hpZGRlbl09XCIgIWltYWdlRmlsZS5pbWFnZVwiPlxyXG4gICAgPGltZyAjY3JvcHBlZEltYWdlXHJcbiAgICAgICAgICpuZ0lmPVwiaW1hZ2VGaWxlLmltYWdlXCJcclxuICAgICAgICAgW3NyY109XCJpbWFnZUZpbGUuaW1hZ2VcIlxyXG4gICAgICAgICBbd2lkdGhdPVwiY3JvcHBlclNldHRpbmdzLndpZHRoXCJcclxuICAgICAgICAgW2hlaWdodF09XCJjcm9wcGVyU2V0dGluZ3MuaGVpZ2h0XCI+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcbiAgICA8aW1nICpuZ0lmPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFtzcmNdPVwiZmllbGQuZGF0YS52YWx1ZVwiXHJcbiAgICAgICAgIFt3aWR0aF09XCJjcm9wcGVyU2V0dGluZ3Mud2lkdGhcIlxyXG4gICAgICAgICBbaGVpZ2h0XT1cImNyb3BwZXJTZXR0aW5ncy5oZWlnaHRcIj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gdmFsaWRhdGlvbnMgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImlzVmFsaWRhdGlvblNob3duKClcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGVycm9yIG9mIGZpZWxkPy52YWxpZGF0aW9uRXJyb3JzXCI+XHJcbiAgICAgIDxwIFtuZ0NsYXNzXT1cImVycm9yLnR5cGUgfCB0cmFuc2xhdGVcIj5cclxuICAgICAgICB7e2Vycm9yLm1lc3NhZ2UgfCB0cmFuc2xhdGV9fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGlucHV0LmZvcm0taW5wdXR7Ym9yZGVyOjFweCBzb2xpZCAjY2VkNGRhO2JvcmRlci1yYWRpdXM6LjI1cmVtO3BhZGRpbmc6NXB4fXAtZmlsZXVwbG9hZHtkaXNwbGF5OmJsb2NrfTpob3N0IDo6bmctZGVlcCBpbWctY3JvcHBlciAubmcyLWltZ2Nyb3B7Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O3BhZGRpbmc6MjBweCAwO2JhY2tncm91bmQtY29sb3I6I2ViZWRmMDt3aWR0aDoxMDAlO21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja30uZm9ybS1kaXNwbGF5IGltZ3tib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO3BhZGRpbmc6MTBweH0uY3JvcHBlZC1pbWFnZXt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O2JhY2tncm91bmQtY29sb3I6I2ViZWRmMDttYXJnaW46MCBhdXRvO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgaW1hZ2UgY3JvcHBlciBjb21wb25lbnQuKi9cclxuICBAVmlld0NoaWxkKEltYWdlQ3JvcHBlckNvbXBvbmVudCkgY3JvcHBlcjogSW1hZ2VDcm9wcGVyQ29tcG9uZW50O1xyXG5cclxuICAvKiogQHByb3BlcnR5ICovXHJcbiAgQFZpZXdDaGlsZCgnY3JvcHBlZEltYWdlJykgY3JvcHBlZEltYWdlRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgZmlsZSB1cGxvYWQgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoRmlsZVVwbG9hZCkgZmlsZVVwbG9hZENvbnRyb2w6IEZpbGVVcGxvYWQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGNyb3BwZXIgc2V0dGluZ3MuKi9cclxuICBwdWJsaWMgY3JvcHBlclNldHRpbmdzOiBDcm9wcGVyU2V0dGluZ3M7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGltYWdlIGZpbGUuKi9cclxuICBwdWJsaWMgaW1hZ2VGaWxlOiBhbnkgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBXaGV0aGVyIHRvIHZhbGlkYXRlIGZvciByZXF1aXJlZC4qL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZUZvclJlcXVpcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVDcm9wcGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFVwZGF0ZXMgdGhlIGZpZWxkJ3MgdmFsdWUuXHJcbiAgICogQHBhcmFtIGFueSBuZXdWYWx1ZSBUaGUgbmV3IGZpZWxkIHZhbHVlLlxyXG4gICovXHJcbiAgcHVibGljIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0Zvcm1JbkRpc3BsYXlNb2RlKCkpIHtcclxuICAgICAgdGhpcy5pbWFnZUZpbGUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlLnNldEF0dHJpYnV0ZSgnY3Jvc3NPcmlnaW4nLCAnYW5vbnltb3VzJyk7XHJcblxyXG4gICAgICB0aGlzLmltYWdlRmlsZS5zcmMgPSBuZXdWYWx1ZS52YWx1ZTtcclxuXHJcbiAgICAgIC8vIHdvcmthcm91bmQgYXMgaXQgaXMgbm90IHdvcmtpbmcgd2l0aG91dCBpdC4gbm8gaWRlYSB3aHkgOilcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY3JvcHBlci5zZXRJbWFnZSh0aGlzLmltYWdlRmlsZSk7IH0sIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBDbGVhcnMgdGhlIGZpZWxkJ3MgdmFsdWUuKi9cclxuICBwdWJsaWMgY2xlYXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLmZpZWxkLmRhdGEpIHtcclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmNsZWFyKCk7XHJcblxyXG4gICAgICB0aGlzLmNyb3BwZXIucmVzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjcm9wcGVkIGltYWdlIHZhbHVlLiovXHJcbiAgcHVibGljIHNldFZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuY3JvcHBlZEltYWdlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLmNyb3BwZWRJbWFnZUVsZW1lbnQubmF0aXZlRWxlbWVudC5jdXJyZW50U3JjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBjcm9wcGVkIGltYWdlLiovXHJcbiAgcHVibGljIHNldENyb3BwZXJJbWFnZSgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IHRoaXMuZmlsZVVwbG9hZENvbnRyb2wuZmlsZXNbMF07XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkRmlsZSkge1xyXG4gICAgICB0aGlzLmltYWdlRmlsZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAvLyBzZXQgYXMgYSB0ZW1wb3JhcnkgdmFsdWUgZm9yIHZhbGlkYXRpb24gc2luY2UgdGhlIHJlYWQgaXMgYXN5bmMuXHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9ICdwbGFjZWhvbGRlcic7XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZGVuZCA9IChsb2FkRXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlLnNyYyA9IGxvYWRFdmVudC50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICB0aGlzLmNyb3BwZXIuc2V0SW1hZ2UodGhpcy5pbWFnZUZpbGUpO1xyXG5cclxuICAgICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSB0aGlzLmltYWdlRmlsZS5zcmM7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWRGaWxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGNyb3BwZXIgY29tcG9uZW50LiovXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplQ3JvcHBlcigpIHtcclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzID0gbmV3IENyb3BwZXJTZXR0aW5ncygpO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLm5vRmlsZUlucHV0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy53aWR0aCA9IHRoaXMuY3JvcHBlclNldHRpbmdzLmNyb3BwZWRXaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLndpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLmhlaWdodCA9IHRoaXMuY3JvcHBlclNldHRpbmdzLmNyb3BwZWRIZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MuY2FudmFzV2lkdGggPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNXaWR0aDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MubWluV2lkdGggPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5taW5XaWR0aDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5taW5IZWlnaHQgPSB0aGlzLmZpZWxkLmNyb3BwZXJTZXR0aW5ncy5taW5IZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3Mucm91bmRlZCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLnJvdW5kZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==