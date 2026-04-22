let h4 = document.querySelector("h4");
console.dir(h4.parentElement);

console.dir(h4.nextElementSibling);
h4.nextElementSibling.style.color = "red";

let ul = document.querySelector("ul");
ul.children[1].style.color = "Yellow";

// ------- Adding Elements -----------
let parah = document.createElement("p");
parah.innerText = "This is a new Paragraph added by JS manipulation";
let box = document.querySelector(".box");
box.appendChild(parah); //appended inside the box div
// append
parah.append("This is the 2nd line appneded!");
let btn = document.createElement("button");
btn.innerText = "Click me!";
parah.append(btn);
// prepend
// let line = parah.prepend("This is the 1st line prepended! ");
// document.querySelector(line);
//this wont work bcoz prepend returns undefind
//in order to style individual line inside parah we've to push it insde span and then style the span
// line.style.fontWeight = "bold";
// line.style.color = "blue";

let line = document.createElement("span"); //individual line inside parah can't be styled without span or any other element
line.textContent = "This is the 1st line prepended! ";
line.style.fontWeight = "bold";
line.style.color = "blue";
parah.prepend(line); // prepend AFTER setting it up

// insertAdjacentElement
let btn2 = document.createElement("button");
btn2.innerHTML = "Button !!!";
let p = document.querySelector("p");
p.insertAdjacentElement("beforebegin", btn2);
p.insertAdjacentHTML("afterend", "<h2>Heading 2 appended </h2>");
p.insertAdjacentElement("afterbegin", btn);
p.insertAdjacentElement("beforeend", btn2);

// before removing we'll assign a class to extra heading and then remove it
let h2Ex = document.querySelectorAll("h2");
// console.dir(h2Ex);
h2Ex[1].classList.add("extra");

// Removing Elements
let h2Extra = document.querySelector(".extra");
h2Extra.remove();
console.log("Removed --> Heading 2 suspended");

//remove takes no arguments , but removeChild() does take and we've to specify which child to del
