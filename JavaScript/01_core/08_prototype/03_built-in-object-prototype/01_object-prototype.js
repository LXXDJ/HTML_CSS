/* 1. object prototype */

/* Object는 내장 객체 생성자 함수인데
   이 생성자 함수의 prototype은 toString을 비롯한 다양한 메서드가 구현되어있는 거대한 객체를 참조
   new Object()를 호출하거나 리터럴 문법 {property...}을 사용해 객체를 만들 때,
   새롭게 생성된 객체의 [[Prototype]]은 Object.prototype을 참조 */

const obj1 = new Object();
const obj2 = {};

console.log(obj1.__proto__ === Object.prototype);           // true
console.log(obj2.__proto__ === Object.prototype);           // true
console.log(obj2.toString === obj1.__proto__.toString);     // true
console.log(obj2.toString === Object.prototype.toString);   // true

console.log(obj1.__proto__)             // [Object: null prototype] {}
console.log(obj2.__proto__)             // [Object: null prototype] {}
console.log(Object.prototype)           // [Object: null prototype] {}

console.log(obj2.toString)              // [Function: toString]
console.log(obj1.__proto__.toString)    // [Function: toString]
console.log(Object.prototype.toString)  // [Function: toString]