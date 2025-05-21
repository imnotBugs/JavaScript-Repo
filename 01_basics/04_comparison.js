// console.log(2<1)
// console.log(2<=1)
// console.log(2>1)
// console.log(2==1)
// console.log(2!=1)

//javascript automatically converts these no. for comparison
//Always compare same data types 
// console.log("1"<1)
// console.log("3">=1)
// console.log("01">=1) 


//comparison and equality check both works differently  
// comaparison takes no. as  0 assignment converts to NaN
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); //confusing output

// console.log(undefined <= 0)
// console.log(undefined != 0)// only this gives true rest all false for undefined
// console.log(undefined >= 0)
// console.log(undefined == 0)

// strict check === matches dataType also
console.log(2=="2")
console.log("2" === 2)
