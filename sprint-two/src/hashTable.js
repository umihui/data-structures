

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this._storage.bucket = [];
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.bucket = [k, v];
  
  // var bucket = this._storage[index];
  // console.log(this._storage);
  // if (!bucket) {
  //   bucket[0] = [k, v];
  // } else {
  //   bucket.push([k, v]);
  // }
  var tuple = [k, v];
  if (!this._storage.get(index)) {
    var node = [tuple];
    this._storage.set(index, node);
  } else {
    this._storage.get(index).push(tuple);
  }

 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage(index);
  // if (bucket.length === 1) {
  //   return bucket[0][1];
  // }
  result = undefined;
  var node = this._storage.get(index);
  if (node) {
    node.forEach(function(arr) {
      if (arr[0] === k) {
        result = arr[1];
      } 
    });
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


