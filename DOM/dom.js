// Element selection and manipulation in JavaScript

// =========Selection Methods========
// (1) document.getElementById
// id of the element gives the element in collection form with its data as object , values can be
// accessed by using the id name as key and index for position

console.log("Selection by id");
let byId = document.getElementById("mainImg");

console.dir(byId.outerText);
console.dir(byId.outerHTML);

// (2) document.getElementsByClassName
console.log("============================");
console.log("Selection by class name");
let byClass = document.getElementsByClassName("boxLink");

for (let i = 0; i < byClass.length; i++) {
  console.dir(byClass[i].outerText);
  console.dir(byClass[i].outerHTML);
}

// (3) document.getElementsByTagName
console.log("============================");
console.log("Selection by tag name");
let byTag = document.getElementsByTagName("a");

for (let i = 0; i < byTag.length; i++) {
  console.dir(byTag[i].outerText);
  console.dir(byTag[i].outerHTML);
}

let byTag2 = document.getElementsByTagName("p");
console.dir(byTag2[0].outerText);

console.dir(
  (byTag2[0].outerText = "This is the new text for the first paragraph."),
);

// (4) document.querySelector
console.dir("============================");
console.log("Selection by query selector");
let byQuery = document.querySelector(".boxLink");
console.dir(byQuery.outerText);

// (5) document.querySelectorAll
let byQueryAll = document.querySelectorAll(".boxLink");
for (let i = 0; i < byQueryAll.length; i++) {
  console.dir(byQueryAll[i].outerText);
}

// ========Manipulation Methods========
// (1) element.innerText
console.log("============================");
console.log("Manipulation using innerText");
let para = document.querySelector("p");
console.dir(para.innerText);
para.innerText = "This is the new text for the first paragraph.";

// (2) element.innerHTML
console.log("============================");
console.log("Manipulation using innerHTML");
let div = document.querySelector(".box");
console.dir(div.innerHTML);
div.innerHTML =
  "<h2>New Heading by innerHTML</h2><p>New paragraph inside the box.</p>";

// (3) element.textContent
console.log("============================");
console.log("Manipulation using textContent");
// let span = document.querySelector("span");
// console.dir(span.textContent);
// span.textContent = "This is the new text for the span element.";

// (4) element.style
console.log("============================");
console.log("Manipulation using style");
let box = document.querySelector(".box");
console.dir(box.style);
box.style.backgroundColor = "blue";
box.style.color = "white";
