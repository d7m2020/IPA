import { ElementRef, NgZone } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { BridgeService } from '../../../services/bridge.service';
import { MouseEvent, MapsAPILoader } from '@agm/core';
import { Marker } from '../../../models/map-marker';
export declare class LocationFieldComponent extends FieldComponent {
    bridgeService: BridgeService;
    private mapsAPILoader;
    private ngZone;
    /** @property The search element.*/
    searchElement: ElementRef;
    /** @property Whether to validate for range.*/
    validateForRange: boolean;
    constructor(bridgeService: BridgeService, mapsAPILoader: MapsAPILoader, ngZone: NgZone);
    /** @description Handles the field's default settings.*/
    handleDefaultSettings(): void;
    /** @description Updates the field's value.
     * @param any newValue The new field value.
    */
    updateValue(newValue: any): void;
    /** @description Clears the field's value.*/
    clearValue(): void;
    /** @description Appends the form data.
     * @param FormData data The data.
     * @return FormData The updated form data.
    */
    appendFormData(data: FormData): FormData;
    /** @description Add a marker from the clicked map location.
     * @param MouseEvent eventArguments The event arguments.
    */
    addMarkers(eventArguments: MouseEvent): void;
    /** @description Activates the google map location search.*/
    activateSearchInput(): void;
    /** @description Add a marker from the clicked map location.
     * @param number latitude The latitude.
     * @param number longitude The longitude.
    */
    private addMarkersFromLocation(latitude, longitude);
    /** @description Update the marker's position when drag is done.
     * @param Marker marker The marker to update.
     * @param any eventArguments The event arguments of the action causing the trigger.
    */
    updateMarkerPosition(marker: Marker, eventArguments: MouseEvent): void;
}
