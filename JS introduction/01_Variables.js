//* =================================================================================================

// javascript variables are defined with "let" and "var" and "const"
// while you CAN actually define variables without the keywords but it is considered a good practice to put the keywords before the variable name
// its also a good practice to put all the variables at the beginning of a script

//* =================================================================================================

// the "var" keywords must be used when youre coding for older browsers
var var1 = 4;
var var2 = 5;
var var3 = var1 + var2;

//* =================================================================================================

// the "let" and "const" keywords were added in 2015
// the "let" keyword is basically "var" but for newer browsers
let let1 = 4;
let let2 = 5;
let let3 = let1 + let2;

//* =================================================================================================

// the "const" keyword is used when you dont want the value of the variable to change
const const1 = 4;
const const2 = 5;
let letconst = const1 + const2;

//* =================================================================================================

// you can also declare a variable and then give the value later
let carName;
carName = "Nissan";

//* =================================================================================================

// you can give some variables the same keyword
let name = "Matin", lastName = "Kashani", age = 16;
// or do it in multiple lines, seperated with commas
let name2 = "Matin",
lastName2 = "Kashani",
age2 = 16;

//* =================================================================================================

// you can use arithmetics in javascript
// in numbers:
let numbermath = 2 + 3 + 4; //  => 9

// in strings:
let stringmath = "Matin" + " " + "Kashani" //  => Matin Kashani

// and this...
let complexmath = "5" + 4 + 3 //  => 543  

//* =================================================================================================

//! SOME POINTS ABOUT DECLARING VARIABLES
// 1. NOT giving a variable, a value, it will automatically get the "undefined" value
// 2. re-delcaring a variable only works for the "var" keyword and it will have the same value as it had before
// 3. in variables, "$" are treated as numbers and "_" are treated as letters
// 4. "var" has block scope. it means its value can be changed in a block; but "let" and "const" will make a new variable for the block
// 5. when making a const array or object, you CAN add elements or do things, but you CAN NOT assign a new value to it

//* =================================================================================================