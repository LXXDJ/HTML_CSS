/* 1. 객체 생성자 함수 */
/* new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환
   빈객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성 가능 */

// 빈 객체 생성
const teacher = new Object();

// 프로퍼티 or 메소드 추가
teacher.name = '판다';
teacher.age = 20;

console.log(teacher);       // { name: '판다', age: 20 }
