/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    const dp = makeOneLetterTrue(getInitialArray());
    
    for(let j=1; j<s.length; j++) {
        for(let i=0; i<j; i++) {
            if(j-i < 3) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
            }
        }
    }
    
    return getAnswer();
    
    function getInitialArray () {
        return JSON.parse(JSON.stringify(
            new Array(s.length).fill(new Array(s.length).fill(null))
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