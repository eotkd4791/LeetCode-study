/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let result = 0;
    let buy = prices[0];
    for(const price of prices) {
        if(buy < price) {
            result = Math.max(result, price - buy);
        } else {
            buy = price;
        }
    }
    return result;
};