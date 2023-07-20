function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(arr, minIndex, i);
    }
  }

  return arr;
}

// Test cases
console.log(selectionSort([2, 4, 3, 7, 2, 4, 5, 7, 1])); // Output: [1, 2, 2, 3, 4, 4, 5, 7, 7]
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(selectionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]
console.log(selectionSort([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]
