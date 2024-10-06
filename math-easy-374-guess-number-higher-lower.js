/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    function guessNumberDicho(start, end){
        let mid = Math.ceil((end+start)/2)
        const resultGuess = guess(mid)
        switch (resultGuess){
            case -1 : return guessNumberDicho(start, mid);
            case 1 : return guessNumberDicho(mid, end)
            case 0 : return mid
        }

    }
    return guessNumberDicho(0, n)
};