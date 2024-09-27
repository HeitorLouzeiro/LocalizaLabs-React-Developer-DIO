const array = [0, 1, 2, 3, 4, 5];

array.forEach(element => {
    if (element % 2 === 0) {
        console.log(`O número ${element} é par.`);
        return;
    }else{
        console.log(`O número ${element} é impar.`);
    }
}
);
