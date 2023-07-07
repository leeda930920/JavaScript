
// 객체의 key 를 수식으로 지정하기

 let idx = 0
 const obj1 = {
  ['key-' + ++idx] : `value-${idx}`,
  ['key-' + ++idx] : `value-${idx}`,
  ['key-' + ++idx] : `value-${idx}`,
  [idx ** idx] : 'POWER'
 }
 console.log(obj1);

// 객체나 배열을 key 로 사용하기
// 해당 객체나 배열이 실제로 key가 되는 것이 아니고
// 문자열로 바뀌어서(치환되어서) key 가 됨

const obj2 = {a : 1, b : 2};
const obj2_1 = {c : 3, d : 4};
const person = {name : '더조은', age:21, hobby:'독서'}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const obj3 = {  
  [obj2_1] : '객체(obj2_1)를 key 로 지정함',  
  [arr1] : '배열(arr1)을 key 로 지정함',
  [obj2] : '객체(obj2)를 key 로 지정함',
  [arr2] : '배열(arr2)을 key 로 지정함',
  [person] : '객체(person)를 key 로 지정함',   
}
console.log(obj3[obj2])
console.log(obj3[obj2_1])
console.log(obj3[arr1])
console.log(obj3[person])
console.log(obj3[arr2])
console.log('------------------------------');

console.log(obj3)







