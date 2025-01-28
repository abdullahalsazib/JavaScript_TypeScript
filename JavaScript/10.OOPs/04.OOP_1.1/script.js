// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// const jack = new Person("jack", 20);

// const car = {
//   brand: "Toyota",
//   model: "MK-v4",
//   start() {
//     console.log(`${this.brand} ${this.model} is starting...`);
//   },
// };

// car.start();

// // javascript class inheritance
// class Car {
//   constructor(brand) {
//     this.carName = brand;
//   }
//   present() {
//     return "I have a " + this.carName;
//   }
// }
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", It is a " + this.model;
//   }
// }

// let myCar = new Model("supraaa", "Mk-v4");

// console.log(myCar);

// console.log(myCar.show());
// console.log(myCar.present());

// // class get & set
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   get gname() {
//     return this.carname;
//   }
//   set gname(brand) {
//     this.carname = brand;
//   }
// }

// const myCar = new Car("Supra");

// console.log(myCar.carname);
// console.log(myCar.gname);
// myCar.gname = "jack";
// console.log(myCar.gname);

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello(brand) {
    return "This car name is : " + brand;
  }
}

const mycar = new Car("MK-V4");

console.log(Car.hello("Mk_v4"));
