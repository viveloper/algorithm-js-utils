// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let lines = [];
let n = 0;
const rows = [];

rl.on("line", function(line) {
	if (n === 0) {
    n = parseInt(line);
  } else {
    lines.push(line);
    if (lines.length === n) {
      lines.forEach((item) => {
				const row = item.split(' ').filter((el) => !!el).map((el) => parseInt(el));
				rows.push(row);
      });
      rl.close();
    }
  }
}).on("close", function() {
	solution();
	process.exit();
});

function solution() {
	// console.log(rows);
	rows[2][1] = 1
	// console.log(rows);
	const tempRows = rows;
	const graph = makeGraph(tempRows);
	console.log(graph.adjacencyList);
	for(let i=0; i<tempRows.length; i++) {
		const targetVertex = `${tempRows[i][0]},${tempRows[i][1]}`;
		if(graph.Dijkstra('1,1', targetVertex).length === 0) {
			console.log('not reachable');
		}
	}
	
	
}

function makeGraph(rows) {
	// console.log(rows);
	const relations = [];
	for(let i=0; i<n; i++) {
		for(let j=0; j<n; j++) {
			if(rows[i][j] === 0) {
				const relation = [i+1, j+1];
				relations.push(relation);
			}
		}
	}
	// console.log(relations);
	
	const graph = new WeightedGraph();
	relations.forEach((relation) => {
		const vertex = `${relation[0]},${relation[1]}`;
		graph.addVertex(relation);
	});
	
	for(let i=0; i<relations.length; i++) {
		for(let j=0; j<relations.length; j++) {
			if(relations[i][0] === relations[j][0] && Math.abs(relations[i][1]-relations[j][1])===1
				|| relations[i][1] === relations[j][1] && Math.abs(relations[i][0]-relations[j][0])===1) {
				const vertex1 = `${relations[i][0]},${relations[i][1]}`;
				const vertex2 = `${relations[j][0]},${relations[j][1]}`;
				graph.addEdge(vertex1, vertex2, 1);
			}
		}
	}
	
	// console.log(graph.adjacencyList);
	
	return graph;
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
		if(!this.adjacencyList[vertex1].find((item) => item.node === vertex2)) {
			this.adjacencyList[vertex1].push({ node: vertex2, weight });
		}
		if(!this.adjacencyList[vertex2].find((item) => item.node === vertex1)) {
			this.adjacencyList[vertex2].push({ node: vertex1, weight });
		}
  }
  Dijkstra(start, finish) {
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


3
0 1 0 
0 0 1 
1 0 0 

2


4
0 0 0 0 
1 0 1 0 
0 0 0 0 
0 0 1 0 

1


5
0 1 0 0 0 
0 0 1 1 0 
0 0 0 0 0 
0 0 0 0 0 
0 0 0 0 0 

4