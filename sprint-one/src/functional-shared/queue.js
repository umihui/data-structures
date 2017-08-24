var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  
  someInstance.count = 0;
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  
  return someInstance;
};

var queueMethods = {

  enqueue: function(values) {
    this.count++;
    var key = Object.keys(this.storage)[Object.keys(this.storage).length - 1] + 1;
    this.storage[key] = values;
  },
  dequeue: function () {
    if (this.count > 0) {
      this.count--;
    }
    var result = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return result;
  },
  size: function () {
    return this.count;
  }
};


