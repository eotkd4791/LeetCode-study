function topKFrequent(nums: number[], k: number): number[] {
    const numberCount = getNumberCount();
    const frequency = getFrequency();
    return getTopKFrequent();
    
    function getTopKFrequent() {
        let result = [];
        for(let i=frequency.length -1 ; i>= 0; i--) {
            if(isCompleteSelecting()) {
                return result;
            }
            frequency[i] && (result = extractFrequency(i, result));
        }
        return result;
        
        function extractFrequency(i, listKFrequency) {
            for(let j=0; j<frequency[i].length; j++) {
                k--;
                listKFrequency.push(frequency[i][j]);
                if(isCompleteSelecting()) {
                    break;
                }
            }
            return listKFrequency;
        }
        
        function isCompleteSelecting() {
            return k === 0;
        }
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