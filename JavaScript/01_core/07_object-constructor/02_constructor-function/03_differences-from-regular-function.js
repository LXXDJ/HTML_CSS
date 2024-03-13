/* 3. 일반 함수와 차이점 */

// 첫 문자를 대문자로 기술하여 구분할수 있게 한다.
function Teacher(name, hobby){
    this.name = name;
    this.hobby = hobby;
    this.getInfo = function(){
        return `${this.name}의 취미는 ${this.hobby} 입니다.`;
    }
}

// new 연산자와 함께 호출하여 생성자 함수로 동작
// (new 연산자가 없으면 일반 함수로 동작)
const teacher1 = Teacher('판다', '수업');
console.log(teacher1);       // undefined : 일반 함수로 호출된 Teacher는 반환문이 없으므로 undefined 반환
console.log(hobby);         // 수업 : 일반 함수로 호출된 Teacher 내의 this는 전역 객체를 가리킨다.

const teacher2 = new Teacher('판다', '수업');
console.log(teacher2);   // Teacher { name: '판다', hobby: '수업', getInfo: [Function (anonymous)] }

/* new.target : 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 ES6부터 지원하는 것 */
// new 연산자와 함께 생성자 함수로서 호출 시, new.target은 함수 자신을 가리킨다.
// new 연산자 없이 일반 함수로 호출 시, 함수 내부의 new.target은 undefined 이다.
function Dog(name, skill){
    if(!new.target){    // undefined는 falsy한 값인데, ! 부정하면 truthy 한 값이니까 실행됨
        return new Dog('이름 : ' + name, '재주 : ' + skill);
    }
    this.name = name;
    this.skill = skill;
}
const dog1 = Dog('뽀삐', '앉아');       // Dog { name: '이름 : 뽀삐', skill: '재주 : 앉아' }
console.log(dog1);      // if문 내의 return 값이 반환된다.

const dog2 = new Dog('먼지', '기다려'); // Dog { name: '먼지', skill: '기다려' }
console.log(dog2);      // if문은 실행되지 않고, Dog 함수 내 암묵적으로 생략된 return이 반환된다.

/* 대부분의 빌트인 생성자 함수(Object, String, Number, Boolean, Date, RegExp, …)는
   new 연산자와 함께 호출 되었는지를 확인한 후 적절한 값을 반환 */
const obj = Object();
console.log(obj);       // {} : new 연산자 없이 잘 동작하여 빈 객체 반환

// String, Number, Boolean의 경우 new 연산자 없이 호출하면 객체 값이 아닌 문자열, 숫자, 불리언 값을 반환
// (데이터 타입을 변환하는데 사용)