
/*
 문자열 연산

 1) 비교 연산

  연산자	  의미 - 반환하는 여부	
  x == y	 값이 같다.	
  x === y	 자료형도 값도 같다.	권장
  x != y	 값이 다르다.	
  x !== y	 자료형 또는 값이 다르다.	권장
  x < y	   (ASCII(unicode) CODE 순서상) x가 먼저 온다.	
  x <= y	 (ASCII(unicode) CODE 순서상) x가 먼저 오거나 같다.	
  x > y	   (ASCII(unicode) CODE 순서상) y 먼저 온다.	
  x >= y	 (ASCII(unicode) CODE 순서상) y 먼저 오거나 같다.	

*/

// == : 값 비교
// === : 값 + type 비교
console.log('더조은학원' === '더조은학원')
console.log('더조은학원' === '더조은아이티학원')
console.log('더조은학원' > '더조은학원')
console.log('더조은컴퓨터학원' < '더조은아이티학원')
console.log('더조은컴퓨터학원' > '더조은아이티학원')

console.log(
  'ABC' < 'abc',
  'apple' <= 'banna',
  '다라마' > '바자차',
  'tjoeunit' > 'tjoeunai'
)

console.log(100 > 12)
console.log('100' > '12')

// 숫자와 문자열을 비교하면
// 문자를 자동으로 숫자로 변환해서 비교함
console.log('100' > 12)

let str1 = 'Hello ';
let str2 = 'Javascript';

console.log(str1)
console.log(str2)

let str3 = str1 + str2
console.log(str3)
console.log('---------------------')

let number = 10;
console.log(number)
number = number + 1;
console.log(number)
number += 1;
console.log(number)
console.log('---------------------')

let str4 = 'Hello '
str4 = str4 + 'Node.js'
console.log(str4)
str4 += ' SpringFramework'
console.log(str4)

let str5 = str4 += ' ~~~~~~~~~~~~~~'
console.log(str5)
console.log('---------------------')

// parseInt(숫자모양의 문자열) : 문자열이 정수형으로 변환됨
// parseFloat(숫자모양의 문자열) : 문자열이 실수형으로 변환됨
// Number(숫자모양의 문자열) : 문자열이 숫자로 변환됨

// boolean type 의 값을 숫자로 형변환할 때는
// Number() 로만 가능함

console.log('true  :',Number(true))
console.log('false :',Number(false))

// 숫자형과 boolean 형을 연산하면
// boolean 값이 숫자로 변환됨
console.log(1234 + true)

let str6 = 'hello ' + 1234 + true;
console.log(str6)

str6 += null;
console.log(str6)

str6 += undefined;
console.log(str6)
console.log(typeof str6)
