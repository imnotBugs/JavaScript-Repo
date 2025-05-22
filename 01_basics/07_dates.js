let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23) //in javascript month start from 0 if we giving single digit if giving like 01 than from 1 it starts
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023,0,23,5,3) // specifying hours and minutes also
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-22-2025") 
let myCreatedDate = new Date("01-22-2025") // specifying some format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // timeis always calculated in miliseconds from the arbitary date 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // getting mili seconds of the provided date 
// console.log(Math.floor(Date.now()/1000)) ; // converting the provided mili seconds to seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // adding 1 as months start from 0 
console.log(newDate.getDay()); // day in number 1-7

//Dynamic way of writing date
console.log(`${newDate.getDay()} and the month ${newDate.getMonth()+1} `);

// the method toLocaleString() used as and defined as object allows lots of properties and customization
// default is written for internationalization
newDate.toLocaleString('default',{
    weekday:"long",
    dayPeriod:"long",
})