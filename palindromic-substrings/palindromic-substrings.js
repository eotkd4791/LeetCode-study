/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    const dp = makeOneLetterTrue(getInitialArray());
    
    for(let i=1; i<s.length; i++) {
        for(let j=0; j<i; j++) {
            i-j < 3
                ? dp[j][i] = s[i] === s[j]
                : dp[j][i] = dp[j+1][i-1] && s[i] === s[j];
        }
    }
    
    return getAnswer();
    
    function getInitialArray () {
        return JSON.parse(JSON.stringify(
            new Array(s.length).fill(new Array(s.length).fill(false))
        ));
    }
    
    function makeOneLetterTrue(arr) {
        for(let i=0; i<s.length; i++) {
            arr[i][i] = true;
        }
        return arr;
    }
    
    function getAnswer() {
        let result = 0;
        for(let i=0; i<s.length; i++) {
            for(let j=0; j<s.length; j++) {
                if(dp[i][j]) {
                    result++;
                }
            }
        }
        return result;
    }
};