var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
  this.storage = {};
  
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.end++] = value;

};
Queue.prototype.dequeue = function () {
  var result = this.storage[this.start];
  delete this.storage[this.start];

  if (this.size()) {
    this.start++;
  }
    
  return result;

};
Queue.prototype.size = function () {
  // body...
  return this.end - this.start;
  
};


var any = new Queue();