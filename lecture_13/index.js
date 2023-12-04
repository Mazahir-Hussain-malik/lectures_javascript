// promises
// api
//
// .then .catch . await .try catch fetch(url)

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    return data.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log(err);
  });
// const fetchData = async () => {
//   try {
//     const response = await data;
//     const json = await response.json();
//     console.log(json);
//   } catch (err) {
//     console.log("some thing went wrong");
//   }
// };

// fetchData();
