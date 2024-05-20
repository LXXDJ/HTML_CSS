let theater = {
    store : '건대점',
    titles : ['어벤져스', '겨울왕국', '스파이더맨', '라이온킹', '알라딘'],

    // 1. 화살표 함수는 this를 가지지 않는다.
    showMovieList(){
        // 화살표 함수 : 내부에서 this를 가지지 않아서, 외부에서 값을 가져오기 때문에 제대로 출력됨 
        this.titles.forEach(title => 
            console.log(`${this.store} : ${title}`)     // 건대점 : 어벤져스, 건대점 : 겨울왕국 ...
        )

        // 일반 함수
        this.titles.forEach(function(title){
            console.log(`${this.store} : ${title}`)     // undefined : 어벤져스, undefined : 겨울왕국 ...
        })
    }
}
theater.showMovieList();

// 2. 화살표 함수는 this가 없기 때문에 생성자 함수로 사용 불가
const arrowFunc = () => {};
// new arrowFunc();            // TypeError: arrowFunc is not a constructor
console.log(arrowFunc.hasOwnProperty('prototype'));     // false : 화살표 함수는 인스턴스 생성이 불가함으로 prototype 프로퍼티가 없고, 프로토타입도 생성하지 않음

// 3. 화살표 함수는 super를 가지지 않는다. (자기 자신을 둘러싼 this를 사용하기 때문에 super도 외부 것을 사용)
class Animal{   // 복붙

    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    move(lostWeight){
        if(this.weight > lostWeight){
            this.weight -= lostWeight;
            console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다`);
        }
    }
}

class Tiger extends Animal{
    move(lostWeight){
        // setTimeout(function(){super.move(lostWeight)}, 2000);   // SyntaxError: 'super' keyword unexpected here 일반 함수에서는 super 키워드 사용불가
        setTimeout(() => super.move(lostWeight), 2000);     // 화살표 함수에서는 super 키워드 사용가능
        console.log('어슬렁');
    }
}

let tiger = new Tiger('호랑이', 90);    // 어슬렁
tiger.move(1);                          // 호랑이(은)는 움직임으로 인해 1kg 감량되어 89kg이 되었습니다 : 2초뒤 실행됨

// 4. 화살표 함수는 arguments를 지원하지 않는다.
(function(){
    const arrowFunc = () => console.log(arguments);     // [Arguments] { '0': 1, '1': 2 }
    arrowFunc(3, 4);    // 본인의 arguments인 3, 4가 아니라
}(1, 2));               // 외부에 있는 1, 2를 사용