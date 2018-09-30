import { MatDialogRef } from '@angular/material';
import { ITime } from '../w-clock/w-clock.component';
export declare class WTimeDialogComponent {
    private data;
    private dialogRef;
    userTime: ITime;
    private VIEW_HOURS;
    private VIEW_MINUTES;
    private currentView;
    color: string;
    constructor(data: UserTimeData, dialogRef: MatDialogRef<WTimeDialogComponent>);
    revert(): void;
    submit(): void;
}
export declare class UserTimeData {
    time: ITime;
    color: string;
}
