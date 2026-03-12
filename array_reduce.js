// Reduce method : it reduces the array to a single value by executing a reducer function
//  on each element of the array.
// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

let nums = [1,4,5,6,10,20];
let finalVal = nums.reduce((resl,el) => resl + el);
console.log(finalVal);