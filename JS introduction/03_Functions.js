//* =================================================================================================

// functions are a block of code that execute a particular task when called
// in javascript, functions are defined with the "function" keyword
// in functions, you can either return something with the "return" keyword, or just do something that doesnt need to return anything (printing)
// the code that will be executed is the code in the brackets "{}"

function functionName(p1, p2) {
    return p1 + p2;
}

//* =================================================================================================

// once you make a function, it will NOT work until you call it (you can call the function even before when the function is created too)
// in order to call a function for it to work, you have to write the function name and then put "()" after it. Example: functionName()
// if the function gets parameters, you HAVE TO give ALL of them in the parentheses

let sum = functionName(2, 5);   // 2 + 5 => 7

// NOT putting the values needed for a function, will give an answer like "NaN"
// NOT putting the parentheses after the function name, will return the block of code that exists in the function

//* =================================================================================================