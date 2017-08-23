var Stack = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
//add count like 2 to 3
    count++;
//push value into someInstance
    storage[count] = value;
  };

  someInstance.pop = function() {
//minus count like 3 to 2 
//if count === 0 , do not minus
    var result = storage[count];
    delete storage[count];
    if (count > 0) {     
      count--;
    }
//delete the last value in someInstance
//return the last value in someInstance
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
/*
 res = a
si = {
  
  push : f,
  pop : f,
  size :f

 
}

storage ={
  count : 0

}




*/