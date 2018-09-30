import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class HttpRequestsService {
    protected httpClient: HttpClient;
    constructor(httpClient: HttpClient);
    /** @description Executes a get request and returns the response.
     * @param string endpointUrl The endpoint Url.
     * @return Observable<any> The response.
    */
    get(endpointUrl: string): Observable<any>;
    /** @description Executes a post request and returns the response.
     * @param string endpointUrl The endpoint Url.
     * @param any request The request payload.
     * @return Observable<any> The response.
    */
    post(endpointUrl: string, request: any): Observable<any>;
    /** @description Executes a put request and returns the response.
     * @param string endpointUrl The endpoint Url.
     * @param any request The request payload.
     * @return Observable<any> The response.
    */
    put(endpointUrl: string, request: any): Observable<any>;
}
