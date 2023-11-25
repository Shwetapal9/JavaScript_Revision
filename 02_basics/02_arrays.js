const marvel_heroes = ["thor", "Ironman", "spider"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //[ 'thor', 'Ironman', 'spider', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][2]); //batman

const new_heroes = marvel_heroes.concat(dc_heroes);
console.log(new_heroes); //[ 'thor', 'Ironman', 'spider', 'superman', 'flash', 'batman' ]

const new_heroes1 = [...marvel_heroes, ...dc_heroes];
console.log(new_heroes); //[ 'thor', 'Ironman', 'spider', 'superman', 'flash', 'batman' ]

console.log(Array.from("Shweta")); //[ 'S', 'h', 'w', 'e', 't', 'a' ]
console.log(Array.from({ user: "Shweta" })); //[]-> need to tell what to use like keys or values otherwise gives the empty array

const num1 = 20;
const num2 = 30;
const num3 = 40;

console.log(Array.of(num1, num2, num3, num1));
