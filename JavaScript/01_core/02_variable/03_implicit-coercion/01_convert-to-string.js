/* implicit-coercion(암묵적 타입 변환) */

/* 01. 문자열 타입으로 변환 : 문자열 연결 연산자로 동작 */
// 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 변환
console.log(10 + '20');

// 템플릿 리터럴 표현식 삽입 : 표현식의 결과를 문자열 타입으로 암묵적 변환
console.log(`10 + 20 : ${10 + 20}`);

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적 변환 결과 : Symbol 제외 나머지는 모두 String 타입으로 변환
console.log(typeof (1 + ''), 1 + '');
console.log(typeof (NaN + ''), NaN + '');
console.log(typeof (Infinity + ''), Infinity + '');
console.log(typeof (true + ''), true + '');
console.log(typeof (null + ''), null + '');
console.log(typeof (undefined + ''), undefined + '');
// console.log(Symbol() + '');  // Symbol()은 문자열로 변환 불가
console.log(typeof ({} + ''), {} + '');
console.log(typeof ([] + ''), [] + '');
console.log(typeof (function(){} + ''), function(){} + '');
