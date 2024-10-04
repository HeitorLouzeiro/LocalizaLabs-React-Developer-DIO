const array = [1, 2, 3, 4, 5, 6];

/* 
    value: valor do item
    index: índice do item

    forEach: percorre o array e executa a função de callback para cada item

    exemplo:
    array.forEach((value, index) => {
        console.log(`${index}: ${value}`);
    });

    output:
    0: 1
    1: 2
    2: 3
    3: 4
    4: 5
    5: 6
*/
array.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

const array2 = [1, 2, 3, 4, 5, 6];

array2.map(value => value * 2); // [2, 4, 6, 8, 10, 12]

console.log(array2); // [1, 2, 3, 4, 5, 6]

const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = array3.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]    

console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const array4 = [1, 2, 3, 4, 5, 6];

const flatMap = array4.flatMap(value => [value * 2]); // [2, 4, 6, 8, 10, 12]

console.log(flatMap); // [2, 4, 6, 8, 10, 12]

