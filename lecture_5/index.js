// objects in javascript
//how to decalre an objects
let name = "mazahir";

//non-perimitive data type
//objects arrays

// how to access an objects
// 1. Using dot Notation  2. Using bracket Notation
//how to change the values of an objects
// how to lock a value of an objects
// can we add fucntions in an objects
// can we add arrays in an objects
//can we add objects within an object
// this keyword in an object
//how to declare objects using constructor (task)
// can we copy objects into another objects

// js prototypes
//how to get the keys of objects ... i,e Object.key()
//how to get the values of objects ... i,e Object.values()
//how to get the enteries of objects ... i,e Object.enteries()

let company = {
  name: "triangle",
  location: "zulfiqaar abad",
  contact: "+92-35423",
  owner: "rashid",
  isOfferedCourse: true,
  add: function (a, b) {
    return a + b;
  },
  students: ["amir", "naeem", "faizan", "sibtain"],
  staff: {
    totalStafs: 10,
  },
};

console.log(company.aboutOffice());
// console.log(company);
// console.log(company.students[0]);
// console.log(company.staff.totalStafs);
// console.log(Object.keys(company));
// console.log(Object.values(company));
console.log(Object.entries(company));
