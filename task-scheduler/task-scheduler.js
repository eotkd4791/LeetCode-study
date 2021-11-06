/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
    const map = new Map();
    let max = 0;
    let often = 0;
    
    for(const task of tasks) {
        const newValue = map.has(task) ? map.get(task) + 1 : 1;
        map.set(task, newValue);
        
        if(max < newValue) {
            max = newValue;
            often = 1;
        } else if(max === newValue) {
            often++;
        }
    }
    
    return Math.max(
        tasks.length, 
        (max - 1) * (n + 1) + often
    );
};