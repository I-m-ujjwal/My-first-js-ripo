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

let value = 55
let negValue = -value
console.log(negValue);  //-55


let str1 = "Ujjwal"
let str2 = " Mishra"

let str3 = str1 + str2
console.log(str3);   // Ujjwal Mishra

console.log("1" + 2);     // 12
console.log(1 + "2");     // 12
console.log("1" + "2");   // 12
console.log("1" + 2 + 3); // 123
console.log(1 + "2" + 3); // 123
console.log(1 + 2 + "3");     // 33 ****
console.log(1 + "2" + "3");  // 123


let i = 5;

console.log(i);    
console.log(++i); // pre increment operator (this first increase the value than perform the other operation)
console.log(i);
console.log(i++) // post increment operator (Test first to perform the operation then increase the value)
console.log(i);
console.log(i--) // Post decrement operator (This first Perform the operation then decrease the value)
console.log(i);
console.log(--i); // Pre decrement operator (this first Decrease the value then perform the operation)

// respectively are the outputs
// 5
// 6
// 6
// 6
// 7
// 7
// 6
// 5









