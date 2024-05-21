/* 배열 구조 분해 할당
구조 분해 할당을 사용하면 배열, 객체를 변수로 분해하여 연결 가능 */

let nameArr = ['Gildong', 'Hong'];
// let firstName = nameArr[0];
// let lastName = nameArr[1];

let [firstName, lastName] = nameArr;
console.log(firstName); // Gildong
console.log(lastName);  // Hong

let [firstName2, lastName2] = 'Saimdang Shin'.split(' ');
console.log(firstName2);    // Saimdang
console.log(lastName2);     // Shin

let arr = ['fisrt', 'middle', 'last'];
