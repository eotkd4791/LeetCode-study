/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const answer = [];
    recur(0, []);
    return answer;
    
    function recur(index, arr) {
        answer.push(arr);
        for(let i=index; i<nums.length; i++) {            
            recur(i + 1, arr.concat(nums[i]));    
        }
    }
};