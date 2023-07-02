// Using Frequency Counter Method
// Return weather the two arrays have same elements or not

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let fc1 = {};
    let fc2 = {};
    for (let val of arr1) {
      fc1[val] = (fc1[val] || 0) + 1;
    }
    for (let val of arr2) {
      fc2[val] = (fc2[val] || 0) + 1;
    }
    for (let key in fc1) {
      if (!(key in fc2)) {
        return false;
      }
      if (fc1[key] !== fc2[key]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(same([1, 2, 3, 1, 2], [1, 2, 3, 1, 2]));
  