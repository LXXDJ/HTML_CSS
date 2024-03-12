/* 4. 프로퍼티 값 변경, 추가, 삭제 */

var kitty = {
    name : "나비",
}

/* 프로퍼티 동적 추가 */
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티 동적 생성 및 추가, 값 할당됨
kitty.age = 3;
console.log(kitty);     // { name: '나비', age: 3 }

kitty['like'] = '츄르';
console.log(kitty);     // { name: '나비', age: 3, like: '츄르' }

/* 프로퍼티 수정 */
// 이미 존재하는 프로퍼티에 값을 할당 하면 값이 갱신됨
kitty.name = '애옹';
kitty['age'] = 4;       
console.log(kitty);     // { name: '애옹', age: 4, like: '츄르' }

/* 프로퍼티 삭제 */
// delete 연산자 이용
delete kitty.age;
delete kitty['like'];
console.log(kitty);     // { name: '애옹' }

// 존재하지 않는 프로퍼티 삭제 시, 에러 없이 무시됨
delete kitty.zipsa;
console.log(kitty);     // { name: '애옹' }
