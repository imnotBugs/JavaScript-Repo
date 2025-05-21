// there are two types of data types in java script based on the way data is stored and accessed.

// Primitive :- the copy of actual value is shared 
// Total 7 types :- String, Number, Boolean, null, undefined, Symbol(to make someone unique by wrapping anything in Symbol), BigInt(for larger value 2 raise to power 53)


const credit = 100
const AvgCredit = 10.3

const isLoggedIn = true
const tempId = null
let empId;

const password = Symbol("122")
const AnotherPassword = Symbol("122")

// console.log(password==AnotherPassword)

const NobInt= 64524244425168568n;
// console.log(typeof NobInt)



// Non Primitive :-  reference/address of the actual value is shared 
//  3 types :- Array, Functions, Objects
// typeof for all non primitive data type gives **s output and for function it gives function but it is called as object function/ function object.
const heroes = ["kart", "bat", "ball"] //Array

//Object
letObj={ 
    name:"Balraj",
    age:23,
    alive:true,
}

//Function
const myFuction = function(){
    console.log("Hello!, World")
}

// console.log(typeof letObj)
//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
// Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.


//*********************** Memory usage **************** //
//Stack(Primitive) no effect is seen as copy of the value is passed  , Heap (Non-Primitive) if we change one both changes as one reference point

let petName = "goffie"
let anotherPetName = petName
anotherPetName ="ronnie"
console.log(anotherPetName)
console.log(petName)

let userOne ={
    email : "abc@google.com",

}
let userTwo = userOne

userTwo.email = "dba@mail.com";

console.log(userOne.email)
console.log(userTwo.email)