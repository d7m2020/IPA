/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaCommonModule } from 'ng-recaptcha/recaptcha/recaptcha-common.module';
import { RecaptchaModule } from 'ng-recaptcha/recaptcha/recaptcha.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { FileUploadModule } from 'primeng/fileupload';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { ImageCropperModule } from 'ng2-img-cropper';
import { RatingModule } from 'primeng/rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule, MatInputModule, MatToolbarModule, MatSnackBarModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatSelectModule } from '@angular/material';
import { WMatTimePickerComponent } from './components/controls/time-control/w-mat-timepicker/w-mat-timepicker.component';
import { WTimeDialogComponent } from './components/controls/time-control/w-time-dialog/w-time-dialog.component';
import { WClockComponent } from './components/controls/time-control/w-clock/w-clock.component';
import { WTimeComponent } from './components/controls/time-control/w-time/w-time.component';
import { FieldComponent } from './components/field-templates/field/field.component';
import { BoundableFieldComponent } from './components/field-templates/boundable-field/boundable-field.component';
import { InputFieldComponent } from './components/field-templates/input-field/input-field.component';
import { DatetimeFieldComponent } from './components/field-templates/datetime-field/datetime-field.component';
import { SelectFieldComponent } from './components/field-templates/select-field/select-field.component';
import { DatetimeHijriFieldComponent } from './components/field-templates/datetime-hijri-field/datetime-hijri-field.component';
import { CheckboxFieldComponent } from './components/field-templates/checkbox-field/checkbox-field.component';
import { RadiobuttonFieldComponent } from './components/field-templates/radiobutton-field/radiobutton-field.component';
import { MultiSelectFieldComponent } from './components/field-templates/multi-select-field/multi-select-field.component';
import { ChipsFieldComponent } from './components/field-templates/chips-field/chips-field.component';
import { EditorFieldComponent } from './components/field-templates/editor-field/editor-field.component';
import { MaskFieldComponent } from './components/field-templates/mask-field/mask-field.component';
import { TimeFieldComponent } from './components/field-templates/time-field/time-field.component';
import { LocationFieldComponent } from './components/field-templates/location-field/location-field.component';
import { FileUploadFieldComponent } from './components/field-templates/file-upload-field/file-upload-field.component';
import { InfoFieldComponent } from './components/field-templates/info-field/info-field.component';
import { MasterDetailFieldComponent } from './components/field-templates/master-detail-field/master-detail-field.component';
import { ImageCropperFieldComponent } from './components/field-templates/image-cropper-field/image-cropper-field.component';
import { RatingFieldComponent } from './components/field-templates/rating-field/rating-field.component';
import { RecaptchaFieldComponent } from './components/field-templates/recaptcha-field/recaptcha-field.component';
import { TabsSectionComponent } from './components/form-part-templates/tabs-section/tabs-section.component';
import { NextPreviousSectionComponent } from './components/form-part-templates/next-previous-section/next-previous-section.component';
import { ValidationSummaryComponent } from './components/form-part-templates/validation-summary/validation-summary.component';
import { ProgressIndicatorComponent } from './components/form-part-templates/progress-indicator/progress-indicator.component';
import { DefaultMasterDetailFormComponent } from './components/form-part-templates/default-master-detail-form/default-master-detail-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
var NetwaysLibModule = /** @class */ (function () {
    function NetwaysLibModule() {
    }
    NetwaysLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        WMatTimePickerComponent,
                        WTimeDialogComponent,
                        WClockComponent,
                        WTimeComponent,
                        FieldComponent,
                        BoundableFieldComponent,
                        InputFieldComponent,
                        SelectFieldComponent,
                        DatetimeFieldComponent,
                        DatetimeHijriFieldComponent,
                        CheckboxFieldComponent,
                        RadiobuttonFieldComponent,
                        MultiSelectFieldComponent,
                        ChipsFieldComponent,
                        EditorFieldComponent,
                        MaskFieldComponent,
                        TimeFieldComponent,
                        LocationFieldComponent,
                        FileUploadFieldComponent,
                        RecaptchaFieldComponent,
                        InfoFieldComponent,
                        MasterDetailFieldComponent,
                        ImageCropperFieldComponent,
                        RatingFieldComponent,
                        TabsSectionComponent,
                        NextPreviousSectionComponent,
                        ValidationSummaryComponent,
                        ProgressIndicatorComponent,
                        DefaultMasterDetailFormComponent,
                        DynamicFormComponent
                    ],
                    imports: [
                        CommonModule,
                        BrowserModule,
                        FormsModule,
                        BrowserAnimationsModule,
                        FlexLayoutModule,
                        InputTextModule,
                        CalendarModule,
                        CheckboxModule,
                        RadioButtonModule,
                        FileUploadModule,
                        EditorModule,
                        InputMaskModule,
                        ChipsModule,
                        DropdownModule,
                        MultiSelectModule,
                        MatDialogModule,
                        MatToolbarModule,
                        MatInputModule,
                        MatSnackBarModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatSelectModule,
                        ImageCropperModule,
                        RatingModule,
                        RecaptchaCommonModule,
                        RecaptchaModule.forRoot(),
                        NgbModule.forRoot(),
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [HttpClient]
                            }
                        }),
                        AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyDkk4mAY1r5Q-abux5POCscTR0LojWMwUo',
                            libraries: ['places'],
                            region: 'LB',
                            language: 'en'
                        })
                    ],
                    entryComponents: [
                        DefaultMasterDetailFormComponent,
                        WMatTimePickerComponent,
                        WTimeDialogComponent
                    ],
                    exports: [
                        WMatTimePickerComponent,
                        WTimeDialogComponent,
                        WClockComponent,
                        WTimeComponent,
                        FieldComponent,
                        BoundableFieldComponent,
                        InputFieldComponent,
                        SelectFieldComponent,
                        DatetimeFieldComponent,
                        DatetimeHijriFieldComponent,
                        CheckboxFieldComponent,
                        RadiobuttonFieldComponent,
                        MultiSelectFieldComponent,
                        ChipsFieldComponent,
                        EditorFieldComponent,
                        MaskFieldComponent,
                        TimeFieldComponent,
                        LocationFieldComponent,
                        FileUploadFieldComponent,
                        RecaptchaFieldComponent,
                        InfoFieldComponent,
                        MasterDetailFieldComponent,
                        ImageCropperFieldComponent,
                        RatingFieldComponent,
                        TabsSectionComponent,
                        NextPreviousSectionComponent,
                        ValidationSummaryComponent,
                        ProgressIndicatorComponent,
                        DefaultMasterDetailFormComponent,
                        DynamicFormComponent
                    ]
                },] },
    ];
    return NetwaysLibModule;
}());
export { NetwaysLibModule };
/**
 * @param {?} http
 * @return {?}
 */
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d2F5cy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0d2F5cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsZUFBZSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFDcEUsZUFBZSxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFDekUsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFDO0FBRTNCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3pILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMvRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFNUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQy9ILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzVILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzVILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBRWpILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQ3RJLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzlILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQzlILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGtHQUFrRyxDQUFDO0FBRXBKLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOzs7OztnQkFFdkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QiwyQkFBMkI7d0JBQzNCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQiwwQkFBMEI7d0JBQzFCLDBCQUEwQjt3QkFDMUIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLGdDQUFnQzt3QkFDaEMsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIsU0FBUyxDQUFDLE9BQU8sRUFBRTt3QkFDbkIsZUFBZSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxlQUFlO2dDQUN4QixVQUFVLEVBQUUsaUJBQWlCO2dDQUM3QixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkJBQ25CO3lCQUNGLENBQUM7d0JBQ0YsYUFBYSxDQUFDLE9BQU8sQ0FBQzs0QkFDcEIsTUFBTSxFQUFFLHlDQUF5Qzs0QkFDakQsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNyQixNQUFNLEVBQUUsSUFBSTs0QkFDWixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDO3FCQUNIO29CQUNELGVBQWUsRUFBRTt3QkFDZixnQ0FBZ0M7d0JBQ2hDLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLGtCQUFrQjt3QkFDbEIsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLDBCQUEwQjt3QkFDMUIsMEJBQTBCO3dCQUMxQixnQ0FBZ0M7d0JBQ2hDLG9CQUFvQjtxQkFDckI7aUJBQ0Y7OzJCQW5MRDs7U0FvTGEsZ0JBQWdCOzs7OztBQUU3QixNQUFNLDRCQUE0QixJQUFnQjtJQUNoRCxNQUFNLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlY2FwdGNoYUNvbW1vbk1vZHVsZSB9IGZyb20gJ25nLXJlY2FwdGNoYS9yZWNhcHRjaGEvcmVjYXB0Y2hhLWNvbW1vbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBSZWNhcHRjaGFNb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEvcmVjYXB0Y2hhL3JlY2FwdGNoYS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBZ21Db3JlTW9kdWxlIH0gZnJvbSAnQGFnbS9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYWxlbmRhcic7XHJcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGVja2JveCc7XHJcbmltcG9ydCB7IFJhZGlvQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yYWRpb2J1dHRvbic7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XHJcbmltcG9ydCB7IE11bHRpU2VsZWN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9tdWx0aXNlbGVjdCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2ZpbGV1cGxvYWQnO1xyXG5pbXBvcnQgeyBDaGlwc01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2hpcHMnO1xyXG5pbXBvcnQgeyBFZGl0b3JNb2R1bGUgfSBmcm9tICdwcmltZW5nL2VkaXRvcic7XHJcbmltcG9ydCB7IElucHV0TWFza01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXRtYXNrJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmcyLWltZy1jcm9wcGVyJztcclxuaW1wb3J0IHsgUmF0aW5nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yYXRpbmcnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7XHJcbiAgTWF0RGlhbG9nTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0VG9vbGJhck1vZHVsZSwgTWF0U25hY2tCYXJNb2R1bGUsXHJcbiAgTWF0QnV0dG9uTW9kdWxlLCBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SWNvbk1vZHVsZSxcclxuICBNYXRTZWxlY3RNb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBXTWF0VGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy1tYXQtdGltZXBpY2tlci93LW1hdC10aW1lcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdUaW1lRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LXRpbWUtZGlhbG9nL3ctdGltZS1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV0Nsb2NrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LWNsb2NrL3ctY2xvY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgV1RpbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctdGltZS93LXRpbWUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9maWVsZC9maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCb3VuZGFibGVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvYm91bmRhYmxlLWZpZWxkL2JvdW5kYWJsZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbnB1dC1maWVsZC9pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRldGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9kYXRldGltZS1maWVsZC9kYXRldGltZS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvc2VsZWN0LWZpZWxkL3NlbGVjdC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2RhdGV0aW1lLWhpanJpLWZpZWxkL2RhdGV0aW1lLWhpanJpLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoZWNrYm94LWZpZWxkL2NoZWNrYm94LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhZGlvYnV0dG9uLWZpZWxkL3JhZGlvYnV0dG9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL211bHRpLXNlbGVjdC1maWVsZC9tdWx0aS1zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hpcHNGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvY2hpcHMtZmllbGQvY2hpcHMtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2VkaXRvci1maWVsZC9lZGl0b3ItZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFza0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tYXNrLWZpZWxkL21hc2stZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGltZUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy90aW1lLWZpZWxkL3RpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9jYXRpb25GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbG9jYXRpb24tZmllbGQvbG9jYXRpb24tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9maWxlLXVwbG9hZC1maWVsZC9maWxlLXVwbG9hZC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2luZm8tZmllbGQvaW5mby1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXN0ZXJEZXRhaWxGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbWFzdGVyLWRldGFpbC1maWVsZC9tYXN0ZXItZGV0YWlsLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbWFnZS1jcm9wcGVyLWZpZWxkL2ltYWdlLWNyb3BwZXItZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0aW5nRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JhdGluZy1maWVsZC9yYXRpbmctZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3JlY2FwdGNoYS1maWVsZC9yZWNhcHRjaGEtZmllbGQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFRhYnNTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvdGFicy1zZWN0aW9uL3RhYnMtc2VjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZXh0UHJldmlvdXNTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvbmV4dC1wcmV2aW91cy1zZWN0aW9uL25leHQtcHJldmlvdXMtc2VjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3ZhbGlkYXRpb24tc3VtbWFyeS92YWxpZGF0aW9uLXN1bW1hcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy9wcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0vZGVmYXVsdC1tYXN0ZXItZGV0YWlsLWZvcm0uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBXTWF0VGltZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdUaW1lRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgV0Nsb2NrQ29tcG9uZW50LFxyXG4gICAgV1RpbWVDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudCxcclxuICAgIEJvdW5kYWJsZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCxcclxuICAgIERhdGV0aW1lSGlqcmlGaWVsZENvbXBvbmVudCxcclxuICAgIENoZWNrYm94RmllbGRDb21wb25lbnQsXHJcbiAgICBSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgTXVsdGlTZWxlY3RGaWVsZENvbXBvbmVudCxcclxuICAgIENoaXBzRmllbGRDb21wb25lbnQsXHJcbiAgICBFZGl0b3JGaWVsZENvbXBvbmVudCxcclxuICAgIE1hc2tGaWVsZENvbXBvbmVudCxcclxuICAgIFRpbWVGaWVsZENvbXBvbmVudCxcclxuICAgIExvY2F0aW9uRmllbGRDb21wb25lbnQsXHJcbiAgICBGaWxlVXBsb2FkRmllbGRDb21wb25lbnQsXHJcbiAgICBSZWNhcHRjaGFGaWVsZENvbXBvbmVudCxcclxuICAgIEluZm9GaWVsZENvbXBvbmVudCxcclxuICAgIE1hc3RlckRldGFpbEZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW1hZ2VDcm9wcGVyRmllbGRDb21wb25lbnQsXHJcbiAgICBSYXRpbmdGaWVsZENvbXBvbmVudCxcclxuICAgIFRhYnNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCxcclxuICAgIFZhbGlkYXRpb25TdW1tYXJ5Q29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NJbmRpY2F0b3JDb21wb25lbnQsXHJcbiAgICBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCxcclxuICAgIER5bmFtaWNGb3JtQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBJbnB1dFRleHRNb2R1bGUsXHJcbiAgICBDYWxlbmRhck1vZHVsZSxcclxuICAgIENoZWNrYm94TW9kdWxlLFxyXG4gICAgUmFkaW9CdXR0b25Nb2R1bGUsXHJcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgRWRpdG9yTW9kdWxlLFxyXG4gICAgSW5wdXRNYXNrTW9kdWxlLFxyXG4gICAgQ2hpcHNNb2R1bGUsXHJcbiAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgIE11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxyXG4gICAgUmF0aW5nTW9kdWxlLFxyXG4gICAgUmVjYXB0Y2hhQ29tbW9uTW9kdWxlLFxyXG4gICAgUmVjYXB0Y2hhTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE5nYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGxvYWRlcjoge1xyXG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcclxuICAgICAgICB1c2VGYWN0b3J5OiBIdHRwTG9hZGVyRmFjdG9yeSxcclxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBBZ21Db3JlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBhcGlLZXk6ICdBSXphU3lEa2s0bUFZMXI1US1hYnV4NVBPQ3NjVFIwTG9qV013VW8nLFxyXG4gICAgICBsaWJyYXJpZXM6IFsncGxhY2VzJ10sXHJcbiAgICAgIHJlZ2lvbjogJ0xCJyxcclxuICAgICAgbGFuZ3VhZ2U6ICdlbidcclxuICAgIH0pXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LFxyXG4gICAgV01hdFRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBXVGltZURpYWxvZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgV01hdFRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBXVGltZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIFdDbG9ja0NvbXBvbmVudCxcclxuICAgIFdUaW1lQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcbiAgICBCb3VuZGFibGVGaWVsZENvbXBvbmVudCxcclxuICAgIElucHV0RmllbGRDb21wb25lbnQsXHJcbiAgICBTZWxlY3RGaWVsZENvbXBvbmVudCxcclxuICAgIERhdGV0aW1lRmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCxcclxuICAgIE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBDaGlwc0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgRWRpdG9yRmllbGRDb21wb25lbnQsXHJcbiAgICBNYXNrRmllbGRDb21wb25lbnQsXHJcbiAgICBUaW1lRmllbGRDb21wb25lbnQsXHJcbiAgICBMb2NhdGlvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQsXHJcbiAgICBJbmZvRmllbGRDb21wb25lbnQsXHJcbiAgICBNYXN0ZXJEZXRhaWxGaWVsZENvbXBvbmVudCxcclxuICAgIEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmF0aW5nRmllbGRDb21wb25lbnQsXHJcbiAgICBUYWJzU2VjdGlvbkNvbXBvbmVudCxcclxuICAgIE5leHRQcmV2aW91c1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsXHJcbiAgICBEeW5hbWljRm9ybUNvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ldHdheXNMaWJNb2R1bGUgeyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSHR0cExvYWRlckZhY3RvcnkoaHR0cDogSHR0cENsaWVudCkge1xyXG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwKTtcclxufVxyXG4iXX0=