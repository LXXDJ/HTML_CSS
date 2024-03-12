/* implicit-coercion(암묵적 타입 변환) */

/* 3. boolean 타입으로 변환 */

/* 자바스크립트 엔진은 boolean 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 또는
Falsy 값(거짓으로 평가되는 값)으로 구분한다.
Truthy → true, Falsy → false로 암묵적 타입 변환 */

if(true) console.log("if(true)");                   // 출력 : true
if(false) console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('JavaScript') console.log("if('JavaScript')");   // 출력 : true

// falsy 값 : false, undefined, null, 0, NaN, ''(빈 문자열)
// Truthy 값 : 나머지 모든 값
