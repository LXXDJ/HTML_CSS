/* 5. 순수 함수 & 비순수 함수 */

/* 순수 함수 : 외부 상태에 의존하지도 않고 변경하지도 않는 함수
   비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수
   함수 외부 상태의 변경을 지양하는 순수 함수를 사용하는 것이 좋다. */

var cnt = 0;
function increase(n){
    return ++n;
}
increase(cnt);
console.log("순수 함수 실행 후 : " + cnt);   // 0

cnt = increase(cnt);
console.log("순수 함수 실행을 통한 재할당 후 : " + cnt);   // 1

// 비순수 함수
function decrease(){
    return --cnt;   // 외부 상태에 의존하며 외부 상태를 변경한다.
}
decrease();
console.log("비순수 함수 실행 후 : " + cnt);    // 0

cnt = decrease();
console.log("비순수 함수 실행을 통한 재할당 후 : " + cnt);  // -1
