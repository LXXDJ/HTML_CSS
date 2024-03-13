/* 2. 재귀 함수 */

/* 함수가 자기 자신을 호출하는 것
   재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용 */

// 팩토리얼 ex. 5! = 1*2*3*4*5
function factorial(n){
    if(n <= 1) return 1;

    return n * factorial(n - 1);
}
console.log(factorial(1));  // 1
console.log(factorial(2));  // 2
console.log(factorial(3));  // 6
console.log(factorial(4));  // 24 : 4*3*2 => 4 * factorial(3) = 3 * factorial(2) = 2 * factorial(1) = 1
console.log(factorial(5));  // 120 

/* 반복문 없이 구현할 수 있다는 장점 / 무한반복에 빠질 위험, Stack overflow 발생 가능함으로 주의
   반복문보다 재귀 함수 사용이 직관적으로 이해하기 쉬울때만 한정적으로 사용 권장 */