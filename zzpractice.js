let names = ["ali", "Amal", "Saher"];
let upr = names.map((name) => name.toUpperCase());
console.log(upr);

let str = ["a", "P", "S"];
let add = names.map((name) => name + "bb");
console.log(add);

// filter
let nums = [1, 2, 3, 4, 5, 6];
let odd = nums.filter((num) => num % 2 !== 0);
console.log(odd);

let words = ["cat", "elephant", "dog", "giraffe"];
let long = words.filter((word) => word.length > 3);
console.log(long);

// reduce
let sum = nums.reduce((res, pon) => res + pon);
console.log(sum);

let max = nums.reduce((acc, resl) => (resl > acc ? resl : acc));
console.log(max);
let min = nums.reduce((acc, resl) => (resl < acc ? resl : acc));
console.log(min);

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let comb = [...arr1, ...arr2, ...arr1];
console.log(comb);

let stri = "Hello";
let chars = [...stri.toLocaleUpperCase()];
console.log(chars);

// rest operator
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
let arr = [1, 2, 3, 3];
console.log(sumAll(...arr));

// destructuring
// let names = ["ali", "Amal", "Saher"];
let [lname, , fname] = names;
console.log(fname, lname);

let obj = {
  name: "Ali",
  age: 25,
  city: "Karachi",
};

let { name: username, city: residence } = obj;
console.log(username, residence);
