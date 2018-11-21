'use strict';

function grouping_count(collection) {

  //implement here
  let result = {};

  //implement here
  collection.forEach(element => {
    if (result[element] != null) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });
  return result;
}
module.exports = grouping_count;
