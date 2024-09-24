/* 
    Variáveis
    O var não respeita o escopo de bloco, ele é global.
    O let respeita o escopo de bloco.
    O const respeita o escopo de bloco.

*/
var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true){
        var test = 'example';

        console.log(`Valor dentro do if "${test}"`);
    }

    console.log('Valor após a execução do if "${test}"');
})();