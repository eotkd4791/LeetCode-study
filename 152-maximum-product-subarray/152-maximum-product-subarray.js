/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    const n = nums.length;
    const dp = JSON.parse(JSON.stringify(
        Array(n).fill(
            Array(2).fill(1)
        )
    ));
    
    for(let i=0; i<n; i++) {
        if(i===0) {
            dp[0][1] = nums[0];
        }
        dp[i][0] = nums[i];
    }
    
    for(let i=1; i<n; i++) {
        dp[i][0] = Math.max(
            nums[i],
            dp[i-1][0] * nums[i], 
            dp[i-1][1] * nums[i]
        );
        
        dp[i][1] = Math.min(
            nums[i],
            dp[i-1][0] * nums[i], 
            dp[i-1][1] * nums[i]
        );
    }
    
    return dp.reduce((acc, cur) => 
        Math.max(acc, ...cur), 
        Number.MIN_SAFE_INTEGER
    );
};