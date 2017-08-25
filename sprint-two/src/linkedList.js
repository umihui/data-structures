var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    this.tail = Node(value);

    if (this.head === null) {
      this.head = Node(value);
    } else {
      if (this.head.next === null) {
        this.head.next = Node(value);
      } else {
        this.head.next.next = Node(value);
      }
    
    }
    console.log(this.tail.value);
    console.log(this.head.value);
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
    var result = false;
    var helper = function (obj) {
      
      if (obj !== null && obj.value === target && !result ) {
        result = true;
      } else if (obj.next !== null) {
        helper(obj.next);
      }
    };
    helper(this.head);
    return result;
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
