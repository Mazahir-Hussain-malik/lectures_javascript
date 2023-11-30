// Error handling in javascript
// javascript default parameters
// javascript tempelates literals
// javascript spread operators
//   rest parameters
// javascript destructring

let std_names = [
  "naveed",
  "amir",
  "faizan",
  "anjum",
  "asif",
  "sibtain",
  "rashid",
];

function randomName() {
  return std_names[Math.floor(Math.random() * std_names.length)];
}

let min = 1;
let max = 6;

function dice() {
  return Math.round(Math.random() * (max - min) + 1);
}

// default parameters

function add(...a) {
  console.log(a);
  let sum = 0;
  a.forEach((items) => {
    sum = sum + items;
  });

  return sum;
}

// console.log(add(1, 2, 3, 4, 5, 6, 7, 12, 20, 40));

let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
let arr4 = [7, 8, 9];
// console.log(arr);
// console.log(arr1);
let arr3 = [...arr, ...arr1, ...arr4];
// console.log(arr3);

let data = [
  {
    id: 1,
    name: "triangle",
    staffs: {
      id: 1,
      name: "rashid",
      age: 22,
    },

    skills: ["html", "css", "javascript", "react"],
  },
];

// const { id, name, staffs, skills } = data;
data.forEach(({ id, name, staffs, skills }) => {
  console.log(id);
  console.log(name);
  console.log(staffs);
  console.log(staffs.id);
  console.log(skills);
  skills.map((items) => {
    console.log(items);
  });
});
