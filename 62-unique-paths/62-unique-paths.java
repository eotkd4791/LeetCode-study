class Solution {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                dp[i][j] = 1;
            }
        }
        
        for(int i=0; i<m; i++) {
            for(int j=0; j<n; j++) {
                if(isInside(i-1, j-1, m, n)) {
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
                }
            }
        }
        return dp[m-1][n-1];
    }
    
    private boolean isInside(int x, int y, int m, int n) {
        return 0 <= x && x < m && 0 <= y && y < n;
    }
}