const a = 11, b = 22;
const obj1 = {
  a : a, b : b
}
console.log(obj1)
console.log('-------------------------');

// 객체 선언할 때 property 의 key 와
// 할당할 변수나 상수의 이름이 같은 경우
// 아래와 같이 작성할 수 있음
const obj2 = {a, b}
console.log(obj2)
console.log('-------------------------');

function product(name, price, quantity){
  // return {name:name, price:price, quantity:quantity}
  return {name, price, quantity}
}
const p1 = product('컴퓨터', 2000000, 30);
const p2 = product('키보드', 20000, 50);

console.log(p1);
console.log(p2);

// 객체에 property 함수 작성하기
const person = {
  name : '더조은',
  sayHello : function (flag){
    return flag ? `${this.name} 님, 안녕하세요` : `${this.name} 님, 안녕히 가세요`;
  }
}
console.log(person.sayHello(true));
console.log(person.sayHello(false));

// method - 객체에 포함된 함수
const person2 = {
  name : '아이티',
  sayHello(flag){
    return flag ? `${this.name} 님, 안녕하세요` : `${this.name} 님, 안녕히 가세요`;
  }
}
console.log(person2.sayHello(true));
console.log(person2.sayHello(false));







