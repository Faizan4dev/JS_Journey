const stud = {
    name: "Delta",
    age: 20,    
    display: function() {
        console.log(`${this.name} is ${this.age} years old.`);
    }       
}

stud.display(); // Output: Delta is 20 years old.

const info = {
    name: "Delta",
    age: 20,    
    eng : 90,
    math : 95,
    getavg() {
        let mrk= (this.eng + this.math) / 2;
        console.log(`${this.name} has an average mark of ${mrk}.`);
    }
}

info.getavg(); // Output: Delta has an average mark of 92.5.