// need impovement
var maxProfit = function(prices) {
    const priceLength = prices.length
    if(priceLength < 2){
        return 0
    }
    let p1 = 0
    let p2 = 1
    let max = 0
    while(p1 <= p2 && p2 < priceLength){
        const difference = prices[p2] - prices[p1]
        if(difference < 0) {
            p1 = p2
        }
        else{
            if( difference > max) {
                max = difference
            }
        }
        p2 +=1
    }
    return max
};