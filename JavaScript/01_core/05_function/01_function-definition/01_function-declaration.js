/* 함수 선언문 (function declaration) */

function hello(name){
    return `${name}님 안녕하세요`;
};

// js 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 식별자를 암묵적으로 생성하고 함수 객체 할당
/*
var hello = function hello(name){
    return `${name}님 안녕하세요`;
}
*/
console.log(hello('판다'));     // 판다님 안녕하세요
