/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    const n = arr.length;
    const answer = Array(n).fill(-1);
    let max = -1;
    
    for(let i=n-1; i>=0; i--) {
        answer[i] = max;
        max = Math.max(arr[i], max);
    }
    return answer;
};