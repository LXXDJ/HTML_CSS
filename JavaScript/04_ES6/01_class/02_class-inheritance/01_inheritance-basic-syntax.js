class Animal{
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

let animal = new Animal('동물', 30);

animal.eat(1);      // 동물(은)는 1kg의 식사를 하고 31kg이 되었습니다
animal.move(0.5);   // 동물(은)는 움직임으로 인해 0.5kg 감량되어 30.5kg이 되었습니다

class Human extends Animal{
    develop(language){
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다`);
    }
}

let human = new Human('수강생', 70);

human.eat(2);                   // 수강생(은)는 2kg의 식사를 하고 72kg이 되었습니다
human.move(1);                  // 수강생(은)는 움직임으로 인해 1kg 감량되어 71kg이 되었습니다
human.develop('JavaScript');    // 수강생(은)는 JavaScript로 개발을 합니다