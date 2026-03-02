// Tic tac toe representation by nesting
let ticTac=[["X"," ","O"],[" ","X"," "],["O"," ","X"]];
console.log(ticTac[0]);
console.log(ticTac[1]);
console.log(ticTac[2]);

// Q#1
let arr=[7,9,0,-2];
let n=3;
console.log(arr.slice(0,n));
// q2
console.log(arr.slice(-n)); //or
console.log(arr.slice(arr.length-n));

// Q#3
let str="";
let chk="";
if(chk===str){
    console.log("String is empty...");
}
else{
    console.log(`String is not empty, it contains: ${str}`);
}
// or more efficient
let stri=prompt("Enter a string:");
if(stri.length===0){
    console.log("String is empty...");
}
else{
    console.log(`String is not empty, it contains: ${stri}`);
}

// Q#4
let chr=prompt("Enter string:")
let idx=2;
if(chr[idx]===chr[idx].toLowerCase()){
    console.log("It is small character..");
}
else{
    console.log("It is capital..");
}

// Q#6
let nu=["helo","hi",1,2,10];
let item="hi";
if(nu.indexOf(item)!=-1){
    console.log("Item exists");
}
else{
    console.log("item doesn't exist");
}