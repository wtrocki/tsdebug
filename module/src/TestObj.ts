
export interface Test {
    name: string,
    msg: string
    getMsg(): string;
    getChangedName(): string;
}

export class TestClass implements TestClass{
    name: string
    msg: string
    getMsg(): string {
        return this.msg;
    }
    getChangedName(): string {
        return this.name + ' test';
    }
}