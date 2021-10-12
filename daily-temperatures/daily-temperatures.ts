function dailyTemperatures(temperatures: number[]): number[] {
    const s: number[] = [];
    const result: number[] = Array(temperatures.length).fill(0);
    
    for(let i=0; i<temperatures.length; i++) {
        while(s.length> 0) {
            if(temperatures[s[s.length-1]] >= temperatures[i]) {
                break;
            }
            const index = s.pop();
            result[index] = i - index;
        }
        s.push(i);
    }
    while(s.length > 0) {
        result[s.pop()] = 0;
    }
    return result;  
};