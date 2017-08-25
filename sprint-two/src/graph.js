

// Instantiate a new graph
var Graph = function() {
  var obj = Object.create(Graph.prototype);
  obj.storage = [];
  obj.edge = [];  
  return obj;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this.storage.push(node);
    
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage.includes(node)) {
    return true;
  } else {
    return false;
  }
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage.indexOf(node) !== -1) {
    var index = this.storage.indexOf(node);
    this.storage.splice(index, 1);
    
    this.edge = this.edge.filter(function(e) {
      return !e.includes(node);
    });
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  /*
  takes two inputs  
    those inputs are nodes from addNode
  if both nodes are in the addEdge
      // write add edge

*/
  //console.log(this.edge);
  var test = false;

  if (this.edge.length > 0) {
    this.edge.forEach(function(e) {
      console.log(e);
      if (e.includes(fromNode) && e.includes(toNode)) {
        test = true;
      }
    });
  }
  return test;


};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  /* fromNode = 2
      toNode = 3
    array[2,3] --- edge

  */
  var e = [fromNode, toNode];
  this.edge.push(e);
  console.log(this);
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//find edge 
//find array includes from and to 


//remove edge //use array.splice
//  
  this.edge = this.edge.filter(function (e) {
    // body...
    return !e.includes(fromNode) && !e.includes(toNode);
  });







  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.storage.forEach(function(item) {
    return cb(item);
    
  });
    

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
   








*/

