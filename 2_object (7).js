/*
  class
*/

class Student{
  constructor(name, studno){
    // 멤버변수
    this.name = name;
    this.studno = studno;    
  }
  // 멤버메소드
  sayHello(){
    return `안녕하세요 ${this.name} 입니다. ${this.studno} 학번입니다`;
  }
}

const s1 = new Student('이순신', 2301);
const s2 = new Student('유관순', 2302);
const s3 = new Student('강감찬', 2303);

console.log(s1);
console.log(s1.sayHello());
console.log(s2);
console.log(s2.sayHello());
console.log(s3);
console.log(s3.sayHello());


/* 생성자 메소드 : constructor method
 1) instance 생성할 때 parameter 에 argument 를 전달받아서 
    property(속성-멤버변수)를 초기화함
 2) 클래스에 하나만 작성할 수 있음
 3) constructor 라는 이름만 사용해야 함
 4) 기본값 사용 가능
 5) 객체 생성할 때 전달할 argument 가 없으면
    parameter 를 생략하는데... 
     <-- 생성자 메소드를 작성하지 않아도 자동으로 동작함  
          (Java 에서 기본 생성자를 작성하지 않아도
            자동으로 동작하는 것과 비슷함)
  6) return 값을 사용 안 함 : 생성자 함수와 같이 this 를 반환함
                                     묵시적으로 반환함
*/