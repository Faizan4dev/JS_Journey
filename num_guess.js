let max = prompt("Enter max number for guess :");
let random = Math.floor (Math.random() * max) + 1;

let guess = prompt("Guess Number :");

while(true){
    if(guess == 'quit'){
        console.log("User Quited...");
        console.log("Number was:" + random);
        break;
    }
    else if(guess == random){
        console.log("Congrats!! You Guessed right ! Number is "+random);
        break;
    }
    else if (guess < random) {
        guess = prompt("hint : Your number is small ! Try Again with large number :");
    }
    else if(guess > random){
        guess = prompt("hint : Your number is large ! Try Again with small number :");
    }
    else{
        guess = prompt("Wrong input! Try Again :");
    }
}
