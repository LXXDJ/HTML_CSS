class Product{
    constructor(name, price){
        // setter 메소드 호출
        this.name = name;
        this.price = price;
    }

    /* getter, setter 내부에서는 _name, _price로 실제 값에 접근한다.
    그냥 name, price를 사용하게 되면 해당 코드는 getter, setter 메소드를 호출하는 의미 */

    // getter
    get name(){
        console.log('get name 동작');
        return this._name;
        // return this.name;    // 'get name 동작'이 계속 출력되다가, RangeError: Maximum call stack size exceeded 발생
    }

    get price(){
        console.log('get price 동작');
        return this._price;
    }

    // setter
    set name(value){
        console.log('set name 동작');
        this._name = value;
    }

    set price(value){
        console.log('set price 동작');
        if(value < 0){
            console.log('가격은 음수일 수 없습니다');
            this.price = 0;
            return;
        }
        this._price = value;
    }
}

let phone = new Product('전화기', 23000);   // set name 동작, set price 동작
console.log(phone.name, phone.price);       // get name 동작, get price 동작, 전화기 23000

let computer = new Product('컴퓨터', -15000);   // set name 동작, set price 동작, 가격은 음수일 수 없습니다, set price 동작
console.log(computer.name, computer.price);     // get name 동작, get price 동작, 컴퓨터 0

