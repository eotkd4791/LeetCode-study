function numTrees(n: number): number {
    const dp = createDpTable();
    setNumberOfTree();
    return dp[n];

    function createDpTable(): number[] {
        return Array(n+1).fill(0);
    }

    function setNumberOfTree() {
        dp[0] = dp[1] = 1;
        for(let i=2; i<=n; i++) {
            for(let j=0; j<i; j++) {
                dp[i] += dp[j] * dp[i-j-1];
            }
        }
    }
};