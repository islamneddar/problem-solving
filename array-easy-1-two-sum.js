function arrayEasy1TwoSum(nums, target){
    const hMap = {};
    for (let i =0; i<nums.length; i++) {
        if (target-nums[i] in hMap) {
            return [hMap[target-nums[i]], i];
        }
        hMap[nums[i]] = i;
    }
    return [-1, -1];
}