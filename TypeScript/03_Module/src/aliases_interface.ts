console.log("aliases and interface");

/*
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Supra";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log(car);
*/

interface Rectangle {
  height: number;
  widht: number;
}
const rectange: Rectangle = {
  height: 20,
  widht: 10,
};
interface ColorRectangle extends Rectangle {
  color: string;
}

const colorRectangle: ColorRectangle = {
  height: 20,
  widht: 10,
  color: "Red",
};
console.log(rectange);
console.log(colorRectangle);
