export class Players {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    play() {
        console.log(`Player name is ${this.name}, from ${this.country}, and age is ${this.age}`);
    }
}
