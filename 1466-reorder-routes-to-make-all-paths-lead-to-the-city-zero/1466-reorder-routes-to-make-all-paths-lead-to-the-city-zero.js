/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function(n, connections) {
    const visit = Array(n).fill(false);
    const graph = JSON.parse(JSON.stringify(Array(n).fill([])));
    const rGraph = JSON.parse(JSON.stringify(Array(n).fill([])));
    let answer = 0;
    
    createGraph();
    recur(0);
    return answer;
    
    function recur(node) {
        visit[node] = true;
        
        for(let i=0; i<graph[node].length; i++) {
            const next = graph[node][i];
            if(!visit[next]) {
                answer++;
                recur(next);
            }
        }
        for(let i=0; i<rGraph[node].length; i++) {
            const rNext = rGraph[node][i];
            if(!visit[rNext]) {
                recur(rNext);
            }
        }
    }
    
    function createGraph() {
        for(const [from, to] of connections) {
            graph[from].push(to);
            rGraph[to].push(from);
        }
    }
};