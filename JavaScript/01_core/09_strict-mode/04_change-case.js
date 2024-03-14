/* change case(변화 상황) */

// 1. 일반 함수의 this
// 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문에
// strict mode에서는 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩 된다.
(function(){
    'use strict';

    function test() {
        console.log(this);  // use strict가 없으면 this가 즉시 실행 함수에 바인딩 되어 함수의 프로퍼티들이 출력됨
    }

    test();         // use strict 모드 : undefined
    new test();     // use strict 모드 : test {}
}());
   
// 2. arguments 객체
// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
(function(x){
    'use strict';            // use strict가 없으면 [Arguments] { '0': 2 } => 매개변수 재할당 됨

    x = 2;
    console.log(arguments);     // use strict 모드 : [Arguments] { '0': 1 } => 매개변수 재할당 안됨
}(1));







