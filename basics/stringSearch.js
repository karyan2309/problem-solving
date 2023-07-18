function stringSearch1(mainStr, subStr) {
    let count = 0;
    
    for (let i = 0; i <= mainStr.length - subStr.length; i++) {
      let j = 0;

      while (j < subStr.length && mainStr[i + j] === subStr[j]) {
        j++;
      }
      
      if (j === subStr.length) {
        count++;
      }
    }
    
    return count;
  }
  
  const mainStr = "I am Aryan am";
  const subStr = "am";
  console.log(stringSearch1(mainStr, subStr)); // Output: 2
  

function stringSearch2(mainStr, subStr) {
    let matchCount = 0;
    
    for (let i = 0; i < mainStr.length; i++) {
      let isMatch = true;
      
      for (let j = 0; j < subStr.length; j++) {
        if (subStr[j] !== mainStr[i + j]) {
          isMatch = false;
          break;
        }
      }
      
      if (isMatch) {
        matchCount++;
      }
    }
    
    return matchCount;
  }
  

  console.log(stringSearch2(mainStr, subStr)); // Output: 2

  
  