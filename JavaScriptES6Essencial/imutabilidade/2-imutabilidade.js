
/* 
    Imutabilidade 
    Nessa imutabilidade alteramos o objeto user, mas não alteramos o objeto original.
    O objeto original permanece inalterado.
    Isso a torna mais previsível e mais fácil de rastrear.
    
*/

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

console.log('\nLista de alunos:');
console.log(students); // [ { name: 'Grace', grade: 6 }, { name: 'Jennifer', grade: 4 }, { name: 'Paul', grade: 10 } ]