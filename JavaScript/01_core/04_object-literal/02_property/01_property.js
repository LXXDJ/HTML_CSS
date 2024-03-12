/* 1. property */

/* 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성 */

var idol = {
    name : 'BTS',
    count : 7,
}
console.log(idol);

var testObj = {
    normal : 'normal value',
    '@ s p a c e @' : 'space value',
    '' : '',                            // 빈 문자열 키는 오류는 발생하지만, 권장하지 않음
    0 : 1,                              // 숫자 키는 내부적으로 문자열로 변환됨
    var : 'var',                        // 예약어 키는 오류는 발생하지만, 권장하지 않음
    normal : 'new normal value',        // 키를 중복 선언하면, 나중에 선언 프로퍼티로 덮어쓴다.
    0.1 : 0.1,
}

var key = 'test';
// 프로퍼티 키를 동적 생성
testObj[key] = 'test value';

// 프로퍼티 추가 순서는 정수 프로퍼티(integer property)는 자동 정렬되고 (실수는 정렬안됨),
// 그 외 프로퍼티는 객체에 추가한 순서 그대로 정렬
console.log(testObj);
