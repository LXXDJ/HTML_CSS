// 객체 구조 분해 할당
let toy = {
    productName : '티니핑',
    color : '노랑',
    price : 25000
}
let {productName, color, price} = toy;
console.log(productName);   // 티니핑
console.log(color);         // 노랑
console.log(price);        // 25000

// 각 변수의 서술 순서는 무관, { 객체프로퍼티 : 목표변수 } 형식으로 작성 가능
let {color: co, price: pr, productName: pn} = toy;
console.log(co);    // 노랑
console.log(pr);    // 25000
console.log(pn);    // 티니핑
