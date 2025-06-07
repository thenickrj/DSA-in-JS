let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4];

console.log(reversing(arr));
function reversing(arr) {
  let start = 0;
  let end = arr.length - 1;
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

function reverseArray(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; // Cleaner swap
    start++;
    end--;
  }
  return arr;
}
