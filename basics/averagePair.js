// INPUT: one array, one number
// LOGIC: Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average
// OUTPUT: true/false
// NOTE: Solve using Multiple Pointers method

function averagePair(arr, avg){
    let left = 0; 
    let right = arr.length - 1;
    const num = 2*avg;
    while(left < right){
        let sum = arr[left]+arr[right];
        if(sum === num){
            return true;
        } else if(sum > num){
            right--;
        } else left++;
    }
    return false
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false