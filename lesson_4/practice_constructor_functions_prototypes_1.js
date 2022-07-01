// Problem 1

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);

// This code logs `2` 6 times (5 times in Node).
// When `Foo` is called with the `new` keyword, `2` is logged when
// `bar` is called within the function.
// `2` is then output again when `bar` is called on the `foo` object.
// The next `2` comes from calling `Foo` without `new`, which doesn't
// return a new object but does define properties on the global object and
// call `bar` again.
// Next, `2` is output when `Foo` is called with an empty object `obj` provided
// as explicit context, which defines properties on `obj`.
// Calling `bar` on `obj` logs `2`, and `2` is logged again by directly
// accessing the `a` property on the global object.

// Problem 2

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// This returns `NaN` twice.
// The problem with this code is that the constructor assigns properties
// `area` and perimeter` to the return values of invoking the methods `area`
// and `perimeter` on `RECTANGLE; both return `NaN` since `width` and `height` are
// both undefined for RECTANGLE.
// We can fix the problem by removing the parentheses after `RECTANGLE.area` and
// `RECTANGLE.perimeter`, and then adding parentheses when these methods are invoked
// on `rect1`.
// Alternatively, if we want `area` and `perimiters` to hold numbers rather than functions, we can call RECTANGLe.area and RECTANGLE.perimiter with explicit context.

// Problem 3

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.pow(this.radius, 2) * Math.PI;
// };

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// Problem 4

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());

// This logs `true`. When `swingSword` is invoked in `ninja`, JS looks for
// a method by that name in `swingSword` and doesn't find one. It next looks to `ninja`'s prototype object, which has the same value as the prototype property of `Ninja`. A `swingSword` method was defined on that prototype, which returns `this.swung`. JS thus executes that function's body; `this` refers here to `ninja`, the calling object, and the value of `ninja's` `swung` property is `true` due to how the `Ninja` constructor is written. Thus, the final line logs `true`.

// Problem 5

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());

// This code reassigns `Ninja.prototype` to a new object. The prototype object of `ninja` is still the same object as when `ninja` was assigned to a new `Ninja` instance, and that original prototype object does not have a `swingSword` method.

// Problem 6

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let prototype = Object.getPrototypeOf(ninjaA);
let ninjaB = Object.create(prototype);
// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
