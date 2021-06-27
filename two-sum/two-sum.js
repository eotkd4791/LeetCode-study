/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    const result = [];
    
    nums.forEach((num, i) => {
        const diff = target - num;
        if(num in map) {
            result.push(map[num], i);
        } else {
            map[diff] = i;
        }
    });
    return result;
};