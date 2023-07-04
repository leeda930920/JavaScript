/*
  primitive type(원시타입) : 값 자체가 저장됨
  reference type(참조타입) : 값의 주소가 저장됨
*/
// primitive type
// 값 복사하기 :  primitive type 의 값을 복사하면
//               값 자체가 복사되어서 서로 독립적인 data 가 됨
// 할당(저장) : 복사
let number1 = 10;
let str1 = 'tjoeun';
let b1 = true;

let number2 = number1;
let str2 = str1;
let b2 = b1;

console.log('number1 :',number1);
console.log('number2 :',number2);
console.log('str1 :',str1);
console.log('str2 :',str2);
console.log('b1 :',b1);
console.log('b2 :',b2);

number1 = 20
str1 = 'academy'
b1 = false;

console.log('number1 :',number1);
console.log('number2 :',number2);
console.log('str1 :',str1);
console.log('str2 :',str2);
console.log('b1 :',b1);
console.log('b2 :',b2);

// reference type
// 주소 복사하기 :  reference type 의 주소를 복사하면
//                값의 주소가 복사됨
// 할당(저장) : 복사

let person1 = {
  name : '아이티', age : 25, nickName : '컴도사'
}

console.log(person1);
const person2 = person1;

console.log('person1.nickName :',person1.nickName);
console.log('person2.nickName :',person2.nickName);

person1.nickName = '파이썬';
console.log('person1.nickName :',person1.nickName);
console.log('person2.nickName :',person2.nickName);

person2.nickName = '스프링';
console.log('person1.nickName :',person1.nickName);
console.log('person2.nickName :',person2.nickName);












