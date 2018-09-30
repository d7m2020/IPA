import { BridgeService } from '../../../services/bridge.service';
import { Section } from '../../../models/section';
export declare class TabsSectionComponent {
    bridgeService: BridgeService;
    constructor(bridgeService: BridgeService);
    /** @description Switches the active section.
     * @param Section section The new active section.
    */
    switchSection(section: Section): void;
}
