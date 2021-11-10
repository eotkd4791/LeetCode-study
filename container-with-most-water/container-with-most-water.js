/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    const n = height.length;
    let result = 0;
    
    let left = 0;
    let right = n - 1;
    
    while(left < right) {
        result = Math.max(result, Math.min(height[left], height[right]) * (right - left));
        
        height[left] >= height[right]
            ? right--
            : left++;
    }
    return result;
};