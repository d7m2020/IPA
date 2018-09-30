var fieldEvalFunctions = {
  "getToday": getToday,
  "getTodayInHijri": getTodayInHijri,
  "getTodayPlusXYears": getTodayPlusXYears,
  "getTodayPlusXYearsInHijri": getTodayPlusXYearsInHijri,
  "getCurrentTimePlusXHours": getCurrentTimePlusXHours,
  "getTime": getTime
};

function getToday() {
  return new Date();
}

function getTodayInHijri() {
  var hijrahDate = new HijrahDate(getToday());

  return { year: hijrahDate.getFullYear(), month: hijrahDate.getMonth(), day: hijrahDate.getDate() };
}

function getTodayPlusXYears(x) {
  var date = getToday();

  date.setFullYear(date.getFullYear() + Number(x[0]));

  return date;
}

function getTodayPlusXYearsInHijri(x) {
  var hijrahDate = new HijrahDate(getTodayPlusXYears(x));

  return { year: hijrahDate.getFullYear(), month: hijrahDate.getMonth(), day: hijrahDate.getDate() };
}

//0 is increment. 1 is meridian
function getCurrentTimePlusXHours(x) {
  var date = getToday();

  var time = { hour: date.getHours() + Number(x[0]), minute: date.getMinutes(), format: 12, meriden: x[1] };

  return time;
}

//0 is hours. 1 is minutes. 2 is meridian
function getTime(timeArray) {
  var time = { hour: Number(timeArray[0]), minute: Number(timeArray[1]), format: 12, meriden: timeArray[2] };

  return time;
}
