/* 2. let */

// 1. 변수 중복 선언 금지
// let, const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언 불가
let msg = "안녕하세요";
// let msg = "안녕";        // SyntaxError: Identifier 'msg' has already been declared

// 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정 (함수, if문, for문, while문, try/catch문)
let i = 0;
for(let i=0; i<10; i++){
    console.log(`지역변수 i : ${i}`);
}
console.log(i);     // 0

// 3. 변수 호이스팅
// var 키워드는 선언, 초기화가 함께 진행되지만, let 키워드는 따로 진행되어 에러 발생
// (호이스팅이 발생하지 않는것처럼 보지만, 사실은 선언만 호이스팅이 된다.)
// console.log(x);     // ReferenceError: Cannot access 'x' before initialization : 선언만 하고 초기화가 되지않아서 접근 불가
let x;

let y = 1;
if(true){
    // 변수 호이스팅으로 아래의 지역변수 y의 선언이만 먼저 발생했기 때문에 전역변수 y를 참조하지 않고 오류 발생
    console.log(y);     // ReferenceError: Cannot access 'y' before initialization
    // let y = 2;
}


