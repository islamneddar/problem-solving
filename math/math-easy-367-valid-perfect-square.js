/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let count = 1
    while(true){
        const square = count * count
        if(square === num) return true
        if(square > num) return false
        count++
    }
};