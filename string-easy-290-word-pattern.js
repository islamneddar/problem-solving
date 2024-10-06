/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const patternA = pattern.split('')
    const sA = s.split(' ')
    const patternALength = patternA.length
    const sALength = sA.length

    if(patternALength !== sALength) return false
    const mapPatternToS = {}
    const mapSToPattern = {}
    for(let i = 0; i < patternALength; i++){

        const patternChar = `${patternA[i]}`
        const sWord = `${sA[i]}`

        const mapPatternChar = mapPatternToS[patternChar]
        const mapSWord = mapSToPattern[sWord]

        const conditionPatternS = mapPatternChar === null || mapPatternChar === undefined
        const conditionSPattern = mapSWord === null || mapSWord === undefined

        if(conditionPatternS){
            mapPatternToS[patternChar] = sWord
        }else{
            if(mapPatternChar !== sWord) {
                console.log('mapPatternChar => ', mapPatternChar, sWord)
                return false
            }
        }

        if(conditionSPattern) {
            console.log("patternChar", patternChar)
            mapSToPattern[sWord] = patternChar
        }else{
            if(mapSWord !== patternChar) {
                console.log('mapSWord => ', mapSWord, patternChar)
                return false
            }
        }
    }
    return true
};