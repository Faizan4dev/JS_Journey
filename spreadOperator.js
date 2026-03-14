let nums = [1, 2, 3, 4, 5];
console.log("Array:", nums);
console.log("Spread:", ...nums);

// we can copy an array using spread operator
let copy = [...nums];
console.log("Copy:", copy);
copy.push(6);
console.log("Original:", nums);
console.log("Copy after push:", copy);

// we can also merge two arrays
let moreNums = [6, 7, 8];
let merged = [...nums, ...moreNums];
console.log("Merged:", merged);

// it can also split a string into characters
let str = "Hello";
let chars = [...str];
console.log("Characters:", chars);

// with objects , we can use spread operator to copy properties 
let data = {
    name: "Alice", 
    age: 30 
};
let copiedData = { ...data };
console.log("Copied Data:", copiedData);
// we can also add new properties while copying
let extendedData = { ...data, city: "New York" };
console.log("Extended Data:", extendedData);

// it can be used with math functions like Math.max, Math.min, etc.
let numbers = [10, 20, 5, 15];
console.log("Max:", Math.max(...numbers));
console.log("Min:", Math.min(...numbers));

