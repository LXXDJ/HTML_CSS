/* 3. optional chaining operator */

/* ES11(ECMAScript2020)에서 도입된 연산자
   좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고,
   그렇지 않으면 우항의 프로퍼티 참조를 이어간다. */

var obj = null;
// let val = obj.value;    // TypeError: Cannot read properties of null
let val = obj?.value;
console.log(val);       // undefined

// 빈문자열은 falsy한 값으로 취급해서 빈문자열이 len에 담긴다.
var str = "";
var len = str && str.length;
console.log(len);       // 공백 출력

len = str?.length;      // str이 null이나 undefined가 아니면 .length 연산을 수행
console.log(len);


