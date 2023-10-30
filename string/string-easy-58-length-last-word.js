/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //const word = s.trim()
    let index = word.length-1

    while(index > 0){
        if(word[index] !== " "){
            index--
        }else{
            return word.length - index -1
        };
    }
    return word.length
};