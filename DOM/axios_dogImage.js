async function getImage() {
  try {
    let resp = await axios.get("https://dog.ceo/api/breeds/image/random");
    // console.log(resp.data.message);
    return resp.data.message;
  } catch (e) {
    console.log("Error --", e);
    return "No Image found!";
  }
}

//we can use this function to show facts on web page when button is clicked

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
});

// btn.addEventListener("click", async () => {
//   let fact = await getImage();
//   let para = document.querySelector("#result");
//   para.innerText = fact;
// });
