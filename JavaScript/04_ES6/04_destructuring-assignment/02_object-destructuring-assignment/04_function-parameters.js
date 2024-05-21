/* 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에도 구조분해할당 활용 */

// 함수는 넘겨주는 인수의 순서가 고정되어 있어 순서 변경 시 문제 발생, 기본값 사용시에도 undefined 이용
function displayProduct(producer = '아무개', width = 0, height = 0, items = []){}
displayProduct('신사임당', undefined, undefined, ['Coffee', 'Donut']);

// 구조 분해 할당을 이용해 문제 해결
function displayProduct({producer = '아무개', width = 0, height = 0, items = []}){  // let {producer, width, height, items} = obj;
    console.log(producer);  // 아무개 => 신사임당 : 객체를 전달받아서 값이 바뀜
    console.log(width);     // 0
    console.log(height);    // 0
    console.log(items);     // [] => ['Coffee', 'Donut'] : 객체를 전달받아서 값이 바뀜
}

// 함수에 전달할 객체 : 순서 무관, 기본값 활용시 별도의 처리 불필요
let exampleProduct = {
    items: ['Coffee', 'Donut'],
    producer: '신사임당'
};

// 함수에 객체 전달
displayProduct(exampleProduct);
