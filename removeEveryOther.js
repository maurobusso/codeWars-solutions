function removeEveryOther(arr){
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }