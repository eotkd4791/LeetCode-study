/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const LIMIT = 987654321;
    const isInside = (x, y) => 0 <= x && x < m && 0 <= y && y < n;
    
    const dp = JSON.parse(JSON.stringify(
        Array(m).fill(
            Array(n).fill(LIMIT)
        )
    ));
    return recur(m-1, n-1);
    
    function recur(x, y) {
        if(x === 0 && y === 0) {
            return grid[x][y];
        }
        if(dp[x][y] < LIMIT) {
            return dp[x][y];
        }
        if(isInside(x-1, y)) {
            const top = Math.min(recur(x-1, y), dp[x-1][y]) + grid[x][y];
            dp[x][y] = Math.min(dp[x][y], top);
        }
        if(isInside(x, y-1)) {
            const left = Math.min(recur(x, y-1), dp[x][y-1]) + grid[x][y];
            dp[x][y] = Math.min(dp[x][y], left);
        }
        return dp[x][y];
    }
};           