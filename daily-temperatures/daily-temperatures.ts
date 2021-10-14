function dailyTemperatures(temperatures: number[]): number[] {
    const result = [];
    const n = temperatures.length;
    let left = 0;
    let right = 0;
    
    while(left < n) {
        if(temperatures[left] < temperatures[right]) {
            saveTemperature(right - left);
        } else {
            right++;
            right >= n && saveTemperature(0);
        }
    }
    return result;
    
    function saveTemperature(temperature: number): void {
        result.push(temperature);
        setNextIndex();
    }
    function setNextIndex(): void {
        left++;
        right = left;
    }
};