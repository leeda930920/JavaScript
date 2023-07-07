const obj1 = {
  a:1,
  b:2,
  c:function(){return `${this.a} - ${this.b}`},
  d:function(){return this.a + this.b}
}
console.log('obj1.c() :', obj1.c())
console.log('obj1.d() :', obj1.d())

// property 의 value 가 function 인 경우에는
// 해당 property 는 직렬화가 안 됨
// property 의 value 가 function 가 아닌
// a, b 만 직렬화가 됨
const strObj1 = JSON.stringify(obj1);
console.log('strObj1 :',strObj1);
console.log('--------------------------');

const funct1 = (n1, n2) => n1 * n2;
function funct2(){
  console.log('더조은');
}

// 함수를 직렬화하기 - 함수는 직렬화가 안 됨
console.log(JSON.stringify(funct1));
console.log(JSON.stringify(funct2));
console.log('--------------------------');

const obj2 = {
  s: 1,
  t:'2',
  u: 3,
  v: true,
  w: false
}
// 두 번째 argument 를 replacer 함수로 지정함
const strObj2 = JSON.stringify(obj2, (key, value) => {
                if (key && key < 's' || key > 'u'){
                  return undefined;
                }
                if (typeof value === 'number'){
                  return value * 10;
                }
                return value;
               });
console.log(strObj2);

// 직렬화할 property 선택하기
console.log(JSON.stringify(obj2, ['t', 'u', 'v']));











