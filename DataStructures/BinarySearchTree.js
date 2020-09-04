class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) {
        return undefined;
      }
      if (current.value > value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) break;
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
  contains(value) {
    return !!this.find(value);
  }
  bfs() {
    if (this.root === null) return [];
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return result;
  }
  dfs_PreOrder() {
    const result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }
  dfs_PostOrder() {
    const result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }
  }
  dfs_InOrder() {
    const result = [];
    traverse(this.root);
    return result;

    function traverse(node) {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(11);
binarySearchTree.insert(8);
binarySearchTree.insert(15);

// console.log(binarySearchTree.find(6));

console.log(binarySearchTree.bfs());
console.log(binarySearchTree.dfs_PreOrder());
console.log(binarySearchTree.dfs_PostOrder());
console.log(binarySearchTree.dfs_InOrder());
