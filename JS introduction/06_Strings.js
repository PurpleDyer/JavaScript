//* =================================================================================================

// anything that is in between a "" or a '', is a string. EVEN numbers
// in order to use " and ' in the text, we use \" and \' to show that they are characters that we want to show in text

let string = "this is a string";
let string2 = 'this is also a string';

//* =================================================================================================

// you can even use back-tics or `` instead of double quotations or quotations ("" or '')
// `` or back-tics have some more special features that make them unique
// they often refer to strings that are using the back-tics as "Template Literals"
// Template Literals have been added in 2015 and internet explorer DOES NOT support it
let backtics = `this is also another string`;

//* =================================================================================================

// in Template Literals, you can add double quotations and quotations to the string without any problems
let quoted = `my name is "Matin"`;

//* =================================================================================================

// Template Literals also support multi-line strings
let multiline = 
`this
is 
a
multi-line
string`;

//* =================================================================================================

// using variables in a string is called "Interpolation"
// the Interpolation pattern goes as:   ${variableName}
// the value of the variable, goes in the set place for it in the string
// you can even do math and ... more with it in a string too 

let myName = "Matin";
let myAge = 16;
let me = `Hello! My name is ${myName} and Im ${myAge} year(s) old`;

//* =================================================================================================