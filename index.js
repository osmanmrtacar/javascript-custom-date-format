// This creates new date object with a specified date and time.
var event = new Date("2019-11-10T15:33:03.313Z");
console.log(event)
//An object for customize the date format. We customized the format by "DD.MM.YYYY HH:MM"
var options = { year: 'numeric', month: '2-digit', day: 'numeric', hour:"numeric", minute:"numeric"};
//toLocaleDateString accepts two parameter 'locales' and 'options object'. With locales you can specify language, Numbering system, Calendar, Hour cycle
console.log(event.toLocaleDateString('tr-TR', options));
