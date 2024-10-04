function Person(customProperties) {
    return {
      name: 'Heitor',
      lastName: 'Silva',
      ...customProperties // agora customProperties vem do argumento da função
    }
  }
  
  const p = Person({name: 'Lucas', age: 30});
  console.log(p);
  