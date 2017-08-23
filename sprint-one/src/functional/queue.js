var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  //var keyArray = Object.keys(someInstance);

  // Implement the methods below
  var count = 0;
  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
    
  };

  someInstance.dequeue = function() {
    var result = storage[Object.keys(storage)[0]]; 
    if (count > 0) {
      count--;
    
    }
    delete storage[Object.keys(storage)[0]];
    return result;        
  };
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
