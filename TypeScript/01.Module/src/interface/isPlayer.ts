export interface IsPlayers {
  name: string;
  readonly country: string;

  play(): void;
  getAge(): number;
}
