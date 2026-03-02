// Trim 
let str="  Hello";
let newStr=str.trim();
console.log("New trimmed string :",newStr);
console.log("Old immutable string :",str);

// To lowercase and to uppercase 
console.log("Upper case :", newStr.toUpperCase());
console.log("Lower case:", newStr.toLowerCase());

// Methods with Arguments
// indexOf
let stri="I love coding";
console.log(stri.indexOf("love"));
console.log(stri.indexOf("L")); // -1 due to case sensitivity
console.log(stri.indexOf("c"));
// replace
console.log(stri.replace("coding","Programming"));
console.log(stri.replace("I","We"));
// Repeat
console.log(stri.repeat(5))
// Slice
console.log(stri.slice(2,6));