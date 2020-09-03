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
  // find(value) {
  //   return findNode(this.root);

  //   function findNode(node) {
  //     if (node === null) return null;
  //     if (node.value === value) {
  //       return node;
  //     }
  //     if (node.value > value) {
  //       return findNode(node.left, value);
  //     } else {
  //       return findNode(node.right, value);
  //     }
  //   }
  // }
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
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(11);
binarySearchTree.insert(8);
// console.log(binarySearchTree);

console.log(binarySearchTree.find(6));
