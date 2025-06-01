//singleton :- made by using constructor (one of a kind)
// Object.create

//object literals :- if we declare like literals then signleton objects arent formed.
// can have multiple instances

const mySym = Symbol("key1")// using symbol as a key of our object

const JsUser = {// object literal
    name : "Balraj",
    // "full name": "Balraj Dhakar", cant access this kind of keys by dot method (ex- JsUser.email
    [mySym]:"mykey1",
    age:18,
    email:"balraj@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday" ,"Saturday"]

}// all the keys are by default taken as string need not to mention it.

// console.log(JsUser.email) // mostly used way to access values
// console.log(JsUser["email"]) // matches string keys and returns values
// console.log(JsUser["full name"]) // can take space in keys but not recommended or functional
// console.log(typeof JsUser[mySym])
// console.log(JsUser[mySym]) // in this way only we can work with symbol based keys

// //object manipulation and freezing
// Object.freeze(JsUser) //avoids declared obects from over writting
// JsUser.email  = "balra@microsoft.com"
// console.log(JsUser.email)


//Using function in an object
JsUser.greeting = function(){
    console.log("hello JS User")
}

// console.log(JsUser.greeting) // returns type and state it as a anonymous
// console.log(JsUser.greeting()) // returns the function correctly


JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); // in browser also while working with object and methods 1 execution happens by default thats why it states undefined
