// console.table({ name: "jack", age: 21 });

// console.dir({ name: "Jack", age: 21 });

var a = document.querySelector("h1").textContent;
let b = 1;
const c = 30;
let myName = "jackSparrow";
const h1 = document.querySelector("h1");

console.log(h1);

console.log(typeof b);

console.log(myName);

// Basic Math

/*
console.log(2 + 2);
console.log(2 - 3);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 * 2);
console.log(2 ** 2);
*/

// counter
let counter = 1;
counter++;

console.log(counter);

// Boolean

let isTrue = true;
console.log(isTrue);

// undefiend
let number = 10;

console.log(number + undefined); // NaN --> Not a Number

let isJsProgrammingLanguage = true;
let isJsHard = false;
let fevNub = 21;

console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(fevNub);

// Comparison Operators
// --> Relational Operator
console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);
// --> Equality Operator
//  === strict equality ( type + value )
//  !== strict non-equality ( type + value )
//  == lose equality operator ( value )
//  != lose not equality operator ( value )

console.log(10 === 10);
console.log(10 === "10");
console.log(10 !== "10");
console.log(10 === Number("10"));
console.log(10 == 10);
console.log(10 != 10);

let firstName = "Jack";
let secondName = "Sparrow";
let fullName = "";
// append

// console.log(firstName + secondName);

fullName += firstName + secondName;

console.log(fullName);

// Length
console.log(firstName.length);
console.log(secondName.length);
console.log(fullName.length);

// Cases
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.toLocaleUpperCase());

// Slice
console.log(firstName.slice(0, 1).toUpperCase());

// Split & Join
console.log(firstName.split("").join(" _ ").toUpperCase());

// Includes
console.log(firstName.includes("W"));

// Trim
console.log(firstName.trim());

let FullName = `${firstName} and ${secondName}`;
console.log(FullName);

console.log("jack");

// Type conversion
// one type to another type

let money = "50";
// money = parseInt(money)
// money = +money
money = Number(money);
console.log(money);

//  conver number to string

money = money.toString();
console.log(typeof money);

console.log("====================================");
const welcome = function () {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  return sum;
};

console.log(welcome(10, 10, 10, 10, 10));

function sum(name, ...args) {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  return name + " " + sum;
}

// console.log(sum("jack", 1, 2, 3, 4, 5, 6, 7));

let myArr = [10, 10, 10, 10, 10];
let forSub = sum("jack", ...myArr);

console.log(forSub);
