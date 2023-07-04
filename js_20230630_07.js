
/*
  javascript 에서는 모두 실수형임
                        ㄴ 정수형도 실수형으로 취급함
*/

let number = 100 / 0;

// Infinity : 양의 무한대
console.log(number)

// number
console.log(typeof number)


// -Infinity : 음의 무한대
console.log(-number)

// number
console.log(typeof -number)

let number2 = -1/0
console.log(-1/0)
console.log(number2)

console.log(typeof number2)

// NaN : Not a Number
console.log(typeof -1/0)

let number3 = Infinity
// Infinity
console.log(number3)
// number type
console.log(typeof number3)

console.log('-----------------------------')
// NaN : Not a Number
let var1 = 11 / 'hello';
let var2 = 22 * 'python';
let var3 = NaN;
let var4 = -NaN;

console.log(var1, typeof var1);
console.log(var2, typeof var2);
console.log(var3, typeof var3);

// NaN 는 양수, 음수 개념이 없음
console.log(var4, typeof var4);

console.log('-----------------------------')
// NaN
let var5 = 1234 / '가나다라';

console.log(var5);
console.log(var5 == NaN);
console.log(var5 === NaN);
console.log(isNaN(var5));
console.log(Number.isNaN(var5));

console.log('---isNaN() VS Number.isNaN() ---')
console.log(typeof '1', isNaN('1'), Number.isNaN('1'))
console.log(typeof true, isNaN(true), Number.isNaN(true))
console.log(typeof 's', isNaN('s'), Number.isNaN('s'))
console.log(typeof 1234/'abcd', isNaN(1234/'abcd'), Number.isNaN(1234/'abcd'))





