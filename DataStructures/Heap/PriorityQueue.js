class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this;
  }
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    let current = this.values[currentIdx];
    while (currentIdx > 0) {
      const parentIdx = this.getParentIdx(currentIdx);
      const parent = this.values[parentIdx];
      if (current.priority <= parent.priority) break;
      this.values[parentIdx] = current;
      this.values[currentIdx] = parent;
      currentIdx = parentIdx;
      current = this.values[currentIdx];
    }
  }
  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();
    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let currentIdx = 0;
    while (true) {
      const current = this.values[currentIdx];
      const leftChildIdx = this.getLeftChildIdx(currentIdx);
      const rightChildIdx = this.getRightChildIdx(currentIdx);
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      if (!leftChild) break;

      if (!rightChild || leftChild.priority > rightChild.priority) {
        if (leftChild.priority <= current.priority) break;
        this.values[leftChildIdx] = current;
        this.values[currentIdx] = leftChild;
        currentIdx = leftChildIdx;
      } else {
        if (rightChild.priority <= current.priority) break;
        this.values[rightChildIdx] = current;
        this.values[currentIdx] = rightChild;
        currentIdx = rightChildIdx;
      }
    }
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx) {
    return 2 * idx + 1;
  }
  getRightChildIdx(idx) {
    return 2 * idx + 2;
  }
}

module.exports = PriorityQueue;

const q = new PriorityQueue();
q.enqueue('Vue', 90);
q.enqueue('JavaScript', 100);
q.enqueue('React', 98);
q.enqueue('Angular', 88);
console.log(q.values);
console.log('\n');
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log('\n');
console.log(q.values);
