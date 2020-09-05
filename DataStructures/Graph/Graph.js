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
}

const g = new Graph();

g.addVertex('react');
g.addVertex('node');
g.addVertex('vue');
g.addEdge('react', 'node');
g.addEdge('vue', 'node');
// g.removeEdge('vue', 'node');
g.removeVertex('node');

console.log(g.adjacencyList);
