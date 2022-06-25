// let arr = [2, 4, 5, 6, 7, 8];
let arr = [19, 14, 2, 17, 4, 12, 20, 7, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];

console.log(missingNum(arr));

function missingNum(arr) {
  let missNum;
  let sum = 0;
  let n = arr.length + 1;
  for (let i in arr) {
    sum = sum + arr[i];
  }
  let sum_of_n = Math.floor((n * (n + 1)) / 2);
  missNum = sum_of_n - sum;
  return missNum;
}

// Time complexity O(n)
