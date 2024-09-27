
/* 
    Funções são blocos de construção fundamentais em JavaScript. 
    Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou
    calcula um valor. 
    Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
    
    Se na funcao não for passado nenhum valor, ela irá retornar undefined.
    Se na funcao for passar declarado um valor, devera usar o return para retornar o valor.
*/
function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here';

const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here';
}

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Executará a função fn

function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}
