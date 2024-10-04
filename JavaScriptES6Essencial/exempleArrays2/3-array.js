/* 
Esse exemplo mostra como converter um NodeList em um Array.
NodeList é uma coleção de nós, como retornada por document.querySelectorAll.
*/

const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);
divArray.forEach(function (div) {
    console.log(div);
});