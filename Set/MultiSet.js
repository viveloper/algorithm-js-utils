class MultiSet {
  constructor(arr = []) {
    this.elements = {};
    arr.forEach((el) => this.add(el));
  }
  get size() {
    let count = 0;
    for (const el in this.elements) {
      count += this.elements[el];
    }
    return count;
  }
  add(el) {
    if (!this.elements[el]) {
      this.elements[el] = 1;
    } else {
      this.elements[el]++;
    }
  }
  union(setB) {
    const unionSet = new MultiSet();
    unionSet.elements = { ...this.elements };
    for (const el in setB.elements) {
      if (unionSet.elements.hasOwnProperty(el)) {
        unionSet.elements[el] = Math.max(
          unionSet.elements[el],
          setB.elements[el]
        );
      } else {
        unionSet.elements[el] = setB.elements[el];
      }
    }
    return unionSet;
  }
  intersection(setB) {
    const intersectionSet = new MultiSet();
    for (const el in setB.elements) {
      if (this.elements.hasOwnProperty(el)) {
        intersectionSet.elements[el] = Math.min(
          this.elements[el],
          setB.elements[el]
        );
      }
    }
    return intersectionSet;
  }
  getJaccardSimilarity(setB) {
    if (
      Object.keys(this.elements).length === 0 &&
      Object.keys(setB.elements).length === 0
    ) {
      return 1;
    }

    const unionSet = this.union(setB);
    const intersectionSet = this.intersection(setB);
    const jaccardSimilarity = intersectionSet.size / unionSet.size;
    return jaccardSimilarity;
  }
}
