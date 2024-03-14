/* 내장 객체 프로토타입 */

const num = new Number(20);

// num은 Number.prototype을 상속받음
console.log(num.__proto__ === Number.prototype);    // true

console.log(num.__proto__);     // {}
console.log(Number.prototype);  // {}

// num은 Object.prototype을 상속받음
console.log(num.__proto__.__proto__ === Object.prototype);  // true

console.log(num.__proto__.__proto__);   // [Object: null prototype] {}
console.log(Object.prototype);          // [Object: null prototype] {}

// 프로토타입 체인 최상단에는 null이 있다.
console.log(num.__proto__.__proto__.__proto__);     // null
