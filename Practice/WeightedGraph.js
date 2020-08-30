const PriorityQueue = require('../Heap/PriorityQueue.js');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (neighbor) => neighbor.node !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (neighbor) => neighbor.node !== v1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((neighbor) => {
      this.removeEdge(vertex, neighbor.node);
    });
    delete this.adjacencyList[vertex];
  }
  dfs_recursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          dfs(neighbor.node);
        }
      });
    })(start);

    return result;
  }
  dfs_iterative(start) {
    const result = [];
    const visited = {};
    const stack = [];

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          stack.push(neighbor.node);
          visited[neighbor.node] = true;
        }
      });
    }

    return result;
  }
  bfs(start) {
    const result = [];
    const visited = {};
    const queue = [];

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          queue.push(neighbor.node);
          visited[neighbor.node] = true;
        }
      });
    }

    return result;
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // initial state
    for (let vertex in this.adjacencyList) {
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
        //find neighboring node
        this.adjacencyList[smallest].forEach((nextNode) => {
          //calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        });
      }
    }

    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();

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

console.log(graph.dijkstra('A', 'E'));
