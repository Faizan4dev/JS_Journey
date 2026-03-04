// Q1 --to print larger elements than num
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 5;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]>num){
        console.log(arr[i])
    }
}

// Q2 --to print unique characters from string 
let str = "abcdabcdefgggh";
let ans = "";
for(let j = 0; j < str.length; j++){
    if(!ans.includes(str[j])){
        ans += str[j];
    }
}

console.log(ans);

// Q3 --to print country with longest name
let country = ["Australia", "Germany", "United States of America"];
let max_length = "";
for(let i=0; i<country.length; i++){
    if(max_length.length < country[i].length){
        max_length = country[i];
    }
}

console.log("The country with longest name's :",max_length);

// Q4 --to count the number of vowels in a String argument.
function vowelCount(str){
    str = str.toLowerCase();
    let count = 0;
    for(let i=0; i<str.length ;i++){
        if( str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++ ;
        }
    }
    return count;
}

let counter = vowelCount("Apple");
console.log("The total no of vowels in the string are :",counter);

// or
function vowelCount(str){
    let vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

let cou = vowelCount("Apple");
console.log("The total no of vowels in the string are :",cou);

//Q5 -- function to generate a random number within a range (start, end).

function rand(start, end){
    let num = Math.floor(Math.random() * (end-start+1)) + start;
    return num;
}
let st = prompt("Enter the starting number:");
let en = prompt("Enter the ending number:");
let pass = rand(parseInt(st), parseInt(en));
let number = console.log(pass);