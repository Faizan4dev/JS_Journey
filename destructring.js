// ********* Array Destructuring *********

let names = ["John", "Doe", "Smith", "Jane", "Doe"];
// Destructuring assignment : assigning array elements to variables , instead of assigning
// them one by one we can assign them using destructring assignment 
let [fname , lname] = names;
console.log(fname);
console.log(lname);

// we can skip an element by using space bw commas
let[tname, ,zname] = names;
console.log(tname);
console.log(zname);  //so it'll print john smith instead of john doe smith

// it can also use rest operator and that stores the remaining elements in an array
let [firstName , lastName , ...rest] = names;
console.log(firstName);
console.log(lastName);
console.log(rest);  //so it'll store the remaining elements as array

// ********* Object Destructuring *********
let person = {
    name : "John",
    age : 30,
    city : "New York"
};
//in object dest we use keys as variable names :
let {name , age} = person;
console.log(name);
console.log(age);

// to use another variable name we can use :
let {name : fname1 , age : age1} = person;
console.log(fname1);
console.log(age1); 