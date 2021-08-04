/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const answer = [];
    const visit = new Array(nums.length).fill(false);
    recur(0, []);
    return answer;
    
    function recur(index, arr) {
        answer.push(arr);
        for(let i=index; i<nums.length; i++) {            
            if(!visit[i]) {
                visit[i] = true;
                recur(i, arr.concat(nums[i]));
                visit[i] = false;
            }
        }
    }
};