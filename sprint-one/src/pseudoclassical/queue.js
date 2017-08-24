var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this;
};

Queue.prototype.enqueue = function (value) {
  var lastIndex = Object.keys(this).length - 1;
  var key = Object.keys(this)[lastIndex] + 1;
  this[key] = value;
};
Queue.prototype.dequeue = function () {
  var r = this[Object.keys(this)[0]];
  //delete
  delete this[Object.keys(this)[0]];
  return r;
};
Queue.prototype.size = function () {
  // body...
  return Object.keys(this).length;
};


var any = new Queue();