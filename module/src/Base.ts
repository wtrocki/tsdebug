import { Test } from './TestObj';

/**
 * Public interface
 */
export interface Base {
    /** Simple sample method */
    foo(param: string): Promise<Test>;
}