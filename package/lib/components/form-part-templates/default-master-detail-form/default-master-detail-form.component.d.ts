import { MatDialogRef } from '@angular/material';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';
import { Field } from '../../../models/field';
export declare class DefaultMasterDetailFormComponent {
    dialogRef: MatDialogRef<DefaultMasterDetailFormComponent>;
    field: Field;
    /** @property The reference to the details dynamic form component.*/
    detailsFormComponent: DynamicFormComponent;
    constructor(dialogRef: MatDialogRef<DefaultMasterDetailFormComponent>, field: Field);
    /** @description Adds a child and closes the dialog.
     * @param DefaultMasterDetailFormComponent current The current instance of the default master detail form component.
     * @param any triggeringField The field triggering the action.
    */
    addChild(current: DefaultMasterDetailFormComponent, triggeringField: any): void;
}
