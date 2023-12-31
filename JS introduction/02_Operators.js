//* =================================================================================================

const num1 = 4;
const num2 = 2;

//* =================================================================================================

//! Arithmetic Operators

// Addition
let addition = num1 + num2;

// Substraction
let substraction = num1 - num2;

// Multiplication
let multiplication = num1 * num2;

// Exponentation
let exponentation = num1 ** num2;

// Division
let division = num1 / num2;

// Modulus
let modulus = num1 % num2;

// Increment
let increment = num1++;

// Decrement
let decrement = num1--;

//* =================================================================================================

//! Assignment Operators
let num3 = 5;

num3 += 5;    // num3 = num3 + 5   =>  10

num3 -= 5;    // num3 = num3 - 5   =>  5

num3 *= 5;    // num3 = num3 * 5   =>  25

num3 /= 5;    // num3 = num3 / 5   =>  5

num3 %= 3;    // num3 = num3 % 3   =>  2

num3 **= 2;   // num3 = num3 ** 2  =>  4

num3++;       // num3 = num3 + 1   =>  5

num3--;       // num3 = num3 - 1   =>  4

//* =================================================================================================

//! Comparison Operators

// equal value
(num1 == num2);

// equal value AND equal type
(num1 === num2);

// not equal value
(num1 != num2);

// not equal value OR not equal type
(num1 !== num2);

// greater than
(num1 > num2);

// less than
(num1 < num2);

// greater than or equal to
(num1 >= num2);

// less than or equal to    
(num1 <= num2);

// ternary operator using "?"

//* =================================================================================================

//! Logical Operators

// AND                  if all are TRUE
num1 && num2;

// OR                   if at least one is True
num1 || num2;

// NOT as "!"           if its FALSE

//* =================================================================================================

//! Type Operators

// returns the type 
typeof "Matin";

// returns TRUE if an objects is an instance of an object type
"Matin" instanceof String;

//* =================================================================================================