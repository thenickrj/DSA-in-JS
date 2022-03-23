let s = ["h", "e", "l", "l", "o"];
let s2 = ["H", "a", "n", "n", "a", "h"];
let s3 = [
  "A", //0
  " ", //1
  "m", //2
  "a", //3
  "n", //4
  ",", //5
  " ", //6
  "a", //7
  " ", //8
  "p", //9
  "l", //10
  "a", //11
  "n", //12
  ",", //13
  " ", //14
  "a", //15
  " ", //16
  "c", //17
  "a", //18
  "n", //19
  "a", //20
  "l", //21
  ":", //22
  " ", //23
  "P", //24
  "a", //25
  "n", //26
  "a", //27
  "m", //28
  "a", //29
];

//Output    ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," "," ","a",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
//Expected  ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
console.log(revStr(s3));

function revStr(string) {
  let start = 0;
  let end = string.length - 1;
  let temp;

  while (start < end) {
    temp = string[start];
    string[start] = string[end];
    string[end] = temp;
    start++;
    end--;
  }
  return string;
}
