/* 
    Variáveis
    O const respeita o escopo de bloco.
    O const não permite a reatribuição de valores.
    O const não permite a redeclaração de variáveis.

*/

// Se for timo primitivo nao consigo alterar as propriedades
const name = 'Grace';


// Se for objeto consigo alterar as propriedades
const user = {
    name: 'Grace'
};
user.name = 'Outro nome 1';

const persons = ['Grace', 'João', 'Maria'];

// Posso adicionar novos itens
persons.push('Pedro'); // Adiciona no final

// Posso remover algum item
persons.shift(); // Remove o primeiro item

persons[1] = 'James'; // Altera o valor do índice 1

console.log('\nArray após as alterações: ', persons);