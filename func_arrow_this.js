// this keyword behaves differently in arrow functions compared to regular functions. In regular functions, this refers to the object that called the function, while in arrow functions, this refers to the surrounding lexical context (the value of this in the enclosing scope).

// Example
const obj = {
    name: 'Delta',
    marks: 90,
    regularFunction: function() {
        console.log(this);
        console.log('Regular Function:', this.name); // 'Delta'
    },
    arrowFunction: () => {
        console.log(this);
        console.log('Arrow Function:', this.name); // undefined, because 'this' refers to the global object
    }
};

obj.regularFunction(); // Output: Regular Function: Delta
obj.arrowFunction(); // Output: Arrow Function: undefined


// but it can be useful in certain scenarios, for example when we use setTimeout or event listeners,
//  where we want to preserve the context of this from the enclosing scope.
const obj2 = {
    name: 'Delta',
    marks: 90,  
    regularFunction: function() {
        setTimeout(function() {
            console.log(this);  
            console.log('Regular Function in setTimeout:', this.name); // undefined, because 'this' refers to the global object
        }, 1000);
    },
    arrowFunction: function() {
        setTimeout(() => {
            console.log(this);  
            console.log('Arrow Function in setTimeout:', this.name); // 'Delta', because 'this' refers to the enclosing scope (obj2)
        }, 1000);
    }
};

obj2.regularFunction(); // Output: Regular Function in setTimeout: undefined
obj2.arrowFunction(); // Output: Arrow Function in setTimeout: Delta
