/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let countZero = 0
    let index = 0
    while(index < nums.length-countZero){
        const currentNumber = nums[index]
        if(currentNumber === 0){
            nums.splice(index, 1)
            nums.push(0)
            countZero++
        }else index++
    }

    return nums
};