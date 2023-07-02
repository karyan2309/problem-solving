function sameFrequency(num1, num2) {
    var obj1 = {};
    for (var i of num1.toString()) {
      obj1[i] = (obj1[i] || 0) + 1;
    }
    
    var obj2 = {};
    for (var j of num2.toString()) {
      obj2[j] = (obj2[j] || 0) + 1;
    }
  
    for (var z in obj1) {
      if (obj1[z] != obj2[z])
        return false;
    }
  
    return true;
  }
  
  var result = sameFrequency(123, 321);
  console.log(result); // Output: true
  
  result = sameFrequency(123, 345);
  console.log(result); // Output: false
  