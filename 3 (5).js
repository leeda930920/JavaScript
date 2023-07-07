/*
  getter, setter
*/

const student1 = {
  name : '더조은',
  age  : 21,

  get agePlusOne(){
    return this.age + 1;
  },

  set ageMinusNumber(number){
    this.age = this.age - number;       
  }
}

// set 키워드를 사용해서 선언한 속성이므로 return 이 동작하지 않음 : undefined
// console.log('student1.ageMinusNumber :',student1.ageMinusNumber);

console.log(student1.age);
console.log(student1.agePlusOne);

student1.age = 10;
console.log(student1.age);
console.log(student1.agePlusOne);

student1.ageMinusNumber = 5;
console.log(student1.age);
console.log(student1.agePlusOne);

console.log('----------------------------');

const student2 = {
  _name : '아이티',
  get studentName(){
    return this. _name + ' 더조은';
  },
  set studentName(value){
    if(value.length < 3){
      console.log("이름은 3 글자 이상 입력해 주세요");
      return;
    }
    this. _name = value;
  }
};

console.log('student2._name :',student2._name);
console.log('student2.studentName :',student2.studentName);

student2._name ='학원';
console.log('student2._name :',student2._name);
console.log('student2.studentName :',student2.studentName);

student2._name ='IT';
console.log('student2._name :',student2._name);
console.log('student2.studentName :',student2.studentName);

student2.studentName ='OS';
console.log('student2._name :',student2._name);
console.log('student2.studentName :',student2.studentName);

