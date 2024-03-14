/* length 프로퍼티 */

// length 프로퍼티는 요소의 개수를 나타내는 0 이상의 정수를 값으로 갖는다
const arr = [1,2,3,4,5];
console.log(arr.length);    // 5

console.log([].length);     // 0

arr.push(6);    // push() : 인자로 전달한 요소 추가
console.log(arr.length);    // 6

arr.pop();      // pop() : 마지막 요소 제거
console.log(arr.length);    // 5

console.log(arr);           // [ 1, 2, 3, 4, 5 ]

// 원래의 길이보다 작은 값을 할당할 경우, 뒷 요소 절삭하고 값만큼의 길이만 반환
arr.length = 3;
console.log(arr);           // [ 1, 2, 3 ]

// 원래의 길이보다 큰 값을 할당할 경우, 요소가 추가되진 않지만 값만큼 길이가 길어진다.
arr.length = 10;
console.log(arr);           // [ 1, 2, 3, <7 empty items> ]

console.log(Object.getOwnPropertyDescriptors(arr));
/* {
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 10, writable: true, enumerable: false, configurable: false }
} */

// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고, 일부가 비어있는 희소 배열을 문법적으로 허용
const sparse = [, 2, , 4, 5];
console.log(sparse);        // [ <1 empty item>, 2, <1 empty item>, 4, 5 ]
console.log(sparse.length); // 5
