console.log("Hello !");

setTimeout(delay,5000);

function delay(){
    console.log("Displayed after delay of 5 sec ! ");
};


// using arrow function
setTimeout(() => {
    console.log("Displayed after delay of 5 sec using arrow function ! ");
},5000);