/* 
 Arrow Function

 
*/
(() => {
    this.Name = 'Nome no contexto de criação';
    const getNameArrowFn = () => this.Name;

    function getName() {
        return this.Name;
    }

    const user = {
        Name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();