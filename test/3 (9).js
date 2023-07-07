/* 
   super keyword
    ㄴ 자식 클래스에서 부모클래스를 가리키는 keyword
*/

class Restaurant{
  number = 0;
  menu = {'떡볶이': 5000, '쫄면': 6000};
  
  constructor(name, number){
    this.name = name;
    if(number) { this.number = number; }
  }
  greeting(){
    return `안녕하세요, ${this.name} ${this.number} 호점입니다 
메뉴는 ${Object.keys(this.menu)} 입니다`;
  }
  menuPrice(menuName){
    return `${menuName} 은(는) ${this.menu[menuName]} 원입니다`;
  }
}

class ChildRestaurant extends Restaurant{
  #taste = '';
  constructor(name, number, taste){
    super(name, number);
    this.#taste = taste;
  }
  greetingWithTaste(){
    return super.greeting() +  ` : ${this.#taste}`;
  }
  // overriding
  menuPrice(menuName){
    return super.menuPrice(menuName) +  `: ${this.#taste}`;
  }

}
const cr2 = new ChildRestaurant('아카데미하우스', 2, 'good');
console.log(cr2);
console.log(cr2.menuPrice('떡볶이'));

/*
 static 메소드를 상속 받아서 overriding 하기
*/
class Car{
  static name = '소나타';
  static carName = '소나타';
  static brand = '현대';
  static display(){
    console.log(`이 차는 ${this.brand} 에서 제조한 ${this.carName} (${this.name}) 입니다`);
  }
}
class ChildCar extends Car{
  // overriding
  static display(){
    // console.log(`이 차는 ${this.name} 입니다`);
    super.display();
    console.log(`이 차는 성능이 좋습니다`);
  }
}
Car.display();
ChildCar.display();

