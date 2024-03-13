/* 1. 생성자 함수 */

// 객체 리터럴로 객체 생성
const student1 = {
    name : '홍길동',
    hobby : '공부',
    getInfo : function(){
        return `${this.name}의 취미는 ${this.hobby} 입니다.`;
    }
}
const student2 = {
    name : '김철수',
    hobby : '복습',
    getInfo : function(){
        return `${this.name}의 취미는 ${this.hobby} 입니다.`;
    }
}
const student3 = {
    name : '김갑수',
    hobby : '실습문제 풀기',
    getInfo : function(){
        return `${this.name}의 취미는 ${this.hobby} 입니다.`;
    }
}

// 생성자 함수에 의한 객체 생성
function Student(name, hobby){
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.hobby = hobby;
    this.getInfo = function(){
        return `${this.name}의 취미는 ${this.hobby} 입니다.`;
    }
}

// 인스턴스 생성 : new 키워드가 있어야 생성자 함수로 동작, 없으면 일반 함수로 동작
const student4 = new Student("고길동", "코드 짜기");
const student5 = new Student("김영희", "프로젝트 생각");
const student6 = new Student("김을수", "코딩문제 풀기");

console.log(student1.getInfo());    // 홍길동의 취미는 공부 입니다.
console.log(student2.getInfo());    // 김철수의 취미는 복습 입니다.
console.log(student3.getInfo());    // 김갑수의 취미는 실습문제 풀기 입니다.
console.log(student4.getInfo());    // 고길동의 취미는 코드 짜기 입니다.
console.log(student5.getInfo());    // 김영희의 취미는 프로젝트 생각 입니다.
console.log(student6.getInfo());    // 김을수의 취미는 코딩문제 풀기 입니다.