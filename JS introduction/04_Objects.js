//* =================================================================================================

// objects in javascript can have variables and methods
// methods are functions that work for an object
// in order to define an object, you have to use the "const" keyword
// the variables within the objects, should be declared in a "{}" and has to be according to the following pattern:   {variableName:value} 

const car = {type:"Nissan", model:"GT-R", color:"Black"};

// it can also be decalred in multiple lines
const person1 = {
    name:"Matin",
    lastName:"Kashani",
    age:16
};

//* =================================================================================================

// in order to access the variables within an object, you have to do the following pattern:   objectName.variableName

let carType1 = car.type;
let carModel1 = car.model;
let carColor1 = car.color;

let personName1 = person1.name;
let personLastName1 = person1.lastName;
let personAge1 = person1.age;

//* =================================================================================================

// another way of accessing the value, is like the following pattern:    objectName["variableName"]

let carType2 = car["type"];
let carModel2 = car["model"];
let carColor2 = car["color"];

let personName2 = person1["name"];
let personLastName2 = person1["lastName"];
let personAge2 = person1["age"];

//* =================================================================================================

// in order to add a function, you have to declare a function just like how a function is declared outside an object, but with no name
// sometimes you need to access a variable within the same object you are making the function in which can be done with the "this" keyword
// pattern    =>   this.variableName

const person2 = {
    firstName:"Matin",
    lastName:"Kashani",
    age:16,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

person2.fullName();

//* =================================================================================================