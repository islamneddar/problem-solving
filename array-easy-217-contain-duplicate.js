// 3min time completion

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(map[num]) return true
        else map[num] = 1
    }
    return false
};