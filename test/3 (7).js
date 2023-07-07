/*
  캡슐화 : encapsulation
  객체(클래스) 내부의 값을 외부에서 접근하지 못하게 하는 것
  javascript 에서는 기본적으로 접근 설정이 public 으로 되어있음
  # 기호 사용해서 지정함
*/
class Person{
  #name = '';
  #age = 10;
  constructor(name, age){
    this.#name = name;
    this.#age  = age;
  }
}
const p1 = new Person('더조은', 21);
console.log(p1);
/*  # 를 사용하면 private 으로 되어서 
    해당 클래스 외부에서는 접근할 수 없음
console.log(p1.#name);
console.log(p1.#age);
console.log(p1['#name']);
console.log(p1['#age']);
*/
class Person2{
  #name = '';
  #age = 10;
  constructor(name, age){
    this.#name = name;
    this.#age  = age;
  }
  get name(){
    return this.#name + ' 님';
  }
  get age(){
    return this.#age - this.#age % 10 + ' 대';
  }
  set age(age){
    // age 가 숫자 type 이면서 0 보다 큰 경우
    if(typeof age === 'number' &&  age > 0){
      this.#age = age;
    }
  }
  getAgeAfter(afterYear){
    return this.#age + afterYear;
  }
}
const p2 = new Person2('아이티', 25);
console.log(p2);
// getter 로 값을 가져옴
console.log(p2.name);
console.log(p2.age);

p2.name = '아카데미';
console.log(p2.name);

p2.age = 18;
console.log(p2.age);