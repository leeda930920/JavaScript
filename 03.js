const arrNumbers = [34, 653, 3, 81]
const arrWeekdays = ['월', '화', '수', '목', '금', '토', '일'];

const arr1 = ['더조은', 21, 178, 71];
const obj1 = {이름:'더조은', 나이:21, 키:178, 몸무게:71};

console.log(arrNumbers[0]);
console.log(arrNumbers[1]);
console.log(arrNumbers[2]);
console.log(arrNumbers[3]);

console.log(arrWeekdays[0]);
console.log(arrWeekdays[1]);
console.log(arrWeekdays[2]);
console.log(arrWeekdays[3]);
console.log(arrWeekdays[4]);
console.log(arrWeekdays[5]);
console.log(arrWeekdays[6]);

console.log(arrWeekdays.length, arrNumbers.length, arr1.length);

console.log(arrWeekdays[arrWeekdays.length-1], arrNumbers[arrNumbers.length-1], arr1[arr1.length-1]);


const student2 = {
  name : '더조은',
  age : 21,
  language : ['Korean', 'English', 'Deutch'],
  education : {
    university : '더조은대학교',
    major : ['컴퓨터공학', '인공지능'],
    graduated : true
  }
};

console.log(student2.language);
console.log(student2.education);
console.log(student2.education.major);
console.log(student2.education.graduated);

const numbers = [[1, 2],[3, 4, 5],[6, 7, 8, 9]];

const languages = [
  {name : '더조은', language: '한국어'},
  {name : '아이티', language: '영어'},
  {name : '학원', language: '독일어'}
]

console.log(languages[1].language);
console.log(languages[2].language);




