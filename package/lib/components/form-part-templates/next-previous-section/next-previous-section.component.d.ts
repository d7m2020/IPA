import { BridgeService } from '../../../services/bridge.service';
export declare class NextPreviousSectionComponent {
    bridgeService: BridgeService;
    constructor(bridgeService: BridgeService);
    /** @description Cycles through the sections.
     * @param number increment The increment.
    */
    incrementSection(increment: number): void;
}
