console.log("hello, world that is from TypeScript to JavaScript");

const country = "Bangladesh";
console.log(country);

let playerName = "jack sparrow";

playerName = "abdullah al sazib";

console.log(playerName);

function myFunction() {
  console.log("this console is from myFunction");
}
myFunction();

function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(10, 20));

array
let fruits = ["apple", "banana", "orange", 30, false, {}];
fruits.push(300);
fruits.push(false);
fruits.push({
  name: "jack sparrow",
});
console.log(fruits);

object
let person = {
  name: "jack sparrow",
  age: 32,
  isCaptain: true,
};
person.age = 21;
console.log(person.age);

let a: string;
let b: number;

a = "jack";
b = 21;
console.log(a);
console.log(b);

array

let arr: string[] = [];
arr.push("jack");

console.log(arr);

array
let arr1: (string | number | boolean)[] = [];
let arr: any[] = [];
arr.push(10);
arr.push("Jack");
arr.push(true);

console.log(arr);
console.log(arr1);

object

let c: {
  name: string;
  age: number;
  isAdult: boolean;
  car: Function;
};

c = {
  name: "jack",
  age: 21,
  isAdult: true,
  car: function (carname: string) {
    console.log(`not have car ${carname.toUpperCase()}`);
  },
};

const me = new Object(
  (c = {
    name: "jack",
    age: 21,
    isAdult: true,
    car: function (carName: string) {
      if (carName === undefined || carName === "") {
        carName = "Guest Car";
        console.log(`${this.name} car name is ${carName}`);
      } else {
        console.log(`${this.name} car name is ${carName}`);
      }
    },
  })
);

c.car("");

function

const myFunc = () => {
  console.log("hello");
};

const myFunc: Function = (
  name: string,
  age: number,
  isAdult: boolean = false
) => {
  console.log(name);
  console.log(age);
  console.log(isAdult);
};

myFunc("jack", 32);

class Person {
  name: string;
  age: number;
  isAdult: boolean;

  constructor(
    name: string = "Unknown",
    age: number = 0,
    isAdult: boolean = false
  ) {
    this.name = name;
    this.age = age;
    this.isAdult = isAdult;
  }

  // method
  geeter(): string {
    return `Hello, my name is ${this.name} and my age is ${this.age} and i'm a ${this.isAdult}`;
  }
}

const p1 = new Person();

const a = p1.geeter();

console.log(a);

const myFunc = (a: number, b: number, c?: boolean): number => {
  return a + b;
};

console.log(myFunc(3, 4));

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name}, and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"}`);
};

userDetails(29, { name: "abdullah", age: 21 });
sayHello({ name: "jack", age: 60 });

let add: (a: number, b: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(10, 20));

let calculator: (a: number, b: number, x: string) => number;

calculator = (a: number, b: number, x: string) => {
  if (x === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculator(10, 20, "add"));

class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country}`);
  }
}

import { Players } from "./classes/Players.js";
import { IsPlayers } from "./interface/isPlayer.js";

const jack = new Players("jack", 21, "Bangladesh");
let sakib: IsPlayers;
sakib = new Players("Sakib", 32, "Englend");

const players: IsPlayers[] = [];

players.push(jack);
players.push(sakib);
// players[0].play();
players[1].play();
let sakibAge = players[1].getAge();
console.log(sakibAge);

interface RectangleOptions {
  width: number;
  length: number;
}
function drawRectangle(options: RectangleOptions): number {
  let width = options.width;
  let length = options.length;
  return Math.min(options.width, options.length);
}

const resultOfRectalgle = drawRectangle({
  width: 30,
  length: 20,
});

console.log(resultOfRectalgle);

Generics

const addId = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "jack",
  age: 32,
});

console.log(user);

let a = [3, "hello", { p: 3 }];

let b: [number, string, object] = [4, "world", { t: 2 }];
