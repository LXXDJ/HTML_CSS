/* 3. property 접근 */

var teacher = {
    name : '판다',
    work : function(subject){
        console.log(`${this.name} 선생님이 ${subject}를(을) 열심히 가르쳐요`);
    }
};

// 마침표 표기법 (dot notation)
console.log(teacher.name);      // 판다
teacher.work("JavaScript");     // 판다 선생님이 JavaScript를(을) 열심히 가르쳐요

// 대괄호 표기법 (square bracket notation) : key 값을 적을 땐 반드시 따옴표를 입력해줘야 한다.
console.log(teacher['name']);   // 판다
teacher['work']('JavaScript');  // 판다 선생님이 JavaScript를(을) 열심히 가르쳐요

// 대괄호 표기법이 필요한 경우 : 키가 네이밍 규칙을 준수하지 않은 경우
var testObj = {
    'dash-key' : 'dash-value',
    0 : 1,
};
// console.log(testObj.dash-key);       // 마침표 표기법으로 접근 불가
// console.log(testObj.'dash-key');     // 실행 불가
// console.log(testObj[dash-key]);      // 따옴표 입력 필수
console.log(testObj['dash-key']);       // dash-value

// 대괄호 표기법이 필요한 경우 : 숫자로 이뤄진 문자열인 경우
// console.log(testObj.0);
// console.log(testObj.'0');
console.log(testObj[0])         // 1 : key 값이 숫자로 이뤄진 문자열인 경우, 따옴표 생략 가능
console.log(testObj['0']);      // 1
