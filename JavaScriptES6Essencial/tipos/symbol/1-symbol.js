const symbol1 = Symbol('name');
const symbol2 = Symbol('name');

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const user = {
    [Symbol('name')]: 'Guilherme',
    [Symbol('age')]: 26,
    lastName: 'Cabrini da Silva'
};
console.log(user);

// Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};

console.log(directions);


