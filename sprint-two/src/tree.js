var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  
  var obj = Tree(value);

  this.children.push(obj);

};

treeMethods.contains = function(target) {
  var res = false;
  var helper = function(obj) {
    if (obj.value === target) {
      res = true;
    } else if (obj.children.length > 0) {
      obj.children.forEach(function(item) {
        helper(item);
      }); 
    }
  
  };


  helper(this);

  return res;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
