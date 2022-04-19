let arr = [1, 3, 5, 5, 5, 5, 7, 123, 125];
let x = 7;
first_last(arr, x);

function first_last(arr, x) {
  let first, last;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      first = i;
      break;
    }
  }
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === x) {
      last = i;
      break;
    }
  }

  console.log("First Occurrence:" + first);
  console.log("Last Occurrence:" + last);
}
