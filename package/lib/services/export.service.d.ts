export declare class ExportService {
    constructor();
    /** @description Exports a json object as an excel file.
     * @param any json The json object.
     * @param string fileName The excel file name.
     * @param boolean rtl Whether right to left or left to right.
     * @param boolean skipHeader Whether to skip the header.
    */
    exportAsExcel(json: any[], fileName: string, rtl?: boolean, skipHeader?: boolean): void;
    /** @description Exports an html string as pdf.
      * @param string html The html to print.
      * @param Array<number> margins The pdf page margins.
      * @param string fileName The pdf file name.
      * @param any size The pdf size.
    */
    exportAsPdf(html: string, fileName: string, size?: any, margins?: Array<number>): void;
    /** @description Exports a file as pdf.
     * @param any buffer The file buffer.
     * @param string fileType The file mime type.
     * @param string fileName The file name.
     * @param string fileExtension The file extension.
    */
    promptFileSave(buffer: any, fileType: string, fileName: string, fileExtension: string): void;
}
