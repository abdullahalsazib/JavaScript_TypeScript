"use strict";
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
let item;
for (item in car) {
    console.log(item);
}
