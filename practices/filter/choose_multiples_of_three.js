'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  let result = [];
  collection.forEach(element => {
    if(element%3==0){
      result.push(element); 
    }
  });
  return result;
}

module.exports = choose_multiples_of_three;
