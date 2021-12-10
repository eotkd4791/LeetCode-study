function uniquePaths(m: number, n: number): number {
    const dp = createDpTable();
    setBorderToOne();
    setCountOfPaths();

    return dp[m-1][n-1];
    
    function createDpTable(): number[][] {
        return JSON.parse(JSON.stringify(
            Array(m).fill(Array(n).fill(0))
        ));   
    }

    function setBorderToOne() {
        for(let i=0; i<m; i++) {
            dp[i][0] = 1;
        }
        for(let j=0; j<n; j++) {
            dp[0][j] = 1;
        }
    }

    function setCountOfPaths() {
        for(let i=1; i<m; i++) {
            for(let j=1; j<n; j++) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }    
};