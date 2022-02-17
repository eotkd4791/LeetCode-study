/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let answer = s.charAt(0);
    const n = s.length;
    const dp = JSON.parse(
        JSON.stringify(
            Array(n + 1).fill(
                Array(n + 1).fill(false)
            )
        )
    );
    
    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    for(let i = n - 1; i >= 0; i--) {
        for(let j = i; j < n; j++) {
            if(s[i] === s[j]) {
                if(i + 1 === j || dp[i+1][j-1]) {
                    dp[i][j] = true;
                    const tempLongest = s.slice(i, j + 1);
                    if(answer.length < tempLongest.length) {    
                        answer = tempLongest;
                    }
                }
            }
        }
    }
    return answer;
};