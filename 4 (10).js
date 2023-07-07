/*
  JSON : JavaScript Object Notation

  JSON 객체의 stringify : 객체를 문자열로 직렬화함 (serialize)
*/
const student = { 
  name : '더조은', 
  age : 21,
  language : ['Korean', 'English', 'Deutch'],
  university : {
    school : '일산대학교',
    major : ['인공지능', '마케팅'],
    graduated : true
  }
};
console.log(student);
console.log(typeof student);
console.log('---------------------');

const strStudent = JSON.stringify(student);
console.log(strStudent);
console.log(typeof strStudent);
console.log('--------------------------');

arr1 = [  
        JSON.stringify(1),
        JSON.stringify(Infinity),
        JSON.stringify(NaN),
        JSON.stringify('더조은'),
        JSON.stringify(true),
        JSON.stringify(null),
        JSON.stringify(undefined),
        JSON.stringify([11, 22, 33]),
        JSON.stringify({a : 1, b : 2}),
        JSON.stringify(new Date()),
      ]
arr1.forEach(item => console.log(item));     
console.log('--------------------------');

for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log('--------------------------');

arr2 = [  
  typeof JSON.stringify(1),
  typeof JSON.stringify(Infinity),
  typeof JSON.stringify(NaN),
  typeof JSON.stringify('더조은'),
  typeof JSON.stringify(true),
  typeof JSON.stringify(null),
  typeof JSON.stringify(undefined),
  typeof JSON.stringify([11, 22, 33]),
  typeof JSON.stringify({a : 1, b : 2}),
  typeof JSON.stringify(new Date()),
]
arr2.forEach(item => console.log(item));
