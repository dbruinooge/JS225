// Problem 1

// Constructor function names are capitalized.

// Problem 2

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // ?

// This code will produce an error because lizzy references `undefined`, and thus has no method named `scamper`.
// This is because the constructor function `Lizard` was invoked without the `new` keyword, and therefore `this` pointed to the global object, resulting in the function defining properties on the global object. The function then returned `undefined`.

// Problem 3

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
