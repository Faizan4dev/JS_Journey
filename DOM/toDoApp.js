let inp = document.querySelector("#task");
let addBtn = document.querySelector("button");
let ul = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
  let item = document.createElement("li");
  let delBtn = document.createElement("button");

  item.innerText = inp.value;
  delBtn.innerText = "Delete";
  delBtn.classList.add("del");

  item.append(delBtn);
  alert(`New Task ${inp.value} added !`);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("del")) {
    event.target.parentElement.remove();
  }
});
