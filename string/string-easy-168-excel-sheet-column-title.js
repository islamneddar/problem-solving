/**
 * @param {number} columnNumber
 * @return {string}
 */



var convertToTitle = function(columnNumber) {
    const alphaArray = genCharArray("A", "Z")
    const mapAlpha = {}
    alphaArray.forEach((char, index) => {
        mapAlpha[index+1] = char
    })

    function recusiveDiv(columnNumber, target){
        console.log("columnNumber => ",columnNumber)
        if(columnNumber <= 26){
            return target += mapAlpha[columnNumber]
        }
        let div = Math.floor(columnNumber / 26)
        let modulo = columnNumber % 26
        console.log("modulo => ", modulo)
        if(modulo === 0) {
            modulo = 26
            div = div-1
        }
        target += mapAlpha[modulo]
        return recusiveDiv(div, target)
    }


    const columnTarget = recusiveDiv(columnNumber, "")
    return columnTarget.split("").reverse().join("")

};

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}