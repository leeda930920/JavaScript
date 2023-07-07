const obj1 = {m:1, n:2};
console.log(obj1);
// isExtensible() 메소드 : property 추가 여부
console.log(Object.isExtensible(obj1));

obj1['o'] = 3
console.log(obj1);

// preventExtensions: property 를 추가 못하게 함
Object.preventExtensions(obj1);

// preventExtensions 로 설정한 이후에는
// property 추가가 안 됨
obj1['p'] = 4
console.log(obj1);

// 속성의 value 증가시키기
obj1.m++;
console.log(obj1);

// n 속성 삭제하기
delete obj1.n
console.log(obj1);

// preventExtensions 로 설정한 이후에는
// property 추가가 안 됨
obj1.q = 4
console.log(obj1);
console.log('--------------------');


// preventExtensions() 메소드를 배열에서 사용하기
const arr1 = [1, 2, 3];
console.log('arr1 :',arr1);

arr1[3] = 4;
console.log('arr1 :',arr1);

// 아래 처럼 설정하면 item 추가를 못함
Object.preventExtensions(arr1);

arr1[4] = 5;
console.log('arr1 :',arr1);

// 배열에 push() 메소드를 사용해서 
// item 추가하기
// preventExtensions() 메소드를 배열에서 사용하면
// push() 메소드 호출시 error 발생함
// arr1.push(5);
// console.log('arr1 :',arr1);
console.log('--------------------');

// Object 의 seal() 메소드
// property 추가/삭제 못함
const obj2 = {a:1, b:2, c:3};

// isSealed() - property 
//      seal 상태(추가/삭제 못하는지) 여부 반환
console.log(Object.isSealed(obj2));

Object.seal(obj2);
console.log(Object.isSealed(obj2));

console.log(obj2);

obj2.b++;
console.log(obj2);

// error 는 발생하지 않으나 삭제가 안 됨
delete obj2.c;
console.log(obj2);

// error 는 발생하지 않으나 추가가 안 됨
obj2.d = 4;
console.log(obj2);
console.log('--------------------');

const obj3 = {a:1, b:2, c:3};
// freeze() 메소드 - 읽기만 가능함
// isFreezon() 메소드 - freez 상태 여부 반환

console.log(Object.isFrozen(obj3));

Object.freeze(obj3);
console.log(Object.isFrozen(obj3));

// error 는 발생하지 않으나 증가(수정)가 안 됨
obj3.b++;
console.log(obj3);

// error 는 발생하지 않으나 삭제가 안 됨
delete obj3.c;
console.log(obj3);

// error 는 발생하지 않으나 추가가 안 됨
obj3.d = 4;
console.log(obj3);
console.log('--------------------');

const obj4 = {
  e : 1,
  f : {g : 3}
}
Object.freeze(obj4);

obj4.e++;
console.log(obj4);

delete obj4.e;
console.log(obj4);

obj4['h'] = 4
console.log(obj4);

console.log('obj4.f.g :',obj4.f.g);

// Object.seal() 은 1 차원까지만 적용됨
obj4.f.g++;
console.log('obj4.f.g :',obj4.f.g);


