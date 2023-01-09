// Find the minimum distance between the given two words

/*
Given a list of words followed by two words, the task is to find the minimum distance between the given two words in the list of words.

Examples:

Input: S = { “the”, “quick”, “brown”, “fox”, “quick”}, word1 = “the”, word2 = “fox”
Output: 3
Explanation: Minimum distance between the words “the” and “fox” is 3

Input: S = {“geeks”, “for”, “geeks”, “contribute”,  “practice”}, word1 = “geeks”, word2 = “practice”
Output: 2
Explanation: Minimum distance between the words “geeks” and “practice” is 2
*/

// var str = ["the", "quick", "brown", "fox", "quick"];
// var word1 = "the";
// var word2 = "fox";
var str = ["geeks", "for", "geeks", "contribute", "practice"];
var word1 = "geeks";
var word2 = "practice";
function findDistance(str, word1, word2) {
  var d1 = -1;
  var d2 = -1;
  var ans = Number.MAX_VALUE;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == word1) {
      d1 = i;
    } else if (str[i] == word2) {
      d2 = i;
    }
  }
  return Math.min(ans, Math.abs(d1 - d2));
}

console.log(findDistance(str, word1, word2));

// Time Complexity: O(N)
// Auxiliary Space: O(1)
