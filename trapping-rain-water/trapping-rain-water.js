/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    let result = 0;
    let leftTemp = 0;
    let rightTemp = 0;
    const n = height.length;
    const left = Array(n).fill(0);
    const right = Array(n).fill(0);
    
    for(let i=0; i<n; i++) {
        leftTemp = Math.max(leftTemp, height[i]);
        left[i] = leftTemp;
    }
    
    for(let i=n-1; i>=0; i--) {
        rightTemp = Math.max(rightTemp, height[i]);
        right[i] = rightTemp;
    }
    
    for(let i=0; i<n; i++) {
        result += Math.min(left[i], right[i]) - height[i];
    }
    return result;
};