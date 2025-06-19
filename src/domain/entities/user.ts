export class User {
  constructor(
    public readonly name: string,
    public readonly age: number
  ) {}

  describe(): string {
    return `Usuário(a): ${this.name}, idade ${this.age}.`;
  }
}
