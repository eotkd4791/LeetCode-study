/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    nums.sort((a, b) => {
        if(a === 0) {
            return 1;
        } else if(b === 0) {
            return -1;
        }
        return 0;
    });
};