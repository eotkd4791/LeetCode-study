/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const result = [];
    const visit = new Array(nums.length).fill(false);
    
    recur([]);
    
    return result;
    
    function recur(arr) {
        if(arr.length === nums.length) {
            result.push(arr);
            return;
        }
        
        for(let i=0; i<nums.length; i++) {
            if(!visit[i]) {
                visit[i] = true;
                recur(arr.concat(nums[i]));
                visit[i] = false;
            }
        }
    }
};