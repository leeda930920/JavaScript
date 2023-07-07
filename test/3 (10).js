/*
  전역 객체 : global object
*/

// global scope
class Person{
  // class scope
}

function test1(){
  // function scope
}

/*
  chrome browser 에서 확인하기

  console.log(this === window);
  true
  
  console.log(self === window);
  true
  
  console.log(self === frames);
  true
  
*/

// console.log(global);

console.log(globalThis);

console.log('------------------------------------');
let number = 10

function test1(number){
  number = 50;
  console.log('number in test1 :',number);
}

test1(2222);
console.log('number :',number);


