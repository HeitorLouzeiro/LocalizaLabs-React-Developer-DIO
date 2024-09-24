
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
 