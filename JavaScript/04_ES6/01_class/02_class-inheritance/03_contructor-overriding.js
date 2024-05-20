class Animal{   // 복붙
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
}

class Deer extends Animal{
    constructor(name, weight, legLength){
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // 상속 클래스의 생성자에선 super() 호출 필수, 호출하지 않으면 에러 발생
        // this.name = name;
        // this.weight = weight;
        
        super(name, weight);
        this.legLength = legLength;
    }

    hide(place){
        console.log(`${this.name}(은)는 ${place}에 숨었습니다`);
    }
}

let deer = new Deer('사슴', 40, 1);
deer.hide('동굴');      // 사슴(은)는 동굴에 숨었습니다