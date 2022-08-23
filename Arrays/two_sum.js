/*
Given an array A and an integer target, find the indices of the two numbers in the array whose sum is equal to the given target.

Note: The problem has exactly one solution. Do not use the same element twice.


Input Format
The first line contains an integer ‘T’ denoting the number of test cases.

For each test case, the input has three lines:

An integer ’n’ denoting the length of the array.
n space-separated integers denoting the elements of the array.
An integer ‘target’ denoting the target value.
Output Format
For each test case, the output has two space-separated integers ‘i’ and ‘j’ denoting the indices of the array.
*/

let arr = [1, 3, 3, 4];
let arr2 = [8, 2, 10, 4, 1, 3];
let arr3 = [2, 4, 2, 3, 2];
console.log(sum(arr, 5));

function sum(arr, target) {
  let values = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(target - arr[i])) {
      return [i, arr.indexOf(target - arr[i])];
    }
  }
  return false;
}

let twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i); // insert an element into the table
  }
};

console.log(twoSum(arr3, 7));
