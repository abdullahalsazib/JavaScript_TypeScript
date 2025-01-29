class Person {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

// const person = new Person("jack");
// console.log(person.getName());

class Person2 extends Person {
  public setName(name: string): string {
    return (this.name = name);
  }
}

const jack = new Person2("jack");

console.log(jack.getName());
jack.setName("abdullah");
console.log(jack.getName());
console.log(jack);
