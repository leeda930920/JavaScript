
// 객체를 반환하는 함수
function constructProfessor(profName, profNo){
  return {
    profName,
    profNo,
    sayHello(){
      return `안녕하세요 ${this.profName} 교수입니다. 교수번호는 ${this.profNo} 입니다`;
    }
  }
}
const prof1 = constructProfessor('이순신', 202301);
const prof2 = constructProfessor('유관순', 202302);
const prof3 = constructProfessor('안중근', 202303);

console.log(prof1, prof1.sayHello());
console.log(prof2, prof2.sayHello());
console.log(prof3, prof3.sayHello());


/*
  prototype 
*/

// 생성자 함수로 객체 생성하기
function Professor(profName, profNo){
  this.profName = profName;
  this.profNo = profNo;  
  this.sayHello = function(){
    return `안녕하세요. ${this.profName} 교수입니다. 교수번호는 ${this.profNo} 입니다`;
  }
}
const prof = new Professor('임영호', 23001);
console.log(prof);
