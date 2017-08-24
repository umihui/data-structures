var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);


  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var lastIndex = Object.keys(this).length - 1;
  var key = Object.keys(this)[lastIndex] + 1;
  this[key] = value;
};
queueMethods.dequeue = function () {
  // body...
  //get the first prop of obj
  var r = this[Object.keys(this)[0]];
  //delete
  delete this[Object.keys(this)[0]];
  // return the value of first prop
  return r;
};
queueMethods.size = function() {
  return Object.keys(this).length;
};


