//loops in arrays
// first we get the array or print aray using simple for loop
// 1 -  for of loop
// 2 -  for in loop
// 3 - forEach loop
// 4 - map method : (collection of key value pair , accept unique values)

const num = [1, 2, "ali", 4, 5];
// for of loop
// for (const i of num) {
//   console.log(i);
// }
//for in loop
// for (const key in num) {
//   console.log(key);
// }
// for each loop
// function expression

// num.forEach(function (items, index, arr) {
//   console.log(items, index, arr);
// });

const persons = [
  {
    id: 1,
    name: "amir",
    lname: "muhammad",
  },
  {
    id: 2,
    name: "jamshhed",
    lname: "ali",
  },
  {
    id: 3,
    name: "naveed",
    lname: "abbas",
  },
  {
    id: 4,
    name: "sibtain",
    lname: "raza",
  },
];
// console.log(persons);

// for (const i of persons) {
//   console.log(i.name);
// }

// using for each
persons.forEach((items) => {
  console.log(items.id, items.name, items.lname);
});

//task =>
// write an object and iterate it using for of loop ,  for in loop , forEach loop
