/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';
import { Field } from '../../../models/field';
export class DefaultMasterDetailFormComponent {
    /**
     * @param {?} dialogRef
     * @param {?} field
     */
    constructor(dialogRef, field) {
        this.dialogRef = dialogRef;
        this.field = field;
    }
    /**
     * \@description Adds a child and closes the dialog.
     * @param {?} current
     * @param {?} triggeringField
     * @return {?}
     */
    addChild(current, triggeringField) {
        //current.detailsFormComponent.validateForm();
        //if (current.detailsFormComponent.configuration.validationErrors.length === 0) {
        //  const values = current.detailsFormComponent.getFormValues();
        //  current.dialogRef.close(values);
        //}
    }
}
DefaultMasterDetailFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'ntw-default-master-detail-form',
                template: `<mat-dialog-actions>
    <button mat-dialog-close mat-button>
        <i class="fa fa-times-circle"
           aria-hidden="true">
        </i>
    </button>
</mat-dialog-actions>

<mat-dialog-content>
    <ntw-dynamic-form #detailsForm
                      [parentComponent]="this"
                      [configurationSourceUrl]="field.details.configurationSourceUrl">
    </ntw-dynamic-form>
</mat-dialog-content>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
DefaultMasterDetailFormComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: Field, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
DefaultMasterDetailFormComponent.propDecorators = {
    detailsFormComponent: [{ type: ViewChild, args: ['detailsForm',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBcUI5QyxNQUFNOzs7OztJQUlKLFlBQ1MsV0FFQSxLQUFZO1FBRlosY0FBUyxHQUFULFNBQVM7UUFFVCxVQUFLLEdBQUwsS0FBSyxDQUFPO0tBQ2hCOzs7Ozs7O0lBTUwsUUFBUSxDQUFDLE9BQXlDLEVBQUUsZUFBb0I7Ozs7OztLQVF2RTs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0NBY1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7WUF0QlEsWUFBWTtZQUVaLEtBQUssdUJBMkJULE1BQU0sU0FBQyxlQUFlOzs7bUNBSnhCLFNBQVMsU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2ZpZWxkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnR3LWRlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtJyxcclxuICB0ZW1wbGF0ZTogYDxtYXQtZGlhbG9nLWFjdGlvbnM+XHJcbiAgICA8YnV0dG9uIG1hdC1kaWFsb2ctY2xvc2UgbWF0LWJ1dHRvbj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgPC9pPlxyXG4gICAgPC9idXR0b24+XHJcbjwvbWF0LWRpYWxvZy1hY3Rpb25zPlxyXG5cclxuPG1hdC1kaWFsb2ctY29udGVudD5cclxuICAgIDxudHctZHluYW1pYy1mb3JtICNkZXRhaWxzRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhcmVudENvbXBvbmVudF09XCJ0aGlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjb25maWd1cmF0aW9uU291cmNlVXJsXT1cImZpZWxkLmRldGFpbHMuY29uZmlndXJhdGlvblNvdXJjZVVybFwiPlxyXG4gICAgPC9udHctZHluYW1pYy1mb3JtPlxyXG48L21hdC1kaWFsb2ctY29udGVudD5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50IHtcclxuICAvKiogQHByb3BlcnR5IFRoZSByZWZlcmVuY2UgdG8gdGhlIGRldGFpbHMgZHluYW1pYyBmb3JtIGNvbXBvbmVudC4qL1xyXG4gIEBWaWV3Q2hpbGQoJ2RldGFpbHNGb3JtJykgZGV0YWlsc0Zvcm1Db21wb25lbnQ6IER5bmFtaWNGb3JtQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlcclxuICAgIHB1YmxpYyBmaWVsZDogRmllbGRcclxuICApIHsgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEFkZHMgYSBjaGlsZCBhbmQgY2xvc2VzIHRoZSBkaWFsb2cuXHJcbiAgICogQHBhcmFtIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50IGN1cnJlbnQgVGhlIGN1cnJlbnQgaW5zdGFuY2Ugb2YgdGhlIGRlZmF1bHQgbWFzdGVyIGRldGFpbCBmb3JtIGNvbXBvbmVudC5cclxuICAgKiBAcGFyYW0gYW55IHRyaWdnZXJpbmdGaWVsZCBUaGUgZmllbGQgdHJpZ2dlcmluZyB0aGUgYWN0aW9uLlxyXG4gICovXHJcbiAgYWRkQ2hpbGQoY3VycmVudDogRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsIHRyaWdnZXJpbmdGaWVsZDogYW55KSB7XHJcbiAgICAvL2N1cnJlbnQuZGV0YWlsc0Zvcm1Db21wb25lbnQudmFsaWRhdGVGb3JtKCk7XHJcblxyXG4gICAgLy9pZiAoY3VycmVudC5kZXRhaWxzRm9ybUNvbXBvbmVudC5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25FcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgY29uc3QgdmFsdWVzID0gY3VycmVudC5kZXRhaWxzRm9ybUNvbXBvbmVudC5nZXRGb3JtVmFsdWVzKCk7XHJcblxyXG4gICAgLy8gIGN1cnJlbnQuZGlhbG9nUmVmLmNsb3NlKHZhbHVlcyk7XHJcbiAgICAvL31cclxuICB9XHJcbn1cclxuIl19