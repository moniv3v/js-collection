'use strict';

function times2(element){
  return element*2;
}

function map(collection,fn){
  for(let i=0;i<collection.length;i++){
    collection[i] = fn(collection[i]);
  }
  return collection;
}

function map_to_even(collection){
  return map(collection,times2);
}
module.exports = map_to_even;
