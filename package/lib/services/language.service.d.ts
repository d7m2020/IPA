import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';
export declare class LanguageService {
    translate: TranslateService;
    localStorage: LocalStorageService;
    /** @property The saved language.*/
    savedLanguage: any;
    /** @property The translations.*/
    translations: any;
    constructor(translate: TranslateService, localStorage: LocalStorageService);
    /** @description Sets the language.
     * @param string language The language.
    */
    setLanguage(language: string): void;
    /** @description Gets the language.*/
    getLanguage(): any;
}
