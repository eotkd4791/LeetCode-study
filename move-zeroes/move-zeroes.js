/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    nums.sort((a, b) => {
        if(a !== 0 && b !== 0) {
            return 1;
        } else {
            if(a === 0) {
                return 1;
            } else {
                return -1;
            }
        }
    });
};