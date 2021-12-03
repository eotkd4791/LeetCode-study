/**
 * @param {character[][]} grid
 * @return {number}
 */
const dx = [0,0,-1,1];
const dy = [1,-1,0,0];

const numIslands = function(grid) {
    let result = 0;
    const n = grid.length;
    const m = grid[0].length;
    const isInside = (x, y) => 0 <= x && x < n && 0 <= y && y < m;
    
    const visit = JSON.parse(JSON.stringify(
        Array(n).fill(
            Array(m).fill(false)
        )
    ));
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(!visit[i][j] && grid[i][j] === '1') {
                dfs(i, j);
                result++;
            }
        }
    }
    
    return result;
    
    function dfs(x, y) {
        visit[x][y] = true;
        for(let dir=0; dir<4; dir++) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            if(isInside(nx,ny) && !visit[nx][ny] && grid[nx][ny] === '1') {
                dfs(nx, ny);
            }
        }
    }
};