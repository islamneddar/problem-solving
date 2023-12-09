/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false
    if(n === 1) return true
    let target = 3
    while(true){
        if(n < target){return false}
        if(n === target) return true
        target*=3
    }
};