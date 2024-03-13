/* 1. 매개변수와 인수(parameter and arguments) */

function hello(name){
    console.log(name);          // 판다

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관
    console.log(arguments);     // [Arguments] { '0': '판다' }

    return `${name}님 안녕하세요`;
}

// 매개변수는 함수 몸체 내부에서만 참조 가능
// console.log(name);  // ReferenceError: name is not defined

var result = hello('판다');
console.log(result);            // 판다님 안녕하세요

// 매개변수보다 인수가 더 많은 경우, 초과된 인수는 무시된다. (하지만 arguments를 조회해보면 담겨있는건 확인가능)
result = hello('판다', '다람쥐', '원숭이');
console.log(result);            // 판다님 안녕하세요 : 출력은 첫번째 인수만 된다.

result = hello();               // 인수를 전달하지 않으면 [Arguments] {}
console.log(result);            // undefined님 안녕하세요

function hi(name = '홍길동'){   // 매개변수 name에 '홍길동'이라는 기본값 부여
    // 인수를 전달받지 않아도 기본값으로 출력된다. (ES6부터 도입)

    // 적절한 인수가 전달되었는지 확인
    if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0){
        throw new TypeError('인수는 1개의 문자열 값이어야 하며, 빈 문자열 불허');
    }
    return `${name} 안녕`;
}
// result = hi();
// console.log(result);

// 아래의 경우 모두 에러 발생. TypeError: 인수는 1개의 문자열 값이어야 하며, 빈 문자열 불허
// result = hi('');                         // name.length === 0
// result = hi('판다', '다람쥐', '원숭이');   // arguments.length !== 1
// result = hi(1);                          // typeof name !== 'string'
// console.log(result);