import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { BridgeService } from '../../../services/bridge.service';
import { LanguageService } from '../../../services/language.service';
export declare class ValidationSummaryComponent {
    bridgeService: BridgeService;
    private languageService;
    private changeDetectorRef;
    /** @property The validation summary element.*/
    validationSummaryElement: ElementRef;
    constructor(bridgeService: BridgeService, languageService: LanguageService, changeDetectorRef: ChangeDetectorRef);
    /** @description Shows the validation summary as an alert.*/
    showSummaryAlert(): void;
}
