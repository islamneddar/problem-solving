/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length < 2) return nums[0]
    nums.sort()
    const majorityNumber = nums.length / 2
    let target = nums[0]
    let counter = 1
    let i =1
    while( i < nums.length){
        const currentNumber = nums[i]
        if(currentNumber === target){
            counter++
            if(counter > majorityNumber){
                return target
            }
        }else {
            target = currentNumber
            counter = 1
        }
        i++
    }

};