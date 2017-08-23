var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  
 
  someInstance.enqueue = function(value) {
    var keyArray = Object.keys(storage);
    var newKey = keyArray[keyArray.length - 1] + 1;
    storage[newKey] = value;
    
  };

  someInstance.dequeue = function() {
    var result = storage[Object.keys(storage)[0]]; 
    
    delete storage[Object.keys(storage)[0]];
    return result;        
  };
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
