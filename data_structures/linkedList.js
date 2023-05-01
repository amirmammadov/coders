class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);

    if (!this.head) {
      //only for the first add process
      this.head = node;
      this.size++;
    }

    let current = this.head;

    while (current.next) {
      //starting from third add process
      current = current.next;
    }

    current.next = node; //next property points to the node object
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
      return;
    }

    const node = new Node(element);
    this.size += 1;

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let current = this.head;
    let previous = null;
    let iterator = 0;

    while (iterator < index) {
      iterator += 1;

      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
      return;
    }

    let current = this.head;
    let previous = current;
    this.size -= 1;

    if (index === 0) {
      this.head = current.next;
      return current.element;
    }

    let iterator = 0;

    while (iterator < index) {
      iterator += 1;

      previous = current;
      current = current.next;
    }

    previous.next = current.next;

    return current.element;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    if (current.element === element) {
      return count;
    }

    while (current) {
      if (current.element === element) {
        return count;
      }

      count += 1;
      current = current.next;
    }

    return -1;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  printList() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.element + " ";
      current = current.next;
    }

    console.log("List elements: ", result);
  }
}

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);

console.log(linkedList.indexOf(10));
