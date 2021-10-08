function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    recur(0, []);
    return result;
    
    function recur(index: number, arr: number[]) {
        result.push(arr);
        
        for(let i=index; i<nums.length; i++) {
            recur(i+1, arr.concat(nums[i]));
        }
    }
};