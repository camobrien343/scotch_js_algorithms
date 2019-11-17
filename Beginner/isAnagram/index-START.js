/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/




function isAnagram(stringA, stringB) {
    stringA = stringA.split('');
    stringB = stringB.split('');

    if (stringA.length !== stringB.length) {
        return false;
    } else {
        let codeA = stringA.map(x => x.charCodeAt());
        let codeB = stringB.map(x => x.charCodeAt());
        let x = codeA.filter(item => codeB.includes(item));

        if (x.length !== codeA.length) {
            return false;
        } else {
            return true;
        }
    }
}


module.exports = isAnagram
