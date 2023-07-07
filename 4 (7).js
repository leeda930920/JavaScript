
// Object 클래스
// ㄴ 모든 객체들의 원형(prototype)

console.log(new String('python') instanceof Object);
console.log(new Number(987654) instanceof Object);
console.log(new Array() instanceof Object);
console.log([] instanceof Object);
console.log((function(){}) instanceof Object);
console.log('-----------------------');

console.log(new Object());
console.log(new Object(1));
console.log(new Object('더조은'));
console.log(new Object(false));
console.log(new Object([11, 22, 33]));

console.log(new Object(null));
console.log(new Object(undefined));
console.log('-----------------------');

const person1 = {
  name : '더조은'
};

// 객체의 얕은 복사
const person2 = {...person1};
console.log(person1);
console.log(person2);
console.log('-----------------------');


const person3 = {
  age : 23,
  isStudent : false
};
console.log(person3)

const career = {
  job: 'developer',
  position: 'teamleader'
}
console.log(career)

Object.assign(person3, career)
console.log(person3)
console.log('-----------------------');

const obj1 = new Object();
const obj2 = {m:1, n:2 };
const obj3 = {n:3 };
const obj4 = {o: {p:1}}


// obj2, obj3, obj4 의 속성들을 복사해서
// obj1 속성으로 추가함
Object.assign(obj1, obj2, obj3, obj4);

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

console.log('obj2.m :', obj2.m);
console.log('obj4.o.p :',obj4.o.p);

obj2.m = 3333;
obj4.o.p = 7777;

console.log('obj2.m :', obj2.m);
console.log('obj4.o.p :',obj4.o.p);



