/*
  표준 내장 객체
  standard built-in object
*/
// browser
// console.log(window);
// PC
console.log(global);
console.log(globalThis);
console.log('--------------------------------');

console.log(globalThis.Infinity);
console.log(globalThis.isNaN);
console.log(globalThis.Object);
console.log('--------------------------------');
/*
 * Wrapper Object (래퍼 객체) 

   Number, String, Boolean

 */

const num1 = new Number(123);
const num2 = new Number(123.456);
const str1 = new String('더조은');
const b1 = new Boolean(true);

console.log(num1);
console.log(num2);
console.log(str1);
console.log(b1);
console.log('--------------------------------');

console.log(num1.valueOf());
console.log(num2.valueOf());
console.log(str1.valueOf());
console.log(b1.valueOf());











