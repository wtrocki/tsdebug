import * as Promise from 'bluebird';
import { Base } from './Base';
import { Test, TestClass } from './TestObj';

export class BaseClass implements Base {
    foo(param: string): Promise<Test> {
        const obj = new TestClass();
        return Promise.resolve(obj);
    }
}