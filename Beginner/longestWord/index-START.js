/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format.
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    text = text.split(' ');
    let count = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i].length > count.length) {
            count = text[i];
        }
    }
    return count;
}


module.exports = longestWord
