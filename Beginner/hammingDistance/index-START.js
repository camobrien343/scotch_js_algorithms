/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/



function hammingDistance(stringA, stringB) {
    stringA = stringA.split('');
    stringB = stringB.split('');
    let diff = [];
    for (let i = 0; i < stringA.length; i++) {
        for (let j = i; j < stringA.length; j++ , i++) {
            if (stringA[i] !== stringB[j] || stringB[j] !== stringA[i]) {
                diff.push(stringA[i]);
            }
        }
    }
    return diff.length;
}



module.exports = hammingDistance
