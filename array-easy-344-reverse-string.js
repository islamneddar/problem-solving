/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const sLength = s.length
    const mid = Math.floor(s.length / 2)

    for(let i = 0; i < mid; i++){
        const tmp = s[i]
        s[i] = s[sLength - 1 - i]
        s[sLength-1-i] = tmp
    }

    return s
};