// Given a number, find its corresponding Roman numeral.

/*
Input : "IX"
Output : 9

Input : "XL"
Output : 40

Input :  "MCMIV"
Output : 1904


SYMBOL       VALUE
I             1
V             5
X             10
L             50
C             100
D             500
CM            900 
M             1000    

SYMBOL       VALUE
I             1
IV            4
V             5
IX            9
X             10
XL            40
L             50
XC            90
C             100
CD            400
D             500
CM            900 
M             1000    
*/
let str = "XL";
let str2 = "MCMIV";
function rom_to_int(num) {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let number = 0;
  for (let i = 0; i < num.length; i++) {
    let current = map[num[i]];
    let next = map[num[i + 1]];

    if (current < next) {
      number += next - current;
      i++;
    } else {
      number += current;
    }
  }
  return number;
}

// console.log(rom_to_int("IX"));
console.log(rom_to_int(str2));
