// Problem 1

// No. IIFE requires that a function definition that starts at the beginning
// of a line of code be enclosed in parentheses so that it can be evaluated
// as a function expression.

// Problem 2

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// Problem 3

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// The problem is that the `sum` function declaration is hoisted to the top of
// the code, and `sum` is then reassigned to 0, so that there is no longer a function
// referenced by `sum`. Thus the invocation of `sum` on the last line raises an error.
// This can be fixed by using an IIFE.

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

sum += (function(arr) {
  return arr.reduce((total, number) => total + number);
})(numbers);

console.log(sum);

// Problem 4

function countdown(n) {
  (function(number) {
    for (let i = number; i >= 1; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(n);
}

countdown(7);

// Problem 5

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

// No. The function expression is evaluated and a function is returned, but
// the function's name is not visible in the global scope.

// Problem 6

function countdown(count) {
  (function foo(n) {
    if (n < 0) {
      console.log('Done!');
      return;
    } else {
      console.log(n);
      foo(n - 1);
    }

  })(count);
}