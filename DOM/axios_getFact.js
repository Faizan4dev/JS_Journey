async function getData() {
  try {
    let resp = await axios.get("https://catfact.ninja/fact");
    // console.log(resp.data.fact);
    return resp.data.fact;
  } catch (e) {
    console.log("Error --", e);
    return "No fact found!";
  }
}

// getData();

//we can use this function to show facts on web page when button is clicked

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getData();
  let para = document.querySelector("#result");
  para.innerText = fact;
});
