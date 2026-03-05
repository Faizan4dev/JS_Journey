setInterval(intrv,2000);
function intrv(){
    console.log("Hello World");
};

// counter
// let count = 1;
// setInterval(() => {
//     console.log(count);
//     count++;
// }, 1000);


// by default it returns an id 
let id = setInterval(() => {
    console.log("HIIII");
}, 2000);
console.log(id);

// to stop the interval we can use clearInterval() method and pass the id of the interval we want to stop
setTimeout(() => {
    clearInterval(id);
    console.log("Interval stopped");
}, 5000);   //here HIII will be stopped but the Hello world will continue to print every 2 seconds because we have not stopped that interval.