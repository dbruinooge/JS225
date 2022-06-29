const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// Outside a function, `this` is always bound to the global object
// Inside a function, the value of `this` depends on how the function is invoked.
// Here, `this` is used in the value of an object property, and not in a function.
// Therefore it is bound to the global object. `undefined` + `undefined`
// returns `NaN`.
