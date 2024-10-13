/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 idea :
 */

var maxProfit = function(prices) {
    let lp = 0
    let max = 0
    let tempMax = 0

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < prices[i-1]){
            max += tempMax
            tempMax = 0
            lp = i
        }
        const diff = prices[i] - prices[lp]
        if(diff > tempMax){
            tempMax = diff
        }
    }
    return max + tempMax
};



var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};