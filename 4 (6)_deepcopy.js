// 배열의 map() 메소드

let arr1 = [11, 22, 33, 44, 55];

for(let i = 0; i < arr1.length; i++){
  console.log(arr1[i]);
}
console.log('------------------------');

for(let i in arr1){
  console.log(arr1[i]);
}
console.log('------------------------');

for(let i of arr1){
  console.log(i);
}
console.log('------------------------');

arr1.map(function(item, index){
  console.log(`${index+1} 번째 : ${item}`);
});
console.log('------------------------');

arr1.map((item, index) => {
  console.log(`${index+1} 번째 : ${item}`) 
});
console.log('------------------------');

arr1.map((item, index) => console.log(`${index+1} 번째 : ${item}`) );
console.log('------------------------');

// map() : 1차원 단계 복사
arr2 = arr1.map(item => item);
console.log('------------------------');

console.log('arr1 :',arr1);
console.log('arr2 :',arr2);

arr1[2] = 333;
console.log('arr1 :',arr1);
console.log('arr2 :',arr2);
console.log('------------------------');


// 깊은 복사 : 2 차원 단계까지 복사함
const arr3 = [[1, 2, 3], [4, 5, 6]];
const arr4 = JSON.parse(JSON.stringify(arr3));

console.log('arr3 :',arr3);
console.log('arr4 :',arr4);

console.log('arr3[1][0] :',arr3[1][0]);
arr3[1][0] = 10000;
console.log('arr3[1][0] :',arr3[1][0]);
console.log('arr4[1][0] :',arr4[1][0]);
console.log('------------------------');

// 얕은 복사 : 1 차원 단계까지 복사함
const arr5 = arr3.map(item => item);

console.log('arr3 :',arr3);
console.log('arr5 :',arr5);

console.log('arr3[0][2] :',arr3[0][2]);
arr3[0][2] = 20000;

console.log('arr3[0][2] :',arr3[0][2]);
console.log('arr5[0][2] :',arr5[0][2]);

console.log('arr3 :',arr3);
console.log('arr5 :',arr5);