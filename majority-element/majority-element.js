/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let count = 0;
    let el = null;
    
    for(const num of nums) {
        if(el === num) {
            count++;
        } else {
            if(count > 0) {
                count--;
                if(count === 0) {
                    el = null;
                }
            } else {
                count++;
                el = num;
            }
        }
    }
    return el;  
};