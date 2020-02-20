import sayHello from './hello.js';
class A {
    constructor() {
        this.name = 'Andy';
    }
    fn() {
        console.log('hello', this.name);
        sayHello();
    }
}
