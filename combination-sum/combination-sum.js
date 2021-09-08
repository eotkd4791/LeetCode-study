/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const result = [];
    const n = candidates.length;
    const check = usingCount();
    
    recur(0, target, []);
    
    return result;
    
    function usingCount() {
        return Array(n)
            .fill(0)
            .map((candidate, index) => 
                Math.floor(target / candidates[index]));
    }
    
    function recur(idx, sum, arr) {
        if(sum <= 0) {
            sum === 0 && result.push(arr);
            return;
        }
        
        for(let i=idx; i<n; i++) {
            if(check[i] > 0) {
                check[i]--;
                recur(
                    check[i] === 0 ? i + 1 : i, 
                    sum - candidates[i], 
                    arr.concat(candidates[i])
                );
                check[i]++;
            }
        }
    }
};