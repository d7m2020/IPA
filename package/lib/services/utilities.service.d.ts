import { HttpRequestsService } from './http-requests.service';
import { LocalStorageService } from './local-storage.service';
import { LanguageService } from './language.service';
import { BridgeService } from './bridge.service';
export declare class UtilitiesService {
    private bridgeService;
    private httpRequestsService;
    private localStorageService;
    private languageService;
    constructor(bridgeService: BridgeService, httpRequestsService: HttpRequestsService, localStorageService: LocalStorageService, languageService: LanguageService);
    /** @description Evaluates a funtion from its string representation.
     * Alternatively returns a default value if not found.
     * @param string functionString The function string.
     * @param any defaultValue The default value.
     * @return any The funtion evaluation result.
    */
    evaluateFunctionOrDefault(functionString: string, defaultValue: any): any;
    /** @description Attempts to load a file from local storage.
     * If not found it gets it as a web request.
     * @param string key The key. It is both the storage key or the web url.
     * @return any The loaded file.
    */
    loadFile(key: any): Promise<any>;
    /** @description Recursively merge properties of two objects from right to left.
     * @param any object1 The left object.
     * @param any object2 The right object.
     * @return any The merged object.
    */
    mergeRecursive(object1: any, object2: any): any;
    /** @description Returns the string with its tokens replaced.
     * @param string input The string input.
     * @param any route The route.
     * @param any additionalParameters The additional parameters.
     * @return string The string with its tokens replaced.
    */
    replaceTokens(input: string, route: any, additionalParameters: any): string;
    /** @description Gets the string with its tokens replaced.
      * @param string input The string input.
      * @param any parameters The parameters.
      * @return string The string with its tokens replaced.
    */
    private replaceTokensFromParameters(input, parameters);
    /** @description Gets the query string parameters.
      * @return object The query string parameters.
    */
    private getQueryStringParameters();
    /** @description Decodes a URI Component.
      * @param string input The string input.
      * @return string The decoded URI Component.
    */
    private decodeURIComponent(input);
}
