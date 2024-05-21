// 객체 프로퍼티에 사용
let user = {};
[user.firstName, user.lastName] = 'Gwansoon Yu'.split(' ');
console.log(user);      // { firstName: 'Gwansoon', lastName: 'Yu' }

// 변수 교환 용도로 사용 가능
let student = '학생';
let teacher = '선생님';
[student, teacher] = [teacher, student];    // 공간 = 값
console.log(`student : ${student}`);        // student : 선생님
console.log(`teacher : ${teacher}`);        // teacher : 학생

// rest parameter ...로 나머지 요소를 한번에 가져올 수 있다.
let [sign1, sign2, ...rest] = ['양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리'];
console.log(sign1);     // 양자리
console.log(sign2);     // 황소자리
console.log(rest);      // ['쌍둥이자리', '게자리', '사자자리']

// 기본값을 설정하고 사용 가능
let [firstName3 = '아무개', lastName3 = '홍'] = ['길동'];
console.log(firstName3);    // 길동 : 배열에서 받아오는 값
console.log(lastName3);     // 홍 : 기본값
