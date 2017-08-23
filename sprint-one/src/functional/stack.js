var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
//add count like 2 to 3
    storage.count++;
//push value into someInstance
    someInstance[storage.count] = value;
  };

  someInstance.pop = function() {
//minus count like 3 to 2 
//if count === 0 , do not minus
    var result = someInstance[storage.count];
    delete someInstance[storage.count];
    if (storage.count > 0) {     
      storage.count--;
    }
//delete the last value in someInstance
//return the last value in someInstance
    return result;
  };

  someInstance.size = function() {
    return storage.count;
  };

  return someInstance;
};
