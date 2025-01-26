"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
const jack = new Person("jack sparrow", 21);
jack.setName("Abdullah al sazib");
console.log(jack.getName());
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog("kutub");
dog.makeSound();
