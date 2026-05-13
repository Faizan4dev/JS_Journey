//Free APIs for fetching data :
// https://catfact.ninja/fact
// https://icanhazdadjoke.com/api
// http://universities.hipolabs.com/
// https://dog.ceo/api/breeds/image/random

let url = "https://catfact.ninja/fact";
// let url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
  .then((response) => {
    // console.log(response);  //it returns a response object with all metadata , this is not desired actual json , so we need covert it to json
    return response.json(); //converting that raw promise data to json data
  })
  .then((data) => {
    console.log(data); //data returned from 2nd promise
    return fetch(url); //2n call to api
  })
  .then((reply) => {
    return reply.json();
  })
  .then((data1) => {
    console.log("2nd API call by promise:", data1.fact); //we can print any desired element from the json data
  })
  .catch((error) => {
    console.log("Error --", error);
  });

//using async-await modern +short method
async function getData() {
  try {
    let resp = await fetch("https://catfact.ninja/fact");
    let data = await resp.json();
    console.log(data);

    //2nd call
    let resp2 = await fetch("https://catfact.ninja/fact");
    let data2 = await resp2.json();
    console.log("Async Func's Data 2:", data2.fact);
  } catch (e) {
    console.log("error:", e);
  }
}

getData();
