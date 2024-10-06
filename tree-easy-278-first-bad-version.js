/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        const recalculate = (n, start) => {
            if(n === start+1) return n
            let nT = Math.ceil((n+start) / 2)
            if(isBadVersion(nT)){
                return recalculate(nT, start)
            }else{
                return recalculate(n, nT)
            }
        }
        return recalculate(n, 0)
    };
};