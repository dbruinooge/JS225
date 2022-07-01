// Problem 1

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a);

// This will log 1 to the console.
// JS first searches `bar` for a property named `a`. Not finding one, it continues
// up the prototype chain until finding a property of `foo` named `a`, and returns
// its value which is 1, so that is what is logged.

// Problem 2

let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);

// This logs 2 to the console, since JS first looks to the object's own
// properties before looking up the prototype chain. Here, `bar` has an own property
// named `a` with a value of `2`, so that is what is logged.

// Problem 3

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1

// No, we don't know whether an own property `myProp` was fined on `far`.
// We can check using `far.hasOwnProperty('myProp')`
