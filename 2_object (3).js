
// 객체의 key 삭제하기 : delete 연산자
const student = {
  name : '더조은',
  age : 32,
  school : '일산대학교',
  major : '인공지능학과'
}
console.log(student);

delete student.age;
console.log(student);

delete student['major'];
console.log(student);

// 없는 key(속성-property) 삭제하기
// 오류가 발생하지는 않음
delete student.hobby;
console.log(student);

console.log('-------------------------------------');

const stationery = {
  name : '공책',
  color : 'blue',
  price : 5000
}

function modifyProperty(obj, key, value){
  // obj.key = value;  <-- 사용 못함
  obj[key] = value;
}
console.log(stationery);

modifyProperty(stationery, 'color', 'red');
console.log(stationery);

modifyProperty(stationery, 'price', 10000);
console.log(stationery);

modifyProperty(stationery, 'name', '참고서');
console.log(stationery);

function deleteProperty(obj, key){
  delete obj[key];
}

stationery['stock'] = 100;
console.log(stationery)
deleteProperty(stationery, 'stock');
console.log(stationery)










