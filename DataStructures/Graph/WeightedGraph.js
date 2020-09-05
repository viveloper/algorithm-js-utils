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
      this.removeEdge(neighbor.node, vertex);
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

    function recursion(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor.node]) recursion(neighbor.node);
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
        this.adjacencyList[current].forEach((neighbor) => {
          stack.push(neighbor.node);
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
        this.adjacencyList[current].forEach((neighbor) => {
          queue.push(neighbor.node);
        });
      }
    }
    return result;
  }
  dijkstraToAll(start) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();

    Object.keys(this.adjacencyList).forEach((vertex) => {
      distances[vertex] = Infinity;
      previous[vertex] = null;
    });

    // distances, previous에 시작점 세팅
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    while (priorityQueue.values.length > 0) {
      // 큐를 쉬프트하여 방문할 노드를 꺼냄
      const current = priorityQueue.dequeue();
      this.adjacencyList[current.value].forEach((neighbor) => {
        // 해당 노드의 인접노드에 대하여 distances를 갱신
        // 인접노드의 기존 distance와 새로운 distance(현재노드를 거쳐가는 distance)를 비교하여
        if (
          distances[neighbor.node] >
          distances[current.value] + neighbor.weight
        ) {
          // 새로운 distance가 더 작으면 갱신
          distances[neighbor.node] = distances[current.value] + neighbor.weight;
          // previous 수정
          previous[neighbor.node] = current.value;
          // 인접노드를 큐에 푸시
          priorityQueue.enqueue(neighbor.node, distances[neighbor.node]);
        }
      });
    }
    return { distances, previous };
  }
  dijkstra(start, finish) {
    const { distances, previous } = this.dijkstraToAll(start);

    const path = [finish];
    let prev = previous[finish];
    while (prev) {
      path.push(prev);
      prev = previous[prev];
    }
    path.reverse();

    return {
      path,
      distance: distances[finish],
    };
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

console.log(graph.dijkstraToAll('A'));
console.log(graph.dijkstra('A', 'E'));
