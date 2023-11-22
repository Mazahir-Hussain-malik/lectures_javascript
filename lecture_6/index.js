function Company(_name, _location, _greet) {
  this.name = _name;
  this.location = _location;
  this.greet = _greet;
}
const comp1 = new Company("trianlge", "zulfiqar abad", function () {
  return `hello ${this.name} welcome`;
});
const comp2 = new Company("Code Areena", "ali", function () {
  return `hello ${this.name} welcome`;
});

// console.log(comp1);
// console.log(comp2);

function add(a, b) {
  return a + b;
}

add(10, 20);
// what is array
//how to access an array
//array methods
// 1 - arr.push(item);  //add items at last
// 2 - arr.pop()     //delete the last element
// 3 - arr.unshift(item)  //insert at start
// 4 - arr.shift()      //remove the fisrt element
// 5  - arr.include(searchItem)  // return true if exist else return false
// 6 - arr.indexOf(items)  // return the index of an array
// 7 - arr.join();      // convert array into string
// 8 - arr.slice(1 , 3) ; //return the items from 1 to 2 not last element
//  9 - arr.splice(1 , 3) ; // return the items from 1 to 3 also change the original array (also used to remove elements , add elements etc)
// 10 - arr.concat(arr1 , arr2);  //concat two arrays
//  concat arrays using spread operators (best method)

// console.log(num[2], num[3]);
// console.log(num[4]);
// console.log(num.length);

const num = [1, 2, 3, 4, 5];
// console.log(num); //before splice  [1 , 2 , 3 , 4 , 5]
// console.log(num.splice(2, 0, "ali"));
// console.log(num);
num.push(12);
// console.log(num); //after push
num.pop();
// console.log(num);
num.unshift(10);
// console.log(num);
num.shift();
// console.log(num);
// console.log(num.includes(10));
// console.log(num.includes(5));
// console.log(num.indexOf(5));
// console.log(num.indexOf(20));
// console.log(num.join());

// console.log(num.slice(1, 4));

const num1 = [1, 2, 3];
console.log(num1);
const num2 = [4, 5, 6];
const num3 = [4, 5, 6];
console.log(num2);
// const allnum = num1.concat(num2);
const allnum = [...num1, ...num2, ...num3];
console.log(allnum);
