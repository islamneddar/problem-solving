/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
    // Remove spaces and punctuation, convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');

    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
};