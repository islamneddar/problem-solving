/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    console.log(columnTitle.charCodeAt(0))
    let target = 0
    let index = 1
    columnTitle.split('').reverse().forEach((char, i) => {
        target += (char.charCodeAt(0) - 64) * index
        index *= 26
    })
    return target
};