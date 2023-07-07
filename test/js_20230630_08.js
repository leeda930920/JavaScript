
/*
 산술연산자
*/

// 1) 이항(산술)연산자
let num1 = 10;
let num2 = 8;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
// 1.25
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// 증가/감소 연산자
// 증감연산자

let count = 10;
console.log(count)
count++
console.log(count)
count++
console.log(count)
++count
console.log(count)
++count
console.log(count)

let count1 = 10;
let count2 = count1++ + 1;
console.log(`count1 : ${count1}, count2 : ${count2}`)

let count3 = 10;
let count4 = ++count3 + 1;
console.log(`count3 : ${count3}, count4 : ${count4}`)

let count5 = 10;
// 출력할 때도 전위증가연산자, 후위증가연산자의 연산 순서가 다름
console.log(count5++, ++count5, ++count5, ++count5, --count5, count5--, count5++, count5)

// 문자열이 자동으로 숫자형으로 형변환됨
// 숫자형에 사용하는 연산자를 문자열에 사용하면
// 문자열이 자동으로 숫자형으로 변환됨
// '가나다라' 는 숫자모양의 문자열이 아니라서 NaN 이 됨
console.log(+'100', -'100', +'가나다라')

console.log('------------------------------------')
let number1 = '100';
console.log(number1++, number1)

number1 = '100';
console.log(--number1, number1)

// 숫자 모양의 문자열이 아니면 
// 숫자형으로 자동형변환 안 됨
//  <-- NaN 가 됨
number1 = 'java';
console.log(number1++, number1)

let number3 = 10;
number3 += 2
console.log(number3)

number3 **= 2
console.log(number3)