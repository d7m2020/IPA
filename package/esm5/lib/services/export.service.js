/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as i0 from "@angular/core";
/** @type {?} */
var excelExtension = '.xlsx';
/** @type {?} */
var pdfType = 'application/pdf';
/** @type {?} */
var pdfExtension = '.pdf';
var ExportService = /** @class */ (function () {
    function ExportService() {
    }
    /**
     * \@description Exports a json object as an excel file.
     * @param {?} json
     * @param {?} fileName
     * @param {?=} rtl
     * @param {?=} skipHeader
     * @return {?}
     */
    ExportService.prototype.exportAsExcel = /**
     * \@description Exports a json object as an excel file.
     * @param {?} json
     * @param {?} fileName
     * @param {?=} rtl
     * @param {?=} skipHeader
     * @return {?}
     */
    function (json, fileName, rtl, skipHeader) {
        if (rtl === void 0) { rtl = true; }
        if (skipHeader === void 0) { skipHeader = false; }
        /** @type {?} */
        var worksheet = XLSX.utils.json_to_sheet(json, { skipHeader: skipHeader });
        /** @type {?} */
        var workbook = XLSX.utils.book_new();
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
    };
    /**
     * \@description Exports an html string as pdf.
     * @param {?} html
     * @param {?} fileName
     * @param {?=} size
     * @param {?=} margins
     * @return {?}
     */
    ExportService.prototype.exportAsPdf = /**
     * \@description Exports an html string as pdf.
     * @param {?} html
     * @param {?} fileName
     * @param {?=} size
     * @param {?=} margins
     * @return {?}
     */
    function (html, fileName, size, margins) {
        var _this = this;
        if (size === void 0) { size = 'A4'; }
        if (margins === void 0) { margins = [0, 0]; }
        if (html) {
            html2canvas(html).then(function (canvas) {
                /** @type {?} */
                var dataUri = canvas.toDataURL();
                /** @type {?} */
                var docDefinition = {
                    pageSize: size,
                    pageMargins: margins,
                    content: [
                        {
                            image: dataUri
                        }
                    ]
                };
                pdfMake.createPdf(docDefinition).getBlob(function (file) {
                    _this.promptFileSave(file, pdfType, fileName, pdfExtension);
                });
            });
        }
    };
    /**
     * \@description Exports a file as pdf.
     * @param {?} buffer
     * @param {?} fileType
     * @param {?} fileName
     * @param {?} fileExtension
     * @return {?}
     */
    ExportService.prototype.promptFileSave = /**
     * \@description Exports a file as pdf.
     * @param {?} buffer
     * @param {?} fileType
     * @param {?} fileName
     * @param {?} fileExtension
     * @return {?}
     */
    function (buffer, fileType, fileName, fileExtension) {
        /** @type {?} */
        var data = new Blob([buffer], {
            type: fileType
        });
        FileSaver.saveAs(data, fileName + '_' + new Date().getTime() + fileExtension);
    };
    ExportService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ExportService.ctorParameters = function () { return []; };
    /** @nocollapse */ ExportService.ngInjectableDef = i0.defineInjectable({ factory: function ExportService_Factory() { return new ExportService(); }, token: ExportService, providedIn: "root" });
    return ExportService;
}());
export { ExportService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXR3YXlzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssU0FBUyxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQzs7O0FBRTdCLElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQzs7QUFDL0IsSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUM7O0FBQ2xDLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQzs7SUFNMUI7S0FBaUI7Ozs7Ozs7OztJQVFWLHFDQUFhOzs7Ozs7OztjQUFDLElBQVcsRUFBRSxRQUFnQixFQUFFLEdBQW1CLEVBQUUsVUFBMkI7UUFBaEQsb0JBQUEsRUFBQSxVQUFtQjtRQUFFLDJCQUFBLEVBQUEsa0JBQTJCOztRQUVsRyxJQUFNLFNBQVMsR0FBbUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7O1FBRTdGLElBQU0sUUFBUSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXRELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDakM7UUFFRCxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztRQUdyQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O1FBRzFELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQzs7Ozs7Ozs7OztJQVM1RSxtQ0FBVzs7Ozs7Ozs7Y0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxJQUFnQixFQUFFLE9BQStCOztRQUFqRCxxQkFBQSxFQUFBLFdBQWdCO1FBQUUsd0JBQUEsRUFBQSxXQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTs7Z0JBQzNCLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7Z0JBRW5DLElBQU0sYUFBYSxHQUFHO29CQUNwQixRQUFRLEVBQUUsSUFBSTtvQkFDZCxXQUFXLEVBQUUsT0FBTztvQkFDcEIsT0FBTyxFQUFFO3dCQUNQOzRCQUNFLEtBQUssRUFBRSxPQUFPO3lCQUNmO3FCQUNGO2lCQUNGLENBQUM7Z0JBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO29CQUM1QyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUM1RCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjs7Ozs7Ozs7OztJQVNJLHNDQUFjOzs7Ozs7OztjQUFDLE1BQVcsRUFBRSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsYUFBcUI7O1FBQzFGLElBQU0sSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUM7OztnQkE1RWpGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O3dCQVZsQzs7U0FXYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBGaWxlU2F2ZXIgZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcblxyXG5jb25zdCBleGNlbEV4dGVuc2lvbiA9ICcueGxzeCc7XHJcbmNvbnN0IHBkZlR5cGUgPSAnYXBwbGljYXRpb24vcGRmJztcclxuY29uc3QgcGRmRXh0ZW5zaW9uID0gJy5wZGYnO1xyXG5cclxuZGVjbGFyZSBsZXQgaHRtbDJjYW52YXMsIHBkZk1ha2U7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRXhwb3J0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqIEBkZXNjcmlwdGlvbiBFeHBvcnRzIGEganNvbiBvYmplY3QgYXMgYW4gZXhjZWwgZmlsZS5cclxuICAgKiBAcGFyYW0gYW55IGpzb24gVGhlIGpzb24gb2JqZWN0LlxyXG4gICAqIEBwYXJhbSBzdHJpbmcgZmlsZU5hbWUgVGhlIGV4Y2VsIGZpbGUgbmFtZS5cclxuICAgKiBAcGFyYW0gYm9vbGVhbiBydGwgV2hldGhlciByaWdodCB0byBsZWZ0IG9yIGxlZnQgdG8gcmlnaHQuXHJcbiAgICogQHBhcmFtIGJvb2xlYW4gc2tpcEhlYWRlciBXaGV0aGVyIHRvIHNraXAgdGhlIGhlYWRlci5cclxuICAqL1xyXG4gIHB1YmxpYyBleHBvcnRBc0V4Y2VsKGpzb246IGFueVtdLCBmaWxlTmFtZTogc3RyaW5nLCBydGw6IGJvb2xlYW4gPSB0cnVlLCBza2lwSGVhZGVyOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIC8vIGdlbmVyYXRlIHdvcmtzaGVldFxyXG4gICAgY29uc3Qgd29ya3NoZWV0OiBYTFNYLldvcmtTaGVldCA9IFhMU1gudXRpbHMuanNvbl90b19zaGVldChqc29uLCB7IHNraXBIZWFkZXI6IHNraXBIZWFkZXIgfSk7XHJcblxyXG4gICAgY29uc3Qgd29ya2Jvb2s6IFhMU1guV29ya0Jvb2sgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XHJcblxyXG4gICAgaWYgKCF3b3JrYm9vay5Xb3JrYm9vaykge1xyXG4gICAgICB3b3JrYm9vay5Xb3JrYm9vayA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd29ya2Jvb2suV29ya2Jvb2suVmlld3MpIHtcclxuICAgICAgd29ya2Jvb2suV29ya2Jvb2suVmlld3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdvcmtib29rLldvcmtib29rLlZpZXdzWzBdKSB7XHJcbiAgICAgIHdvcmtib29rLldvcmtib29rLlZpZXdzWzBdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgd29ya2Jvb2suV29ya2Jvb2suVmlld3NbMF0uUlRMID0gcnRsO1xyXG5cclxuICAgIC8vIGdlbmVyYXRlIHdvcmtib29rIGFuZCBhZGQgdGhlIHdvcmtzaGVldFxyXG4gICAgWExTWC51dGlscy5ib29rX2FwcGVuZF9zaGVldCh3b3JrYm9vaywgd29ya3NoZWV0LCAnZGF0YScpO1xyXG5cclxuICAgIC8vIHNhdmUgdG8gZmlsZSAqXHJcbiAgICBYTFNYLndyaXRlRmlsZSh3b3JrYm9vaywgZmlsZU5hbWUgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGV4Y2VsRXh0ZW5zaW9uKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyBhbiBodG1sIHN0cmluZyBhcyBwZGYuXHJcbiAgICAqIEBwYXJhbSBzdHJpbmcgaHRtbCBUaGUgaHRtbCB0byBwcmludC5cclxuICAgICogQHBhcmFtIEFycmF5PG51bWJlcj4gbWFyZ2lucyBUaGUgcGRmIHBhZ2UgbWFyZ2lucy5cclxuICAgICogQHBhcmFtIHN0cmluZyBmaWxlTmFtZSBUaGUgcGRmIGZpbGUgbmFtZS5cclxuICAgICogQHBhcmFtIGFueSBzaXplIFRoZSBwZGYgc2l6ZS5cclxuICAqL1xyXG4gIHB1YmxpYyBleHBvcnRBc1BkZihodG1sOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHNpemU6IGFueSA9ICdBNCcsIG1hcmdpbnM6IEFycmF5PG51bWJlcj4gPSBbMCwgMF0pIHtcclxuICAgIGlmIChodG1sKSB7XHJcbiAgICAgIGh0bWwyY2FudmFzKGh0bWwpLnRoZW4oY2FudmFzID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhVXJpID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG5cclxuICAgICAgICBjb25zdCBkb2NEZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgcGFnZVNpemU6IHNpemUsXHJcbiAgICAgICAgICBwYWdlTWFyZ2luczogbWFyZ2lucyxcclxuICAgICAgICAgIGNvbnRlbnQ6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGltYWdlOiBkYXRhVXJpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwZGZNYWtlLmNyZWF0ZVBkZihkb2NEZWZpbml0aW9uKS5nZXRCbG9iKChmaWxlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb21wdEZpbGVTYXZlKGZpbGUsIHBkZlR5cGUsIGZpbGVOYW1lLCBwZGZFeHRlbnNpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAZGVzY3JpcHRpb24gRXhwb3J0cyBhIGZpbGUgYXMgcGRmLlxyXG4gICAqIEBwYXJhbSBhbnkgYnVmZmVyIFRoZSBmaWxlIGJ1ZmZlci5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVUeXBlIFRoZSBmaWxlIG1pbWUgdHlwZS5cclxuICAgKiBAcGFyYW0gc3RyaW5nIGZpbGVOYW1lIFRoZSBmaWxlIG5hbWUuXHJcbiAgICogQHBhcmFtIHN0cmluZyBmaWxlRXh0ZW5zaW9uIFRoZSBmaWxlIGV4dGVuc2lvbi5cclxuICAqL1xyXG4gIHB1YmxpYyBwcm9tcHRGaWxlU2F2ZShidWZmZXI6IGFueSwgZmlsZVR5cGU6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgZmlsZUV4dGVuc2lvbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkYXRhOiBCbG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHtcclxuICAgICAgdHlwZTogZmlsZVR5cGVcclxuICAgIH0pO1xyXG5cclxuICAgIEZpbGVTYXZlci5zYXZlQXMoZGF0YSwgZmlsZU5hbWUgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGZpbGVFeHRlbnNpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=