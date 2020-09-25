class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(type = 'min') {
    this.values = [];
    this.type = type;
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.values.sort((a, b) =>
      this.type === 'min' ? a.priority - b.priority : b.priority - a.priority
    );
  }
  dequeue() {
    return this.values.shift();
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('A', 5);
priorityQueue.enqueue('B', 3);
priorityQueue.enqueue('C', 9);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    return this;
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return this;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (neighbor) => neighbor.node !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (neighbor) => neighbor.node !== v1
    );

    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });

    return this;
  }

  dfs_recursive(start) {
    if (!this.adjacencyList[start]) return [];

    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    recursion(start);
    return result;

    function recursion(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          recursion(neighbor.node);
        }
      });
    }
  }

  dfs_iterative(start) {
    if (!this.adjacencyList[start]) return [];

    const result = [];
    const visited = {};
    const stack = [];

    stack.push(start);
    visited[start] = true;

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          visited[neighbor.node] = true;
          stack.push(neighbor.node);
        }
      });
    }

    return result;
  }

  bfs(start) {
    if (!this.adjacencyList[start]) return [];

    const result = [];
    const visited = {};
    const queue = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          visited[neighbor.node] = true;
          queue.push(neighbor.node);
        }
      });
    }

    return result;
  }

  dijkstraToAll(start) {
    const previous = {};
    const distances = {};
    const priorityQueue = new PriorityQueue();

    Object.keys(this.adjacencyList).forEach((vertex) => {
      previous[vertex] = null;
      distances[vertex] = Infinity;
    });

    priorityQueue.enqueue(start, 0);
    distances[start] = 0;

    while (priorityQueue.values.length > 0) {
      const current = priorityQueue.dequeue();
      this.adjacencyList[current.value].forEach((neighbor) => {
        if (
          distances[current.value] + neighbor.weight <
          distances[neighbor.node]
        ) {
          distances[neighbor.node] = distances[current.value] + neighbor.weight;
          previous[neighbor.node] = current.value;
          priorityQueue.enqueue(neighbor.node, distances[neighbor.node]);
        }
      });
    }

    return { distances, previous };
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.adjacencyList);

console.log(graph.dfs_recursive('A'));
console.log(graph.dfs_iterative('A'));
console.log(graph.bfs('A'));

console.log(graph.dijkstraToAll('A'));

//       A
//     /   \
//   B      C
//        /   \
//   \  D  -  F
//     /    /
//    E
