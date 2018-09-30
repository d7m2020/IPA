import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { MatDialog } from '@angular/material';
export declare class MasterDetailFieldComponent extends FieldComponent {
    bridgeService: BridgeService;
    private dialog;
    /** @property Whether to validate for range.*/
    validateForRange: boolean;
    constructor(bridgeService: BridgeService, dialog: MatDialog);
    /** @description Opens the details dialog.*/
    openDialog(): void;
}
