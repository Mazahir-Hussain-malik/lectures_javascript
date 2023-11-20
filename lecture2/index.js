// javascript Operators
// a symbol that persform a special operation

// oprands

//JavaScript Operator Types
/*
  1 - Arithmetic Operators
  +	Addition	x + y
  -	Subtraction	x - y
  *	Multiplication	x * y
  /	Division	x / y
  %	Remainder	x % y
  ++Increment (increments by 1)	++x or x++
 --	Decrement (decrements by 1)	--x or x--
 **	Exponentiation (Power)	x ** y
 */

let num1 = 10;
let num2 = 20;
console.log(" sum is = ", num1 + num2); //30
console.log(" subtraction is = ", 20 - 10);
console.log(" multiplication is =  " + 30 * 3);
console.log("division is = " + 30 / 10);
console.log("module is = " + (20 % 2));
let a = 10;
console.log("pre increment is ", ++a);

console.log("post inc is = ", a++);
console.log(a);

console.log("square is ", 2 ** 2);
// 2 - JavaScript asighment operators
/*
 
=	Assignment operator	a = 7; // 7
 +=	Addition assignment	a += 5; // a = a + 5
 -=	Subtraction Assignment	a -= 2; // a = a - 2
 *=	Multiplication Assignment	a *= 3; // a = a * 3
 /=	Division Assignment	a /= 2; // a = a / 2
 %=	Remainder Assignment	a %= 2; // a = a % 2
 **=	Exponentiation Assignment	a **= 2; // a = a**2
  
 */
let number = 10;
console.log((number = number + 5));

console.log((number += 5));
console.log((number -= 10));
console.log((number *= 10));
console.log((number /= 10));
console.log((number %= 10));
console.log((number **= 100));

// 3 - JavaScript Comparison Operators
/*
 
    ==	Equal to: returns true if the operands are equal	x == y
   !=	Not equal to: returns true if the operands are not equal	x != y
   ===	Strict equal to: true if the operands are equal and of the same type	x === y
  !==	Strict not equal to: true if the operands are equal but of different type or not equal at all	x !== y
  >	Greater than: true if left operand is greater than the right operand	x > y
  >=	Greater than or equal to: true if left operand is greater than or equal to the right operand	x >= y
  <	Less than: true if the left operand is less than the right operand	x < y
  <=	Less than or equal to: true if the left operand is less than or equal to the right operand
  
 */
console.log(5 === "5");
console.log(5 !== "3");
console.log(5 > 3);
console.log(5 >= 5);

// ternary operator

let isopen = true;
"condition" ? "true" : "false";

console.log(5 == 6 ? "mazahir" : "trinalge");

// 4 - JavaScript Logical Operators
/*
 
  &&	Logical AND: true if both the operands are true, else returns false	x && y
  ||	Logical OR: true if either of the operands is true; returns false if both are false	x || y
  !	Logical NOT: true if the operand is false and vice-versa.	!x
  
  
 */

console.log(5 === 5 && 4 === 3);
console.log(5 === 5 && 4 === 4);

console.log(5 === 5 || 4 === 3);
console.log(!true);

console.log(!(2 === 3));

//   javascript comments

// javascript type conversion
// conveting one data type into another datatype is called type conversion
// 1 - impilcit conversion : automatic type conversion

let c = 2 + "2";
let n = 10;
console.log(n, typeof n);

console.log(typeof c);
let d = 2 - "2";
console.log(typeof d);

// 2 - explicit conversion : manually type conversion
// ParseInt
// ParseFloat
// Number
// String
// Boolean
//
let n1 = 20.023;
let n2 = parseInt(n1);
console.log(n2);
