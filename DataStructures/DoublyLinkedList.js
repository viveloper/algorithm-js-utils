class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return popedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count;
    let current;
    if (idx < this.length / 2) {
      count = 0;
      current = this.head;
      while (count < idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count > idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(idx, value) {
    const targetNode = this.get(idx);
    if (targetNode) {
      targetNode.value = value;
      return true;
    }
    return false;
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (this.length === 0) return !!this.unshift(value);
    if (this.length === 1) return !!this.push(valuie);

    const newNode = new Node(value);
    const next = this.get(idx);
    const prev = next.prev;
    prev.next = newNode;
    next.prev = newNode;
    newNode.prev = prev;
    newNode.next = next;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    const prev = removedNode.prev;
    const next = removedNode.next;
    prev.next = next;
    next.prev = prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
  traversal() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  reverseTraversal() {
    let current = this.tail;
    while (current) {
      console.log(current.value);
      current = current.prev;
    }
  }
}

const list = new DoublyLinkedList();

list.push('Node.js');
list.push('React');
list.push('Vue');
list.push('Angular');
console.log(list.get(2));
// list.unshift('JavaScript');
// list.traversal();
// console.log(list.pop());
// console.log(list.shift());
// console.log(list);
// list.traversal();
// console.log('\n');
// list.reverseTraversal();
