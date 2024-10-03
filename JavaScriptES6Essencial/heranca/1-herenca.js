/* 
Prototye é um objeto que contém métodos e propriedades que podem ser acessadas por outros objetos.
proto aponta para o protótipo do objeto.
ou seja, proto é o protótipo do objeto.
prototype aponta para o protótipo do objeto.
*/

// Exemplo 1
'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4); // chama o construtor Animal

    this.morde = morde;
    this.latir = function() {
        console.log('Au! Au!');
    }
}

const cachorro = new Animal(4);

console.log(cachorro.qtdePatas); // 4
console.log(cachorro.__proto__ === Animal.prototype); // true
console.log(Animal.__proto__ === Function.prototype); // true

const pitbull = new Cachorro(false);
console.log(pitbull.qtdePatas); // 4
console.log(pitbull.morde); // false
pitbull.latir(); // Au! Au!


// Exemplo 2
