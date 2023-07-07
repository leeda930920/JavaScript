class Student{
  constructor (name, age, pass=true){
    this.name = name;
    this.age = age;
    this.pass = pass
  }
  study(){
    console.log(`${this.name} 학생이 공부를 합니다`);
  }
}
class TV{
  // 속성들을 생성자(constructor) 밖에서 
  // this 키워드 없이 선언+초기화함
  color = 'white';
  channel = 0;
  power = false;

  // 기본 생성자는 생략 가능함
  constructor() { }

  powerOnOff(){
    this.power = !this.power;
  }
  channelUp(number){
    this.channel += number;
  }
  channelDown(number){
    this.channel -= number;
  }  
}

const tv1 = new TV();

console.log(tv1);

tv1.powerOnOff();
tv1.channelUp(7);

console.log(tv1);

tv1.channelDown(2);
console.log(tv1);

tv1.powerOnOff();
console.log(tv1);

console.log('----------------------------------');


