// today lessons
// 2 - JavaScript Controll flows
// 1- javascript if statements
// 2 - javascsript if else statement
// 3 - javascript nested if else statements

// if (percentage >= 90) {
//   //statements
//   console.log("your grades is  " + percentage + " this is A+ grades ");
// } else if (percentage >= 80) {
//   console.log("you grades is " + percentage + " this is A grades");
// } else if (percentage >= 70) {
//   console.log("this is 70%");
// } else if (percentage >= 60) {
//   console.log("this is B grades");
// } else {
//   console.log("you are fail ....");
// }

let EvenNum = 10;
if (EvenNum % 2 === 0) {
  console.log("this is even number " + EvenNum);
} else {
  console.log("this number is odd : " + EvenNum);
}

// 4 - javascript for loop
for (let a = 0; a <= 10; a++) {
  if (a == 5 || a == 7 || a == 6) {
    continue;
  }
  console.log(a);
}

let num = 1;
while (num <= 100) {
  console.log(num);
  num++;
}

// 5 - javascript while loop

// 6 - javascript do while loop
// 7 - javascript Break statement
// 8 - javascript continue statement
// 9 - javascript switch statements

let percentage = 80;

switch (percentage) {
  case 90:
    console.log("90% ");
    break;
  case 80:
    console.log("80%");
    break;
  case 70:
    console.log("70%");
    break;
  default:
    console.log("fail");
}

// tasks
// 1 - Write a program that checks whether a given number is even or odd using an if-else statement. If the number is even, print "Even," otherwise print "Odd.

//   2 - Create a program that uses a for loop to print the first 10 multiples of a user-entered number. For example, if the user enters 5, the program should print 5, 10, 15, ..., 50.

// 3 - Write a program that uses a while loop to find and print the factorial of a given number. The user should input the number, and the program should calculate and print its factorial.

// 4 - Develop a simple calculator program that takes two numbers and an operator as input from the user. Use a switch statement to perform the corresponding operation (addition, subtraction, multiplication, division). Ensure appropriate handling for division by zero.

let mul = 9;

for (let i = 1; i <= mul * 10; i++) {
  if (i % mul == 0) {
    console.log(i);
  }
}
