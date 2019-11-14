/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(str) {
    str = str.split("");
    let count = 0, most_recurring = 1, result;
  
    for ( let i=0; i<str.length; i++ ) {
      for ( let j=i; j<str.length; j++) {
        if ( str[j] === str[i] ) {
          count++;
            if ( most_recurring < count ) {
              most_recurring = count;
              result = str[i];
            }
        }
      }
      count = 0;
    }
    console.log(`${result} was listed a total of ${most_recurring} times.`)
    return result;
  }
  



module.exports = maxRecurringChar;