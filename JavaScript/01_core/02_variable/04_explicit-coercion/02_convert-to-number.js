/* explicit coercion(명시적 타입 변환) */

/* 2. 숫자 타입으로 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출 : 모두 number 타입
console.log(typeof Number('10'), Number('10'));         // 10
console.log(typeof Number('10.01'), Number('10.01'));   // 10.01
console.log(typeof Number(true), Number(true));         // 1
console.log(typeof Number(false), Number(false));       // 0

// 2. parseInt, parseFloat 함수 이용 (문자열 -> 숫자만 가능) : 모두 number 타입
console.log(typeof parseInt('10'), parseInt('10'));             // 10
console.log(typeof parseFloat('10'), parseFloat('10'));         // 10
console.log(typeof parseInt('3.12'), parseInt('3.12'));         // 3
console.log(typeof parseFloat('3.12'), parseFloat('3.12'));     // 3.12

// 3. + 단항 산술 연산자 이용 - 암묵적 변환

// 4. * 산술 연산자 이용 : 모두 number 타입
console.log(typeof ('10' * 1), '10' * 1);   // 10
console.log(typeof (true * 1), true * 1);   // 1
