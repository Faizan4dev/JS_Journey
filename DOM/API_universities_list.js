let url = "http://universities.hipolabs.com/search?name=";

// let country = "pakistan";

let btn = document.querySelector("#fetchButton");
btn.addEventListener("click", async () => {
  let inp = document.querySelector("#countryInput");
  let country = inp.value.trim();
  if (country === "") {
    return;
  }
  let data = await getData(country);
  show(data);
});

async function getData(country) {
  try {
    let resp = await axios.get(url + country);
    // console.log(resp.data);
    return resp.data;
  } catch (e) {
    console.log("Error : ", e);
  }
}

function show(data) {
  let list = document.querySelector("#uniList");
  list.textContent = "";
  for (let idx of data) {
    // console.log(idx.name);
    let li = document.createElement("li");
    li.textContent = idx.name;
    list.append(li);
  }
}
