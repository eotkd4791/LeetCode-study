/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    let result = null;
    for(let i=0; i<nums.length; i++) {
        const index = Math.abs(nums[i]);
        if(nums[index] < 0) {
            result = nums[i];
            break;
        }
        nums[index] *= -1;
    }
    for(let i=0; i<nums.length; i++) {
        nums[i] = Math.abs(nums[i]);
    }
    return Math.abs(result);
};