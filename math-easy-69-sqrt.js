// use binary search to find the square root of a number

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x===1) return x

    for(let i = 0; i <= x; i++){
        const pow = i*i
        if(pow === x) return i
        if(pow > x){
            return i-1
        }
    }
};