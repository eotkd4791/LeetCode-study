/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    const colors = Array(3).fill(0);
    
    for(const num of nums) {
        colors[num]++;    
    }
    
    let colorIndex = 0;
    let index = 0;
    let count = 0;
    
    while(index < nums.length) {
        if(colors[colorIndex] > 0) {
            colors[colorIndex]--;
            nums[index++] = colorIndex;
        } else {
            colorIndex++;
        }
    }
};