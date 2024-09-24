/* 
    Esse exemplo mostra o comportamento do hoisting em variáveis declaradas com var.
    O hoisting é o comportamento padrão do JavaScript de mover declarações
    para o topo do escopo atual (para o topo do script ou da função).
*/

function fn(){
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn(); // undefined, Exemplo



/* 
    Esse exemplo mostra o comportamento do hoisting em funções declaradas.
    O hoisting é o comportamento padrão do JavaScript de mover declarações
    para o topo do escopo atual (para o topo do script ou da função).
    No exemplo abaixo, a função log é movida para o topo do escopo da função fn.    
*/
function fn(){
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}

fn(); // Hoisting de função

/* 
    Imutabilidade 
    Nessa imutabilidade alteramos o objeto user, mas não alteramos o objeto original.
    O objeto original permanece inalterado.
    
*/
const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user); // { name: 'Guilherme', lastName: 'Cabrini da Silva', fullName: 'Guilherme Cabrini da Silva' } { name: 'Guilherme', lastName: 'Cabrini da Silva' }
 

const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
]

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students)); // [ { name: 'Paul', grade: 10 } ]