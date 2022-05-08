/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = {};
    const arrive = Array(numCourses).fill(0);
    const depart = Array(numCourses).fill(0);
    const topSort = [];
    for(let vertex =0; vertex<adjList.length;vertex++) {
        if(!visited[vertex]) {
            if(hasCycleDFS(vertex,adjList,visited,arrive, depart,topSort)) return [];
        }
    }
    return topSort;
};

function buildAdjList (n, edges) {
    const adjList = Array.from({ length: n }, () => []);
    for(const edge of edges){
        let[src,dest] = edge;
        adjList[src].push(dest);
    }
    return adjList;
}

function hasCycleDFS(node, adjList, visited, arrive, depart, topSort) {
    arrive[node]++;
    visited[node] = true;
    for(const neighbor of adjList[node]) {
        if(!visited[neighbor]) {
            visited[neighbor] = true;
            if(hasCycleDFS(neighbor,adjList,visited,arrive,depart,topSort)) {
                return true;   
            }
        }
        else if(depart[neighbor] === 0) {
            return true;
        }
    }
    depart[node]++;
    topSort.push(node);
    return false;
}
