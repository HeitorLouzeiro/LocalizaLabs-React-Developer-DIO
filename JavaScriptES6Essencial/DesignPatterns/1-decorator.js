let loggedIn = false;

function callAuthorization(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callAuthorization(() => sum(2, 3))); // false
loggedIn = true;
console.log(callAuthorization(() => sum(2, 3))); // 5
loggedIn = false;
console.log(callAuthorization(() => sum(2, 3))); // false