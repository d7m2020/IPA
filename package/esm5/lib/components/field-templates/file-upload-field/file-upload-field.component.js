/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { InputError } from '../../../models/input-error';
import { FileUpload } from 'primeng/fileupload';
var FileUploadFieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FileUploadFieldComponent, _super);
    function FileUploadFieldComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    FileUploadFieldComponent.prototype.clearValue = /**
     * \@description Clears the field's value.
     * @return {?}
     */
    function () {
        if (this.fileUploadControl) {
            this.fileUploadControl.clear();
        }
        /** @type {?} */
        var length = this.field.data.value.length;
        for (var i = 0; i < length; i++) {
            this.removeFile(this.field.data.value[i]);
        }
        this.clearValidationErrors();
    };
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    FileUploadFieldComponent.prototype.appendFormData = /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    function (data) {
        if (this.fileUploadControl.files) {
            try {
                for (var _a = tslib_1.__values(this.fileUploadControl.files), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var file = _b.value;
                    data.append(this.field.name, file);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return data;
        var e_1, _c;
    };
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    FileUploadFieldComponent.prototype.validate = /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    function (eventArguments, isSubmit) {
        this.preValidate(isSubmit);
        if (this.shouldValidate()) {
            /** @type {?} */
            var valueLength = 0;
            if (this.fileUploadControl) {
                valueLength = eventArguments === 'onRemove' ? this.fileUploadControl.files.length - 1 : this.fileUploadControl.files.length;
            }
            if (this.field.data.value) {
                valueLength += this.field.data.value.length;
            }
            if ((this.field.validation.min && valueLength < this.field.validation.min) ||
                (this.field.validation.max && valueLength > this.field.validation.max)) {
                this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.rangeText));
            }
            if (this.field.validation.maxFileSizeInBytes > 0 && this.fileUploadControl && this.fileUploadControl.msgs) {
                /** @type {?} */
                var invalidFileSizeMessage = this.fileUploadControl.msgs.find(function (m) { return m.summary === 'invalidFileSize'; });
                if (invalidFileSizeMessage) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileSizeText));
                }
                /** @type {?} */
                var invalidFileTypeMessage = this.fileUploadControl.msgs.find(function (m) { return m.summary === 'invalidFileType'; });
                if (invalidFileTypeMessage) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileTypeText));
                }
            }
            this.updateValidationSummary();
        }
        return this.field.validationErrors;
    };
    /**
     * \@description Removes the file.
     * @param {?} file
     * @return {?}
     */
    FileUploadFieldComponent.prototype.removeFile = /**
     * \@description Removes the file.
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.field.data.value.pop(file);
    };
    FileUploadFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-file-upload-field',
                    template: "<div [class]=\"field.cssClasses.container\"\n     [hidden]=\"isFieldHidden()\"\n     [attr.data-html2canvas-ignore]=\"field.html2CanvasIgnore\">\n\n  <!-- label -->\n  <label [class]=\"field.cssClasses.label\"\n         [for]=\"field.name\">\n    {{field.label | translate}}\n    <span class=\"required-asterisk\"\n          *ngIf=\"isValidationAsteriskShown()\">*</span>\n  </label>\n\n  <!-- input-->\n  <p-fileUpload [id]=\"field.name\"\n                [name]=\"field.name\"\n                [class]=\"field.cssClasses.input\"\n                [ngClass]=\"{'invalid': isValidationShown()}\"\n                [url]=\"field.data.url\"\n                [multiple]=\"field.multiple\"\n                [accept]=\"field.validation.accept\"\n                #input\n                [auto]=\"field.auto\"\n                [maxFileSize]=\"field.validation.maxFileSizeInBytes\"\n                [mode]=\"field.mode\"\n                [showCancelButton]=\"field.buttons.showCancelButton\"\n                [showUploadButton]=\"field.buttons.showUploadButton\"\n                [chooseLabel]=\"field.buttons.chooseLabel | translate\"\n                [uploadLabel]=\"field.buttons.uploadLabel | translate\"\n                [cancelLabel]=\"field.buttons.cancelLabel | translate\"\n                [title]=\"field.tooltip | translate\"\n                [disabled]=\"field.disabled\"\n                invalidFileSizeMessageSummary=\"invalidFileSize\"\n                invalidFileSizeMessageDetail=\"invalidFileSize\"\n                invalidFileTypeMessageDetail=\"invalidFileType\"\n                invalidFileTypeMessageSummary=\"invalidFileType\"\n                customUpload=true\n                *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n                (onSelect)=\"validate('onSelect');\"\n                (onRemove)=\"validate('onRemove');\"\n                (onClear)=\"validate('onClear');\">\n  </p-fileUpload>\n\n  <!-- display -->\n  <div class=\"upload-file-viewer\"\n       *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'New' && field?.data?.value?.length > 0\">\n    <div class=\"upload-file-item\"\n         *ngFor=\"let file of field.data.value\">\n      <a [href]=\"file.url\"\n         [download]=\"file.fileName\"\n         target=\"_blank\"\n         class=\"upload-file-anchor\">\n        <span>\n          <i class=\"fa fa-file\"></i>\n        </span>\n        <span class=\"upload-file-title\">{{file.fileName}}</span>\n      </a>\n\n      <a href=\"javascript:;\"\n         (click)=\"removeFile(file);validate('onRemoveFile');\"\n         *ngIf=\"bridgeService?.configuration?.settings?.formMode != 'Display'\"\n         class=\"trash-icon-style\">\n        <span>\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </span>\n      </a>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n\n  <!-- validations -->\n  <div *ngIf=\"isValidationShown()\">\n    <div *ngFor=\"let error of field?.validationErrors\">\n      <p [ngClass]=\"error.type | translate\">\n        {{error.message | translate}}\n      </p>\n    </div>\n  </div>\n</div>\n",
                    styles: [":host ::ng-deep p-fileupload .ui-messages-error{display:none!important}:host ::ng-deep .ui-fileupload{margin-bottom:8px}.upload-file-viewer{border:1px solid #d5d5d5;padding:10px}.upload-file-viewer .upload-file-item{border:1px solid #d5d5d5;padding:10px;background:linear-gradient(to bottom,#f6f7f9 0,#ebedf0 100%);margin-bottom:10px}.upload-file-title{padding:0 15px}a.upload-file-anchor{line-height:2}.upload-file-viewer div:last-child{margin-bottom:0}a.trash-icon-style{padding:6px 11px;border-radius:6px;font-size:12px;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s}a.trash-icon-style:hover{border:1px solid #1f89ce;background:#1f89ce}body.ar :host ::ng-deep a.trash-icon-style{float:left}body.en :host ::ng-deep a.trash-icon-style{float:right}"]
                },] },
    ];
    FileUploadFieldComponent.propDecorators = {
        fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
    };
    return FileUploadFieldComponent;
}(FieldComponent));
export { FileUploadFieldComponent };
if (false) {
    /**
     * \@property The file upload control.
     * @type {?}
     */
    FileUploadFieldComponent.prototype.fileUploadControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBcUZGLG9EQUFjOzs7Ozs7OztJQUtuRCw2Q0FBVTs7Ozs7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQzs7UUFFRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBRTVDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7Ozs7O0lBT3hCLGlEQUFjOzs7OztjQUFDLElBQWM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7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LENBQUMsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztpQkFDbEk7YUFDRjtZQUVELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7Ozs7Ozs7SUFNOUIsNkNBQVU7Ozs7O2NBQUMsSUFBUztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Z0JBbktuQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLDhqR0E4RVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsc3hCQUFzeEIsQ0FBQztpQkFDanlCOzs7b0NBR0UsU0FBUyxTQUFDLFVBQVU7O21DQTFGdkI7RUF3RjhDLGNBQWM7U0FBL0Msd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2lucHV0LWVycm9yJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1maWxlLXVwbG9hZC1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmNvbnRhaW5lclwiXHJcbiAgICAgW2hpZGRlbl09XCJpc0ZpZWxkSGlkZGVuKClcIlxyXG4gICAgIFthdHRyLmRhdGEtaHRtbDJjYW52YXMtaWdub3JlXT1cImZpZWxkLmh0bWwyQ2FudmFzSWdub3JlXCI+XHJcblxyXG4gIDwhLS0gbGFiZWwgLS0+XHJcbiAgPGxhYmVsIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmxhYmVsXCJcclxuICAgICAgICAgW2Zvcl09XCJmaWVsZC5uYW1lXCI+XHJcbiAgICB7e2ZpZWxkLmxhYmVsIHwgdHJhbnNsYXRlfX1cclxuICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWQtYXN0ZXJpc2tcIlxyXG4gICAgICAgICAgKm5nSWY9XCJpc1ZhbGlkYXRpb25Bc3Rlcmlza1Nob3duKClcIj4qPC9zcGFuPlxyXG4gIDwvbGFiZWw+XHJcblxyXG4gIDwhLS0gaW5wdXQtLT5cclxuICA8cC1maWxlVXBsb2FkIFtpZF09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cImZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpbnZhbGlkJzogaXNWYWxpZGF0aW9uU2hvd24oKX1cIlxyXG4gICAgICAgICAgICAgICAgW3VybF09XCJmaWVsZC5kYXRhLnVybFwiXHJcbiAgICAgICAgICAgICAgICBbbXVsdGlwbGVdPVwiZmllbGQubXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgW2FjY2VwdF09XCJmaWVsZC52YWxpZGF0aW9uLmFjY2VwdFwiXHJcbiAgICAgICAgICAgICAgICAjaW5wdXRcclxuICAgICAgICAgICAgICAgIFthdXRvXT1cImZpZWxkLmF1dG9cIlxyXG4gICAgICAgICAgICAgICAgW21heEZpbGVTaXplXT1cImZpZWxkLnZhbGlkYXRpb24ubWF4RmlsZVNpemVJbkJ5dGVzXCJcclxuICAgICAgICAgICAgICAgIFttb2RlXT1cImZpZWxkLm1vZGVcIlxyXG4gICAgICAgICAgICAgICAgW3Nob3dDYW5jZWxCdXR0b25dPVwiZmllbGQuYnV0dG9ucy5zaG93Q2FuY2VsQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIFtzaG93VXBsb2FkQnV0dG9uXT1cImZpZWxkLmJ1dHRvbnMuc2hvd1VwbG9hZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBbY2hvb3NlTGFiZWxdPVwiZmllbGQuYnV0dG9ucy5jaG9vc2VMYWJlbCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdXBsb2FkTGFiZWxdPVwiZmllbGQuYnV0dG9ucy51cGxvYWRMYWJlbCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbY2FuY2VsTGFiZWxdPVwiZmllbGQuYnV0dG9ucy5jYW5jZWxMYWJlbCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVdPVwiZmllbGQudG9vbHRpcCB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZmllbGQuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVTaXplTWVzc2FnZVN1bW1hcnk9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVTaXplTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlU2l6ZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlRGV0YWlsPVwiaW52YWxpZEZpbGVUeXBlXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlVHlwZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVUeXBlXCJcclxuICAgICAgICAgICAgICAgIGN1c3RvbVVwbG9hZD10cnVlXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnRGlzcGxheSdcIlxyXG4gICAgICAgICAgICAgICAgKG9uU2VsZWN0KT1cInZhbGlkYXRlKCdvblNlbGVjdCcpO1wiXHJcbiAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwidmFsaWRhdGUoJ29uUmVtb3ZlJyk7XCJcclxuICAgICAgICAgICAgICAgIChvbkNsZWFyKT1cInZhbGlkYXRlKCdvbkNsZWFyJyk7XCI+XHJcbiAgPC9wLWZpbGVVcGxvYWQ+XHJcblxyXG4gIDwhLS0gZGlzcGxheSAtLT5cclxuICA8ZGl2IGNsYXNzPVwidXBsb2FkLWZpbGUtdmlld2VyXCJcclxuICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdOZXcnICYmIGZpZWxkPy5kYXRhPy52YWx1ZT8ubGVuZ3RoID4gMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInVwbG9hZC1maWxlLWl0ZW1cIlxyXG4gICAgICAgICAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWVsZC5kYXRhLnZhbHVlXCI+XHJcbiAgICAgIDxhIFtocmVmXT1cImZpbGUudXJsXCJcclxuICAgICAgICAgW2Rvd25sb2FkXT1cImZpbGUuZmlsZU5hbWVcIlxyXG4gICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICBjbGFzcz1cInVwbG9hZC1maWxlLWFuY2hvclwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1maWxlXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInVwbG9hZC1maWxlLXRpdGxlXCI+e3tmaWxlLmZpbGVOYW1lfX08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgICAoY2xpY2spPVwicmVtb3ZlRmlsZShmaWxlKTt2YWxpZGF0ZSgnb25SZW1vdmVGaWxlJyk7XCJcclxuICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgY2xhc3M9XCJ0cmFzaC1pY29uLXN0eWxlXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHZhbGlkYXRpb25zIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJpc1ZhbGlkYXRpb25TaG93bigpXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlcnJvciBvZiBmaWVsZD8udmFsaWRhdGlvbkVycm9yc1wiPlxyXG4gICAgICA8cCBbbmdDbGFzc109XCJlcnJvci50eXBlIHwgdHJhbnNsYXRlXCI+XHJcbiAgICAgICAge3tlcnJvci5tZXNzYWdlIHwgdHJhbnNsYXRlfX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2A6aG9zdCA6Om5nLWRlZXAgcC1maWxldXBsb2FkIC51aS1tZXNzYWdlcy1lcnJvcntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fTpob3N0IDo6bmctZGVlcCAudWktZmlsZXVwbG9hZHttYXJnaW4tYm90dG9tOjhweH0udXBsb2FkLWZpbGUtdmlld2Vye2JvcmRlcjoxcHggc29saWQgI2Q1ZDVkNTtwYWRkaW5nOjEwcHh9LnVwbG9hZC1maWxlLXZpZXdlciAudXBsb2FkLWZpbGUtaXRlbXtib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoxMHB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwjZjZmN2Y5IDAsI2ViZWRmMCAxMDAlKTttYXJnaW4tYm90dG9tOjEwcHh9LnVwbG9hZC1maWxlLXRpdGxle3BhZGRpbmc6MCAxNXB4fWEudXBsb2FkLWZpbGUtYW5jaG9ye2xpbmUtaGVpZ2h0OjJ9LnVwbG9hZC1maWxlLXZpZXdlciBkaXY6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9YS50cmFzaC1pY29uLXN0eWxle3BhZGRpbmc6NnB4IDExcHg7Ym9yZGVyLXJhZGl1czo2cHg7Zm9udC1zaXplOjEycHg7Ym9yZGVyOjFweCBzb2xpZCAjMjM5OWU1O2NvbG9yOiNmZmY7YmFja2dyb3VuZDojMjM5OWU1O3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMnN9YS50cmFzaC1pY29uLXN0eWxlOmhvdmVye2JvcmRlcjoxcHggc29saWQgIzFmODljZTtiYWNrZ3JvdW5kOiMxZjg5Y2V9Ym9keS5hciA6aG9zdCA6Om5nLWRlZXAgYS50cmFzaC1pY29uLXN0eWxle2Zsb2F0OmxlZnR9Ym9keS5lbiA6aG9zdCA6Om5nLWRlZXAgYS50cmFzaC1pY29uLXN0eWxle2Zsb2F0OnJpZ2h0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQgZXh0ZW5kcyBGaWVsZENvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgZmlsZSB1cGxvYWQgY29udHJvbC4qL1xyXG4gIEBWaWV3Q2hpbGQoRmlsZVVwbG9hZCkgZmlsZVVwbG9hZENvbnRyb2w6IEZpbGVVcGxvYWQ7XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gQ2xlYXJzIHRoZSBmaWVsZCdzIHZhbHVlLiovXHJcbiAgcHVibGljIGNsZWFyVmFsdWUoKSB7XHJcbiAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbCkge1xyXG4gICAgICB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5maWVsZC5kYXRhLnZhbHVlLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRmlsZSh0aGlzLmZpZWxkLmRhdGEudmFsdWVbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3JzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFwcGVuZHMgdGhlIGZvcm0gZGF0YS5cclxuICAgKiBAcGFyYW0gRm9ybURhdGEgZGF0YSBUaGUgZGF0YS5cclxuICAgKiBAcmV0dXJuIEZvcm1EYXRhIFRoZSB1cGRhdGVkIGZvcm0gZGF0YS5cclxuICAqL1xyXG4gIHB1YmxpYyBhcHBlbmRGb3JtRGF0YShkYXRhOiBGb3JtRGF0YSk6IEZvcm1EYXRhIHtcclxuICAgIGlmICh0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzKSB7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQodGhpcy5maWVsZC5uYW1lLCBmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGZvcm0gY29udHJvbCBhbmQgdXBkYXRlcyBpdHMgdmFsaWRhdGlvbiBlcnJvcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gYW55IGV2ZW50QXJndW1lbnRzIFRoZSBldmVudCBhcmd1bWVudHMuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gaXNTdWJtaXQgRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB2YWxpZGF0aW9uIGlzIHJlYWNoZWQgZnJvbSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICogQHJldHVybiBBcnJheTxJbnB1dEVycm9yPiBUaGUgbGlzdCBvZiB2YWxpZGF0aW9uIGVycm9ycy5cclxuICAqL1xyXG4gIHB1YmxpYyB2YWxpZGF0ZShldmVudEFyZ3VtZW50cz86IGFueSwgaXNTdWJtaXQ/OiBib29sZWFuKTogQXJyYXk8SW5wdXRFcnJvcj4ge1xyXG4gICAgdGhpcy5wcmVWYWxpZGF0ZShpc1N1Ym1pdCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvdWxkVmFsaWRhdGUoKSkge1xyXG4gICAgICBsZXQgdmFsdWVMZW5ndGggPSAwO1xyXG4gICAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbCkge1xyXG4gICAgICAgIHZhbHVlTGVuZ3RoID0gZXZlbnRBcmd1bWVudHMgPT09ICdvblJlbW92ZScgPyB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzLmxlbmd0aCAtIDEgOiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLmZpbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZmllbGQuZGF0YS52YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlTGVuZ3RoICs9IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgodGhpcy5maWVsZC52YWxpZGF0aW9uLm1pbiAmJiB2YWx1ZUxlbmd0aCA8IHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4pIHx8XHJcbiAgICAgICAgKHRoaXMuZmllbGQudmFsaWRhdGlvbi5tYXggJiYgdmFsdWVMZW5ndGggPiB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4KSkge1xyXG4gICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ucmFuZ2VUZXh0KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4RmlsZVNpemVJbkJ5dGVzID4gMCAmJiB0aGlzLmZpbGVVcGxvYWRDb250cm9sICYmIHRoaXMuZmlsZVVwbG9hZENvbnRyb2wubXNncykge1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRGaWxlU2l6ZU1lc3NhZ2UgPSB0aGlzLmZpbGVVcGxvYWRDb250cm9sLm1zZ3MuZmluZChtID0+IG0uc3VtbWFyeSA9PT0gJ2ludmFsaWRGaWxlU2l6ZScpO1xyXG5cclxuICAgICAgICBpZiAoaW52YWxpZEZpbGVTaXplTWVzc2FnZSkge1xyXG4gICAgICAgICAgdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzLnB1c2gobmV3IElucHV0RXJyb3IoRmllbGRDb21wb25lbnQuVmFsaWRhdGlvbkVycm9yQ2xhc3MsIHRoaXMuZmllbGQudmFsaWRhdGlvbi5pbnZhbGlkRmlsZVNpemVUZXh0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5tc2dzLmZpbmQobSA9PiBtLnN1bW1hcnkgPT09ICdpbnZhbGlkRmlsZVR5cGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGludmFsaWRGaWxlVHlwZU1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24uaW52YWxpZEZpbGVUeXBlVGV4dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVWYWxpZGF0aW9uU3VtbWFyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFJlbW92ZXMgdGhlIGZpbGUuXHJcbiAgICogQHBhcmFtIGFueSBmaWxlIFRoZSBmaWxlIHRvIHJlbW92ZS5cclxuICAqL1xyXG4gIHB1YmxpYyByZW1vdmVGaWxlKGZpbGU6IGFueSkge1xyXG4gICAgdGhpcy5maWVsZC5kYXRhLnZhbHVlLnBvcChmaWxlKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==