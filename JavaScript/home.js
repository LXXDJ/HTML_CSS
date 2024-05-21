// Array.prototype.sort : 배열을 정렬 기준으로 정렬
let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 전 numbers : ${numbers}`);

// 오름차순 정렬이 기본이며 정렬 후 정렬 순서를 유지함
// 배열은 기본적으로 문자열 정렬이 되므로 한자리수, 세자리수가 올바르지 않게 정렬 되는 모습을 확인할 수 있음
// => 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달
numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);

// 숫자 오름차순 정렬
function compare(a, b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(compare);
console.log('매개변수로 compare 함수 전달하여 숫자 오름차순 정렬');
console.log(numbers);

// 숫자 내림차순 정렬
// numbers.number(function(a, b){
//     return b - a;
// });
numbers.sort((a, b) => b - a);

console.log('숫자 내림차순 정렬');
console.log(numbers);






// Array.prototype.reduce : 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백 함수를 실행하고 그 결과를 반환

/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 메소드를 호출한 배열, 즉 this
*/
numbers.reduce(function(previousValue, currentValue, currentIndex, array){
    console.log(`previousValue : ${previousValue}`);
    console.log(`currentValue : ${currentValue}`);
    console.log(`currentIndex : ${currentIndex}`);
    console.log(`array : ${array}`);
});

// 합산
const sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});
console.log(`sum : ${sum}`); // 15: 1~5까지의 합

// 최대값 취득
const max = numbers.reduce(function (pre, cur) {
  return pre > cur ? pre : cur;
});
console.log(`max : ${max}`); // 5: 최대값