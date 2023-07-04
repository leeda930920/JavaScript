
console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

// 2 의 제곱으로 이루어진 수들은 계산 결과가 정확함
console.log(0.25 * 0.5)
console.log(0.5 + 0.25 + 0.125 + 0.125)
console.log(0.0625 / 0.25)

console.log(0.2 * 0.7)
console.log(0.4 * 3)
console.log(0.9 - 0.6)
console.log(0.9 - 0.3)



/*
  boolean type 의 연산자
    ㄴ true, false
*/

let b1 = 1 === 2;
let b2 = 'abc' !== 'opq';
let b3 = b1 !== b2;
let b4 = typeof b1 === typeof b2 === true;

console.log('b1 :', b1, typeof b1, typeof (typeof b1));
console.log('b2 :', b2, typeof b2, typeof (typeof b2));
console.log('b3 :', b3, typeof b3, typeof (typeof b3));
console.log('b4 :', b4, typeof b4, typeof (typeof b4));

console.log(!true)
console.log(!false)
console.log(!!true)
console.log(!!!true)

console.log(true === !false)
console.log((1 == '1'))
console.log(!(1 == '1'))
console.log((1 === '1'))
console.log(!(1 === '1'))
console.log(typeof false === 'boolean')
console.log(!(typeof false === 'boolean'))

// short circuit
// 논리 and 연산자 (&&) 
// : false 가 나오면 뒤의 연산을 하지 않고 바로 false 를 반환함
console.log('-------------------------------------')
console.log(true   && true)
console.log(true   && false)
console.log(false  && true)
console.log(false  && false)

// short circuit
// 논리 or 연산자 (||) 
// : true 가 나오면 뒤의 연산을 하지 않고 바로 true 를 반환함
console.log('-------------------------------------')
console.log(true   || true)
console.log(true   || false)
console.log(false  || true)
console.log(false  || false)

console.log('-------------------------------------')
console.log(true   && 10 + 5)
console.log(true   && 10 + 5)
console.log(false  && 10 + 5)
console.log(false  && 10 + 5)

console.log('-------------------------------------')
console.log(true   || 10 + 5)
console.log(true   || 10 + 5)
console.log(false  || 10 + 5)
console.log(false  || 10 + 5)


console.log('-------------------------------------')
console.log(true   && true && true && true && true && true && true)
console.log(true   && false && false && false && true && true)
console.log(false  && true && false && false && true && true)
console.log(false  && false && false && false && false && false)

console.log('-------------------------------------')
console.log(true   || true || true || true || true || true || true || true)
console.log(true   || false || false || false || false || true || true || true)
console.log(false  || false || false || false || true|| false || true )
console.log(false  || false || false || false || false || false || false || false)

console.log('-------------------------------------')
// 산술연산자 > 비교연산자 > 논리연산자
let number = 13;
console.log( 10 < number && number <= 20 || number % 3 === 0);

console.log('-------------------------------------')
let age = 19
console.log( age >= 18 ? '성인' : '미성년자')

let number4 = -123
console.log( number4 < 0 ? -number4 : number)

let number5 = 35
console.log(number5 % 2 == 0 ? '짝수' : '홀수')
console.log(number5 % 2 ? '홀수' : '짝수')
console.log(number5 % 2 != 0 ? '홀수' : '짝수' )
console.log(!(number5 % 2) ? '짝수' : '홀수')

if (number5 % 2 == 0){

}

if (!(number5 % 2)){

}

if (number5 % 2 != 0){

}

if (number5 % 2){

}






