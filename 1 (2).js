
let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide =  (n1, n2) => n1 / n2;

// evalution
// ! <- 논리부정연산자 : != <- 비교부정연산자
// !! <- boolean type 으로 형변환하는 형변환연산자
// number % 2
const isOdd = number => !!(number % 2);
const isPositive = number => number > 0;

// calcs : 고차함수
// calc, eval : 콜백함수
function calcs(eval, calc, n1, n2){
  return eval(calc(n1, n2));
}

console.log(calcs(isOdd, add, 5, 7));
console.log(calcs(isOdd, add, 5, 8));

console.log(calcs(isPositive, subtract, 5, 7));
console.log(calcs(isOdd, multiply, 5, 8));


// 3) return 값으로 사용할 수 있음

function sayHello(name, flag){
  result = flag ? function () { console.log(`${name} 님, 안녕하세요`);} :
                  function () { console.log(`${name} 님, 안녕히 가세요.`);};
  return result;                  
}
const greeting1 = sayHello('더조은', true);
greeting1();
const greeting2 = sayHello('아이티', false);
greeting2();


add = (n1, n2) => n1 + n2;
subtract = (n1, n2) => n1 - n2;
multiply = (n1, n2) => n1 * n2;
divide =  (n1, n2) => n1 / n2;

function test4(funct1, funct2, funct3){
  return (n1, n2) => funct1(funct2(funct3(n1, n2), n2), n2);
}

const add_mul_sub = test4(add, multiply, subtract);
console.log(add_mul_sub(10, 8));
