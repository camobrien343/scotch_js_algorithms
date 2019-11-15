/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



function palindromeChecker(text) {

    const original = text.split('');
    const reverse = [...original].reverse();
    // console.log(original);
    // console.log(reverse);
    for (let i=0; i<original.length; i++) {
      for (let j=i; j<original.length; j++, i++) {
  
        console.log('i: ' + original[i] + ' j: ' + reverse[j]);
        
        if (original[i] !== reverse[j]) {
          return false;
        }
      }
    }
    return true;
  }


module.exports = palindromeChecker;