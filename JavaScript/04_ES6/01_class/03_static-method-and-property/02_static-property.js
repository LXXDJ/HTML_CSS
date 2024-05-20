class Animal{   // 복붙

    static planet = '지구';             // 추가

    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight){
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다`);
    }

    move(lostWeight){
        if(this.weight > lostWeight){
            this.weight -= lostWeight;
            console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다`);
        }
    }

    static compare(animalA, animalB){   // 추가
        return animalA.weight - animalB.weight;
    }
}

class Human extends Animal{
    develop(language){
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다`);
    }
}

Animal.staticProperty = 'static을 사용한 선언은 기술적으로는 클래스 자체에 직접 할당하는 것과 동일';

let humans = [
    new Human('홍길동', 70),
    new Human('선덕여왕', 50),
    new Human('신사임당', 60)
];

humans.sort(Human.compare);         // 몸무게 오름차순으로 humans 배열 정렬
humans[0].develop('JavaScript');    // 선덕여왕(은)는 JavaScript로 개발을 합니다 : 정렬을 통해 선덕여왕이 0번째 배열임을 확인가능

console.log(Human.planet);          // 지구
console.log(Human.staticProperty);  // static을 사용한 선언은 기술적으로는 클래스 자체에 직접 할당하는 것과 동일