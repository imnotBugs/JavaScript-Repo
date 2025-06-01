const marvel_heros = ["thor", "hulk", "spider"]
const dc_heros = ["flash", "superman", "batman"]

//  marvel_heros.push(dc_heros) // push  the new array to existing array 
//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);

// concat is less used for array merging (can only mere two at a time)
// const all_hero =  marvel_heros.concat(dc_heros) // in concat there is need to initialize new array before using it 
// console.log(all_hero);

//more used spread method to  merge arrays
const cartoon_hero= ["tom", "jerry", "duck"]
const allNewHeros = [...marvel_heros, ...dc_heros, ...cartoon_hero]
// console.log(allNewHeros) //can merge multiple arrays at a time

const anotherArray = [1,2,3,[4,5,6,[7,8,9]]]
const requiredArray = anotherArray.flat(2) // can pass like infinity also 
// console.log(requiredArray) // returns an 1D array 


//some general array methods to work with array
console.log(Array.isArray("Balraj")) // checking if it is truly an array or not
console.log(Array.from("Balraj")) // converting string to array
console.log(Array.from({name: "Balraj"})) //  converting object to array returns empty array if specific  labels or  prompt isnt passed


let score1 =100
let score2 = 200
let score3 = 300

// "of" method we can create a array by just directly inputing the variables
console.log(Array.of(score1,score2,score3))

