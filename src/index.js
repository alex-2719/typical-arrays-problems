
exports.min = function min (array) {
  if (Array.isArray(array)){
    if (array.length != 0){
      return array.reduce(function (prev, item){
        return prev < item ? prev : item; 
      },0);
    }
    else {
      return 0;
    }

  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array)){
    if (array.length != 0){
      return array.reduce(function (prev, item){
        return prev > item ? prev : item; 
      },0);
    }
    else {
      return 0;
    }

  }
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array)){
    if (array.length != 0){
      return array.reduce(function (prev, item){
        return prev + item; 
      },0) / array.length;
    }
    else {
      return 0;
    }

  }
  else {
    return 0;
  }
}
