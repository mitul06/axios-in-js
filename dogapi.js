document.getElementById("btn").addEventListener("click", makerequest);

function makerequest() {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      console.log(res.data);
      console.log(res.data.message);
      document.getElementById("dog").setAttribute('src', res.data.message)
    })
    .catch((error) => console.log(error));
}
