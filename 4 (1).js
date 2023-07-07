// toUpperCase(), toLowerCase()

const str1 = 'JaVA, SCRipT, HElloW';

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// charAt()
console.log(str1.charAt(3));
console.log(str1.charAt(-1));

// at()
console.log(str1.at(3));
console.log(str1.at(-1));

// indexOf(), lastIndexOf()
console.log(str1.indexOf('A'));
console.log(str1.indexOf('z'));
console.log(str1.indexOf('ipT'));


// includes, startWith, endsWith
const str2 = 'javascript is the best 123 프로그래밍 language';

console.log(str2.includes('is'));
console.log(str2.startsWith('java'));
console.log(str2.endsWith('age'));


// search(정규표현식) : 
//  정규표현식에 해당하는 형태가 있는지 알아봄 
//  없으면 -1 반환
console.log(str2.search(/[0-9]/))
console.log(str2.search(/[가-힣]/))
console.log(str2.indexOf('1'));


// trim, trimStart, trimEnd
const str3 = '  java script  ';

console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());


// repeat(반복횟수)
const str4 = 'java';
console.log(str4.repeat(5));
// -1 은 Error
// console.log(str4.repeat(-1));
console.log(str4.repeat(0));
console.log(str4.repeat());
console.log('-----------------------------');

/**
 *  메소드 연속으로 호출하기
 *   ㄴ method chaining
*/

const str5 = ' 안녕, 안녕하세요 JavaSCRipt jAVa 여러분 ';

console.log(str5.trimStart()
                .toUpperCase()
                .replace('안', '온')
                .replaceAll('A', '에이')
                .repeat(2)
                .trimEnd()
            );






