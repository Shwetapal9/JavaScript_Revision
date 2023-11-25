//array

const myArray = [5, 9, 6, 1, 4, 0];
const myHeros = ["shaktiman", "nagraaj"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArray);

// Array Methods

myArr2.push(6); //add at end
myArr2.pop(); // removes at end
myArr2.unshift(1); //add at the start
myArr2.shift(); // removes at the start
console.log(myArr2);
console.log(myArr2.includes(10)); //return whether the value in array or not
console.log(myArr2.indexOf(9)); // gives the index of a value in array

const newArr = myArr2.join(); // gives the values in string

//slice , splice

//slice : gives the copy of a section in an array and does not modifies the original array and doesn't includes the last index in range
console.log(myArr2);
const arr = myArr2.slice(1, 3);
console.log(arr);
console.log(myArr2);

//splice : gives the new array in the range and modifies the original array
console.log(myArr2);
const arr1 = myArr2.splice(3,1,66,99,100,55);
// console.log(arr1);
console.log(myArr2);

