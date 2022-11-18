function linearSearch(arr, k) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      index = i;
    }
  }
  return index ? index : "404";
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let target = 4;
console.log(linearSearch(arr, target));
