// INPUT: one array
// LOGIC: Return odd values of the array
// OUTPUT: array
// NOTE: Solve using pure recursion

function collectOddValues(arr){
    let newArr = [];
    if(arr.length === 0){
        return newArr;
    }
    if(arr[0]%2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,4,5,6,7,8,9,43,64,67,388]); //[1, 5, 7, 9, 43, 67]