/* 1. strict mode (엄격 모드) */

function test(){
    // 암묵적으로 전역 변수 선언
    x = 10;
}

test();

console.log(x);     // 10
