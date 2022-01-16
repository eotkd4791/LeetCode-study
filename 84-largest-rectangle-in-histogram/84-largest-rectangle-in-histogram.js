/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    let answer = 0;
    const stack = [0];
    const n = heights.length;
    
    for(let i=0; i<heights.length; i++) {
        while(stack.length > 0 && heights[i] <= heights[getStackTop()]) {
            const currentHeight = heights[stack.pop()];
            const currentWidth = stack.length > 0 
                ? i - getStackTop() - 1
                : i;
            
            answer = Math.max(answer , currentHeight * currentWidth);
        }
        stack.push(i);
    }
    
    while(stack.length > 0) {
        const currentHeight = heights[stack.pop()];
        const currentWidth = stack.length > 0 ? n - getStackTop() - 1 : n;
            
            answer = Math.max(answer , currentHeight * currentWidth);
    }
    
    return answer;
    
    function getStackTop() {
        return stack[stack.length - 1];
    }
};
