'use strict';
function times4Plus1(element){
  return (element*4)+1;
}

function map(collection,fn){
  for(let i=0;i<collection.length;i++){
    collection[i] = fn(collection[i]);
  }
  return collection;
}

var map_to_four_multiples_add_one = function(collection){
  return map(collection,times4Plus1);
};

module.exports = map_to_four_multiples_add_one;
