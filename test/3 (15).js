
let greeting = '안녕하세요';

console.log(greeting.length);
console.log(greeting[0]);

/*
   greeting.length - 1
   문자열의 길이 - 1  <-- 마지막 index 번호
*/
console.log(greeting[greeting.length - 1]);

/*
 문자열(String) 자료형은 immutable type
 immutable type
   ㄴ 문자열은 한 번 메모리에 올리면
      변형할 수 없음
*/

// 안녕하세요
greeting[greeting.length - 1] = '?';
console.log('greeting :',greeting);
console.log(greeting[greeting.length - 1]);


// substring(start, stop)
//           start 부터 stop-1까지

console.log(greeting.substring(0, 5));
console.log(greeting.substring(0, 4));
console.log(greeting.substring(0, 4) + '?');

console.log(greeting.substr(0, 5));
console.log(greeting.substr(0, 3));
console.log(greeting.substr(2, 3));

let str1 = 'javaskript'

// 'javaskript'  --> 'javascript'
 
console.log('str1[5] :',str1[5]);
str1[5] = 'c';
console.log('str1 :',str1);

console.log(str1.substring(0, 5) + 'c' + str1.substring(6));
console.log(str1.slice(0, 5) + 'c' + str1.slice(6));

// 문자열의 replace() 메소드 : 대상문자열.replace(old, new)
console.log(str1.replace('k', 'c'));


// split() - 대상문자열.split(구분자:separator)
// 대상문자열을 지정한 구분자로 구분해서
// 배열로 반환함
let str2 = 'ja,va,sc,ri,pt'

// [ 'ja', 'va', 'sc', 'ri', 'pt' ]
console.log(str2.split(','))

// 배열의 join() 메소드
//  대상배열.join(구분자:separator)
let strArr = [ 'ja', 'va', 'sc', 'ri', 'pt' ];
console.log(strArr.join(','))
console.log(strArr.join(',').replace(',',''))
console.log(strArr.join(',').replaceAll(',',''))
