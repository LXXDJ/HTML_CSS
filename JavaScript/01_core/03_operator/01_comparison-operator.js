/* 1. 비교 연산자 */

/* 동등/일치 비교 연산자
   - 동등 비교(loose equality) 연산자와 일치 비교(strict equality) 연산자는 비교하는 엄격성의 정도가 다르다.
   - 동등 비교(==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
   - 일치 비교(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다. */

console.log("==== 숫자 1과 문자 '1', true 비교 ====");
console.log(`1 == '1' : ${1 == '1'}`);      // true
console.log(`1 == true : ${1 == true}`);    // true
console.log(`1 === '1' : ${1 === '1'}`);    // false
console.log(`1 === true : ${1 === true}`);  // false

console.log("==== 숫자 0과 빈 문자열 '', 문자 '0', false 비교 ====");
console.log(`0 == '0' : ${0 == '0'}`);      // true
console.log(`0 == '' : ${0 == ''}`);        // true : 빈문자열은 숫자타입으로 변환시 0으로 변환된다.
console.log(`0 == false : ${0 == false}`);  // true
console.log(`0 === '0' : ${0 === '0'}`);    // false
console.log(`0 === '' : ${0 === ''}`);      // false
console.log(`0 === false : ${0 === false}`);// false
