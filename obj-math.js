console.log("value of pi is " + Math.PI);
console.log("value of e is " + Math.E);

let val1=4.9;
let val2=4.1;
console.log("round of " + val1 + " is " + Math.round(val1));
console.log("round of " + val2 + " is " + Math.round(val2));
console.log("floor of " + val1 + " is " + Math.floor(val1));
console.log("floor of " + val2 + " is " + Math.floor(val2));
console.log("ceil of " + val1 + " is " + Math.ceil(val1));
console.log("ceil of " + val2 + " is " + Math.ceil(val2));

console.log("square root of 16 is " + Math.sqrt(16));
console.log("absolute value of -5 is " + Math.abs(-5));
console.log("2 to the power 3 is " + Math.pow(2,3));
console.log("maximum of 5 and 10 is " + Math.max(5,10));
console.log("minimum of 5 and 10 is " + Math.min(5,10));
console.log("random number between 0 and 1 is " + Math.random());  
console.log("random number between 0 and 1 is " + Math.random());  

// random generated values bw 0-1 not 1 , we can make it generate random number bw 0-10 by multiplying it with 10
let step1=Math.random();
let step2=step1*10;
step2=Math.floor(step2);
console.log("random number between 0 and 10 is :" + step2);
// summary
Math.floor(Math.random()*10); // this will generate random number between 0 and 10
// but it wont generate 10 because random generates number between 0 and 1 not including 1, so it will generate number between 0 and 9.99999999999999, so when we floor it, it will give us number between 0 and 9.
Math.floor(Math.random()*10)+1; // this will generate random number between 1 and 10, because we are adding 1 to the result of Math.floor(Math.random()*10), so it will give us number between 1 and 10.
console.log("random number between 0 and 10 is :" , Math.floor(Math.random()*10)+1);

// random numbrs between 1 and 100
console.log("random number between 1 and 100 is :" , Math.floor(Math.random()*100)+1);
// random number between 15 and 25
console.log("random number between 15 and 25 is :" , Math.floor(Math.random()*10)+15); // this will generate random number between 15 and 25, because we are adding 15 to the result of Math.floor(Math.random()*10), so it will give us number between 15 and 25.
// random num bw 70 and 90
console.log("random number between 70 and 90 is :" , Math.floor(Math.random()*20)+70); // this will generate random number between 70 and 90, because we are adding 70 to the result of Math.floor(Math.random()*20), so it will give us number between 70 and 90.
