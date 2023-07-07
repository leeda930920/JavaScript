/* (property(속성) - field(필드) - 멤버변수)
 속성이름과 getter, setter 의 이름이 같은 경우
class Student3{
  constructor(name, number){
    this.name = name;
    this.number = number;
  }
  get number(){
    return this.number + ' 번 학생';
  }
  set number(number){
    this.number = number;
  }
}
const s1 = new Student3('더조은', 100);
*/

/*
 속성이름과 getter, setter 의 이름이 같은 경우
    ㄴ code 작성과 파악에 어려움이 있으므로 권장하지 않음
*/
class Student4{
  constructor(name, number){
    this.name = name;
    // 속성 number 가 생성되는 것이 아니고,
    // setter number 를 호출하는 code
    this.number = number;
  }
  get number(){
    return this.studentNumber + ' 번 학생';
  }
  set number(number){
    // studentNumber 라는 속성이 생성됨
    // 전달받은 number 값으로 초기화됨
    this.studentNumber = number;
  }
}

const s1 = new Student4('더조은', 100);
console.log(s1);
console.log('s1.name   :',s1.name);
console.log('s1.number :',s1.number);
console.log('s1.studentNumber   :',s1.studentNumber);

console.log('----------------------------');

class Student5{
  constructor(name, number){
    this.name = name;
    this.number = number;
  }
  get stdNumber(){
    return this.number + ' 번 학생';
  }
  set stdNumber(number){
    this.number = number;
  }
}
const s2 = new Student5('아이티', 300);
console.log(s2);
console.log('s2.name   :',s2.name);
console.log('s2.number :',s2.number);