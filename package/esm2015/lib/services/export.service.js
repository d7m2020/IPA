/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as i0 from "@angular/core";
/** @type {?} */
const excelExtension = '.xlsx';
/** @type {?} */
const pdfType = 'application/pdf';
/** @type {?} */
const pdfExtension = '.pdf';
export class ExportService {
    constructor() { }
    /**
     * \@description Exports a json object as an excel file.
     * @param {?} json
     * @param {?} fileName
     * @param {?=} rtl
     * @param {?=} skipHeader
     * @return {?}
     */
    exportAsExcel(json, fileName, rtl = true, skipHeader = false) {
        /** @type {?} */
        const worksheet = XLSX.utils.json_to_sheet(json, { skipHeader: skipHeader });
        /** @type {?} */
        const workbook = XLSX.utils.book_new();
        if (!workbook.Workbook) {
            workbook.Workbook = {};
        }
        if (!workbook.Workbook.Views) {
            workbook.Workbook.Views = [];
        }
        if (!workbook.Workbook.Views[0]) {
            workbook.Workbook.Views[0] = {};
        }
        workbook.Workbook.Views[0].RTL = rtl;
        // generate workbook and add the worksheet
        XLSX.utils.book_append_sheet(workbook, worksheet, 'data');
        // save to file *
        XLSX.writeFile(workbook, fileName + '_' + new Date().getTime() + excelExtension);
    }
    /**
     * \@description Exports an html string as pdf.
     * @param {?} html
     * @param {?} fileName
     * @param {?=} size
     * @param {?=} margins
     * @return {?}
     */
    exportAsPdf(html, fileName, size = 'A4', margins = [0, 0]) {
        if (html) {
            html2canvas(html).then(canvas => {
                /** @type {?} */
                const dataUri = canvas.toDataURL();
                /** @type {?} */
                const docDefinition = {
                    pageSize: size,
                    pageMargins: margins,
                    content: [
                        {
                            image: dataUri
                        }
                    ]
                };
                pdfMake.createPdf(docDefinition).getBlob((file) => {
                    this.promptFileSave(file, pdfType, fileName, pdfExtension);
                });
            });
        }
    }
    /**
     * \@description Exports a file as pdf.
     * @param {?} buffer
     * @param {?} fileType
     * @param {?} fileName
     * @param {?} fileExtension
     * @return {?}
     */
    promptFileSave(buffer, fileType, fileName, fileExtension) {
        /** @type {?} */
        const data = new Blob([buffer], {
            type: fileType
        });
        FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + fileExtension);
    }
}
ExportService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
ExportService.ctorParameters = () => [];
/** @nocollapse */ ExportService.ngInjectableDef = i0.defineInjectable({ factory: function ExportService_Factory() { return new ExportService(); }, token: ExportService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7O0FBRTdCLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQzs7QUFDL0IsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUM7O0FBQ2xDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztBQUs1QixNQUFNO0lBQ0osaUJBQWlCOzs7Ozs7Ozs7SUFRVixhQUFhLENBQUMsSUFBVyxFQUFFLFFBQWdCLEVBQUUsTUFBZSxJQUFJLEVBQUUsYUFBc0IsS0FBSzs7UUFFbEcsTUFBTSxTQUFTLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOztRQUU3RixNQUFNLFFBQVEsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7UUFHckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztRQUcxRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFTNUUsV0FBVyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQVksSUFBSSxFQUFFLFVBQXlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTs7Z0JBQzlCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Z0JBRW5DLE1BQU0sYUFBYSxHQUFHO29CQUNwQixRQUFRLEVBQUUsSUFBSTtvQkFDZCxXQUFXLEVBQUUsT0FBTztvQkFDcEIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLEtBQUssRUFBRSxPQUFPO3lCQUNmO3FCQUNGO2lCQUNGLENBQUM7Z0JBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDNUQsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ0o7Ozs7Ozs7Ozs7SUFTSSxjQUFjLENBQUMsTUFBVyxFQUFFLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxhQUFxQjs7UUFDMUYsTUFBTSxJQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQzs7OztZQTVFakYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgKiBhcyBYTFNYIGZyb20gJ3hsc3gnO1xyXG5cclxuY29uc3QgZXhjZWxFeHRlbnNpb24gPSAnLnhsc3gnO1xyXG5jb25zdCBwZGZUeXBlID0gJ2FwcGxpY2F0aW9uL3BkZic7XHJcbmNvbnN0IHBkZkV4dGVuc2lvbiA9ICcucGRmJztcclxuXHJcbmRlY2xhcmUgbGV0IGh0bWwyY2FudmFzLCBwZGZNYWtlO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEV4cG9ydFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyBhIGpzb24gb2JqZWN0IGFzIGFuIGV4Y2VsIGZpbGUuXHJcbiAgICogQHBhcmFtIGFueSBqc29uIFRoZSBqc29uIG9iamVjdC5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVOYW1lIFRoZSBleGNlbCBmaWxlIG5hbWUuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gcnRsIFdoZXRoZXIgcmlnaHQgdG8gbGVmdCBvciBsZWZ0IHRvIHJpZ2h0LlxyXG4gICAqIEBwYXJhbSBib29sZWFuIHNraXBIZWFkZXIgV2hldGhlciB0byBza2lwIHRoZSBoZWFkZXIuXHJcbiAgKi9cclxuICBwdWJsaWMgZXhwb3J0QXNFeGNlbChqc29uOiBhbnlbXSwgZmlsZU5hbWU6IHN0cmluZywgcnRsOiBib29sZWFuID0gdHJ1ZSwgc2tpcEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAvLyBnZW5lcmF0ZSB3b3Jrc2hlZXRcclxuICAgIGNvbnN0IHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoanNvbiwgeyBza2lwSGVhZGVyOiBza2lwSGVhZGVyIH0pO1xyXG5cclxuICAgIGNvbnN0IHdvcmtib29rOiBYTFNYLldvcmtCb29rID0gWExTWC51dGlscy5ib29rX25ldygpO1xyXG5cclxuICAgIGlmICghd29ya2Jvb2suV29ya2Jvb2spIHtcclxuICAgICAgd29ya2Jvb2suV29ya2Jvb2sgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdvcmtib29rLldvcmtib29rLlZpZXdzKSB7XHJcbiAgICAgIHdvcmtib29rLldvcmtib29rLlZpZXdzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3b3JrYm9vay5Xb3JrYm9vay5WaWV3c1swXSkge1xyXG4gICAgICB3b3JrYm9vay5Xb3JrYm9vay5WaWV3c1swXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmtib29rLldvcmtib29rLlZpZXdzWzBdLlJUTCA9IHJ0bDtcclxuXHJcbiAgICAvLyBnZW5lcmF0ZSB3b3JrYm9vayBhbmQgYWRkIHRoZSB3b3Jrc2hlZXRcclxuICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQod29ya2Jvb2ssIHdvcmtzaGVldCwgJ2RhdGEnKTtcclxuXHJcbiAgICAvLyBzYXZlIHRvIGZpbGUgKlxyXG4gICAgWExTWC53cml0ZUZpbGUod29ya2Jvb2ssIGZpbGVOYW1lICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBleGNlbEV4dGVuc2lvbik7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgYW4gaHRtbCBzdHJpbmcgYXMgcGRmLlxyXG4gICAgKiBAcGFyYW0gc3RyaW5nIGh0bWwgVGhlIGh0bWwgdG8gcHJpbnQuXHJcbiAgICAqIEBwYXJhbSBBcnJheTxudW1iZXI+IG1hcmdpbnMgVGhlIHBkZiBwYWdlIG1hcmdpbnMuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmcgZmlsZU5hbWUgVGhlIHBkZiBmaWxlIG5hbWUuXHJcbiAgICAqIEBwYXJhbSBhbnkgc2l6ZSBUaGUgcGRmIHNpemUuXHJcbiAgKi9cclxuICBwdWJsaWMgZXhwb3J0QXNQZGYoaHRtbDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBzaXplOiBhbnkgPSAnQTQnLCBtYXJnaW5zOiBBcnJheTxudW1iZXI+ID0gWzAsIDBdKSB7XHJcbiAgICBpZiAoaHRtbCkge1xyXG4gICAgICBodG1sMmNhbnZhcyhodG1sKS50aGVuKGNhbnZhcyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVVyaSA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZG9jRGVmaW5pdGlvbiA9IHtcclxuICAgICAgICAgIHBhZ2VTaXplOiBzaXplLFxyXG4gICAgICAgICAgcGFnZU1hcmdpbnM6IG1hcmdpbnMsXHJcbiAgICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpbWFnZTogZGF0YVVyaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcGRmTWFrZS5jcmVhdGVQZGYoZG9jRGVmaW5pdGlvbikuZ2V0QmxvYigoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9tcHRGaWxlU2F2ZShmaWxlLCBwZGZUeXBlLCBmaWxlTmFtZSwgcGRmRXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGRlc2NyaXB0aW9uIEV4cG9ydHMgYSBmaWxlIGFzIHBkZi5cclxuICAgKiBAcGFyYW0gYW55IGJ1ZmZlciBUaGUgZmlsZSBidWZmZXIuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlVHlwZSBUaGUgZmlsZSBtaW1lIHR5cGUuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlTmFtZSBUaGUgZmlsZSBuYW1lLlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZUV4dGVuc2lvbiBUaGUgZmlsZSBleHRlbnNpb24uXHJcbiAgKi9cclxuICBwdWJsaWMgcHJvbXB0RmlsZVNhdmUoYnVmZmVyOiBhbnksIGZpbGVUeXBlOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGZpbGVFeHRlbnNpb246IHN0cmluZykge1xyXG4gICAgY29uc3QgZGF0YTogQmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7XHJcbiAgICAgIHR5cGU6IGZpbGVUeXBlXHJcbiAgICB9KTtcclxuXHJcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGRhdGEsIGZpbGVOYW1lICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBmaWxlRXh0ZW5zaW9uKTtcclxuICB9XHJcbn1cclxuIl19