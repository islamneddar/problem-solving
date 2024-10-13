/**
 * @param {number[]} prices
 * @return {number}
 */

/*
idea:
- loop through the prices
- keep track of the lowest price
- keep track of the maximum profit
- if the current price is lower than the lowest price, update the lowest price
- if the current price is higher than the lowest price, calculate the profit
- if the profit is higher than the maximum profit, update the maximum profit
- return the maximum profit
 */
var maxProfit = function(prices) {
    let lp = 0
    let max = 0
    for(let i = 1; i < prices.length; i++){
        const diff = prices[i] - prices[lp]
        if(diff > max) max = diff
        if(diff) lp = i
    }
    return max
};