/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function(n) {
    const dp = createSquare();
    return recur(n);
    
    function recur(num) {
        if(dp[num] > 0) {
            return dp[num];
        }
        const loop = Math.floor(num/2);
        let leastCount = num;
        for(let i=1; i<=loop; i++) {
            leastCount = Math.min(leastCount, recur(num - i) + recur(i));
        }
        return dp[num] = leastCount;
    }
    
    function createSquare() {
        const result = Array(n).fill(0);
        for(let i=1; i<=n; i++) {
            const square = i * i;
            if(square <= n) {
               result[square] = 1;
            }
        }
        return result;
    }
};