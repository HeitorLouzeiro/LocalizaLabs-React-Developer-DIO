'use strict';

function Person(initialName) {
    var name = initialName;
    this.Person = function() {
        return name;
    }
    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Lucas');

console.log(p);
console.log(p.name);
console.log(p.setName('João'));
console.log(p.name);
console.log(p.Person());

