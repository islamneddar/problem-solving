// 15 min time completion
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = {}
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined) {
            const exist = map[nums[i]].some(index => Math.abs(index - i) <= k)
            if(exist) return true
            else {
                map[nums[i]].push(i)
            }
        }else map[nums[i]] = [i]
    }
    return false
};


// 2nd attempt

var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        // Check if the difference betweend duplicates is less than k
        if (idx - hasmap.get(nums[idx]) <= k) {
            return true;
        }
        hasmap.set(nums[idx], idx);
    }
    return false;
};