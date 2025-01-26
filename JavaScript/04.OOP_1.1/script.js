class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const jack = new Person("jack", 20);

const car = {
  brand: "Toyota",
  model: "MK-v4",
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
};

car.start();
