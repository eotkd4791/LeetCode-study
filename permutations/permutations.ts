function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const n = nums.length;
    const visit: boolean[] = Array(n).fill(false);
    
    recur(0, []);
    return result;
    
    function recur(index: number, arr: number[]) {
        if(arr.length === n) {
            result.push(arr);
            return;
        }
        
        for(let i=0; i<n; i++) {
            if(!visit[i]) {
                visit[i] = true;
                recur(i+1, arr.concat(nums[i]));
                visit[i] = false;
            }
        }
    }
};