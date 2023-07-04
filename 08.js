// 반복문

let sum = 0
let i = 0
for(i = 1; i <= 10; i++){
  sum += i;
}
console.log(`1부터 ${i-1} 까지의 합은 ${sum} 입니다`)

for(let n = 0, m = 10; 
    n <= m; 
    n++, m--){
  console.log(n,"-",m );
}

console.log('-----------------------------------');
for(let a = true, b = 0, c = 0; b * c < 10;  a = !a, a ? b++: c++){
  console.log(b,'-',c);
}

/*
  무한루프
  for(;;){
    명령문
  }
*/
console.log('-----------------------------------');

const food = {
  name : '햄버거',
  taste : '불고기',
  calories : 500,
  warm : true
}

// 객체에서
// key 를 꺼냄
for (let key in food){
  console.log(`${key} : ${food[key]}`)
}

const arr1 = [100, 'abc', true, null];

// 배열에서
// index 번호를 꺼냄 : in
for(const idx in arr1){
  console.log(idx)
}

// 배열에서
// item(element) 을 꺼냄 : of
for(const element of arr1){
  console.log(element)
}

for(const char of '스프링웹개발'){
  console.log(char)
}
console.log('-----------------------------------');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}
console.log('-----------------------------------');
for(const number of numbers){
  console.log(number);
}
console.log('-----------------------------------');

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers4 = []

for(let number of numbers3){
  number++;
  numbers4.push(number + 1);
}
console.log('numbers3 :\n',numbers3);
console.log('numbers4 :\n',numbers4);

console.log('-----------------------------------');
for(let i = 0; i < numbers3.length; i++){
  numbers3[i]++;
}
console.log('numbers3 :\n',numbers3);
console.log('numbers4 :\n',numbers4);


console.log('-----------------------------------');
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers5){
  if(number === 5) break;  
  console.log(number);
}
console.log('-----------------------------------');

for (const number of numbers5){   
  console.log(number);
  if(number === 5) break; 
}
console.log('-----------------------------------');

for (const number of numbers5){
  if(number === 5) continue;  
  console.log(number);
}
console.log('-----------------------------------');

for (const number of numbers5){  
  console.log(number);
  if(number === 5) continue; 
}
console.log('-----------------------------------');


// labled break / continue

outer:
for(let dan = 1; dan < 10; dan++){
  for(let number = 2; number < 10; number++){
    console.log(`${dan} X ${number} = ${dan * number}`);
    if(dan == 3) break outer;
  }  
  console.log(); 
}
console.log('-----------------------------------');

outer:
for(let dan = 1; dan < 10; dan++){
  for(let number = 2; number < 10; number++){
    if(dan == 4) break outer;
    console.log(`${dan} X ${number} = ${dan * number}`);    
  }  
  console.log(); 
}
console.log('-----------------------------------');









