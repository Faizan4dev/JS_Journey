
// filter method : creates a new array with all elements that pass the condition implemented by the provided function
let numbers = [1,2,3,4,5,6];
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

// for strings
let words = ["cat","elephant","dog","giraffe"];
let longWords = words.filter(word => word.length <= 3);
console.log(longWords);