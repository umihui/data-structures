var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage.count++;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};
