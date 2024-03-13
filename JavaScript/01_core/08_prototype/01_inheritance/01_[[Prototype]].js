/* 1. [[Prototype]] */

const user = {
    activate : true, 
    login : function(){
        console.log('로그인 성공');
    }
}
const student = {
    passion : true
}

// __proto__는 [[Prototype]]의 getter, setter인 셈이다.
// Object.getPrototypeOf, Object.setPrototypeOf를 써서 prototype을 get, set 하는것이 좋다.
student.__proto__ = user;

console.log(student.passion);   // true
console.log(student.activate);  // true : student에는 activate가 없지만 __proto__를 통해 프로퍼티를 상속받음

student.login();                // 로그인 성공

// prototype chaining
const class8Student = {
    classNo : 8,
    __proto__ : student,
}
console.log(class8Student.passion);     // true : student에서 상속
console.log(class8Student.activate);    // true : user에서 상속

// 프로토타입 체이닝은 순환 참조 불허 : 단방향으로만 상속 가능, 서로 상속한다던지 자식이 다시 부모에게 상속하는 건 불가
user.__proto__ = class8Student;         // TypeError: Cyclic __proto__ value
