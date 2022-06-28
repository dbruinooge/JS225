// Problem 1

// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// let a = myObject.myChildObject.myMethod();
// console.log(a);

// `this` points to `myChildObject`; the method returns `undefined`.

// Problem 2

let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

let a = myObject.myChildObject.myMethod.call(myObject);
console.log(a);

let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// This code logs 'Peter Parker is the Amazing Spiderman!' to the console.

// Problem 4

// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     function specialDiscount() {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// console.log(computer.total());

// This code logs '35000'. The `specialDiscount` function returns 0 because
// `this.price` returns `0`, as `this` refers to the global object.

// We can fix the problem by expliticly setting the execution context
// by invoking `specialDiscount` using `call`:

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(computer);
  }
};

console.log(computer.total());
