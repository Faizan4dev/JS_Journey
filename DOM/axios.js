//axios library is a shorter and easier version of fetch() , we don't need to parse data , it gives json format

async function getData() {
  let resp = await axios.get("https://catfact.ninja/fact");
  console.log(resp.data);
  console.log(resp.data.fact);

  let resp2 = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(resp2);
}

getData();

//we can use this function to show facts on web page when button is clicked
