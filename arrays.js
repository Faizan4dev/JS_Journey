// Arrays 
let students=["Ali","Ahmad","Noor"];
console.log(students);
console.log(students[1]);
console.log(students[0][2]);

// mutable
students[2]="Faiz";
console.log(students);
console.log(students[2]);

// Array Methods --------
let fruits=["mango","apple","litchi"];
fruits.push("banana");
console.log(fruits);
console.log(fruits.pop());
fruits.unshift("appricot");
console.log(fruits);
fruits.shift();
console.log(fruits);
// searching
console.log(fruits.indexOf('litchi'));
console.log(fruits.includes('litchi'));
// concatenation
let vegs=["carrot","potato"]
console.log(fruits.concat(vegs));
console.log(vegs.concat(fruits));
// reverse
console.log(fruits.reverse());
// slice
console.log(fruits.slice(1,3));
// splice
let fruit=["Apple","Banana","Mango","Orange"];
console.log(fruit);
console.log(fruit.splice(1,2));
fruit.splice(1,0,"Banana");
console.log(fruit);
fruit.splice(1,1,"Mango","Litchi","appricot");
console.log(fruit);
// sort 
let fru=["Apple","Banana","Mango","Orange"];
console.log(fru.sort());
let nums=[1,2,10,25,5];
console.log(nums.sort());
console.log(nums.sort((a,b) => a-b));

// Array Referencing ------
let numbs=[1,5,7,2,10];
let b=numbs;
b[1]=3;
console.log(numbs);
console.log(b);
console.log(b[2]==numbs[2]);

// Array nesting -------
let nest=[[1,2],[3,4],[5,6]];
console.log(nest[1]);
console.log(nest[2][1]);