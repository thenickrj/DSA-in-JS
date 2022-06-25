// let arr = [5, 7, 1, 2, 8, 4, 3];
let arr = [5, 7, 1, 8, 4];

console.log(sum_check(arr));

function sum_check(arr) {
  let target = 10;
  let sum_find = {};

  for (let i in arr) {
    if (10 - arr[i] in sum_find) {
      return true;
    } else {
      sum_find[arr[i]] = 10 - arr[i];
    }
  }
  return false;
}

/*
Runtime Complexity: Linear, O(n)

Memory Complexity: Linear, O(n)

*/
