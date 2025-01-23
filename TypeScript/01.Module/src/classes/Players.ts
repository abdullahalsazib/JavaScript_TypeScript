import { IsPlayers } from "../interface/isPlayer.js";

export class Players implements IsPlayers {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getAge() {
    return this.age;
  }
  play() {
    console.log(
      `Player name is ${this.name}, from ${this.country}, and age is ${this.age}`
    );
  }
}
