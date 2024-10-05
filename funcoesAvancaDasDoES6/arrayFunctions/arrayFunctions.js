function log(value) {
  console.log(value);
}

log("teste");

var log = function log(value) {
  console.log(value);
};

log("teste");

var sum = function sum(a, b) {
  return a + b;
};

console.log(sum(5, 5));

// Arrow Function
/* 
Agora, vamos transformar a função sum em uma arrow function.
Arrow functions são sempre funções anônimas, ou seja, não possuem nome.
A sintaxe básica de uma arrow function é a seguinte:
(param1, param2, ..., paramN) => expression
A função sum, que recebe dois parâmetros, a e b, e retorna a soma deles.

*/
var sum = (a, b) => a + b;

console.log(sum(5, 5));

/* 
{} São opcionais, mas são necessários quando a função possui mais de uma expressão.
Se a função tiver apenas uma expressão, o return é implícito.
Se a função tiver mais de uma expressão, o return deve ser explícito.
ou seja se temos mais de uma expressão, devemos usar as chaves {} e o return.
*/
var sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 5));

var createObj = () => ({ test: 123 });

console.log(createObj());

// Função construtora
function Car() {
  this.foo = "bar";
}

console.log(new Car());

// Arrow Function
/* var Car = () => {
    this.foo = 'bar'; // Erro
    }

console.log(new Car()); */

var obj = {
  showContext: function showContext() {
    // this = obj
    console.log(this);
  },
  log: function log(value) {
    console.log(value);
  },
};

obj.showContext();


var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

