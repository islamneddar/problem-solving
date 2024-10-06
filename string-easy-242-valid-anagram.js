/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sLength = s.length
    const tLength = t.length
    if(sLength !== tLength) return false
    const mapS = {}
    const mapT = {}

    s.split("").forEach((char) => {
        // create map of s with count char
        if(mapS[char] == null) mapS[char] = 1
        else mapS[char]++
    })

    t.split("").forEach((char) => {
        // create map of t with count char
        if(mapT[char] == null) mapT[char] = 1
        else mapT[char]++
    })

    return Object.keys(mapS).every((char) => {
        return mapS[char] === mapT[char]
    })
};