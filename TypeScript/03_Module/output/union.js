"use strict";
console.log("union");
function printStatuseCode(code) {
    console.log(`My status code is ${code}`);
}
printStatuseCode(404);
setTimeout(() => {
    printStatuseCode("404");
}, 1000);
