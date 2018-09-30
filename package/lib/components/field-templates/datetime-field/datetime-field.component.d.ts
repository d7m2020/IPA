import { AfterViewInit } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
export declare class DatetimeFieldComponent extends FieldComponent implements AfterViewInit {
    bridgeService: BridgeService;
    private translateService;
    private languageService;
    private datePipe;
    /** @property The search element.*/
    calendarElement: any;
    /** @property Whether to validate for required.*/
    validateForRequired: boolean;
    constructor(bridgeService: BridgeService, translateService: TranslateService, languageService: LanguageService, datePipe: DatePipe);
    ngAfterViewInit(): void;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
    /** @description Handles the field's default settings.*/
    handleDefaultSettings(): void;
    /** @description Sets the calendar options.*/
    private setCalendarOptions();
}
