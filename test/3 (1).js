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
class Student{
  constructor (name, age, pass=true){
    this.name = name;
    this.age = age;
    this.pass = pass
  }
}
const s1 = new Student('더조은', 23, false);
const s2 = new Student('아이티', 27);

console.log(s1);
console.log(s2);


class Bird{
  chirp(){
    return '짹짹';
  }
}
const b1 = new Bird();
console.log(b1.chirp());

function Bird2(){
  this.chirp = function chirp(){
    return '짹짹';
  }
}
const b2 = new Bird2();
console.log(b2.chirp());

console.log('-----------------------------');













