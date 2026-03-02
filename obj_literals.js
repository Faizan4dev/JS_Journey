let student = {
    name: "John Doe",
    age: 20,
    marks:90
}
console.log(student);
console.log("Name is :",student.name); 
console.log("Age is :",student.age);

let student2 = {
    name: "Jane Smith",
    age: 22,
    subjects: ["Math", "Science", "History"]
}
console.log(student2);
console.log("Name is :",student2["name"]);
console.log("Age is :",student2["age"]);
console.log("Major Subject is :",student2.subjects[0]);
// updation
student2.age;
student2.age = 21;
student2.name;
student2.name = "Jane Doe";
console.log(student2);
console.log("Name is :",student2["name"]);
console.log("Age is :",student2["age"]);


