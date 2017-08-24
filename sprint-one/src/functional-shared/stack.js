var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var someInstance = {};

  
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  
  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
 
  //return someInstance;
  return someInstance;
};

//we should put func inside
//push()
//input = value
//output 
//side effect: add a prop to a given obj
//pop()
//no input
//output value
//side effect:delete a prop from a given obj
//size()
//no input
//output: number
//no side effect

var stackMethods = {
   //.push
  'push': function(value) {
    this.count++;
    //var key = this[Object.keys(this).length] + 1;
    this.storage[this.count] = value;
  },
   //.pop
  'pop': function() {
    var result = this.storage[this.count];
    delete this.storage[this.count];
    if (this.count > 0) {
      this.count--;
    }
    //var key = Object.keys(this.storage)[Object.keys(this.storage).length - 1];//last
    //console.log(key);
    
    console.log(result);
    return result;
  }, 
  //.size
  'size': function() {
    return this.count;
  }
};


