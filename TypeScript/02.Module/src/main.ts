class Person {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }
  public setName(newName: string): void {
    this.name = newName;
  }
}

const jack = new Person("jack sparrow", 21);

jack.setName("Abdullah al sazib");
console.log(jack.getName());

class Animal {
  constructor(public name: string) {}
  public makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  public makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("kutub");
dog.makeSound();
