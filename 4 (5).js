// 배열
const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4, 5, , 7, 8, 9];
const arr4 = [1, 2, 3, 4, 5, , , 8, , 10];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);
console.log(arr4.length);

const arr5 = new Array();
console.log(arr5);
console.log(arr5.length);

const arr6 = new Array(5);
console.log(arr6);
console.log(arr6.length);
console.log(arr6[0]);
console.log(arr6[1]);
console.log(arr6[2]);

// Array 의 static method
// of()
const arr7 = Array.of(7);
const arr8 = Array.of(1,2,3,4,5);
const arr9 = Array.of('java', false, null);
console.log(arr7);
console.log(arr8);
console.log(arr9);
console.log('------------------------');

// Array 의 static method
// from()
const arr10 = Array.from([11, 22, 33, 44, 55]);
const arr11 = Array.from('javascript');
const arr12 = Array.from({name:'더조은', age:23, height: 182, weight: 79});
console.log(arr10);
console.log(arr11);
console.log(arr12);
console.log('------------------------');

// index property 와 length property 가 있는 객체
const fruit = {
  0: 'strawberry',
  1: 'banana',
  2: 'watermelon',
  3: 'mango',
  4: 'peach',
  5: 'grape',
  length : 6
}


for(let i = 0; i < fruit.length; i++){
  console.log(fruit[i]);
}

/* TypeError: fruit is not iterable
for(const item of fruit){
  console.log(item);
}
*/
console.log('------------------------');
for(const item of Array.from(fruit)){
  console.log(item);
}

// 얕은 복사 (shallow copy) : 1 차원 단계에서의 복사

// 복사가 아닌 경우 : 같은 배열을 두 개의 변수가 참조함
// 78 행에서 arr13 이 저장한 주소를 arr14 한테 할당(복사)하면
// 같은 주소를 저장하게 됨
const arr13 = [1, 2, 3, 4, 5];
const arr14 = arr13;

arr13.push(100)
console.log('arr13 :',arr13);
console.log('arr14 :',arr14);

// 복사가 아닌 경우 : 같은 내용의 배열을 두 개 생성함
const arr15 = [1, 2, 3, 4, 5];
const arr16 = [1, 2, 3, 4, 5];

// arr15 가 저장한 주소지에 있는 배열을 
// 복사해서 메모리에 올림
// ... 올리고 이 주소를 arr17 에 저장함
let arr17 = Array.from(arr15);

// slice 를 해도 얕은 복사가 됨
arr17 = arr15.slice(0, 5)

arr15.push(6)
console.log('arr15 :',arr15);
console.log('arr17 :',arr17);
console.log('------------------------');

// 깊은 복사 (deep copy)    : 1 + 2  차원 단계에서의 복사
const arr18 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const arr19 = Array.from(arr18);

console.log('arr18 :',arr18);
console.log('arr19 :',arr19);

console.log('arr18[1][1] :',arr18[1][1]);
arr18[1][1] = 5555;
console.log('arr18[1][1] :',arr18[1][1]);
console.log('arr19[1][1] :',arr19[1][1]);

const arr20 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const arr21 = [];
/*
arr21[0] = Array.from(arr20[0]);
arr21[1] = Array.from(arr20[1]);
arr21[2] = Array.from(arr20[2]);

for(let i = 0; i < arr20.length; i++){
  arr21[i] = Array.from(arr20[i]);
}
*/
for(let idx in arr20){
  arr21[idx] = Array.from(arr20[idx]); 
}

console.log('arr20[1][1] :',arr20[1][1]);
arr20[1][1] = 5555;
console.log('arr20[1][1] :',arr20[1][1]);
console.log('arr21[1][1] :',arr21[1][1]);


console.log('------------------------');


