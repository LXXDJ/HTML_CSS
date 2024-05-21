/* 스프레드 문법
하나로 뭉쳐 있는 여러값들의 집합(배열, 객체 등)을 전개하여 개별 값들의 목록으로 만듦 */

let arr = [10, 20, 30];
console.log(`가장 큰값 : ${Math.max(arr)}`);    // NaN : 배열이 아닌 숫자 목록을 인수로 받기 때문에 제대로 동작 X
console.log(`가장 큰값 : ${Math.max(10, 20, 30)}`);     // 30
console.log(`가장 큰값 : ${Math.max(...arr)}`);         // 30 : 스프레드 문법을 사용하여 arr이 인수 목록으로 확장되어 제대로 동작

let arr1 = [5, 8, 22];
let arr2 = [34, 55, 97];
console.log(`가장 작은값 : ${Math.min(...arr1, ...arr2)}`);             // 5 : 배열객체 여러개 전달 가능
console.log(`가장 작은값 : ${Math.min(1, ...arr1, 2, ...arr2, 3)}`);    // 1 : 일반값과 혼합 사용 가능

// 배열 병합 사용 가능 (concat보다 간결)
let merged = [0, ...arr, 2, ...arr2];
console.log(merged);    // [0, 10, 20, 30, 2, 34, 55, 97]

// 문자열을 배열로 반환
let str = 'JavaScript';
console.log([...str]);  // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']