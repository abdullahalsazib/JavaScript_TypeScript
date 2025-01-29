"use strict";
console.log("From array");
// const arr: readonly number[] = [];
const arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);
// type inference
const numbers = [1, 2, 3, 4, 5];
numbers.push(10);
numbers.push(20);
console.log(numbers);
let head = numbers[0];
console.log(head);
