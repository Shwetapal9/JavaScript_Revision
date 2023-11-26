// singleton
// -->object.create

//object literal

let mysym = Symbol("key1");

const jsUser = {
  name: "Shweta",
  age: 24,
  [mysym]: "mysymbl1",
  location: "New Delhi",
  email: "shweta@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Wednesday"],
};

console.log(jsUser.email);
console.log(jsUser["name"]);
console.log(jsUser[mysym]);
console.log(typeof jsUser[mysym]); //string

Object.freeze(jsUser); // Un-changable object
console.log(jsUser);
