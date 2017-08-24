var Stack = function() {


  this;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  // body...
  var key = Object.keys(this).length + 1;
  this[key] = value;
};

Stack.prototype.pop = function() {
  var keyArray = Object.keys(this);

  var r = this[keyArray.length];
  delete this[keyArray.length];
  return r;
  // body...
};

Stack.prototype.size = function () {
  // body...
  return Object.keys(this).length;
};

var instance = new Stack();

