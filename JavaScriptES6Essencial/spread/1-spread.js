// SPREAD
// O operador spread é utilizado para expandir elementos de um array, string ou objeto.
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', partes, 'e', 'pés'];

console.log(musica); // [ 'cabeca', [ 'ombro', 'joelhos' ], 'e', 'pés' ]

function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);