let name ="balraj"
let value = 50

//earlier way of writing concatination
// console.log(name + value)

// //Using string interpolation
// console.log(`My name is ${name} & i have a ${value} ruppe note.`)

//Another way of initailizing a string
// give an object which allows us a wide range of operations
let gameName = new String('Balraj-gc-bd-com')
// console.log(typeof gameName)
// console.log(typeof name)

// Accessing numerous methods

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('B'));
// console.log(gameName.substring(0,6)); // last one in excluded 6 so only till 5 it will show // dosent take neg values takes default 0 
// console.log(gameName.slice(-8,5)); //can take negative values and slice backwards also


let newstring = "      balraj"
console.log(newstring);
console.log(newstring.trim());

const url = "https://balrajportfolio%20site"
console.log(url.replace('%20' , '-'));

console.log(url.includes('balraj'));

console.log(gameName.split('-'));

