// Problem 1

function makeMultipleLister(number) {
  return function() {
    for (let i = 1; i <= 100; i += 1) {
      if (i % number === 0) console.log(i);
    }
  };
}

let lister = makeMultipleLister(13);
lister();

// Problem 2

function makeAddSubtract() {
  let number = 0;
  function add(operand) {
    number += operand;
    console.log(number);
  }

  function subtract(operand) {
    number -= operand;
    console.log(number);
  }

  return [add, subtract];
}

let [add, subtract] = makeAddSubtract();

add(1);
add(42);
subtract(39);
add(6);

// Problem 3

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus; // = ?

// The value of `status` cannot be accessed without changing `startup`.
// Status is a `private` variable available only to the closure 
// formed by the anonymous function returned by `startup`.
