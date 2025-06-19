declare function printNow(): string;

declare class User {
    readonly name: string;
    readonly age: number;
    constructor(name: string, age: number);
    describe(): string;
}

export { User, printNow };
