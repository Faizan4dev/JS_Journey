// Rest operator : it collects the numbers into a single iterable

// for example in functions it takes arguments and stores them into array
function disp(...arg){
    console.log(arg);
}
disp(1,2,3);

// sum of numbers using rest operator
function sum(...arg){
    let sum = 0;    
    for(let i of arg){
        sum += i;
    }   
    return sum;
}
console.log(sum(1,2,3,4,5));

// sum using reduce method
function sum(...arg){
    return arg.reduce((a,b) => a+b);
}
console.log(sum(1,2,3,4,5));

// minimum using reduce 
function min(...arg){
    return arg.reduce((min,ele) => min > ele ? ele : min);
}
console.log(min(1,3,4,0,4,-1));