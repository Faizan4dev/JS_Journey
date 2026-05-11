let jsonData =
  '{"name": "Ali","age": 20,"courses": ["HTML", "CSS", "JavaScript"],"address": {"city": "Lahore","zip": "54000"}}';
//json data can't be on multiple lines , if to use multiple lines then use backticks at start and end
// after parsing — access like normal JS object!
const data = JSON.parse(jsonData);

// simple value
console.log(data.name); // "Ali"
console.log(data.age); // 20

// array
console.log(data.courses); // ["HTML", "CSS", "JavaScript"]
console.log(data.courses[0]); // "HTML"
console.log(data.courses[2]); // "JavaScript"

// nested object
console.log(data.address); // { city: "Lahore", zip: "54000" }
console.log(data.address.city); // "Lahore"
console.log(data.address.zip); // "54000"

////multiple lines json data
// ✅ backticks ALLOW multiple lines!
let jsonData2 = `{
    "name": "Ali",
    "age": 20,
    "city": "Lahore"
}`;

let resp = JSON.parse(jsonData2);
console.log(resp.name);

/////////////////////
// Stringify
////////////////////
let Obj = {
  name: "Ali",
  age: 20,
  courses: ["HTML", "CSS", "JavaScript"],
  address: {
    city: "Lahore",
    zip: "54000",
  },
};

let jsonObj = JSON.stringify(Obj);
console.log(jsonObj);
