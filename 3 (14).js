
/*
  String Object
*/

// String 생성자 함수를 사용해서 
// 문자열을 메모리에 올리기
const str1 = new String('더조은 아이티');
const str2 = new String();

console.log('str1 :',str1);
console.log('str2 :',str2);

console.log('str1.valueOf() :',str1.valueOf());
console.log('str2.valueOf() :',str2.valueOf());

console.log('str1.toString() :',str1.toString());
console.log('str2.toString() :',str2.toString());


const str3 = new String(1234);
const str4 = new String(true);
const str5 = new String([1, 'G', false]);
const str6 = new String({name : '더조은'});

console.log('str3 :',str3);
console.log('str3 :',typeof str3); 
console.log('str3 :',str3.toString());
console.log('str4 :',str4);
console.log('str4 :',typeof str4); 
console.log('str4 :',str4.toString());
console.log('str5 :',str5);
console.log('str5 :',typeof str5); 
console.log('str5 :',str5.toString());
console.log('str6 :',str6);
console.log('str6 :',typeof str6); 
console.log('str6 :',str6.toString());

console.log('----------------------');

// new  + String 생성자호출
// new(없음) String() 함수
// 생성자가 아닌 String() 함수는
// () 안에 있는 data 를 문자열로 반환함

const str7  =  String('더조은아이티');
const str8  =  String(1234);
const str9  =  String(true);
const str10 =  String([1, 'G', false]);
const str11 =  String({a:1, b:2});

console.log('str7 :',str7);
console.log('str7 :',typeof str7); 
console.log('str7 :',str7.toString());

console.log('str8 :',str8);
console.log('str8 :',typeof str8); 
console.log('str8 :',str8.toString());

console.log('str9 :',str9);
console.log('str9 :',typeof str9); 
console.log('str9 :',str9.toString());

console.log('str10 :',str10);
console.log('str10 :',typeof str10); 
console.log('str10 :',str10.toString());

console.log('str11 :',str11);
console.log('str11 :',typeof str11); 
console.log('str11 :',str11.toString());