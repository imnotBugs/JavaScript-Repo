// let credit = "24asd"
let credit = "23"

// console.log(typeof credit);
// console.log(typeof (credit));

let valueInCredit = Number(credit)
// console.log(typeof credit);
// console.log(typeof valueInCredit);
// console.log(valueInCredit);

/*
"33" => 33
"433acb" => NaN (Not a number)
true=>1; false => 0 */

let isLoggedIn = "ave"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*1=> true ; 0=> false
"" => false 
"hitesh" => true */

let randNo = 45

let stringNumber = String(randNo)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************** Operations *********************** //
let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2+2);
// console.log(3-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Balraj"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(3+4*5%3/7-4);
/*Operator Precedence in JavaScript (from highest to lowest):
* (Multiplication), / (Division), % (Modulus) - Left-to-right associativity

+ (Addition), - (Subtraction) - Left-to-right associativity
*/
console.log(+false);
// console.log(true+); throws error not a valid code

console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2
// console.log(num1,num2, num3)


let gameCounter = 100;
gameCounter++
++gameCounter
console.log(gameCounter)





let x = 5;

// console.log(x++); // Output: 5 (x is now 6)
// console.log(++x); // Output: 7 (x is now 7)

let y = 10;

// console.log(y--); // Output: 10 (y is now 9)
// console.log(--y); // Output: 8 (y is now 8)