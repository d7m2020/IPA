/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { DefaultMasterDetailFormComponent } from '../../form-part-templates/default-master-detail-form/default-master-detail-form.component';
import { MatDialog } from '@angular/material';
export class MasterDetailFieldComponent extends FieldComponent {
    /**
     * @param {?} bridgeService
     * @param {?} dialog
     */
    constructor(bridgeService, dialog) {
        super(bridgeService);
        this.bridgeService = bridgeService;
        this.dialog = dialog;
        /**
         * \@property Whether to validate for range.
         */
        this.validateForRange = true;
    }
    /**
     * \@description Opens the details dialog.
     * @return {?}
     */
    openDialog() {
        /** @type {?} */
        const detailsDialog = this.dialog.open(DefaultMasterDetailFormComponent, {
            data: this.field
        });
        detailsDialog.afterClosed().subscribe(result => {
            console.log(result);
        });
    }
}
MasterDetailFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-master-detail-field',
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
  <div>
    <a href="javascript:;"
       (click)="openDialog();">
      <i class="fa fa-plus"></i>
    </a>
  </div>

  <!-- display -->
  <span [class]="field.cssClasses.display"
        *ngIf="bridgeService?.configuration?.settings?.formMode == 'Display'">

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
                styles: [``]
            },] },
];
/** @nocollapse */
MasterDetailFieldComponent.ctorParameters = () => [
    { type: BridgeService },
    { type: MatDialog }
];
if (false) {
    /**
     * \@property Whether to validate for range.
     * @type {?}
     */
    MasterDetailFieldComponent.prototype.validateForRange;
    /** @type {?} */
    MasterDetailFieldComponent.prototype.bridgeService;
    /** @type {?} */
    MasterDetailFieldComponent.prototype.dialog;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLWRldGFpbC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXN0ZXItZGV0YWlsLWZpZWxkL21hc3Rlci1kZXRhaWwtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFDN0ksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBMEM5QyxNQUFNLGlDQUFrQyxTQUFRLGNBQWM7Ozs7O0lBSTVELFlBQ1MsZUFDQztRQUVSLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUhkLGtCQUFhLEdBQWIsYUFBYTtRQUNaLFdBQU0sR0FBTixNQUFNOzs7O2dDQUptQixJQUFJO0tBT3RDOzs7OztJQUdELFVBQVU7O1FBQ1IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUU7WUFDdkUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQixDQUFDLENBQUM7S0FDSjs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7O1lBM0NRLGFBQWE7WUFFYixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJpZGdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2JyaWRnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9mb3JtLXBhcnQtdGVtcGxhdGVzL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LW1hc3Rlci1kZXRhaWwtZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5jb250YWluZXJcIlxyXG4gICAgIFtoaWRkZW5dPVwiaXNGaWVsZEhpZGRlbigpXCJcclxuICAgICBbYXR0ci5kYXRhLWh0bWwyY2FudmFzLWlnbm9yZV09XCJmaWVsZC5odG1sMkNhbnZhc0lnbm9yZVwiPlxyXG5cclxuICA8IS0tIGxhYmVsIC0tPlxyXG4gIDxsYWJlbCBbY2xhc3NdPVwiZmllbGQuY3NzQ2xhc3Nlcy5sYWJlbFwiXHJcbiAgICAgICAgIFtmb3JdPVwiZmllbGQubmFtZVwiPlxyXG4gICAge3tmaWVsZC5sYWJlbCB8IHRyYW5zbGF0ZX19XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkLWFzdGVyaXNrXCJcclxuICAgICAgICAgICpuZ0lmPVwiaXNWYWxpZGF0aW9uQXN0ZXJpc2tTaG93bigpXCI+Kjwvc3Bhbj5cclxuICA8L2xhYmVsPlxyXG5cclxuICA8IS0tIGlucHV0LS0+XHJcbiAgPGRpdj5cclxuICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxyXG4gICAgICAgKGNsaWNrKT1cIm9wZW5EaWFsb2coKTtcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGRpc3BsYXkgLS0+XHJcbiAgPHNwYW4gW2NsYXNzXT1cImZpZWxkLmNzc0NsYXNzZXMuZGlzcGxheVwiXHJcbiAgICAgICAgKm5nSWY9XCJicmlkZ2VTZXJ2aWNlPy5jb25maWd1cmF0aW9uPy5zZXR0aW5ncz8uZm9ybU1vZGUgPT0gJ0Rpc3BsYXknXCI+XHJcblxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSB2YWxpZGF0aW9ucyAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiaXNWYWxpZGF0aW9uU2hvd24oKVwiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZmllbGQ/LnZhbGlkYXRpb25FcnJvcnNcIj5cclxuICAgICAgPHAgW25nQ2xhc3NdPVwiZXJyb3IudHlwZSB8IHRyYW5zbGF0ZVwiPlxyXG4gICAgICAgIHt7ZXJyb3IubWVzc2FnZSB8IHRyYW5zbGF0ZX19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hc3RlckRldGFpbEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgRmllbGRDb21wb25lbnQge1xyXG4gIC8qKiBAcHJvcGVydHkgV2hldGhlciB0byB2YWxpZGF0ZSBmb3IgcmFuZ2UuKi9cclxuICBwdWJsaWMgdmFsaWRhdGVGb3JSYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJyaWRnZVNlcnZpY2U6IEJyaWRnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihicmlkZ2VTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gT3BlbnMgdGhlIGRldGFpbHMgZGlhbG9nLiovXHJcbiAgb3BlbkRpYWxvZygpIHtcclxuICAgIGNvbnN0IGRldGFpbHNEaWFsb2cgPSB0aGlzLmRpYWxvZy5vcGVuKERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LCB7XHJcbiAgICAgIGRhdGE6IHRoaXMuZmllbGRcclxuICAgIH0pO1xyXG5cclxuICAgIGRldGFpbHNEaWFsb2cuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=