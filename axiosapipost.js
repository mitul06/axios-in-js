document.getElementById("btn").addEventListener("click", makerequest);
// https://reqres.in/api/users

function makerequest(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;

  console.log("clicked btn");

  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ name: name, job: job }),
  };

  axios(config)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
}

// function makerequest(){
//     console.log("clicked btn");

//     const config = {
//         method:'POST',
//         url:'https://reqres.in/api/users',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         data:'{"name": "Deep","job": "web Dev"}'
//     }

//     axios(config).then((res) => console.log(res.data)).catch((error) => console.log(error))
// }
