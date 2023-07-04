// INPUT: array of numbers, single number
// LOGIC: find subarray with TARGET nums within array that makes for the highest sum
// OUTPUT: largest number
// NOTE: Solve using sliding window method

const maxSubarraySum = (arr, target) => {
    if(target > arr.length){return null}
    let maxSum = 0;
    let tempSum = 0;
    for (var i=0; i<target; i++){
        maxSum = maxSum + arr[i];
      
    }
    tempSum = maxSum
    for (var j=1; j<=(arr.length-target); j++){
        tempSum = tempSum-arr[j-1]+arr[j+target-1]
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

