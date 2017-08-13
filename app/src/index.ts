import {BaseClass } from 'ts-module';

const usage = new BaseClass();

usage.foo('bluebird').then(function(msg) {
    console.info(msg);
})