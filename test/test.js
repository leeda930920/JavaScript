
/*
Math.random() 이용해서
1 부터 10까지의 정수 중 임의의 숫자 발생시키기
*/

console.log(parseInt(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
/*   
     0.0 <= Math.random()  < 1.0
     0.0 * 10 <= Math.random() * 10  < 1.0 * 10
     0.0  <= Math.random() * 10  < 10.0
     parseInt(Math.random() * 10)
     0  <= parseInt(Math.random() * 10)  < 10
     0 + 1  <= parseInt(Math.random() * 10) + 1  < 10 + 1
     1  <= parseInt(Math.random() * 10) + 1  < 11
*/

