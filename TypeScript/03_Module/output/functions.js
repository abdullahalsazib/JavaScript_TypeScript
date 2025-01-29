"use strict";
console.log("Functions");
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// void
function printHello() {
    console.log("Hello");
}
printHello();
// paramenters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 20));
// optional parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log("10 + 20 = " + add(10, 20));
console.log("10 + 20 + 30 = " + add(10, 20, 30));
// default parameters
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log("pow = " + pow(10, 30));
// named parameters
function divide({ divided, divisor }) {
    return divided / divisor;
}
console.log("divide = " + divide({ divided: 3, divisor: 1 }));
// rest parameters
function restAdd(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log("restAdd = " + restAdd(10, 20, 30, 40, 50));
