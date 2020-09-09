function solution(n, weak, dist) {
  const graph = makeGraph(n, weak);
  dist.sort((a, b) => a - b);
  const personCnt = dist.length;
  const weakCnt = weak.length;
  while (dist.length > 0) {
    const distance = dist.pop();
    let tempDistance = distance;
    const visitedListEachStartPoint = [];
    for (let i = 0; i < weak.length; i++) {
      let weakPoint = weak[i];
      const visited = [weakPoint];
      while (true) {
        if (graph.adjacencyList[weakPoint][1].weight > tempDistance) {
          visitedListEachStartPoint.push(visited);
          tempDistance = distance;
          break;
        } else {
          tempDistance -= graph.adjacencyList[weakPoint][1].weight;
          weakPoint = graph.adjacencyList[weakPoint][1].node;
          visited.push(weakPoint);
        }
      }
    }
    const weightListEachStartPoint = [];
    visitedListEachStartPoint.forEach((visitedList) => {
      let sumWeigth = graph.adjacencyList[visitedList[0]][0].weight;
      visitedList.forEach((vertex) => {
        sumWeigth += graph.adjacencyList[vertex][1].weight;
      });
      weightListEachStartPoint.push(sumWeigth);
    });
    const maxWeight = Math.max(...weightListEachStartPoint);
    const maxIdx = weightListEachStartPoint.indexOf(maxWeight);
    if (visitedListEachStartPoint[maxIdx].length === weak.length)
      return personCnt - dist.length;
    visitedListEachStartPoint[maxIdx].forEach((vertex) => {
      graph.removeVertex(vertex);
      weak = weak.filter((v) => v !== vertex);
    });
  }
  return -1;
}

const makeGraph = (n, weak) => {
  const graph = new Graph();
  weak.forEach((v) => {
    graph.addVertex(v);
  });
  for (let i = 0; i < weak.length - 1; i++) {
    graph.addEdge(weak[i], weak[i + 1], weak[i + 1] - weak[i]);
  }
  graph.addEdge(
    weak[weak.length - 1],
    weak[0],
    n - weak[weak.length - 1] + weak[0]
  );
  [graph.adjacencyList[weak[0]][0], graph.adjacencyList[weak[0]][1]] = [
    graph.adjacencyList[weak[0]][1],
    graph.adjacencyList[weak[0]][0],
  ];

  return graph;
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (this.adjacencyList[v]) return;
    this.adjacencyList[v] = [];
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
  removeVertex(v) {
    let prevNode = this.adjacencyList[v][0].node;
    let nextNode = this.adjacencyList[v][1].node;
    let newWeight =
      this.adjacencyList[v][0].weight + this.adjacencyList[v][1].weight;

    this.adjacencyList[prevNode][1] = this.adjacencyList[v][1];
    this.adjacencyList[prevNode][1].weight = newWeight;

    this.adjacencyList[nextNode][0] = this.adjacencyList[v][0];
    this.adjacencyList[nextNode][0].weight = newWeight;

    delete this.adjacencyList[v];
  }
}
