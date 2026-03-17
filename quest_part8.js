// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

let arr = [1,4,6,9];

const sqr = arr.map( n => n*n);
console.log("squares of elements are :",sqr);

const sum = arr.reduce((acc,ele) => acc + ele,0);  //0 means initial val '0'
console.log("Sum of elements is :",sum);

console.log("Average of the array is :",sum/arr.length);

//Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let nums = [1,2,3,4];

let fnum = nums.map(n => n + 5);
console.log(fnum);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

let str = ['ai','alice','bob'];

let uprCase = str.map(s => s.toUpperCase());
console.log("Original array :",str);
console.log("Modified array :",uprCase);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return 2 new arrays sum of all ,and
// with the original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(newArr, ...args){

    let doubled = args.map(n => n * 2);

    return [...arr, ...doubled];
}

let newArr = [1,2,3,4];
let result = doubleAndReturnArgs(newArr,10,20,5,3,2);
console.log(result);

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object
function mergeObjects(obj,obj1){
    let finalObj = {...obj,...obj1};
    return finalObj;
}

let obj = {
    name :"Alice",
    age : 25,
    city : "New York"
};
let obj1 = {
    sname : "Bob",
    scountry : "USA"
};

let final = mergeObjects(obj,obj1);
console.log(final);
