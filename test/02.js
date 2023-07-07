
/*
   JSON
     ㄴ JavaScript Object Notation

     {k1:v1, k2:v2, k3:v3, ...}
*/


/*
class Student1{
  String name = '더조은';
  int age = 23;
  int grade = 4;
}
Student1 s1 = new Student1();
s1.name
s1.age
s1.grade
*/

const student1 = {name : '더조은', age : 23, grade : 4 }

// object
console.log(typeof student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.grade);
console.log(student1['name']);
console.log(student1['age']);
console.log(student1['grade']);

console.log(student1.height);
console.log(student1['weight']);

// 속성이 객체 안에 있는지 확인하기 : in 연산자
console.log('name' in student1);
console.log('age' in student1);
console.log('grade' in student1);
console.log('address' in student1);

console.log(student1);
// 기존의 속성 값 변경하기
student1.age += 1;
console.log('student1.age :',student1.age);

console.log(student1);
// 없는 속성(property) 추가하기
student1.height = 182;
console.log(student1);

student1['weight'] = 72;
console.log(student1);












