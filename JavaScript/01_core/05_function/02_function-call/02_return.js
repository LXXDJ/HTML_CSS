/* 2. 반환문(return) */

function hello(name){
    console.log(name);

    return `${name}님 안녕하세요`;

    // 반환문 이후 실행 구문 무시
    console.log('출력 불가');
}

console.log(hello('판다'));

function func(){
    console.log('함수 호출');

    // 반환 값을 명시하지 않거나 생략 가능 : undefined 반환
    return;
}
