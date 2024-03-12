/* explicit coercion(명시적 타입 변환) */

/* 1. 문자열 타입으로 변환 */

// 1. string 생성자 함수를 new 연산자 없이 호출 : 모두 string 타입
console.log(typeof String(10), String(10));
console.log(typeof String(NaN), String(NaN));
console.log(typeof String(Infinity), String(Infinity));
console.log(typeof String(true), String(true));

// 2. Object.prototype.toString 메소드 사용 : 모두 string 타입
console.log(typeof (10).toString(), (10).toString());
console.log(typeof (NaN).toString(), (NaN).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log(typeof (true).toString(), (true).toString());

// 3. 문자열 연결 연산자(+) 이용 - 암묵적 변환
