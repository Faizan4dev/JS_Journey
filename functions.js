function greet(){
    console.log("Hello, World!");
}
greet();

// with arguments -------------------

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("Alice", 30);
printInfo("Bob");
printInfo(24);
printInfo("Charlie","thirty",20);


function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(10,20,30);

// Return keyword -------------------

function sum(x,y){
    return x+y;
}

console.log(sum(5,10));

// Nameless functions -------------------
const multiply = function(a,b){
    return a*b;
}   
console.log(multiply(4,500));

// High order functions -------------------

function multipleGreet(func,count){
    for(let i=0; i<count; i++){
        func();
    }
}

let greeet = function(){
    console.log("Hello!");
    console.log("Welcome to the world of JavaScript!");
}   

multipleGreet(greeet,3);

// returning functions

function evenOrOdd(){
    if(request == "odd"){
        let odd =function(){
            console.log(!(num%2==0));
        }
        return odd;
    }
    else if(request == "even"){
        return function(){      //we can directly return the function without storing it in a variable
            console.log(num%2==0);
        }
        // return even;
    }
    else{
        console.log("Invalid request");
    }
}

let request = "odd";
let num = 5;
let check = evenOrOdd();    
check();