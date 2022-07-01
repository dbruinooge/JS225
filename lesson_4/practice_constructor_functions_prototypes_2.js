// Problem 1

// const shape = {
//   getType() {
//     return this.type;
//   },
// };

// function Triangle(s1, s2, s3) {
//   this.s1 = s1;
//   this.s2 = s2;
//   this.s3 = s3;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;

// Triangle.prototype.getPerimeter = function() {
//   return this.s1 + this.s2 + this.s3;
// };

// Triangle.prototype.constructor = Triangle;

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"

// Problem 2

// function User(first, last) {
//   this.prototype = {};
//   this.prototype.constructor = this;
//   this.name = first + ' ' + last;
//   return {
//     name: this.name,
//   };
// }

// function User(first, last) {
//   if (this.constructor !== User) {
//     return new User(first, last);
//   } else {
//     this.name = first + ' ' + last;
//   }
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// Problem 3

// function createObject(obj) {
//   function objConstructor() {}
//   objConstructor.prototype = obj;
//   return new objConstructor();
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

// Problem 4

// let foo = {
//   a: 1,
// };

// Object.prototype.begetObject = function() {
//     function F() {}
//     F.prototype = this;
//     return new F();
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// Problem 5

function neww(constructor, args) {
  const obj = {};
  Person.call(obj, ...args);
  Object.setPrototypeOf(obj, constructor.prototype);
  return obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}
