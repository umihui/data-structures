var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);

  return obj;
};


var stackMethods = {};

stackMethods.push = function (value) {
  // body...
  var key = Object.keys(this).length + 1;
  this[key] = value;

};

stackMethods.pop = function () {
  var keyArray = Object.keys(this);
  if (keyArray.length === 0) {
    return undefined;
  } else {
    var r = this[keyArray.length];
    delete this[keyArray.length];
    return r;
  }
  // body...
};

stackMethods.size = function() {
  return Object.keys(this).length;

};