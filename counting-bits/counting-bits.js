/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    if(n === 0) return [0];
    
    const dp = [0, 1];
    for(let i=2; i<=n; i++) {
        dp[i] = dp[Math.floor(i / 2)] + dp[i % 2];
    }
    return dp;
};