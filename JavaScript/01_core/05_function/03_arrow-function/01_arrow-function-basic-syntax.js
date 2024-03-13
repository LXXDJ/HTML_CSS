/* 화살표 함수(arrow function) */

/* ES6에서 도입 된 화살표 함수는 function 키워드 대신 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언 가능
   화살표 함수는 항상 익명 함수로 정의. 본문이 한 줄인 함수를 작성할 때 유용 */

var message;

// 기존 funcion 정의
message = function(){
    return "Hello JavaScript World";
}
console.log(message());

// 화살표 함수로 정의
message = () =>{
    return "Hello JavaScript World (Arrow Function)";
}
console.log(message());

// 명령문이 하나만 있는 경우, 중괄호 생략 가능
// 이 때, 함수 내부의 실행문이 값으로 평가될 수 있는 표현식이라면 암묵적으로 return 됨으로, return 키워드 생략가능
message = () => "Hello JavaScript World";
console.log(message());

// 매개변수가 있는 함수의 경우
// 매개변수가 여러개 또는 없는 경우, () 괄호 생략 불가
message = (val1, val2) => "Arrow" + val1 + val2;
console.log(message('Function', 'nice'));

// 매개변수가 하나인 경우, () 괄호 생략 가능
message = val1 => "Arrow" + val1;
console.log(message('Function Good'));

