// Q01 : average of array elements
const arrayavg = (arr) => {
    let sum = 0;
    // sum = parseInt(sum);
    for(let i=0;i<arr.length;i++){
        sum+=parseInt(arr[i]);
    }
    return sum/arr.length;
}

let arr = [];
let itr = 5;
let num;
for(let j=0;j<itr;j++){
    num = prompt(`Enter number ${j} :`);
    arr.push(num);
}

let add = arrayavg(arr);
console.log(`Average of the given numbers is : ${add}`)

// Q2 :even or odd
const chkeven = (numb) =>{
    if(numb%2 ===0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

let evn = chkeven(5);
console.log(evn);

// or 
const chkeven1 = (numb) =>{ return (numb%2 ===0) ? 'even' : 'odd'; };
let evn1 = chkeven1(5);
console.log(evn1);

// The remaining questions are text based and don't need code implementation, here it is ,we've to tell just output:
const object = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

