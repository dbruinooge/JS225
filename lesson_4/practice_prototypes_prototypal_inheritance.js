// Problem 1

// function getDefiningObject(object, propKey) {
//   while (true) {
//     if (object === null) {
//       return null;
//     } else if (object.hasOwnProperty(propKey)) {
//       return object;
//     }
//     object = Object.getPrototypeOf(object);
//   }
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // true
// console.log(getDefiningObject(qux, 'e') === null);    // true
// console.log(getDefiningObject(qux, 'a') === foo);     // true

// Problem 2

// function shallowCopy(object) {
//   const prototype = Object.getPrototypeOf(object);
//   const properties = Object.getOwnPropertyNames(object);
//   const copy = Object.create(prototype);
//   properties.forEach(property => copy[property] = object[property]);
//   return copy;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

// Problem 3

function extend(destination, ...sources) {
  sources.forEach(source => {
    Object.getOwnPropertyNames(source).forEach(prop => {
      destination[prop] = source[prop];
    });
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe