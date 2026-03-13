function sum(a,b=0){
    return a+b;
}

console.log(sum(1,2)); // 3  ,bcoz user added parameter value so default parameter value will be ignored
console.log(sum(1));   // 1

// The default parameter can be used in any position of the parameter list, but it must be after the non-default parameters. If we try to use a default parameter before a non-default parameter, it will result in a syntax error.
function product(b,a=1){
    return a*b;
}   

console.log(product(2,3)); // 6
console.log(product(2));   // 2