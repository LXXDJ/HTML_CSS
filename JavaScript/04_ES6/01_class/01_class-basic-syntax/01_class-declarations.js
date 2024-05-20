/* 동일한 종류의 객체를 여러개 생성해야 하는 경우,
객체 리터럴을 여러개 생성하기 보단 클래스 문법을 통해 동일한 종류의 객체 재생성 가능 */
class Student {

    // 생성자를 통해 인스턴스 생성 및 초기화
    // 생성자는 1개이상 정의 불가, 생략할 경우 암묵적으로 정의(암묵적으로 this를 반환함으로 반환문 작성X)
    constructor(name){
        this.name = name;   // 인수로 인스턴스 초기화
        this.group = 1;     // 고정값으로 인스턴스 초기화
    }

    // 프로토타입 메서드
    introduce(){
        console.log(`안녕하세요 저는 ${this.group}반 ${this.name}입니다.`);
    }
}

// 실행 : Ctrl + Alt + N

let student = new Student("판다");  // 인수로 초기값 전달하며 객체 생성
student.introduce();                // 메서드 호출

console.log(typeof Student);                                    // function : 클래스는 함수의 한 종류
console.log(Student === Student.prototype.constructor);         // true
console.log(Student.prototype.introduce);                       // [Function: introduce] : 클래스 내부에 정의한 메소드 크래스는 클래스.prototype에 저장됨
console.log(Object.getOwnPropertyNames(Student.prototype));     // [ 'constructor', 'introduce' ] : Student 프로토타입에는 두 가지 메서드가 있다.

/* 클래스 문법과 유사하게 기능하는 것처럼 보이는 생성자 함수 사용 가능 */
function Teacher(name){
    this.group = 1;
    this.name = name;
}

Teacher.prototype.introduce = function(){
    console.log(`안녕하세요 저는 ${this.group}반 ${this.name}입니다.`);
}

let teacher = new Teacher("홍길동");
teacher.introduce();

/* 클래스 생성자를 new와 함께 호출하지 않으면, 예외 발생 */
// Student();  // TypeError: Class constructor Student cannot be invoked without 'new'
Teacher();      // 에러 발생X

/* 클래스에 정의된 메서드는 열거 불가, 따라서 for..in으로 객체 순회시 메서드 순회 대상에서 제외됨 */
for(method in student) console.log(`반복문 student: ${method}`);    // name, group : introduce가 출력되지 않음
for(method in teacher) console.log(`반복문 teacher: ${method}`);    // group, name, introduce
