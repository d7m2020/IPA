import { EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ITime } from '../w-clock/w-clock.component';
import { TranslatePipe } from '@ngx-translate/core';
export declare class WMatTimePickerComponent implements OnInit {
    private dialog;
    private translatePipe;
    userTime: ITime;
    userTimeChange: EventEmitter<ITime>;
    color: string;
    disabled: string;
    readonly: string;
    inputClass: string;
    tooltip: string;
    placeholderValue: string;
    inputId: string;
    inputName: string;
    constructor(dialog: MatDialog, translatePipe: TranslatePipe);
    ngOnInit(): void;
    readonly time: string;
    showPicker($event: any): boolean;
    private emituserTimeChange();
}
