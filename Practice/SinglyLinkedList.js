class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // YOUR CODE GOES HERE
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // YOUR CODE GOES HERE
    if (this.length === 0) return undefined;
    let res = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next.next) {
        prev = prev.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.length--;
    return res;
  }

  get(idx) {
    // YOUR CODE GOES HERE
    if (idx < 0 || idx >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count < idx) {
      current = current.next;
      count++;
    }
    return current;
  }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.get(0).val);
console.log(singlyLinkedList.get(1).val);
console.log(singlyLinkedList.get(2).val);
console.log(singlyLinkedList.get(3).val);
console.log(singlyLinkedList.get(4));
