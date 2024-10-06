/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1
    let done = false
    while(index >= 0 && !done){
        if(digits[index] < 9) {
            digits[index]+=1
            done = true
        }
        else {
            digits[index] = 0
            if(index === 0){
                digits.unshift(1)
                done = true
            }
        }
        index--
    }
    return digits
};