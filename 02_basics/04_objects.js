const tinderUser = new Object(); //singleton object

const user = {}; //non singleton Object

tinderUser.id = "1bc123";
tinderUser.name = "shweta";
//  console.log(tinderUser,user)

const regularUser = {
  email: "shweta@gmail.com",
  userfullname: {
    firstname: "Shweta",
    lastname: "Pal",
  },
};
// console.log(regularUser.userfullname);

//merging objects
const obj1 = { 1: "a", 3: "c" };
const obj2 = { 2: "b", 4: "d" };
const newobj = Object.assign({}, obj1, obj2); //using Object.assign method
const obj3 = { ...obj1, ...obj2 }; //using spread operator
// console.log(newobj, obj3);

// Object keys and values access

console.log(Object.keys(tinderUser)); //datatype - Array
console.log(Object.values(tinderUser)); //datatype - Array
console.log(Object.entries(tinderUser)); //makes key as index and values as values
