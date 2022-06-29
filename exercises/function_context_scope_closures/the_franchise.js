const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

// This method does not return the desired object because `this` references
// the global object within the callback function passed to `map`.
// To fix this, we explicitly set the context by passing `map` an additional argument,
// `this`.
// Alternatively, we can assign a local variable to `this` within the `allMovies`
// method and then use that variable within the callback function to access properties
// of the object.
// Finally, we can use an arrow function for the callback, since arrow functions don't
// create their own `this` binding, instead determining the value of `this` lexically.