/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = {}
    const map2 = {}
    nums1.forEach((num) => {
        if(map1[num] === null || map1[num] === undefined) {
            map1[num] = {count : 1, visited : false}
        }else map1[num].count += 1
    })

    nums2.forEach((num) => {
        if(map2[num] === null || map2[num] === undefined) {
            map2[num] = {count : 1, visited : false}
        }else map2[num].count += 1
    })

    const target = []
    nums2.forEach((num) => {
        if(map1[num] != null && map2[num] != null && !map1[num].visited && !map2[num].visited) {
            const min = Math.min(map1[num].count, map2[num].count)
            for(let i = 0; i < min; i++){
                target.push(num)
            }
            map1[num].visited = true
            map2[num].visited = true
        }
    })

    return target
};