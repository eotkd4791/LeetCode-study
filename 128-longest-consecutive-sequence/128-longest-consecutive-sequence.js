/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    let answer = 0;
    const map = {};
    
    for(const num of nums) {
        map[num] = true;
    }
    
    for(const key in map) {
        if(!map.hasOwnProperty(Number(key) - 1)) {
            let count = 0;
            let num = Number(key);
            
            while(map[num]) {
                count++;
                num++;
            }
            answer = Math.max(answer, count);
        }
    }
    return answer;
};