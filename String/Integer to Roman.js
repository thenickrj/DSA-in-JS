// Given a number, find its corresponding Roman numeral.

/*
Input : 9
Output : IX

Input : 40
Output : XL

Input :  1904
Output : MCMIV

Input : 9
Output : IX

Input : 40
Output : XL

Input :  1904
Output : MCMIV

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
let num = 9;
function intToRoman(num) {
  // Create a dictionary of Roman numeral values
  const romanValues = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  // Initialize the result
  let result = "";

  // Loop through the values in the dictionary
  for (let i = 0; i < romanValues.length; i++) {
    // Get the current value and numeral
    const value = romanValues[i].value;
    const numeral = romanValues[i].numeral;

    // While the input number is greater than or equal to the current value,
    // add the current numeral to the result and subtract the current value from the input number
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

const romanNumeral = intToRoman(1904);
console.log(romanNumeral); // Outputs: "XIV"
