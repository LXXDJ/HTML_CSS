/* 3. const */

/* const 키워드는 상수(constant)를 선언하기 위해 사용
   let 키워드와 마찬가지로 블록 레벨 스코프를 가지며 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
   
   <상수 : 재할당이 금지된 변수>
   const 키워드로 선언된 변수에 원시 값을 할당하면 원시 값은 변경할 수 없는 값이고
   const 키워드에 의해 재할당이 금지되므로 값을 변경할 방법은 없다.
   일반적으로 상수의 이름은 대문자로 선언
   여러 단어로 이루어진 경우 일반적으로 언더스코어(_)로 구분 (스네이크 케이스) */

//  let 키워드와 다른 점

// 1. const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야 한다.
// const x;
const x = 1;

// 2. const 키워드로 선언한 변수는 재할당 금지
// x = 2;      // TypeError: Assignment to constant variable.

const DISCOUNT_RATE = 0.15;
let price = 15000;

let discountPrice = price * (1-DISCOUNT_RATE);
console.log(discountPrice);     // 12750

/* const 키워드로 선언된 변수에 객체 할당한 경우, property 값 변경 가능 */
const teacher = {
    name : '판다',
    age : 20,
}
teacher.name = '다람쥐';
console.log(teacher);       // { name: '다람쥐', age: 20 }

// 객체 재할당은 불가
// teacher = {};            // TypeError: Assignment to constant variable.

/* [전역변수의 문제점]
   1. 모든 코드가 전역 변수를 참조하고 변경할 수 있는 "암묵적 결합" 허용
      변수의 유효 범위가 클수록 코드 가독성은 나빠지고 의도치 않게 상태가 변경될 위험성이 놓다.
   2. 전역 변수는 "생명주기가 길다"
      메모리 리소스도 오래 소비하며, 상태 변경이 가능한 시간 및 기회가 많다.
      더욱이 중복된 변수명을 통해 의도치 않은 재할당 발생 가능
   3. "스코프 체인 상에서 종점에 존재"하므로, 전역 변수의 검색속도가 가장 느림
   4. "네임스페이스가 오염"된다.
      자바스크립트는 파일이 분리되어 있어도 하나의 전역 스코프를 공유하므로 예상치 못한 결과 발생 가능
      
   => 변수의 스코프는 좁을수록 좋다. */