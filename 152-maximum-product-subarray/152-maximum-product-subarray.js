/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    let answer = Math.max(...nums);
    
    let currentMax = 1;
    let currentMin = 1;
    
    for(const num of nums){
       const temp = currentMax * num;
        
        currentMax = Math.max(temp, num * currentMin, num);
        currentMin = Math.min(temp, num * currentMin, num);
		
        answer = Math.max(answer, currentMax);
    }
    return answer;
};