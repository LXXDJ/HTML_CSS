/* 2. 인스턴스 생성 과정 */

function Student(name, hobby){
    // 1. 암묵적으로 인스턴스 생성되고 this에 바인딩 되는 과정이 런타입 이전에 실행된다.
    console.log(this);  // Student {}

    // 2. this에 바인딩 되어있는 인스턴스를 초기화한다.
    this.name = name;
    this.hobby = hobby;
    this.getInfo = function(){
        return `${this.name}의 취미는 ${this.hobby} 입니다.`;
    }


    // 3. 완성된 인스턴스가 바인딩된 this를 암묵적 반환된다.  
    // 생성자 내부에서 return은 기본적으로 생략한다.

    //return {};  // 만약 명시적으로 객체 반환시, 암묵적 this 반환 무시
    //return 1;   // 명시적으로 원시값 반환시, 원시값은 무시하고 this 반환
}
const student = new Student('가', 'MyBatis 과제하기');
console.log(student);
/*
Student {
  name: '가',
  hobby: 'MyBatis 과제하기',
  getInfo: [Function (anonymous)]
}
*/
