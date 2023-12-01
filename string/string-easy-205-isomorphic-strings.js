/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = {}
    const mapT = {}
    for(let i = 0; i<s.length; i++){
        const charS = s[i]
        const charT = t[i]
        if(mapS[charS]){
            if(mapS[charS] !== charT) return false
        }else mapS[charS] = charT

        if(mapT[charT]){
            if(mapT[charT] !== charS) return false
        }else mapT[charT] = charS
    }
    return true
};