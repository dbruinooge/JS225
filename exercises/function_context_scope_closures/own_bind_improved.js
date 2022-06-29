function myBind(func, context, ...boundArgs) {
  return function(...callingArgs) {
    let args = boundArgs.concat(callingArgs);
    return func.apply(context, args);
  };
}

function greet(greeting, name) {
  console.log(greeting + ' ' + name + '!');
}

let greeter = myBind(greet, this, 'Hello');

greeter('Derek');