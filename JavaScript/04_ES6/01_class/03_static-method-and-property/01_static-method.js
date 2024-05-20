class Student{
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    static compare(studentA, studentB){
        return studentA.height - studentB.height;
    }
}

let students = [
    new Student('유관순', 165.5),
    new Student('홍길동', 180.5),
    new Student('선덕여왕', 159.5)
];

students.sort(Student.compare);     // 키 오름차순으로 배열 정렬
console.log(students);              // 선덕여왕, 유관순, 홍길동 순으로 배열 정렬됨

Student.staticMethod = function(){
    console.log('staticMethod는 메소드를 프로퍼티 형태로 직접 할당하는 것과 동일하다');
}

Student.staticMethod();             // staticMethod는 메소드를 프로퍼티 형태로 직접 할당하는 것과 동일하다

class User{
    constructor(id, registDate){
        this.id = id;
        this.registDate = registDate;
    }

    static registUser(id){
        return new this(id, new Date());
    }
}

let user01 = User.registUser('user01');
console.log(user01);                // User { id: 'user01', registDate: 2024-05-20T03:18:12.693Z }