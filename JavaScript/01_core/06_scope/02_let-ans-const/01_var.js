/* 1. var */

// 1. 변수 중복 선언 허용
var msg = "안녕하세요";
console.log(msg);   // 안녕하세요

// 초기화문이 있는 변수 선언문은 js엔진에 의해 var 키워드가 없는것처럼 동작
var msg = "안녕히 가세요";
console.log(msg);   // 안녕히 가세요

// 초기화문이 없는 변수 선언문은 중복 선언시, 무시
var msg;
console.log(msg);   // 안녕히 가세요

// 2. 함수 레벨 스코프(function-level-scope.js에서 확인한 내용)
// 함수가 아닌 스코프에서 var 키워드로 선언한 변수는 모두 전역변수다

// 3. 변수 호이스팅
// var 키워드로 변수 선언 시 변수 호이스팅 발생 (즉, 변수 선언문 이전에 참조 불가)
console.log(test);  // undefined : 변수는 있지만, 값이 없는 상태이기 때문에
test = "안녕하세요. 반갑습니다.";
console.log(test);  // 안녕하세요. 반갑습니다.
var test;   // 변수 선언은 런타입 이전에 암묵적으로 실행
