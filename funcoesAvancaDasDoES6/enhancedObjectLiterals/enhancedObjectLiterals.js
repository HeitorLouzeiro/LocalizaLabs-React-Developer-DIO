var prop1 = 'Digital Innovation One';
var obj = {
    prop1: prop1
    };
console.log(obj);

function method1() {
    console.log('method called');
}

var obj = {
    method1
    };
console.log(obj.method1());

var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));

var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));

var propName = 'test';
var obj = {};
obj[propName] = 'prop value';
console.log(obj);

var propName = 'test';
var obj = {
    [propName + 'concat']: 'prop value'
};
console.log(obj);