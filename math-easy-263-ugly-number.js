/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 1) return true
    if (n <= 0) return false

    while (n !== 0) {
        if (n % 5 === 0) {
            return isUgly(n / 5)
        } else if (n % 3 === 0) {
            return isUgly(n / 3)
        } else if (n % 2 === 0) {
            return isUgly(n / 2)
        }
        return false
    }
};