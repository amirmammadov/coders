class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    let item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.items[this.head];
  }

  printQueue() {
    return this.items;
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return !this.length;
  }
}

const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(`Head of queue: ${myQueue.peek()}`);
console.log(`Removed head item: ${myQueue.dequeue()}`);
console.log(`Length of queue: ${myQueue.length}`);
console.log(`Is empty or not? : ${myQueue.isEmpty}`);
