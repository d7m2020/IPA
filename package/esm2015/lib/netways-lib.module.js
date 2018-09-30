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
export class NetwaysLibModule {
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
/**
 * @param {?} http
 * @return {?}
 */
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d2F5cy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV0d2F5cy1saWIvIiwic291cmNlcyI6WyJsaWIvbmV0d2F5cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFP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cmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWNhcHRjaGFDb21tb25Nb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEvcmVjYXB0Y2hhL3JlY2FwdGNoYS1jb21tb24ubW9kdWxlJztcclxuaW1wb3J0IHsgUmVjYXB0Y2hhTW9kdWxlIH0gZnJvbSAnbmctcmVjYXB0Y2hhL3JlY2FwdGNoYS9yZWNhcHRjaGEubW9kdWxlJztcclxuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmFkaW9idXR0b24nO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbXVsdGlzZWxlY3QnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgQ2hpcHNNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NoaXBzJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9lZGl0b3InO1xyXG5pbXBvcnQgeyBJbnB1dE1hc2tNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0bWFzayc7XHJcbmltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25nMi1pbWctY3JvcHBlcic7XHJcbmltcG9ydCB7IFJhdGluZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcmF0aW5nJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQge1xyXG4gIE1hdERpYWxvZ01vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFRvb2xiYXJNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gIE1hdEJ1dHRvbk1vZHVsZSwgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdEljb25Nb2R1bGUsXHJcbiAgTWF0U2VsZWN0TW9kdWxlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgV01hdFRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbHMvdGltZS1jb250cm9sL3ctbWF0LXRpbWVwaWNrZXIvdy1tYXQtdGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXVGltZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy10aW1lLWRpYWxvZy93LXRpbWUtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdDbG9ja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9scy90aW1lLWNvbnRyb2wvdy1jbG9jay93LWNsb2NrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzL3RpbWUtY29udHJvbC93LXRpbWUvdy10aW1lLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQm91bmRhYmxlRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2JvdW5kYWJsZS1maWVsZC9ib3VuZGFibGUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZGF0ZXRpbWUtZmllbGQvZGF0ZXRpbWUtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9kYXRldGltZS1oaWpyaS1maWVsZC9kYXRldGltZS1oaWpyaS1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9jaGVja2JveC1maWVsZC9jaGVja2JveC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSYWRpb2J1dHRvbkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yYWRpb2J1dHRvbi1maWVsZC9yYWRpb2J1dHRvbi1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9tdWx0aS1zZWxlY3QtZmllbGQvbXVsdGktc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoaXBzRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2NoaXBzLWZpZWxkL2NoaXBzLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRvckZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9lZGl0b3ItZmllbGQvZWRpdG9yLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hc2tGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvbWFzay1maWVsZC9tYXNrLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvdGltZS1maWVsZC90aW1lLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvY2F0aW9uRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL2xvY2F0aW9uLWZpZWxkL2xvY2F0aW9uLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvZmlsZS11cGxvYWQtZmllbGQvZmlsZS11cGxvYWQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5mb0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9pbmZvLWZpZWxkL2luZm8tZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQtdGVtcGxhdGVzL21hc3Rlci1kZXRhaWwtZmllbGQvbWFzdGVyLWRldGFpbC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWVsZC10ZW1wbGF0ZXMvaW1hZ2UtY3JvcHBlci1maWVsZC9pbWFnZS1jcm9wcGVyLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJhdGluZ0ZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yYXRpbmctZmllbGQvcmF0aW5nLWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpZWxkLXRlbXBsYXRlcy9yZWNhcHRjaGEtZmllbGQvcmVjYXB0Y2hhLWZpZWxkLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBUYWJzU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmV4dFByZXZpb3VzU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL25leHQtcHJldmlvdXMtc2VjdGlvbi9uZXh0LXByZXZpb3VzLXNlY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1wYXJ0LXRlbXBsYXRlcy92YWxpZGF0aW9uLXN1bW1hcnkvdmFsaWRhdGlvbi1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tcGFydC10ZW1wbGF0ZXMvcHJvZ3Jlc3MtaW5kaWNhdG9yL3Byb2dyZXNzLWluZGljYXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLXBhcnQtdGVtcGxhdGVzL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtL2RlZmF1bHQtbWFzdGVyLWRldGFpbC1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgV01hdFRpbWVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBXVGltZURpYWxvZ0NvbXBvbmVudCxcclxuICAgIFdDbG9ja0NvbXBvbmVudCxcclxuICAgIFdUaW1lQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcbiAgICBCb3VuZGFibGVGaWVsZENvbXBvbmVudCxcclxuICAgIElucHV0RmllbGRDb21wb25lbnQsXHJcbiAgICBTZWxlY3RGaWVsZENvbXBvbmVudCxcclxuICAgIERhdGV0aW1lRmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUhpanJpRmllbGRDb21wb25lbnQsXHJcbiAgICBDaGVja2JveEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmFkaW9idXR0b25GaWVsZENvbXBvbmVudCxcclxuICAgIE11bHRpU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBDaGlwc0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgRWRpdG9yRmllbGRDb21wb25lbnQsXHJcbiAgICBNYXNrRmllbGRDb21wb25lbnQsXHJcbiAgICBUaW1lRmllbGRDb21wb25lbnQsXHJcbiAgICBMb2NhdGlvbkZpZWxkQ29tcG9uZW50LFxyXG4gICAgRmlsZVVwbG9hZEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmVjYXB0Y2hhRmllbGRDb21wb25lbnQsXHJcbiAgICBJbmZvRmllbGRDb21wb25lbnQsXHJcbiAgICBNYXN0ZXJEZXRhaWxGaWVsZENvbXBvbmVudCxcclxuICAgIEltYWdlQ3JvcHBlckZpZWxkQ29tcG9uZW50LFxyXG4gICAgUmF0aW5nRmllbGRDb21wb25lbnQsXHJcbiAgICBUYWJzU2VjdGlvbkNvbXBvbmVudCxcclxuICAgIE5leHRQcmV2aW91c1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBWYWxpZGF0aW9uU3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFByb2dyZXNzSW5kaWNhdG9yQ29tcG9uZW50LFxyXG4gICAgRGVmYXVsdE1hc3RlckRldGFpbEZvcm1Db21wb25lbnQsXHJcbiAgICBEeW5hbWljRm9ybUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICBDaGVja2JveE1vZHVsZSxcclxuICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcclxuICAgIEVkaXRvck1vZHVsZSxcclxuICAgIElucHV0TWFza01vZHVsZSxcclxuICAgIENoaXBzTW9kdWxlLFxyXG4gICAgRHJvcGRvd25Nb2R1bGUsXHJcbiAgICBNdWx0aVNlbGVjdE1vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcclxuICAgIFJhdGluZ01vZHVsZSxcclxuICAgIFJlY2FwdGNoYUNvbW1vbk1vZHVsZSxcclxuICAgIFJlY2FwdGNoYU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOZ2JNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBsb2FkZXI6IHtcclxuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXHJcbiAgICAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXHJcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnRdXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgYXBpS2V5OiAnQUl6YVN5RGtrNG1BWTFyNVEtYWJ1eDVQT0NzY1RSMExvaldNd1VvJyxcclxuICAgICAgbGlicmFyaWVzOiBbJ3BsYWNlcyddLFxyXG4gICAgICByZWdpb246ICdMQicsXHJcbiAgICAgIGxhbmd1YWdlOiAnZW4nXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBEZWZhdWx0TWFzdGVyRGV0YWlsRm9ybUNvbXBvbmVudCxcclxuICAgIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV1RpbWVEaWFsb2dDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFdNYXRUaW1lUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV1RpbWVEaWFsb2dDb21wb25lbnQsXHJcbiAgICBXQ2xvY2tDb21wb25lbnQsXHJcbiAgICBXVGltZUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQm91bmRhYmxlRmllbGRDb21wb25lbnQsXHJcbiAgICBJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0RmllbGRDb21wb25lbnQsXHJcbiAgICBEYXRldGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgRGF0ZXRpbWVIaWpyaUZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hGaWVsZENvbXBvbmVudCxcclxuICAgIFJhZGlvYnV0dG9uRmllbGRDb21wb25lbnQsXHJcbiAgICBNdWx0aVNlbGVjdEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ2hpcHNGaWVsZENvbXBvbmVudCxcclxuICAgIEVkaXRvckZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFza0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGltZUZpZWxkQ29tcG9uZW50LFxyXG4gICAgTG9jYXRpb25GaWVsZENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRGaWVsZENvbXBvbmVudCxcclxuICAgIFJlY2FwdGNoYUZpZWxkQ29tcG9uZW50LFxyXG4gICAgSW5mb0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgTWFzdGVyRGV0YWlsRmllbGRDb21wb25lbnQsXHJcbiAgICBJbWFnZUNyb3BwZXJGaWVsZENvbXBvbmVudCxcclxuICAgIFJhdGluZ0ZpZWxkQ29tcG9uZW50LFxyXG4gICAgVGFic1NlY3Rpb25Db21wb25lbnQsXHJcbiAgICBOZXh0UHJldmlvdXNTZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgVmFsaWRhdGlvblN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBQcm9ncmVzc0luZGljYXRvckNvbXBvbmVudCxcclxuICAgIERlZmF1bHRNYXN0ZXJEZXRhaWxGb3JtQ29tcG9uZW50LFxyXG4gICAgRHluYW1pY0Zvcm1Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXR3YXlzTGliTW9kdWxlIHsgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCk7XHJcbn1cclxuIl19