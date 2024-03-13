/* 1. 즉시 실행 함수 */

/* 함수 정의와 동시에 즉시 호출되는 함수로 단 한 번만 호출 되며 다시 호출할 수 없다
   즉시 실행 함수는 반드시 () - 그룹 연산자로 감싸야 한다. */

// 함수 이름이 없는 익명 함수를 사용하는 것이 일반적
(function(){
    console.log('함수 정의와 동시에 즉시 호출');
})();

(function info(name){
    console.log(`나는 ${name}이다.`);
})('판다');

// 즉시 실행 함수는 함수명으로 다시 호출할 수 없다.
// info('다람쥐');      // ReferenceError: info is not defined
