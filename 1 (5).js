
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

// 함수의 type 확인하기
console.log(typeof divide);

function mutliCalc(){
  console.log('arguments :',arguments);

  // funct1 은 mutliCalc 함수의 내부함수
  let funct1 = (n1, n2) => {
    let result = n1;
    for(const argument of arguments){
      // arguments 에 있는 요소가 함수인지 확인하기
      if(typeof argument !== 'function') continue;
      result = argument(result, n2);
    }
    return result;
  };  
  return funct1;
}

const add_multi = mutliCalc(add, multiply, 1, true);

// 내부함수 호출하기
console.log(add_multi(8, 3));

/*
 Closure : 
   내부함수에서 외부함수의 지역변수를 사용하는 경우에는
   외부함수가 return 해서 종료되더라고
   내부함수의 실행을 위해서 이 지역변수들을
   메모리에 보관해야 함  :  이 메모리 영역을 Closure 라고 함
*/
function outer(){
  let num1 = 10;
  let num2 = 20;
  let num3 = 30;
  function inner(number1, number2){
    let num4 = 2;
    return num1 + num2 + number1 + number2 - num4;
  }
  return inner;
}

// outer()(40, 50) : 내부함수를 호출하는 code
// 외부 함수의 return 값(내부 함수) 을 변수에 할당하지 않고 
// 내부함수를 직접 호출함
console.log('outer()(40, 50) :',outer()(40, 50));

// 외부 함수의 return 값(내부 함수) 을 변수에 할당해서
// 내부함수를 호출함
let funct1 = outer();
funct1(40, 50)
console.log('funct1(40, 50)  :',funct1(40, 50));