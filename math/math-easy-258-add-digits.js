/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num
    const numString = num.toString()
    const listNums = numString.split('')
    const target = listNums.reduce((acc, ch) => {
        acc += parseInt(ch)
        return acc
    }, 0)
    return addDigits(target)
};