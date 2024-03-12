/* 1. object */

// 객체 리터럴을 통해 객체 생성 (중괄호 내 0개 이상의 property 정의)
var teacher = {
    // 키 : 값 쌍으로 구성된 프로퍼티
    // 프로퍼티 : 객체의 상태를 나타내는 값 (data)
    name : '다람쥐',
    age : 900,

    // 메소드 : 프로퍼티(상태 데이터)를 참조 및 조작 가능
    getInfo : function(){
        return `${this.name}은(는) ${this.age}세의 선생님입니다.`;
    }
}

console.log(typeof teacher);    // object
console.log(teacher);           // { name: '다람쥐', age: 900, getInfo: [Function: getInfo] }

var teacher2 = {};
console.log(typeof teacher2);   // object
console.log(teacher2);          // {}
