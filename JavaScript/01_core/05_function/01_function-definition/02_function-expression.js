/* 함수 표현식 */

// 함수명 생략 가능
var hello = function(name){
    return `${name}님 안녕하세요`;
}
console.log(hello('판다'));     // 식별자로 함수 호출

var calc = function add(a, b){
    return a + b;
}
// console.log(add(1,2));         // 함수명으로 함수 호출하면 에러남
console.log(calc(1,2));         // 함수 호출은 무조건 식별자로
