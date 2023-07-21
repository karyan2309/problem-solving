function swap(arr, left, right) {
  return ([arr[left], arr[right]] = [arr[right], arr[left]]);
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
  return arr;
}

const sortedArray = insertionSort([1, 5, 3, 6, 2, 8, 4, 12, 7]);
console.log(sortedArray);
