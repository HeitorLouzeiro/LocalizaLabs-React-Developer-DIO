let array = [1, 2, 3, 4, 5];

array.foo = 'hello';


// for in -> lê os índices ou chaves do objeto 
for (let i in array) {
    console.log(i); // 0 1 2 3 4 foo
}

// for of -> lê os valores do objeto
for (let i of array) {
    console.log(i); // 1 2 3 4 5
}