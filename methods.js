const data = {
    add : function(a, b) {
        return a + b;
    },
    subtract : function(a, b) {
        return a - b;
    },
    multiply : function(a, b) {
        return a * b;
    }
};

console.log(data.add(5, 3)); // returns 8
console.log(data.subtract(5, 3)); // returns 2
console.log(data.multiply(5, 3))    ; // returns 15

// short hand method definition
const data2 = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },     
    multiply(a, b) {
        return a * b;
    }   
};

console.log(data2.add(5, 3)); // returns 8
console.log(data2.subtract(5, 3));      
console.log(data2.multiply(5, 3)); 