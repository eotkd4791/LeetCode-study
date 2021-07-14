/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    if(n === 0) {
        return [0];
    }
    const isInside = x => x <= n;
    
    const arr = [0, 1];
    for(let i=1; i<=n; i++) {
        if(isInside(i * 2)) {
            arr[i * 2] = arr[i];
        }
        if(isInside(i * 2 + 1)) {
            arr[i * 2 + 1] = arr[i] + 1;   
        }
    }
    return arr;
};