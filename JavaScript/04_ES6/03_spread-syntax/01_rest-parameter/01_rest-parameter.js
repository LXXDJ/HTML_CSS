function merge(msg1, msg2){
    return msg1 + msg2;
}
console.log(merge('안녕하세요.'));                                       // 안녕하세요.undefined : 정해진 인수보다 적게 전달되면 undefined
console.log(merge('안녕하세요.', '반갑습니다.'));                         // 안녕하세요.반갑습니다.
console.log(merge('안녕하세요.', '반갑습니다.', '제 이름은 판다입니다.'));  // 안녕하세요.반갑습니다. : 정해진 이수보다 많이 전달되면 무시

/* ...args : 나머지 매개변수는 항상 맨 마지막에 위치 필수
function func(arg1, ...args, arg2){} => (X)
function func(arg1, arg2, ...args){} => (O) */
function mergeAll(...args){
    let message = '';
    for(let arg of args) message += arg;
    return message;
}
console.log(mergeAll('안녕하세요.'));                                       // 안녕하세요.
console.log(mergeAll('안녕하세요.', '반갑습니다.'));                         // 안녕하세요.반갑습니다.
console.log(mergeAll('안녕하세요.', '반갑습니다.', '제 이름은 판다입니다.'));  // 안녕하세요.반갑습니다.제 이름은 판다입니다.