
let toy = {
    productName : '티니핑',
    color : '노랑',
    price : 25000
}

// 객체에 존재하지 않는 프로퍼티는 기본값을 설정하여 사용 가능 또한, 콜론과 할당을 동시에 사용 가능
let {productName: pn = '인형', subName = '눈꽃핑', color, price, eventGift: gift = '요술봉'} = toy;
console.log(pn);        // 티니핑 (기본값은 인형, 설정해준 값은 티니핑)
console.log(subName);   // 눈꽃핑
console.log(color);     // 노랑
console.log(price);     // 25000
console.log(gift);      // 요술봉

// 프로퍼티가 많은 복잡한 객체에서 원하는 정보만 추출 가능
let {productName: productName2, price: price2} = toy;
console.log(`${productName2}이(가) 무려 ${price2}원`);  // 티니핑이(가) 무려 25000원

// rest parameter ...로 나머지 요소를 한번에 취득 가능
let {productName: productName3, ...rest} = toy;
console.log(productName3);  // 티니핑
console.log(rest);          // { color: '노랑', price: 25000 }
console.log(rest.color);    // 노랑
console.log(rest.price);    // 25000

// let 키워드없이 사용
let productName4, color4, price4;
// {productName: productName4, color: color4, price: price4} = toy;    // 중괄호를 코드블록으로 인식해서 오류 발생
({productName: productName4, color: color4, price: price4} = toy);      // 소괄호로 감싸주면 오류 해결
console.log(productName4, color4, price4);                              // 티니핑 노랑 25000
