
/*
  javascript 는 
  java 처럼 
  먼저 메모리 공간의 type 을 정한 후에
  data 를 저장하지 않고
  할당(저장) 되는 data 에 의해서 type 이 결정됨
   ㄴ 동적 type
    하나의 변수에 여러 type 의 값들을 할당할 수 있음
    변수 : 한 번에 값 하나만 저장(할당) 할 수 있음
    
*/

let number = 1234;
number = '1234';
number = true;
number = null;


let str1 = 'student';
console.log(str1)
console.log(str1.toUpperCase())

function getUpperCase(id){
  return id.toUpperCase();
}

console.log(getUpperCase('python'))

// Runtime Error 발생 : 숫자는 대문자로 변환하지 못함
// console.log(getUpperCase(1234))


console.log(123 + 345)

// 문자열과 다른 type 을 + 연산하면 
// 다른 type 도 문자열 type 으로 변환되고
// 연결연산이 일어남
console.log('123' + 345)










