// JavaScript
/*
    JavaScript was founded in 1996 by Brandon Eich
    - client side language (runs in browser)
    - interpreted (not compiled)
    - object orientated
    - ECMAScript which is an org that sets standards.
*/

// Comments
/*
    Lines or blocks of code that are not being interpreted by the parser.
*/

// Variables

/*
    Containers that store data in memory.
    - declaration
        - allowing the memory space to be reserved
        - declarations start with let or var
        - declarations cannot start with a number, or most, characters other than $ or _.
    -initialization
*/

// let firstName = 'kyle';
// console.log(firstName);

// const age
// Missing Initializer Error. Const must always be declared AND initialized
//console.log(age)

// Coding Practices for Variables
/*
    - Be concise
    - Be specific (ex: getValue instead of i)
    - Utilize camelCase, snake_case, PascalCase, or skewer-case.
    - You can also utilize nocase or SCREAMING_CASE
*/

// Variable Initialization
/*
    The data value that is given to a varibale declaration.
    Can be anything (string, integer, array, function, class, etc)
    Can be reassigned (apart from const)
*/

//declaration identifier = initializer (value)
// let address = "336 Valley"
// console.log(address);

//redeclare variables with different  initializers

// address = "Yuh";
// console.log(address);

// datatypes
/*
    JavaScript has several datatypes that can be used
        - Boolean
        - null
        - undefined
        - string
        - number
        - array
        - object
*/

// String
/*
    Data type used to represent text in single or double quotes.
    Primitive data type
*/

let myString = "This is a string";

myString = 'Can be in single quotes';

// template literal

myString = `This is a template literal string`;

// Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);
//15 digits doesn't round up

let rounded = 9999999999999999;
console.log(rounded);
//16 digits does

let decimalAddition = 0.2 + 0.3;
console.log(decimalAddition);

//redeclaration
let strToNum = Number("123");
console.log(strToNum);
console.log(typeof strToNum);

// Boolean
// Two possible values: true (on) or false (off)

let on = true;
console.log(on);

let off = false;
console.log(off);

//Undefined
// No value is assigned and does not act as empty container

let undef = undefined;
console.log(undef);

// Null
// Null is an empty value. Container with nothing in it.

let empty = null;
console.log(null);

// Null vs Undefined

/*
    - null is like a container with nothing in it
    - Undefined means variable has never been set or created
*/

// Data Type Literals
// When developer inserts a value into a data type

let strLiteral = "This is a string literal";

// Arrays
// Container holding a list of items

let students = ['Dean', 'Cole'];
console.log(typeof students); // returns object

// Objects
// Stores many values 

let student = {
    name: "Cole",
    age: 20,
    graduated: false,
}
console.log(typeof student);

// Operators

// Assignment Operator
// Assigns a value to the declaration (not 'equal' but 'is')

let r = 5;

// Comparison Operators
/*
    Compare values on either side of the operator
        - returns either a true or false
*/

// Equal to operator
console.log(3 == 5); // returns false

//Not equal to
console.log(3 != 5) // returns true

// Type Coercion
/*
    Process of converting one data type into another
    Done automatically by the javaScript parcer
*/

console.log(3 == "3"); // returns true becuase JS changes str data to num

// Strict Equal or Not Equal Operators
// Tests for not only value but data type

console.log(3 === "3"); // returns false because differing data types

console.log(3 === 3); // retunrs true 

console.log(3 !== "3"); // returns true because the data types are not equal to eachother

// Greater; Less; Greater & Equal; Less & Equal
console.log(5 > 3); // returns true

console.log(5 >= 5); // returns true

console.log(3 > "2"); //returns true because type coercion exists in these operators

// Logical Operators NOT and OR

/*
    AND Operator (&&)
        - true if both values result to true
    OR Operator (||)
        - true if one or the other is true
    NOT Operator (!)
*/

let x = 5;
let y = 7;

console.log(5 < 10 && 7 < 10);
console.log(5 < 1 && 7 < 10);

console.log(5 < 10 || 7 < 10);

// Modulus Operator
// Checks for remainder

console.log(10 % 5); //remainder

// String Concatenation

let fName = "kyle"
let lName = 'ketch'

console.log(fName, lName);

// Template Literals

let name = `Mr. ${fName} ${lName}`;

console.log(name);

// Challenge

let firstName = "Kyle";
let lastName = "Ketchmark";
let houseNum = "336";
let aptNum = "APT 4";
let street = "Valley Street";
let city = "San Francisco";
let state = "CA";
let zipCode = 94131;

const address = `${firstName} ${lastName}\n${houseNum} ${street}\n${aptNum}\n${city}, ${state}, ${zipCode}`;
console.log(address);
