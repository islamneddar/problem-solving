/**
 * @param {character[]} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const listVowels = ["a","e","i","o","u","A","E","I","O","U"]
    const sList = s.split('')
    const listVowelsInS = sList.reduce((acc, char, index)=>{
        if(listVowels.includes(char)) acc.push({char, index})
        return acc
    },[])
    const listVowelsInSLength = listVowelsInS.length
    const mid = Math.floor(listVowelsInS.length/2)
    let i = 0
    while(i < mid){
        const source = listVowelsInS[i]
        const dist = listVowelsInS[listVowelsInSLength-i-1]
        sList[parseInt(source.index)] = dist.char
        sList[parseInt(dist.index)] = source.char
        i++
    }
    return sList.join('')
};