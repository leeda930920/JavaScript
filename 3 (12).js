/*
  built-in global property


*/

console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);
console.log(globalThis.undefined);
console.log('--------------------------------');

/*
  내장 전역 함수 : built-in global function
*/

/* eval() */
let result = 10 + 21 + 62;
console.log('result :',result);

result = '10 + 21 + 62';
console.log('result :',result);

console.log('10 + 21 + 62');
console.log(eval('10 + 21 + 62'));

const code = `
let num1 = 10;
console.log(num1 + 100);
`
eval(code);

/*  isFinite() 
     유한수 이거나 유한수로 평가되는 값은 true (null : 0)
     무한수 이거나 무한수로 평가되는 값은 false 
*/
console.log('isFinite(1) :',isFinite(1));
console.log('isFinite(0) :',isFinite(0));
console.log("isFinite('1') :",isFinite('1'));
console.log('isFinite(null) :',isFinite(null));
console.log('isFinite(1/0) :',isFinite(1/0));
console.log('isFinite(Infinity) :',isFinite(Infinity));
console.log('isFinite(-Infinity) :',isFinite(-Infinity));

// 숫자로 인식되지 않는 값은 false 를 반환함
console.log('isFinite(NaN) :',isFinite(NaN));
console.log("isFinite('더조은') :",isFinite('더조은'));

/* isNaN() : 숫자로 인식되지 않는 값은 true 를 반환함 */
console.log('isNaN(NaN) :',isNaN(NaN));
console.log("isNaN('더조은') :",isNaN('더조은'));
console.log('isNaN({}) :',isNaN({}));
console.log('isNaN(undefined) :',isNaN(undefined));

// null은 내부적으로 0으로 인식해서 false 를 반환함
console.log('isNaN(null) :',isNaN(null));

/*  parseInt() : () 안에 있는 값을 정수로 변환함 */
console.log('parseInt(123.32) :',parseInt(123.32));
console.log("parseInt('123.32') :",parseInt('123.32'));
console.log("parseInt('  123.32  ') :",parseInt('  123.32  '));


console.log("parseInt('가나다') :",parseInt('가나다'));
console.log("parseInt('{}') :",parseInt('{}'));
console.log("parseInt('[]') :",parseInt('[]'));

console.log("parseInt('11') :",parseInt('11'));
console.log("parseInt('11', 2) :",parseInt('11', 2));
console.log("parseInt('11', 8) :",parseInt('11', 8));
console.log("parseInt('11', 16) :",parseInt('11', 16));
console.log("parseInt('11', 32) :",parseInt('11', 32));

// 32 진법까지는 10진수로 연산하나, 
// 그 이후 진법이나 숫자가 아닌 값이 오면 NaN 을 반환함
console.log("parseInt('11', 37) :",parseInt('11', 37));
console.log("parseInt('11', 'A') :",parseInt('11', 'A'));




console.log("---------------------------");



/*  parseFloat() : () 안에 있는 값을 실수로 변환함 */
console.log('parseFloat(123 :',parseFloat(123));
console.log("parseFloat('123') :",parseFloat('123'));
console.log("parseFloat('  123  ') :",parseFloat('  123  '));
console.log('parseFloat(123.456) :',parseFloat(123.456));
console.log("parseFloat('123.456') :",parseFloat('123.456'));
console.log("parseFloat('  123.456  ') :",parseFloat('  123.456  '));

console.log('parseFloat(123.0) :',parseFloat(123.0));
console.log("parseFloat('123ABC') :",parseFloat('123ABC'));
console.log("parseFloat('  123ABC  ') :",parseFloat('  123ABC  '));

// 배열은 첫 item 이 숫자인 경우 해당 숫자로 변환
console.log("parseFloat([123, 456, 789]) :",parseFloat([123, 456, 789]));
console.log("parseFloat(['123', '456', '789']) :",parseFloat(['123', '456', 789]));
// 배열은 첫 item 이 숫자가 아닌 경우 NaN 을 반환함
console.log("parseFloat(['ABC', '456', '789']) :",parseFloat(['ABC', '456', 789]));

// NaN 으로 변환하는 경우
console.log("parseFloat('더조은134') :",parseFloat('더조은134'));
console.log("parseFloat({a:1}) :",parseFloat({a:1}));
console.log("parseFloat({1:'a'}) :",parseFloat({1:'a'}));
console.log("parseFloat([]) :",parseFloat([]));

