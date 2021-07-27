// document.getElementById("btn").addEventListener("click", makerequest);

//with remote data with mutiple get
function makerequest() {
  console.log("btn clicked");
  axios("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res);
      console.log(res.data);

      const output = document.getElementById("alldata");

      res.data.forEach((element) => {
        console.log("ID --", element.id);
        console.log("title --", element.title);
        console.log("body --", element.body);

        output.innerHTML += `
        <hr />
        <h2>ID -- ${element.id}</h2>
        <h3>Title -- ${element.title}</h3>
        <h4>Body -- ${element.body}</h4>
        `;
      });
    })
    .catch((error) => console.log(error));
}

// //with remote data with single get
// function makerequest() {
//   console.log("btn clicked");
//   axios("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       console.log(res);
//       console.log(res.data);
//       document.getElementById("divdata").innerText = res.data.title;
//       document.getElementById("divdata1").innerText = res.data.body;
//     })
//     .catch((error) => console.log(error)    );
// }

// with json
// function makerequest() {
//   console.log("btn clicked");
//   axios
//     .get("stu.json")
//     .then((res) => {
//       console.log(res);
//       console.log(res.data);
//       document.getElementById("divdata").innerText = res.data.name;
//       document.getElementById("divdata1").innerText = res.data.roll;
//     })
//     .catch((error) => console.log(error));
// }

// using txt file in axios
// const makerequest = () => {
//   console.log("btn clicked");
//   config = {
//     method: "get",
//     url: "data.txt",
//   };
//   axios(config).then((res) => {
//     console.log(res.data);
//   });
// };
// const makerequest = () => {
//     console.log("btn clicked");
//     config = {
//         method:'get',
//         url:'data.txt'
//     }
//     const promiseobj = axios(config)
//     promiseobj.then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// };

// function makerequest() {
//   console.log("clicked");
//   axios
//     .get("data.txt")
//     .then((res) => {
//       console.log(res);
//       console.log(res.data);
//       document.getElementById("divdata").innerHTML = res.data;
//     })
//     .catch((error) => console.log(error));
// }

// async function makerequest() {
//   console.log("cliked Async");
//   config = {
//     method: "get",
//     url: "data.txt",
//   };

//   const res = await axios(config);
//   console.log(res);
//   console.log(res.data);
//   document.getElementById("divdata").innerHTML = res.data;
// }
