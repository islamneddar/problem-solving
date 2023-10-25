/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNumber = nums[0]
    let k = 1
    for(let i = 1; i < nums.length; i+=1){
        if(nums[i] > currentNumber){
            currentNumber = nums[i]
            nums[k] = nums[i]
            k+=1
        }
    }
    return k
};