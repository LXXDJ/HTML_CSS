/* prototype feature */

const user = {
    id : 'user',
    login : function(){
        console.log(`${this.id}님이 로그인 되었습니다.`);
    }
};

// 프로토타입은 프로퍼티를 읽을 때만 사용, 추가/수정/삭제 연산은 객체에 직접 한다.
const student = {
    __proto__ : user,
};

student.id = 'user001';

// login 메소드 내 this는 프로토타입에 상관없이 항상 . 앞에 있는 객체를 가리킨다.
// 여기의 login 메소드는 student를 가리킨다.
student.login();        // user001님이 로그인 되었습니다.

// 여기서는 user를 가리킨다.
user.login();           // user님이 로그인 되었습니다.
// 메소드는 공유되지만, 객체의 상태는 공유되지 않음

// for in 반복문은 상속 프로퍼티도 순회 대상에 포함
for(let prop in student){
    console.log(prop);      // id, login

    let isOwn = student.hasOwnProperty(prop);   // 내 자신의 프로퍼티면 true, 아니면 false 반환
    if(isOwn){
        console.log(`객체 자신의 프로퍼티 : ${prop}`);      // 객체 자신의 프로퍼티 : id
    }else{
        console.log(`상속 프로퍼티 : ${prop}`);             // 상속 프로퍼티 : login
    }
}
