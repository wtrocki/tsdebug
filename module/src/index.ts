import * as Promise from 'bluebird';

/**
 * Public interface
 */
export interface Base {
  /** Simple sample method */
  foo(param: string): Promise<Test>;
}

interface Test {
  name: string,
  msg: string
}


export class BaseClass implements Base {
  foo(param: string): Promise<Test> {
    return Promise.resolve({ name: 'test', msg: 'Compilation test for' + param });
  }
}