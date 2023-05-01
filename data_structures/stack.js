class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    this.items.push(item);
    this.count++;
  }

  pop() {
    if (!this.count) {
      return "Underflow";
    }

    this.count--;
    return this.items.pop();
  }

  size() {
    return this.count;
  }

  isEmpty() {
    if (!this.count) {
      return "Stack is empty";
    }

    return !this.count;
  }

  printStack() {
    return this.items.toString();
  }
}

const myStack = new Stack();

myStack.push(100);
myStack.push(200);
myStack.push(300);

console.log(`Stack: ${myStack.printStack()}`);
console.log(`Removed one item: ${myStack.pop()}`);
console.log(`Is empty ot not? ${myStack.isEmpty()}`);
console.log(`Size of stack: ${myStack.size()}`);
