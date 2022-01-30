/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(0);
    
    for(let i=0; i<n; i++) {
        dp[i] = nums[i];
    }
    
    for(let i=0; i<n; i++) {
        if(i >= 1) {
            dp[i] = Math.max(dp[i], dp[i-1]);
        }
        if(i >= 2) {
            dp[i] = Math.max(dp[i-2] + nums[i], dp[i]);
        }
        if(i >= 3) {
            dp[i] = Math.max(dp[i-3] + nums[i], dp[i]);
        }
    }
    return Math.max(...dp);
};