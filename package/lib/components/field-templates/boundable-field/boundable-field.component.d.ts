import { FieldComponent } from '../field/field.component';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { BridgeService } from '../../../services/bridge.service';
import { UtilitiesService } from '../../../services/utilities.service';
import { HttpRequestsService } from '../../../services/http-requests.service';
export declare class BoundableFieldComponent extends FieldComponent {
    bridgeService: BridgeService;
    private httpRequestsService;
    private translateService;
    private utilitiesService;
    private route;
    constructor(bridgeService: BridgeService, httpRequestsService: HttpRequestsService, translateService: TranslateService, utilitiesService: UtilitiesService, route: ActivatedRoute);
    /** @description Handles the field's default settings.*/
    handleDefaultSettings(): void;
    /** @description Binds the field's options.*/
    protected dataBindOptions(): void;
    /** @description Binds the field's options.
     * @param string endpoint The endpoint.
    */
    protected bindOptions(endpoint: string): void;
}
