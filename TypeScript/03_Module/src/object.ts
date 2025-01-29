const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
let item: any;
for (item in car) {
  console.log(item);
}
