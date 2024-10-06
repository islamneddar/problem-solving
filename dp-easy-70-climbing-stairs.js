/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const map = {}
    return climbStairsDp(n, map)
};

const climbStairsDp = (n, map) => {
    if(n in map) return map[n]
    if(n === 1 || n === 2) return n
    map[n] = climbStairsDp(n-1, map) + climbStairsDp(n-2, map)
    return map[n]
}