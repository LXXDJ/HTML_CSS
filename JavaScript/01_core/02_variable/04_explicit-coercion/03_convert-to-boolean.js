/* explicit coercion(명시적 타입 변환) */

/* 3. 논리 타입으로 변환 */

// 1. Boolean 생성자 함수를 new 연산자 없이 호출 : 모두 boolean 타입
console.log(typeof Boolean('JavaScript'), Boolean('JavaScript'));   // true
console.log(typeof Boolean(''), Boolean(''));                       // false
console.log(typeof Boolean(1), Boolean(1));                         // true
console.log(typeof Boolean(0), Boolean(0));                         // false
console.log(typeof Boolean(NaN), Boolean(NaN));                     // false
console.log(typeof Boolean(Infinity), Boolean(Infinity));           // true
console.log(typeof Boolean(null), Boolean(null));                   // false
console.log(typeof Boolean(undefined), Boolean(undefined));         // false
console.log(typeof Boolean({}), Boolean({}));                       // true
console.log(typeof Boolean([]), Boolean([]));                       // true

// falsy : ''(빈문자열), 0, NaN, null, undefined
// truthy : 나머지 모든 값

// 2. ! 부정 논리 연산자를 두 번 사용
console.log(!!'JavaScript');    // true
console.log(!!'');              // false
console.log(!!1);               // true
console.log(!!0);               // false
console.log(!!NaN);             // false
console.log(!!Infinity);        // true
console.log(!!null);            // false
console.log(!!undefined);       // false
console.log(!!{});              // true
console.log(!![]);              // true

