/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const nums = this.nums
    let sum = 0
    for(let i = left; i <= right; i++){
        sum += nums[i]
    }
    return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */