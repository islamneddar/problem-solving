/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const a = s.trim().split(" ")
    return a[a.length-1].length
};