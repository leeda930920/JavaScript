// shopping 

/*
$sections = document.querySelector('section');
console.log('$sections :',$sections);

$sections = document.querySelector('#section');
console.log('$sections :',$sections);

$sections = document.querySelector('.section');
console.log('$sections :',$sections);
*/

const $sections = document.getElementsByTagName('section');

const $li1 = $sections[0].getElementsByTagName('li');
const $li2 = $sections[1].getElementsByTagName('li');
const $li3 = $sections[2].getElementsByTagName('li');

console.log($li1);