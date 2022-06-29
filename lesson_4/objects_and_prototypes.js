// Problem 1

let prot = {};

let foo = Object.create(prot);

// Problem 2

console.log(Object.getPrototypeOf(foo) === prot);

// Problem 3

console.log(prot.isPrototypeOf(foo));

// Problem 4

prot.isPrototypeOf(foo);
Object.prototype.isPrototypeOf(foo);

// Both lines return `true`, because `Object.prototype` lies at the end of the prototype chain for all JS objects.