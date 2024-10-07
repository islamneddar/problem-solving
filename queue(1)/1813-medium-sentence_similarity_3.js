/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */

// yoo is Haley, yoo my names is haley

// yoo haley


var areSentencesSimilar = function(s1, s2) {
    // s1 = Eating
    // s2 = Eating right now => true
    // s2' = right Eating now => false
    if(s1 === s2) return true

    // get string with less words
    // thing s1 thing => false

    // s1
    // s1 thing => true

    //         s1
    // thing s1 => true
    // s1 thing s1 => true

    const splited1 = s1.split(" ")
    const splited2 = s2.split(" ")
    while(splited1.length && splited2.length && splited1[0] === splited2[0]){
        splited1.shift()
        splited2.shift()
    }

    while(splited1.length && splited2.length && splited1[splited1.length - 1] === splited2[splited2.length -1]){
        splited1.pop()
        splited2.pop()
    }

    return splited1.length === 0 || splited2.length === 0
};