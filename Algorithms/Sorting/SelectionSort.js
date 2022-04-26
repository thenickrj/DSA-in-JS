let arr = [5, 4, 3, 2, 1];

console.log(selectionSort(arr));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
