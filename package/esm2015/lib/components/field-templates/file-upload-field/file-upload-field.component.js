/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { InputError } from '../../../models/input-error';
import { FileUpload } from 'primeng/fileupload';
export class FileUploadFieldComponent extends FieldComponent {
    /**
     * \@description Clears the field's value.
     * @return {?}
     */
    clearValue() {
        if (this.fileUploadControl) {
            this.fileUploadControl.clear();
        }
        /** @type {?} */
        const length = this.field.data.value.length;
        for (let i = 0; i < length; i++) {
            this.removeFile(this.field.data.value[i]);
        }
        this.clearValidationErrors();
    }
    /**
     * \@description Appends the form data.
     * @param {?} data
     * @return {?} FormData The updated form data.
     */
    appendFormData(data) {
        if (this.fileUploadControl.files) {
            for (const file of this.fileUploadControl.files) {
                data.append(this.field.name, file);
            }
        }
        return data;
    }
    /**
     * \@description Validates the form control and updates its validation errors list.
     * @param {?=} eventArguments
     * @param {?=} isSubmit
     * @return {?} Array<InputError> The list of validation errors.
     */
    validate(eventArguments, isSubmit) {
        this.preValidate(isSubmit);
        if (this.shouldValidate()) {
            /** @type {?} */
            let valueLength = 0;
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
                const invalidFileSizeMessage = this.fileUploadControl.msgs.find(m => m.summary === 'invalidFileSize');
                if (invalidFileSizeMessage) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileSizeText));
                }
                /** @type {?} */
                const invalidFileTypeMessage = this.fileUploadControl.msgs.find(m => m.summary === 'invalidFileType');
                if (invalidFileTypeMessage) {
                    this.field.validationErrors.push(new InputError(FieldComponent.ValidationErrorClass, this.field.validation.invalidFileTypeText));
                }
            }
            this.updateValidationSummary();
        }
        return this.field.validationErrors;
    }
    /**
     * \@description Removes the file.
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        this.field.data.value.pop(file);
    }
}
FileUploadFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-file-upload-field',
                template: `<div [class]="field.cssClasses.container"
     [hidden]="isFieldHidden()"
     [attr.data-html2canvas-ignore]="field.html2CanvasIgnore">

  <!-- label -->
  <label [class]="field.cssClasses.label"
         [for]="field.name">
    {{field.label | translate}}
    <span class="required-asterisk"
          *ngIf="isValidationAsteriskShown()">*</span>
  </label>

  <!-- input-->
  <p-fileUpload [id]="field.name"
                [name]="field.name"
                [class]="field.cssClasses.input"
                [ngClass]="{'invalid': isValidationShown()}"
                [url]="field.data.url"
                [multiple]="field.multiple"
                [accept]="field.validation.accept"
                #input
                [auto]="field.auto"
                [maxFileSize]="field.validation.maxFileSizeInBytes"
                [mode]="field.mode"
                [showCancelButton]="field.buttons.showCancelButton"
                [showUploadButton]="field.buttons.showUploadButton"
                [chooseLabel]="field.buttons.chooseLabel | translate"
                [uploadLabel]="field.buttons.uploadLabel | translate"
                [cancelLabel]="field.buttons.cancelLabel | translate"
                [title]="field.tooltip | translate"
                [disabled]="field.disabled"
                invalidFileSizeMessageSummary="invalidFileSize"
                invalidFileSizeMessageDetail="invalidFileSize"
                invalidFileTypeMessageDetail="invalidFileType"
                invalidFileTypeMessageSummary="invalidFileType"
                customUpload=true
                *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
                (onSelect)="validate('onSelect');"
                (onRemove)="validate('onRemove');"
                (onClear)="validate('onClear');">
  </p-fileUpload>

  <!-- display -->
  <div class="upload-file-viewer"
       *ngIf="bridgeService?.configuration?.settings?.formMode != 'New' && field?.data?.value?.length > 0">
    <div class="upload-file-item"
         *ngFor="let file of field.data.value">
      <a [href]="file.url"
         [download]="file.fileName"
         target="_blank"
         class="upload-file-anchor">
        <span>
          <i class="fa fa-file"></i>
        </span>
        <span class="upload-file-title">{{file.fileName}}</span>
      </a>

      <a href="javascript:;"
         (click)="removeFile(file);validate('onRemoveFile');"
         *ngIf="bridgeService?.configuration?.settings?.formMode != 'Display'"
         class="trash-icon-style">
        <span>
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </a>
      <div class="clearfix"></div>
    </div>
  </div>

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
                styles: [`:host ::ng-deep p-fileupload .ui-messages-error{display:none!important}:host ::ng-deep .ui-fileupload{margin-bottom:8px}.upload-file-viewer{border:1px solid #d5d5d5;padding:10px}.upload-file-viewer .upload-file-item{border:1px solid #d5d5d5;padding:10px;background:linear-gradient(to bottom,#f6f7f9 0,#ebedf0 100%);margin-bottom:10px}.upload-file-title{padding:0 15px}a.upload-file-anchor{line-height:2}.upload-file-viewer div:last-child{margin-bottom:0}a.trash-icon-style{padding:6px 11px;border-radius:6px;font-size:12px;border:1px solid #2399e5;color:#fff;background:#2399e5;transition:background-color .2s}a.trash-icon-style:hover{border:1px solid #1f89ce;background:#1f89ce}body.ar :host ::ng-deep a.trash-icon-style{float:left}body.en :host ::ng-deep a.trash-icon-style{float:right}`]
            },] },
];
FileUploadFieldComponent.propDecorators = {
    fileUploadControl: [{ type: ViewChild, args: [FileUpload,] }]
};
if (false) {
    /**
     * \@property The file upload control.
     * @type {?}
     */
    FileUploadFieldComponent.prototype.fileUploadControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXFGaEQsTUFBTSwrQkFBZ0MsU0FBUSxjQUFjOzs7OztJQUtuRCxVQUFVO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEM7O1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7Ozs7OztJQU94QixjQUFjLENBQUMsSUFBYztRQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FB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Q0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2lCQUNsSTthQUNGO1lBRUQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7OztJQU05QixVQUFVLENBQUMsSUFBUztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7O1lBbktuQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4RVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc3hCQUFzeEIsQ0FBQzthQUNqeUI7OztnQ0FHRSxTQUFTLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRFcnJvciB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnB1dC1lcnJvcic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICdwcmltZW5nL2ZpbGV1cGxvYWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdudHctZmlsZS11cGxvYWQtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPHAtZmlsZVVwbG9hZCBbaWRdPVwiZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICBbbmFtZV09XCJmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzc109XCJmaWVsZC5jc3NDbGFzc2VzLmlucHV0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnaW52YWxpZCc6IGlzVmFsaWRhdGlvblNob3duKCl9XCJcclxuICAgICAgICAgICAgICAgIFt1cmxdPVwiZmllbGQuZGF0YS51cmxcIlxyXG4gICAgICAgICAgICAgICAgW211bHRpcGxlXT1cImZpZWxkLm11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgIFthY2NlcHRdPVwiZmllbGQudmFsaWRhdGlvbi5hY2NlcHRcIlxyXG4gICAgICAgICAgICAgICAgI2lucHV0XHJcbiAgICAgICAgICAgICAgICBbYXV0b109XCJmaWVsZC5hdXRvXCJcclxuICAgICAgICAgICAgICAgIFttYXhGaWxlU2l6ZV09XCJmaWVsZC52YWxpZGF0aW9uLm1heEZpbGVTaXplSW5CeXRlc1wiXHJcbiAgICAgICAgICAgICAgICBbbW9kZV09XCJmaWVsZC5tb2RlXCJcclxuICAgICAgICAgICAgICAgIFtzaG93Q2FuY2VsQnV0dG9uXT1cImZpZWxkLmJ1dHRvbnMuc2hvd0NhbmNlbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBbc2hvd1VwbG9hZEJ1dHRvbl09XCJmaWVsZC5idXR0b25zLnNob3dVcGxvYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgW2Nob29zZUxhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2hvb3NlTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3VwbG9hZExhYmVsXT1cImZpZWxkLmJ1dHRvbnMudXBsb2FkTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2NhbmNlbExhYmVsXT1cImZpZWxkLmJ1dHRvbnMuY2FuY2VsTGFiZWwgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cImZpZWxkLnRvb2x0aXAgfCB0cmFuc2xhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VTdW1tYXJ5PVwiaW52YWxpZEZpbGVTaXplXCJcclxuICAgICAgICAgICAgICAgIGludmFsaWRGaWxlU2l6ZU1lc3NhZ2VEZXRhaWw9XCJpbnZhbGlkRmlsZVNpemVcIlxyXG4gICAgICAgICAgICAgICAgaW52YWxpZEZpbGVUeXBlTWVzc2FnZURldGFpbD1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRmlsZVR5cGVNZXNzYWdlU3VtbWFyeT1cImludmFsaWRGaWxlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICBjdXN0b21VcGxvYWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgIT0gJ0Rpc3BsYXknXCJcclxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJ2YWxpZGF0ZSgnb25TZWxlY3QnKTtcIlxyXG4gICAgICAgICAgICAgICAgKG9uUmVtb3ZlKT1cInZhbGlkYXRlKCdvblJlbW92ZScpO1wiXHJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJ2YWxpZGF0ZSgnb25DbGVhcicpO1wiPlxyXG4gIDwvcC1maWxlVXBsb2FkPlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPGRpdiBjbGFzcz1cInVwbG9hZC1maWxlLXZpZXdlclwiXHJcbiAgICAgICAqbmdJZj1cImJyaWRnZVNlcnZpY2U/LmNvbmZpZ3VyYXRpb24/LnNldHRpbmdzPy5mb3JtTW9kZSAhPSAnTmV3JyAmJiBmaWVsZD8uZGF0YT8udmFsdWU/Lmxlbmd0aCA+IDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtZmlsZS1pdGVtXCJcclxuICAgICAgICAgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmllbGQuZGF0YS52YWx1ZVwiPlxyXG4gICAgICA8YSBbaHJlZl09XCJmaWxlLnVybFwiXHJcbiAgICAgICAgIFtkb3dubG9hZF09XCJmaWxlLmZpbGVOYW1lXCJcclxuICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgY2xhc3M9XCJ1cGxvYWQtZmlsZS1hbmNob3JcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZmlsZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1cGxvYWQtZmlsZS10aXRsZVwiPnt7ZmlsZS5maWxlTmFtZX19PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCJcclxuICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpbGUoZmlsZSk7dmFsaWRhdGUoJ29uUmVtb3ZlRmlsZScpO1wiXHJcbiAgICAgICAgICpuZ0lmPVwiYnJpZGdlU2VydmljZT8uY29uZmlndXJhdGlvbj8uc2V0dGluZ3M/LmZvcm1Nb2RlICE9ICdEaXNwbGF5J1wiXHJcbiAgICAgICAgIGNsYXNzPVwidHJhc2gtaWNvbi1zdHlsZVwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgOmhvc3QgOjpuZy1kZWVwIHAtZmlsZXVwbG9hZCAudWktbWVzc2FnZXMtZXJyb3J7ZGlzcGxheTpub25lIWltcG9ydGFudH06aG9zdCA6Om5nLWRlZXAgLnVpLWZpbGV1cGxvYWR7bWFyZ2luLWJvdHRvbTo4cHh9LnVwbG9hZC1maWxlLXZpZXdlcntib3JkZXI6MXB4IHNvbGlkICNkNWQ1ZDU7cGFkZGluZzoxMHB4fS51cGxvYWQtZmlsZS12aWV3ZXIgLnVwbG9hZC1maWxlLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjZDVkNWQ1O3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sI2Y2ZjdmOSAwLCNlYmVkZjAgMTAwJSk7bWFyZ2luLWJvdHRvbToxMHB4fS51cGxvYWQtZmlsZS10aXRsZXtwYWRkaW5nOjAgMTVweH1hLnVwbG9hZC1maWxlLWFuY2hvcntsaW5lLWhlaWdodDoyfS51cGxvYWQtZmlsZS12aWV3ZXIgZGl2Omxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfWEudHJhc2gtaWNvbi1zdHlsZXtwYWRkaW5nOjZweCAxMXB4O2JvcmRlci1yYWRpdXM6NnB4O2ZvbnQtc2l6ZToxMnB4O2JvcmRlcjoxcHggc29saWQgIzIzOTllNTtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzIzOTllNTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjJzfWEudHJhc2gtaWNvbi1zdHlsZTpob3Zlcntib3JkZXI6MXB4IHNvbGlkICMxZjg5Y2U7YmFja2dyb3VuZDojMWY4OWNlfWJvZHkuYXIgOmhvc3QgOjpuZy1kZWVwIGEudHJhc2gtaWNvbi1zdHlsZXtmbG9hdDpsZWZ0fWJvZHkuZW4gOmhvc3QgOjpuZy1kZWVwIGEudHJhc2gtaWNvbi1zdHlsZXtmbG9hdDpyaWdodH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIGZpbGUgdXBsb2FkIGNvbnRyb2wuKi9cclxuICBAVmlld0NoaWxkKEZpbGVVcGxvYWQpIGZpbGVVcGxvYWRDb250cm9sOiBGaWxlVXBsb2FkO1xyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIENsZWFycyB0aGUgZmllbGQncyB2YWx1ZS4qL1xyXG4gIHB1YmxpYyBjbGVhclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZVVwbG9hZENvbnRyb2wpIHtcclxuICAgICAgdGhpcy5maWxlVXBsb2FkQ29udHJvbC5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZmllbGQuZGF0YS52YWx1ZS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnJlbW92ZUZpbGUodGhpcy5maWVsZC5kYXRhLnZhbHVlW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9ycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBcHBlbmRzIHRoZSBmb3JtIGRhdGEuXHJcbiAgICogQHBhcmFtIEZvcm1EYXRhIGRhdGEgVGhlIGRhdGEuXHJcbiAgICogQHJldHVybiBGb3JtRGF0YSBUaGUgdXBkYXRlZCBmb3JtIGRhdGEuXHJcbiAgKi9cclxuICBwdWJsaWMgYXBwZW5kRm9ybURhdGEoZGF0YTogRm9ybURhdGEpOiBGb3JtRGF0YSB7XHJcbiAgICBpZiAodGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcykge1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcykge1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKHRoaXMuZmllbGQubmFtZSwgZmlsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBmb3JtIGNvbnRyb2wgYW5kIHVwZGF0ZXMgaXRzIHZhbGlkYXRpb24gZXJyb3JzIGxpc3QuXHJcbiAgICogQHBhcmFtIGFueSBldmVudEFyZ3VtZW50cyBUaGUgZXZlbnQgYXJndW1lbnRzLlxyXG4gICAqIEBwYXJhbSBib29sZWFuIGlzU3VibWl0IERldGVybWluZXMgd2hldGhlciB0aGUgdmFsaWRhdGlvbiBpcyByZWFjaGVkIGZyb20gZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAqIEByZXR1cm4gQXJyYXk8SW5wdXRFcnJvcj4gVGhlIGxpc3Qgb2YgdmFsaWRhdGlvbiBlcnJvcnMuXHJcbiAgKi9cclxuICBwdWJsaWMgdmFsaWRhdGUoZXZlbnRBcmd1bWVudHM/OiBhbnksIGlzU3VibWl0PzogYm9vbGVhbik6IEFycmF5PElucHV0RXJyb3I+IHtcclxuICAgIHRoaXMucHJlVmFsaWRhdGUoaXNTdWJtaXQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3VsZFZhbGlkYXRlKCkpIHtcclxuICAgICAgbGV0IHZhbHVlTGVuZ3RoID0gMDtcclxuICAgICAgaWYgKHRoaXMuZmlsZVVwbG9hZENvbnRyb2wpIHtcclxuICAgICAgICB2YWx1ZUxlbmd0aCA9IGV2ZW50QXJndW1lbnRzID09PSAnb25SZW1vdmUnID8gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcy5sZW5ndGggLSAxIDogdGhpcy5maWxlVXBsb2FkQ29udHJvbC5maWxlcy5sZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmZpZWxkLmRhdGEudmFsdWUpIHtcclxuICAgICAgICB2YWx1ZUxlbmd0aCArPSB0aGlzLmZpZWxkLmRhdGEudmFsdWUubGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHRoaXMuZmllbGQudmFsaWRhdGlvbi5taW4gJiYgdmFsdWVMZW5ndGggPCB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWluKSB8fFxyXG4gICAgICAgICh0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWF4ICYmIHZhbHVlTGVuZ3RoID4gdGhpcy5maWVsZC52YWxpZGF0aW9uLm1heCkpIHtcclxuICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLnJhbmdlVGV4dCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5maWVsZC52YWxpZGF0aW9uLm1heEZpbGVTaXplSW5CeXRlcyA+IDAgJiYgdGhpcy5maWxlVXBsb2FkQ29udHJvbCAmJiB0aGlzLmZpbGVVcGxvYWRDb250cm9sLm1zZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkRmlsZVNpemVNZXNzYWdlID0gdGhpcy5maWxlVXBsb2FkQ29udHJvbC5tc2dzLmZpbmQobSA9PiBtLnN1bW1hcnkgPT09ICdpbnZhbGlkRmlsZVNpemUnKTtcclxuXHJcbiAgICAgICAgaWYgKGludmFsaWRGaWxlU2l6ZU1lc3NhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZmllbGQudmFsaWRhdGlvbkVycm9ycy5wdXNoKG5ldyBJbnB1dEVycm9yKEZpZWxkQ29tcG9uZW50LlZhbGlkYXRpb25FcnJvckNsYXNzLCB0aGlzLmZpZWxkLnZhbGlkYXRpb24uaW52YWxpZEZpbGVTaXplVGV4dCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW52YWxpZEZpbGVUeXBlTWVzc2FnZSA9IHRoaXMuZmlsZVVwbG9hZENvbnRyb2wubXNncy5maW5kKG0gPT4gbS5zdW1tYXJ5ID09PSAnaW52YWxpZEZpbGVUeXBlJyk7XHJcblxyXG4gICAgICAgIGlmIChpbnZhbGlkRmlsZVR5cGVNZXNzYWdlKSB7XHJcbiAgICAgICAgICB0aGlzLmZpZWxkLnZhbGlkYXRpb25FcnJvcnMucHVzaChuZXcgSW5wdXRFcnJvcihGaWVsZENvbXBvbmVudC5WYWxpZGF0aW9uRXJyb3JDbGFzcywgdGhpcy5maWVsZC52YWxpZGF0aW9uLmludmFsaWRGaWxlVHlwZVRleHQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGlvblN1bW1hcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5maWVsZC52YWxpZGF0aW9uRXJyb3JzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBSZW1vdmVzIHRoZSBmaWxlLlxyXG4gICAqIEBwYXJhbSBhbnkgZmlsZSBUaGUgZmlsZSB0byByZW1vdmUuXHJcbiAgKi9cclxuICBwdWJsaWMgcmVtb3ZlRmlsZShmaWxlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZGF0YS52YWx1ZS5wb3AoZmlsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=