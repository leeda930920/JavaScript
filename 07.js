// switch
const year = 2023;
const month = 2;
date = 0;
switch(month){
  case 1: case 3: case 5: case 7: 
  case 8: case 10: case 12: 
    date = 31; break;
  case 4: case 6: case 9:  case 11:  
    date = 30; break;    
  case 2:
    // 4로 나누어 떨어지고 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어지는 년도
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      date = 29;
    }else{
      date = 28;  
    }
    break;     
  default:
    date = '?';    
}
if (date != '?'){
  console.log(`${year} 년 ${month} 월(은)는 ${date} 일까지 있습니다`)
}else{
  console.log('월은 1 ~ 12 사이에서 입력해 주세요')  
}


let score = 88;
let grade = ''
switch(parseInt(score / 10)){
  case 10: case 9:
    grade = 'A'; break;
  case 8:
    grade = 'B'; break; 
  case 7:
    grade = 'C'; break;
  case 6:
    grade = 'D'; break;
  default:
    grade = 'F'; 
}
console.log(`당신은 ${grade} 학점입니다`)

const direction = 'north'
let directionKor = '';
switch (direction) {
  case 'north':
    directionKor = '북';
    break;
  case 'south':
    directionKor = '남';
    break;
  case 'east':
    directionKor = '동';
    break;
  case 'west':
    directionKor = '서';
    break;
  default:
    directionKor = '무효';
}
console.log(directionKor);

console.log('----------------------------------');
// 객체를 사용한 방법
const direction2 = 'north'

const directionKor2 = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[direction2] ?? `${direction2} key에 해당하는 value 가 없음`

console.log(directionKor2);

console.log('----------------------------------');

