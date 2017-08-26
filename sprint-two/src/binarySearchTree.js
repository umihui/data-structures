var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
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
      //console.log(this.right);
    } else {
      this.right.insert(node);
    }  
  } else if (node < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(node);
      //console.log(this.left);
    } else {
      this.left.insert(node);
    } 
  }   
};

BinarySearchTreeMethod.contains = function(v) {

  if (this.value === v) {
    console.log('test ' + this.value);
    return true;
  } else if ( this.value < v) {
    if (!this.right) {
      return false;
    } else {
      console.log(this.right);
      console.log(this.right.value);
      return this.right.contains(v); 
    }
  } else if ( this.value > v) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(v);
    }
  }
};

BinarySearchTreeMethod.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.right) {
    this.right.depthFirstLog(callback);
      
  }
  if (this.left) {
    this.left.depthFirstLog(callback);
  }


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
