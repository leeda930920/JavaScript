
scores = {'더조은':90, '아이티':76, '아카데미': 62}

// 객체 리터럴에서 key 만 가져오기
console.log(Object.keys(scores))

// 객체 리터럴에서 value 만 가져오기
console.log(Object.values(scores))


class Restaurant{

  number = 0;
  menu = {'떡볶이': 5000, '쫄면': 6000};
  
  constructor(name, number){
    this.name = name;
    if(number) { this.number = number; }
  }
  greeting(){
    return `안녕하세요, ${this.name} ${this.number} 호점입니다 
메뉴는 ${Object.keys(this.menu)} 입니다`
  }
  menuPrice(menuName){
    return `${menuName} 은(는) ${this.menu[menuName]} 원입니다`
  }
}
const r1 = new Restaurant('더조은분식', 1);
console.log(r1.greeting());
console.log(r1.menuPrice('떡볶이'))
console.log(r1.menuPrice('쫄면'))
console.log('-----------------------------');


const r2 = new Restaurant('아이티분식', 1);

// 메뉴 추가 : r1 객체에만 추가되고 r2 객체에는 추가되지 않음
r1.menu['김밥'] = 7000;
console.log(r1);
console.log(r2);


