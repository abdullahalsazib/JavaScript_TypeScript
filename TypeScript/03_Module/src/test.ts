// function add(a: number, b: number): number {
//   return a + b;
// }

// let a: string | null = prompt("Enter number for a: ");
// let b: string | null = prompt("Enter number for b: ");

// function convertNumber(value: string | null): number {
//   if (value === null || isNaN(Number(value))) {
//     return 0; // Default value if the input is invalid
//   }
//   return Number(value);
// }

// console.log(add(convertNumber(a), convertNumber(b)));
console.log("Hello, World!");

// const names: readonly string[] = ["jack, sparrow"];
const names: string[] = ["jack, sparrow"];

names.push("jack");
names.push("sparrow");
names.push("abdullah");

names.map((item: string) => console.log(item.toUpperCase()));
