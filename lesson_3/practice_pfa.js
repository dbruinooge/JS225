// Problem 1

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(a) {
//   return subtract(a, 5);
// }

// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15

// Problem 2

// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   return function(a) {
//     return subtract(a, n);
//   };
// }

// let sub5 = makeSubN(5);
// console.log(sub5(10)); // 5

// Problem 3

// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);

// console.log(multiplyBy5(100)); // 500

// Problem 4

// This is made by possible by the closure that is formed
// when the function returned by `makePartialFunc` is defined.
// That closure includes pointers to `func` and `b`, which are lexically
// in scope where the returned function is defined, and are needed by
// the returned function.

// Problem 5

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  };
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan