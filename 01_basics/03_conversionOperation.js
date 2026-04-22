let score = "33.748"

console.log(score);     //33.748
console.log(typeof score);      //string
console.log(typeof (score));    //string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);   //number
console.log(valueInNumber)         //33.748


//  "33" => 33   (when converted from string to number)
//  "33abc" => NaN   (when converted from string to number)


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);  //true


//  true => 1; false => 0
//  "" => false
//  "some value" => true  

let someNumber = 0.000000
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let stringNumber = Boolean(someNumber);
console.log(stringNumber);               //false
console.log(typeof stringNumber);      //boolean



/********************Operations************************/





