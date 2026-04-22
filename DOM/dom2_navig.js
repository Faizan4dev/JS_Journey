let h4 = document.querySelector("h4");
console.dir(h4.parentElement);

console.dir(h4.nextElementSibling);
h4.nextElementSibling.style.color = "red";

let ul = document.querySelector("ul");
ul.children[1].style.color = "Yellow";

// Adding Elements
let parah = document.createElement("p");
parah.innerText = "This is a new Paragraph added by JS manipulation";
