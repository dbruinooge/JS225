function newStack() {
  const stack = [];
  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      stack.forEach(item => console.log(item));
    },
  };
}

let stack = newStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());         // 3
stack.printStack();               // 1
                                  // 2
