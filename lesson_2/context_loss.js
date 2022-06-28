// Problem 1

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);



// This code will log 'undefined undefined is a undefined'.
// The reason is that `getDescription` is passed to `logReturnVal`, removing the method
// from its context, and then it is invoked without being given explicit context.
// Therefore, JS implicitly sets the context to the global object.
// Since there are no properties `firstName` `lastName` and `occupation` on the
// global object, `undefined` is returned for each of these.

// Problem 2

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// Problem 3

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

const getTurkDescription = turk.getDescription.bind(turk);

logReturnVal(getTurkDescription);

// Problem 4

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// This code will not log the desired output because the callback function passed to
// `forEach` is not provided explicit context, and thus the context is implicitly
// set to the global object. In other words, functions as arguments lose the
// surrounding context. Therefore, `this.seriestitle` returns `undefined`.

// Problem 5

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// Problem 6

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// Problem 7

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();

// Problem 8

// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// After the code is execution, the value of `foo.a` will be 0.
// Context does not propogate to inner functions (i.e. inner functions lose
// the outer object as context), so when `increment` is invoked
// without explicit context on line 137, the context is implicitly set to the
// global object; therefore, `this.a += 1` does not change the value of `foo.a`.

// Problem 9

// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment.call(this);
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// Problem 10

let foo = {
  a: 0,
  incrementA() {
    const increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
