"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// const person = new Person("jack");
// console.log(person.getName());
class Person2 extends Person {
    setName(name) {
        return (this.name = name);
    }
}
const jack = new Person2("jack");
console.log(jack.getName());
jack.setName("abdullah");
console.log(jack.getName());
console.log(jack);
