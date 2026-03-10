// .forEach
let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el);
};

arr.forEach(print);

// or 
arr.forEach(el =>{
    console.log()
} );

// Map function : accesses each element and return a new array with the result of the function applied to each element
let nums = [1,2,3,4];

let doubled = nums.map(n => n * 2);

console.log(doubled);

// to upper case
names = ['Ali',"sudais","nauman"];

let upName =names.map(nam => nam.toUpperCase());
console.log(upName);

// use in dictionary
let users = [
    {name:"Ali", age:20},
    {name:"Sara", age:25}
];

let namm = users.map(user => user.name);
console.log(namm);