/* 동적 타입 언어 (dynamic / weak type language) */

var test;
console.log(typeof test);   // undefined

test = 1;
console.log(typeof test);   // number

test = 'JavaScript';
console.log(typeof test);   // string

test = true;
console.log(typeof test);   // boolean

test = null;
console.log(typeof test);   // object : 자바스크립트 버그 (기존 코드에 영향을 줄 수 있어 수정안됨), null이 맞음

test = Symbol();
console.log(typeof test);   // symbol

test = {};
console.log(typeof test);   // object

test = [];
console.log(typeof test);   // object

test = function(){};
console.log(typeof test);   // function