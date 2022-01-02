/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let max = -987654321;
    let sum = 0;
    
    nums.forEach((num) => {
        if(sum < 0) {
            sum = 0;
        }
        sum += num;
        max = Math.max(max, sum);
    });
    
    return max;
};