/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);
    
    for(let i=0; i<temperatures.length; i++) {
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }
    while(stack.length > 0) {
        answer[stack.pop()] = 0;
    }
    return answer;
};