const PriorityQueue = require('../Heap/PriorityQueue.js');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((neighbor) => {
      this.removeEdge(vertex, neighbor);
    });
    delete this.adjacencyList[vertex];
  }
  dfs_recursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }
  dfs_iterative(start) {
    const result = [];
    const visited = {};
    const stack = [];
    let currentVertex;

    // initial state
    stack.push(start);
    visited[start] = true;

    // loop
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }

    return result;
  }
  bfs(start) {
    const result = [];
    const visited = {};
    const queue = [];
    let currentVertex;

    // initial state
    queue.push(start);
    visited[start] = true;

    // loop
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }

    return result;
  }
  dijkstra(start, finish) {
    const distances = {};
    const previous = {};
    const nodes = new PriorityQueue();
    const path = [];
    let smallest;

    // initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest && distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach((nextVertex) => {
          const candidate = distances[smallest] + 1;
          if (candidate < distances[nextVertex]) {
            distances[nextVertex] = candidate;
            previous[nextVertex] = smallest;
            nodes.enqueue(nextVertex, candidate);
          }
        });
      }
    }

    return path.concat(smallest).reverse();
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// {
//   A: [ 'B', 'C' ],
//   B: [ 'A', 'D' ],
//   C: [ 'A', 'E' ],
//   D: [ 'B', 'E', 'F' ],
//   E: [ 'C', 'D', 'F' ],
//   F: [ 'D', 'E' ]
// }

console.log(g.dfs_recursive('A'));
// [ 'A', 'B', 'D', 'E', 'C', 'F' ]

console.log(g.dfs_iterative('A'));
// [ 'A', 'C', 'E', 'F', 'D', 'B' ]

console.log(g.bfs('A'));
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]

console.log(g.dijkstra('A', 'E'));
// [ 'A', 'C', 'E' ]
