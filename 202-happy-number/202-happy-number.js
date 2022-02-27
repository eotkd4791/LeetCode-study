/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const set = new Set();
    
    while(n !== 1) {
        n = n.toString()
             .split('')
             .reduce((acc, cur) => acc + Math.pow(parseInt(cur), 2), 0);
        
        if(set.has(n)) {
            return false;
        }
        
        set.add(n);
    }
    return n === 1;
};