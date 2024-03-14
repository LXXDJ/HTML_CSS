/* 3. error case(에러 상황) */

// 1. 암묵적 전역
(function(){
    // 'use strict';       // 적어주면 에러 발생 : ReferenceError: x is not defined
    x = 1;
    console.log(x);     // 1 : use strict가 없으면 출력됨
})();

// 2. 변수, 함수, 매개변수의 삭제
(function(){
    // 'use strict';       // 적어주면 에러 발생 : Delete of an unqualified identifier in strict mode.
    var x = 1;
    delete x;           // 엄격모드에서는 식별자에 대해 'delete'를 호출할 수 없다.
})();

// 3. 매개변수 이름의 중복
(function(){
    // 'use strict';       // 적어주면 에러 발생 : Duplicate parameter name not allowed in this context

    function test(x, x){
        return x + x;
    }
    console.log(test(1, 2));    // 4 : use strict가 없으면 잘못된 결과 출력
})();