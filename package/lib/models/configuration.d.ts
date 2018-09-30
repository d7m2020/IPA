import { Settings, Endpoints, Notifications, Section, Field, InputError } from '.';
export declare class Configuration {
    settings: Settings;
    endpoints: Endpoints;
    notifications: Notifications;
    sections: Array<Section>;
    currentSection: Section;
    fields: any;
    mergedFields: Array<Field>;
    validationErrors: Array<InputError>;
    isLocal: boolean;
    buttons: any;
}
