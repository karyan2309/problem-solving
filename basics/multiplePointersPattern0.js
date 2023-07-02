// O(n*2)
// function sumZero(arr){
//     for(let i = 0; i < arr/length; i++){
//         for(let j = i+1; j< arr.length; j++){
//             if(arr[i]+arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }



// O(n) - refactored
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  
  console.log(sumZero([-4, -2, -1, 3, 4]));  // Output: [-4, 4]
  console.log(sumZero([-3, -2, 0, 1, 2]));   // Output: [-2, 2]