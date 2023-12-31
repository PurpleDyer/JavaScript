//* =================================================================================================

// strings have some properties or methods that you can use to do something, just like functions

const text = "HELLO THIS IS A TEXT";

//* =================================================================================================

// the "length" property returns the length of the string
let length = text.length;

//* =================================================================================================

// the slice() method, slices out something from a text, but the indexes number start from 0, meaning the first element hast the 0 index
// this method takes 2 numbers. the first number is the start and the second number is end, which itself is NOT INCLUDED for the sliced text
// putting negative numbers, will start the counting from -1 and it will be from right
let slice = text.slice(6, 10);

// the substring() method is just like slice() but it doesnt take negative indexes and it will automatically turn them into 0
let substring = text.substring(-1, 5);

// the substr() method is similiar to slice(), but the only difference is that the second parameter specifies the length of the extracted part
// if you dont give the method, its second parameter, it will extract the rest of the text
let substr = text.substr(6, 4);

//* =================================================================================================

// the replace() method, gets to parameters and it searches for the first parameter in the text and replaces it with the second parameter
// the replace() method doesnt change the text, but it returns a new text
let replace1 = text.replace("TEXT", "STRING");

// the replace() method only changes the first match, but by putting a slash on both sides and a "g" at the end, it changes all matches
let replace2 = text.replace(/hello/i, "HEY");

// the replace() method is case-sensitive BUT you can make it insensitive by putting a slash on both sides of the string, and an "i" at end
let replace3 = text.replace(/ /g, "*");

//* =================================================================================================

// the toUpperCase() method, returns a new text that all of its letters are uppercase
let upper = text.toUpperCase();

// the toLowerCase() method, returns a new text that all of its letters are lowercase
let lower = text.toLowerCase();

//* =================================================================================================

// the concat() method, adds two strings together, just like the addition of two strings using "+"
// the concat() method, gets two parameters. the first parameter defines the seperation between strings and the second parameter is the other text
// the concat() method, returns a new string
let concat = text.concat(" - ", text.toLowerCase());

//* =================================================================================================

const trimThis = "   HI   ";

// the trim() method, removes all the spaces at the start AND at the end of the string
let trim = trimThis.trim();

// the trimStart() method, removes all the spaces ONLY at the start of the string
let trimstart = trimThis.trimStart();

// the trimEnd() method, removes all the spaces ONLY at the end of the string
let trimend = trimThis.trimEnd();

//* =================================================================================================

// these two methods have been added since 2017 meaning Internet Explorer DOES NOT support it
const padThis = "Hi";

// the padStart() gets two parameters. the first parameter specifies the maximum length of the string and it fills it with the second parameter
// meaning if the first parameter is 4 and the second one is "0", it will add zeros at the beginning of the string until the total length of 4
let padstart = padThis.padStart(4, "-");

// the padEnd() gets two parameters. the first parameter specifiies the maximum length of the string and it fills it with the second parameter
// meaning if the first parameter is 4 and the second one is "0", it will add zeros at the end of the string until the total length of 4
let padend = padThis.padEnd(4, "-");

//* =================================================================================================

// the charAt() method returns the character at the specified index in the string
let charat = text.charAt(0);

// the charCodeAt() returns the unicode of the character at the specified index in the string
// this method returns a UTF-16 code which is an integer between 0 and 65535
let charcodeat = text.charCodeAt(0);

// using the access property on a string IS NOT RECOMMENDED as it will give a result that is not what you want
// the access propertys pattern goes as:   stringName[index]

//* =================================================================================================

// a string can be converted into an array using the split() method
// the split() method, splits all the characters using the parameter it gets and returns an array
// meaning if you give it a " " which is a space, it will seperate all the characters with " " and put them all into an array
// if you seperate the string with an empty string, it will seperate ALL OF THE CHARACTERS
const split = text.split("");

//* =================================================================================================

// the indexOf() method, returns the index of the first match of the parameter it gets in a string
// the indexOf() method, returns ONLY THE FIRST MATCH
let indexof = text.indexOf("");

// the lastIndexOf() method, returns the index of the last match of the parameter it gets in a string
// the lastIndexOf() method, returns ONLY THE LAST MATCH
let lastindexof = text.lastIndexOf(" ");

// they will both return -1 if they dont find anything
// you can also give both of them a second parameter which will be the starting point of the search

// the search() method searches for a string, in a string
// search() is not the same as indexOf()
// while the indexOf() method can get two parameters, the search() method CAN NOT
// the search() method DOES ACCEPT strong searches like expressions, but the indexOf() method CAN NOT
let search = text.search(/is/i);

// the match() method returns an array with the first match in a string
// the match() DOES ACCEPT expressions and can return multiple or insensitive searches
let match = text.match(/s/gi);

// the matchAll() method, is a 2020 feature and internet explorer does NOT support it
// the matchAll() method, returns an iterator, containing all the matches
// the matchAll() method DOES SUPPORT expression, but the global search or the //g expression is not needed
const matchall = text.matchAll(/l/i);

//* =================================================================================================

// the includes() method returns TRUE if the parameter given exists in the string, OR ELSE IT RETURNS FALSE
let includes = text.includes("HI");

// the startsWith() method returns TRUE if the parameter given, is the start of the string, OR ELSE IT RETURNS FALSE
let startswith = text.startsWith("HELLO");

// the endsWith() method returns TRUE if the parameter give, is the end of the string, OR ELSE IT RETURNS FALSE
let endswith = text.endsWith("TEXT");

// all of them are case sensitive and DO NOT (as far as im sure) support expressions
// all of them are 2015 features and internet explorer does NOT support them
// all of them also get a second parameter which you can specify the start index of the search

//* =================================================================================================