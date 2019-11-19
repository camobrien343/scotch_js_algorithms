/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/



function vowelsCounter(text) {
    text = text.split("");
    let re = /[aeiou]/gi;
    let result = text.filter(item => item.match(re))
    return result.length;
  }
  



module.exports = vowelsCounter;
