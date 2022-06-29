function makeArrayLogger(arr) {
  return function() {
    console.log(arr);
  };
}

let logger = makeArrayLogger([1, 2, 3]);
logger();

logger = null;

// Problem 1

let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();

// [1]: After line 12, when `a` is reassigned on line 5 to a new array
// returned by `concat` and there remain no more references to this array.

// [2]: After line 12, when there are no references to this array

// [1, 2]: This cannot be garbage collected until after the program ends,
// since there remains a reference to this array (`a`).

// Problem 2

function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

// ['Steve', 'Edie'] can be GCed after the program stops running. The array
// to which the local variable `names` (scoped to the `makeHello` function)
// is referenced by the body of the function returned by that higher-order
// function referenced by `helloSteveAndEddie`.
