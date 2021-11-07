/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let result = 0;
    const n = prices.length;
    let min = prices[0];
    let max = prices[n-1];
    const leftMin = Array(n).fill(100001);
    const rightMax = Array(n).fill(0);
    
    for(let i=0; i<n; i++) {
        min = Math.min(prices[i], min);
        leftMin[i] = min;
    }
    
    for(let i=n-1; i>=0; i--) {
        max = Math.max(prices[i], max);
        rightMax[i] = max;
    }
    
    for(let i=0; i<n; i++) {
        result = Math.max(result, rightMax[i] - leftMin[i]);
    }
    
    return result;
};