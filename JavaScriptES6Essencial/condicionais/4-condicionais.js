const array = [2, 3, 4,5,6,8, 10,15]

console.log('\nelse if');

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`);
        return;
    }else if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
    }else if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`);
    }
});

console.log('\nif');

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`);
        return;
    }
    if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3.`);
        return;
    }
    if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5.`);
        return;
    }
});

