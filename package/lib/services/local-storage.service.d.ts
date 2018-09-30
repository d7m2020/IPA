export declare class LocalStorageService {
    constructor();
    /** @description Checks a record exists in the local storage.
     * @param string key The key.
     * @return boolean Whether the record exists.
    */
    doesKeyExist(key: string): boolean;
    /** @description Saves a record in the local storage.
     * @param string key The key.
     * @param any data The record data.
    */
    save(key: string, data: any): void;
    /** @description Loads a record from the local storage.
     * @param string key The key.
     * @return any data The record data.
    */
    load(key: string): any;
    /** @description Loads a record from the local storage if it exists.
     * Alternatively returns a default value if not found.
     * @param string key The key.
     * @param any defaultValue The default value.
     * @return any data The record data.
    */
    loadOrDefault(key: string, defaultValue: any): any;
}
