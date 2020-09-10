class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
  }
}

class Tree {
  constructor() {
    this.root = new Node('');
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root.children[value]) this.root.children[value] = '';
  }
}
