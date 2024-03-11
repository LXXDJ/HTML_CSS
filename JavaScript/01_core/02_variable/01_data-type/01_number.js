/* 01. 숫자타입 */

// 정수, 실수, 음수 모두 숫자 타입
var integer = 10;
var double = 5.5;
var negative = -10;

// 숫자 타입은 모두 실수로 처리
console.log(10 === 10.0); // true

console.log(typeof integer); // number
console.log(typeof double); // number

// 실수끼리의 나누기이므로 소수점까지 처리
console.log(10 / 4); // 2.5

// 추가적으로 세가지 특별한 값도 표현 가능
console.log(10 / 0); // Infinity : 양수의 무한대
console.log(10 / -0); // -Infinity : 음수의 무한대
console.log(1 * "문자열"); // NaN(Not a Number) : 산술 연산 불가
