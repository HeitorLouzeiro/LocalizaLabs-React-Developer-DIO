/* 
    Variáveis com let
    O let respeita o escopo de bloco.
    O let não permite a redeclaração de variáveis.
*/

(() => {
  let test = 'example';
  console.log(`Valor dentro da função "${test}"`);

  if (true) {
    let test = 'example';
    console.log(`Valor dentro do if "${test}"`);
  }

  if (true) {

    let test = 'example de outro if';
    console.log(`Valor dentro de otro if"${test}"`);
  }

    console.log(`Valor após a execução do if "${test}"`);
})();