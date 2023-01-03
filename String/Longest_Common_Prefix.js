// Longest Common Prefix

// Medium
/*
The longest common prefix for an array of strings is the common prefix between 2 most dissimilar strings.
For example, in the given array {“apple”, “ape”, “zebra”}, there is no common prefix because
the 2 most dissimilar strings of the array “ape” and “zebra” do not share any starting characters. 

Input: {"geeksforgeeks", "geeks", "geek", "geezer"}
Output: "gee"

Input: {"apple", "ape", "april"}
Output: "ap"

*/

var str = ["geeksforgeeks", "geeks", "geek", "geezer"];
function LCP(a) {
  let size = a.length;

  /* if size is 0, return empty string */
  if (size == 0) return "";

  if (size == 1) return a[0];

  /* sort the array of strings */
  a.sort();
  console.log(a);
  /* find the minimum length from first and last string */
  let end = Math.min(a[0].length, a[size - 1].length);

  /* find the common prefix between the first and
           last string */
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let pre = a[0].substring(0, i);
  return pre;
}

console.log(isLCP(str));

/*
Time Complexity: O(MAX * n * log n ) where n is the number of strings in the array and 
MAX is maximum number of characters in any string. 
Please note that comparison of two strings would take at most O(MAX) time and for sorting n strings,
 we would need O(MAX * n * log n ) time.

Space Complexity: O(1) 
*/
