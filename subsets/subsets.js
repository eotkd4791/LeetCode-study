/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const answer = [[]];
    const set = new Set();
    recur(0, [], 0);
    return answer;
    
    function recur(index, arr, visit) {
        for(let i=index; i<nums.length; i++) {
            const check = visit|(1<<i);
            if(!set.has(check)) {
                set.add(check);
                const next = arr.concat(nums[i]);
                answer.push(next);
                recur(index + 1, next, check);
            }
        }
    }
};