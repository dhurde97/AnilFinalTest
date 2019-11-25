/*
There's a string parameter which a function will accept. You have to replace all the vowels with the letter 'X'. Return the final string after replacement.
Input: “consultadd”
OUTPUT: cXnsXltXdd
*/

let str='consultadd';
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, 'X');
  }

  
  console.log(removeVowels(str));