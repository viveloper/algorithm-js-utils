// Run by Node.js

const readline = require('readline');
const { worker } = require('cluster');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];
let n = 0;
const rows = [];

rl.on('line', function (line) {
  if (n === 0) {
    n = parseInt(line);
  } else {
    lines.push(line);
    if (lines.length === n) {
      lines.forEach((item) => {
        const row = item
          .split(' ')
          .filter((el) => !!el)
          .map((el) => parseInt(el));
        rows.push(row);
      });
      rl.close();
    }
  }
}).on('close', function () {
  solution();
  process.exit();
});

function solution() {
  // check input
  console.log(n);
  console.log(rows);

  // make graph
  const graph = new WeightedGraph();
  const relations = [];
  const vertextList = [];
  // add vertex
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i][j] === 0) {
        const vertex = `(${i + 1},${j + 1})`;
        graph.addVertex(vertex);
        vertextList.push(vertex);
        relations.push([i + 1, j + 1]);
      }
    }
  }
  // add edge
  for (let i = 0; i < relations.length; i++) {
    for (let j = i; j < relations.length; j++) {
      if (
        (relations[i][0] === relations[j][0] &&
          Math.abs(relations[i][1] - relations[j][1]) === 1) ||
        (relations[i][1] === relations[j][1] &&
          Math.abs(relations[i][0] - relations[j][0]) === 1)
      ) {
        const vertex1 = `(${relations[i][0]},${relations[i][1]})`;
        const vertex2 = `(${relations[j][0]},${relations[j][1]})`;
        graph.addEdge(vertex1, vertex2, 1);
      }
    }
  }
  console.log(relations);
  console.log(graph.adjacencyList);

  // 노드를 하나씩 제거하면서 도달할 수 없는 노드의 수를 계산
  // (제거한 노드)와 (도달할 수 없는 노드의 수) 기록
  const record = [];
  for (let i = vertextList.length - 2; i > 0; i--) {
    const tempNeighborList = graph.adjacencyList[vertextList[i]];
    graph.removeVertex(vertextList[i]);
    // 도달할 수 없는 노드의 수 = 전체 노드 수 - 그래프 순회 방문 노드 수
    const visitedLength = graph.dfs_iterative('(1,1)').length;
    const roomLength = vertextList.length - visitedLength - 1;

    record.push([vertextList[i], roomLength]);

    // 제거한 노드 다시 추가
    graph.addVertex(vertextList[i]);
    tempNeighborList.forEach((neighbor) => {
      graph.addEdge(vertextList[i], neighbor.node, neighbor.weight);
    });
  }

  // record 내림차순 정렬
  record.sort((a, b) => (a[1] < b[1] ? 1 : -1));
  console.log(record);

  // record 중 물보다 빨리 도달할 수 있는 노드 중 가장 큰 것
  let answer;
  for (let i = 0; i < record.length; i++) {
    const waterPath = graph.dijkstra(vertextList[0], record[i][0]);
    const waterTime =
      waterPath.length >= 2 &&
      waterPath[0] === vertextList[0] &&
      waterPath[waterPath.length - 1] === record[i][0]
        ? waterPath.length
        : Infinity;
    console.log('waterTime', waterTime);
    const personPath = graph.dijkstra(
      vertextList[vertextList.length - 1],
      record[i][0]
    );
    const personTime =
      personPath.length >= 2 &&
      personPath[0] === vertextList[vertextList.length - 1] &&
      personPath[personPath.length - 1] === record[i][0]
        ? personPath.length
        : Infinity;
    console.log('personTime', personTime);
    if (personTime < waterTime) {
      answer = record[i][1];
      break;
    }
  }
  console.log(answer);
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (neighbor) => neighbor.node !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (neighbor) => neighbor.node !== vertex1
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
        const nextVertex = neighbor.node;
        if (!visited[nextVertex]) dfs(nextVertex);
      });
    })(start);

    return result;
  }
  dfs_iterative(start) {
    const result = [];
    const visited = {};
    const stack = [];
    let currentVertex;
    let nextVertex;

    // initial state
    stack.push(start);
    visited[start] = true;

    // loop
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        nextVertex = neighbor.node;
        if (!visited[nextVertex]) {
          visited[nextVertex] = true;
          stack.push(nextVertex);
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
    let nextVertex;

    // initial state
    queue.push(start);
    visited[start] = true;

    // loop
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        nextVertex = neighbor.node;
        if (!visited[nextVertex]) {
          visited[nextVertex] = true;
          queue.push(nextVertex);
        }
      });
    }

    return result;
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
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
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// 3
// 0 1 0
// 0 0 1
// 1 0 0

// 2

// 4
// 0 0 0 0
// 1 0 1 0
// 0 0 0 0
// 0 0 1 0

// 1

// 5
// 0 1 0 0 0
// 0 0 1 1 0
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 0 0 0

// 4
