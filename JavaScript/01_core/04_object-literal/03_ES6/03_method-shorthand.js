/* 메서드 단축 */

/* ES5 */
// 메소드를 정의하려면 프로퍼티 값으로 함수 할당
var panda = {
    name : '푸바오',
    eat : function(food){
        console.log(`${this.name}은(는) ${food}를 맛있게 먹어요`);
    }
};
panda.eat('대나무');    // 푸바오은(는) 대나무를 맛있게 먹어요

/* ES6 */
// 메소드를 정의할때 function 키워드를 생략한 축약 표현 사용 가능
var panda2 = {
    name : '아이바오',
    // play : function(){   // function 생략
    play(toy){
        console.log(`${this.name}은(는) ${toy}를 타고 놀아요`);
    }
};
panda2.play('그네');    // 아이바오은(는) 그네를 타고 놀아요







