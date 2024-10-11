/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length === 1) return nums[0]
    const map = {}
    let i = 0
    const numsL = nums.length
    while(i<numsL){
        if(map[nums[i]]){
            if(map[nums[i]] + 1 > numsL/2) return nums[i]
            else map[nums[i]] += 1
        }
        else map[nums[i]] = 1
        i++
    }
};