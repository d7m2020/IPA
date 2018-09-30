/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';
import { Field } from '../../../models/field';
var DefaultMasterDetailFormComponent = /** @class */ (function () {
    function DefaultMasterDetailFormComponent(dialogRef, field) {
        this.dialogRef = dialogRef;
        this.field = field;
    }
    /** @description Adds a child and closes the dialog.
     * @param DefaultMasterDetailFormComponent current The current instance of the default master detail form component.
     * @param any triggeringField The field triggering the action.
    */
    /**
     * \@description Adds a child and closes the dialog.
     * @param {?} current
     * @param {?} triggeringField
     * @return {?}
     */
    DefaultMasterDetailFormComponent.prototype.addChild = /**
     * \@description Adds a child and closes the dialog.
     * @param {?} current
     * @param {?} triggeringField
     * @return {?}
     */
    function (current, triggeringField) {
        //current.detailsFormComponent.validateForm();
        //if (current.detailsFormComponent.configuration.validationErrors.length === 0) {
        //  const values = current.detailsFormComponent.getFormValues();
        //  current.dialogRef.close(values);
        //}
    };
    DefaultMasterDetailFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ntw-default-master-detail-form',
                    template: "<mat-dialog-actions>\n    <button mat-dialog-close mat-button>\n        <i class=\"fa fa-times-circle\"\n           aria-hidden=\"true\">\n        </i>\n    </button>\n</mat-dialog-actions>\n\n<mat-dialog-content>\n    <ntw-dynamic-form #detailsForm\n                      [parentComponent]=\"this\"\n                      [configurationSourceUrl]=\"field.details.configurationSourceUrl\">\n    </ntw-dynamic-form>\n</mat-dialog-content>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DefaultMasterDetailFormComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: Field, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    DefaultMasterDetailFormComponent.propDecorators = {
        detailsFormComponent: [{ type: ViewChild, args: ['detailsForm',] }]
    };
    return DefaultMasterDetailFormComponent;
}());
export { DefaultMasterDetailFormComponent };
if (false) {
    /**
     * \@property The reference to the details dynamic form component.
     * @type {?}
     */
    DefaultMasterDetailFormComponent.prototype.detailsFormComponent;
    /** @type {?} */
    DefaultMasterDetailFormComponent.prototype.dialogRef;
    /** @type {?} */
    DefaultMasterDetailFormComponent.prototype.field;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQXlCNUMsMENBQ1MsV0FFQSxLQUFZO1FBRlosY0FBUyxHQUFULFNBQVM7UUFFVCxVQUFLLEdBQUwsS0FBSyxDQUFPO0tBQ2hCO0lBRUw7OztNQUdFOzs7Ozs7O0lBQ0YsbURBQVE7Ozs7OztJQUFSLFVBQVMsT0FBeUMsRUFBRSxlQUFvQjs7Ozs7O0tBUXZFOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSx5YkFjWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7Z0JBdEJRLFlBQVk7Z0JBRVosS0FBSyx1QkEyQlQsTUFBTSxTQUFDLGVBQWU7Ozt1Q0FKeEIsU0FBUyxTQUFDLGFBQWE7OzJDQTFCMUI7O1NBd0JhLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9maWVsZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ250dy1kZWZhdWx0LW1hc3Rlci1kZXRhaWwtZm9ybScsXHJcbiAgdGVtcGxhdGU6IGA8bWF0LWRpYWxvZy1hY3Rpb25zPlxyXG4gICAgPGJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIG1hdC1idXR0b24+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIlxyXG4gICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG48L21hdC1kaWFsb2ctYWN0aW9ucz5cclxuXHJcbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICA8bnR3LWR5bmFtaWMtZm9ybSAjZGV0YWlsc0Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRDb21wb25lbnRdPVwidGhpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbY29uZmlndXJhdGlvblNvdXJjZVVybF09XCJmaWVsZC5kZXRhaWxzLmNvbmZpZ3VyYXRpb25Tb3VyY2VVcmxcIj5cclxuICAgIDwvbnR3LWR5bmFtaWMtZm9ybT5cclxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCB7XHJcbiAgLyoqIEBwcm9wZXJ0eSBUaGUgcmVmZXJlbmNlIHRvIHRoZSBkZXRhaWxzIGR5bmFtaWMgZm9ybSBjb21wb25lbnQuKi9cclxuICBAVmlld0NoaWxkKCdkZXRhaWxzRm9ybScpIGRldGFpbHNGb3JtQ29tcG9uZW50OiBEeW5hbWljRm9ybUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpXHJcbiAgICBwdWJsaWMgZmllbGQ6IEZpZWxkXHJcbiAgKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBBZGRzIGEgY2hpbGQgYW5kIGNsb3NlcyB0aGUgZGlhbG9nLlxyXG4gICAqIEBwYXJhbSBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCBjdXJyZW50IFRoZSBjdXJyZW50IGluc3RhbmNlIG9mIHRoZSBkZWZhdWx0IG1hc3RlciBkZXRhaWwgZm9ybSBjb21wb25lbnQuXHJcbiAgICogQHBhcmFtIGFueSB0cmlnZ2VyaW5nRmllbGQgVGhlIGZpZWxkIHRyaWdnZXJpbmcgdGhlIGFjdGlvbi5cclxuICAqL1xyXG4gIGFkZENoaWxkKGN1cnJlbnQ6IERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LCB0cmlnZ2VyaW5nRmllbGQ6IGFueSkge1xyXG4gICAgLy9jdXJyZW50LmRldGFpbHNGb3JtQ29tcG9uZW50LnZhbGlkYXRlRm9ybSgpO1xyXG5cclxuICAgIC8vaWYgKGN1cnJlbnQuZGV0YWlsc0Zvcm1Db21wb25lbnQuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gIGNvbnN0IHZhbHVlcyA9IGN1cnJlbnQuZGV0YWlsc0Zvcm1Db21wb25lbnQuZ2V0Rm9ybVZhbHVlcygpO1xyXG5cclxuICAgIC8vICBjdXJyZW50LmRpYWxvZ1JlZi5jbG9zZSh2YWx1ZXMpO1xyXG4gICAgLy99XHJcbiAgfVxyXG59XHJcbiJdfQ==