// Problem 1

// A higher-order function is one that takes a function as an argument, returns
// a function, or both.Accounts

// Problem 2

// let numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// numbers.filter(checkEven); // [2, 4]

// Of the two functions invoked (`checkEven` and `filter`), `filter` is a
// higher-order function because it takes a function as an argument.

// Problem 3

// let numbers = [1, 2, 3, 4];

// function makeCheckEven() {
//   return function(n) {
//     return n % 2 === 0;
//   };
// }

// let checkEven = makeCheckEven();

// let a = numbers.filter(checkEven); // [2, 4]
// console.log(a);

// Problem 4

// function execute(func, operand) {
//   return func(operand);
// }

// let a = execute(function(number) {
//   return number * 2;
// }, 10); // 20
// console.log(a);

// let b = execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"
// console.log(b);

// Problem 5

// function makeListTransformer(func) {
//   return function(array) {
//     return array.map(func);
//   };
// }

// let timesTwo = makeListTransformer(function(number) {
//   return number * 2;
// });

// let a = timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
// console.log(a);