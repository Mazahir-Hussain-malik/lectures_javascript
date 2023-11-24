// today we have
// 1 -  filter method
// 2 - map method
// implement the arrays methods and (task)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarr = arr.filter(function (item) {
  return item > 5;
});
arr.map((item, index) => {
  console.log(item, index);
});

// console.log(arr);
// console.log(newarr);
