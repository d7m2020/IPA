/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './local-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "./local-storage.service";
export class LanguageService {
    /**
     * @param {?} translate
     * @param {?} localStorage
     */
    constructor(translate, localStorage) {
        this.translate = translate;
        this.localStorage = localStorage;
        /**
         * \@property The saved language.
         */
        this.savedLanguage = this.localStorage.loadOrDefault('Language', 'en');
        this.translate.onLangChange.subscribe((event) => {
            this.setLanguage(event.lang);
            this.translations = event.translations;
        });
    }
    /**
     * \@description Sets the language.
     * @param {?} language
     * @return {?}
     */
    setLanguage(language) {
        this.translate.use(language);
        this.savedLanguage = language;
        this.localStorage.save('Language', language);
    }
    /**
     * \@description Gets the language.
     * @return {?}
     */
    getLanguage() {
        return this.localStorage.loadOrDefault('Language', 'en');
    }
}
LanguageService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    { type: TranslateService },
    { type: LocalStorageService }
];
/** @nocollapse */ LanguageService.ngInjectableDef = i0.defineInjectable({ factory: function LanguageService_Factory() { return new LanguageService(i0.inject(i1.TranslateService), i0.inject(i2.LocalStorageService)); }, token: LanguageService, providedIn: "root" });
if (false) {
    /**
     * \@property The saved language.
     * @type {?}
     */
    LanguageService.prototype.savedLanguage;
    /**
     * \@property The translations.
     * @type {?}
     */
    LanguageService.prototype.translations;
    /** @type {?} */
    LanguageService.prototype.translate;
    /** @type {?} */
    LanguageService.prototype.localStorage;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ldHdheXMtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFtQixNQUFNLHFCQUFxQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRzlELE1BQU07Ozs7O0lBT0osWUFDUyxXQUNBO1FBREEsY0FBUyxHQUFULFNBQVM7UUFDVCxpQkFBWSxHQUFaLFlBQVk7Ozs7NkJBUEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQVN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQ3hDLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFLTSxXQUFXLENBQUMsUUFBZ0I7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFFOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7SUFJeEMsV0FBVztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7O1lBaEM1RCxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLGdCQUFnQjtZQUNoQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2Uge1xyXG4gIC8qKiBAcHJvcGVydHkgVGhlIHNhdmVkIGxhbmd1YWdlLiovXHJcbiAgcHVibGljIHNhdmVkTGFuZ3VhZ2UgPSB0aGlzLmxvY2FsU3RvcmFnZS5sb2FkT3JEZWZhdWx0KCdMYW5ndWFnZScsICdlbicpO1xyXG5cclxuICAvKiogQHByb3BlcnR5IFRoZSB0cmFuc2xhdGlvbnMuKi9cclxuICBwdWJsaWMgdHJhbnNsYXRpb25zOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcclxuICAgIHB1YmxpYyBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMudHJhbnNsYXRlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoKGV2ZW50OiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRMYW5ndWFnZShldmVudC5sYW5nKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNsYXRpb25zID0gZXZlbnQudHJhbnNsYXRpb25zO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGxhbmd1YWdlLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlLlxyXG4gICovXHJcbiAgcHVibGljIHNldExhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHJhbnNsYXRlLnVzZShsYW5ndWFnZSk7XHJcblxyXG4gICAgdGhpcy5zYXZlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcblxyXG4gICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2F2ZSgnTGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEdldHMgdGhlIGxhbmd1YWdlLiovXHJcbiAgcHVibGljIGdldExhbmd1YWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlLmxvYWRPckRlZmF1bHQoJ0xhbmd1YWdlJywgJ2VuJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==