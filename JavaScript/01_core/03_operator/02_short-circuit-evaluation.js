/* 2. 단축 평가 : 표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것 */

/* 논리 연산자 (logical operator)
   - || (OR)
   - && (AND)
   - ! (NOT)
*/

// OR, AND 연산자 표현식의 결과는 boolean 값이 아닐 수도 있다.
// OR의 경우 'apple'이 이미 truthy 값이므로 true로 평가되어 반환
console.log('apple' || 'banana');   // apple : 논리 연산의 결과를 결정한 첫번째 피연산자를 반환한다.
console.log(false || 'banana');     // banana
console.log('apple' || false);      // apple

console.log('apple' && 'banana');   // banana : 논리 연산의 결과를 결정한 두번째 피연산자를 반환한다.
console.log(false && 'banana');     // false
console.log('apple' && false);      // false

var num = 1;
if(num % 2 == 0){
    console.log('짝수');
} else {
    console.log('홀수');
}

num % 2 == 0 && console.log('짝수');    // false && true : 출력 안됨
num % 2 == 0 || console.log('홀수');    // false || true : 홀수 출력

// 변수가 null, undefined 인지 확인하고 property 참조시 단축 평가 활용가능
var obj = null;
// var val = obj.value;    // TypeError: Cannot read properties of null

// obj가 Falsy(null, undefined) 값이면 좌항만 실행하여 var는 null 값을 가진다.
// obj가 truthy 값이면 var는 obj.value 값을 가진다.
var val = obj && obj.value;
