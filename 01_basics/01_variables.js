/* const studentRollno = 0154(starts with 0 (leading zero)
 In JavaScript:
 Numbers starting with 0 are treated as octal (base 8) in older rules
 And in modern JS (strict mode / ES6), this is not allow ), so 0154 will show error.*/
const studentRollno = 123456
let studentName ="Ujjwal Mishra"
var studentEmail ="dcgt@gmail.com"//prefer not to use var because of issue in block scope
studentCity = "Chhatarpur"
let studentBranch;

studentEmail = "mujj@gamil.com"
studentCity = "jaipur"

console.log(studentEmail,studentName,studentRollno,studentCity,studentBranch)
console.table([studentEmail,studentName,studentRollno,studentCity,studentBranch])
