const score = new Number(100.546) //explicitly defining number
let credit = 12 // by default defined

// console.log(score);
// console.log(typeof score);
// console.log(typeof credit);
// console.log(score.toString().length);
// console.log(typeof score)

// console.log(score.toFixed(2)); //doesnt show decimal round off to nearest

const otherNumber = 153.98554
// console.log(otherNumber.toPrecision(5)) // can take only left side of number only

const hundred = 10000000000
// console.log(hundred.toLocaleString());

// ************** Math ********** //
// console.log(Math);
// console.log(Math.abs(-4)); // absolute positive only
// console.log(Math.round(4.6)); // round off
// console.log(Math.ceil(4.6)); // round off to highest 
// console.log(Math.floor(4.6)); // round off to lowest
// console.log(Math.sqrt(25)); // square root
// console.log(Math.min(2,5,7)); // min value will be picked from collection
// console.log(Math.max(2,5,7)); // max value will be picked from collection

console.log(Math.random()); // gives values between 0-1 always
console.log((Math.random()*10)+1); // shifting one decimal to right and avoiding 0 as an answer

console.log(Math.floor(Math.random()*10)+1); //to get lowest values possible

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)+min));//random no inside a range of max and min with eleminating zero outcome
