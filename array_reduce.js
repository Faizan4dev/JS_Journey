// Reduce method : it reduces the array to a single value by executing a reducer function
//  on each element of the array.
// Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

let nums = [1,4,5,6,10,20];
let finalVal = nums.reduce((resl,el) => resl + el);
console.log(finalVal);

// product

let prodVal = nums.reduce((resl,el) => resl * el);
console.log(prodVal);

// max value
let maxVal = nums.reduce((resl,el) => resl > el ? resl : el);
console.log(maxVal);

// This part: resl > el ? resl : el
// is a ternary operator.
// Structure: condition ? value_if_true : value_if_false