let fruits=["Mango","banana","Orange","Litchi"];
for(let i=0;i<fruits.length;i++){
    console.log(i+":"+fruits[i]);
}

// nested arrays 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j]);
    }
}

// Question : print the same pattern exactly
let arr = [
  [2,4,6],
  [1,3,5],
  [7,8,9]
];

for(let i = 0; i < arr.length; i++){
    let row = "";
    for(let j = 0; j < arr[i].length; j++){
        row += arr[i][j] + " ";
    }
    console.log(row);
}
// sum
let sum=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
    }
}
console.log("Sum is: ",sum);
// MAx
let max=arr[0][0];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(max<arr[i][j]){
            max=arr[i][j];
        }
    }
}
console.log("Max is: ",max);
// Even count
let even=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]%2===0){
            even++;
        }
    }
}
console.log("Even count is: ",even);

// Diagonal SUM
let mat = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let dsum = 0;
for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat[i].length; j++){
        if(i === j){         
            dsum += mat[i][j];
            break;            
        }
    }
}
console.log("The diagonal sum is:", dsum);
// or
let dsum2 = 0;

for(let i = 0; i < mat.length; i++){
    dsum2 += mat[i][i];
}

console.log("The diagonal sum is:", dsum2 );