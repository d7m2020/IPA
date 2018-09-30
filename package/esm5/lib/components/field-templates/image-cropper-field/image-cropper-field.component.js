/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { FileUpload } from 'primeng/fileupload';
var ImageCropperFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ImageCropperFieldComponent, _super);
    function ImageCropperFieldComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * \@property The image file.
         */
        _this.imageFile = new Image();
        /**
         * \@property Whether to validate for required.
         */
        _this.validateForRequired = true;
        return _this;
    }
    /**
     * @return {?}
     */
    ImageCropperFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeCropper();
    };
    /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    ImageCropperFieldComponent.prototype.updateValue = /**
     * \@description Updates the field's value.
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        var _this = this;
        this.field.data.value = newValue.value;
        if (!this.isFormInDisplayMode()) {
            this.imageFile = new Image();
            this.imageFile.setAttribute('crossOrigin', 'anonymous');
            this.imageFile.src = newValue.value;
            // workaround as it is not working without it. no idea why :)
            setTimeout(function () { _this.cropper.setImage(_this.imageFile); }, 1);
        }
    };
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    ImageCropperFieldComponent.prototype.clearValue = /**
     * \@description Clears the field's value.
     * @return {?}
     */
    function () {
        if (this.field.data) {
            this.field.data.value = '';
            this.fileUploadControl.clear();
            this.cropper.reset();
            this.imageFile = new Image();
            this.clearValidationErrors();
        }
    };
    /**
     * \@description Sets the cropped image value.
     * @return {?}
     */
    ImageCropperFieldComponent.prototype.setValue = /**
     * \@description Sets the cropped image value.
     * @return {?}
     */
    function () {
        if (this.croppedImageElement) {
            this.field.data.value = this.croppedImageElement.nativeElement.currentSrc;
        }
    };
    /**
     * \@description Sets the cropped image.
     * @return {?}
     */
    ImageCropperFieldComponent.prototype.setCropperImage = /**
     * \@description Sets the cropped image.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedFile = this.fileUploadControl.files[0];
        if (selectedFile) {
            this.imageFile = new Image();
            /** @type {?} */
            var fileReader = new FileReader();
            // set as a temporary value for validation since the read is async.
            this.field.data.value = 'placeholder';
            fileReader.onloadend = function (loadEvent) {
                _this.imageFile.src = loadEvent.target.result;
                _this.cropper.setImage(_this.imageFile);
                _this.field.data.value = _this.imageFile.src;
            };
            fileReader.readAsDataURL(selectedFile);
        }
    };
    /**
     * \@description Initializes the cropper component.
     * @return {?}
     */
    ImageCropperFieldComponent.prototype.initializeCropper = /**
     * \@description Initializes the cropper component.
     * @return {?}
     */
    function () {
        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = this.cropperSettings.croppedWidth = this.field.cropperSettings.width;
        this.cropperSettings.height = this.cropperSettings.croppedHeight = this.field.cropperSettings.height;
        this.cropperSettings.canvasWidth = this.field.cropperSettings.canvasWidth;
        this.cropperSettings.canvasHeight = this.field.cropperSettings.canvasHeight;
        this.cropperSettings.minWidth = this.field.cropperSettings.minWidth;
        this.cropperSettings.minHeight = this.field.cropperSettings.minHeight;
        this.cropperSettings.rounded = this.field.cropperSettings.rounded;
    };
    ImageCropperFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-image-cropper-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field?.cssClasses?.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input -->\n  <!-- upload control -->\n  <p-fileUpload [id]=\"field.name\"\n                [name]=\"field.name\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                accept=\"image/*\"\n                mode=\"advanced\"\n                [showCancelButton]=false\n                [showUploadButton]=false\n                [chooseLabel]=\"field.buttons.chooseLabel | translate\"\n                [title]=\"field.tooltip | translate\"\n                [disabled]=\"field.disabled\"\n                invalidFileSizeMessageSummary=\"invalidFileSize\"\n                invalidFileSizeMessageDetail=\"invalidFileSize\"\n                invalidFileTypeMessageDetail=\"invalidFileType\"\n                invalidFileTypeMessageSummary=\"invalidFileType\"\n                customUpload=true\n                *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (onSelect)=\"setCropperImage();validate();\"\n                (onRemove)=\"clearValue();validate();\">\n  </p-fileUpload>\n\n  <!-- cropper -->\n  <img-cropper *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n               [hidden]=\"!imageFile.src\"\n               [image]=\"imageFile\"\n               [settings]=\"cropperSettings\"\n               (onCrop)=\"setValue()\">\n  </img-cropper>\n\n  <!-- cropped image -->\n  <span class=\"cropped-image\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n        [hidden]=\" !imageFile.image\">\n    <img #croppedImage\n         *ngIf=\"imageFile.image\"\n         [src]=\"imageFile.image\"\n         [width]=\"cropperSettings.width\"\n         [height]=\"cropperSettings.height\">\n  </span>\n\n  <!-- display -->\n  <span [class]=\"field.cssClasses.display\"\n        *ngIf=\"bridgeService?.configuration?.settings?.formMode == 'Display'\">\n    <img *ngIf=\"field.data.value\"\n         [src]=\"field.data.value\"\n         [width]=\"cropperSettings.width\"\n         [height]=\"cropperSettings.height\">\n  </span>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: ["input.form-input{border:1px solid #ced4da;border-radius:.25rem;padding:5px}p-fileupload{display:block}:host ::ng-deep img-cropper .ng2-imgcrop{border:1px solid #d5d5d5;padding:20px 0;background-color:#ebedf0;width:100%;margin:10px 0;display:block}.form-display img{border:1px solid #d5d5d5;background-color:#ebedf0;padding:10px}.cropped-image{width:100%;display:block;border:1px solid #d5d5d5;background-color:#ebedf0;margin:0 auto;text-align:center;padding:10px}"]
                },] },
    ];
    ImageCropperFieldComponent.propDecorators = {
        cropper: [{ type: ViewChild, args: [ImageCropperComponent,] }],
        croppedImageElement: [{ type: ViewChild, args: ['croppedImage',] }],
        fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
    };
    return ImageCropperFieldComponent;
}(FieldComponent));
export { ImageCropperFieldComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQStFQSxzREFBYzs7Ozs7OzBCQWNwQyxJQUFJLEtBQUssRUFBRTs7OztvQ0FHRyxJQUFJOzs7Ozs7SUFFMUMsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7Ozs7OztJQUtNLGdEQUFXOzs7OztjQUFDLFFBQWE7O1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs7WUFHcEMsVUFBVSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFR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QUMsT0FBTyxDQUFDOzs7Z0JBdExyRSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHlyRkF3RVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsaWRBQWlkLENBQUM7aUJBQzVkOzs7MEJBR0UsU0FBUyxTQUFDLHFCQUFxQjtzQ0FHL0IsU0FBUyxTQUFDLGNBQWM7b0NBR3hCLFNBQVMsU0FBQyxVQUFVOztxQ0ExRnZCO0VBa0ZnRCxjQUFjO1NBQWpELDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJDb21wb25lbnQsIENyb3BwZXJTZXR0aW5ncyB9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICdwcmltZW5nL2ZpbGV1cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctaW1hZ2UtY3JvcHBlci1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZD8uY3NzQ2xhc3Nlcz8ubGFiZWxcIlxyXG4gICAgICAgICBbZm9yXT1cImZpZWxkLm5hbWVcIj5cclxuICAgIHt7ZmllbGQubGFiZWwgfCB0cmFuc2xhdGV9fVxyXG4gICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZC1hc3Rlcmlza1wiXHJcbiAgICAgICAgICAqbmdJZj1cImlzVmFsaWRhdGlvbkFzdGVyaXNrU2hvd24oKVwiPio8L3NwYW4+XHJcbiAgPC9sYWJlbD5cclxuXHJcbiAgPCEtLSBpbnB1dCAtLT5cclxuICA8IS0tIHVwbG9hZCBjb250cm9sIC0tPlxyXG4gIDxwLWZpbGVVcGxvYWQgW2lkXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW25hbWVdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2ludmFsaWQnOiBpc1ZhbGlkYXRpb25TaG93bigpfVwiXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIG1vZGU9XCJhZHZhbmNlZFwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd0NhbmNlbEJ1dHRvbl09ZmFsc2VcclxuICAgICAgICAgICAgICAgIFtzaG93VXBsb2FkQnV0dG9uXT1mYWxzZVxyXG4gICAgICAgICAgICAgICAgW2Nob29zZUxhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2hvb3NlTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBjdXN0b21VcGxvYWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJzZXRDcm9wcGVySW1hZ2UoKTt2YWxpZGF0ZSgpO1wiXHJcbiAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwiY2xlYXJWYWx1ZSgpO3ZhbGlkYXRlKCk7XCI+XHJcbiAgPC9wLWZpbGVVcGxvYWQ+XHJcblxyXG4gIDwhLS0gY3JvcHBlciAtLT5cclxuICA8aW1nLWNyb3BwZXIgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgW2hpZGRlbl09XCIhaW1hZ2VGaWxlLnNyY1wiXHJcbiAgICAgICAgICAgICAgIFtpbWFnZV09XCJpbWFnZUZpbGVcIlxyXG4gICAgICAgICAgICAgICBbc2V0dGluZ3NdPVwiY3JvcHBlclNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgKG9uQ3JvcCk9XCJzZXRWYWx1ZSgpXCI+XHJcbiAgPC9pbWctY3JvcHBlcj5cclxuXHJcbiAgPCEtLSBjcm9wcGVkIGltYWdlIC0tPlxyXG4gIDxzcGFuIGNsYXNzPVwiY3JvcHBlZC1pbWFnZVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICBbaGlkZGVuXT1cIiAhaW1hZ2VGaWxlLmltYWdlXCI+XHJcbiAgICA8aW1nICNjcm9wcGVkSW1hZ2VcclxuICAgICAgICAgKm5nSWY9XCJpbWFnZUZpbGUuaW1hZ2VcIlxyXG4gICAgICAgICBbc3JjXT1cImltYWdlRmlsZS5pbWFnZVwiXHJcbiAgICAgICAgIFt3aWR0aF09XCJjcm9wcGVyU2V0dGluZ3Mud2lkdGhcIlxyXG4gICAgICAgICBbaGVpZ2h0XT1cImNyb3BwZXJTZXR0aW5ncy5oZWlnaHRcIj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8c3BhbiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5kaXNwbGF5XCJcclxuICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSA9PSAnRGlzcGxheSdcIj5cclxuICAgIDxpbWcgKm5nSWY9XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgW3NyY109XCJmaWVsZC5kYXRhLnZhbHVlXCJcclxuICAgICAgICAgW3dpZHRoXT1cImNyb3BwZXJTZXR0aW5ncy53aWR0aFwiXHJcbiAgICAgICAgIFtoZWlnaHRdPVwiY3JvcHBlclNldHRpbmdzLmhlaWdodFwiPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgaW5wdXQuZm9ybS1pbnB1dHtib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7Ym9yZGVyLXJhZGl1czouMjVyZW07cGFkZGluZzo1cHh9cC1maWxldXBsb2Fke2Rpc3BsYXk6YmxvY2t9Omhvc3QgOjpuZy1kZWVwIGltZy1jcm9wcGVyIC5uZzItaW1nY3JvcHtib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoyMHB4IDA7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO3dpZHRoOjEwMCU7bWFyZ2luOjEwcHggMDtkaXNwbGF5OmJsb2NrfS5mb3JtLWRpc3BsYXkgaW1ne2JvcmRlcjoxcHggc29saWQgI2Q1ZDVkNTtiYWNrZ3JvdW5kLWNvbG9yOiNlYmVkZjA7cGFkZGluZzoxMHB4fS5jcm9wcGVkLWltYWdle3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7YmFja2dyb3VuZC1jb2xvcjojZWJlZGYwO21hcmdpbjowIGF1dG87dGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzoxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSBpbWFnZSBjcm9wcGVyIGNvbXBvbmVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoSW1hZ2VDcm9wcGVyQ29tcG9uZW50KSBjcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XHJcblxyXG4gIC8qKiBAcHJvcGVydHkgKi9cclxuICBAVmlld0NoaWxkKCdjcm9wcGVkSW1hZ2UnKSBjcm9wcGVkSW1hZ2VFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSBmaWxlIHVwbG9hZCBjb250cm9sLiovXHJcbiAgQFZpZXdDaGlsZChGaWxlVXBsb2FkKSBmaWxlVXBsb2FkQ29udHJvbDogRmlsZVVwbG9hZDtcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgY3JvcHBlciBzZXR0aW5ncy4qL1xyXG4gIHB1YmxpYyBjcm9wcGVyU2V0dGluZ3M6IENyb3BwZXJTZXR0aW5ncztcclxuXHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgaW1hZ2UgZmlsZS4qL1xyXG4gIHB1YmxpYyBpbWFnZUZpbGU6IGFueSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFdoZXRoZXIgdG8gdmFsaWRhdGUgZm9yIHJlcXVpcmVkLiovXHJcbiAgcHVibGljIHZhbGlkYXRlRm9yUmVxdWlyZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUNyb3BwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVXBkYXRlcyB0aGUgZmllbGQncyB2YWx1ZS5cclxuICAgKiBAcGFyYW0gYW55IG5ld1ZhbHVlIFRoZSBuZXcgZmllbGQgdmFsdWUuXHJcbiAgKi9cclxuICBwdWJsaWMgdXBkYXRlVmFsdWUobmV3VmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gbmV3VmFsdWUudmFsdWU7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRm9ybUluRGlzcGxheU1vZGUoKSkge1xyXG4gICAgICB0aGlzLmltYWdlRmlsZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZUZpbGUuc2V0QXR0cmlidXRlKCdjcm9zc09yaWdpbicsICdhbm9ueW1vdXMnKTtcclxuXHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlLnNyYyA9IG5ld1ZhbHVlLnZhbHVlO1xyXG5cclxuICAgICAgLy8gd29ya2Fyb3VuZCBhcyBpdCBpcyBub3Qgd29ya2luZyB3aXRob3V0IGl0LiBubyBpZGVhIHdoeSA6KVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jcm9wcGVyLnNldEltYWdlKHRoaXMuaW1hZ2VGaWxlKTsgfSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmllbGQuZGF0YSkge1xyXG4gICAgICB0aGlzLmZpZWxkLmRhdGEudmFsdWUgPSAnJztcclxuXHJcbiAgICAgIHRoaXMuZmlsZVVwbG9hZENvbnRyb2wuY2xlYXIoKTtcclxuXHJcbiAgICAgIHRoaXMuY3JvcHBlci5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5pbWFnZUZpbGUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNyb3BwZWQgaW1hZ2UgdmFsdWUuKi9cclxuICBwdWJsaWMgc2V0VmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5jcm9wcGVkSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMuY3JvcHBlZEltYWdlRWxlbWVudC5uYXRpdmVFbGVtZW50LmN1cnJlbnRTcmM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGNyb3BwZWQgaW1hZ2UuKi9cclxuICBwdWJsaWMgc2V0Q3JvcHBlckltYWdlKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlc1swXTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VGaWxlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIC8vIHNldCBhcyBhIHRlbXBvcmFyeSB2YWx1ZSBmb3IgdmFsaWRhdGlvbiBzaW5jZSB0aGUgcmVhZCBpcyBhc3luYy5cclxuICAgICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlID0gJ3BsYWNlaG9sZGVyJztcclxuXHJcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkZW5kID0gKGxvYWRFdmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGUuc3JjID0gbG9hZEV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3JvcHBlci5zZXRJbWFnZSh0aGlzLmltYWdlRmlsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZSA9IHRoaXMuaW1hZ2VGaWxlLnNyYztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgY3JvcHBlciBjb21wb25lbnQuKi9cclxuICBwcml2YXRlIGluaXRpYWxpemVDcm9wcGVyKCkge1xyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MgPSBuZXcgQ3JvcHBlclNldHRpbmdzKCk7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3Mubm9GaWxlSW5wdXQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLndpZHRoID0gdGhpcy5jcm9wcGVyU2V0dGluZ3MuY3JvcHBlZFdpZHRoID0gdGhpcy5maWVsZC5jcm9wcGVyU2V0dGluZ3Mud2lkdGg7XHJcblxyXG4gICAgdGhpcy5jcm9wcGVyU2V0dGluZ3MuaGVpZ2h0ID0gdGhpcy5jcm9wcGVyU2V0dGluZ3MuY3JvcHBlZEhlaWdodCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLmhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5jYW52YXNXaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLmNhbnZhc1dpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLmNhbnZhc0hlaWdodDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5taW5XaWR0aCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLm1pbldpZHRoO1xyXG5cclxuICAgIHRoaXMuY3JvcHBlclNldHRpbmdzLm1pbkhlaWdodCA9IHRoaXMuZmllbGQuY3JvcHBlclNldHRpbmdzLm1pbkhlaWdodDtcclxuXHJcbiAgICB0aGlzLmNyb3BwZXJTZXR0aW5ncy5yb3VuZGVkID0gdGhpcy5maWVsZC5jcm9wcGVyU2V0dGluZ3Mucm91bmRlZDtcclxuICB9XHJcbn1cclxuIl19