// classes and inheritance
// oops  (classes , objects)
// functional  (fucntional)

class office {
  constructor(_name, _gmail, _location) {
    this.name = _name;
    this.gmail = _gmail;
    this.location = _location;
  }
  // methods
  getname() {
    return `the office name is ${this.name}`;
  }
}

class office_info extends office {
  constructor(_name, _gmail, _location, _staffs, _courses) {
    super(_name, _gmail, _location);
    this.staffs = _staffs;
    this.courses = _courses;
  }
  staff_information() {
    return `these are the staffs at ${this.name} , and staffs are ${this.staffs}`;
  }

  course() {
    return `these are the courses ${Object.values(
      this.courses
    )} and offered by ${this.name}`;
  }
}

const office1 = new office_info(
  "trinagle",
  "triangle@gmail.com",
  "zulfiqaar abad",
  ["rashid", "babar", "naveed", "mujtaba"],
  {
    course1: "web development",
    course2: "ui / ux",
  }
);

console.log(office1);
console.log(office1.staff_information());
console.log(office1.course());

// console.log(office1.staffs());

// const office1 = new office("triangle ", "triangle@gmail.com", "zulfiqaar abad"); // instant
// const office2 = new office(
//   "code arena",
//   "codeAreena@gmail.com",
//   "zulfiqaar abad"
// );

// console.log(office1);
// console.log(office1.getname());

// console.log(office2);
// console.log(office2.getname());

// -> dec -> pani -> heater -> pati -> milk -> boil -> salt + cheeni -> cup -> serve

// -> array ->  add Data -> delete data -> edit data -> search data -> total -> recycle
