class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    const adjacentVertexList = this.adjacencyList[vertex];
    adjacentVertexList.forEach((adjacentVertex) => {
      this.removeEdge(vertex, adjacentVertex);
    });
    delete this.adjacencyList[vertex];
  }
  dfs_recursive(start) {
    if (!this.adjacencyList[start]) return [];
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    recursion(start);
    return result;

    function recursion(node) {
      visited[node] = true;
      result.push(node);
      adjacencyList[node].forEach((adjacentNode) => {
        if (!visited[adjacentNode]) recursion(adjacentNode);
      });
    }
  }
  dfs_iterative(start) {
    if (!this.adjacencyList[start]) return [];
    const visited = {};
    const stack = [];
    const result = [];
    stack.push(start);
    while (stack.length > 0) {
      const current = stack.pop();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        this.adjacencyList[current].forEach((adjacentNode) => {
          stack.push(adjacentNode);
        });
      }
    }
    return result;
  }
  bfs(start) {
    if (!this.adjacencyList[start]) return [];
    const visited = {};
    const queue = [];
    const result = [];
    queue.push(start);
    while (queue.length > 0) {
      const current = queue.shift();
      if (!visited[current]) {
        visited[current] = true;
        result.push(current);
        this.adjacencyList[current].forEach((adjacentNode) => {
          queue.push(adjacentNode);
        });
      }
    }
    return result;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addEdge('A', 'B');
g.addEdge('B', 'C');
g.addEdge('C', 'D');
g.addEdge('D', 'E');
g.addEdge('E', 'A');
g.addEdge('B', 'D');
// g.removeEdge('vue', 'node');
// g.removeVertex('node');
// console.log(g.adjacencyList);
console.log(g.dfs_recursive('B'));
console.log(g.dfs_iterative('B'));
console.log(g.bfs('B'));
