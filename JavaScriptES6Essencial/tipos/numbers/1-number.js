/* 
    Todos os números em JavaScript são do tipo number.
    Você pode usar o método toString() para transformar um número em string.
    O método toFixed() retorna um número com um número específico de casas decimais.
    O método parseFloat() transforma uma string em float.
    O método parseInt() transforma uma string em int.
    
*/
const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'));

// Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'));