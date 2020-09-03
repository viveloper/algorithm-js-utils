class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (this.length === 0) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx >= this.length || idx < 0) return null;
    let current = this.head;
    while (current.next && idx > 0) {
      current = current.next;
      idx--;
    }
    return current;
  }
  set(idx, value) {
    const findNode = this.get(idx);
    if (!findNode) return false;
    findNode.value = value;
    return true;
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(value);
    if (idx === 0) return !!this.unshift(value);

    const prev = this.get(idx - 1);
    const newNode = new Node(value);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length) return this.pop();
    if (idx === 0) return this.shift(value);
    const prev = this.get(idx - 1);
    const removed = prev.next;
    prev.next = removed.next;
    return removed;
  }
  reverse() {
    this.tail = this.head;
    let next = this.tail.next;
    this.tail.next = null;
    let prev = this.tail;
    let current = next;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
  traversal() {
    if (!this.head) {
      console.log('empty!');
      return;
    }
    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
    console.log(current.value);
  }
}

const list = new SinglyLinkedList();

console.log(list.push('D7200'));
console.log(list.push('D750'));
console.log(list.push('D810'));
console.log(list.push('D850'));

// list.set(2, 'EOS-M3');
// list.set(0, 'Galaxy');
// list.set(1, 'RX-100');
// list.set(7, 'EOS-R');

// list.insert(2, 'EOS-M3');
// list.insert(0, 'Galaxy');
// list.insert(1, 'RX-100');
// list.insert(7, 'EOS-R');

// list.remove(1);

// list.traversal();

list.reverse();
list.traversal();
console.log('\n');
console.log(list);

// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());
// console.log(list);

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// console.log(list.unshift('RX-100'));
// console.log(list);
// console.log(list.unshift('EOS-M3'));
// console.log(list);

// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
// console.log(list.get(-1));
