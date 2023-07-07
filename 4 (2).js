
// Number Object

const num1 = new Number();
const num1_1 = new Number(0);
const num2 = new Number(5678);
const num3 = new Number(56.87);

console.log(num1);
console.log(num1_1);
console.log(num2);
console.log(num3);

console.log(num1.valueOf());
console.log(num1_1.valueOf());
console.log(num2.valueOf());
console.log(num3.valueOf());
console.log('---------------------------');

console.log(new Number('123456'));
console.log(new Number('123.456'));
console.log(new Number('-98765'));
console.log(new Number('Infinity'));
console.log(new Number('false'));
console.log('---------------------------');

console.log(new Number('10/5'));
console.log(new Number('123JAVA'));
console.log(new Number('PYTHON'));
console.log(new Number("{name:'더조은', age:21}"));
console.log(new Number([34, 56, 78]));
console.log('---------------------------');


// static property
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log('---------------------------');


// isFinite(null)  <-- 문자가 아닌지 아닌지 알아봄
console.log(isFinite(null))
console.log(isFinite('null'))

// Number.isFinite() 메소드
//  ㄴ 유한한 숫자인지 알아봄
console.log(Number.isFinite(null))
console.log(Number.isFinite(1))
console.log(Number.isFinite(Infinity))

// parseInt(정수모양의문자열)   : 정수로 변환
// parseFloat(실수모양의문자열) : 실수로 변환


// Number.isInteger() : 정수인지 알아봄
console.log(Number.isInteger(4567));
console.log(Number.isInteger(45.67));

// Number.isSafeInteger() : 정수인지 알아봄
//                          ㄴ 정수의 범위가 맞는지
// javascript 에서 정수의 범위는
// -(2**53 - 1) ~ (2**53 + 1)
console.log(Number.isSafeInteger(123));
console.log(Number.isSafeInteger(123.45));
console.log(Number.isSafeInteger(456));
console.log(Number.isSafeInteger(456.78));


// toString() - () 안에 2 진수에서 36진수까지 지정 가능함

console.log((10).toString());
console.log((10).toString(2));
console.log((88).toString(8));
console.log((16).toString(16));