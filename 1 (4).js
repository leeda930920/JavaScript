
function add(n1, n2){
  return n1 + n2;
}

// argument 개수가 parameter 개수보다 많으면
// 에러는 발생하지 않고 나머지 argument 는 무시됨
console.log(add(1, 2))
console.log(add(1, 2, 3))
console.log(add(1, 2, 3, 4))

// argument 개수가 parameter 개수보다 적으면
// 에러는 발생하지 않고 NaN 을 반환함
// NaN
console.log(add())
// NaN
console.log(add(30))
// 110
console.log(add(50, 60))

// default parameter
// argument 개수가 parameter 개수보다 적은 경우
// default parameter 를 지정하면 지정된 값이 사용됨

function add2(n1 = 10, n2 = 20){
  console.log(`${n1} - ${n2}`);
  return n1 + n2;
}

console.log(add2())
console.log(add2(30))
console.log(add2(50, 60))

console.log('----------------');
function add3(n1, n2){
  console.log('arguments    :',arguments);
  console.log('arguments[0] :',arguments[0]);
  console.log('typeof arguments :',typeof arguments);
  return n1 + n2;
}

console.log(add3(1, 3, 5, 7));


console.log('--------------------------------------------------');
function add4(n1, n2){
  console.log('arguments    :',arguments);
  for(const arg of arguments){
    console.log(arg);
  }
  return n1 + n2;
}
console.log(add4(2, 4, 6, 8));

console.log('--------------------------------------------------');
function avg(){
  let result = 0;
  let count  = 0;
  for (const number of arguments){
    if(typeof number !== 'number') continue;
    result += number;
    count++;
  }
  return result / count;
}

console.log(avg(2, 3, '더조은', 4, 5, 6, false, 7, 8))

function avg2(){
  let result = 0;
  for (const number of arguments){
    result += number;    
  }
  return result / arguments.length;
}
console.log(avg2(2, 3, '더조은', 4, 5, 6, false, 7, 8))
