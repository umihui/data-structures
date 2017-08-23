var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //var keyArray = Object.keys(someInstance);
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    var length = Object.keys(storage).length - 1;
    storage[(length + 1)] = value;
    someInstance[(length+ 1)] = value;
  };

  someInstance.dequeue = function() {
    if (count >0) {
      count--;
    }
    if (Object.keys(someInstance).length !== 0) {
      var target = Object.keys(someInstance)[0];
      delete someInstance[target];
      return storage[target];
    } else {
      return undefined;
    }
  };

  someInstance.size = function() {
    return Math.max(count, 0);
  };

  return someInstance;
};
