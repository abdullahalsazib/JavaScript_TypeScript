"use strict";
function add(a, b) {
    return a + b;
}
let a = prompt("Enter number for a: ");
let b = prompt("Enter number for b: ");
function convertNumber(value) {
    if (value === null || isNaN(Number(value))) {
        return 0; // Default value if the input is invalid
    }
    return Number(value);
}
console.log(add(convertNumber(a), convertNumber(b)));
