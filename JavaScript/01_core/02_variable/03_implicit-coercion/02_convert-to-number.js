/* implicit-coercion(암묵적 타입 변환) */

/* 02. 숫자 타입으로 변환 */

// 산술 연산자 : 피연산자는 모두 숫자여야 함으로, 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
// (문자열 연결 연산 제외 : +)
console.log(1 + '24');      // 124 : 문자형으로 형변환
console.log(1 - '24');      // -23 : 숫자형으로 형변환
console.log(1 * '24');      // 24 : 숫자형으로 형변환
console.log(1 / '24');      // 0.041666666666666664 : 숫자형으로 형변환
console.log(1 % '24');      // 1 : 숫자형으로 형변환
console.log(1 % 'JavaScript');  // NaN : 피연산자 숫자 변환 불가

// 비교 연산자 : 피연산자는 모두 숫자여야 함으로, 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
console.log(10 > '5');      // true : 숫자형으로 형변환

// 단항 연산자 : 피연산자가 숫자 타입의 값이 아니면, 숫자타입으로 암묵적 타입 변환 수행
console.log(+'');           // 0
console.log(+'1');          // 1
console.log(+'JavaScript'); // NaN
console.log(+true);         // 1
console.log(+false);        // 0
console.log(+null);         // 0
console.log(+undefined);    // NaN
// console.log(+Symbol());  // TypeError : 숫자타입으로 변환 불가
console.log(+{});           // NaN
console.log(+[]);           // 0
console.log(+function(){}); // NaN

/* 문자열, undefined, 객체{}, funciton은 변환되지 않아 NaN */