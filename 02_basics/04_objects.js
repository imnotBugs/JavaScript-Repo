//const  tinderUser = new object() //singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abcd"
tinderUser["name"] = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// Nested Non singleTon object
const  regularUser ={
    email:"balraj@google.com",
    fullname: {
        userFirstName:"balraj",
        lastName : "Dhakar"
    }
}
// console.log(regularUser.email, regularUser.fullname,regularUser.fullname.userFirstName)

// optional Chaining(using ?) :- if some key doesnt exist it helps to control to avoid crash and maintain data flow

const obj1 = {
    1:"a",
    2:"b",
  

}

const obj2 = {
    3:"c",
    4:"d",
}
const obj3 = {obj1,obj2} // way to merge two or more objects
// const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({},obj1,obj2) // Object.assign is an static method which merges all sources to get our target 
// above "{}" is the target and all rest are sources 
// if we dont give {} the first parameter which is also an object will become our taget object 

// the more frequently used way to merge objects same like arrays
// Using spread 
const obj5 = {...obj1, ...obj2}

console.log(obj5)

// Another way of working with actual databases response

const Users = [
    { id:"232",
        name:"balraj"},
    { id:"23",
        name:"bal"},
    { id:"32",
        name:"raj"},
    { id:"2",
        name:"ra"},
    { id:"3",
        name:"lr"},
   
    ]

    console.log(Users[1].id)
    console.log(Object.keys(tinderUser))
    console.log(Object.values(tinderUser))
    console.log(Object.entries(tinderUser)) // returns both in nested array form

    console.log(tinderUser.hasOwnProperty('isLogged')); //prevents a crash of flow or program if the response doesnt include the required things
    
