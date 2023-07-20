function bubbleSort(arr) {
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    
    if (noSwaps) break;
  }

  return arr;
}

const sortedArray = bubbleSort([2, 6, 3, 8, 5, 1, 6, 4]);
console.log(sortedArray);
