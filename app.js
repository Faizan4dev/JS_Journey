console.log("Welcome to console using JS file")
let n=24;
console.log(n)

// template literal
let name='Faiz';
const age=15;
console.log(`My name is ${name} and i'm ${age} years old`)

let penPrice=100;
let eraserPrice=10;
console.log(`The total price for pen and eraser is : ${penPrice+eraserPrice}`)

// Arithmetic operators 
let a=10;
let b=3;
console.log("The answers of arithmetic operators are :",a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

// Unary operators
let x=10;
console.log("post-increment:",x++) //x=10
//x=11
console.log("Pre-increment",++x) //x=12

// Comparison operator
let y=10;
console.log(y>12);  //true or false
console.log(y>=10);
console.log(y==100);


// Conditional Statements 
// if-else
console.log("Condtional Statments::")
marks=75;
if(marks>=80){
    console.log("A+")
}
else if(marks>=60){
    console.log("B+")
}
else if(marks<60){
    console.log("Sorry u can't Qualifyy")
}