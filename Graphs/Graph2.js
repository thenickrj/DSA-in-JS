const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      console.log("Neig", neighbor);
      stack.push(neighbor);
    }
  }
};

// recursive implementation
const depthFirstPrintRec = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrintRec(graph, neighbor);
  }
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// depthFirstPrint(graph, "a"); // abdfce
// depthFirstPrintRec(graph, "a"); // abdfce

const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

breadthFirstPrint(graph, "a"); // acbedf
