// Q1
let arr=[1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<arr.length;i++){
    if(arr[i]===num){
        arr.splice(i,1);
        i--;   //bcoz elements would be shifted to right after removal of one element
    }
}
console.log(arr)
// or
for(let i = arr.length-1; i >= 0; i--){
    if(arr[i] === num){
        arr.splice(i,1);
    }
}
console.log(arr);

// Q2
let number=287152;
let numb= number.toString();
console.log(numb.length);

// Q3
let n=287152;
let m= n.toString();
let sum=0;
for(let i=0;i<m.length;i++){
    sum+= parseInt(m[i]);
}
console.log("The Sum of all digits:",sum);

// Q4 Factorial
let fact=prompt("Enter number to calculate factorial:");

for(let i=fact-1 ;i>=1; i--){
    fact*=i;
}
console.log("Factorial is:",fact);

// Largest number in postive array
let arr1=[1,2,3,7,4,5,6];
let max=0;
for(let i=0;i<arr1.length;i++){
    if(max<arr1[i]){
        max=arr1[i];
    }
}
console.log("The largest number is :",max);



