import sayHello from './hello.js';
class A {
    constructor() {
        this.name = 'Andy';
    }
    // fn 方法
    fn() {
        console.log('you', this.name);
        sayHello();
    }
}
