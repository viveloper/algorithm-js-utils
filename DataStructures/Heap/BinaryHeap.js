class MaxBinaryHeap {
  constructor() {
    this.values = [];
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
  isExist(value) {
    return this.values.includes(value);
  }
  insert(value) {
    this.values.push(value); // add to the end
    this.bubbleUp();
    return this;
  }
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    const current = this.values[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = this.getParentIdx(currentIdx);
      const parent = this.values[parentIdx];
      if (parent >= current) break;
      this.values[currentIdx] = parent;
      this.values[parentIdx] = current;
      currentIdx = parentIdx;
    }
  }
  extractMax() {
    if (this.values.length === 0) return undefined;
    const max = this.values[0];
    this.values[0] = this.values[this.values.length - 1]; // move last leaf to root
    this.values.pop();
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
      if (!rightChild || leftChild > rightChild) {
        if (leftChild <= current) break;
        this.values[leftChildIdx] = current;
        this.values[currentIdx] = leftChild;
        currentIdx = leftChildIdx;
      } else {
        if (rightChild <= current) break;
        this.values[rightChildIdx] = current;
        this.values[currentIdx] = rightChild;
        currentIdx = rightChildIdx;
      }
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(9);
heap.insert(18);
heap.insert(10);
heap.insert(11);
heap.insert(18);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.values);
