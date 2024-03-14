/* 2. strict mode apply (엄격 모드 적용) */

// 전역의 선두 또는 함수 몸체의 선두에 'use strict'를 추가한다.
// 'use strict';    // console.log(x); : ReferenceError: x is not defined

function test(){
    x = 10;

    // 코드보다 먼저 입력하지 않으면 동작안함
    // 'use strict';    // console.log(x); : 10
}

test();

console.log(x);

// 즉시 실행 함수에 입력해서, 말그대로 즉시 실행되도록 한다.
(function(){
    'use strict';
})();