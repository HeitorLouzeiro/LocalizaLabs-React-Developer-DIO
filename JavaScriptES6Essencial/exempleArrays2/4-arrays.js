const frutas = ['banana', 'maçã', 'laranja', 'melancia', 'abacaxi'];
frutas.push('morango');

console.log(frutas); // ['banana', 'maçã', 'laranja', 'melancia', 'abacaxi', 'morango']

const removedItem = frutas.pop();

console.log(removedItem); // 'morango'

console.log(frutas); // ['banana', 'maçã', 'laranja', 'melancia', 'abacaxi']

const firstItem = frutas.shift(); // remove o primeiro item

console.log(firstItem); // 'banana'

console.log(frutas); // ['maçã', 'laranja', 'melancia', 'abacaxi']

frutas.unshift('morango'); // adiciona no início

console.log(frutas); // ['morango', 'maçã', 'laranja', 'melancia', 'abacaxi']

const salgados = ['coxinha', 'kibe', 'empada'];

const alimentos = frutas.concat(salgados);

console.log(alimentos); // ['morango', 'maçã', 'laranja', 'melancia', 'abacaxi', 'coxinha', 'kibe', 'empada']
console.log(frutas); // ['morango', 'maçã', 'laranja', 'melancia', 'abacaxi']
console.log(salgados); // ['coxinha', 'kibe', 'empada']

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.slice(0, 2);

console.log(arr2); // [1, 2]

console.log(arr); // [1, 2, 3, 4, 5]

const arr3 = arr.slice(2);

console.log(arr3); // [3, 4, 5]

arr.splice(2); // remove a partir do índice 2

console.log(arr); // [1, 2]

arr.splice(0, 0, 'first'); // adiciona 'first' no início

console.log(arr); // ['first', 1, 2]