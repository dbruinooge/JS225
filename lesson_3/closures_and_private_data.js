// Problem 1

function makeCounterLogger(num1) {
  return function(num2) {
    if (num1 < num2) {
      for (let i = num1; i <= num2; i += 1) {
        console.log(i);
      }
    } else if (num1 > num2) {
      for (let i = num1; i >= num2; i -= 1) {
        console.log(i);
      }
    } else {
      console.log(num1);
    }
  };
}


let countlog = makeCounterLogger(5);
countlog(8);

countlog(2);

countlog(5);

// Problem 2

function makeList() {
  let todos = [];
  return function(todo) {
    if (todo === undefined) {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(todo => console.log(todo));
      }
    } else if (todos.includes(todo)) {
      let index = todos.indexOf(todo);
      todos.splice(index, 1);
      console.log(`${todo} removed!`);
    } else {
      todos.push(todo);
      console.log(`${todo} added!`);
    }
  };
}

let list = makeList();
list();                 // The list is empty.

list('make breakfast'); // make breakfast added!
list('read book');      // read book added!
list();                 // make breakfast
                        // read book
list('make breakfast'); // make breakfast removed!
list();                 // read book
