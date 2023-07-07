// while / do-while
//         ㄴ (조건문의 결과와 관계없이) 최초 한 번의 실행을 보장함

for(let i = 1; i < 6; i++){  
  console.log(i);
}
console.log('-----------------------------------');
let i = 1;
while(i < 6){  
  console.log(i);
  i++;
}
console.log('-----------------------------------');

// 0 부터 1 미만의 임의의 실수 반환
console.log(Math.random());

/*
     0.0 <= Math.random() < 1.0

     1.0 <= Math.random() + 1 < 10.0

     1 <= (Math.random()) <= 10
*/
console.log(parseInt(Math.random() * 10) + 1);

// 1 ~ 100
let com = parseInt(Math.random() * 100) + 1;
let user = 50;

/*
while(user === com){
  if (user >= com){
    console.log('더 작은 수를 입력하세요');
  }else if(user <= com){
    console.log('더 큰 수를 입력하세요');
  }
}
console.log('정답입니다 !!!');
*/
console.log('-----------------------------------');

let idx = 1;
do{
  const text = `${idx} 번입니다` ;
  console.log(text);
  idx++;
}while(idx == 10);
