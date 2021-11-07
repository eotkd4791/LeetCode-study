function majorityElement(nums: number[]): number {
    let count: number = 0;
    let currentMajority: number | null = null;
    
    for(const num of nums) {
        if(count === 0 && currentMajority === null) {
            count = 1;
            currentMajority = num;
        } else if(count === 1) {
            if(num === currentMajority) {
                count++;   
            } else {
                count = 0;
                currentMajority = null;
            }
        } else {
            if(num === currentMajority) {
                count++;   
            } else {
                count--;
            }
        }
    }
    
    return currentMajority;
};