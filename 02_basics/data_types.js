// There are 8 basic data types in js


// 1- Number denoting both integer & floating number
let n = 123
n = 123.2


// 2- BigInt
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;


// 3- String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


// 4- Boolean 
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// 5- null: It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let age = null;

// 6 - undefined

let name;

alert(name); // shows "undefined"

// 7 - Objects

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)