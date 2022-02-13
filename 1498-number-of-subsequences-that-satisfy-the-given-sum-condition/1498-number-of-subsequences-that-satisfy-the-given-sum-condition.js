/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = nums.length - 1;
    let answer = 0;
    
    const MOD = Math.pow(10, 9) + 7;
    const pows = [];
    
    let p = 1;
    for(let i=0; i<nums.length; i++) {
        pows.push(p);
        p = p * 2 % MOD;
    }
    
    while(left <= right) {
        const sum = nums[left] + nums[right];
        
        if(sum > target) {
            right--;
        } else {
            answer += pows[right - left];
            answer %= MOD;
            left++;
        }
    }
    return answer % MOD;
};