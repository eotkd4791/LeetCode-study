/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
    const result = []; 
    const queue = []; 
    const map = new Map(); 
    const indegrees = Array(numCourses).fill(0);
    
    for(const [course, preReq] of prerequisites) {
        if(map.has(preReq)) map.get(preReq).push(course);
        else map.set(preReq,[course]);
       indegrees[course]++;

    }
    for(let i = 0; i < numCourses; i++) {
        if(indegrees[i] === 0) queue.push(i);
    }
    while(queue.length) {
        const curr = queue.shift();
        if(map.has(curr)) {
             for(let child of map.get(curr)){
                indegrees[child]--;
                if(indegrees[child] == 0) {
                    queue.push(child);
                }
            }
        }
        result.push(curr);
    }
    return result.length === numCourses;
}