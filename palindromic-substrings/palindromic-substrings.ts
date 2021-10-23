function countSubstrings(s: string): number {
    const n = s.length;
    let result: number = 0;
    
    const dp: boolean[][] = JSON.parse(JSON.stringify(
        Array(n).fill(
            Array(n).fill(false)
        )
    ));

    for(let i=0; i<n; i++) {
        dp[i][i] = true;
    }

    for(let i=1; i<n; i++) {
        for(let j=0; j<i; j++) {
            if(i-j < 3) {
                dp[j][i] = s[i] === s[j];
            }
            else {
                dp[j][i] = dp[j+1][i-1] && s[i] === s[j];
            }
        }
    }

    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            dp[i][j] && result++;
        }
    }
    return result;
};