/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    const n = numbers.length;
    let left = 0;
    let right = n-1;
    
    while(left <= right) {
        const valueOfIndex1 = numbers[left];
        const valueOfIndex2 = numbers[right];
        const sum = valueOfIndex1 + valueOfIndex2;
        
        if(sum === target) {
            break;
        }
        target > sum ? left++ : right--;   
    }
    return [left + 1, right + 1];
};