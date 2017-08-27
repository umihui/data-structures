var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
        
  list.addToTail = function(value) {
    this.tail = Node(value);

    if (this.head === null) {
      this.head = Node(value);
    } else { 
      var test = this.head;
      var helper = function(obj) {
        if (obj.next === null) {
          obj.next = Node(value);
        } else {  // if(obj.next !== null)
          helper(obj.next);
        }
      };
      helper(test);
    }
  };

  list.removeHead = function() {
    if (this.head) {
      var r = this.head.value;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return r;
    } else {
      return undefined;  
    }
  
    
    
  };

  list.contains = function(target) {

    var test = list.head;
    while (test !== null) {
      if (test.value === target) {
        return true;
      } else {
        test = test.next;
      }

    }
    return false;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
