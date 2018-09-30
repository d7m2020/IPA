import { OnInit, EventEmitter } from '@angular/core';
import { ITime, CLOCK_TYPE } from '../w-clock/w-clock.component';
import { TranslatePipe } from '@ngx-translate/core';
export declare class WTimeComponent implements OnInit {
    private translatePipe;
    userTime: ITime;
    userTimeChange: EventEmitter<ITime>;
    revertLabel: string;
    submitLabel: string;
    reverted: EventEmitter<null>;
    submitted: EventEmitter<ITime>;
    color: string;
    VIEW_HOURS: CLOCK_TYPE;
    VIEW_MINUTES: CLOCK_TYPE;
    currentView: CLOCK_TYPE;
    constructor(translatePipe: TranslatePipe);
    ngOnInit(): void;
    formatHour(): string;
    formatMinute(): string;
    setCurrentView(type: CLOCK_TYPE): void;
    setMeridien(m: 'PM' | 'AM'): void;
    revert(): void;
    submit(): void;
    emituserTimeChange(event: any): void;
}
