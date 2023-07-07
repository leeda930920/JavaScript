
// primitive type
let a = 1;

// reference type
let b = {
  name : '더조은',
  age : 15
}
let c = [1, 2, 3];

console.log('-- test() 함수 실행 전 --')
console.log('a :',a);
console.log('b :',b);
console.log('c :',c);

function test1(n1, n2, n3){
  n1++;
  n2.name = '아이티';
  n2.age++;
  n3[0]++;

  console.log(n1, n2, n3);
}

test1(a, b, c);

// 2 { name: '아이티', age: 16 } [ 2, 2, 3 ]

console.log('-- test() 함수 실행 후 --')
console.log('a :',a);
console.log('b :',b);
console.log('c :',c);

// Call by Value
function changeNumber(number){
  number++;
  console.log('number in changeNumber :',number);
}

function test2(){
  let number = 10;
  console.log('-- changeNumber() 함수 호출 전 --');
  console.log('number in test2 :',number);
  changeNumber(number);
  console.log('-- changeNumber() 함수 호출 후 --');
  console.log('number in test2 :',number);
}
test2()

// Call by Reference
function changeNumber3(arrNumbers){
  arrNumbers[0] = 3333;
  console.log('arrNumbers in changeNumber :',arrNumbers);
}
function test3(){
  let arrNumbers = [1, 2, 3, 4, 5];
  console.log('-- changeNumber3() 함수 호출 전 --');
  console.log('arrNumbers in test3 :',arrNumbers);
  changeNumber3(arrNumbers);
  console.log('-- changeNumber3() 함수 호출 후 --');
  console.log('arrNumbers in test3 :',arrNumbers);
}
test3()