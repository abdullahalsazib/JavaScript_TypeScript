console.log("as");
let x: unknown = "hello";
console.log(x + " length => " + (x as string).length);

let a: unknown = "abdullah";
console.log((<string>x).length);
