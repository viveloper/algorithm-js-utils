class Graph {
  constructor(nodes, cbIsRelation) {
    this.map = this.makeMap(nodes, cbIsRelation);
  }

  makeMap(nodes, isRelation) {
    const map = new Map();
    const length = nodes.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (isRelation(nodes[i], nodes[j])) {
          const key = nodes[i];
          const value = nodes[j];
          if (map.has(key)) {
            map.get(key).push(value);
          } else {
            map.set(key, [value]);
          }
        }
      }
    }
    return map;
  }

  dfs(rootNode) {
    const visitedNodes = [];
    recursion.call(this, rootNode);
    console.log(visitedNodes);

    function recursion(node) {
      visitedNodes.push(node);
      const key = node;
      const relatedNodes = this.map.get(key);
      relatedNodes.forEach((relatedNode) => {
        if (!visitedNodes.includes(relatedNode)) {
          recursion.call(this, relatedNode);
        }
      });
    }
  }

  findAllPath(begin, target) {
    const pathList = [];
    recursion.call(this, begin, []);

    function recursion(node, path) {
      path.push(node);
      if (node === target) {
        pathList.push(path);
      }
      const key = node;
      const relatedNodes = this.map.get(key);
      relatedNodes.forEach((relatedNode) => {
        if (!path.includes(relatedNode)) {
          recursion.call(this, relatedNode, [...path]);
        }
      });
    }

    return pathList;
  }

  findShortestPath(begin, target) {
    const allPath = this.findAllPath(begin, target);
    if (allPath.length === 0) {
      return null;
    }
    const arrPathLength = allPath.map((path) => path.length);
    const minPathLength = Math.min(...arrPathLength);

    return allPath[arrPathLength.indexOf(minPathLength)];
  }
}
