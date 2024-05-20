class Book{
    // 클래스 정의할 때, '프로퍼티 이름 = 값'을 써주면 클래스 필드 생성 가능
    // 최신 브라우저(Chrome 72 이상) 또는 최신 Node.js(버전 12 이상)에서만 실행 가능
    name = '모던JavaScript';
    // this.print = 35000;  // 문법 오류 : this.은 생성자 또는 메소드 내부에서만 작성 가능
    price;
    introduce(){
        console.log(`${this.name}가 재밌다.`);
    }
}

let book = new Book();
console.log(Book.prototype.name);       // undefined : Book.prototype이 아닌 개별 객체에만 클래스 필드 설정 가능
console.log(book.name);                 // 모던JavaScript
console.log(Book.prototype.introduce);  // [Function: introduce]
book.introduce();                       // 모던JavaScript가 재밌다.
