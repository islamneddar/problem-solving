/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = {}
    nums1.forEach((num) => {
        if(map[num] === null || map[num] === undefined) {
            map[num] = num
        }
    })

    const target = new Set()
    nums2.forEach((num) => {
        if(map[num] !== null && map[num] !== undefined) target.add(num)
    })

    return Array.from(target)
};