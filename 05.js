// scope : 범위
// 좁은 scope 에서는 넓은 scope 에 있는 변수를 인식하지만
// 넓은 scope 에서는 좁은 scope 에 있는 변수를 인식하지 못함

let sum = 0
let i = 0;
for(i = 1; i <= 10; i++){
  sum += i;
}
console.log(`1 부터 ${i} 까지의 합 : `, sum);


{
 const num1 = 200;
 let name1 = '더조은';
 console.log(num1, name1);
}
// 넓은 scope 에서는 좁은 scope 에 있는 변수를 인식하지 못함
// console.log(num1, name1);

for(let i = 1, sum = 0; i <= 10; i++){
  sum += i;
  // 같거나 더 좁은 scope 에서는 인식 됨
  console.log(`1 부터 ${i} 까지의 합 : `, sum);
}
// 넓은 scope 에서는 좁은 scope 에 있는 변수를 인식하지 못함
// console.log(`1 부터 ${i} 까지의 합 : `, sum);
