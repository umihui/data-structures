var Stack = function() {
  var someInstance = {};
  var storage = {};
  //var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
//add count like 2 to 3
    //count++;
//push value into someInstance
    //storage[count] = value;
    var key = Object.keys(storage).length + 1;
    storage[key] = value;
  };

  someInstance.pop = function() {
//minus count like 3 to 2 
//if count === 0 , do not minus
    //var result = storage[count];
    var last = Object.keys(storage)[Object.keys(storage).length - 1];
    var result = storage[last];
    delete storage[last];
    // delete storage[count];
    // if (count > 0) {     
    //   count--;
    // }
//delete the last value in someInstance
//return the last value in someInstance
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
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