// Problem 1

// Yes. This means that JS automatically claims space in memory for
// objects, and releases that memory (discarding the value contained within)
// when the values are no longer reachable.
// LS: The JS runtime, rather than the developer, handles memory deallocation.

// Problem 2

let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code

// `1` is never eligible for GC since variables referencing numbers are stored
// on the stack.
// ['this is an array'] is eligible for GC after `foo` finishes running,
// since `myArr` is function-scoped.

// Problem 3

function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?

// more code

// No. The variable `foo` referencing the object is within the closure of the
// function returned by `makeGreeting` and assigned to `greeting`.

// Problem 4

let bash = {};

// The object {} will be eligible for garbage collection only when
// `bash` is reassigned or the program ends.
