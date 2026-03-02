// For Loop
for(let i=1;i<=5;i++){
    console.log(i);
}

// reverse
for(let i=5;i>=1;i--){
    console.log(i);
}

// odd numbers ------------
console.log("Odd Numbers: ");
for(let j=1;j<=15;j++){
    if(j%2!=0){
        console.log(j);
    }
}
// good way
console.log("Odd Numbers:");
for(let j = 1; j <= 15; j = j + 2){
    console.log(j);
}

// even numbers ------------
console.log("Even Numbers:");
for(let n=0;n<=15;n=n+2){
    console.log(n);
}

// multiplication table of 5 ------------
let n=prompt("ENter a number to generate its table:");
n=parseInt(n);
for(let i=1;i<=10;i++){
    console.log(n+"x"+i+"="+(n*i));
}

// stars by nested for loop
for(let i=5;i>=1;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}

for(let i = 1; i <= 5; i++){
    let row = "";

    for(let j = 1; j <= i; j++){
        row += "*";
    }

    console.log(row);
}