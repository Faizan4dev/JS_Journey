// While loop ----------------------
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// even upto 20
console.log("Even numbers :");
let j=0;
while(j<=20){
    console.log(j);
    j=j+2;
}

// odd upto 20
console.log("Odd numbers :");
let k=1;
while(k<=20){
    console.log(k);
    k=k+2;
}

// Fav movie guess
let favMovie="3 Idiots";
let guess=prompt("Enter your guess or type 'Quit' to exit:");
while(guess!="3 Idiots" && guess!="Quit"){
    guess=prompt("Enter your guess or type 'Quit' to exit:");
}
if(guess=="3 Idiots"){
    console.log("You Guessed right...!")
}
else{
    console.log("Exiting")
}
// or
let favMovi="3 Idiots";
let gues=prompt("Enter your guess or type 'Quit' to exit:");
while(gues!="3 Idiots"){
    if(gues=="Quit"){
        console.log("Exiting")
        break;
    }
    gues=prompt("Enter your guess or type 'Quit' to exit:");
}
if(gues=="3 Idiots"){
    console.log("You Guessed right...!")
}