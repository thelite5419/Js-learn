let myDate = new Date();
console.log('myDate :>> ', myDate);
console.log('myDate :>> ', myDate.toISOString());
console.log('myDate :>> ', myDate.toLocaleDateString());
console.log('myDate :>> ', myDate.toDateString());

const newDate = new Date(2024, 1, 5);
console.log('newDate :>> ', newDate.toLocaleString());
console.log('newDate :>> ', newDate.toDateString());

const newDateIndia = new Date("01-05-2004");
console.log('newDateIndia :>> ', newDateIndia.toLocaleString());
console.log('newDateIndia :>> ', newDateIndia.toDateString());

let singleDate = new Date();
console.log('singleDate :>> ', singleDate.getTime());
console.log('singleDate :>> ', singleDate.getDay());
console.log('singleDate :>> ', singleDate.getMonth()+1);
console.log('singleDate :>> ', singleDate.getTimezoneOffset());


console.log(`todays date is ${singleDate.getDate()} and the current month is ${singleDate.getMonth()+1} `);