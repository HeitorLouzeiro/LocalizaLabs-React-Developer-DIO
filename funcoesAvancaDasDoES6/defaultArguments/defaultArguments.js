function randomNumber() {
    return Math.random() * 10;
}

function multiply(a,b) {
    b = b || 1; // Se b não for passado, ele será 1
    return a * b;
}

console.log(multiply(5,0)); // 0 retorna 0

function multiply(a,b = 1) {
    return a * b;
}

console.log(multiply(5,0)); // 0 retorna 0
console.log(multiply(5)); // 5 retorna 5
console.log(multiply(5, undefined)); // 5 retorna 5


function randomNumber() {
    console.log('Generating a random number...');
    return Math.random() * 10;
}

function multiply2(a,b = randomNumber()) {
    return a * b;
}

console.log(multiply2(9)); // 5 retorna 5

