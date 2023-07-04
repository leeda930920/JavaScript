/*
  생성자 함수
*/
const student1 = {
  name  : '더조은',
  stdno : 2301,
  sayHello(){
    return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
  }
};
const student2 = {
  name  : '아이티',
  stdno : 2302,
  sayHello(){
    return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
  }
};
const student3 = {
  name  : '아카데미',
  stdno : 2303,
  sayHello(){
    return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
  }
};
const student4 = {
  name  : '학원',
  stdno : 2304,
  sayHello(){
    return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
  }
};
const student5 = {
  name  : '디자인',
  stdno : 2305,
  sayHello(){
    return `안녕하세요 ${this.stdno} 학번 ${this.name} 입니다`;
  }
};

// 생성자 함수로 객체 생성하기
function Professor(profName, profNo){
  this.profName = profName;
  this.profNo = profNo;  
  this.sayHello = function(){
    return `안녕하세요. ${this.profName} 교수입니다. 교수번호는 ${this.profNo} 입니다`;
  }  
}

const prof1 = new Professor('임영호', 23001);
const prof2 = new Professor('김유신', 23002);
const prof3 = new Professor('강감찬', 23003);
const prof4 = new Professor('안중근', 23004);
const prof5 = new Professor('양만춘', 23005);

console.log("----")
console.log(new Professor('임영호', 23001));
console.log("----")
// new 연산자를 사용하지 않으면 undefined 를 반환함
//                            ㄴ 객체가 메모리에 올라가지 않음
console.log(Professor('임영호', 23001));
console.log("----")


console.log(prof1, prof1.sayHello());
console.log(prof2, prof2.sayHello());
console.log(prof3, prof3.sayHello());
console.log(prof4, prof4.sayHello());
console.log(prof5, prof5.sayHello());

/*
  생성자 함수이름은 첫글자를 대문자로 시작함
  생성자 함수로 생성된 객체(object)를 instance 라고 함
  this. 키워드를 사용해서 property(속성) 를 정의함
  생성자 함수를 호출할 때는 항상 new 연산자를 먼저 작성함
  생성자 함수는 this 를 반환함
               ㄴ 생성된 객체의 주소를 저장하고 있는 참조변수
  생성자 함수에서는 method 를 정의할 수 없음
                    ㄴ { } 사용해서 생성하는 객체 : 객체 리터럴,
                       클래스에서는 method 를 정의할 수 있음               
*/
