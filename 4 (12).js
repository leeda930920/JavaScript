

// 역직렬화 : 문자열 --> 객체
// JSON 의 static method   :  parse() 메소드

console.log(JSON.parse('100'));
// 원래 문자열이었던 것은 따옴표를 이중으로 해야 함
console.log(JSON.parse('"더조은"'));
console.log(JSON.parse('true'));
console.log(JSON.parse('null'));
console.log(JSON.parse('[11, 22, 33, 44, 55]'));
console.log(JSON.parse('{"a":1, "b":2}'));
console.log('--------------------');

console.log(typeof JSON.parse('100'));
console.log(typeof JSON.parse('"더조은"'));
console.log(typeof JSON.parse('true'));
console.log(typeof JSON.parse('null'));
console.log(typeof JSON.parse('[11, 22, 33, 44, 55]'));
console.log(typeof JSON.parse('{"a":1, "b":2}'));
console.log('--------------------');




