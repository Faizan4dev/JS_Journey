// Every
let nums = [1, 2, 3, 4, 5];
let evenchk = nums.every(num => num%2 == 0);
console.log(evenchk);

let evens = [0,2,4,6,8];
let evenchek = evens.every(even => even%2 == 0);
console.log(evenchek);

// Some
let somechk = nums.some(num => num%2 == 0);
console.log(somechk);

let somechk2 = nums.some(num => num%2 == 1);
console.log(somechk2);