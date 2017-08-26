var BinarySearchTree = function(value) {
  var tree = {};
  tree.value;
  tree.left;
  tree.right;
  tree.insert = BinarySearchTreeMethod.insert;
  tree.contains = BinarySearchTreeMethod.contains;
  tree.depthFirstLog = BinarySearchTreeMethod.depthFirstLog;
  return tree;
  
};

var BinarySearchTreeMethod = {};

BinarySearchTreeMethod.insert = function(node) {
  // body...
 // var traverse = function (obj, node) {
  if (!this.value || this.value === node) {
    this.value = node;
  } else if ( node > this.value) {
    if (!this.right) {
      this.right = BinarySearchTree(node);
      this.right.value = node;
    } else {
      this.right.insert(node);
    }  
  } else if (node < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(node);
      this.left.value = node;
    } else {
      this.left.insert(node);
    } 
  }   
};

BinarySearchTreeMethod.contains = function(node) {
  if (this.value = node) {
    return true;
  } else {
  }

};

BinarySearchTreeMethod.depthFirstLog = function(callback) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
