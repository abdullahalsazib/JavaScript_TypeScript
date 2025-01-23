console.log("control flow");

// if (condition) {...}
// else if (condition) {...}
// else (condition) {...}

let a = 100;
let b = 20;
if (a > b) {
  console.log("a is greater then b");
} else {
  console.log("a is not greater then b");
}

const x = 120;

switch (x) {
  case 10:
    console.log("the x value is :" + x);
    break;
  default:
    console.log("the x value is not 10");
    break;
}

// for loop

// for (let i = 0; i <= 10; i++) {
//   console.log("hello, world " + i);
// }

//  array
let arr = [1, 2, 3, 3, 4];
console.log(arr);
console.log("arr length : " + arr.length);
