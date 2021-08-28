/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const numberCount = getNumberCount();
    const frequency = getFrequency();
    return getTopKFrequent();
    
    function getTopKFrequent() {
        const result = [];
        for(let i=frequency.length -1 ; i>= 0; i--) {
            if(k === 0) {
                return result;
            }
            if(frequency[i]) {
                for(let j=0; j<frequency[i].length; j++) {
                    k--;
                    result.push(frequency[i][j]);
                    if(k === 0) {
                        return result;
                    }
                }   
            }
        }
        return result;
    }
    
    function getFrequency() {
        const result = [[]];
        for(const num in numberCount) {
            const key = numberCount[num];
            result.hasOwnProperty(key)
                ? result[key].push(num)
                : result[key] = [num];
        }    
        return result;
    }
    
    function getNumberCount() {
        const result = {};
        for(let i=0; i<nums.length; i++) {
            const key = nums[i];
            result.hasOwnProperty(key)
                ? result[key]++
                : result[key] = 1;
        }
        return result;
    }
};