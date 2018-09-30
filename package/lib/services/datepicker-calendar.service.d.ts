import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
export declare class IslamicI18n extends NgbDatepickerI18n {
    /** @description Gets the weekday short name.
     * @param number weekday The weekday.
     * @return string The weekday short name.
    */
    getWeekdayShortName(weekday: number): string;
    /** @description Gets the weekday short name.
     * @param number month The month.
     * @return string The month short name.
    */
    getMonthShortName(month: number): string;
    /** @description Gets the month full name.
     * @param number month The month.
     * @return string The month full name.
    */
    getMonthFullName(month: number): string;
    /** @description Gets the day aria label.
     * @param NgbDateStruct date The date.
     * @return string The day aria label.
    */
    getDayAriaLabel(date: NgbDateStruct): string;
}
