// Arrays is an data type in which a single element is used to store n number of mix(array inside array, boolean , string, no,etc) elements.
//Arrays are resizable in javascript and follows zero based indexing
const myArr = [0,1,2,3,4,5, "balraj", true]
// console.log(myArr[6]); //fetching elements of array

//in javascript while performing copy operation in arrays it creates shallow copy 
// ****All standard built in copy operations with any javascript objects create shallow copies, rather than deep copies
// Shallow copy :- shallow copy of an object is a copy whose properties share same reference point as of the source object from which copy was made.
// Deep copy :- Deep copy of an object is a copy whose properties do not share the same references as those of the source object from which the copy was made.

//ways of initializing arrays
const myHeroes = ["shaktiman","spiderman"]
const myArr2 =  new Array (1,2,3,4)
// console.log(myArr[1])


//Array methods
// myArr.push(6)
// myArr.push(false)
// myArr.pop() // removes last element of array

myArr.unshift(9) // used to add any element at the start of array not preferred usually
myArr.shift() // removing the first element from array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); // returns -1 if the elements isnt present in array

const newArr3 = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newArr3)
// console.log(typeof newArr3)

//slice , splice

console.log("A ", myArr);

const myn1= myArr.slice(1,3) // used to fetch a portion of array without affecting the original array also higher range is exempted 

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) //used to fetch a portion of array and also trims the original array removing the fetched elements from original, also higher range is also considered 
console.log(myn2)
console.log("C " , myArr);

