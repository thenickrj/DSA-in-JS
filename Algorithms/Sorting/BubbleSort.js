let arr = [5, 4, 3, 2, 1];

console.log(bubbleSort(arr));

function bubbleSort(arr) {
  let n = arr.length;
  let temp;
  let flag = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if (!flag) {
      break;
    }
  }
  return arr;
}

// Best Case -> n
// Worst Case -> n^2
