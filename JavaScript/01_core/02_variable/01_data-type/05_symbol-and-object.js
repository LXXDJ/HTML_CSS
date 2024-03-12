/* 05. symbol and object */

/* symbol 타입 
   ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값
   다른 값과 중복되지 않는 유일무이한 값으로, 객체의 유일한 프로퍼티 키를 만들기 위해 사용
   symbol 이외의 원시 값은 리터럴을 통해 생성되지만, symbol은 symbol 함수를 호출해 생성
*/

var key = Symbol("key");
console.log(typeof key);

var obj = {};
obj[key] = "value";
console.log(obj[key]);

/* object 타입
   js의 데이터 타입은 크게 원시와 객체 타입으로 분류
   js는 객체 기반의 언어이며, js를 이루고 있는 거의 모든 것이 객체이다.
   number, string, boolean, undefined, null, symbol : 6가지 데이터 타입 이외의 값은 모두 객체 타입이다.
   (객체, 함수, 배열 등에 대해서는 추후 자세히 다룰 예정)
*/

var testObj = {};
var testArr = [1, 2, 3, 4, 5];

console.log(typeof testObj);  // object
console.log(typeof testArr);  // object
