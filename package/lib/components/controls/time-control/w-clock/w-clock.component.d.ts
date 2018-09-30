import { EventEmitter, OnChanges } from '@angular/core';
export declare enum CLOCK_TYPE {
    HOURS = 1,
    MINUTES = 2,
}
export declare type TimeFormat = 12 | 24;
export interface ITime {
    hour: number;
    minute: number;
    meriden: 'PM' | 'AM';
    format: TimeFormat;
}
export declare class WClockComponent implements OnChanges {
    userTime: ITime;
    userTimeChange: EventEmitter<ITime>;
    currentView: CLOCK_TYPE;
    viewChange: EventEmitter<CLOCK_TYPE>;
    color: string;
    steps: number[];
    selectedTimePart: any;
    STEP_DEG: number;
    ngOnChanges(): void;
    setupUI(): void;
    getPointerStyle(): {
        '-webkit-transform': string;
        '-ms-transform': string;
        'transform': string;
    };
    getTimeValueClass(step: number, index: number): string;
    changeTimeValue(step: number): void;
}
