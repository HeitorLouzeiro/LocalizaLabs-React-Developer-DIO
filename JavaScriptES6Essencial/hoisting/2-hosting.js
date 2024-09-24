/* 
    Esse exemplo mostra o comportamento do hoisting em funções declaradas.
    O hoisting é o comportamento padrão do JavaScript de mover declarações
    para o topo do escopo atual (para o topo do script ou da função).
    No exemplo abaixo, a função log é movida para o topo do escopo da função fn.    
*/
function fn(){
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}

fn(); // Hoisting de função
