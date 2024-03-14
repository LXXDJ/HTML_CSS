/* 1.  array (배열) */
// 여러 개의 값을 순차적으로 나열한 자료구조

// 1. 배열 리터털을 통해 배열 생성
// 배열이 가지고 있는 값을 요소라 부르며 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.
const arr = ['바나나', '복숭아', '키위'];

// 2. 배열 생성자 함수
// 전달 된 인수가 없을 경우 빈 배열을 생성
const arr2 = new Array();
console.log(arr2);  // []

// 전달 된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성
const arr3 = new Array(10);
console.log(arr3);  // [ <10 empty items> ]

// 전달 된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성
const arr4 = new Array(1, 2, 3);
console.log(arr4);  // [ 1, 2, 3 ]

// 3. Array.of 메소드
// 전달 된 인수를 요소로 갖는 배열을 생성
console.log(Array.of(10));  // [ 10 ]
console.log(Array.of(1, 2, 3));  // [ 1, 2, 3 ]
console.log(Array.of('hello', 'js'));  // [ 'hello', 'js' ]

// 4. 배열의 요소 접근 : 인덱스 + 대괄호 표기법
console.log(arr[0]);    // 바나나
console.log(arr[1]);    // 복숭아

// 5. for문 사용
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 6. typeof 배열 : 별도의 타입은 존재하지 않으며 배열은 객체 타입
console.log(typeof arr);    // object

/* 일반 객체와 배열은 값의 순서와 length 프로퍼티 유무에서 차이가 있다.
   배열의 장점은 처음부터 순차적으로 요소에 접근할수도 있고
   마지막부터 역순으로 요소에 접근할 수도 있으며 특정 위치부터 순차적으로 요소에 접근할 수도 있다는 것 */
