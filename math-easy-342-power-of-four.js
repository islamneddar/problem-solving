/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) return false
    if(n === 1) return true
    let target = 4
    while(true){
        if(n < target){return false}
        if(n === target) return true
        target*=4
    }
};